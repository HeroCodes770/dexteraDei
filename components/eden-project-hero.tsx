"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Leaf, Sun, Home, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./reveal"

const edenImages = [
  "/projects/eden/2bedroom/A.jpg",
  "/projects/eden/2bedroom/B.jpg",
  "/projects/eden/2bedroom/C (1).jpg",
  "/projects/eden/2bedroom/D (1).jpg",
  "/projects/eden/2bedroom/E.jpg",
  "/projects/eden/2bedroom/F  (1).jpg",
]

export function EdenProjectHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % edenImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % edenImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + edenImages.length) % edenImages.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {edenImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{
              duration: 1.0,
              ease: "easeInOut",
            }}
          >
            <Image
              src={image}
              alt={`Eden Project ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-200 hover:scale-110 border border-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-200 hover:scale-110 border border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {edenImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl text-center">
                Eden Project
              </h1>
            </motion.div>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4"
            >
            Our mini-community featuring a blend of 2 bedroom and 3 bedroom homes 
            with smart feature capabilities and solar power. Built with sustainability 
            in mind, ensuring nature is utilized by focusing on allowing abundant light 
            and natural ventilation.
          </motion.p>
          </Reveal>

          {/* Feature Icons */}
          <Reveal delay={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {[
                { icon: Home, label: "Smart Homes" },
                { icon: Sun, label: "Solar Powered" },
                { icon: Leaf, label: "Sustainable" },
                { icon: Sparkles, label: "Modern Design" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-white/20 group-hover:shadow-xl transition-all duration-300 text-white">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-white drop-shadow-md">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

