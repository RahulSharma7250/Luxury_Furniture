"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: parseFloat(item.price.replace(/[^\d.]/g, '')),
      image: item.image,
      quantity: 1
    });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-2">My Wishlist</h1>
            <p className="text-gray-500 dark:text-gray-400 font-light">
              {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <div key={item.id} className="group relative">
                <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-gray-100 dark:bg-zinc-900 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-black/90 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
                    suppressHydrationWarning
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-400">{item.category}</p>
                  <Link href={`/product/${item.id}`}>
                    <h3 className="text-lg font-serif hover:underline underline-offset-4 decoration-1">{item.name}</h3>
                  </Link>
                  <div className="flex justify-between items-center pt-2">
                    <p className="font-medium">{item.price}</p>
                    <Button 
                      size="sm" 
                      className="rounded-full gap-2" 
                      onClick={() => handleAddToCart(item)}
                      suppressHydrationWarning
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 space-y-6">
            <div className="w-20 h-20 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-gray-300" />
            </div>
            <h2 className="text-2xl font-serif">Your wishlist is empty</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto font-light">
              Looks like you haven't saved anything yet. Browse our collection and find something you love.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/shop">Explore Collection</Link>
            </Button>
          </div>
        )}

        {/* Recommended Section placeholder */}
        {items.length > 0 && (
          <div className="mt-24 pt-24 border-t border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-serif">You might also like</h2>
              <Link href="/shop" className="text-sm hover:underline underline-offset-4 flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 opacity-60">
               {[3, 4, 5, 6].map((id) => (
                 <div key={id} className="space-y-4">
                   <div className="aspect-square bg-gray-100 dark:bg-zinc-900 rounded-sm" />
                   <div className="h-4 w-2/3 bg-gray-100 dark:bg-zinc-900 rounded" />
                   <div className="h-4 w-1/3 bg-gray-100 dark:bg-zinc-900 rounded" />
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
