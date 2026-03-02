'use client';

import type { JSX, ReactNode } from "react";
import { motion } from "framer-motion";
import { links } from "../data/links";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.18 }
  }
};

const row = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const SECTION_LABELS = {
  social: "SOCIAL",
  work: "WORK",
  extras: "EXTRAS"
};

const iconSize = 20;

const IconGithub = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2C6.48 2 2 6.58 2 12.17c0 4.47 2.87 8.26 6.86 9.61.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.68-2.79.63-3.38-1.38-3.38-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.58 2.34 1.13 2.91.87.09-.67.35-1.14.64-1.4-2.22-.26-4.55-1.15-4.55-5.01 0-1.11.39-2.01 1.03-2.71-.1-.26-.45-1.33.1-2.77 0 0 .85-.28 2.77 1.05a9.21 9.21 0 0 1 5.05 0c1.93-1.33 2.77-1.05 2.77-1.05.55 1.44.2 2.51.1 2.77.64.7 1.03 1.6 1.03 2.71 0 3.87-2.34 4.74-4.57 5 .36.32.68.95.68 1.93 0 1.4-.01 2.52-.01 2.86 0 .27.18.58.69.48C19.13 20.43 22 16.63 22 12.17 22 6.58 17.52 2 12 2Z" />
  </svg>
);

const IconX = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23z" />
  </svg>
);

const IconTikTok = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.84 4.84 0 0 1-3.78-4.26V2h-3.45v13.67a2.9 2.9 0 0 1-5.2 1.74 2.9 2.9 0 0 1 2.32-4.65 2.9 2.9 0 0 1 .88.13V9.4a6.77 6.77 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.33 6.33 0 0 0 10.86-4.43v-7a8.13 8.13 0 0 0 4.76 1.52v-3.4a4.78 4.78 0 0 1-1.03-.1Z" />
  </svg>
);

const IconInstagram = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3.7" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const IconGlobe = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3.2 3.8 6.6 3.8 9s-1.3 5.8-3.8 9c-2.5-3.2-3.8-6.6-3.8-9S9.5 6.2 12 3Z" />
  </svg>
);

const IconMail = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3" y="5" width="18" height="14" rx="2.2" />
    <path d="m5 7 7 5 7-5" />
  </svg>
);

const iconMap: Record<string, JSX.Element> = {
  site: <IconGlobe />,
  github: <IconGithub />,
  twitter: <IconX />,
  tiktok: <IconTikTok />,
  instagram: <IconInstagram />,
  email: <IconMail />
};

const getIcon = (id: string) => iconMap[id] ?? <IconGlobe />;

type LinkButtonProps = {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
};

export default function HomePage() {
  const sections = {
    social: links.filter((item) => item.category === "social"),
    work: links.filter((item) => item.category === "work"),
    extras: links.filter((item) => item.category === "extras")
  };

  return (
    <main className="relative min-h-screen bg-[#f4f1ea] px-4 py-14 text-[#14110f] sm:px-6">
      <AmbientBackground />

      <motion.div
        variants={list}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-md flex-col items-center text-center"
      >
        <motion.p variants={row} className="text-[11px] uppercase tracking-[0.2em] text-black/50">
          WEB BUILDER
        </motion.p>

        <motion.h1 variants={row} className="mt-2 font-display text-3xl font-semibold tracking-[0.24em]">
          CHADDYTWICEOVER
        </motion.h1>

        <motion.p variants={row} className="mt-2 text-[11px] uppercase tracking-[0.2em] text-black/40">
          BASED IN SOUTH FLORIDA
        </motion.p>

        <motion.div variants={row} className="mt-10 flex w-full flex-col gap-8">
          {Object.entries(sections).map(([key, items]) =>
            items.length > 0 ? (
              <motion.section key={key} variants={row} className="w-full">
                <div className="mb-4 text-center text-[11px] uppercase tracking-[0.25em] text-black/40">
                  {SECTION_LABELS[key as keyof typeof SECTION_LABELS] ?? key.toUpperCase()}
                </div>

                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <LinkButton
                      key={item.id}
                      label={item.label ?? item.url}
                      href={item.url}
                      icon={getIcon(item.id)}
                      external={item.external !== false}
                    />
                  ))}
                </div>
              </motion.section>
            ) : null
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}

function LinkButton({ label, href, icon, external = true }: LinkButtonProps) {
  const ariaLabel = external !== false ? `${label} (opens in new tab)` : label;

  return (
    <motion.a
      variants={row}
      href={href}
      target={external !== false ? "_blank" : undefined}
      rel={external !== false ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 520, damping: 32 }}
      className="group relative w-full overflow-hidden rounded-full bg-white/70 px-6 py-4 text-sm font-medium tracking-wide text-[#14110f] shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5 backdrop-blur-md"
      aria-label={ariaLabel}
    >
      <span className="pointer-events-none absolute inset-0">
        <span className="absolute -left-1/2 top-0 h-full w-1/2 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[260%] group-hover:opacity-100" />
      </span>

      <span className="relative flex items-center justify-center gap-3">
        {icon ? <span className="grid h-7 w-7 place-items-center rounded-full bg-black/5">{icon}</span> : null}
        <span>{label}</span>
      </span>
    </motion.a>
  );
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute bottom-10 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
    </div>
  );
}
