"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function CartSidebar({
  open,
  onClose,
}: CartSidebarProps) {
  const {
    items,
    updateQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-[400px] sm:w-[500px] bg-[#f8f3ee] border-l border-[#eadfd4] p-0"
      >
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <SheetHeader className="border-b border-[#eadfd4] px-6 py-5 bg-white">
            <SheetTitle className="flex items-center gap-3 text-2xl font-light text-gray-950">
              <ShoppingBag className="h-6 w-6 text-amber-700" />
              Your Cart
            </SheetTitle>
          </SheetHeader>

          {/* Empty State */}
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="text-center">
                <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm">
                  <ShoppingBag className="h-8 w-8 text-amber-700" />
                </div>

                <h3 className="text-2xl font-light text-gray-950 mb-3">
                  Your cart is empty
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Explore our handmade bath and body collection to find your next self-care favorite.
                </p>

                <Button
                  onClick={onClose}
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-8"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white rounded-3xl p-4 shadow-sm"
                  >
                    <div className="flex gap-4">
                      
                      {/* Image */}
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-[#eee4da]">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        
                        <h3 className="font-semibold text-gray-950 mb-1 line-clamp-2">
                          {item.product.name}
                        </h3>

                        <p className="text-amber-800 font-semibold text-lg mb-4">
                          ${item.product.price.toFixed(2)}
                        </p>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                          
                          <div className="flex items-center bg-[#f8f3ee] rounded-full p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>

                            <Badge
                              variant="secondary"
                              className="bg-transparent text-gray-900 px-2"
                            >
                              {item.quantity}
                            </Badge>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto rounded-full text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() =>
                              removeFromCart(item.product.id)
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#eadfd4] bg-white p-6 space-y-5">
                
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">
                    Total
                  </span>

                  <span className="text-3xl font-semibold text-amber-800">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout" className="block">
                    <Button
                      className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg font-semibold"
                      onClick={onClose}
                    >
                      Secure Checkout
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#d8c7b6] hover:bg-[#f8f3ee]"
                    onClick={() => {
                      clearCart();
                      onClose();
                    }}
                  >
                    Clear Cart
                  </Button>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Handmade products crafted with care.
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}