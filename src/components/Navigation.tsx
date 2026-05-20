"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Martini } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bar-services", label: "Bar Services" },
    { href: "/private-events", label: "Private Events" },
    { href: "/gallery", label: "Gallery" },
  ];

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#080604]/85 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "border-b border-white/5 bg-[#080604]/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-300 shadow-lg shadow-amber-950/30 transition group-hover:scale-105 group-hover:border-amber-300">
            <Martini size={22} />
          </span>

          <span className="flex flex-col leading-none">
            <span
              className="text-2xl text-amber-300 md:text-4xl"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Bartender With a Smile
            </span>

            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.38em] text-white/45 md:block">
              Mobile Bartending
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs font-bold uppercase tracking-[0.22em] text-white/70 transition hover:text-amber-300"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-amber-300 transition-all duration-300 hover:w-full" />
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:bg-amber-300"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300 backdrop-blur-md transition hover:border-amber-300/50 lg:hidden"
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#080604]/95 px-5 py-6 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white/75 transition hover:border-amber-300/50 hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-amber-400 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-black transition hover:bg-amber-300"
            >
              Request Availability
            </Link>

            <a
              href="tel:5133444446"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-amber-300"
            >
              Call 513-344-4446
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}