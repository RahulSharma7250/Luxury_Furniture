"use client";

import Image from "next/image";
import { CheckCircle2, MessageSquare, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BulkOrdersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop"
          alt="Office Furniture"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Bulk & Commercial Orders</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Furnishing a hotel, office, or restaurant? Get exclusive pricing and dedicated support.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-gray-50 dark:bg-zinc-900">
                <ShieldCheck className="w-8 h-8 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Volume Discounts</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Save up to 40% on large orders. The more you buy, the more you save.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-gray-50 dark:bg-zinc-900">
                <Truck className="w-8 h-8 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Priority Logistics</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Dedicated shipping coordination to ensure your project stays on schedule.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-gray-50 dark:bg-zinc-900">
                <MessageSquare className="w-8 h-8 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dedicated Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Direct access to a trade specialist who understands your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900 dark:text-white">Request a Quote</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Fill out the form below and one of our trade specialists will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Acme Inc." />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <Input placeholder="Office, Hotel, Restaurant..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estimated Budget</label>
                    <Input placeholder="$5,000 - $10,000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Details</label>
                  <Textarea placeholder="Tell us more about your project requirements..." className="min-h-[120px]" />
                </div>
                
                <Button size="lg" className="w-full">Submit Request</Button>
              </form>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Access to our full catalog including non-public items",
                  "Custom upholstery and finish options",
                  "3D visualization services available",
                  "White glove delivery and installation",
                  "Extended warranty for commercial use",
                  "Flexible payment terms for qualified accounts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-zinc-800">
                <p className="text-sm text-gray-500 mb-2">Prefer to chat?</p>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  +1 (555) 123-4567
                </div>
                <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
