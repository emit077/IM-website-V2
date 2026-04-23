#!/usr/bin/env sh
# Deploy static export for Indian Mentors / IM-website-V2
# - Next.js output: ./out (output: "export" in next.config)
# - GitHub Pages: https://<user>.github.io/IM-website-V2/  (basePath when GITHUB_ACTIONS=true)
#
# Usage (from repo root):
#   chmod +x deploy.sh && ./deploy.sh
#
# Optional: push the same build to S3 (credentials via env, never commit keys):
#   export AWS_DEFAULT_REGION=ap-south-1
#   export S3_BUCKET=your-bucket-name
#   ./deploy.sh

set -e
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT"

# Production-style paths for GitHub Pages (matches CI and next.config.ts)
export GITHUB_ACTIONS=true

echo "Building static site → out/"
npm run build

OUT="$ROOT/out"
if [ ! -d "$OUT" ] || [ ! -f "$OUT/index.html" ]; then
  echo "error: $OUT is missing or empty after build" >&2
  exit 1
fi

# Jekyll on GitHub Pages can ignore _next; this keeps static assets working
touch "$OUT/.nojekyll"

# Optional: sync to S3 (no keys in this file)
if [ -n "${S3_BUCKET:-}" ]; then
  if ! command -v aws >/dev/null 2>&1; then
    echo "error: aws CLI not found; install or unset S3_BUCKET" >&2
    exit 1
  fi
  echo "Syncing to s3://$S3_BUCKET/"
  aws s3 sync "$OUT/" "s3://$S3_BUCKET/" --delete
fi

# Push ./out to remote branch github-pages (same as .github/workflows/deploy-pages.yml)
ORIGIN=$(git -C "$ROOT" remote get-url origin 2>/dev/null) || {
  echo "error: no git remote 'origin' — set it to this repo, e.g." >&2
  echo "  git remote add origin https://github.com/emit077/IM-website-V2.git" >&2
  exit 1
}
BRANCH=${GITHUB_PAGES_BRANCH:-github-pages}

echo "Publishing $OUT to origin $BRANCH"
cd "$OUT"
rm -rf .git
git init -b "$BRANCH"
git add -A
git commit -m "Deploy static site $(date -u +%Y-%m-%dT%H:%MZ)"
git remote add origin "$ORIGIN"
git push -f origin "HEAD:refs/heads/$BRANCH"
cd "$ROOT"
rm -rf "$OUT/.git"

echo "Done. Pages branch: $BRANCH (ensure Settings → Pages uses this branch, root folder)."
