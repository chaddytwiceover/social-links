# CHADDYTWICEOVER — Social Link Hub

A minimal social links portal built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | React framework, static export |
| [React](https://react.dev/) | 18 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first CSS styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations and transitions |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Display typeface (Google Fonts) |
| [PostCSS](https://postcss.org/) + Autoprefixer | — | CSS processing |

## Overview

This project is a minimal landing page with:

- a clean central profile section
- social and contact links grouped by category
- smooth stagger animations via Framer Motion
- progressive web app support (manifest + service worker)
- offline fallback page

## Project Structure

```
app/
  layout.tsx          — Root layout, metadata, and font loading
  page.tsx            — Main page with link buttons and animations
data/
  links.ts            — Link definitions (label, url, category, icon id)
styles/
  globals.css         — Global styles and Tailwind base imports
public/               — Static assets (images, favicon, etc.)
service-worker.js     — Caches app shell and serves offline fallback
offline.html          — Offline message page
manifest.webmanifest  — PWA metadata
next.config.js        — Next.js config (static export enabled)
tailwind.config.js    — Tailwind theme extensions
```

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Build

```bash
npm run build
```

This generates a fully static site in the `out/` directory via Next.js static export.

## Customization

- Add or edit links in `data/links.ts`.
- Adjust colors, spacing, and typography in `tailwind.config.js` and `styles/globals.css`.
- Update metadata (title, description, OG image) in `app/layout.tsx`.
- Update app name/theme values in `manifest.webmanifest`.
- Bump the cache name in `service-worker.js` when deploying asset changes.

## Notes

- Service workers require `http://localhost` or `https://`.
- The site outputs as a static export (`output: 'export'` in `next.config.js`) — no Node.js server is needed to host it.

## Deploy on IONOS

1. Run `npm run build` locally to generate the `out/` directory.
2. In your IONOS hosting panel, open your domain's webspace (document root).
3. Upload the contents of the `out/` directory to the web root, along with:
   - `service-worker.js`
   - `offline.html`
   - `manifest.webmanifest`
4. Ensure HTTPS is enabled for the domain (required for service worker in production).
5. After each release, update `CACHE_NAME` in `service-worker.js` (for example, `clean-portal-v2`) so visitors receive fresh assets.
6. Open your live URL and hard refresh once to verify updated cache and offline fallback behavior.
