"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  ArrowLeft,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "@/components/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);

  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + tax;

  const handleSubmitOrder = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      alert(
        "Stripe integration coming soon. This is currently a demo checkout."
      );
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8f3ee] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          
          <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm">
            <ShoppingBag className="h-8 w-8 text-amber-700" />
          </div>

          <h1 className="text-4xl font-light text-gray-950 mb-4">
            Your cart is empty
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Browse our handmade collection and discover products crafted for intentional self-care.
          </p>

          <Link href="/products">
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f3ee]">
      
      {/* Header */}
      <div className="border-b border-[#eadfd4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="mb-10">
          <p className="uppercase tracking-[0.28em] text-sm text-amber-700 font-semibold mb-4">
            Secure Checkout
          </p>

          <h1 className="text-5xl font-light text-gray-950">
            Complete Your Order
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
          
          {/* Form */}
          <Card className="border-0 rounded-[2rem] shadow-sm bg-white">
            <CardContent className="p-8 md:p-10">
              
              <form
                onSubmit={handleSubmitOrder}
                className="space-y-8"
              >
                
                {/* Contact */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-950 mb-5">
                    Contact Information
                  </h2>

                  <div className="space-y-5">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input
                        required
                        placeholder="First Name"
                        className="h-14 rounded-2xl border-[#d8c7b6]"
                      />

                      <Input
                        required
                        placeholder="Last Name"
                        className="h-14 rounded-2xl border-[#d8c7b6]"
                      />
                    </div>

                    <Input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="h-14 rounded-2xl border-[#d8c7b6]"
                    />
                  </div>
                </div>

                {/* Shipping */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-950 mb-5">
                    Shipping Address
                  </h2>

                  <div className="space-y-5">
                    
                    <Input
                      required
                      placeholder="Street Address"
                      className="h-14 rounded-2xl border-[#d8c7b6]"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      
                      <Input
                        required
                        placeholder="City"
                        className="h-14 rounded-2xl border-[#d8c7b6]"
                      />

                      <Input
                        required
                        placeholder="State"
                        className="h-14 rounded-2xl border-[#d8c7b6]"
                      />

                      <Input
                        required
                        placeholder="ZIP"
                        className="h-14 rounded-2xl border-[#d8c7b6]"
                      />
                    </div>
                  </div>
                </div>

                {/* Demo Notice */}
                <div className="rounded-3xl bg-[#f8f3ee] p-6 border border-[#eadfd4]">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="h-6 w-6 text-amber-700 mt-1" />

                    <div>
                      <h3 className="font-semibold text-gray-950 mb-2">
                        Demo Checkout
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        Stripe payment integration will be connected before launch.
                        This checkout is currently for design and testing purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-lg font-semibold"
                >
                  {isProcessing
                    ? "Processing..."
                    : `Complete Order • $${finalTotal.toFixed(2)}`}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Summary */}
          <div>
            <Card className="border-0 rounded-[2rem] shadow-sm bg-white sticky top-28">
              <CardContent className="p-8">
                
                <h2 className="text-2xl font-semibold text-gray-950 mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">
                  
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4"
                    >
                      
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#eee4da] flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        
                        <h3 className="font-medium text-gray-950 line-clamp-2 mb-2">
                          {item.product.name}
                        </h3>

                        <div className="flex items-center justify-between">
                          
                          <Badge
                            variant="secondary"
                            className="rounded-full"
                          >
                            Qty {item.quantity}
                          </Badge>

                          <span className="font-semibold text-amber-800">
                            $
                            {(
                              item.product.price *
                              item.quantity
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Totals */}
                  <div className="border-t border-[#eadfd4] pt-6 space-y-4">
                    
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                      <span>Estimated Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="text-amber-700">
                        Free
                      </span>
                    </div>

                    <div className="border-t border-[#eadfd4] pt-4 flex justify-between items-center">
                      <span className="text-xl font-semibold text-gray-950">
                        Total
                      </span>

                      <span className="text-3xl font-semibold text-amber-800">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}