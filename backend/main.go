package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type Credentials struct {
	Username string `json:"email"`
	Password string `json:"password"`
}

func main() {
	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello, welcome to the Chi web service!!"))
	})

	r.Post("/login", func(w http.ResponseWriter, r *http.Request) {
		var credentials Credentials
		err := json.NewDecoder(r.Body).Decode(&credentials)
		if err != nil {
			fmt.Println("error decoding JSON: ", err)
			http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]interface{}{
				"message": "Are you dumb? Thats not json.",
			})
			return
		}

		// Check if both username and password are provided
		if credentials.Username == "" || credentials.Password == "" {
			fmt.Println("username or password is empty")
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]interface{}{
				"message": "Are you dumb? Enter your username and password.",
			})
			return
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]interface{}{
			"token": "abc123",
			"user": map[string]string{
				"email":     "athomasson.93@gmail.com",
				"firstName": "John",
				"lastName":  "Doe",
			},
		})
	})

	fmt.Println("Server is running on port 8080...")
	http.ListenAndServe(":8080", r)
}
