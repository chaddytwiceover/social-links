"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export type LinkCardProps = {
  href: string;
  label?: string;
  icon?: ReactNode;
  external?: boolean;
};

export default function LinkCard({
  href,
  label,
  icon,
  external = true
}: LinkCardProps) {
  const mainText = label ?? href;
  const openSuffix = external ? " (opens in new tab)" : "";
  const ariaLabel = `${mainText}${openSuffix}`;

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: [0.2, 0.9, 0.3, 1] }}
      className="link-card"
      aria-label={ariaLabel}
    >
      <span className="link-icon" aria-hidden="true">
        {icon}
      </span>

      <span className="link-body">
        <span className="link-main">{mainText}</span>
      </span>
    </motion.a>
  );
}
