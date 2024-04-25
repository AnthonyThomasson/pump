FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Install Tools
RUN yarn global add depcheck

# Install Docker CLI
RUN apt-get update && \
	apt-get install -y docker.io

# Install Go
RUN curl -O https://dl.google.com/go/go1.21.6.linux-arm64.tar.gz && \
	tar -xvf go1.21.6.linux-arm64.tar.gz && \
	mv go /usr/local
ENV PATH="/usr/local/go/bin:${PATH}"
RUN go install golang.org/x/tools/gopls@v0.15.3
RUN go install mvdan.cc/gofumpt@v0.5.0
RUN go install github.com/go-delve/delve/cmd/dlv@v1.22.1

RUN mkdir -p /workspaces/pump
WORKDIR /workspaces/pump
