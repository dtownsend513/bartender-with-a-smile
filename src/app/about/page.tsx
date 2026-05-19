import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1800&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#ffd700] font-semibold mb-5">
              Our Story
            </p>

            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Meet
              <br />
              Ta’Marsh Pope
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              Founder of Bartender With A Smile, bringing professional mobile
              bartending, warm hospitality, and unforgettable drink experiences
              to events throughout Cincinnati.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 border border-[#ffd700]/30 rounded-[2rem]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/tmbartender.png"
                alt="Ta'Marsh Pope"
                width={700}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-[#ffd700] font-semibold mb-5">
              Founder & Bartender
            </p>

            <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
              A personal touch behind every pour.
            </h2>

            <div className="space-y-7 text-lg md:text-xl text-white/75 leading-relaxed">
              <p>
                Ta’Marsh Pope is the founder and owner of Bartender With A Smile,
                a professional bartending service based in Cincinnati, Ohio.
              </p>

              <p>
                With years of experience in the industry, Ta’Marsh is known for
                creating delicious, unique drinks tailored to each client’s taste,
                event style, and guest experience.
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

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-[#ffd700] hover:bg-[#f5c400] text-black px-8 py-4 rounded-full font-bold text-center transition"
              >
                Book Your Event
              </a>

              <a
                href="tel:5133444446"
                className="border border-white/30 bg-white/5 hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-center transition"
              >
                Call 513-344-4446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-semibold mb-5">
              What Makes Us Different
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              More Than Drinks
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#18120d] border border-white/10 rounded-[2rem] p-8">
              <div className="text-[#ffd700] text-4xl mb-6">✦</div>

              <h3 className="text-2xl font-semibold mb-4">
                Professional Service
              </h3>

              <p className="text-white/65 leading-relaxed">
                Reliable bartending support designed to keep your event smooth,
                organized, and enjoyable.
              </p>
            </div>

            <div className="bg-[#18120d] border border-white/10 rounded-[2rem] p-8">
              <div className="text-[#ffd700] text-4xl mb-6">✦</div>

              <h3 className="text-2xl font-semibold mb-4">
                Custom Drink Experience
              </h3>

              <p className="text-white/65 leading-relaxed">
                Signature drinks and beverage service tailored to your event,
                guests, and celebration style.
              </p>
            </div>

            <div className="bg-[#18120d] border border-white/10 rounded-[2rem] p-8">
              <div className="text-[#ffd700] text-4xl mb-6">✦</div>

              <h3 className="text-2xl font-semibold mb-4">
                Welcoming Energy
              </h3>

              <p className="text-white/65 leading-relaxed">
                A warm, friendly presence that helps guests feel comfortable,
                served, and celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}