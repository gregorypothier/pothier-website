#!/bin/bash
echo "Killing current instance..."
cd /home/gpothier/
docker rm -f $(docker ps -aq) >/dev/null 2>&1 || true
docker system prune -f 