import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://i.etsystatic.com/17407682/r/il/7f8feb/5814549555/il_570xN.5814549555_qi4q.jpg",
    alt: "Handmade natural soap collection",
    title: "Artisan Soap Collection"
  },
  {
    id: 2,
    src: "https://lospoblanos.com/uploads/images/blog/_large/bar_soap_set.jpg",
    alt: "Natural soap bar set",
    title: "Premium Soap Gift Set"
  },
  {
    id: 3,
    src: "http://bigislandbees.com/cdn/shop/products/raw-organic-honey-bath-and-body-products-big-island-bees-lehua-honey-bar-soaps-grouped_638e608b-ed53-42f7-8117-46577da0b290.jpg?v=1506725343",
    alt: "Honey and oat soap bars",
    title: "Honey & Oat Collection"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=800",
    alt: "Natural skincare ingredients",
    title: "Natural Ingredients"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&w=800",
    alt: "Bath salts and scrubs",
    title: "Exfoliating Scrubs"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&w=800",
    alt: "Essential oils and serums",
    title: "Nourishing Oils"
  },
  {
    id: 7,
    src: "https://m.media-amazon.com/images/I/81iEPV8bCyL._UF1000,1000_QL80_.jpg",
    alt: "Natural bar soap collection",
    title: "Cleansing Bar Trio"
  },
  {
    id: 8,
    src: "https://m.media-amazon.com/images/I/71aKESRyr7L._UF1000,1000_QL80_.jpg",
    alt: "Lavender soap collection",
    title: "Lavender Collection"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Look and Feel Your Best!</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Handmade Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our beautiful collection of handmade, natural bath and body products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to experience the difference?
          </h3>
          <p className="text-gray-600 mb-6">
            Browse our complete collection of handmade bath and body products
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg"
            >
              Shop Our Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tag us on social media
          </h3>
          <p className="text-gray-600 mb-6">
            Share your Komposition Beauty experience with #KompositionBeauty
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/kompbeau/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
              <span className="sr-only">Instagram</span>
              📷
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554421294812" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
              <span className="sr-only">Facebook</span>
              📘
            </a>
            <a href="https://www.youtube.com/@The_Komposition" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
              <span className="sr-only">YouTube</span>
              📺
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
