FROM golang:1.21-bookworm as builder

RUN go install github.com/cosmtrek/air@latest
RUN go install github.com/go-delve/delve/cmd/dlv@latest

WORKDIR /server
COPY . .
RUN go mod download

CMD air -c ./.air.toml