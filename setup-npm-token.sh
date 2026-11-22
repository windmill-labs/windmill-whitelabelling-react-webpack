#!/usr/bin/env bash
set -euo pipefail

REPO="windmill-labs/windmill-whitelabelling-react-webpack"
PACKAGE="@windmill-labs/windmill-react-sdk"
URL="https://www.npmjs.com/settings/~/tokens/granular-access-tokens/new"

echo "=== NPM Token Setup for GitHub Actions ==="
echo ""
echo "npm requires passkey/2FA via browser to create tokens."
echo ""
echo "Opening: $URL"
echo ""
echo "Create a token with:"
echo "  - Type:        Granular Access Token"
echo "  - Name:        CI: $REPO"
echo "  - Expiration:  Custom, as far out as npm allows"
echo "  - Packages:    Only select packages -> $PACKAGE"
echo "  - Permissions: Read-only (npm caps tokens with write access at 90 days)"
echo "  - Bypass 2FA:  No"
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

echo "Checking that the token can read $PACKAGE..."
# Outside the repo and without ~/.npmrc, so that only the pasted token can authenticate.
CHECK_DIR="$(mktemp -d)"
trap 'rm -rf "$CHECK_DIR"' EXIT
echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > "$CHECK_DIR/npmrc"
if ! (cd "$CHECK_DIR" && NPM_TOKEN="$TOKEN" npm view "$PACKAGE" name \
  --userconfig "$CHECK_DIR/npmrc" --cache "$CHECK_DIR/cache" --prefer-online > /dev/null); then
  echo "ERROR: this token cannot read $PACKAGE. The secret was left unchanged."
  exit 1
fi

echo "Setting NPM_TOKEN secret on $REPO..."
printf '%s' "$TOKEN" | gh secret set NPM_TOKEN -R "$REPO"

echo ""
echo "=== Summary ==="
echo "  github repo:  $REPO"
echo "  secret name:  NPM_TOKEN"
echo ""
echo "Done! CI can now install private @windmill-labs packages."
