# CHADDYTWICEOVER — Clean Portal

A lightweight social links portal built with plain HTML, CSS, and JavaScript.

## Overview

This project is a minimal landing page with:

- a clean central profile section
- social and contact links
- progressive web app support (manifest + service worker)
- offline fallback page

## Project Files

- `index.html` — Main page markup and link list
- `styles.css` — Visual styles, layout, and motion preferences support
- `app.js` — Registers the service worker
- `service-worker.js` — Caches app shell and serves offline fallback
- `offline.html` — Offline message page
- `manifest.webmanifest` — PWA metadata

## Usage

1. Serve the folder with any static server (recommended for service worker support).
2. Open the site in a modern browser.

Example (Node):

```bash
npx serve .
```

## Customization

- Update profile text and links in `index.html`.
- Adjust colors, spacing, and typography in `styles.css`.
- Update app name/theme values in `manifest.webmanifest`.
- Bump the cache name in `service-worker.js` when deploying asset changes.

## Notes

- Service workers require `http://localhost` or `https://`.
- No build step is required.

## Deploy on IONOS

1. In your IONOS hosting panel, open your domain’s webspace (document root).
2. Upload these files to the web root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `service-worker.js`
   - `offline.html`
   - `manifest.webmanifest`
3. Ensure HTTPS is enabled for the domain (required for service worker in production).
4. After each release, update `CACHE_NAME` in `service-worker.js` (for example, `clean-portal-v2`) so visitors receive fresh assets.
5. Open your live URL and hard refresh once to verify updated cache and offline fallback behavior.
