"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import Link from "next/link"

const pillars = [
  {
    title: "Visualisation",
    description: "Crafting visionary spaces that blend aesthetics with functionality, creating environments that inspire and endure.",
    image: "/design-pic.jpg",
  },
  {
    title: "Building",
    description: "Transforming architectural visions into reality with precision, quality craftsmanship, and unwavering attention to detail.",
    image: "/building.jpg",
  },
  {
    title: "Interior",
    description: "Designing interior spaces that reflect identity and purpose, where every element harmonizes to create exceptional living experiences.",
    image: "/interior2.jpg",
  }
]

export function PillarsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50" id="pillars">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
              Our Pillars
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The foundation of our excellence: Visualisation, Building, and Interior. 
              Three pillars that define our commitment to creating exceptional spaces.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Background - Bigger */}
                <div className="relative h-80 md:h-96 overflow-hidden bg-neutral-100">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 lg:p-8">
                  <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* View All Projects CTA */}
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 group font-medium"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-neutral-600 mt-4 text-sm">
              Explore our complete portfolio of architectural excellence
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

