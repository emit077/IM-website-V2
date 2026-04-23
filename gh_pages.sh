#!/usr/bin/env sh
# Push static export to GitHub Pages for IM-website-V2
# Repo: https://github.com/emit077/IM-website-V2
# Pages branch: github-pages (Settings → Pages → Deploy from branch)
set -e

ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT"

export GITHUB_ACTIONS=true
echo "Building Next.js static export → out/"
npm run build

OUT="$ROOT/out"
cd "$OUT"
touch .nojekyll

REMOTE="${GH_PAGES_REMOTE:-git@github.com:emit077/IM-website-V2.git}"
BRANCH="${GITHUB_PAGES_BRANCH:-github-pages}"

echo "Publishing to $REMOTE (branch: $BRANCH)"
rm -rf .git
git init -b "$BRANCH"
git add -A
git commit -m "Deploy static site $(date -u +%Y-%m-%dT%H:%MZ)"
git remote add origin "$REMOTE"
git push -f origin "HEAD:refs/heads/$BRANCH"

cd "$ROOT"
rm -rf "$OUT/.git"

echo "Done. Site: https://emit077.github.io/IM-website-V2/"
