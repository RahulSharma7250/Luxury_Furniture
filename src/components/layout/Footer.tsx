import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              DARKWING
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Premium modern furniture designed for contemporary living. Elevate your space with our curated collections.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">Shop</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Living Room</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Bedroom</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Dining</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Office</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Bulk Orders</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">Newsletter</h4>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 text-xs sm:text-sm text-gray-900 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white min-w-0"
                suppressHydrationWarning
              />
              <Button 
                type="submit"
                className="px-3 py-2 text-xs sm:text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full"
                suppressHydrationWarning
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
        
          <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400" suppressHydrationWarning>
              © {new Date().getFullYear()} DarkWing. All rights reserved.
            </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
