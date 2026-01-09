"use client";

import Image from "next/image";

const LOOKS = [
  {
    title: "Minimalist Haven",
    description: "Clean lines and neutral tones for a serene living space.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop",
    products: ["The Cloud Sofa", "Oak Coffee Table"],
  },
  {
    title: "Modern Industrial",
    description: "Raw textures mixed with refined finishes.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000&auto=format&fit=crop",
    products: ["Leather Armchair", "Metal Floor Lamp"],
  },
  {
    title: "Scandi Chic",
    description: "Warm woods and cozy textiles.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
    products: ["Teak Dining Table", "Wishbone Chair"],
  },
  {
    title: "Dark Academia",
    description: "Moody hues and rich materials for a sophisticated vibe.",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2000&auto=format&fit=crop",
    products: ["Velvet Sofa", "Mahogany Bookshelf"],
  },
];

export default function LookbookPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] flex items-center justify-center bg-black">
        <Image
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2600&auto=format&fit=crop"
          alt="Lookbook Cover"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">The Lookbook</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Inspiration for modern living. Discover our latest curated styles.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="space-y-32">
          {LOOKS.map((look, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
              <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-sm uppercase tracking-widest text-gray-500">Collection 0{index + 1}</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">{look.title}</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  {look.description}
                </p>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Featured Products:</h3>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    {look.products.map((product, i) => (
                      <li key={i}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
