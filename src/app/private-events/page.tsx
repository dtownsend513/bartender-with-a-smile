const eventTypes = [
  {
    title: "Weddings",
    description:
      "Elegant bar service for ceremonies, receptions, and cocktail hours.",
  },
  {
    title: "Birthday Parties",
    description:
      "Fun, friendly bartending for milestone birthdays and private celebrations.",
  },
  {
    title: "Anniversaries",
    description:
      "Personalized drink service for meaningful celebrations with family and friends.",
  },
  {
    title: "Corporate Events",
    description:
      "Professional beverage service for mixers, office parties, launches, and company events.",
  },
  {
    title: "Graduation Parties",
    description:
      "Reliable bartending support for graduation celebrations and family gatherings.",
  },
  {
    title: "Holiday Parties",
    description:
      "Seasonal cocktails and bar service for festive private or business events.",
  },
];

export default function PrivateEventsPage() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b08] via-transparent to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#ffd700] font-semibold mb-5">
              Private Events
            </p>

            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Bring The Bar
              <br />
              To Your Celebration
            </h1>

            <p className="text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
              Bartender With A Smile provides mobile bartending for weddings,
              birthdays, private parties, corporate events, and special
              celebrations throughout Cincinnati and surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-[#ffd700] hover:bg-[#f5c400] text-black px-8 py-4 rounded-full font-bold text-center transition"
              >
                Request Availability
              </a>

              <a
                href="/bar-services"
                className="border border-white/40 bg-black/20 backdrop-blur hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-center transition"
              >
                View Bar Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 lg:px-16 bg-[#0f0b08]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="bg-[#18120d] border border-white/10 rounded-[2rem] p-8">
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-6">
              Events We Serve
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Weddings",
                "Birthdays",
                "Anniversaries",
                "Corporate",
                "Graduations",
                "Holidays",
                "Private Dinners",
                "Community Events",
              ].map((event) => (
                <div
                  key={event}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-center text-[#ffd700] font-semibold"
                >
                  {event}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
              Professional Mobile Bartending
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              A polished bar experience without the stress.
            </h2>

            <p className="text-white/70 text-xl leading-relaxed mb-6">
              Whether your event is intimate or large, Bartender With A Smile
              helps keep the bar experience smooth, organized, and enjoyable
              for your guests.
            </p>

            <p className="text-white/70 text-xl leading-relaxed">
              From setup to service, Ta’Marsh brings professionalism,
              personality, and a welcoming smile to every celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="pb-24 px-6 lg:px-16 bg-[#0f0b08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
              Perfect For
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Celebrations Of Every Kind
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="group bg-[#18120d] border border-white/10 rounded-[2rem] p-8 hover:border-[#ffd700]/60 hover:-translate-y-2 transition"
              >
                <div className="text-[#ffd700] text-4xl mb-6">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {event.title}
                </h3>

                <p className="text-white/65 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative overflow-hidden bg-black py-24 px-6 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
            Book Your Event
          </p>

          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Make Your Event Easy To Enjoy
          </h2>

          <p className="text-white/75 text-xl leading-relaxed mb-10">
            Tell us your event type, guest count, date, and location. We’ll help
            you plan the right bartending service for your celebration.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#ffd700] hover:bg-[#f5c400] text-black px-10 py-5 rounded-full font-bold transition"
          >
            Request Availability
          </a>
        </div>
      </section>
    </main>
  );
}