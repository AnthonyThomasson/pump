FROM golang:1.21-bookworm as builder

RUN go install github.com/cosmtrek/air@latest
RUN go install github.com/go-delve/delve/cmd/dlv@latest

WORKDIR /server/code
COPY . .
RUN go mod download

WORKDIR /server
RUN mv ./code/go.* ./
CMD ["air", "--build.cmd", "go build -o tmp/main code/main.go", "--build.bin", "tmp/main"]