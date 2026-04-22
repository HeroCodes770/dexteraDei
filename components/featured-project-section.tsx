"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Flame, Bed, Home, Shield } from "lucide-react"
import { Reveal } from "./reveal"
import { edenVillagePhases } from "@/lib/eden-village-data"

const guauCourt = edenVillagePhases[0]
const symphony = edenVillagePhases[1]
const unitsRemaining = guauCourt.totalUnits - guauCourt.unitsSold

export function FeaturedProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cee002]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-900/4 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#cee002] uppercase mb-4">
              <span className="w-6 h-px bg-[#cee002]" />
              Eden Village
              <span className="w-6 h-px bg-[#cee002]" />
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
              Now Launching
            </h2>
          </div>
        </Reveal>

        {/* Main feature — Guau Court */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div style={{ y: imageY, opacity }} className="relative order-2 lg:order-1">
            <Reveal>
              <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/projects/guau-court/IMG_4574.JPEG"
                    alt="Guau Court — Eden Village Phase 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>

                {/* Phase badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg flex items-center gap-1.5"
                >
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs font-bold text-neutral-900">Phase 1 · Launching May</span>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
                >
                  <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{guauCourt.totalUnits}</div>
                      <div className="text-xs text-white/70">Total Homes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#cee002]">{unitsRemaining}</div>
                      <div className="text-xs text-white/70">Remaining</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">4</div>
                      <div className="text-xs text-white/70">Bedrooms</div>
                    </div>
                  </div>

                  {/* Availability bar */}
                  <div className="flex gap-1">
                    {Array.from({ length: guauCourt.totalUnits }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1.5 rounded-full ${
                          i < guauCourt.unitsSold ? "bg-white/30" : "bg-[#cee002]"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-white/60 mt-1.5">
                    {guauCourt.unitsSold} of {guauCourt.totalUnits} homes reserved
                  </p>
                </motion.div>
              </div>
            </Reveal>
          </motion.div>

          {/* Content */}
          <div className="relative order-1 lg:order-2 px-4 md:px-0">
            <Reveal>
              <div className="space-y-6">
                {/* Urgency tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-orange-700 uppercase tracking-wide">
                    <Flame className="w-3 h-3" />
                    Launching May 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-700 uppercase tracking-wide">
                    Only {unitsRemaining} homes left
                  </span>
                </div>

                {/* Title */}
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Eden Village</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-none">
                    Guau Court
                  </h2>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-neutral-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{guauCourt.location}</span>
                </div>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {guauCourt.description} Each home is a 4-bedroom masterpiece — smart, solar-powered, and built for the way you want to live.
                </p>

                {/* Feature pills */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Home, text: "Gated Community" },
                    { icon: Bed, text: "4-Bedroom Homes" },
                    { icon: Shield, text: "Smart Home Tech" },
                    { icon: Flame, text: "Solar Powered" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <div className="p-1.5 bg-[#cee002]/15 rounded-lg">
                        <Icon className="w-4 h-4 text-neutral-700" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/projects#guau-court"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Explore Guau Court
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Symphony teaser strip */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950">
            <div className="absolute inset-0">
              <Image
                src="/projects/eden/3bedroom/night view.jpeg"
                alt="Eden Village Symphony"
                fill
                className="object-cover opacity-40"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/50" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#cee002] uppercase block mb-2">
                  Phase 2 · Coming Soon
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Eden Village — Symphony
                </h3>
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-sm">{symphony.location}</span>
                </div>
                <p className="text-white/60 text-sm mt-3 max-w-md">
                  25 homes in East Legon Hills. 2 & 3-bedroom layouts. Reservations are now open.
                </p>
              </div>
              <Link
                href="/projects#symphony"
                className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#cee002] text-neutral-900 rounded-full font-bold text-sm hover:bg-[#d9f002] transition-all hover:scale-105 shadow-lg shadow-[#cee002]/20"
              >
                Reserve a Home
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
