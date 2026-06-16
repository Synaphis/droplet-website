import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Droplet AI - Private skincare scanner and routine intelligence",
  description:
    "Droplet AI scans skincare labels, explains ingredients, checks claims, evaluates profile fit, and turns product decisions into routines."
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
