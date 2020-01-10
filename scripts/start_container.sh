#!/bin/bash
echo "Start docker images..."
cd /home/gpothier/
docker-compose up --build -d > app.log 2>&1