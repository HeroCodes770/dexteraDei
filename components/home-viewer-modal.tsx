"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface HomeViewerModalProps {
  home: {
    id: string
    name: string
    subtitle: string
    size: string
    images: string[]
  }
  isOpen: boolean
  onClose: () => void
}

export function HomeViewerModal({ home, isOpen, onClose }: HomeViewerModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = home.images || []
  const currentImage = images[currentImageIndex]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!home || images.length === 0) return null

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
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                    {home.name}
                  </h2>
                  <p className="text-neutral-600 mt-1">{home.subtitle} • {home.size}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-neutral-900" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Main Image */}
                <div className="flex-1 relative bg-neutral-50 overflow-hidden">
                  <div className="relative h-full w-full flex items-center justify-center p-8">
                    {currentImage && (
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative w-full h-full max-w-4xl mx-auto"
                      >
                        <Image
                          src={currentImage}
                          alt={`${home.name} ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                          priority
                        />
                      </motion.div>
                    )}

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-neutral-200"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6 text-neutral-900" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-neutral-200"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6 text-neutral-900" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-neutral-900 border border-neutral-200">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    )}
                  </div>
                </div>

                {/* Thumbnail Sidebar */}
                {images.length > 1 && (
                  <div className="w-full md:w-32 lg:w-40 bg-neutral-50 border-t md:border-t-0 md:border-l border-neutral-200 p-4 overflow-y-auto scrollbar-hide">
                    <div className="flex md:flex-col gap-3">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-20 h-20 md:w-full md:aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            currentImageIndex === index
                              ? "border-neutral-900 scale-105"
                              : "border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${home.name} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

