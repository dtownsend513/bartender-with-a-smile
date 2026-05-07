import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The lavender oatmeal soap is absolutely divine! My sensitive skin has never felt better. The natural ingredients really make a difference.",
    product: "Lavender Oatmeal Handmade Soap"
  },
  {
    id: 2,
    name: "Jessica L.",
    rating: 5,
    text: "The artisan soap collection set was perfect! Each bar has its own unique scent and they all feel so luxurious. Highly recommend!",
    product: "Artisan Soap Collection Set"
  },
  {
    id: 3,
    name: "Michael R.",
    rating: 5,
    text: "Love the whipped body butter! It's so rich and creamy, perfect for my dry skin. A little goes a long way and it smells amazing.",
    product: "Whipped Body Butter"
  },
  {
    id: 4,
    name: "Emma C.",
    rating: 5,
    text: "The Himalayan salt scrub is incredible! My skin feels so smooth and refreshed after using it. Will definitely be ordering more.",
    product: "Himalayan Pink Salt Scrub"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from real customers who love our handmade products!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Verified Purchase</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-amber-700">{testimonial.product}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">500+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">100% Natural Ingredients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
