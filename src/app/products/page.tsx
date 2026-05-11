"use client";

import { useState, useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ShoppingCart,
  Eye,
  Filter,
} from "lucide-react";

import {
  products,
  categories,
} from "@/lib/products";

import { useCart } from "@/components/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("name");

  const [addingToCart, setAddingToCart] =
    useState<string | null>(null);

  const filteredAndSortedProducts =
    useMemo(() => {
      const filtered =
        selectedCategory === "all"
          ? products
          : products.filter(
              (product) =>
                product.category ===
                selectedCategory
            );

      return filtered.sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price;

          case "price-high":
            return b.price - a.price;

          case "name":
          default:
            return a.name.localeCompare(
              b.name
            );
        }
      });
    }, [selectedCategory, sortBy]);

  const handleAddToCart = async (
    product: typeof products[0]
  ) => {
    setAddingToCart(product.id);

    addToCart(product);

    setTimeout(() => {
      setAddingToCart(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#f8f3ee]">
      
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf6] to-[#f8f3ee]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold mb-5">
            Komposition Beauty
          </p>

          <h1 className="text-5xl md:text-7xl font-light text-gray-950 leading-tight mb-8">
            Handmade Bath
            <br />
            & Body Collection
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore handcrafted soaps, scrubs, oils, and self-care essentials thoughtfully created for intentional beauty routines.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[2rem] shadow-sm border border-[#eadfd4] p-6 md:p-8">
            
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Filter className="h-5 w-5 text-amber-700" />

                  <p className="font-semibold text-gray-950">
                    Browse Collection
                  </p>
                </div>

                <p className="text-gray-600">
                  Showing{" "}
                  {filteredAndSortedProducts.length}{" "}
                  products
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                
                <Select
                  value={selectedCategory}
                  onValueChange={
                    setSelectedCategory
                  }
                >
                  <SelectTrigger className="w-full sm:w-[220px] rounded-2xl border-[#d8c7b6] h-12 bg-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>

                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <SelectTrigger className="w-full sm:w-[220px] rounded-2xl border-[#d8c7b6] h-12 bg-white">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="name">
                      Name (A–Z)
                    </SelectItem>

                    <SelectItem value="price-low">
                      Price (Low to High)
                    </SelectItem>

                    <SelectItem value="price-high">
                      Price (High to Low)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {filteredAndSortedProducts.map(
              (product) => (
                <Card
                  key={product.id}
                  className="group border-0 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
                >
                  
                  <div className="relative aspect-square overflow-hidden bg-[#eee4da]">
                    
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-4 left-4">
                      <Badge className="rounded-full bg-white/90 text-amber-800 hover:bg-white px-4 py-1 shadow-sm capitalize">
                        {product.category}
                      </Badge>
                    </div>

                    {/* Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      
                      <div className="flex gap-3">
                        
                        <Link
                          href={`/products/${product.id}`}
                        >
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full bg-white hover:bg-amber-100 text-black shadow-md"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>

                        <Button
                          size="icon"
                          className="rounded-full bg-amber-200 hover:bg-amber-300 text-black shadow-md"
                          onClick={() =>
                            handleAddToCart(product)
                          }
                          disabled={
                            addingToCart ===
                            product.id
                          }
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    
                    <div className="mb-5">
                      
                      <h3 className="text-xl font-semibold text-gray-950 mb-3 line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      
                      <span className="text-2xl font-semibold text-amber-800">
                        $
                        {product.price.toFixed(
                          2
                        )}
                      </span>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        disabled={
                          addingToCart ===
                          product.id
                        }
                        className="rounded-full border-[#d8c7b6] hover:bg-[#f8f3ee]"
                      >
                        {addingToCart ===
                        product.id
                          ? "Adding..."
                          : "Add To Cart"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}