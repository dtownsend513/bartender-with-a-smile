import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/Navigation";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komposition Beauty - Handmade Bath & Body Products",
  description:
    "Discover handmade, plant-based bath and body products crafted for nourishing self-care routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-[#f8f3ee] text-gray-900`}
      >
        <CartProvider>
          <Navigation />

          <main className="min-h-screen">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}