#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Define application directory
# APP_DIR="/home/ec2-user/travelmate"

# Navigate to the application directory
cd $APP_DIR || exit 1

# Pull the latest Docker image
docker pull ashwinibelure/travelmate-app:latest 

# Stop and remove the existing container if it exists
if docker ps -a --format '{{.Names}}' | grep -q "travelmate-container"; then
  echo "Stopping and removing existing container..."
  docker stop travelmate-container
  docker rm travelmate-container
fi

# Run a new Docker container
docker run -d -p 3000:3000 --name travelmate-container ashwinibelure/travelmate-app:latest

# Verify the container is running
docker ps -a
