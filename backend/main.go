package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/get", HelloHandler)      // hello.go
	http.HandleFunc("/api/user", QueryHandler) // query.go
	http.HandleFunc("/count", CountHandler)    // count.go
	fmt.Println("Server is listening on 127.0.0.1:8080")
	error := http.ListenAndServe("127.0.0.1:8080", nil)
	if error != nil {
		fmt.Println(error)
	}
}
