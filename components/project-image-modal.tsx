"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import { BlurPanel } from "./blur-panel"

interface ProjectMeta {
  title: string
  description: string
  client: string
  completion: string
  projectType: string
  architects: string
  investment: string
}

function getProjectMetaFromSrc(src: string): ProjectMeta {
  if (src.includes("Royal Seat") || src.includes("RoyalSeat")) {
    return {
      title: "Project Royal Seat",
      description:
        "Project Royal Seat represents the harmony of modern luxury and natural elegance. A calm sanctuary crafted for refined living.",
      client: "Private Luxury Residence",
      completion: "September 2024",
      projectType: "Luxury Residential",
      architects: "Dextera Dei Team",
      investment: "$3,200,000",
    }
  }

  if (src.includes("Casa")) {
    return {
      title: "Casa Bloom",
      description:
        "Casa Bloom represents the harmony of modern luxury and natural elegance. A calm sanctuary crafted for refined living.",
      client: "Private Luxury Residence",
      completion: "September 2024",
      projectType: "Luxury Residential",
      architects: "Dextera Dei Team",
      investment: "$3,200,000",
    }
  }

  if (src.includes("Vertika")) {
    return {
      title: "Project Vertika",
      description:
        "An iconic vertical development pushing contemporary design while championing sustainable technologies.",
      client: "Urban Development Corp",
      completion: "November 2024",
      projectType: "High-Rise Tower",
      architects: "Dextera Dei Team",
      investment: "$45,000,000",
    }
  }

  if (src.includes("Villa")) {
    return {
      title: "Villa Interior Redesign",
      description:
        "A warm, sophisticated villa transformation where material richness meets contemporary comfort.",
      client: "Private Villa Owner",
      completion: "December 2024",
      projectType: "Interior Design",
      architects: "Dextera Dei Team",
      investment: "$850,000",
    }
  }

  return {
    title: "Project",
    description:
      "A crafted composition of space, light and materiality—designed for both beauty and purpose.",
    client: "Confidential",
    completion: "2024",
    projectType: "Architecture",
    architects: "Dextera Dei Team",
    investment: "—",
  }
}

interface ProjectImageModalProps {
  src: string
  isOpen: boolean
  onClose: () => void
}

export function ProjectImageModal({ src, isOpen, onClose }: ProjectImageModalProps) {
  const meta = getProjectMetaFromSrc(src)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <BlurPanel className="bg-white/95 backdrop-blur-md">
              <div className="relative p-6 lg:p-8">
                <button className="absolute right-4 top-4 p-2 hover:bg-neutral-100 rounded-full transition-colors z-10" onClick={onClose}>
                  <X size={22} />
                </button>

                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden shadow-sm mb-4">
                    <Image src={src || "/placeholder.svg"} alt={meta.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 80vw" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 text-center">{meta.title}</h2>
                </div>
              </div>
            </BlurPanel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


