import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
          Luxury Mobile Bartending
        </p>

        <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-light leading-tight md:text-7xl">
          Let’s Create An
          <br />
          Unforgettable Experience
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-neutral-300">
          Weddings, private parties, birthdays, corporate events,
          upscale gatherings, and celebrations designed with style,
          professionalism, and unforgettable hospitality.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-amber-400 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-105 hover:bg-amber-300"
          >
            Request A Quote

            <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <span className="absolute inset-0 bg-white/20 blur-xl" />
            </span>
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition duration-300 hover:border-amber-300 hover:bg-white/10 hover:text-amber-300"
          >
            View Services
          </Link>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-sm text-neutral-400">
          Certificate of Insurance (COI) provided upon request.
        </p>
      </div>
    </section>
  );
}