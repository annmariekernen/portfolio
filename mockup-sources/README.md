# Mockup sources

These are the real HTML/CSS files behind the case-study screenshots in `assets/images/`. Each one is a self-contained page — open it directly in a browser to see and edit it live (just double-click, or drag it into a browser tab).

| Source | Renders to |
|---|---|
| `procedures-updater-feed.html` | `assets/images/procedures-updater-feed.png` |
| `procedures-updater-review.html` | `assets/images/procedures-updater-review.png` |
| `procedures-updater-flow.html` | `assets/images/procedures-updater-flow.png` |

## Editing by hand

Open the file in any code editor, change the HTML/CSS, then open it in a browser (Chrome, Safari, whatever) to preview. Nothing to build or install — it's plain HTML/CSS/inline SVG.

## Turning an edit into a new PNG

Once you're happy with a change, re-render it to a PNG at 2x resolution (crisp on retina screens) with headless Chrome from Terminal:

```bash
cd ~/portfolio/mockup-sources

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --force-device-scale-factor=2 \
  --window-size=1060,950 \
  --screenshot=../assets/images/procedures-updater-flow.png \
  --default-background-color=FFFFFFFF \
  "file://$(pwd)/procedures-updater-flow.html"
```

Swap the filename and `--window-size` for whichever mockup you're rendering (the feed table used `1100,700`ish, the review diff used `1180,440`ish — Chrome captures exactly the viewport size you give it, so if your edit changes the content's height, bump the height up, screenshot, then crop off any extra white space at the bottom — e.g. with Preview.app's markup tool, or `sips`/Python Pillow if you're comfortable in Terminal).

Then just drop the new PNG into `assets/images/` with the same filename to replace the old one — the case study page already points at that path, so no HTML changes needed there.
