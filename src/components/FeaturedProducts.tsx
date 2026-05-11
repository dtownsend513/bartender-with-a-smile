"use client";
import { formatCategoryName } from "@/lib/products";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartContext";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  const featuredProducts = products.slice(0, 6);

  const handleAddToCart = async (product: typeof products[0]) => {
    setAddingToCart(product.id);
    addToCart(product);

    setTimeout(() => {
      setAddingToCart(null);
    }, 500);
  };

  return (
    <section className="py-20 bg-[#f8f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
            Featured Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-gray-950 mb-5">
            Handmade Beauty Essentials
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plant-based bath and body care made with quality ingredients,
            beautiful textures, and a self-care experience designed to feel personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group border-0 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-[#eee4da]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4">
                  <Badge className="rounded-full bg-white/90 text-amber-800 hover:bg-white px-4 py-1 shadow-sm">
                    {formatCategoryName(product.category)}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <Link href={`/products/${product.id}`}>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white text-black hover:bg-amber-100 shadow-md"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>

                    <Button
                      size="icon"
                      className="rounded-full bg-amber-200 hover:bg-amber-300 text-black shadow-md"
                      onClick={() => handleAddToCart(product)}
                      disabled={addingToCart === product.id}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-5">
                  <h3 className="font-semibold text-xl text-gray-950 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-semibold text-amber-800">
                    ${product.price.toFixed(2)}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    disabled={addingToCart === product.id}
                    className="rounded-full border-amber-700 text-amber-800 hover:bg-amber-100 hover:text-amber-900"
                  >
                    {addingToCart === product.id ? "Adding..." : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-10 py-6 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View Full Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}