import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Komposition Beauty
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing you with the highest quality natural, handmade bath and body products
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to Komposition Beauty, your one-stop shop for plant-based and handmade bath and body products.
                We are a company dedicated to providing you with the highest quality beauty products that are safe,
                effective, biodegradable, and environmentally friendly.
              </p>
              <p>
                Our mission at Komposition Beauty is to provide our customers with the best possible experience when
                it comes to handmade bath and body products. We believe that nature provides everything we need to
                maintain healthy and vibrant skin without harsh additives.
              </p>
              <p>
                We strive to use only the purest ingredients in our products. Our products are free from harmful
                chemicals and synthetic additives and are formulated with nourishing botanicals, extracts, and oils
                that provide long-lasting hydration and protection.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=800"
              alt="Natural skincare ingredients"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
              <p className="text-gray-600">
                Plant-based ingredients that are easy to read and understand
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-xl font-semibold mb-3">Handmade</h3>
              <p className="text-gray-600">
                Crafted with care in small batches for premium quality
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable packaging and environmentally responsible practices
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commitment */}
        <div className="bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We are committed to promoting sustainability and environmental responsibility. That's why we use
              eco-friendly packaging and strive to reduce waste in all aspects of our business. Our products are
              suitable for most if not all skin types and are perfect for anyone who wants to prioritize handmade
              over mass-produced products.
            </p>
            <p>
              At Komposition Beauty, we are passionate about providing you with the best possible handmade and
              natural skin care experience. We are committed to continuously improving our products and services
              to ensure that you get the results you deserve. Thank you for choosing Komposition Beauty for your
              bath and body needs.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-gray-600 mb-2">Located in Cincinnati, Ohio</p>
          <p className="text-gray-600">Monday - Friday: 9:00am - 5:00pm | Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
