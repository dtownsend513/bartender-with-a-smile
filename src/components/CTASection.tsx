export default function CTASection() {
  return (
    <section className="relative py-28 px-6 bg-[#2b1d16] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-amber-400 font-semibold mb-5">
          Ready To Celebrate?
        </p>

        <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
          Bring The Bar
          <br />
          To Your Event
        </h2>

        <p className="text-lg md:text-2xl text-white/75 leading-relaxed mb-10">
          From weddings to private parties, Bartender With A Smile helps create
          a smooth, professional, and memorable guest experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-amber-400 hover:bg-amber-300 text-black px-10 py-5 rounded-full font-semibold transition"
          >
            Request Availability
          </a>

          <a
            href="tel:5133444446"
            className="border border-white/30 hover:bg-white hover:text-black px-10 py-5 rounded-full font-semibold transition"
          >
            Call 513-344-4446
          </a>
        </div>
      </div>
    </section>
  );
}