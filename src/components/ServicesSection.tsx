import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Cake, Heart } from "lucide-react";

const services = [
  {
    title: "Weddings",
    eyebrow: "Elegant Bar Service",
    description:
      "Reception, cocktail hour, signature drinks, and professional wedding bar support from the first toast to the final pour.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90",
    icon: Heart,
  },
  {
    title: "Private Events",
    eyebrow: "Personal Celebrations",
    description:
      "Birthdays, anniversaries, graduations, holiday parties, and private gatherings served with polish and personality.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=90",
    icon: Cake,
  },
  {
    title: "Corporate Events",
    eyebrow: "Professional Hosting",
    description:
      "Company parties, mixers, launches, networking events, and professional gatherings with smooth, reliable bar service.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=90",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#080604] px-6 py-28 text-white lg:px-16">
      <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[140px]" />
      <div className="absolute bottom-0 right-[-10%] h-[360px] w-[360px] rounded-full bg-white/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#ffd700]">
              Premium Mobile Bartending
            </p>

            <h2 className="text-5xl font-light leading-[0.95] md:text-7xl">
              Give your guests something to talk about.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Bartender With A Smile brings the bar, the service, the
              personality, and the polish your event needs to feel professional
              from the first pour to the final toast.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Weddings", "Private Events", "Corporate", "COI Available"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href="/bar-services"
                className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-2 hover:border-amber-300/50"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/30 bg-black/50 text-amber-300 backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-amber-300 group-hover:text-black">
                  <Icon size={24} />
                </div>

                <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
                  0{index + 1}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ffd700]">
                    {service.eyebrow}
                  </p>

                  <h3 className="mb-4 text-4xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mb-7 leading-relaxed text-white/75">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-3 rounded-full bg-[#ffd700] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition group-hover:bg-white">
                    Learn More
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:flex-row md:p-8">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Need Something Custom?
            </p>

            <p className="text-white/65">
              Custom bar setups, signature drink ideas, and event-specific
              service options are available.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-105 hover:bg-amber-300"
          >
            Request Availability
          </Link>
        </div>
      </div>
    </section>
  );
}