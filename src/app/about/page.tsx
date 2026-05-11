import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ee]">
      
      {/* Hero */}
      <section className="relative overflow-hidden">
        
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1974&auto=format&fit=crop"
            alt="Luxury skincare"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
          
          <p className="uppercase tracking-[0.3em] text-sm text-amber-200 font-semibold mb-5">
            About Komposition Beauty
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Handmade Self-Care
            <br />
            Inspired By Nature
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Thoughtfully crafted bath and body products designed to bring beauty,
            comfort, and intentional self-care into your everyday routine.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div>
              <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-gray-950 mb-8 leading-tight">
                Beauty That Feels
                <br />
                Personal
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Komposition Beauty was created with a simple idea — self-care
                  should feel luxurious, intentional, and inspired by ingredients
                  that nourish both skin and confidence.
                </p>

                <p>
                  Our handcrafted bath and body products are made in small batches
                  using thoughtfully selected ingredients, rich textures, and
                  beautiful scents designed to elevate your daily routine.
                </p>

                <p>
                  We believe beauty products should feel honest, comforting, and
                  made with care — not overly complicated or mass produced.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=1200"
                  alt="Natural skincare ingredients"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
              What We Value
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-gray-950">
              Crafted With Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="rounded-3xl border-0 shadow-sm bg-white">
              <CardContent className="p-10 text-center">
                
                <div className="w-16 h-16 rounded-full bg-amber-100 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-amber-700"></div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                  Plant-Based
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Ingredient-conscious bath and body products inspired by natural skincare traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm bg-white">
              <CardContent className="p-10 text-center">
                
                <div className="w-16 h-16 rounded-full bg-amber-100 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-amber-700"></div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                  Handmade
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Crafted in small batches with attention to quality, texture, and detail.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm bg-white">
              <CardContent className="p-10 text-center">
                
                <div className="w-16 h-16 rounded-full bg-amber-100 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-amber-700"></div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                  Self-Care Focused
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Products designed to make daily routines feel relaxing and intentional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-white rounded-[2rem] shadow-sm p-10 md:p-16">
            
            <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
              Our Commitment
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-gray-950 mb-8">
              Luxury In Everyday Rituals
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Komposition Beauty, we believe self-care should feel meaningful,
              comforting, and beautifully simple.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Every product is created with the goal of helping you slow down,
              care for your skin, and enjoy moments of intentional beauty in your routine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}