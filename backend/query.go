package main

import (
	"fmt"
	"net/http"
	"time"
)

func QueryHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("New query request!")

	time.Sleep(time.Second * 1)

	// CORS
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	name := r.URL.Query().Get("name")
	if name == "" {
		http.Error(w, "No name passed", http.StatusBadRequest)
		return
	}
	w.Write([]byte("Hello, " + name + "!"))
}
