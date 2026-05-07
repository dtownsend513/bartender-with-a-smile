import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Navigation from "@/components/Navigation";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Komposition Beauty - Handmade Natural Bath & Body Products",
  description: "Discover truly handmade, plant-based bath and body products made with the finest natural ingredients for nourishing, healthy skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <CartProvider>
        <ClientBody>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ClientBody>
      </CartProvider>
    </html>
  );
}
