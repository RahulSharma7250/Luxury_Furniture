"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Living Room",
    description: "Sofas, armchairs, and coffee tables for your sanctuary.",
    image: "https://images.unsplash.com/photo-1583847661867-7ceddf29a17e?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?category=Living Room",
  },
  {
    name: "Bedroom",
    description: "Beds, dressers, and nightstands for restful sleep.",
    image: "https://images.unsplash.com/photo-1505693416388-5081d28065b0?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?category=Bedroom",
  },
  {
    name: "Dining Room",
    description: "Tables and chairs for memorable meals.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?category=Dining",
  },
  {
    name: "Home Office",
    description: "Desks and chairs for productivity and style.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?category=Office",
  },
  {
    name: "Lighting",
    description: "Illuminate your space with our curated fixtures.",
    image: "https://images.unsplash.com/photo-1513506003011-3b037741ac98?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?category=Lighting",
  },
  {
    name: "Decor & Accessories",
    description: "The finishing touches that make a house a home.",
    image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?category=Decor",
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
          Shop by Category
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Find the perfect piece for every room in your home. Our collections are designed to work together seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((category, index) => (
          <Link
            href={category.link}
            key={index}
            className="group relative h-[400px] overflow-hidden rounded-2xl"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h2 className="text-3xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-gray-200 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {category.description}
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                Explore Collection <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
