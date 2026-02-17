#!/bin/bash
set -e

# Build Frontend Script
# Creates production build with timestamp identifier

echo "🔨 Building frontend..."

# Generate build timestamp (UTC)
BUILD_TIME=$(date -u +"%Y-%m-%d %H:%M UTC")
export VITE_BUILD_ID="$BUILD_TIME"

echo "📦 Build identifier: $BUILD_TIME"

# Navigate to frontend directory
cd "$(dirname "$0")/.."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📥 Installing dependencies..."
  pnpm install
fi

# Generate backend bindings
echo "🔗 Generating backend bindings..."
cd ..
dfx generate backend
cd frontend

# Build frontend
echo "🏗️  Building production assets..."
pnpm run build:skip-bindings

echo "✅ Frontend build complete!"
echo "📂 Output: frontend/dist/"
