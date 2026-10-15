#!/bin/sh
# Render store images: sh render.sh  (from this folder)
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
OUT="$(cd .. && pwd -W)"
SRC="$(pwd -W)"
r() { timeout 90 "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=$2 --screenshot="$OUT/$3" "file:///$SRC/$1" 2>/dev/null; }
r 01-hero.html 1280,800 01-hero-1280x800.png
r 02-copy-save.html 1280,800 02-copy-save-1280x800.png
r promo-small.html 440,280 promo-small-440x280.png
r promo-marquee.html 1400,560 promo-marquee-1400x560.png
