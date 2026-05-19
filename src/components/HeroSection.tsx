export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2200&q=95')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-transparent to-black/20" />

      <div className="relative z-10 min-h-[88vh] max-w-7xl mx-auto px-6 lg:px-16 flex items-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#ffd700] font-bold mb-6">
            Cincinnati Mobile Bartending
          </p>

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
            Professional
            <br />
            Bartending
            <br />
            With A Smile
          </h1>

          <p className="text-lg md:text-2xl text-white/85 leading-relaxed max-w-2xl mb-10">
            Mobile bartending for weddings, private parties, corporate events,
            and celebrations throughout Cincinnati and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/contact"
              className="bg-[#ffd700] hover:bg-[#f5c400] text-black px-10 py-5 rounded-full font-black text-center transition shadow-[0_0_40px_rgba(255,215,0,0.25)]"
            >
              Book Your Event
            </a>

            <a
              href="/bar-services"
              className="border border-white/40 bg-black/30 backdrop-blur hover:bg-white hover:text-black px-10 py-5 rounded-full font-black text-center transition"
            >
              View Packages
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/70">
            <span>Licensed & Insured</span>
            <span className="text-[#ffd700]">•</span>
            <span>Weddings</span>
            <span className="text-[#ffd700]">•</span>
            <span>Private Events</span>
            <span className="text-[#ffd700]">•</span>
            <span>5-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}