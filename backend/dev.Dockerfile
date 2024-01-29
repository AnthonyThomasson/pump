FROM golang:1.21-bookworm as builder
WORKDIR /code
COPY . .
RUN go install github.com/cosmtrek/air@latest
CMD ["air","--build.cmd", "go build -o /bin/api main.go", "--build.bin", "/bin/api"]