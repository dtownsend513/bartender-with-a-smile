const galleryImages = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-white">
      <section className="py-24 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-amber-400 font-semibold mb-5">
          Gallery
        </p>

        <h1 className="text-5xl md:text-7xl font-light mb-8">
          Event Highlights
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-white/70 leading-relaxed">
          A look at memorable celebrations, elegant setups, signature cocktails,
          and professional bartending experiences.
        </p>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#18120d]"
            >
              <img
                src={image}
                alt="Bartender event gallery"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8">
          Let’s Create Your Next Event
        </h2>

        <p className="text-white/70 text-xl mb-10">
          Contact Bartender With A Smile for weddings, private events, and
          celebrations throughout Cincinnati.
        </p>

        <a
          href="/contact"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-black px-10 py-5 rounded-full font-semibold transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}