#!/bin/bash
set -e

# Stop and remove the running container
docker stop travelmate-container || true
docker rm travelmate-container || true

# Remove old image (optional)
docker rmi travelmate || true
