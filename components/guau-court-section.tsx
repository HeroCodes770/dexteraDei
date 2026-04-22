"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Bed,
  Home,
  Shield,
  Sun,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Flame,
} from "lucide-react"
import { Reveal } from "./reveal"
import { edenVillagePhases } from "@/lib/eden-village-data"

const phase = edenVillagePhases[0]
const unitsRemaining = phase.totalUnits - phase.unitsSold

export function GuauCourtSection() {
  const [activeImage, setActiveImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const lightboxNext = () =>
    setLightboxIndex((prev) => (prev + 1) % phase.images.length)
  const lightboxPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + phase.images.length) % phase.images.length)

  return (
    <>
      <section id="guau-court" className="relative bg-white overflow-hidden">
        {/* Phase label bar */}
        <div className="bg-neutral-900 text-white py-3 px-6">
          <div className="container-custom flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#cee002] uppercase">
                Phase 01
              </span>
              <span className="text-white/30">·</span>
              <span className="text-sm text-white/80">Guau Court</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">
                Only {unitsRemaining} of {phase.totalUnits} homes remaining
              </span>
            </div>
          </div>
        </div>

        {/* Hero split layout */}
        <div className="grid lg:grid-cols-2 min-h-[90vh]">
          {/* Left — sticky image gallery */}
          <div className="relative bg-neutral-950 lg:sticky lg:top-0 lg:h-screen overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={phase.images[activeImage]}
                  alt={`Guau Court ${activeImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={activeImage === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {phase.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      i === activeImage
                        ? "border-[#cee002] scale-110 shadow-lg"
                        : "border-white/30 hover:border-white/60"
                    }`}
                  >
                    <Image src={img} alt={`thumb ${i + 1}`} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Expand button */}
            <button
              onClick={() => openLightbox(activeImage)}
              className="absolute top-6 right-6 z-10 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium transition-all"
            >
              View All Photos
            </button>

            {/* Nav arrows */}
            <button
              onClick={() => setActiveImage((p) => (p - 1 + phase.images.length) % phase.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setActiveImage((p) => (p + 1) % phase.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-center px-8 py-16 lg:py-24 lg:px-16 xl:px-20 bg-white">
            <Reveal>
              <div className="space-y-8 max-w-xl">
                {/* Urgency badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-orange-700 uppercase tracking-wide">
                    <Flame className="w-3.5 h-3.5" />
                    {phase.launchLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#cee002]/10 border border-[#cee002]/30 rounded-full text-xs font-bold text-neutral-700 uppercase tracking-wide">
                    {unitsRemaining} homes left
                  </span>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-none tracking-tight">
                    Guau<br />
                    <span className="text-[#cee002]">Court</span>
                  </h2>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-2 text-neutral-500"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{phase.location}</span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-neutral-600 text-lg leading-relaxed"
                >
                  {phase.longDescription}
                </motion.p>

                {/* Scarcity visual */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-neutral-700">Availability</span>
                    <span className="text-sm font-bold text-orange-600">
                      {unitsRemaining} of {phase.totalUnits} remaining
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: phase.totalUnits }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-3 rounded-full transition-all duration-500 ${
                          i < phase.unitsSold
                            ? "bg-neutral-300"
                            : "bg-[#cee002]"
                        }`}
                        title={i < phase.unitsSold ? "Reserved" : "Available"}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-neutral-400">
                      <span className="inline-block w-2 h-2 bg-neutral-300 rounded-full mr-1" />
                      {phase.unitsSold} reserved
                    </span>
                    <span className="text-xs text-neutral-600 font-medium">
                      <span className="inline-block w-2 h-2 bg-[#cee002] rounded-full mr-1" />
                      {unitsRemaining} available
                    </span>
                  </div>
                </motion.div>

                {/* Key specs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { icon: Home, label: "Homes", value: `${phase.totalUnits}` },
                    { icon: Bed, label: "Bedrooms", value: "4" },
                    { icon: Sun, label: "Solar", value: "100%" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                      <Icon className="w-5 h-5 mx-auto mb-2 text-neutral-400" />
                      <div className="text-xl font-bold text-neutral-900">{value}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {phase.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                      <Shield className="w-3.5 h-3.5 text-[#cee002] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                >
                  <Link
                    href="#newsletter"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Secure Your Home
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#newsletter"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-200 text-neutral-700 rounded-full hover:border-neutral-400 font-semibold text-sm transition-all duration-300"
                  >
                    Book a Viewing
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={phase.images[lightboxIndex]}
                  alt={`Guau Court ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={lightboxPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={lightboxNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="text-center mt-4 text-white/60 text-sm">
                {lightboxIndex + 1} / {phase.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
