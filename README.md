# CHADDYTWICEOVER — Social Links Landing

A small cyberpunk-themed link landing page built with plain HTML, CSS and JavaScript.

## Overview

Minimal landing page that aggregates socials and points to the main site. Uses Google Fonts and Font Awesome for typography and icons.

## Files

- index.html — markup and page structure. Contains social buttons (X/Twitter, Instagram, TikTok, GitHub), a minimal main-domain link (globe icon + domain text), and a centered footer.
- style.css — styling, responsive rules, centered footer layout, and an accessible `.visually-hidden` helper.
- script.js — small scripts:
  - `fitHeading` — responsive auto-fit routine that scales the `.glitch` heading.
  - Footer year auto-fill targeting `#year`.

## Usage

1. Open `index.html` in a browser (no build step required).
2. Internet connection required for Google Fonts and Font Awesome CDN:
   - Google Fonts: Orbitron
   - Font Awesome: cdn (used for social icons and globe)

## Customization

- Update social links in `index.html` (each `.social-button`).
- Replace or remove the main-domain URL at the `.domain-link` anchor.
- Tweak colors, spacing, and footer layout in `style.css`.
- Adjust heading auto-fit constants in `script.js` if needed.

## Accessibility & Notes

- Links that open a new tab include `rel="noopener noreferrer"`.
- The main-domain link includes a globe icon and a `.visually-hidden` label for screen readers.
- The `.glitch` heading is kept on one line via CSS and a small JS auto-fit routine; it recalculates on load/resize and after fonts load.
- Footer year is injected by `script.js` into `#year`.

## License

Add your preferred license text here.
