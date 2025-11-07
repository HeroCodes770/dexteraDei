"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { NavigationMenu } from "./navigation-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        " border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02] backdrop-blur-md" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/">
              <Image 
                src="/Dex Lite.png" 
                alt="Dextera Dei Logo" 
                width={90} 
                height={27} 
                className="h-7 w-auto"
              />
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={cn(
              "p-2 transition-colors",
              isScrolled ? "text-black hover:text-neutral-600" : "text-white hover:text-neutral-200"
            )}
            onClick={() => setIsNavigationOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </motion.button>
        </div>
      </div>

      <NavigationMenu 
        isOpen={isNavigationOpen} 
        onClose={() => setIsNavigationOpen(false)} 
      />
    </motion.header>
  );
}
