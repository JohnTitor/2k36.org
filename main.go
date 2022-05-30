package main

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"github.com/shurcooL/githubv4"
	"golang.org/x/oauth2"
)

var query struct {
	User struct {
		Sponsorable struct {
			Sponsors struct {
				TotalCount githubv4.Int
				Nodes []sponsor
			} `graphql:"sponsors(first: 30)" json:"sponsors"`
		} `graphql:"... on Sponsorable" json:"sponsorable"`
	} `graphql:"user(login: \"JohnTitor\")" json:"user"`
}

type sponsor struct {
	User struct {
		Login string `json:"username"`
		AvatarURL string `graphql:"avatarUrl(size: 40)" json:"avatarUrl"`
	} `graphql:"... on User" json:"user"`
}

func main() {
	log.Println("Updating sponsors metadata...")
	src := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("GITHUB_TOKEN")},
	)
	httpClient := oauth2.NewClient(context.Background(), src)

	client := githubv4.NewClient(httpClient)
	err := client.Query(context.Background(), &query, nil)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Authentication succeeded")

	file, err := os.Create("./data/sponsors.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	encoder := json.NewEncoder(file)
	encoder.SetEscapeHTML(false)
	err = encoder.Encode(query)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Completed to update")
}
