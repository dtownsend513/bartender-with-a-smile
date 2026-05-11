"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import CartSidebar from "@/components/CartSidebar";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd4] bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/komposition-logo.png"
              alt="Komposition Beauty"
              width={190}
              height={60}
              priority
              className="h-auto w-[150px] sm:w-[180px] md:w-[190px]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-amber-800 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-amber-800 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(true)}
              className="relative rounded-full hover:bg-amber-50"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-800" />

              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full flex items-center justify-center p-0 text-xs bg-amber-700 text-white">
                  {itemCount}
                </Badge>
              )}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-amber-50"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6 text-gray-800" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#f8f3ee]">
                <div className="mt-8 mb-8">
                  <Image
                    src="/images/komposition-logo.png"
                    alt="Komposition Beauty"
                    width={180}
                    height={60}
                    priority
                    className="h-auto w-[160px]"
                  />
                </div>

                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-white hover:text-amber-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}