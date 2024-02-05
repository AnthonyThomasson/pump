package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB"),
		os.Getenv("DB_PORT"),
	)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("Failed to connect to the database:", err)
		return
	}
	conn, _ := db.DB()
	defer conn.Close()
	if err := migrate(db); err != nil {
		fmt.Println("Failed to migrate the database:", err)
		return
	}

	r := chi.NewRouter()
	r.Post("/login", func(w http.ResponseWriter, r *http.Request) {
		var credentials Credentials
		err := json.NewDecoder(r.Body).Decode(&credentials)
		if err != nil {
			http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]interface{}{
				"message": "Are you dumb? Thats not json.",
			})
			return
		}

		session, err := login(db, credentials)
		if err != nil {
			http.Error(w, "Invalid credentials", http.StatusUnauthorized)
			json.NewEncoder(w).Encode(map[string]interface{}{
				"message": "Invalid credentials",
			})
			return
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(session)
	})
	fmt.Println("Server is running on port 8080...")
	http.ListenAndServe(":8080", r)
}
