# PRD (Product Requirements Document): Scroll-Driven Hero Section

Owner: Shreyash Londhe
IDE (Integrated Development Environment): Antigravity
Status: Ready to build

## 1. Goal

Build one hero section where the main visual moves in direct proportion to scroll position, with a calm load animation and measured, real statistics. It is graded on motion quality, smoothness and interaction logic, so the build is judged on how it feels, not on how much it contains.

Reference demo from the assignment: paraschaturvedi.github.io/car-scroll-animation. Study the behaviour only. Do not copy its code, images or text.

## 2. Hard rules (read before every task)

These apply to every file the agent writes. If a task conflicts with a rule, stop and ask.

Design bans:
- No purple gradients. No gradients as a main visual device at all.
- No pill-shaped buttons. Button corner radius stays at 4px to 8px.
- No emoji, and no emoji used as icons. Icons are Scalable Vector Graphics (SVG) only, and only if needed.
- No cursor animation, custom cursors or cursor followers.
- No over-the-top scroll effects: no parallax stacks, no 3D tilt, no horizontal hijacking, no scroll-jacking, no particles.
- No AI-generated photos or illustrations.

Content bans:
- No fake reviews, fake testimonials, fake logos of customers or fake customer counters.
- No fake metrics. Every number on the page must be measured or sourced (see section 6).
- No vague hero text such as "Elevate your experience" or "The future of X". Copy must say what the thing is and does.
- No AI-sounding copy: no "seamless", "unlock", "revolutionize", "next-level", "cutting-edge", "game-changing".
- No em dashes or en dashes anywhere, in code comments, copy or Markdown. Use a comma, a colon, a full stop or the word "to".

Launch blockers (do not ship until all are true):
- Custom domain connected, Hypertext Transfer Protocol Secure (HTTPS) enforced.
- Favicon added and rendering in the browser tab.
- AI-made tag removed (see section 9).
- Privacy Policy page live at /privacy.
- Terms and Conditions page live at /terms.

## 3. Tech stack (mandatory per assignment)

- Next.js (App Router) with static export, so it can be hosted free on GitHub Pages
- React
- HTML (HyperText Markup Language), semantic elements
- CSS (Cascading Style Sheets) through Tailwind CSS
- JavaScript, or TypeScript if preferred (TypeScript still satisfies the brief, but confirm with the assignment provider if unsure)
- GSAP (GreenSock Animation Platform) with the ScrollTrigger plugin, plus the `@gsap/react` package for the `useGSAP` hook

Optional plus points: Bootstrap and WordPress. Decision: skip both. Bootstrap conflicts with Tailwind and bloats the page. A WordPress theme is a separate project. Revisit only after everything else ships.

## 4. Page structure

One route, `/`, plus `/privacy` and `/terms`.

Hero section, first screen above the fold, full viewport height (`100svh`):
1. Letter-spaced headline, uppercase, wide tracking (around `0.3em`), one line on desktop.
2. One sentence subline stating what the project is.
3. Row of three statistics under the headline, each a value plus a short description.
4. Main visual: a single object (default: a car side view) that travels across the hero as the user scrolls.

Below the hero: one short section so there is something to scroll through (a plain text block explaining how the animation works, written by you). Footer with links to Privacy and Terms.

## 5. Copy (draft, edit freely, keep it specific)

- Headline: `SCROLL DRIVEN MOTION`
- Subline: `A hero section where the car moves exactly as far as you scroll, built with GSAP ScrollTrigger.`
- Button, if one is kept: `Read how it works` (links to the section below). Remove it if it has no real destination.

If the project becomes a real product or portfolio piece, replace the copy with what that thing actually does. Do not leave the headline generic.

## 6. Statistics rule (this resolves the assignment versus the no-fake-metrics rule)

The assignment asks for percentages or statistics with short descriptions. Fake numbers are banned. So the three stats must be real. Pick one approach and record the source next to the value in a code comment:

Option A (default): measured stats about this page itself, filled in after measurement.
- Lighthouse performance score, measured on the deployed page
- Total page weight in kilobytes, from the browser Network panel
- Scroll animation frame rate in frames per second (FPS), from the browser Performance panel

Option B: published specifications of the real subject (for example a real car model) with the manufacturer source linked in the footer.

Build rule: until measured values exist, the stat components render a visible `TODO_MEASURE` marker in development, and the production build must fail if that marker is present (see section 10).

## 7. Animation spec

General: animate `transform` and `opacity` only. Never animate `top`, `left`, `width`, `height` or `margin`. Set `will-change: transform` only on the moving visual.

Load sequence (one GSAP timeline, plays once):
- Headline: opacity 0 to 1, `y` 24px to 0, duration 0.9s, ease `power3.out`
- Subline: same motion, starts 0.15s after headline
- Stats: staggered, each opacity 0 to 1 and `y` 16px to 0, duration 0.7s, stagger 0.15s, starting 0.5s after headline
- Total sequence under 2 seconds
- No count-up number animation (it reads as a fake counter)

Scroll behaviour (core feature):
- Pin the hero with ScrollTrigger while the visual travels. Pin distance: roughly 1.5 to 2 viewport heights.
- The visual moves from left of the viewport to right (or the direction that suits the image) using `x` translate, tied to scroll progress with `scrub: 1`. `scrub: 1` gives the interpolation smoothing the brief asks for. Do not use time-based autoplay for this motion.
- Optional single secondary effect: the headline `letter-spacing` is not animated (it triggers layout). Instead fade the stats row slightly (opacity to 0.4) as the visual passes. Keep it to one secondary effect at most.
- Ease: `none` on the scrubbed tween, so motion maps one to one to scroll. The smoothness comes from `scrub`.

Accessibility and performance:
- Use `gsap.matchMedia()` and respect `prefers-reduced-motion: reduce`: show the final state with no scroll animation.
- Create everything inside `useGSAP` with a scoped container ref so React cleans up triggers on unmount.
- No `scroll` event listeners that do layout reads. ScrollTrigger handles it.
- Do not call `ScrollTrigger.refresh()` in a loop. Refresh once after the image loads.

## 8. Assets

- The main visual must not be AI-generated. Allowed: an original SVG you draw or code, or a real photograph or vector with a license that permits reuse (for example CC0). Record the source and license in `ASSETS.md`.
- Use a transparent-background format (SVG, or WebP/PNG with alpha). Keep it under 200 kilobytes.
- Set explicit `width` and `height` to avoid layout shift. Use `next/image` with `unoptimized: true` (required for static export) or an inline SVG.
- Fonts: one family, self-hosted through `next/font`. No external font requests.
- Colour: a restrained palette of one background, one text colour, one accent. The accent must not be purple. Check contrast meets Web Content Accessibility Guidelines (WCAG) AA, a ratio of at least 4.5 to 1 for body text.

## 9. Launch checklist (every item must be verified, not assumed)

1. Custom domain: add a `CNAME` file in `public/` containing the domain, set the domain in GitHub Pages settings, create the Domain Name System (DNS) records at the registrar, wait for the certificate, then tick "Enforce HTTPS". When using a custom domain, do not set `basePath` in `next.config`.
2. Favicon: place `favicon.ico` and an SVG or PNG icon in `app/` (Next.js picks up `icon` and `favicon.ico` there). Confirm it shows in a fresh browser tab, not a cached one.
3. AI-made tag removal. Search the whole repository and the built `out/` folder for and delete:
   - any "Built with", "Made with AI", "Generated by" or Antigravity, Gemini, Claude or Cursor mentions in footers, comments or `README`
   - `<meta name="generator">` tags and the default `Create Next App` title and description
   - the default Next.js and Vercel logos and starter content
   - Replace the page `title` and `description` in `metadata` with real values.
4. Privacy Policy page at `/privacy`: plain language, matching what the site really does. If there are no cookies, no analytics and no forms, say exactly that. If any analytics or contact form is added later, update the page first. Add a last-updated date and a real contact email. Have it reviewed by someone qualified before relying on it legally.
5. Terms and Conditions page at `/terms`: plain language, covering use of the site, intellectual property, no warranty, and contact. Same review note applies.
6. Footer links to both pages on every page.
7. No `console.log` statements, no `TODO`, no `lorem ipsum` in the build.

## 10. Verification (the "make no mistake" section)

No one can promise zero mistakes, so the build is made to prove itself. The agent must run all of these and paste the output before declaring a task done.

Step 1: `npm run build` must pass.

Step 2: create `scripts/check.py` with the content below and run `python3 scripts/check.py`. It exits with a failure code if any banned item is found, so a silent pass cannot be a false pass. Run it after `npm run build` so the `out/` folder is scanned too.

```python
import re, sys, pathlib

ROOTS = ["app", "components", "public", "out", "README.md", "PRD.md", "ASSETS.md"]
EXTS = {".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".md", ".mdx", ".json", ".svg", ".txt"}

CHECKS = {
    "long dash (em or en)": re.compile("[\u2013\u2014]"),
    "emoji": re.compile("[\U0001F300-\U0001FAFF\u2600-\u27BF]"),
    "banned copy or leftovers": re.compile(
        r"TODO_MEASURE|lorem ipsum|seamless|unlock|revolutioniz|cutting-edge|"
        r"game-changing|Create Next App|name=.generator.|Built with|Made with AI",
        re.I),
    "pill button or purple": re.compile(r"rounded-full|purple|violet|indigo|fuchsia", re.I),
    "cursor effect": re.compile(r"cursor-follow|custom-cursor|mousemove", re.I),
}

def files():
    for r in ROOTS:
        p = pathlib.Path(r)
        if p.is_file():
            yield p
        elif p.is_dir():
            for f in p.rglob("*"):
                if f.is_file() and f.suffix.lower() in EXTS:
                    yield f

scanned, failed = 0, False
for f in files():
    scanned += 1
    for n, line in enumerate(f.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
        for name, rx in CHECKS.items():
            if rx.search(line):
                print(f"FAIL [{name}] {f}:{n}: {line.strip()[:100]}")
                failed = True

if scanned == 0:
    print("FAIL: no files scanned, check the ROOTS list")
    sys.exit(2)
print(f"Scanned {scanned} files")
sys.exit(1 if failed else 0)
```

Note: the script file itself contains the banned words inside its patterns, so keep it in `scripts/`, which is not in `ROOTS`. Because `out/` is the static export of Next.js, the checks also cover generated markup.

Manual checks, done in a real browser:
- Scroll slowly and quickly: the visual tracks scroll with no jitter, and reversing scroll reverses the motion exactly.
- Performance panel: no long tasks during scroll, frame rate holds near 60 FPS.
- Lighthouse: Performance 90 or above, Accessibility 95 or above. Record the real scores for the stats in section 6.
- Largest Contentful Paint (LCP) under 2.5s and Cumulative Layout Shift (CLS) under 0.1.
- Test at 375px, 768px and 1440px widths. No horizontal scrollbar.
- Test with reduced motion turned on in the operating system.
- Test on a real phone, not only the emulator.
- Open `/privacy` and `/terms` on the live custom domain.
- Check the browser tab for the favicon and the page title.

## 11. Build order for Antigravity

Give the agent one phase at a time. Do not ask for the whole site in one prompt.

1. Scaffold: Next.js App Router, Tailwind, static export config, ESLint (linting tool). Commit.
2. Layout and static hero with real copy and placeholder asset. No animation yet. Commit.
3. Load animation timeline. Commit.
4. Scroll-driven motion with ScrollTrigger pin and scrub. Commit.
5. Reduced motion handling and cleanup. Commit.
6. Privacy and Terms pages, footer, favicon, metadata. Commit.
7. Measure the real stats, fill them in, run all section 10 checks. Commit.
8. Deploy to GitHub Pages, connect the domain, run the launch checklist in section 9.

## 12. Submission

- Public GitHub repository, clean commit history, readable structure (`app/`, `components/`, `public/`)
- `README.md` with: what it is, how to run it, the stack, and the live link. Written by you in plain language.
- `ASSETS.md` listing every asset with source and license
- Live URL on GitHub Pages (or the custom domain pointing at it)

## 13. Rules text to paste into Antigravity workspace rules

```
Follow PRD.md exactly. Section 2 is mandatory on every task.
Never write em dashes or en dashes. Never use emoji.
Never use purple, gradients as a main device, rounded-full buttons, cursor effects, or count-up counters.
Never invent statistics, reviews, logos or customer numbers.
Animate transform and opacity only. Use GSAP ScrollTrigger with scrub. Respect prefers-reduced-motion.
Do one phase from section 11 at a time. After each phase, run the section 10 checks and show the output.
If a requirement is unclear or conflicts with another, stop and ask instead of guessing.
```
