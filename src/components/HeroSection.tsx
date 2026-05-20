const heroImage = "/images/hero-bartender.jpg";

const fallbackHeroImage =
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2400&q=95";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-80 hero-bg-slow"
        style={{
          backgroundImage: `url('${fallbackHeroImage}')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-black/15 to-black/35" />

      <div className="absolute inset-0 opacity-[0.13] hero-noise" />

      <div className="absolute left-[-10%] top-[22%] h-[420px] w-[420px] rounded-full bg-[#ffd700]/10 blur-[120px] hero-glow" />
      <div className="absolute bottom-[14%] right-[8%] h-[260px] w-[260px] rounded-full bg-[#ffd700]/10 blur-[100px] hero-glow-delay" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-28 pt-36 lg:px-16 lg:pt-40">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-[#ffd700]/35 bg-black/45 px-5 py-3 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#ffd700] shadow-[0_0_18px_rgba(255,215,0,0.9)]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffd700] md:text-xs">
              Cincinnati Mobile Bartending
            </span>
          </div>

          <h1 className="hero-title animate-fade-up-delay-1 mb-7 text-5xl leading-[0.92] drop-shadow-[0_8px_35px_rgba(0,0,0,0.95)] md:text-7xl lg:text-8xl">
            Professional
            <br />
            Bartending
            <br />
            With A Smile
          </h1>

          <p className="animate-fade-up-delay-2 mb-9 max-w-2xl text-lg leading-relaxed text-white/88 drop-shadow-md md:text-2xl">
            Mobile bartending for weddings, private parties, corporate events,
            and celebrations throughout Cincinnati and surrounding areas.
          </p>

          <div className="animate-fade-up-delay-3 mb-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group rounded-full bg-[#ffd700] px-10 py-5 text-center font-black text-black shadow-[0_0_45px_rgba(255,215,0,0.25)] transition hover:bg-[#f5c400]"
            >
              Book Your Event
              <span className="inline-block pl-2 transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/bar-services"
              className="rounded-full border border-white/40 bg-black/30 px-10 py-5 text-center font-black backdrop-blur transition hover:bg-white hover:text-black"
            >
              View Packages
            </a>
          </div>

          <div className="animate-fade-up-delay-4 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="counter-card rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur transition hover:border-[#ffd700]/50">
              <p className="text-3xl font-black text-[#ffd700]">5.0★</p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                The Knot Rating
              </p>
            </div>

            <div className="counter-card rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur transition hover:border-[#ffd700]/50">
              <p className="text-3xl font-black text-[#ffd700]">13+</p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                Client Reviews
              </p>
            </div>

            <div className="counter-card rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur transition hover:border-[#ffd700]/50">
              <p className="text-3xl font-black text-[#ffd700]">2025</p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                Best of Weddings
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-16 z-20 hidden w-[360px] animate-fade-up-delay-4 xl:block">
        <div className="rounded-[2rem] border border-white/15 bg-black/55 p-7 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 text-2xl text-[#ffd700]">★★★★★</div>

          <p className="mb-5 leading-relaxed text-white/85">
            “Professional, friendly, and made our event feel special from start
            to finish.”
          </p>

          <div className="flex items-center justify-between">
            <p className="font-bold text-white">The Knot Client</p>

            <a
              href="https://www.theknot.com/marketplace/bartender-with-a-smile-cincinnati-oh-2087539"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#ffd700] transition hover:text-white"
            >
              View Reviews
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-6 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffd700] md:gap-12 md:text-xs">
          <span>Weddings</span>
          <span>Private Events</span>
          <span>Corporate Events</span>
          <span>Signature Drinks</span>
          <span>COI Available</span>
        </div>
      </div>
    </section>
  );
}