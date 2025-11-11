"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Ruler, Calendar, Building2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Project } from "@/lib/projects-data"

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const images = project.images || [project.image]
  const currentImage = images[currentImageIndex]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[9999] overflow-hidden"
          >
            <div className="h-full w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Image Section - More Prominent */}
              <div className="relative flex-1 bg-neutral-50 overflow-hidden min-h-[60%]">
                {/* Main Image/Video */}
                <div className="relative h-full w-full flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-full h-full max-w-7xl mx-auto">
                    {project.isVideo ? (
                      <video
                        src={currentImage.replace(' ', '%20')}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain rounded-lg"
                        controls
                      />
                    ) : (
                      <Image
                        src={currentImage}
                        alt={project.name}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1400px"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Navigation Arrows */}
                  {images.length > 1 && !project.isVideo && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6 text-neutral-900" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6 text-neutral-900" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {images.length > 1 && !project.isVideo && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-neutral-900">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6 text-neutral-900" />
                  </button>

                  {/* Project Title Overlay - Moved to bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === "Completed"
                              ? "bg-green-500 text-white"
                              : project.status === "On-site"
                              ? "bg-blue-500 text-white"
                              : project.status === "In-Design"
                              ? "bg-purple-500 text-white"
                              : project.status === "In Progress"
                              ? "bg-blue-500 text-white"
                              : "bg-amber-500 text-white"
                          }`}>
                            {project.status}
                          </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                        {project.type}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {project.name}
                    </h2>
                    <p className="text-white/90 text-base">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Gallery - More Prominent */}
                {images.length > 1 && !project.isVideo && (
                  <div className="absolute bottom-20 left-0 right-0 px-6 md:px-8 pb-4">
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide max-w-6xl mx-auto">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 shadow-lg ${
                            currentImageIndex === index
                              ? "border-white scale-110 shadow-xl"
                              : "border-white/60 hover:border-white/90 hover:scale-105"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.name} ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="112px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Content - Compact */}
              <div className="overflow-y-auto bg-white border-t border-neutral-200">
                <div className="p-4 md:p-6 lg:p-8">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">About This Project</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-900 rounded-lg flex-shrink-0">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-neutral-500 font-medium">Location</p>
                          <p className="text-base font-semibold text-neutral-900 truncate">
                            {project.specifications?.location || "TBD"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-900 rounded-lg flex-shrink-0">
                          <Ruler className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-neutral-500 font-medium">Area</p>
                          <p className="text-base font-semibold text-neutral-900">
                            {project.specifications?.area || "TBD"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-900 rounded-lg flex-shrink-0">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-neutral-500 font-medium">Type</p>
                          <p className="text-base font-semibold text-neutral-900">
                            {project.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

