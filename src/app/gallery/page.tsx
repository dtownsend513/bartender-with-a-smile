import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://i.etsystatic.com/17407682/r/il/7f8feb/5814549555/il_570xN.5814549555_qi4q.jpg",
    alt: "Handmade natural soap collection",
    title: "Artisan Soap Collection",
  },
  {
    id: 2,
    src: "https://lospoblanos.com/uploads/images/blog/_large/bar_soap_set.jpg",
    alt: "Natural soap bar set",
    title: "Premium Soap Gift Set",
  },
  {
    id: 3,
    src: "http://bigislandbees.com/cdn/shop/products/raw-organic-honey-bath-and-body-products-big-island-bees-lehua-honey-bar-soaps-grouped_638e608b-ed53-42f7-8117-46577da0b290.jpg?v=1506725343",
    alt: "Honey and oat soap bars",
    title: "Honey & Oat Collection",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=800",
    alt: "Natural skincare ingredients",
    title: "Natural Ingredients",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&w=800",
    alt: "Bath salts and scrubs",
    title: "Exfoliating Scrubs",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&w=800",
    alt: "Essential oils and serums",
    title: "Nourishing Oils",
  },
  {
    id: 7,
    src: "https://m.media-amazon.com/images/I/81iEPV8bCyL._UF1000,1000_QL80_.jpg",
    alt: "Natural bar soap collection",
    title: "Cleansing Bar Trio",
  },
  {
    id: 8,
    src: "https://m.media-amazon.com/images/I/71aKESRyr7L._UF1000,1000_QL80_.jpg",
    alt: "Lavender soap collection",
    title: "Lavender Collection",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ee]">
      
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=1600"
            alt="Luxury skincare"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          
          <p className="uppercase tracking-[0.3em] text-sm text-amber-200 font-semibold mb-5">
            Komposition Beauty Gallery
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Handmade Beauty
            <br />
            In Every Detail
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of handcrafted bath and body products inspired by beauty, self-care, and intentional living.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            
            <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
              Product Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-gray-950 mb-6">
              Crafted With Care
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A closer look at the textures, ingredients, and handcrafted beauty behind Komposition products.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500"></div>

                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            
            <h3 className="text-4xl md:text-5xl font-light text-gray-950 mb-6">
              Ready To Explore More?
            </h3>

            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Browse the full Komposition Beauty collection and discover products crafted to elevate your self-care routine.
            </p>

            <Link href="/products">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white rounded-full px-10 py-6 text-lg font-semibold"
              >
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[2rem] shadow-sm p-10 md:p-16 text-center">
            
            <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
              Follow Along
            </p>

            <h3 className="text-4xl font-light text-gray-950 mb-6">
              Connect With Komposition Beauty
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Follow our journey, product highlights, and self-care inspiration across social media.
            </p>

            <div className="flex justify-center gap-5">
              
              <a
                href="https://www.instagram.com/kompbeau/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f8f3ee] hover:bg-amber-100 transition-all"
              >
                <Instagram className="h-6 w-6 text-amber-700" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61554421294812"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f8f3ee] hover:bg-amber-100 transition-all"
              >
                <Facebook className="h-6 w-6 text-amber-700" />
              </a>

              <a
                href="https://www.youtube.com/@The_Komposition"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f8f3ee] hover:bg-amber-100 transition-all"
              >
                <Youtube className="h-6 w-6 text-amber-700" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}