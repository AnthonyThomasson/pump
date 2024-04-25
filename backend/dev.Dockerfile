FROM golang:1.21-bookworm as builder

RUN go install github.com/cosmtrek/air@v1.49.0
RUN go install github.com/go-delve/delve/cmd/dlv@v1.22.1

WORKDIR /server
COPY . .
RUN go mod download

CMD air -c ./.air.toml