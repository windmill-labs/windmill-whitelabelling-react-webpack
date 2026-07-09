#!/usr/bin/env bash
#
# Install deps in this repo even though .npmrc pins the registry auth token to
# ${NPM_TOKEN}. It reuses the token that `npm login` already wrote to ~/.npmrc
# (read directly from the file, since modern npm refuses to expose it via
# `npm config get`), exports it as NPM_TOKEN, and runs npm install.
#
# Usage: ./npm-install.sh [extra npm args...]
set -euo pipefail

cd "$(dirname "$0")"

if [[ -z "${NPM_TOKEN:-}" ]]; then
  npmrc="${HOME}/.npmrc"

  # Grab the registry.npmjs.org auth token line and strip everything up to '='.
  token="$(grep -E '^//registry\.npmjs\.org/:_authToken=' "$npmrc" 2>/dev/null \
             | head -n1 | cut -d= -f2- || true)"

  if [[ -z "$token" || "$token" == *'${NPM_TOKEN}'* ]]; then
    echo "error: no usable npm auth token in $npmrc." >&2
    echo "  Run 'npm login', or 'export NPM_TOKEN=<token>' before this script." >&2
    exit 1
  fi

  export NPM_TOKEN="$token"
fi

echo "Running npm install with NPM_TOKEN set..."
exec npm install "$@"
