"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { ProjectImageModal } from "./project-image-modal"

const collections = [
  {
    id: "grandiose",
    name: "Project Grandiose",
    description: "A sophisticated residential development showcasing modern architectural excellence.",
    image: "/projects/grandiose/001.jpg",
  },
  {
    id: "casa-crispina",
    name: "Casa Crispina",
    description: "A refined residential project blending luxury with timeless elegance.",
    image: "/projects/casa-crispina/1.png",
  },
  {
    id: "vertika",
    name: "Project Vertika",
    description: "Vertical living reimagined with contemporary design principles.",
    image: "/projects/vertika/vert1.jpg",
  },
  {
    id: "interior-kitchen",
    name: "Kitchen Elegance",
    description: "A beautifully crafted kitchen space where functionality meets style.",
    image: "/projects/interior/int1.jpeg",
  },
  {
    id: "interior-living",
    name: "Living Spaces",
    description: "Warm and inviting living areas designed for comfort and relaxation.",
    image: "/projects/interior/int2.jpeg",
  },
  {
    id: "interior-dining",
    name: "Dining Excellence",
    description: "Sophisticated dining spaces perfect for entertaining and family gatherings.",
    image: "/projects/interior/int3.jpeg",
  },
  {
    id: "interior-bedroom",
    name: "Bedroom Sanctuary",
    description: "Serene bedroom designs that create peaceful retreats for rest.",
    image: "/projects/interior/int4.jpeg",
  },
  {
    id: "interior-bathroom",
    name: "Bathroom Luxury",
    description: "Luxurious bathroom designs combining elegance with modern amenities.",
    image: "/projects/interior/int5.jpeg",
  },
  {
    id: "interior-lounge",
    name: "Lounge Comfort",
    description: "Relaxed lounge areas designed for unwinding and socializing.",
    image: "/projects/interior/int6.jpeg",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<{ name: string; description: string } | null>(null)
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
    <section ref={containerRef} id="collections" className="py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="mb-8 md:mb-12">
        <Reveal>
          <div className="container-custom text-center px-4 md:px-0">
            <h2 className="text-neutral-900 mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">Signature Collections</h2>
            <p className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
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
                setSelectedCollection({ name: collection.name, description: collection.description })
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
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold text-neutral-900">{collection.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-6 md:mt-8 px-4">
        <p className="text-xs md:text-sm text-neutral-500">← Drag to explore collections →</p>
      </div>

      {selectedSrc && selectedCollection && (
        <ProjectImageModal
          src={selectedSrc}
          title={selectedCollection.name}
          description={selectedCollection.description}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedSrc(null)
            setSelectedCollection(null)
          }}
        />)
      }
    </section>
  )
}
