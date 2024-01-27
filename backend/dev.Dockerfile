FROM golang:1.21-bookworm as builder
WORKDIR /build
COPY . .
CMD ["go", "run", "main.go"]