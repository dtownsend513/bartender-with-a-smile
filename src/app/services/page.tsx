const packages = [
  {
    name: "Package 1",
    price: "$325",
    guests: "Up to 75 guests",
    bartenders: "1 Professional Bartender",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=90",
    features: [
      "4 hour service minimum",
      "Bar equipment",
      "Cups",
      "Beverage napkins",
      "Straws",
      "Garnish: lemons, limes, and cherries",
    ],
    note:
      "Pour service only. Client provides liquor, mixers, ice, and juice.",
  },

  {
    name: "Package 2",
    price: "$625",
    guests: "Up to 150 guests",
    bartenders: "2 Professional Bartenders",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=90",
    features: [
      "4 hour service minimum",
      "Bar equipment",
      "Choice of 2 signature drinks for weddings",
      "Cups",
      "Beverage napkins",
      "Straws",
      "Garnish: lemons, limes, and cherries",
    ],
    note:
      "Mixers, juices, and ice are available as an add-on. Pour service only.",
  },

  {
    name: "Package 3",
    price: "$725",
    guests: "Up to 200 guests",
    bartenders: "2 Professional Bartenders",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    features: [
      "4 hour service minimum",
      "Bar equipment",
      "2 signature drinks for weddings",
      "Cups",
      "Beverage napkins",
      "Straws",
      "Garnish: lemons, limes, and cherries",
    ],
    note:
      "Mixers, juices, and ice are available as an add-on. Pour service only.",
  },

  {
    name: "Package 4",
    price: "Call for quote",
    guests: "Under 75 guests",
    bartenders: "Custom Private Event Package",
    image:
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=1200&q=90",
    features: [
      "Private parties",
      "Corporate events",
      "Customizable service",
      "Licensed and insured",
      "Certificate of Insurance available upon request",
    ],
    note:
      "Best for private parties and smaller events needing a custom setup.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden bg-black flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-[center_right]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b08] via-transparent to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-20 py-32">
          <div className="max-w-2xl lg:ml-8">
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#ffd700] font-semibold mb-6">
              Bar Services
            </p>

            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8 max-w-[700px]">
              Professional
              <br />
              Bartending
              <br />
              Services
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
              Skilled mobile bartending for weddings, private parties,
              celebrations, and corporate events throughout Cincinnati and
              surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-[#ffd700] hover:bg-[#f5c400] text-black px-8 py-4 rounded-full font-bold text-center transition"
              >
                Request A Quote
              </a>

              <a
                href="tel:5133444446"
                className="border border-white/30 bg-black/20 backdrop-blur hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-center transition"
              >
                Call 513-344-4446
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/70">
              <span>Licensed & Insured</span>
              <span className="text-[#ffd700]">•</span>
              <span>Weddings</span>
              <span className="text-[#ffd700]">•</span>
              <span>Private Events</span>
              <span className="text-[#ffd700]">•</span>
              <span>Corporate Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 lg:px-16 bg-[#0f0b08]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 min-h-[500px]">
            <img
              src="/images/fruitydrink.png"
              alt="Professional bartending drink"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[#ffd700] uppercase tracking-[0.25em] text-sm font-semibold mb-3">
                Fully Licensed & Insured
              </p>

              <h2 className="text-4xl font-light">
                4 Hour Service Minimum
              </h2>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
              What’s Included
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              Everything needed for a premium bar experience.
            </h2>

            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Packages include professional bartending service, bar equipment,
              beverage essentials, garnishes, and customizable options for your
              event.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Professional Bartenders",
                "Bar Equipment",
                "Cups & Napkins",
                "Straws & Garnishes",
                "Signature Drinks",
                "COI Upon Request",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#18120d] px-5 py-4 text-[#ffd700] font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="pb-16 px-6 lg:px-16 bg-[#0f0b08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
              Packages
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Choose Your Bar Service
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="group overflow-hidden bg-[#18120d] border border-white/10 rounded-[2rem] hover:border-[#ffd700]/60 transition duration-300"
              >
                <div className="grid md:grid-cols-[0.9fr_1.1fr] h-full">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <p className="text-[#ffd700] text-3xl font-bold">
                        {pkg.price}
                      </p>

                      <p className="text-white/75 text-sm mt-1">
                        {pkg.guests}
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-semibold mb-3">
                      {pkg.name}
                    </h3>

                    <p className="text-white/60 mb-6">
                      {pkg.bartenders}
                    </p>

                    <ul className="space-y-3 mb-7">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-white/75 leading-relaxed"
                        >
                          <span className="text-[#ffd700]">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className="text-white/50 leading-relaxed text-sm">
                      {pkg.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* COI / LICENSE SECTION */}
          <div className="mt-16 rounded-[2rem] border border-[#ffd700]/30 bg-[#18120d] px-8 py-10 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-4">
              Fully Licensed & Insured
            </p>

            <h3 className="text-3xl md:text-5xl font-light mb-5">
              Certificate of Insurance Provided Upon Request
            </h3>

            <p className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
              Bartender With A Smile can provide a Certificate of Insurance
              upon request for venues, event planners, private events, and
              corporate functions.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-[#111018] py-10 px-6 border-y border-white/10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            "/images/fruitydrink.png",
            "/images/tam.png",
            "/images/wed.png",
            "/images/tmbartender.png",
            "/images/fruitydrink.png",
          ].map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="overflow-hidden bg-black border border-white/10"
            >
              <img
                src={image}
                alt="Bartender With A Smile gallery preview"
                className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black py-24 px-6 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
            Book Your Bartender
          </p>

          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Need A Custom Quote?
          </h2>

          <p className="text-white/75 text-xl leading-relaxed mb-10">
            Contact Bartender With A Smile to discuss your guest count, date,
            location, mixers, ice, juices, add-ons, and availability.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#ffd700] hover:bg-[#f5c400] text-black px-10 py-5 rounded-full font-bold transition"
          >
            Request A Quote
          </a>
        </div>
      </section>
    </main>
  );
}