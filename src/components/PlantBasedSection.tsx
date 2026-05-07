import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PlantBasedSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Plant-Based Ingredients
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Harmonizing nature with skincare. All of our products are made with
              plant based ingredients that are easy-to-read. We don't bombard you
              with fancy names to disguise harsh additives that wouldn't love on
              your skin the way we do!
            </p>

            <Link href="/gallery">
              <Button
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                View Our Gallery
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-full overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=800"
                alt="Natural skincare"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
