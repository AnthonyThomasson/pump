FROM golang:1.21-bookworm as builder
WORKDIR /code
COPY . .
RUN go install github.com/cosmtrek/air@latest
RUN go install github.com/go-delve/delve/cmd/dlv@latest
CMD ["air","--build.cmd", "go build -o /tmp/bin/main main.go", "--build.bin", "/tmp/bin/main"]