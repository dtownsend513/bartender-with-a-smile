import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bartender With A Smile | Cincinnati Mobile Bartending",
  description:
    "Professional mobile bartending services for weddings, private parties, corporate events, and celebrations throughout Cincinnati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0f0b08] text-white`}
      >
        <CartProvider>
          <Navigation />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}