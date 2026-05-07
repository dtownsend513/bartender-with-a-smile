import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with product imagery */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://nourishsavannah.com/cdn/shop/files/Nourish-8951.jpg?v=1723563756&width=1440')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-700/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Shop with Confidence!
        </h2>

        <p className="text-xl md:text-2xl mb-8 font-semibold">
          Large Selection. Premium Quality. Amazing Prices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Natural</h3>
            <p className="text-white/90">Plant-based ingredients you can trust</p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤲</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Handmade</h3>
            <p className="text-white/90">Crafted with care in small batches</p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💚</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-white/90">Sustainable packaging and practices</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Shop All Products
            </Button>
          </Link>

          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Learn Our Story
            </Button>
          </Link>
        </div>

        {/* Bottom section with location info */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/90 mb-2">Located in Cincinnati, Ohio</p>
          <p className="text-white/80 text-sm">
            Monday - Friday: 9:00am - 5:00pm | Saturday - Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
}
