"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Bed,
  Home,
  Sun,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Eye,
  X,
} from "lucide-react"
import { Reveal } from "./reveal"
import { edenVillagePhases, symphonyHomeTypes } from "@/lib/eden-village-data"
import { HomeViewerModal } from "./home-viewer-modal"

const phase = edenVillagePhases[1]

export function SymphonySection() {
  const [activeImage, setActiveImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [viewingHome, setViewingHome] = useState<typeof symphonyHomeTypes[0] | null>(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const lightboxNext = () =>
    setLightboxIndex((prev) => (prev + 1) % phase.images.length)
  const lightboxPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + phase.images.length) % phase.images.length)

  const handleViewHome = (home: typeof symphonyHomeTypes[0]) => {
    setViewingHome(home)
    setIsViewerOpen(true)
  }

  return (
    <>
      <section id="symphony" className="relative bg-neutral-950 overflow-hidden">
        {/* Phase label bar */}
        <div className="bg-neutral-900 border-b border-white/10 py-3 px-6">
          <div className="container-custom flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#cee002] uppercase">
                Phase 02
              </span>
              <span className="text-white/30">·</span>
              <span className="text-sm text-white/60">Symphony</span>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#cee002]/10 border border-[#cee002]/30 rounded-full text-xs font-bold text-[#cee002] uppercase tracking-wide">
              Now accepting reservations
            </span>
          </div>
        </div>

        {/* Hero split — image right, content left */}
        <div className="grid lg:grid-cols-2 min-h-[90vh]">
          {/* Left — content */}
          <div className="flex flex-col justify-center px-8 py-16 lg:py-24 lg:px-16 xl:px-20">
            <Reveal>
              <div className="space-y-8 max-w-xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/20 rounded-full text-xs font-bold text-white/70 uppercase tracking-wide">
                    {phase.launchLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#cee002]/10 border border-[#cee002]/20 rounded-full text-xs font-bold text-[#cee002] uppercase tracking-wide">
                    {phase.totalUnits} homes
                  </span>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                    Sym<span className="text-[#cee002]">phony</span>
                  </h2>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-2 text-white/50"
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
                  className="text-white/70 text-lg leading-relaxed"
                >
                  {phase.longDescription}
                </motion.p>

                {/* Key specs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { icon: Home, label: "Homes", value: `${phase.totalUnits}` },
                    { icon: Bed, label: "Bedrooms", value: "2–3" },
                    { icon: Sun, label: "Solar", value: "100%" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <Icon className="w-5 h-5 mx-auto mb-2 text-white/40" />
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-xs text-white/40 mt-0.5">{label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {phase.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#cee002] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                >
                  <Link
                    href="#newsletter"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#cee002] text-neutral-900 rounded-full hover:bg-[#d9f002] font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-[#cee002]/20"
                  >
                    Reserve Your Home
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#newsletter"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full hover:border-white/40 font-semibold text-sm transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* Right — image gallery (dark treatment) */}
          <div className="relative bg-neutral-900 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={phase.images[activeImage]}
                  alt={`Symphony ${activeImage + 1}`}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30" />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {phase.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      i === activeImage
                        ? "border-[#cee002] scale-110"
                        : "border-white/20 hover:border-white/50 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`thumb ${i + 1}`} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => openLightbox(activeImage)}
              className="absolute top-6 right-6 z-10 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium transition-all"
            >
              View All Photos
            </button>

            <button
              onClick={() => setActiveImage((p) => (p - 1 + phase.images.length) % phase.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setActiveImage((p) => (p + 1) % phase.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Home Types sub-section */}
        <div className="bg-neutral-900 py-16 md:py-24 px-6">
          <div className="container-custom">
            <Reveal>
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your Home
                </h3>
                <p className="text-white/60 max-w-xl mx-auto">
                  Symphony offers two thoughtfully designed home types. Place your reservation now and choose when construction begins.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {symphonyHomeTypes.map((home, index) => (
                <Reveal key={home.id} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white/5 border border-white/10 hover:border-[#cee002]/40 rounded-2xl overflow-hidden transition-colors duration-300"
                  >
                    {/* Image preview */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={home.images[0]}
                        alt={home.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="text-lg font-bold text-white">{home.name}</div>
                        <div className="text-sm text-white/60">{home.subtitle} · {home.size}</div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[
                          { label: "Beds", value: home.bedrooms },
                          { label: "Baths", value: home.bathrooms },
                          { label: "Parking", value: home.parking },
                        ].map(({ label, value }) => (
                          <div key={label} className="text-center p-3 bg-white/5 rounded-xl">
                            <div className="text-lg font-bold text-white">{value}</div>
                            <div className="text-xs text-white/40">{label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-6">
                        {home.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#cee002] flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => handleViewHome(home)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 border border-white/20 hover:border-[#cee002]/50 text-white/70 hover:text-white rounded-xl text-sm font-medium transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        See Images
                      </button>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
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
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={phase.images[lightboxIndex]}
                  alt={`Symphony ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={lightboxPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={lightboxNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="text-center mt-4 text-white/50 text-sm">
                {lightboxIndex + 1} / {phase.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {viewingHome && (
        <HomeViewerModal
          home={viewingHome}
          isOpen={isViewerOpen}
          onClose={() => {
            setIsViewerOpen(false)
            setTimeout(() => setViewingHome(null), 300)
          }}
        />
      )}
    </>
  )
}
