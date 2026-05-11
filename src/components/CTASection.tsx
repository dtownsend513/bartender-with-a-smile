import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nourishsavannah.com/cdn/shop/files/Nourish-8951.jpg?v=1723563756&width=1440')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        <p className="uppercase tracking-[0.3em] text-sm text-amber-200 font-semibold mb-5">
          Luxury Self-Care Experience
        </p>

        <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
          Handmade Beauty
          <br />
          Crafted With Care
        </h2>

        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-14">
          Explore thoughtfully crafted bath and body essentials designed
          to nourish your skin, elevate your routine, and bring a touch
          of luxury into everyday self-care.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3 text-amber-200">
              Plant-Based
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Carefully selected ingredients inspired by natural skincare traditions.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3 text-amber-200">
              Handmade
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Crafted in small batches with attention to quality, texture, and care.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3 text-amber-200">
              Self-Care Focused
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Products created to make everyday routines feel relaxing and intentional.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
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
              variant="outline"
              size="lg"
              className="border border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}