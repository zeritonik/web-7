package main

import (
	"fmt"
	"net/http"
	"time"
)

type HelloResponse struct {
	Result string `json:"result"`
}

func HelloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("New hello request!")

	// CORS
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	time.Sleep(time.Second * 1)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write([]byte("Hello, web!"))
}
