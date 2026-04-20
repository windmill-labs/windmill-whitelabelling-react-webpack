#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 <version>"
  echo "Example: $0 1.677.1"
  exit 1
fi

VERSION="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

npm install --save-exact "@windmill-labs/windmill-react-sdk@${VERSION}"

DOCS_FILE="$(mktemp)"
trap 'rm -f "$DOCS_FILE"' EXIT
./generate-api-docs.sh > "$DOCS_FILE"

DOCS_FILE="$DOCS_FILE" python3 - "$SCRIPT_DIR/README.md" <<'PYEOF'
import os, re, sys

readme_path = sys.argv[1]
with open(os.environ["DOCS_FILE"]) as f:
    docs = f.read().rstrip("\n")

with open(readme_path) as f:
    readme = f.read()

replacement = f"<!-- API_REFERENCE_START -->\n{docs}\n<!-- API_REFERENCE_END -->"
new = re.sub(
    r"<!-- API_REFERENCE_START -->.*?<!-- API_REFERENCE_END -->",
    lambda _: replacement,
    readme,
    flags=re.DOTALL,
)

with open(readme_path, "w") as f:
    f.write(new)
PYEOF

echo "Updated windmill-react-sdk to ${VERSION} and regenerated API docs in README.md"
