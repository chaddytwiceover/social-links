import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CHADDYTWICEOVER | Link Hub",
  description: "Warm, minimal link hub for CHADDYTWICEOVER — independent web builder in South Florida.",
  metadataBase: new URL("https://social.chaddytwiceover.com"),
  openGraph: {
    title: "CHADDYTWICEOVER | Link Hub",
    description: "Explore the latest work, socials, and contact links for CHADDYTWICEOVER.",
    url: "https://social.chaddytwiceover.com",
    siteName: "CHADDYTWICEOVER",
    images: [
      {
        url: "https://social.chaddytwiceover.com/miami-bg.jpg",
        width: 1200,
        height: 630,
        alt: "CHADDYTWICEOVER Miami background"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CHADDYTWICEOVER | Link Hub",
    description: "Independent web builder based in South Florida.",
    images: ["https://social.chaddytwiceover.com/miami-bg.jpg"],
    creator: "@chaddytwiceover"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
