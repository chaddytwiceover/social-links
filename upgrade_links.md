# social.chaddytwiceover — Next.js Link Hub (Creator, no avatar)

> **Goal:** Upgrade the existing `social.chaddytwiceover.com` into a polished, Linktree-style Next.js site with **card layout**, **icons (handle only)**, **warm sage/beige (sand) accents**, a **footer**, and the **same original links**. Deliverable is a ready-to-run Markdown blueprint and code snippets your VS Code agent (GPT-5.1-Codex) can scaffold.

---

## Project overview

- Framework: **Next.js (App Router)**
- Styling: plain CSS variables + utility classes (global `globals.css`) — easy to swap to Tailwind later
- Animations: **Framer Motion** for entrance / hover microinteractions
- Content-driven: `data/links.ts` contains all links and metadata
- Layout: single-page Link Hub (`/`) with optional `/qr` or `/resume` redirects
- Deploy: **IONOS Deploy Now** (static export recommended)

---

## Design tokens (warm minimal)

```
--bg: #F6F3EE; /* off-white / sand */
--card-bg: #FFFFFF;
--text: #222222; /* charcoal */
--muted: #6E6B66;
--sage: #9AA89B; /* subtle sage */
--sand: #E9E3D8; /* sand accent */
--accent: linear-gradient(90deg, var(--sage), #BFC9C0);
--radius: 12px;
--shadow: 0 6px 18px rgba(34,34,34,0.06);
--easing: cubic-bezier(.2,.9,.3,1);
```

Use these in `globals.css` (below).

---

## Content model — `/data/links.ts`

```ts
export type LinkItem = {
  id: string;
  label?: string; // optional human label (we'll hide label on socials — only show handle)
  handle?: string; // shown for social links e.g. "@chaddytwiceover"
  url: string;
  category?: string; // 'social' | 'work' | 'extras'
  featured?: boolean;
  external?: boolean; // true by default
};

export const links: LinkItem[] = [
  {
    id: "innercircle",
    label: "InnerCircle",
    url: "https://your-innercircle.link",
    category: "work",
    featured: true,
  },
  {
    id: "twitter",
    handle: "@chaddytwiceover",
    url: "https://x.com/chaddytwiceover",
    category: "social",
  },
  {
    id: "tiktok",
    handle: "@chaddytwiceover",
    url: "https://www.tiktok.com/@chaddytwiceover",
    category: "social",
  },
  {
    id: "instagram",
    handle: "@chaddytwiceover",
    url: "https://www.instagram.com/chaddytwiceover",
    category: "social",
  },
  {
    id: "portfolio",
    label: "Main Site",
    url: "https://chaddytwiceover.com",
    category: "work",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:youremail@example.com",
    category: "extras",
  },
];
```

> Keep this file as the single source of truth. Your page reads and renders from it.

---

## Pages & routes

- `/` — main Link Hub
- `/qr` — big QR code (optional)
- `/resume` — redirect to resume PDF

We will focus on `/` here.

---

## Component blueprint (App Router)

### `components/LinkCard.tsx`

```tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  label?: string;
  handle?: string;
  featured?: boolean;
};

export default function LinkCard({ href, label, handle, featured }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: [0.2, 0.9, 0.3, 1] }}
      className={`link-card ${featured ? "featured" : ""}`}
    >
      <div className="link-left">
        {/* Icon slot: small square circle to the left — handled via CSS background-image if desired */}
        <span className="link-icon" aria-hidden />
      </div>

      <div className="link-body">
        <div className="link-main">{handle ?? label}</div>
        {label && handle && <div className="link-sub">{label}</div>}
      </div>

      <div className="link-right">→</div>
    </motion.a>
  );
}
```

Notes:

- For **social** links we populate `handle` and omit `label` (user asked "handle only").
- For other links (Work / Extras) we show `label` and optionally `subtext`.

### `app/page.tsx` (simplified)

```tsx
import React from "react";
import LinkCard from "../components/LinkCard";
import { links } from "../data/links";

export default function Home() {
  const featured = links.find((l) => l.featured);
  const sections = {
    social: links.filter((l) => l.category === "social"),
    work: links.filter((l) => l.category === "work"),
    extras: links.filter((l) => l.category === "extras"),
  };

  return (
    <main className="page">
      <header className="header">
        <h1 className="brand">CHADDYTWICEOVER</h1>
        <p className="tag">Independent Web Builder</p>
        <p className="location">Based in South Florida</p>
      </header>

      <section className="links-wrap">
        {featured && (
          <div className="featured-wrap">
            <LinkCard href={featured.url} label={featured.label} featured />
          </div>
        )}

        <div className="section">
          {sections.social.map((item) => (
            <LinkCard key={item.id} href={item.url} handle={item.handle} />
          ))}
        </div>

        <div className="section">
          {sections.work.map((item) => (
            <LinkCard key={item.id} href={item.url} label={item.label} />
          ))}
        </div>

        <div className="section">
          {sections.extras.map((item) => (
            <LinkCard key={item.id} href={item.url} label={item.label} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>Fort Lauderdale, FL</div>
        <div>Updated March 1, 2026</div>
      </footer>
    </main>
  );
}
```

---

## `globals.css` (starter)

```css
:root {
  --bg: #f6f3ee;
  --card-bg: #ffffff;
  --text: #222222;
  --muted: #6e6b66;
  --sage: #9aa89b;
  --sand: #e9e3d8;
  --radius: 12px;
  --shadow: 0 6px 18px rgba(34, 34, 34, 0.06);
}

* {
  box-sizing: border-box;
}
html,
body,
#root {
  height: 100%;
}
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial;
  -webkit-font-smoothing: antialiased;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 20px;
}

.header {
  text-align: center;
  margin-bottom: 24px;
}
.brand {
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 20px;
  margin: 0;
}
.tag {
  margin: 6px 0 0;
  color: var(--muted);
  text-transform: uppercase;
  font-size: 12px;
}
.location {
  margin: 6px 0 18px;
  color: var(--muted);
  font-size: 13px;
}

.links-wrap {
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  padding: 14px 16px;
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition:
    transform 0.18s var(--easing),
    box-shadow 0.18s var(--easing),
    background 0.18s var(--easing);
}

.link-card:hover {
  transform: translateY(-4px);
}
.link-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--sand);
  display: inline-block;
}

.link-body {
  flex: 1;
}
.link-main {
  font-weight: 600;
}
.link-sub {
  font-size: 12px;
  color: var(--muted);
  margin-top: 4px;
}
.link-right {
  font-weight: 700;
  color: var(--sage);
}

.featured {
  border-left: 4px solid var(--sage);
  padding-left: 12px;
}

.site-footer {
  margin-top: 28px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

@media (max-width: 520px) {
  .page {
    padding: 24px 16px;
  }
}
```

---

## Icons (handle-only) strategy

- We will show **no full names** on social links — only the handle (e.g., `@chaddytwiceover`).
- Icons: small square placeholders left of each card. Two options:
  - **CSS background-image sprites** (SVG sprite) and show platform icon only (no text name)
  - **Inline SVG** in the `.link-icon` slot

Keep icons subtle — a sand or sage fill with a white inner mark.

---

## Accessibility & SEO

- Use `rel="noopener noreferrer"` for external links and `target="_blank"`.
- Add `aria-label` on link anchors (e.g., "Open Instagram — @chaddytwiceover (opens in new tab)").
- Add meta tags / Open Graph in `app/head.tsx` for nice previews.

---

## Analytics & click tracking (optional)

- Simple: use a lightweight analytics provider (Plausible, Umami) to track clicks.
- Or: implement a small client-side click handler that fires `fetch('/api/track', { method: 'POST', body: JSON.stringify({ id }) })` and push a simple serverless function if you want counts.

---

## IONOS Deploy Now — static export guidance

1. In `next.config.js` set `output: 'export'` to produce a static export if you only need static HTML/CSS/JS.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};
module.exports = nextConfig;
```

2. Build and export locally to test:

```bash
npm run build
npm run export
# out/ folder is the static output
```

3. Deploy `out/` (or the folder Deploy Now expects) to IONOS. If Deploy Now expects a different flow, you can instead deploy via their Git integration or Node server.

> Note: If you want Framer Motion client components and minimal interactivity, the static export is fine since motion runs in the browser. Avoid server-only features if you choose purely static.

---

## VS Code agent (GPT-5.1-Codex) scaffolding prompt

Use this prompt in your VS Code Copilot/GPT agent to scaffold files quickly:

```
Scaffold a Next.js app (App Router) for a Link Hub.
- Create pages: app/page.tsx, app/head.tsx
- Create components: components/LinkCard.tsx
- Create data file: data/links.ts
- Create styles: styles/globals.css
- Add framer-motion dependency
- Use the design tokens and structure from the provided markdown
- Keep social links showing only handles
- Include a featured card rendering
```

---

## Deployment checklist (quick)

- [ ] Sanity-check `data/links.ts` for correct URLs
- [ ] Run `npm run build` and `npm run export` locally
- [ ] Verify mobile spacing and hover/tap microinteractions
- [ ] Add `robots.txt`+`sitemap.xml` if you want SEO indexing
- [ ] Point `social.chaddytwiceover.com` DNS to IONOS deploy target

---

## Tailor or extend

If you want, I can now:

- Generate the exact file contents for each TypeScript/TSX/CSS file ready to paste into the project (I can put everything in the repo structure)
- Create the exact `package.json` and `next.config.js`
- Produce the small SVG icons for the social platforms (Twitter/X, TikTok, Instagram) sized for the `.link-icon`

Tell me which next step you want and I will produce the exact files.
