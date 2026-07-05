#!/bin/bash
# Double-click on macOS (or run: bash deploy.command) to publish the site to Vercel.
cd "$(dirname "$0")"
echo "Deploying Menaya BeYom to Vercel..."
echo "(first run opens a browser once to log in, then publishes)"
npx --yes vercel@latest deploy --prod
