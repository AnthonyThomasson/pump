package main

import (
	"net/http"
	"fmt"
	"github.com/go-chi/chi/v5"
)

func main() {
	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello, welcome to the Chi web service!"))
	})

	r.Get("/hello/{name}", func(w http.ResponseWriter, r *http.Request) {
		name := chi.URLParam(r, "name")
		w.Write([]byte("Hello, " + name + "!"))
	})

	fmt.Println("Server is running on port 8080...")
	http.ListenAndServe(":8080", r)
}
