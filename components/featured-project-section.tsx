"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Users, Leaf, Sparkles } from "lucide-react"
import { Reveal } from "./reveal"

export function FeaturedProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cee002]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side - Left */}
          <motion.div
            style={{ y: imageY, opacity }}
            className="relative order-2 lg:order-1"
          >
            <Reveal>
              <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/projects/eden/3bedroom/night view.jpeg"
                    alt="Eden Project - Modern residential community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#cee002]" />
                    <span className="text-sm font-semibold text-neutral-900">Maiden Project</span>
                  </div>
                </motion.div>

                {/* Stats Overlay - Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">25</div>
                      <div className="text-xs md:text-sm text-white/80">Homes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">2-3</div>
                      <div className="text-xs md:text-sm text-white/80">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs md:text-sm text-white/80">Solar</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            style={{ y: contentY, opacity }}
            className="relative order-1 lg:order-2 px-4 md:px-0"
          >
            <Reveal>
              <div className="space-y-6 md:space-y-8">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#cee002]/10 rounded-full border border-[#cee002]/20"
                >
                  <Home className="w-4 h-4 text-[#cee002]" />
                  <span className="text-sm font-medium text-neutral-900">Building Communities</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
                >
                  <span className="block">Eden</span>
                  <span className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                    Village
                  </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl md:text-2xl text-neutral-600 font-light"
                >
                  Our Maiden Project
                </motion.p>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    Discover a thoughtfully designed neighborhood of 25 modern homes, offering a perfect blend of 2-bedroom and 3-bedroom layouts. Each residence features smart home capabilities and solar power integration.
                  </p>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    Built with sustainability at heart, our homes maximize natural light and cross-ventilation to create bright, airy spaces that feel connected to the environment.
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="grid grid-cols-2 gap-4 pt-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#cee002]/10 rounded-lg flex-shrink-0">
                      <Home className="w-5 h-5 text-[#cee002]" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-1">Smart Homes</div>
                      <div className="text-sm text-neutral-600">Modern technology</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#cee002]/10 rounded-lg flex-shrink-0">
                      <Leaf className="w-5 h-5 text-[#cee002]" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-1">Sustainable</div>
                      <div className="text-sm text-neutral-600">Solar powered</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#cee002]/10 rounded-lg flex-shrink-0">
                      <Users className="w-5 h-5 text-[#cee002]" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-1">Community</div>
                      <div className="text-sm text-neutral-600">25 homes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#cee002]/10 rounded-lg flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-[#cee002]" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-1">Modern Design</div>
                      <div className="text-sm text-neutral-600">Thoughtful layouts</div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="pt-4"
                >
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 font-medium text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>Explore Eden Village</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

