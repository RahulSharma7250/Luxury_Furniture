"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Menu, ChevronDown, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { CartDrawer } from "./CartDrawer";

const SHOP_CATEGORIES = [
  {
    title: "Living Room",
    href: "/shop?category=Living Room",
    description: "Sofas, coffee tables, and seating.",
  },
  {
    title: "Bedroom",
    href: "/shop?category=Bedroom",
    description: "Beds, nightstands, and dressers.",
  },
  {
    title: "Dining",
    href: "/shop?category=Dining",
    description: "Tables, chairs, and sideboards.",
  },
  {
    title: "Office",
    href: "/shop?category=Office",
    description: "Desks, chairs, and storage.",
  },
  {
    title: "Lighting",
    href: "/shop?category=Lighting",
    description: "Lamps, pendants, and sconces.",
  },
  {
    title: "Decor",
    href: "/shop?category=Decor",
    description: "Rugs, mirrors, and accessories.",
  },
];

const COLLECTIONS = [
  {
    title: "New Collection 2024",
    href: "/lookbook",
    description: "Our latest designs for the modern home.",
  },
  {
    title: "Minimalist Haven",
    href: "/shop?style=minimalist",
    description: "Clean lines and neutral tones.",
  },
  {
    title: "Industrial",
    href: "/shop?style=industrial",
    description: "Raw textures and refined finishes.",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = isMounted ? totalItems() : 0;
  const wishlistCount = isMounted ? wishlistItems.length : 0;

  return (
    <header
      suppressHydrationWarning
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isSearchOpen
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 dark:bg-black/95 dark:border-white/10"
          : "bg-transparent border-b border-transparent hover:bg-white/95 hover:backdrop-blur-md dark:hover:bg-black/95"
      }`}
    >
      {/* Search Overlay */}
      <div 
        className={cn(
          "absolute inset-x-0 top-full bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-white/10 transition-all duration-300 overflow-hidden",
          isSearchOpen ? "max-h-24" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 h-20 flex items-center">
          <Search className="h-5 w-5 text-gray-400 mr-4" />
          <Input 
            className="flex-1 bg-transparent border-none focus-visible:ring-0 text-base sm:text-lg placeholder:text-gray-400"
            placeholder="Search our collection..."
            autoFocus={isSearchOpen}
            suppressHydrationWarning
          />
          <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)} suppressHydrationWarning>
            Close
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 mr-4 sm:mr-8">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
              DARKWING
            </span>
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger suppressHydrationWarning>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150 bg-white dark:bg-zinc-950">
                      {SHOP_CATEGORIES.map((category) => (
                        <ListItem
                          key={category.title}
                          title={category.title}
                          href={category.href}
                        >
                          {category.description}
                        </ListItem>
                      ))}
                      <li className="col-span-2 mt-2 pt-2 border-t border-gray-100 dark:border-zinc-800">
                        <Link
                          href="/shop"
                          className="flex items-center justify-center w-full py-2 text-sm font-medium text-center bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-md transition-colors"
                        >
                          View All Products
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger suppressHydrationWarning>Collections</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr] bg-white dark:bg-zinc-950">
                      <li className="row-span-3">
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-zinc-100/50 to-zinc-100 p-6 no-underline outline-none focus:shadow-md dark:from-zinc-900/50 dark:to-zinc-900"
                          href="/lookbook"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-white">
                            Lookbook 2024
                          </div>
                          <p className="text-sm leading-tight text-gray-500 dark:text-gray-400">
                            Discover the latest trends and styles for your home.
                          </p>
                        </Link>
                      </li>
                      {COLLECTIONS.slice(1).map((collection) => (
                        <ListItem
                          key={collection.title}
                          title={collection.title}
                          href={collection.href}
                        >
                          {collection.description}
                        </ListItem>
                      ))}
                      <ListItem title="View All Collections" href="/categories">
                        Browse all our curated styles.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/bulk-orders" className={navigationMenuTriggerStyle()}>
                    Bulk Orders
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              suppressHydrationWarning
              className={cn(isSearchOpen && "bg-accent", "h-9 w-9 sm:h-10 sm:w-10")}
            >
              <Search className="h-4 sm:h-5 w-4 sm:w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="hidden sm:flex relative h-9 w-9 sm:h-10 sm:w-10" suppressHydrationWarning>
              <Link href="/wishlist">
                <Heart className="h-4 sm:h-5 w-4 sm:w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-black dark:bg-white text-[10px] font-bold text-white dark:text-black rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10" suppressHydrationWarning>
              <Link href="/account">
                <User className="h-4 sm:h-5 w-4 sm:w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(true)}
              suppressHydrationWarning
              className="relative h-9 w-9 sm:h-10 sm:w-10"
            >
              <ShoppingBag className="h-4 sm:h-5 w-4 sm:w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-black dark:bg-white text-[10px] font-bold text-white dark:text-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 sm:h-10 sm:w-10" suppressHydrationWarning>
                  <Menu className="h-4 sm:h-5 w-4 sm:w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80 overflow-y-auto p-0">
                <SheetHeader className="text-left border-b p-4 sm:p-6 mb-4">
                  <SheetTitle className="font-serif text-xl sm:text-2xl">DARKWING</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 px-4 sm:px-6">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">Shop by Category</h4>
                    {SHOP_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.title}
                        href={cat.href}
                        className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="h-px bg-gray-100 dark:bg-zinc-800" />
                  
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">Explore</h4>
                    <Link href="/shop" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1">
                      New Arrivals
                    </Link>
                    <Link href="/lookbook" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1">
                      Lookbook 2024
                    </Link>
                    <Link href="/categories" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1">
                      All Collections
                    </Link>
                  </div>

                  <div className="h-px bg-gray-100 dark:bg-zinc-800" />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">Support</h4>
                    <Link href="/bulk-orders" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1">
                      Bulk Orders
                    </Link>
                    <Link href="/about" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1">
                      About Us
                    </Link>
                    <Link href="/wishlist" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1 flex items-center gap-2">
                      <Heart className="h-4 w-4" /> Wishlist
                    </Link>
                    <Link href="/account" className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-1 flex items-center gap-2">
                      <User className="h-4 w-4" /> My Account
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
