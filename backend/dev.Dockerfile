FROM golang:1.21-bookworm as builder

RUN go install github.com/cosmtrek/air@latest
RUN go install github.com/go-delve/delve/cmd/dlv@latest

WORKDIR /server/code
COPY . .
RUN go mod download

WORKDIR /server
RUN cp ./code/go.* ./
# dlv exec --headless --listen :4040 tmp/main
# CMD ["dlv", "exec", "--headless", "--listen", ":4040", "tmp/main"]
# dlv exec --listen :4040 --accept-multiclient --allow-non-terminal-interactive --api-version 2 --headless --log tmp/main
# CMD ["dlv", "exec", "--listen", ":4040", "--accept-multiclient", "--allow-non-terminal-interactive", "--api-version", "2", "--headless", "--log", "tmp/main"]

# CMD ["air", "--build.cmd", "go build -gcflags=\"all=-N -l\" -o tmp/main code/main.go", "--build.bin", "tmp/main"]
# CMD ["air", "--build.cmd", "go build -gcflags=\"all=-N -l\" -o tmp/main code/main.go", "--build.bin", "tmp/main","--build.full_bin","<<<ENTER DELV>>>"]



# CMD ["dlv", "debug", "code/main.go", "--headless", "--listen=:12345", "--accept-multiclient","--continue" ]
# CMD ["air", "--build.cmd","go build -gcflags=\"all=-N -l\" -o tmp/main code/main.go","--build.full_bin", "dlv exec --headless --listen=:12345 --accept-multiclient --continue tmp/main"]
CMD air -c ./code/.air.toml