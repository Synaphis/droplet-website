import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Droplet",
  title: {
    default: "Droplet - Private skincare scanner and routine intelligence",
    template: "%s | Droplet"
  },
  description:
    "Droplet scans skincare labels, explains ingredients, checks claims, evaluates profile fit, and turns product decisions into routines without ads or sponsored rankings.",
  keywords: [
    "Droplet",
    "skincare scanner",
    "skincare routine app",
    "ingredient checker",
    "skincare label scanner",
    "skin care product checker",
    "routine intelligence",
    "cosmetic ingredient analysis"
  ],
  alternates: {
    canonical: "/"
  },
  category: "Health & Fitness",
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
    type: "website",
    url: "/",
    siteName: "Droplet",
    title: "Droplet",
    description:
      "Private skincare scanner and routine intelligence for calmer product decisions.",
    images: [{ url: "/logo-2.png", width: 800, height: 800, alt: "Droplet logo" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Droplet",
    description: "Private skincare scanner and routine intelligence for calmer product decisions.",
    images: ["/logo-2.png"]
  },
  appleWebApp: {
    title: "Droplet",
    capable: true,
    statusBarStyle: "default"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Droplet",
      url: siteUrl,
      logo: `${siteUrl}/logo-2.png`
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Droplet",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "Droplet",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      url: siteUrl,
      description:
        "Private skincare scanner and routine intelligence for label-aware product decisions.",
      offers: [
        {
          "@type": "Offer",
          name: "Monthly",
          price: "9.99",
          priceCurrency: "USD"
        },
        {
          "@type": "Offer",
          name: "Yearly",
          price: "79.99",
          priceCurrency: "USD"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
