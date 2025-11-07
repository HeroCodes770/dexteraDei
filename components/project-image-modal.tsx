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
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 p-6 lg:p-8">
                <div className="relative">
                  <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden shadow-sm">
                    <Image src={src || "/placeholder.svg"} alt={meta.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
                  </div>
                </div>

                <div className="relative">
                  <button className="absolute right-0 -top-2 p-2 hover:bg-neutral-100 rounded-full transition-colors" onClick={onClose}>
                    <X size={22} />
                  </button>

                  <h2 className="text-3xl font-semibold text-neutral-900 mb-3">{meta.title}</h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">{meta.description}</p>

                  <div className="divide-y divide-neutral-200">
                    <dl className="grid grid-cols-3 gap-y-4 py-4">
                      <dt className="col-span-1 text-sm font-medium text-neutral-500">Client:</dt>
                      <dd className="col-span-2 text-sm text-neutral-900">{meta.client}</dd>

                      <dt className="col-span-1 text-sm font-medium text-neutral-500">Completion:</dt>
                      <dd className="col-span-2 text-sm text-neutral-900">{meta.completion}</dd>

                      <dt className="col-span-1 text-sm font-medium text-neutral-500">Project Type:</dt>
                      <dd className="col-span-2 text-sm text-neutral-900">{meta.projectType}</dd>

                      <dt className="col-span-1 text-sm font-medium text-neutral-500">Architects:</dt>
                      <dd className="col-span-2 text-sm text-neutral-900">{meta.architects}</dd>

                      <dt className="col-span-1 text-sm font-medium text-neutral-500">Investment:</dt>
                      <dd className="col-span-2 text-sm text-neutral-900">{meta.investment}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </BlurPanel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


