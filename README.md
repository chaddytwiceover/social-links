# CHADDYTWICEOVER — Social Links Landing

A small cyberpunk-themed link landing page built with plain HTML, CSS and JavaScript.

## Files
- [index.html](index.html) — markup and page structure.
- [style.css](style.css) — styling, animations and responsive rules.
- [script.js](script.js) — small scripts:
  - [`fitHeading`](script.js) — responsive auto-fit routine that scales the `.glitch` heading.
  - [`fits`](script.js) — helper used by the auto-fit binary search.

## Usage
1. Open [index.html](index.html) in your browser (no build step required).
2. The page uses a local font import and Font Awesome CDN for icons.

## Customization
- Edit [style.css](style.css) to change theme colors, spacing, or button styles.
- Tweak the auto-fit range in [script.js](script.js) (constants `MIN` / `MAX`) to adjust heading scaling.

## Notes
- The heading auto-fit runs on `load`, `resize`, and when fonts finish loading to keep the `.glitch` text on a single line.
- Footer year is auto-filled by the script targeting `id="year"` in [index.html](index.html).

## License
Add your preferred license text here.
