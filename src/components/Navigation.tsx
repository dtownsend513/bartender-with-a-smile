"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bar-services", label: "Bar Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/private-events", label: "Private Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#111018] border-b border-white/10">
      <div className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-3xl md:text-4xl">
            🍸
          </span>

          <span
            className="text-4xl md:text-6xl text-[#ffd700] leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Bartender With a Smile
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#ffd700] text-sm uppercase font-semibold hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#ffd700]"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="lg:hidden bg-[#111018] border-t border-white/10 px-6 py-6 space-y-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[#ffd700] uppercase font-semibold hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}