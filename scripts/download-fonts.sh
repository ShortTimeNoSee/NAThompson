#!/usr/bin/env bash
# Downloads IBM Plex Serif and IBM Plex Mono WOFF2 subsets (Latin) from npm.
# Run once during initial setup: npm run fonts
# Fonts are committed to the repo so no external requests occur at build time.

set -euo pipefail

FONTS_DIR="src/assets/fonts"
SERIF_DIR="$FONTS_DIR/ibm-plex-serif"
MONO_DIR="$FONTS_DIR/ibm-plex-mono"

echo "Creating font directories..."
mkdir -p "$SERIF_DIR" "$MONO_DIR"

# Use npx to fetch font files from the @ibm/plex package without installing globally
TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

echo "Installing @ibm/plex to temp dir..."
cd "$TMPDIR"
npm install --silent @ibm/plex
cd - > /dev/null

IBM_PLEX="$TMPDIR/node_modules/@ibm/plex"

echo "Copying IBM Plex Serif WOFF2 files..."
SERIF_SRC="$IBM_PLEX/IBM-Plex-Serif/fonts/split/woff2"
cp "$SERIF_SRC/IBMPlexSerif-Regular-Latin1.woff2" "$SERIF_DIR/IBMPlexSerif-Regular.woff2"
cp "$SERIF_SRC/IBMPlexSerif-Italic-Latin1.woff2"  "$SERIF_DIR/IBMPlexSerif-Italic.woff2"
cp "$SERIF_SRC/IBMPlexSerif-Bold-Latin1.woff2"    "$SERIF_DIR/IBMPlexSerif-Bold.woff2"
cp "$SERIF_SRC/IBMPlexSerif-BoldItalic-Latin1.woff2" "$SERIF_DIR/IBMPlexSerif-BoldItalic.woff2"

echo "Copying IBM Plex Mono WOFF2 files..."
MONO_SRC="$IBM_PLEX/IBM-Plex-Mono/fonts/split/woff2"
cp "$MONO_SRC/IBMPlexMono-Regular-Latin1.woff2"   "$MONO_DIR/IBMPlexMono-Regular.woff2"
cp "$MONO_SRC/IBMPlexMono-Italic-Latin1.woff2"    "$MONO_DIR/IBMPlexMono-Italic.woff2"

echo ""
echo "Done. Font files:"
find "$FONTS_DIR" -name "*.woff2" | sort
echo ""
echo "Commit these files to the repository. They are served locally with no external requests."
