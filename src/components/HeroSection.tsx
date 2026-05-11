import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://dam.hollandandbarrettimages.co.uk/default/_raw/fe865779-7b6f-46ef-ba8c-8ef8b3ca1b14/hair-masks-hero.png')",
        }}
      >
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Soft Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Small Header */}
        <p className="uppercase tracking-[0.3em] text-amber-200 text-sm md:text-base mb-5 font-medium">
          Handmade Bath & Body Essentials
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
          Self Care
          <br />
          <span className="font-semibold text-amber-200">
            Made Beautiful
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
          Luxurious handcrafted soaps, oils, scrubs, and beauty products
          created to nourish your skin and elevate your daily routine.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <Link href="/products">
            <Button
              size="lg"
              className="bg-amber-200 hover:bg-amber-300 text-black px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300"
            >
              Shop Collection
            </Button>
          </Link>

          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}