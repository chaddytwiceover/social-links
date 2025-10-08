# CHADDYTWICEOVER — Social Links Landing

A cyberpunk-themed link landing page with neural network-inspired animations, built with plain HTML, CSS and JavaScript.

## Overview

Minimal landing page that aggregates socials and points to the main site. Features a cyberpunk aesthetic enhanced with neural network motifs, animated connection nodes, pulsing glow effects, and dynamic data flow animations. Uses Google Fonts and Font Awesome for typography and icons.

## Files

- **index.html** — markup and page structure. Contains social buttons (X/Twitter, Instagram, TikTok, GitHub), a minimal main-domain link (globe icon + domain text), neural network canvas element, and a centered footer.
- **style.css** — comprehensive styling including:
  - Cyberpunk color scheme with CSS variables
  - Neural network effects (grid patterns, hexagonal overlays, pulsing nodes)
  - Button animations (glow effects, data flow, circuit patterns)
  - Scanline and glitch effects
  - Responsive rules and mobile optimizations
  - Accessible `.visually-hidden` helper
- **script.js** — interactive features:
  - `fitHeading` — responsive auto-fit routine that scales the `.glitch` heading
  - Neural network canvas animation with moving nodes and dynamic connections
  - Footer year auto-fill targeting `#year`

## Visual Features

### Neural Network Theme
- **Animated Canvas**: 50 interconnected nodes (25 on mobile) that move and pulse with dynamic connections
- **Neural Grid**: Animated perspective grid background suggesting depth
- **Hexagonal Pattern**: Slowly shifting honeycomb overlay for added complexity
- **Connection Nodes**: Radial gradient nodes in cyan, magenta, and yellow that pulse

### Cyberpunk Effects
- **Glitch Animation**: Title with chromatic aberration and skew effects
- **Scanlines**: CRT-style horizontal lines that animate across the viewport
- **Neon Glows**: Pulsing box-shadow effects on all interactive elements
- **Data Flow**: Light sweep animations across buttons simulating data transmission
- **Circuit Patterns**: Subtle grid overlays on buttons
- **Neural Decorations**: Connection lines beside subtitle, gradient container borders

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

## Performance & Responsiveness

- Automatically reduces animation complexity on mobile devices (< 768px width)
- Reduces neural network node count on smaller screens
- Disables heavy pseudo-element animations on mobile
- Uses CSS clamp() for fluid typography and spacing
- Canvas animations use requestAnimationFrame for smooth 60fps performance

## Accessibility & Notes

- Links that open a new tab include `rel="noopener noreferrer"`.
- The main-domain link includes a globe icon and a `.visually-hidden` label for screen readers.
- The `.glitch` heading is kept on one line via CSS and a small JS auto-fit routine; it recalculates on load/resize and after fonts load.
- Footer year is injected by `script.js` into `#year`.

## License

Add your preferred license text here.
