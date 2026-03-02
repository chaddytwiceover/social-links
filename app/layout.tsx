import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
