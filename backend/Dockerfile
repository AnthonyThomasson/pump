FROM golang:1.21-bookworm as builder
WORKDIR /build
COPY . .
# COPY main.go main.go
# COPY go.* ./
RUN go build -o main .


FROM alpine:3.14
WORKDIR /app
COPY --from=builder /build/main .
EXPOSE 8080
CMD ["./main"]