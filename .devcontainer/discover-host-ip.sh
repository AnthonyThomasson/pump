#!/bin/bash
echo "Gathering you ip for dev container"

ip=`ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | sed 's/inet //g' | awk '/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/{last=$0} END{print last}'`
  
echo "Discovered Host IP: $ip"
echo "REACT_NATIVE_PACKAGER_HOSTNAME=$ip" > .devcontainer/.env
echo "HOST_IP=$ip" > app/.env.local
echo "Configured REACT_NATIVE_PACKAGER_HOSTNAME"