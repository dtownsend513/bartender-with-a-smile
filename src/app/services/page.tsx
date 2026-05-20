import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Clock3,
  GlassWater,
  Martini,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

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
    note: "Pour service only. Client provides liquor, mixers, ice, and juice.",
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
    note: "Mixers, juices, and ice are available as an add-on. Pour service only.",
    featured: true,
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
    note: "Mixers, juices, and ice are available as an add-on. Pour service only.",
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
    note: "Best for private parties and smaller events needing a custom setup.",
  },
];

const includedItems = [
  {
    title: "Professional Bartenders",
    icon: Martini,
  },
  {
    title: "Bar Equipment",
    icon: GlassWater,
  },
  {
    title: "4 Hour Minimum",
    icon: Clock3,
  },
  {
    title: "Guest Count Options",
    icon: Users,
  },
  {
    title: "Licensed & Insured",
    icon: ShieldCheck,
  },
  {
    title: "COI Upon Request",
    icon: BadgeCheck,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080604] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pb-24 pt-36 lg:px-20 lg:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-[center_right]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-transparent to-black/20" />
        <div className="absolute left-[-10%] top-24 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-amber-300/[0.06] px-5 py-3 text-amber-300 backdrop-blur-xl">
              <Martini size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Bar Services
              </span>
            </div>

            <h1 className="hero-title mb-8 max-w-[760px] text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
              Professional
              <br />
              Bartending
              <br />
              Services
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Skilled mobile bartending for weddings, private parties,
              celebrations, and corporate events throughout Cincinnati and
              surrounding areas.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ffd700] px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-[#f5c400]"
              >
                Request A Quote
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="tel:5133444446"
                className="rounded-full border border-white/30 bg-black/20 px-8 py-4 text-center font-bold backdrop-blur transition hover:bg-white hover:text-black"
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

      <section className="relative bg-[#080604] px-6 py-24 lg:px-16">
        <div className="absolute right-[-10%] top-16 h-[380px] w-[380px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/30">
            <img
              src="/images/fruitydrink.png"
              alt="Professional bartending drink"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ffd700]">
                Fully Licensed & Insured
              </p>

              <h2 className="text-4xl font-light">
                4 Hour Service Minimum
              </h2>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#ffd700]">
              What’s Included
            </p>

            <h2 className="mb-8 text-4xl font-light leading-tight md:text-6xl">
              Everything needed for a polished bar experience.
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-white/70 md:text-xl">
              Packages include professional bartending service, bar equipment,
              beverage essentials, garnishes, and customizable options for your
              event. Liquor is provided by the client.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {includedItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#18120d] px-5 py-4 text-[#ffd700]"
                  >
                    <Icon size={20} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080604] px-6 pb-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#ffd700]">
                Packages
              </p>

              <h2 className="text-4xl font-light md:text-6xl">
                Choose Your Bar Service
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Pricing depends on guest count, bartender count, service length,
              event needs, and optional add-ons.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group overflow-hidden rounded-[2rem] border bg-[#18120d] transition duration-500 hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-[#ffd700]/60 shadow-2xl shadow-amber-950/30"
                    : "border-white/10 hover:border-[#ffd700]/50"
                }`}
              >
                <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[330px] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    {pkg.featured && (
                      <div className="absolute left-5 top-5 rounded-full bg-[#ffd700] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black">
                        Popular
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-3xl font-bold text-[#ffd700]">
                        {pkg.price}
                      </p>

                      <p className="mt-1 text-sm text-white/75">
                        {pkg.guests}
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="mb-3 text-3xl font-semibold">
                      {pkg.name}
                    </h3>

                    <p className="mb-6 text-white/60">
                      {pkg.bartenders}
                    </p>

                    <ul className="mb-7 space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 leading-relaxed text-white/75"
                        >
                          <Check
                            size={18}
                            className="mt-1 shrink-0 text-[#ffd700]"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-relaxed text-white/55">
                      {pkg.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#ffd700]/30 bg-[#18120d] px-8 py-10 text-center shadow-2xl shadow-black/30">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#ffd700]">
              Fully Licensed & Insured
            </p>

            <h3 className="mb-5 text-3xl font-light md:text-5xl">
              Certificate of Insurance Provided Upon Request
            </h3>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              Bartender With A Smile can provide a Certificate of Insurance upon
              request for venues, event planners, private events, and corporate
              functions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111018] px-6 py-10">
        <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "/images/fruitydrink.png",
            "/images/tam.png",
            "/images/wed.png",
            "/images/tmbartender.png",
            "/images/fruitydrink.png",
          ].map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="overflow-hidden border border-white/10 bg-black"
            >
              <img
                src={image}
                alt="Bartender With A Smile gallery preview"
                className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-24 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-amber-300 backdrop-blur-xl">
            <Sparkles size={18} />

            <span className="text-xs font-bold uppercase tracking-[0.28em]">
              Book Your Bartender
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-light md:text-6xl">
            Need A Custom Quote?
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-white/75 md:text-xl">
            Contact Bartender With A Smile to discuss your guest count, date,
            location, mixers, ice, juices, add-ons, and availability.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#ffd700] px-10 py-5 font-bold text-black transition hover:scale-105 hover:bg-[#f5c400]"
          >
            Request A Quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}