"use client";

import Image from "next/image";
import { Users, Leaf, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544457078-69411a1db635?q=80&w=2600&auto=format&fit=crop"
            alt="Craftsmanship"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Crafting timeless furniture that brings people together.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200&auto=format&fit=crop"
                alt="Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">Since 2010</span>
              <h2 className="text-4xl font-bold font-serif text-gray-900 dark:text-white">Designed for Life</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                At DarkWing, we believe that furniture should be more than just functional objects. It should be an expression of your personality and a foundation for your daily life.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Founded in 2010, we started with a simple mission: to create high-quality, beautifully designed furniture that is accessible to everyone. We work directly with artisans and manufacturers to cut out the middlemen and bring you premium designs at honest prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif mb-4 text-gray-900 dark:text-white">Our Values</h2>
            <p className="text-gray-500 dark:text-gray-400">The principles that guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Sustainability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We use responsibly sourced materials and eco-friendly manufacturing processes to minimize our environmental footprint.
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We support local artisans and fair labor practices, ensuring that everyone involved in creating our products is treated with respect.
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quality</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Every piece is rigorously tested to ensure it stands the test of time, backed by our comprehensive warranty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
