import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    quote: "Professional, helpful and very engaged with my guests.",
    author: "Jessica T.",
    event: "Private Event",
  },
  {
    quote: "Guests complimented how friendly and quick they were.",
    author: "Brandy R.",
    event: "Wedding",
  },
  {
    quote: "Excellent customer service and unique cocktails were a hit.",
    author: "Kelly H.",
    event: "Celebration",
  },
  {
    quote: "Professional, punctual and prepared for any event.",
    author: "Thorb T.",
    event: "Special Event",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-28 text-white">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-amber-300/[0.06] px-5 py-3 text-amber-300 backdrop-blur-xl">
              <Star size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Client Reviews
              </span>
            </div>

            <h2 className="text-5xl font-light leading-tight md:text-6xl">
              Trusted Across Cincinnati
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <div className="mb-4 flex gap-1 text-amber-300">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>

            <p className="text-lg leading-relaxed text-white/70">
              5.0 rating, The Knot reviews, weddings, private events, and
              professional mobile bartending experiences.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#18120d] p-8 transition duration-500 hover:-translate-y-2 hover:border-amber-300/50 hover:bg-white/[0.04]"
            >
              <Quote className="mb-6 text-amber-300" size={34} />

              <div className="mb-5 flex gap-1 text-amber-300">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>

              <p className="mb-8 leading-relaxed text-white/75">
                “{review.quote}”
              </p>

              <div>
                <p className="font-semibold text-white">
                  {review.author}
                </p>

                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/40">
                  {review.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl md:flex-row md:p-8 md:text-left">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Want to see more?
            </p>

            <p className="text-white/65">
              Read more client feedback and wedding reviews on The Knot.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.theknot.com/marketplace/bartender-with-a-smile-cincinnati-oh-2087539"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-105 hover:bg-amber-300"
            >
              Read Reviews
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-amber-300/50 hover:text-amber-300"
            >
              Request Availability
            </Link>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-white/35">
          Review excerpts adapted from public client reviews.
        </p>
      </div>
    </section>
  );
}