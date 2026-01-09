"use client";

import { useState, useEffect } from "react";
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Mock user data
const USER_DATA = {
  name: "John Doe",
  email: "john.doe@example.com",
  joined: "March 2024",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
};

const ORDERS = [
  {
    id: "DW-10294",
    date: "May 12, 2024",
    status: "Delivered",
    total: "₹1,24,990",
    items: [
      { name: "The Cloud Sofa", quantity: 1, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=100&auto=format&fit=crop" }
    ]
  },
  {
    id: "DW-10182",
    date: "April 28, 2024",
    status: "Processing",
    total: "₹45,500",
    items: [
      { name: "Minimalist Coffee Table", quantity: 1, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=100&auto=format&fit=crop" }
    ]
  }
];

export default function AccountPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <aside className="w-full md:w-64 space-y-8">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 dark:border-zinc-800">
                  <Image
                    src={USER_DATA.avatar}
                    alt={USER_DATA.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-xl">{USER_DATA.name}</h2>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Joined {USER_DATA.joined}</p>
                </div>
              </div>

              <nav className="flex flex-col gap-1">
                 <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium bg-gray-50 dark:bg-zinc-900 rounded-lg transition-colors text-left">
                   <User className="w-4 h-4" /> Profile
                 </button>
                 <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg transition-colors text-left">
                   <Package className="w-4 h-4" /> Orders
                 </button>
                 <Link href="/wishlist" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg transition-colors text-left">
                   <Heart className="w-4 h-4" /> Wishlist
                 </Link>
                 <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg transition-colors text-left">
                   <MapPin className="w-4 h-4" /> Addresses
                 </button>
                 <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg transition-colors text-left">
                   <CreditCard className="w-4 h-4" /> Payment Methods
                 </button>
                 <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg transition-colors text-left">
                   <Settings className="w-4 h-4" /> Settings
                 </button>
                 <Separator className="my-2" />
                 <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors text-left">
                   <LogOut className="w-4 h-4" /> Log Out
                 </button>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <Tabs defaultValue="profile" className="w-full">
                <TabsContent value="profile" className="mt-0 space-y-12">
                  <section>
                    <div className="flex justify-between items-end mb-6">
                      <h1 className="text-3xl font-serif">Profile Information</h1>
                      <Button variant="outline" size="sm" className="rounded-full">Edit Profile</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl">
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest text-gray-400">Full Name</p>
                        <p className="font-medium">{USER_DATA.name}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest text-gray-400">Email Address</p>
                        <p className="font-medium">{USER_DATA.email}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest text-gray-400">Phone Number</p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-widest text-gray-400">Newsletter</p>
                        <p className="font-medium">Subscribed</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex justify-between items-end mb-6">
                      <h2 className="text-2xl font-serif">Recent Orders</h2>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black dark:hover:text-white">View All Orders</Button>
                    </div>
                    <div className="space-y-4">
                      {ORDERS.map((order) => (
                        <div key={order.id} className="border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-md transition-shadow">
                          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                            <div className="space-y-1">
                              <p className="text-sm font-bold">Order {order.id}</p>
                              <p className="text-xs text-gray-500">Placed on {order.date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-sm font-medium">{order.total}</p>
                                <p className={cn(
                                  "text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded-full inline-block",
                                  order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                                )}>
                                  {order.status}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                          <div className="flex gap-4">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-800">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="bg-black dark:bg-white text-white dark:text-black rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8">
                       <div className="space-y-2 text-center md:text-left">
                         <h3 className="text-xl font-serif">Exclusive Member Benefits</h3>
                         <p className="text-sm text-gray-400 dark:text-gray-500 font-light max-w-sm">Enjoy early access to new collections and complimentary interior styling sessions.</p>
                       </div>
                       <Button className="bg-white dark:bg-black text-black dark:text-white rounded-full px-8 hover:bg-gray-100 dark:hover:bg-zinc-900">Upgrade Account</Button>
                    </div>
                  </section>
                </TabsContent>
              </Tabs>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
