package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type CountBody struct {
	Count int `json:"count"`
}

var count int = 0

func CountHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("New count request!")

	time.Sleep(time.Second * 1)

	// CORS
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET")
	w.Header().Set("Access-Control-Allow-Headers", "content-type")

	if r.Method == "POST" {
		var body CountBody
		e := json.NewDecoder(r.Body).Decode(&body)
		if e != nil {
			http.Error(w, "Это не число!!", http.StatusBadRequest)
			return
		}
		count += body.Count
		return
	} else if r.Method == "GET" {
		body := CountBody{Count: count}
		json.NewEncoder(w).Encode(body)
		return
	} else if r.Method == "OPTIONS" {
		return
	}

	fmt.Println("Not allowed count method: " + r.Method)
	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}
