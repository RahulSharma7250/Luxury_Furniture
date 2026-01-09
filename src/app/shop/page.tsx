"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, ShoppingBag, Heart } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    id: 1,
    name: "The Cloud Sofa",
    price: 109990,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/06/Sofa-Free-PNG-Image.png",
    color: "Beige",
  },
  {
    id: 2,
    name: "Minimalist Armchair",
    price: 49990,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
    pngImage: "/furni11.png",
    color: "Grey",
  },
  {
    id: 3,
    name: "Oak Coffee Table",
    price: 28990,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/03/Table-PNG-HD.png",
    color: "Brown",
  },
  {
    id: 4,
    name: "Modern Dining Table",
    price: 74990,
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    pngImage: "/furni10.png",
    color: "Black",
  },
  {
    id: 5,
    name: "Velvet Dining Chair",
    price: 14990,
    category: "Dining",
    image: "/furni9.png",
    pngImage: "https://www.pngall.com/wp-content/uploads/2/Chair-PNG-Free-Download.png",
    color: "Green",
  },
  {
    id: 6,
    name: "King Size Bed Frame",
    price: 124990,
    category: "Bedroom",
    image: "/furn6.png",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/04/Bed-Free-PNG-Image.png",
    color: "Grey",
  },
  {
    id: 7,
    name: "Ergonomic Office Chair",
    price: 38990,
    category: "Office",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=800&auto=format&fit=crop",
    pngImage: "https://www.pngall.com/wp-content/uploads/2/Office-Chair-PNG-High-Quality-Image.png",
    color: "Black",
  },
  {
    id: 8,
    name: "Walnut Desk",
    price: 62990,
    category: "Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/03/Desk-PNG-Image.png",
    color: "Brown",
  },
  {
    id: 9,
    name: "Modern Floor Lamp",
    price: 12990,
    category: "Lighting",
    image: "/furni7.png",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/03/Lamp-Free-PNG-Image.png",
    color: "Gold",
  },
  {
    id: 10,
    name: "Ceramic Vase Set",
    price: 4990,
    category: "Decor",
    image: "/furni8.png",
    pngImage: "https://www.pngall.com/wp-content/uploads/11/Vase-PNG-Images-HD.png",
    color: "White",
  },
  {
    id: 11,
    name: "Teak Outdoor Set",
    price: 199990,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/06/Sofa-PNG-Clipart.png",
    color: "Wood",
  },
  {
    id: 12,
    name: "Storage Bookshelf",
    price: 42990,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800&auto=format&fit=crop",
    pngImage: "https://www.pngall.com/wp-content/uploads/2016/03/Bookcase-PNG-Free-Download.png",
    color: "White",
  },
];

const CATEGORIES = ["All", "Living Room", "Bedroom", "Dining", "Office", "Lighting", "Decor", "Outdoor", "Storage"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = useMemo(() => searchParams?.get("category") || "All", [searchParams]);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250000]);
  const [sortOrder, setSortOrder] = useState("featured");
  const [isMounted, setIsMounted] = useState(false);

  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    setIsMounted(true);
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortOrder === "price-low-high") return a.price - b.price;
    if (sortOrder === "price-high-low") return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: product.color
    });
    toast.success(`${product.name} added to cart`);
  };

  const toggleWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info("Removed from wishlist");
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: `₹${product.price.toLocaleString('en-IN')}`,
        image: product.image,
        category: product.category
      });
      toast.success("Added to wishlist");
    }
  };

  if (!isMounted) return null;

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-24" suppressHydrationWarning>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-gray-900 dark:text-white">
            Shop Our Collection
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg">
            Explore our curated selection of premium furniture, designed to elevate your living space.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2" suppressHydrationWarning>
                Sort by: {sortOrder === "featured" ? "Featured" : sortOrder === "price-low-high" ? "Price: Low to High" : "Price: High to Low"}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortOrder("featured")}>Featured</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder("price-low-high")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder("price-high-low")}>Price: High to Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <div className="hidden md:block space-y-8">
          <div>
            <h3 className="font-serif font-medium mb-4 text-gray-900 dark:text-white text-lg">Categories</h3>
            <ul className="space-y-2">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`text-sm hover:text-black dark:hover:text-white transition-colors font-mono tracking-wide ${
                        selectedCategory === category ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
                      }`}
                      suppressHydrationWarning
                    >
                      {category}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-medium mb-4 text-gray-900 dark:text-white text-lg">Price Range</h3>
            <Slider
              defaultValue={[0, 250000]}
              max={250000}
              step={1000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-gray-500 font-mono">
              <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
              <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-800 mb-4 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity duration-700 group-hover:opacity-40"
                  />
                  
                  {/* PNG Product Image (Visible on hover) */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-90 group-hover:scale-100 flex items-center justify-center p-8 pointer-events-none">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.pngImage}
                        alt={`${product.name} cutout`}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <button
                      onClick={(e) => toggleWishlist(e, product)}
                      className={cn(
                        "p-2.5 rounded-full shadow-lg transition-colors",
                        isInWishlist(product.id) 
                          ? "bg-black text-white dark:bg-white dark:text-black" 
                          : "bg-white text-black hover:bg-black hover:text-white dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black"
                      )}
                      suppressHydrationWarning
                    >
                      <Heart className={cn("w-4 h-4", isInWishlist(product.id) && "fill-current")} />
                    </button>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="p-2.5 rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      suppressHydrationWarning
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hidden sm:block">
                    <div className="bg-white p-2.5 rounded-full shadow-lg text-black">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-medium text-gray-900 dark:text-white mb-1">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-mono">₹{product.price.toLocaleString('en-IN')}</p>
              </Link>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange([0, 250000]);
                }}
                className="mt-2"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
