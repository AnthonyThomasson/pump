package main

import (
	"gorm.io/gorm"
)

type Customer struct {
	gorm.Model
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	Email       string `gorm:"unique;" json:"email"`
	Password    string `json:"password"`
	PhoneNumber string `json:"phone_number"`
}

type Operator struct {
	gorm.Model
	FirstName    string `json:"first_name"`
	LastName     string `json:"last_name"`
	BusinessName string `json:"business_name"`
	Email        string `gorm:"unique;not null" json:"email"`
	Password     string `json:"password"`
	PhoneNumber  string `json:"phone_number"`
}

type Session struct {
	gorm.Model
	Token      string   `gorm:"unique;not null" json:"token"`
	CustomerId uint     `json:"customer_id"`
	Customer   Customer `json:"customer"`
	OperatorId uint     `json:"operator_id"`
	Operator   Operator `json:"operator"`
}

func migrate(db *gorm.DB) error {
	return db.AutoMigrate(&Customer{}, &Operator{}, &Session{})
}
