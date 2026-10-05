# Scroll Driven Motion

A scroll-driven animation hero section where the car moves proportionally to page scroll distance. Stack: Next.js and GSAP ScrollTrigger.

## What it does

The hero section pins in place while the user scrolls. A Porsche 911 GT3 side-view SVG graphic translates horizontally across the viewport in exact proportion to scroll offset. Reversing scroll reverses the motion. The headline and stats rows enter on page load with a timed sequence. Accessibility is handled: with reduced motion turned on in the operating system the layout renders statically.

## How to run locally

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

4. Build the static export:

```bash
npm run build
```

The static files will be written to `out/`. This directory can be served directly from GitHub Pages.

## Verify the build

Run the automated check script after building:

```bash
python scripts/check.py
```

The script exits with a failure code if any banned pattern is found (em or en dashes, emoji, banned copy words, pill-shaped button classes, custom cursor code).

## Stack

- Next.js 16 with App Router, TypeScript, static export configured for GitHub Pages
- React 19
- Tailwind CSS 3 for layout and typography
- GSAP 3 with ScrollTrigger plugin and the @gsap/react useGSAP hook for all animation
- Inter variable font, self-hosted via next/font

## Statistics in the hero

Three verified statistics from official Porsche 911 GT3 technical specifications:

- 3.2 s: 0 to 60 mph with PDK transmission
- 197 mph: top track speed
- 0.34 Cd: aerodynamic drag coefficient

Source: https://www.porsche.com/usa/models/911/911-gt3-models/911-gt3/

## Live URL

To be added after Phase 8 deployment.

## Structure

```
app/           Next.js App Router pages and layout
components/    Hero, CarVisual, ExplainerSection, Footer components
public/        Static assets (favicon, icon)
scripts/       check.py verification script
ASSETS.md      Asset and statistics source register
```
