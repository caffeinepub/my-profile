#!/bin/bash
set -e

# Print Frontend URL Script
# Outputs the deployed frontend canister URL

# Detect network (default to local)
NETWORK="${1:-local}"

if [ "$NETWORK" = "ic" ] || [ "$NETWORK" = "mainnet" ]; then
  # Mainnet URL
  CANISTER_ID=$(dfx canister id frontend --network ic 2>/dev/null || echo "")
  if [ -z "$CANISTER_ID" ]; then
    echo "❌ Frontend canister not deployed to mainnet"
    exit 1
  fi
  URL="https://${CANISTER_ID}.icp0.io"
else
  # Local URL
  CANISTER_ID=$(dfx canister id frontend 2>/dev/null || echo "")
  if [ -z "$CANISTER_ID" ]; then
    echo "❌ Frontend canister not found. Run 'dfx deploy' first."
    exit 1
  fi
  URL="http://${CANISTER_ID}.localhost:4943"
fi

echo ""
echo "🌐 Frontend URL:"
echo "   $URL"
echo ""
