import Link from "next/link";
import { Clock3, Mail, MapPin, Martini, Phone, Star } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bar-services", label: "Bar Services" },
    { href: "/private-events", label: "Private Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080604] text-white">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <Link href="/" className="mb-8 inline-flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-300">
                <Martini size={24} />
              </span>

              <span className="flex flex-col">
                <span
                  className="text-4xl leading-none text-amber-300"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  Bartender With a Smile
                </span>

                <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.38em] text-white/45">
                  Mobile Bartending
                </span>
              </span>
            </Link>

            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Professional mobile bartending for weddings, private events,
              corporate gatherings, birthdays, and celebrations throughout
              Cincinnati and surrounding areas.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-5 py-3 text-sm text-white/75">
              <Star size={16} className="text-amber-300" />
              5.0 The Knot Rating · 2025 Best of Weddings
            </div>
          </div>

          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Contact
            </p>

            <div className="space-y-5">
              <a
                href="tel:5133444446"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-300/50 hover:bg-white/[0.06]"
              >
                <Phone size={20} className="mt-1 text-amber-300" />
                <span>
                  <span className="block text-sm uppercase tracking-[0.2em] text-white/40">
                    Phone
                  </span>
                  <span className="mt-1 block text-lg font-semibold">
                    513-344-4446
                  </span>
                </span>
              </a>

              <a
                href="mailto:bartenderwithasmile@myyahoo.com"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-300/50 hover:bg-white/[0.06]"
              >
                <Mail size={20} className="mt-1 text-amber-300" />
                <span>
                  <span className="block text-sm uppercase tracking-[0.2em] text-white/40">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-lg font-semibold">
                    bartenderwithasmile@myyahoo.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <MapPin size={20} className="mt-1 text-amber-300" />
                <span>
                  <span className="block text-sm uppercase tracking-[0.2em] text-white/40">
                    Serving
                  </span>
                  <span className="mt-1 block text-lg font-semibold">
                    Cincinnati, Ohio 45213
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Clock3 size={20} className="mt-1 text-amber-300" />
                <span>
                  <span className="block text-sm uppercase tracking-[0.2em] text-white/40">
                    Hours
                  </span>
                  <span className="mt-1 block text-lg font-semibold">
                    Mon - Sat · 9:00am - 7:00pm
                  </span>
                  <span className="mt-1 block text-sm text-white/45">
                    Sunday closed
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Explore
            </p>

            <nav className="grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white/65 transition hover:border-amber-300/50 hover:text-amber-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="mt-6 block rounded-full bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:bg-amber-300"
            >
              Request Availability
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-white/40 md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()} Bartender With A Smile. All rights
              reserved.
            </p>

            <p>Certificate of Insurance (COI) provided upon request.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}