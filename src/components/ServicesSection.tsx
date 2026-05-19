const services = [
  {
    title: "Weddings",
    description:
      "Reception, cocktail hour, and wedding bar service with signature drink options.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Private Events",
    description:
      "Birthday parties, anniversaries, graduations, holiday parties, and private gatherings.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Corporate Events",
    description:
      "Professional bar service for mixers, networking events, company parties, and launches.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-[#080604] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-end mb-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#ffd700] font-bold mb-5">
              Premium Mobile Bartending
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-[0.95]">
              Give your guests something to talk about.
            </h2>
          </div>

          <p className="text-white/70 text-xl leading-relaxed">
            Bartender With A Smile brings the bar, the service, the personality,
            and the polish your event needs to feel professional from the first
            pour to the final toast.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href="/bar-services"
              className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-black"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[#ffd700] text-sm uppercase tracking-[0.25em] font-bold mb-4">
                  Service
                </p>

                <h3 className="text-4xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/75 leading-relaxed mb-6">
                  {service.description}
                </p>

                <span className="inline-flex rounded-full bg-[#ffd700] text-black px-6 py-3 font-black">
                  Learn More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}