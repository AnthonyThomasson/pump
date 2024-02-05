package main

import (
	"errors"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Credentials struct {
	Username string `json:"email"`
	Password string `json:"password"`
}

func login(db *gorm.DB, creds Credentials) (*Session, error) {
	var customer Customer
	err := db.Where("username = ? AND password = ?", creds.Username, creds.Password).First(&customer).Error
	if err == nil {
		session := Session{
			Customer: customer,
			Token:    uuid.New().String(),
		}
		db.Create(&session)
		return &session, nil
	}

	var operator Operator
	err = db.Where("username = ? AND password = ?", creds.Username, creds.Password).First(&operator).Error
	if err == nil {
		session := Session{
			Operator: operator,
			Token:    uuid.New().String(),
		}
		db.Create(&session)
		return &session, nil
	}

	return nil, errors.New("Invalid credentials")
}
