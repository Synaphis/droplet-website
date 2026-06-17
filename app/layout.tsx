import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  applicationName: "Droplet AI",
  title: "Droplet AI - Private skincare scanner and routine intelligence",
  description:
    "Droplet AI scans skincare labels, explains ingredients, checks claims, evaluates profile fit, and turns product decisions into routines.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "Droplet AI",
    description:
      "Private skincare scanner and routine intelligence for calmer product decisions.",
    images: [{ url: "/logo-2.png", width: 800, height: 800, alt: "Droplet AI logo" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
