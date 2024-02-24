package services

import (
	"math/rand"
	"strconv"
	"time"

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

func Migrate(db *gorm.DB) error {
	err := db.AutoMigrate(&Customer{}, &Operator{}, &Session{})
	if err != nil {
		return err
	}

	err = seedCustomers(db, 10)
	if err != nil {
		return err
	}

	err = seedOperators(db, 5)
	if err != nil {
		return err
	}
	return nil
}

// Function to seed customers
func seedCustomers(db *gorm.DB, count int) error {
	var countCustomers int64
	db.Model(&Customer{}).Count(&countCustomers)
	if countCustomers == 0 {
		customers := []Customer{
			{FirstName: "John", LastName: "Doe", Email: "john@example.com", Password: "apple", PhoneNumber: "1234567890"},
			{FirstName: "Jane", LastName: "Smith", Email: "jane@example.com", Password: "blue", PhoneNumber: "0987654321"},
			{FirstName: "Alice", LastName: "Johnson", Email: "alice@example.com", Password: "cat", PhoneNumber: "5554443333"},
			{FirstName: "Bob", LastName: "Brown", Email: "bob@example.com", Password: "dog", PhoneNumber: "1112223333"},
			{FirstName: "Emma", LastName: "Wilson", Email: "emma@example.com", Password: "egg", PhoneNumber: "9998887777"},
			{FirstName: "Michael", LastName: "Davis", Email: "michael@example.com", Password: "fish", PhoneNumber: "7778889999"},
			{FirstName: "Olivia", LastName: "Martinez", Email: "olivia@example.com", Password: "goat", PhoneNumber: "3332221111"},
			{FirstName: "William", LastName: "Taylor", Email: "william@example.com", Password: "hat", PhoneNumber: "6665554444"},
			{FirstName: "Sophia", LastName: "Anderson", Email: "sophia@example.com", Password: "ink", PhoneNumber: "2223334444"},
			{FirstName: "James", LastName: "Thomas", Email: "james@example.com", Password: "jazz", PhoneNumber: "4445556666"},
		}

		// Create all customers in a single command
		result := db.Create(&customers)
		if result.Error != nil {
			return result.Error
		}
	}
	return nil
}

// Function to seed operators
func seedOperators(db *gorm.DB, count int) error {
	var countOperators int64
	db.Model(&Operator{}).Count(&countOperators)
	if countOperators == 0 {
		operators := []Operator{
			{FirstName: "John", LastName: "Doe", BusinessName: "Doe Enterprises", Email: "john@example.com", Password: "apple", PhoneNumber: "1234567890"},
			{FirstName: "Jane", LastName: "Smith", BusinessName: "Smith Co.", Email: "jane@example.com", Password: "blue", PhoneNumber: "0987654321"},
			{FirstName: "Alice", LastName: "Johnson", BusinessName: "Johnson Corp", Email: "alice@example.com", Password: "cat", PhoneNumber: "5554443333"},
			{FirstName: "Bob", LastName: "Brown", BusinessName: "Brown Holdings", Email: "bob@example.com", Password: "dog", PhoneNumber: "1112223333"},
			{FirstName: "Emma", LastName: "Wilson", BusinessName: "Wilson Industries", Email: "emma@example.com", Password: "egg", PhoneNumber: "9998887777"},
			{FirstName: "Michael", LastName: "Davis", BusinessName: "Davis Group", Email: "michael@example.com", Password: "fish", PhoneNumber: "7778889999"},
			{FirstName: "Olivia", LastName: "Martinez", BusinessName: "Martinez Enterprises", Email: "olivia@example.com", Password: "goat", PhoneNumber: "3332221111"},
			{FirstName: "William", LastName: "Taylor", BusinessName: "Taylor Corporation", Email: "william@example.com", Password: "hat", PhoneNumber: "6665554444"},
			{FirstName: "Sophia", LastName: "Anderson", BusinessName: "Anderson Corp", Email: "sophia@example.com", Password: "ink", PhoneNumber: "2223334444"},
			{FirstName: "James", LastName: "Thomas", BusinessName: "Thomas Ltd", Email: "james@example.com", Password: "jazz", PhoneNumber: "4445556666"},
		}

		// Create all operators in a single command
		result := db.Create(&operators)
		if result.Error != nil {
			return result.Error
		}
	}
	return nil
}

// Function to generate a random name
func getRandomName() string {
	names := []string{"John", "Jane", "Michael", "Emily", "David", "Sarah", "Christopher", "Jessica"}
	return names[rand.Intn(len(names))]
}

// Function to generate a random phone number
func getRandomPhoneNumber() string {
	// Generate a random 9-digit number
	rand.Seed(time.Now().UnixNano())
	number := rand.Intn(999999999-100000000) + 100000000
	return strconv.Itoa(number)
}
