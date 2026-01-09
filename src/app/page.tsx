"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, CheckCircle2, Truck, ShieldCheck, Play, Pause, ArrowUpRight, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen sm:h-[95vh] w-full flex items-center justify-center overflow-hidden py-12 sm:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2600&auto=format&fit=crop"
            alt="Modern Minimalist Interior"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center text-white">
          <div className="mb-4 sm:mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs md:text-sm tracking-[0.2em] uppercase font-light">
              Est. 2024 • Modern Living
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-light tracking-tight leading-[0.9] mb-4 sm:mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Timeless <br />
            <span className="italic font-normal text-white/90">Aesthetics</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl mx-auto font-light leading-relaxed mb-6 sm:mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Curating spaces that breathe. We design furniture that balances form, function, and feeling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/shop">Discover Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base tracking-wide w-full sm:w-auto"
            >
              <Link href="/lookbook">Explore Lookbook</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-2000 opacity-70">
           <div className="w-px h-12 sm:h-16 bg-linear-to-b from-white to-transparent mx-auto mb-2" />
           <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-3 sm:py-4 bg-zinc-900 text-white overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="inline-flex animate-marquee items-center gap-6 sm:gap-12 text-xs sm:text-sm tracking-[0.2em] uppercase font-light opacity-80">
          <span className="whitespace-nowrap">• Sustainable Materials</span>
          <span className="whitespace-nowrap">• Artisan Craftsmanship</span>
          <span className="whitespace-nowrap">• 5-Year Warranty</span>
          <span className="whitespace-nowrap">• Worldwide Shipping</span>
          <span className="whitespace-nowrap">• Sustainable Materials</span>
          <span className="whitespace-nowrap">• Artisan Craftsmanship</span>
          <span className="whitespace-nowrap">• 5-Year Warranty</span>
          <span className="whitespace-nowrap">• Worldwide Shipping</span>
          <span className="whitespace-nowrap">• Sustainable Materials</span>
          <span className="whitespace-nowrap">• Artisan Craftsmanship</span>
          <span className="whitespace-nowrap">• 5-Year Warranty</span>
          <span className="whitespace-nowrap">• Worldwide Shipping</span>
        </div>
      </div>

      <section className="py-16 sm:py-24 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900 dark:text-white mb-6 sm:mb-8">
            "Design is not just what it looks like and feels like. <span className="italic text-gray-500">Design is how it works.</span>"
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We believe in the power of good design to transform daily life. Our pieces are 
            thoughtfully created to bring calm, order, and beauty to your personal sanctuary.
          </p>
        </div>
      </section>

      {/* Categories Grid (Refined) */}
      <section className="py-8 sm:py-12 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-end mb-6 sm:mb-10">
            <h3 className="text-lg sm:text-xl tracking-widest uppercase font-medium text-gray-900 dark:text-white">Shop by Room</h3>
            <Link href="/categories" className="hidden md:flex items-center gap-2 text-sm hover:underline underline-offset-4">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 h-auto sm:h-[100vh] md:h-[80vh]">
            <Link href="/categories/living-room" className="col-span-1 sm:col-span-2 md:col-span-6 relative group overflow-hidden h-48 sm:h-80 md:h-full rounded-sm min-h-[200px]">
              <Image src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop" alt="Living Room" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                <h4 className="text-xl sm:text-3xl font-serif italic">Living Room</h4>
                <p className="text-xs sm:text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity mt-2">Explore Collection →</p>
              </div>
            </Link>
            
            <div className="col-span-1 sm:col-span-2 md:col-span-6 grid grid-rows-2 gap-4 h-auto sm:h-80 md:h-full">
              <Link href="/categories/bedroom" className="relative group overflow-hidden rounded-sm h-48 sm:h-auto min-h-[200px]">
                <Image src="/furni2.png" alt="Bedroom" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                  <h4 className="text-xl sm:text-3xl font-serif italic">Bedroom</h4>
                  <p className="text-xs sm:text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity mt-2">Explore Collection →</p>
                </div>
              </Link>
              
              <div className="grid grid-cols-2 gap-4 h-auto sm:h-auto">
                <Link href="/categories/dining" className="relative group overflow-hidden rounded-sm h-40 sm:h-auto min-h-[150px]">
                  <Image src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop" alt="Dining" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <h4 className="text-sm sm:text-2xl font-serif italic">Dining</h4>
                  </div>
                </Link>
                <Link href="/categories/office" className="relative group overflow-hidden rounded-sm h-40 sm:h-auto min-h-[150px]">
                  <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop" alt="Office" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <h4 className="text-sm sm:text-2xl font-serif italic">Office</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Cinematic Video Section */}
      <section className="relative w-full h-auto sm:h-[60vh] md:h-[85vh] min-h-[400px] overflow-hidden bg-black">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
        >
          {/* Using a high quality interior design stock video */}
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center py-12 sm:py-0">
          <Badge className="mb-4 sm:mb-6 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-none px-4 py-1.5 uppercase tracking-widest text-xs sm:text-sm">
            The Process
          </Badge>
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-serif mb-6 sm:mb-8 max-w-4xl leading-tight">
            Crafting the <span className="italic">Extraordinary</span>
          </h2>
          <Button 
            onClick={toggleVideo}
            variant="ghost" 
            size="icon" 
            className="rounded-full w-16 sm:w-20 h-16 sm:h-20 border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black transition-all duration-300 group"
          >
            {isPlaying ? <Pause className="w-6 sm:w-8 h-6 sm:h-8 fill-current" /> : <Play className="w-6 sm:w-8 h-6 sm:h-8 fill-current ml-1" />}
          </Button>
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm uppercase tracking-widest text-white/80">Watch our story</p>
        </div>
      </section>

      {/* NEW: Craftsmanship / Story Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-stone-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500">The Philosophy</h3>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif leading-tight text-gray-900 dark:text-white">
                Quiet luxury for the <br /> modern sanctuary.
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed text-base sm:text-lg">
                <p>
                  Every piece in our collection is a result of obsession with detail. We work directly with master artisans who have spent decades perfecting their craft.
                </p>
                <p>
                  From the sustainable harvesting of solid oak to the hand-stitched Italian leather, we ensure that beauty goes deeper than the surface. Furniture shouldn't just fill a space; it should anchor it.
                </p>
              </div>
              <div className="pt-2 sm:pt-4">
                <Link href="/about" className="group inline-flex items-center text-gray-900 dark:text-white font-medium border-b border-gray-900 dark:border-white pb-1 hover:opacity-70 transition-opacity text-sm sm:text-base">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="aspect-3/4 relative overflow-hidden rounded-sm">
                  <Image src="/furni.png" alt="Detail" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-sm">
                  <Image src="/furni2.png" alt="Texture" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square relative overflow-hidden rounded-sm">
                  <Image src="/furni3.png" alt="Craft" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-3/4 relative overflow-hidden rounded-sm">
                  <Image src="/furni4.png" alt="Interior" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2 sm:mb-3 text-gray-900 dark:text-white">Curated Favorites</h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-light">Pieces our designers are loving right now.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full px-6 border-gray-300 dark:border-gray-700 text-sm sm:text-base">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                id: 1,
                name: "The Cloud Sofa",
                price: "₹1,09,990",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
                pngImage: "https://www.pngall.com/wp-content/uploads/2016/06/Sofa-Free-PNG-Image.png",
                tag: "Best Seller",
              },
              {
                id: 2,
                name: "Minimalist Armchair",
                price: "₹49,990",
                image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
                pngImage: "https://www.pngall.com/wp-content/uploads/2/Chair-PNG-Clipart.png",
                tag: "New",
              },
              {
                id: 3,
                name: "Oak Coffee Table",
                price: "₹28,990",
                image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
                pngImage: "https://www.pngall.com/wp-content/uploads/2016/03/Table-PNG-HD.png",
                tag: null,
              },
              {
                id: 4,
                name: "Ceramic Vase Set",
                price: "₹10,990",
                image: "/furni14.png",
                pngImage: "https://www.pngall.com/wp-content/uploads/11/Vase-PNG-Images-HD.png",
                tag: "Limited",
              },
              {
                id: 5,
                name: "Velvet Accent Chair",
                price: "₹74,990",
                image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop", 
                pngImage: "https://www.pngall.com/wp-content/uploads/2/Chair-PNG-Free-Download.png",
                tag: "Exclusive",
              }
            ].map((product, index) => (
              <Link href={`/product/${product.id}`} key={index} className="group cursor-pointer">
                <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-gray-100 dark:bg-zinc-900 mb-4 flex items-center justify-center">
                   {product.tag && (
                    <Badge className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-white text-black text-xs font-medium px-2 py-0.5 shadow-sm uppercase tracking-wide rounded-sm border-none">
                      {product.tag}
                    </Badge>
                  )}
                  {/* Background Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity duration-700 group-hover:opacity-40"
                  />
                  
                  {/* PNG Product Image (Visible on hover) */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-90 group-hover:scale-100 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.pngImage}
                        alt={`${product.name} cutout`}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white p-2 sm:p-2.5 rounded-full shadow-lg text-black hover:bg-black hover:text-white transition-colors">
                      <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-serif text-gray-900 dark:text-white group-hover:underline underline-offset-4 decoration-1">{product.name}</h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Section (Redesigned) */}
      <section className="py-16 sm:py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                alt="Office"
                fill
                className="object-cover opacity-20"
              />
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 mx-auto text-yellow-500" />
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-medium leading-tight">
              Trade Program & <br /> Bulk Orders
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Partner with us for your next commercial project. We offer exclusive trade pricing, custom manufacturing, and dedicated support for interior designers, architects, and business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <Button
                asChild
                className="bg-white text-black hover:bg-gray-100 rounded-full h-12 px-6 sm:px-8 tracking-wide text-sm sm:text-base w-full sm:w-auto"
              >
                <Link href="/bulk-orders">Join Trade Program</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-700 text-white hover:bg-zinc-800 rounded-full h-12 px-6 sm:px-8 tracking-wide text-sm sm:text-base w-full sm:w-auto"
              >
                <Link href="/lookbook">Download Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section (New) */}
      <section className="py-16 sm:py-24 bg-stone-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-xl mx-auto text-center space-y-4 sm:space-y-6">
            <Mail className="w-6 h-6 mx-auto text-gray-400" />
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 dark:text-white">Join our list</h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-light">
              Receive updates on new collections, design inspiration, and exclusive access to sales.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 px-2 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-sm sm:text-base min-w-0"
                suppressHydrationWarning
              />
              <Button type="submit" variant="ghost" className="hover:bg-transparent hover:underline underline-offset-4 text-sm sm:text-base whitespace-nowrap" suppressHydrationWarning>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
