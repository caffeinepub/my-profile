#!/bin/bash
set -e

# Complete Deployment Script
# Builds frontend, deploys canisters, and prints URL

echo "🚀 Starting deployment..."
echo ""

# Detect network from arguments
NETWORK="local"
if [[ "$*" == *"--network ic"* ]] || [[ "$*" == *"--network=ic"* ]]; then
  NETWORK="ic"
fi

# Step 1: Build frontend
echo "Step 1/3: Building frontend"
./frontend/scripts/build-frontend.sh
echo ""

# Step 2: Deploy canisters
echo "Step 2/3: Deploying canisters"
if [ "$NETWORK" = "ic" ]; then
  dfx deploy --network ic
else
  dfx deploy
fi
echo ""

# Step 3: Print URL
echo "Step 3/3: Deployment complete!"
./frontend/scripts/print-frontend-url.sh "$NETWORK"

echo "✅ All done! Open the URL above to view your app."
