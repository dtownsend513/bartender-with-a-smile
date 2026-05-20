import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  GlassWater,
  HeartHandshake,
  Martini,
  Sparkles,
  Star,
} from "lucide-react";

const values = [
  {
    title: "Professional Service",
    description:
      "Reliable mobile bartending support designed to keep your event smooth, organized, and enjoyable.",
    icon: BadgeCheck,
  },
  {
    title: "Custom Drink Experience",
    description:
      "Signature cocktails and beverage service tailored to your event style, guest list, and celebration.",
    icon: GlassWater,
  },
  {
    title: "Welcoming Energy",
    description:
      "A warm, friendly presence that helps guests feel comfortable, served, and celebrated.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080604] text-white">
      <section className="relative overflow-hidden bg-black px-6 pb-24 pt-36 lg:px-16 lg:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-transparent to-black/35" />
        <div className="absolute left-[-10%] top-24 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-amber-300/[0.06] px-5 py-3 text-amber-300 backdrop-blur-xl">
              <Martini size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                Our Story
              </span>
            </div>

            <h1 className="hero-title mb-8 text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Meet
              <br />
              Ta’Marsh Pope
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
              Founder of Bartender With A Smile, bringing professional mobile
              bartending, warm hospitality, and unforgettable cocktail
              experiences to events throughout Cincinnati.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 lg:px-16">
        <div className="absolute right-[-10%] top-16 h-[380px] w-[380px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.25rem] border border-[#ffd700]/25" />
            <div className="absolute -inset-2 rounded-[2rem] bg-amber-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/40">
              <Image
                src="/images/tmbartender.png"
                alt="Ta'Marsh Pope, founder of Bartender With A Smile"
                width={700}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="relative mt-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-2 text-amber-300">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                Known for professional service, warm hospitality, and cocktail
                experiences that help events feel polished and personal.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ffd700]">
              Founder & Bartender
            </p>

            <h2 className="mb-10 text-5xl font-light leading-tight md:text-6xl">
              A personal touch behind every pour.
            </h2>

            <div className="space-y-7 text-lg leading-relaxed text-white/75 md:text-xl">
              <p>
                Ta’Marsh Pope is the founder and owner of Bartender With A
                Smile, a professional mobile bartending service based in
                Cincinnati, Ohio.
              </p>

              <p>
                With years of experience in the industry, Ta’Marsh is known for
                creating delicious, unique drinks tailored to each client’s
                taste, event style, and guest experience.
              </p>

              <p>
                Born and raised in Cincinnati, Ta’Marsh developed a passion for
                mixology early on, experimenting with ingredients, flavors, and
                techniques to perfect her craft.
              </p>

              <p>
                As the owner of Bartender With A Smile, she brings a personal
                touch to every event. Her warm personality and welcoming energy
                help create an atmosphere where guests feel comfortable,
                celebrated, and taken care of.
              </p>

              <p>
                Beyond bartending, Ta’Marsh is passionate about helping clients
                create memorable event experiences. She takes time to understand
                each client’s needs and is committed to delivering service that
                feels polished, personal, and professional.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ffd700] px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-[#f5c400]"
              >
                Book Your Event
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="tel:5133444446"
                className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-center font-bold transition hover:bg-white hover:text-black"
              >
                Call 513-344-4446
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-24 lg:px-16">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-amber-300 backdrop-blur-xl">
              <Sparkles size={18} />

              <span className="text-xs font-bold uppercase tracking-[0.28em]">
                What Makes Us Different
              </span>
            </div>

            <h2 className="text-4xl font-light md:text-6xl">
              More Than Drinks
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-[2rem] border border-white/10 bg-[#18120d] p-8 transition duration-500 hover:-translate-y-2 hover:border-amber-300/50 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/[0.08] text-amber-300 transition group-hover:bg-amber-300 group-hover:text-black">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="leading-relaxed text-white/65">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-12">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            Ready To Plan Your Bar Service?
          </p>

          <h2 className="mb-7 text-4xl font-light leading-tight md:text-6xl">
            Let’s make your event feel easy, polished, and unforgettable.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
            Share your event date, guest count, and service needs. Bartender
            With A Smile will follow up with availability and next steps.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:bg-amber-300"
          >
            Request Availability
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}