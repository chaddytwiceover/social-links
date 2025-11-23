# CHADDYTWICEOVER — Social Links

A brutalist social links landing page following the CHADDYTWICEOVER design system principles, built with plain HTML, CSS and JavaScript.

## Overview

Minimal landing page that aggregates social links and points to the main site. Features exposed structure, information-dense cards, monospace typography, and the "muted zest" color palette. Built with the CHADDYTWICEOVER design system philosophy: emergent over prescribed aesthetics.

## Design System Principles

### Philosophy
- **Emergent over prescribed aesthetics** — Let design emerge from function and constraint
- **Expose state and inner workings** — Show grid systems, borders, and scaffolding
- **Dense, not sparse** — Information-rich interfaces, every element earns its space
- **Regiment functionalism** — Every design decision serves a purpose
- **Performance IS design** — Fast, smooth, optimized

### Visual Identity

**Color Palette:**
- `stone-950` (#0c0a09) — Primary background
- `stone-900` (#1c1917) — Secondary background
- `stone-800` (#292524) — Borders, dividers
- `stone-100` (#f5f5f4) — Primary text
- `teal-400` (#2dd4bf) — Primary accent ("the zest")
- `amber-500` (#f59e0b) — Highlights (available for CTAs)

**Typography:**
- Font: JetBrains Mono (monospace)
- Hero: 6xl (clamp responsive)
- Sections: 3xl
- Body: 18px base
- Line height: 1.75 for body, 1.1 for headlines

**Spacing Scale:**
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 6rem (96px)

## Files

- **index.html** — Semantic markup with numbered sections, social cards with metrics, and main site CTA
- **style.css** — Complete design system implementation:
  - CSS variables for colors, spacing, typography
  - Visible grid background (50px × 50px)
  - Card components with borders and hover effects
  - Responsive design (mobile-first)
  - Accessibility features (focus states, reduced motion)
  - Print styles
- **script.js** — Interactive features:
  - Cursor trail effect (ambient teal glow that follows mouse)
  - Footer year auto-fill
  - Smooth scroll for internal links

## Visual Features

### Brutalist Structure
- **Visible Borders**: All components show their structure with 1px borders
- **Grid Background**: Subtle teal grid pattern (50px × 50px) with radial fade
- **Numbered Sections**: Explicit hierarchy with teal numbers (01, 02, 03)
- **Exposed Scaffolding**: Border accents on section headers

### Component Patterns
- **Social Cards**: Information-dense cards with:
  - Header with icon, title, and external link indicator
  - Description text
  - Metrics grid (2 columns with value/label pairs)
  - Footer with link and arrow
  - Hover: Border changes to teal, card lifts 4px
  
- **Main Site CTA**: Teal background button with:
  - Globe icon and text
  - Arrow indicator
  - Hover: Lighter teal, translates right 4px

- **Cursor Trail**: 384px diameter blur circle that follows mouse with smooth easing

### Interaction Design
- **Purposeful Motion**: All animations serve a function
- **Transform-based**: Uses translate and scale for GPU acceleration
- **Consistent Timing**: 200ms (fast), 300ms (medium), 500ms (slow)
- **Hover States**: Border color changes, subtle lifts, arrow movements

## Usage

1. Open `index.html` in a browser (no build step required)
2. Internet connection required for:
   - Google Fonts: JetBrains Mono
   - Font Awesome: Social icons

## Customization

- Update social links in `index.html` (each `.social-card`)
- Replace main-domain URL at `.main-site-cta`
- Tweak colors in `:root` CSS variables in `style.css`
- Adjust spacing scale via CSS variables
- Modify metrics in card bodies to show different data

## Performance & Responsiveness

- **Mobile-first** approach with breakpoint at 768px
- **GPU-accelerated** animations using transform properties
- **Reduced motion** support for accessibility
- **Lazy evaluation** of cursor trail on mobile (disabled)
- **Semantic HTML5** for better SEO and accessibility
- **Print styles** included for documentation

## Accessibility

- **WCAG 2.1 AA compliant** color contrast (4.5:1 minimum)
- **Keyboard navigation** with visible focus indicators (teal outline)
- **Screen reader** friendly with semantic elements
- **Reduced motion** support disables animations when preferred
- **External links** include `rel="noopener noreferrer"`

## Technical Specifications

**Core Web Vitals Targets:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Browser Support:**
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Custom Properties required
- Graceful degradation for older browsers

## Design System Version

**v1.0** - November 2025
- Initial CHADDYTWICEOVER design system implementation
- Brutalist aesthetic with exposed structure
- Monospace typography and muted zest palette
- Information-dense card patterns
- Cursor trail interaction

## License

Add your preferred license text here.
