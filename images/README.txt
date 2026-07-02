This folder is for local image assets.

The site currently loads its photos from remote Unsplash URLs (see the
<img> and background tags in index.html). If you want the site to be fully
self-contained (no external image dependency), download each photo into this
folder and update the matching src="..." in index.html to a local path, e.g.:

  src="images/hero.jpg"

Recommended files to add if you localize:
  hero.jpg          - hero background (treatment room)
  about.jpg         - about section (oils & towels)
  signature-1.jpg   - Warm Hearth Ritual (warm stones)
  signature-2.jpg   - Lymphatic Lightness Therapy (neck/shoulder)
  experience-bg.jpg - "Nara Difference" band background

Fonts are loaded from Google Fonts and the map from Google Maps; those remain
external by design.
