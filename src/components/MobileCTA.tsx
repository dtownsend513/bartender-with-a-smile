"use client";

import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[90] md:hidden">
      <div className="flex items-center gap-3 rounded-[2rem] border border-white/10 bg-black/70 p-3 shadow-2xl backdrop-blur-2xl">
        <a
          href="tel:5133444446"
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:border-amber-300/50 hover:text-amber-300"
        >
          <Phone size={18} />
          Call
        </a>

        <Link
          href="/contact"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-2xl bg-amber-400 px-4 py-4 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:bg-amber-300"
        >
          <CalendarDays size={18} />
          Request Quote
        </Link>
      </div>
    </div>
  );
}