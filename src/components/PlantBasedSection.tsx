import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PlantBasedSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            
            <div>
              <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
                Clean Ingredients
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-gray-950 leading-tight">
                Plant-Based
                <br />
                Beauty Care
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Every KoMposition Beauty product is thoughtfully handcrafted using
              plant-based ingredients selected to nourish, hydrate, and care for
              your skin naturally — without harsh additives or unnecessary fillers.
            </p>

            <p className="text-base text-gray-500 leading-relaxed max-w-xl">
              We believe skincare should feel luxurious, transparent, and made
              with ingredients you can actually recognize and trust.
            </p>

            <div>
              <Link href="/gallery">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-full text-base font-semibold transition-all duration-300"
                >
                  Explore Our Gallery
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            
            {/* Main Image */}
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=1200"
                alt="Natural skincare products"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Decorative Box */}
            <div className="absolute -bottom-8 -left-8 hidden md:block bg-[#f8f3ee] p-6 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700 font-semibold mb-2">
                Handmade
              </p>

              <p className="text-gray-700 leading-relaxed">
                Crafted in small batches with care, quality ingredients, and a passion for self-care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}