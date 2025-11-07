"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const materials = [
  {
    id: "oak",
    name: "Oak",
    description: "Rich, warm oak with natural grain patterns that tell stories of time and craftsmanship",
    image: "/projects/interior/int1.jpeg",
    backgroundImage: "/projects/interior/int2.jpeg",
    tint: "bg-amber-50",
  },
  {
    id: "walnut",
    name: "Walnut",
    description: "Deep, sophisticated walnut with chocolate undertones and elegant figuring",
    image: "/projects/interior/int3.jpeg",
    backgroundImage: "/projects/interior/int4.jpeg",
    tint: "bg-stone-50",
  },
  {
    id: "steel",
    name: "Steel",
    description: "Industrial steel with a refined finish, bringing strength and modern elegance",
    image: "/projects/interior/int5.jpeg",
    backgroundImage: "/projects/interior/int6.jpeg",
    tint: "bg-slate-50",
  },
  {
    id: "marble",
    name: "Marble",
    description: "Timeless marble with natural veining, creating luxury and sophistication",
    image: "/projects/interior/int7.jpeg",
    backgroundImage: "/projects/interior/int8.jpeg",
    tint: "bg-gray-50",
  },
  {
    id: "brass",
    name: "Brass",
    description: "Warm brass with golden undertones, adding warmth and character to any space",
    image: "/projects/interior/int9.jpeg",
    backgroundImage: "/projects/interior/int10.jpeg",
    tint: "bg-yellow-50",
  },
  {
    id: "concrete",
    name: "Concrete",
    description: "Raw concrete with industrial charm, offering strength and minimalist beauty",
    image: "/projects/interior/int11.jpeg",
    backgroundImage: "/projects/interior/int12.jpeg",
    tint: "bg-neutral-50",
  },
]

export function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState("oak")

  const activeMaterialData = materials.find((m) => m.id === activeMaterial) || materials[0]

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="materials">
      <div className="absolute inset-0 z-0">
        {materials.map((material) => (
          <motion.div
            key={material.id}
            className="absolute inset-0"
            initial={{ opacity: material.id === activeMaterial ? 1 : 0 }}
            animate={{ opacity: material.id === activeMaterial ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={material.backgroundImage || "/placeholder.svg"}
              alt={`${material.name} interior scene`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute top-[120px] left-0 right-0 z-10">
        <div className="container-custom text-white">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeMaterial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-bold mb-6 text-7xl"
                >
                  <AnimatedText text={activeMaterialData.name} delay={0.2} />
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeMaterial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-lg text-white/90 leading-relaxed max-w-2xl"
                >
                  {activeMaterialData.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
{/* 
      <div className="absolute bottom-8 left-8 z-10 max-w-md">
       
      </div> */}

      <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2">
              {materials.map((material) => (
                <motion.button
                  key={material.id}
                  className={cn(
                    "px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-md text-sm",
                    activeMaterial === material.id
                      ? "bg-white text-neutral-900"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => setActiveMaterial(material.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {material.name}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
