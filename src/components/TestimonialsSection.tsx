import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The lavender oatmeal soap feels gentle and soothing. My skin feels clean without feeling dry.",
    product: "Lavender Oatmeal Soap",
  },
  {
    id: 2,
    name: "Jessica L.",
    rating: 5,
    text: "The soap collection was beautiful. Each bar had its own scent, and the packaging made it feel special.",
    product: "Artisan Soap Collection",
  },
  {
    id: 3,
    name: "Michael R.",
    rating: 5,
    text: "The whipped body butter is rich, smooth, and perfect for dry skin. A little goes a long way.",
    product: "Whipped Body Butter",
  },
  {
    id: 4,
    name: "Emma C.",
    rating: 5,
    text: "The salt scrub left my skin feeling soft and refreshed. It feels like a spa product at home.",
    product: "Himalayan Salt Scrub",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#f8f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
            Customer Love
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-gray-950 mb-5">
            Self-Care That Feels Personal
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully made products for customers who value natural ingredients,
            beautiful scents, and a softer skincare routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden rounded-3xl border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-amber-200 mb-5" />

                <div className="flex items-center mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg">
                  “{testimonial.text}”
                </blockquote>

                <div className="border-t border-[#eadfd4] pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-950">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Customer Favorite
                    </p>
                  </div>

                  <p className="text-sm font-medium text-amber-800">
                    {testimonial.product}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="rounded-3xl bg-white px-6 py-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">
              Small Batch
            </p>
            <p className="text-gray-700">Made with care, not mass produced.</p>
          </div>

          <div className="rounded-3xl bg-white px-6 py-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">
              Plant-Based
            </p>
            <p className="text-gray-700">Ingredient-conscious bath and body care.</p>
          </div>

          <div className="rounded-3xl bg-white px-6 py-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">
              Handmade
            </p>
            <p className="text-gray-700">Crafted for a personal self-care experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}