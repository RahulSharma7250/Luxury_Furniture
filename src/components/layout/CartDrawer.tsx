"use client";

import { useCart } from "@/hooks/use-cart";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-sm flex flex-col p-0">
        <SheetHeader className="p-4 sm:p-6 border-b">
          <SheetTitle className="flex items-center gap-2 font-serif text-xl sm:text-2xl">
            <ShoppingBag className="w-5 h-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="grow overflow-hidden">
          {items.length > 0 ? (
            <ScrollArea className="h-full p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-3 sm:gap-4">
                    <div className="relative w-16 sm:w-20 h-20 sm:h-24 rounded-sm overflow-hidden bg-gray-100 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between grow">
                      <div>
                        <div className="flex justify-between gap-2">
                          <h3 className="font-medium text-xs sm:text-sm line-clamp-2">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.id, item.color)}
                            className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                          >
                            <Trash2 className="w-3 sm:w-4 h-3 sm:h-4" />
                          </button>
                        </div>
                        {item.color && (
                          <p className="text-xs text-gray-500 mt-1">Color: {item.color}</p>
                        )}
                        <p className="text-xs sm:text-sm font-medium mt-1">
                          ₹{item.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-full scale-75 sm:scale-90 -ml-2 origin-left">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.color)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors rounded-full"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.color)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors rounded-full"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-500 font-light text-sm">Your cart is empty</p>
              <Button onClick={onClose} variant="outline" className="rounded-full text-sm">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="p-4 sm:p-6 border-t flex flex-col gap-4 sm:flex-col">
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>₹{totalPrice().toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-base sm:text-lg">
                <span>Total</span>
                <span>₹{totalPrice().toLocaleString('en-IN')}</span>
              </div>
            </div>
            <Button className="w-full h-11 sm:h-12 rounded-full text-sm sm:text-base font-medium" asChild>
              <Link href="/checkout" onClick={onClose}>
                Checkout
              </Link>
            </Button>
            <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
              Tax included • Shipping calculated at checkout
            </p>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
