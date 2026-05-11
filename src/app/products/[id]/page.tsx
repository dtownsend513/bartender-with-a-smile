"use client";
import { formatCategoryName } from "@/lib/products";
import { useState } from "react";

import { useParams, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  ArrowLeft,
  ShoppingCart,
  Star,
  Minus,
  Plus,
} from "lucide-react";

import {
  getProductById,
  products,
} from "@/lib/products";

import { useCart } from "@/components/CartContext";

export default function ProductDetailPage() {
  const params = useParams();

  const router = useRouter();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const [addingToCart, setAddingToCart] =
    useState(false);

  const product = getProductById(
    params.id as string
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8f3ee] flex items-center justify-center px-6">
        <div className="text-center">
          
          <h1 className="text-4xl font-light text-gray-950 mb-6">
            Product Not Found
          </h1>

          <Link href="/products">
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
              Return To Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setAddingToCart(true);

    addToCart(product, quantity);

    setTimeout(() => {
      setAddingToCart(false);
    }, 500);
  };

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8f3ee]">
      
      {/* Header */}
      <div className="border-b border-[#eadfd4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="rounded-full hover:bg-[#f8f3ee]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back To Products
          </Button>
        </div>
      </div>

      {/* Product */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            
            {/* Image */}
            <div className="relative">
              
              <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              
              <div>
                <Badge className="rounded-full bg-amber-100 text-amber-800 hover:bg-amber-100 mb-5 px-4 py-1">
                  {formatCategoryName(product.category)}
                </Badge>

                <h1 className="text-5xl font-light text-gray-950 leading-tight mb-5">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-gray-500">
                    Customer Favorite
                  </span>
                </div>

                <p className="text-4xl font-semibold text-amber-800">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                  Description
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                  Ingredients
                </h3>

                <div className="flex flex-wrap gap-3">
                  {product.ingredients.map(
                    (ingredient, index) => (
                      <Badge
                        key={index}
                        className="rounded-full bg-white border border-[#eadfd4] text-gray-700 hover:bg-white px-4 py-2"
                      >
                        {ingredient}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-xl font-semibold text-gray-950 mb-4">
                  Quantity
                </h3>

                <div className="flex items-center gap-4">
                  
                  <div className="flex items-center bg-white rounded-full p-2 shadow-sm">
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        setQuantity(
                          Math.max(1, quantity - 1)
                        )
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <span className="w-10 text-center font-semibold text-lg">
                      {quantity}
                    </span>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Button
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-lg font-semibold"
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-3" />

                  {addingToCart
                    ? "Adding..."
                    : `Add To Cart • $${(
                        product.price * quantity
                      ).toFixed(2)}`}
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#eadfd4]">
                
                <div className="bg-white rounded-3xl p-5 text-center shadow-sm">
                  <h4 className="font-semibold text-gray-950 mb-2">
                    Handmade
                  </h4>

                  <p className="text-sm text-gray-600">
                    Crafted in small batches
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-5 text-center shadow-sm">
                  <h4 className="font-semibold text-gray-950 mb-2">
                    Plant-Based
                  </h4>

                  <p className="text-sm text-gray-600">
                    Ingredient-conscious care
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-5 text-center shadow-sm">
                  <h4 className="font-semibold text-gray-950 mb-2">
                    Self-Care
                  </h4>

                  <p className="text-sm text-gray-600">
                    Designed for daily rituals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {relatedProducts.length > 0 && (
            <div className="mt-28">
              
              <div className="mb-10">
                <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
                  You May Also Like
                </p>

                <h2 className="text-4xl font-light text-gray-950">
                  Related Products
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {relatedProducts.map(
                  (relatedProduct) => (
                    <Card
                      key={relatedProduct.id}
                      className="group border-0 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
                    >
                      <Link
                        href={`/products/${relatedProduct.id}`}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <CardContent className="p-6">
                          
                          <h3 className="text-xl font-semibold text-gray-950 mb-3 line-clamp-2">
                            {relatedProduct.name}
                          </h3>

                          <p className="text-2xl font-semibold text-amber-800">
                            $
                            {relatedProduct.price.toFixed(
                              2
                            )}
                          </p>
                        </CardContent>
                      </Link>
                    </Card>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}