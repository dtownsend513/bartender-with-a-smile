import Link from "next/link";
import { ArrowUpRight, Camera, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=90",
    title: "Cocktail Service",
    category: "Mobile Bar",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=90",
    title: "Bar Setup",
    category: "Event Service",
  },
  {
    src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=1200&q=90",
    title: "Private Events",
    category: "Celebrations",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=90",
    title: "Guest Experience",
    category: "Hospitality",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=90",
    title: "Signature Cocktails",
    category: "Craft Drinks",
  },
  {
    src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=90",
    title: "Professional Bartending",
    category: "Luxury Events",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080604] text-white">
      <section className="relative px-6 pb-20 pt-36 text-center md:pt-44">
        <div className="absolute left-1/2 top-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-amber-300/[0.06] px-5 py-3 text-amber-300 backdrop-blur-xl">
            <Camera size={18} />

            <span className="text-xs font-bold uppercase tracking-[0.28em]">
              Gallery
            </span>
          </div>

          <h1 className="mb-8 text-5xl font-light leading-tight md:text-7xl">
            Event Highlights
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Weddings, private parties, signature cocktails, elegant setups,
            and professional bartending experiences throughout Cincinnati and
            surrounding areas.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#18120d] shadow-2xl shadow-black/30"
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-[420px] w-full object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                  {image.category}
                </p>

                <h2 className="text-3xl font-semibold">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-28 text-center">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-amber-300 backdrop-blur-xl">
            <Sparkles size={18} />

            <span className="text-xs font-bold uppercase tracking-[0.28em]">
              Make It Memorable
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-light leading-tight md:text-6xl">
            Let’s Create Your Next Event
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Bartender With A Smile provides professional mobile bartending for
            weddings, private events, corporate gatherings, and upscale
            celebrations throughout Cincinnati.
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