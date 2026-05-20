import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Phone, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-28 text-white">
      <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[150px]" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Ready To Celebrate?
          </p>

          <h2 className="mb-8 text-5xl font-light leading-tight md:text-7xl">
            Bring The Bar
            <br />
            To Your Event
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/75 md:text-2xl">
            From weddings to private parties, Bartender With A Smile helps
            create a smooth, professional, and memorable guest experience.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:bg-amber-300"
            >
              Request Availability
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="tel:5133444446"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl transition hover:border-amber-300/50 hover:text-amber-300"
            >
              <Phone size={18} />
              Call 513-344-4446
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
            <CalendarCheck className="mx-auto mb-4 text-amber-300" size={28} />

            <h3 className="mb-2 text-xl font-semibold">
              Event Availability
            </h3>

            <p className="text-sm leading-relaxed text-white/60">
              Send your date, guest count, location, and event type.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
            <ShieldCheck className="mx-auto mb-4 text-amber-300" size={28} />

            <h3 className="mb-2 text-xl font-semibold">
              Licensed & Insured
            </h3>

            <p className="text-sm leading-relaxed text-white/60">
              Certificate of Insurance provided upon request.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
            <Phone className="mx-auto mb-4 text-amber-300" size={28} />

            <h3 className="mb-2 text-xl font-semibold">
              Direct Contact
            </h3>

            <p className="text-sm leading-relaxed text-white/60">
              Call directly for questions about packages and booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}