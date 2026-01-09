"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Minus, Plus, Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Mock product data - in a real app, this would be fetched based on the ID
const MOCK_PRODUCT = {
  id: 1,
  name: "The Cloud Sofa",
  price: 109990,
  description: "Experience the ultimate in comfort with our Cloud Sofa. Designed with deep, plush cushions and a modern silhouette, it's the perfect centerpiece for any living room. Upholstered in premium, stain-resistant fabric that feels as good as it looks.",
  rating: 4.8,
  reviews: 124,
  category: "Living Room",
  images: [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  ],
  pngImage: "https://www.pngall.com/wp-content/uploads/2016/06/Sofa-Free-PNG-Image.png",
  colors: [
    { name: "Beige", value: "#e5e5e5" },
    { name: "Charcoal", value: "#333333" },
    { name: "Navy", value: "#1a237e" },
  ],
  specs: {
    dimensions: "84\"W x 38\"D x 34\"H",
    material: "Performance Linen Blend",
    fill: "Down-wrapped high-density foam",
    frame: "Kiln-dried hardwood",
  },
};

export default function ProductPage() {
  const params = useParams();
  const [selectedColor, setSelectedColor] = useState(MOCK_PRODUCT.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showPng, setShowPng] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: MOCK_PRODUCT.id,
      name: MOCK_PRODUCT.name,
      price: MOCK_PRODUCT.price,
      image: MOCK_PRODUCT.images[0],
      quantity: quantity,
      color: selectedColor.name
    });
    toast.success(`${MOCK_PRODUCT.name} added to cart`);
  };

  const toggleWishlist = () => {
    if (isInWishlist(MOCK_PRODUCT.id)) {
      removeFromWishlist(MOCK_PRODUCT.id);
      toast.info("Removed from wishlist");
    } else {
      addToWishlist({
        id: MOCK_PRODUCT.id,
        name: MOCK_PRODUCT.name,
        price: `₹${MOCK_PRODUCT.price.toLocaleString('en-IN')}`,
        image: MOCK_PRODUCT.images[0],
        category: MOCK_PRODUCT.category
      });
      toast.success("Added to wishlist");
    }
  };

  if (!isMounted) return null;

  const inWishlist = isInWishlist(MOCK_PRODUCT.id);

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 dark:bg-zinc-900 flex items-center justify-center group border border-gray-100 dark:border-zinc-800 shadow-sm">
            {!showPng ? (
              <Image
                src={MOCK_PRODUCT.images[activeImage]}
                alt={MOCK_PRODUCT.name}
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
                priority
              />
            ) : (
              <div className="relative w-[85%] h-[85%] animate-in fade-in zoom-in duration-700 flex items-center justify-center">
                <Image
                  src={MOCK_PRODUCT.pngImage}
                  alt={`${MOCK_PRODUCT.name} cutout`}
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
                  priority
                />
              </div>
            )}
            
            <button 
              onClick={() => setShowPng(!showPng)}
              className="absolute bottom-6 left-6 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-semibold shadow-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 border border-gray-200 dark:border-zinc-800 tracking-wider uppercase"
              suppressHydrationWarning
            >
              {showPng ? "View in Space" : "View Cutout View"}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {MOCK_PRODUCT.images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveImage(index);
                  setShowPng(false);
                }}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === index && !showPng 
                    ? "border-black dark:border-white scale-95 shadow-lg" 
                    : "border-transparent hover:border-gray-300 dark:hover:border-zinc-700"
                }`}
                suppressHydrationWarning
              >
                <Image
                  src={image}
                  alt={`${MOCK_PRODUCT.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
            <button
              onClick={() => setShowPng(true)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 bg-gray-50 dark:bg-zinc-900 flex items-center justify-center ${
                showPng 
                  ? "border-black dark:border-white scale-95 shadow-lg" 
                  : "border-transparent hover:border-gray-300 dark:hover:border-zinc-700"
              }`}
              suppressHydrationWarning
            >
              <div className="relative w-[80%] h-[80%]">
                <Image
                  src={MOCK_PRODUCT.pngImage}
                  alt="Cutout view thumbnail"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-black/5 flex items-end justify-center pb-2 opacity-0 hover:opacity-100 transition-opacity">
                 <span className="text-[8px] uppercase font-bold tracking-tighter">Cutout</span>
              </div>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold font-serif text-gray-900 dark:text-white mb-2">
              {MOCK_PRODUCT.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-medium text-gray-900 dark:text-white">
                ₹{MOCK_PRODUCT.price.toLocaleString('en-IN')}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{MOCK_PRODUCT.rating}</span>
                <span className="text-sm text-gray-500">({MOCK_PRODUCT.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {MOCK_PRODUCT.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Color: {selectedColor.name}</h3>
            <div className="flex gap-3">
              {MOCK_PRODUCT.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor.name === color.name
                      ? "border-black dark:border-white scale-110"
                      : "border-gray-200 dark:border-zinc-700"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                  suppressHydrationWarning
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quantity</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 dark:border-zinc-800 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-full transition-colors"
                  suppressHydrationWarning
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-full transition-colors"
                  suppressHydrationWarning
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              size="lg" 
              className="flex-1 rounded-full h-12 text-base"
              onClick={handleAddToCart}
              suppressHydrationWarning
            >
              Add to Cart - ₹{(MOCK_PRODUCT.price * quantity).toLocaleString('en-IN')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className={cn(
                "rounded-full w-12 h-12 p-0 transition-colors",
                inWishlist && "bg-black text-white dark:bg-white dark:text-black border-transparent"
              )}
              onClick={toggleWishlist}
              suppressHydrationWarning
            >
              <Heart className={cn("w-5 h-5", inWishlist && "fill-current")} />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-6 h-6 text-gray-400" />
              <span className="text-xs font-medium">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="w-6 h-6 text-gray-400" />
              <span className="text-xs font-medium">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-gray-400" />
              <span className="text-xs font-medium">2-Year Warranty</span>
            </div>
          </div>

          <Tabs defaultValue="details" className="pt-8">
            <TabsList className="w-full justify-start bg-transparent border-b border-gray-200 dark:border-zinc-800 rounded-none p-0 h-auto">
              <TabsTrigger 
                value="details" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:bg-transparent px-0 py-3 mr-8"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger 
                value="dimensions" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:bg-transparent px-0 py-3 mr-8"
              >
                Dimensions
              </TabsTrigger>
              <TabsTrigger 
                value="shipping" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:bg-transparent px-0 py-3"
              >
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <dl className="grid grid-cols-1 gap-4 text-sm">
                <div className="grid grid-cols-3">
                  <dt className="text-gray-500">Material</dt>
                  <dd className="col-span-2 font-medium">{MOCK_PRODUCT.specs.material}</dd>
                </div>
                <div className="grid grid-cols-3">
                  <dt className="text-gray-500">Fill</dt>
                  <dd className="col-span-2 font-medium">{MOCK_PRODUCT.specs.fill}</dd>
                </div>
                <div className="grid grid-cols-3">
                  <dt className="text-gray-500">Frame</dt>
                  <dd className="col-span-2 font-medium">{MOCK_PRODUCT.specs.frame}</dd>
                </div>
              </dl>
            </TabsContent>
            <TabsContent value="dimensions" className="pt-6">
              <p className="text-sm text-gray-500">{MOCK_PRODUCT.specs.dimensions}</p>
            </TabsContent>
            <TabsContent value="shipping" className="pt-6">
              <p className="text-sm text-gray-500">
                Free standard shipping on all orders. White glove delivery available for an additional fee.
                Returns accepted within 30 days of delivery.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
