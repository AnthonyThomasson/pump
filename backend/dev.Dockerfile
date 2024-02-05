FROM golang:1.21-bookworm as builder

RUN go install github.com/cosmtrek/air@latest
RUN go install github.com/go-delve/delve/cmd/dlv@latest

WORKDIR /server/code
COPY . .
RUN go mod download

WORKDIR /server
RUN cp ./code/go.* ./

CMD air -c ./code/.air.toml