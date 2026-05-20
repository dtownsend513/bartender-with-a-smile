import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bartenderwithasmile.com"),

  title: {
    default: "Bartender With A Smile | Cincinnati Mobile Bartending",
    template: "%s | Bartender With A Smile",
  },

  description:
    "Professional mobile bartending services for weddings, private parties, corporate events, birthdays, and celebrations throughout Cincinnati and surrounding areas.",

  keywords: [
    "Cincinnati mobile bartender",
    "Cincinnati bartending service",
    "mobile bartending Cincinnati",
    "wedding bartender Cincinnati",
    "private event bartender",
    "corporate bartender Cincinnati",
    "bartender for hire Cincinnati",
    "bartending service near me",
    "Bartender With A Smile",
  ],

  authors: [{ name: "Bartender With A Smile" }],
  creator: "Bartender With A Smile",
  publisher: "Bartender With A Smile",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bartender With A Smile | Cincinnati Mobile Bartending",

    description:
      "Professional mobile bartending for weddings, private parties, corporate events, birthdays, and celebrations throughout Cincinnati.",

    url: "https://bartenderwithasmile.com",

    siteName: "Bartender With A Smile",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/hero-bartender.jpg",
        width: 1200,
        height: 630,
        alt: "Bartender With A Smile mobile bartending service in Cincinnati",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Bartender With A Smile | Cincinnati Mobile Bartending",

    description:
      "Professional mobile bartending for weddings, private parties, corporate events, birthdays, and celebrations throughout Cincinnati.",

    images: ["/images/hero-bartender.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080604",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bartender With A Smile",
    image: "https://bartenderwithasmile.com/images/hero-bartender.jpg",
    "@id": "https://bartenderwithasmile.com",
    url: "https://bartenderwithasmile.com",
    telephone: "+1-513-344-4446",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      postalCode: "45213",
      addressCountry: "US",
    },
    areaServed: [
      "Cincinnati",
      "Norwood",
      "Blue Ash",
      "West Chester",
      "Mason",
      "Hamilton County",
    ],
    priceRange: "$$",
    description:
      "Professional mobile bartending services for weddings, private parties, birthdays, corporate events, and celebrations throughout Cincinnati.",
    servesCuisine: "Cocktails",
    sameAs: [
      "https://www.theknot.com/marketplace/bartender-with-a-smile-cincinnati-oh-2087539",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#080604] text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navigation />

        <main className="min-h-screen">
          {children}
        </main>

        <MobileCTA />

        <Footer />
      </body>
    </html>
  );
}