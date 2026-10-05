# Asset Register

All assets used in this project are tracked below with their source and license.

## Visual Assets

### Porsche 911 GT3 Silhouette Vector

- File: components/CarVisual.tsx
- Description: Hand-crafted Scalable Vector Graphics (SVG) side profile illustration of a modern Porsche 911 GT3 coupe.
- Format: Inline SVG (Scalable Vector Graphics)
- Dimensions: 900px by 280px (viewBox: 0 0 900 280)
- Size: Under 10 KB
- Author: Project repository author
- License: Creative Commons Zero (CC0) Public Domain Dedication

### Favicon

- Files: app/favicon.ico, app/icon.svg, public/favicon.ico, public/icon.svg
- Description: Minimalist car silhouette icon on dark background, amber accent.
- Author: Project repository author
- License: Creative Commons Zero (CC0) Public Domain Dedication

## Statistics Sources (Section 6, Option B)

The three hero statistics are published technical specifications for the Porsche 911 GT3 (992 generation).

- 0 to 60 mph in 3.2 s: Porsche 911 GT3, PDK transmission, official technical data
- Top track speed 197 mph: Official Porsche 911 GT3 technical data
- Aerodynamic drag coefficient 0.34 Cd: Official Porsche 911 GT3 technical data
- Source URL: https://www.porsche.com/usa/models/911/911-gt3-models/911-gt3/

## Performance Measurements (Section 7, Option A reference)

Measured on development server (localhost:3000) on October 5, 2026.

- Network requests on page load: 28 (dev mode, includes Hot Module Replacement scripts)
- Transferred size (dev): 926 KB (dev mode, uncompressed; production with gzip is approximately 4x smaller)
- DOMContentLoaded: 184 ms
- Load: 486 ms

Lighthouse scores and scroll FPS are to be measured on the live production URL after Phase 8 deployment (GitHub Pages with HTTPS).

## Fonts

- Inter (variable): loaded via next/font from Google Fonts CDN at build time, self-hosted in the static export. No external font requests at runtime.
