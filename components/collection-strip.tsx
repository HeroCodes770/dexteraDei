"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { ProjectImageModal } from "./project-image-modal"

const collections = [
  {
    id: "modern-seating",
    name: "MODERN SEATING",
    image: "/projects/Casa/casa1.jpg",
    count: "8 pieces",
  },
  {
    id: "modular-design",
    name: "MODULAR DESIGN",
    image: "/projects/Villa/villa1.jpg",
    count: "6 pieces",
  },
  {
    id: "cloud-collection",
    name: "CLOUD COLLECTION",
    image: "/projects/Vertika/vert1.jpg",
    count: "4 pieces",
  },
  {
    id: "artistic-pieces",
    name: "ARTISTIC PIECES",
    image: "/projects/Casa/case2.jpg",
    count: "5 pieces",
  },
  {
    id: "contemporary",
    name: "CONTEMPORARY",
    image: "/projects/Vertika/vert2.jpg",
    count: "7 pieces",
  },
  {
    id: "textural-craft",
    name: "TEXTURAL CRAFT",
    image: "/projects/Villa/villa2.jpg",
    count: "3 pieces",
  },
  {
    id: "maximalist-art",
    name: "MAXIMALIST ART",
    image: "/projects/Casa/casa3.jpg",
    count: "4 pieces",
  },
  {
    id: "scandinavian-comfort",
    name: "SCANDINAVIAN COMFORT",
    image: "/projects/Vertika/vert4.jpg",
    count: "6 pieces",
  },
  {
    id: "interior-1",
    name: "INTERIOR DESIGN",
    image: "/projects/interior/int1.jpeg",
    count: "3 pieces",
  },
  {
    id: "interior-2",
    name: "INTERIOR SPACES",
    image: "/projects/interior/int2.jpeg",
    count: "4 pieces",
  },
  {
    id: "interior-3",
    name: "INTERIOR CRAFT",
    image: "/projects/interior/int3.jpeg",
    count: "5 pieces",
  },
  {
    id: "interior-4",
    name: "INTERIOR ELEGANCE",
    image: "/projects/interior/int4.jpeg",
    count: "4 pieces",
  },
  {
    id: "interior-5",
    name: "INTERIOR STYLE",
    image: "/projects/interior/int5.jpeg",
    count: "5 pieces",
  },
  {
    id: "interior-6",
    name: "INTERIOR LUXURY",
    image: "/projects/interior/int6.jpeg",
    count: "6 pieces",
  },
  {
    id: "interior-7",
    name: "INTERIOR REFINED",
    image: "/projects/interior/int7.jpeg",
    count: "4 pieces",
  },
  {
    id: "interior-8",
    name: "INTERIOR MODERN",
    image: "/projects/interior/int8.jpeg",
    count: "5 pieces",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 320 // 320px (w-80) + 32px gap = 352px per item
  const totalWidth = collections.length * (itemWidth + 32) - 32 // subtract last gap
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48) // add padding

  return (
    <section ref={containerRef} id="collections" className="py-20 lg:py-32 overflow-hidden">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">Signature Collections</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover curated ensembles where craftsmanship meets considered design—each collection telling its own refined story.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={() => {
                setSelectedSrc(collection.image)
                setIsModalOpen(true)
              }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold tracking-wider mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-500">← Drag to explore collections →</p>
      </div>

      {selectedSrc && (
        <ProjectImageModal
          src={selectedSrc}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />)
      }
    </section>
  )
}
