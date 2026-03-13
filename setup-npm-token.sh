#!/usr/bin/env bash
set -euo pipefail

REPO="windmill-labs/windmill-whitelabelling-react-webpack"
URL="https://www.npmjs.com/settings/rubenfiszel/tokens/granular-access-tokens/new"

echo "=== NPM Token Setup for GitHub Actions ==="
echo ""
echo "npm requires passkey/2FA via browser to create tokens."
echo ""
echo "Opening: $URL"
echo ""
echo "Create a token with:"
echo "  - Type:        Granular Access Token"
echo "  - Name:        CI: $REPO"
echo "  - Expiration:  90 days"
echo "  - Packages:    Only select packages -> @windmill-labs/windmill-react-sdk"
echo "  - Permissions: Read-only"
echo ""

if command -v xdg-open &>/dev/null; then
  xdg-open "$URL" 2>/dev/null
elif command -v open &>/dev/null; then
  open "$URL" 2>/dev/null
fi

read -rsp "Paste the token here: " TOKEN
echo ""

if [ -z "$TOKEN" ]; then
  echo "ERROR: No token provided."
  exit 1
fi

TRUNCATED="${TOKEN:0:8}...${TOKEN: -4}"

echo "Setting NPM_TOKEN secret on $REPO..."
gh secret set NPM_TOKEN -R "$REPO" <<< "$TOKEN"

echo ""
echo "=== Summary ==="
echo "  token:        $TRUNCATED"
echo "  github repo:  $REPO"
echo "  secret name:  NPM_TOKEN"
echo ""
echo "Done! CI can now install private @windmill-labs packages."
