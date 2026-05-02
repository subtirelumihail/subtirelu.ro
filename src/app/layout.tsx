import type { Metadata, Viewport } from "next";
import { Kumbh_Sans } from "next/font/google";

import { MobileContactDock } from "@/components/mobile-contact-dock";
import { ScrollProfileHeader } from "@/components/scroll-profile-header";
import { PersonJsonLd } from "@/components/person-json-ld";
import { person, siteUrl } from "@/lib/site-config";

import "./globals.css";

const kumbh = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const documentTitle = `${person.name} — ${person.jobTitle}`;

export const viewport: Viewport = {
  themeColor: "#f4f6fa",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  title: {
    default: documentTitle,
    template: `%s · ${person.name}`,
  },
  description: person.bio,
  keywords: [
    "Mihail Subtirelu",
    "Mihail Gabriel Subtirelu",
    "Subtirelu Mihail",
    "full-stack engineer",
    "full-stack developer",
    "software engineer",
    "AI engineer",
    "machine learning engineer",
    "LLM engineer",
    "AI agents",
    "SaaS engineer",
    "freelance developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Python",
    "Golang",
    "GraphQL",
    "AWS",
    "Bucharest",
    "Romania",
    "remote software engineer",
  ],
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  alternates: {
    canonical: "/",
    types: {
      "application/json": [
        { url: "/api/portfolio", title: "Portfolio machine-readable data" },
      ],
    },
  },
  openGraph: {
    title: documentTitle,
    description: person.tagline,
    url: siteUrl,
    siteName: person.name,
    locale: "en_GB",
    type: "profile",
    firstName: "Mihail Gabriel",
    lastName: "Subtirelu",
    images: [
      {
        url: "/profile.png",
        width: 1024,
        height: 1024,
        alt: "Professional headshot of Mihail Gabriel Subtirelu in a blue check shirt.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: documentTitle,
    description: person.tagline,
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
  category: "technology",
  formatDetection: { email: false, telephone: false, address: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kumbh.variable} h-full scroll-smooth antialiased`}
    >
      <body className="text-foreground min-h-full bg-background">
        <PersonJsonLd />
        <ScrollProfileHeader />
        {children}
        <MobileContactDock />
      </body>
    </html>
  );
}
