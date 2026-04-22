"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const heroImages = [
  "/projects/guau-court/IMG_4574.JPEG",
  "/projects/guau-court/IMG_4573.JPEG",
  "/projects/eden/3bedroom/night view.jpeg",
  "/projects/eden/3bedroom/entrance_without_name.jpg",
  "/projects/guau-court/img_interior1.jpeg",
]

export function EdenProjectHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background slides */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={img}
              alt={`Eden Village ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Slide indicators — top right */}
      <div className="absolute top-8 right-8 z-20 flex gap-1.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-[#cee002] uppercase">
            <span className="w-8 h-px bg-[#cee002]" />
            A Dexter Adei Project
            <span className="w-8 h-px bg-[#cee002]" />
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white leading-none tracking-tight mb-6"
        >
          Eden<br />
          <span className="text-[#cee002]">Village</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Two phases. Two locations. One vision of extraordinary living.
        </motion.p>

        {/* Phase chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          <a
            href="#guau-court"
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 hover:border-[#cee002]/60"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Phase 1 · Guau Court
          </a>
          <a
            href="#symphony"
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 hover:border-[#cee002]/60"
          >
            <span className="w-2 h-2 rounded-full bg-[#cee002]" />
            Phase 2 · Symphony
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

