import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cake,
  CalendarHeart,
  GraduationCap,
  Heart,
  Martini,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const eventTypes = [
  {
    title: "Weddings",
    description:
      "Elegant bar service for ceremonies, receptions, and cocktail hours.",
    icon: Heart,
  },
  {
    title: "Birthday Parties",
    description:
      "Fun, friendly bartending for milestone birthdays and private celebrations.",
    icon: Cake,
  },
  {
    title: "Anniversaries",
    description:
      "Personalized drink service for meaningful celebrations with family and friends.",
    icon: CalendarHeart,
  },
  {
    title: "Corporate Events",
    description:
      "Professional beverage service for mixers, office parties, launches, and company events.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Graduation Parties",
    description:
      "Reliable bartending support for graduation celebrations and family gatherings.",
    icon: GraduationCap,
  },
  {
    title: "Holiday Parties",
    description:
      "Seasonal cocktail service for festive private or business events.",
    icon: PartyPopper,
  },
];

const serviceHighlights = [
  "Weddings",
  "Birthdays",
  "Anniversaries",
  "Corporate",
  "Graduations",
  "Holiday Parties",
  "Private Events",
  "Community Events",
];

export default function PrivateEventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080604] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pb-24 pt-36 lg:px-16 lg:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-transparent to-black/30" />
        <div className="absolute left-[-10%] top-24 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-amber-300/[0.06] px-5 py-3 text-amber-300 backdrop-blur-xl">
              <Martini size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Private Events
              </span>
            </div>

            <h1 className="hero-title mb-8 text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Bring The Bar
              <br />
              To Your Celebration
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Bartender With A Smile provides mobile bartending for weddings,
              birthdays, private parties, corporate events, and special
              celebrations throughout Cincinnati and surrounding areas.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ffd700] px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-[#f5c400]"
              >
                Request Availability
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/bar-services"
                className="rounded-full border border-white/40 bg-black/20 px-8 py-4 text-center font-bold backdrop-blur transition hover:bg-white hover:text-black"
              >
                View Bar Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#080604] px-6 py-24 lg:px-16">
        <div className="absolute right-[-10%] top-20 h-[380px] w-[380px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#18120d] p-7 shadow-2xl shadow-black/30 md:p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#ffd700]">
              Events We Serve
            </p>

            <div className="grid grid-cols-2 gap-4">
              {serviceHighlights.map((event) => (
                <div
                  key={event}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-center font-semibold text-[#ffd700] transition hover:border-amber-300/50 hover:bg-amber-300/[0.08]"
                >
                  {event}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#ffd700]">
              Professional Mobile Bartending
            </p>

            <h2 className="mb-8 text-4xl font-light leading-tight md:text-6xl">
              A polished bar experience without the stress.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-white/70 md:text-xl">
              <p>
                Whether your event is intimate or large, Bartender With A Smile
                helps keep the bar experience smooth, organized, and enjoyable
                for your guests.
              </p>

              <p>
                From setup to service, Ta’Marsh brings professionalism,
                personality, and a welcoming smile to every celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080604] px-6 pb-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-amber-300 backdrop-blur-xl">
              <Sparkles size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Perfect For
              </span>
            </div>

            <h2 className="text-4xl font-light md:text-6xl">
              Celebrations Of Every Kind
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.title}
                  className="group rounded-[2rem] border border-white/10 bg-[#18120d] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#ffd700]/60 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/[0.08] text-[#ffd700] transition group-hover:bg-[#ffd700] group-hover:text-black">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="leading-relaxed text-white/65">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
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
            <PartyPopper size={18} />

            <span className="text-xs font-bold uppercase tracking-[0.28em]">
              Book Your Event
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-light md:text-6xl">
            Make Your Event Easy To Enjoy
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-white/75 md:text-xl">
            Tell us your event type, guest count, date, and location. We’ll help
            you plan the right bartending service for your celebration.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#ffd700] px-10 py-5 font-bold text-black transition hover:scale-105 hover:bg-[#f5c400]"
          >
            Request Availability
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}