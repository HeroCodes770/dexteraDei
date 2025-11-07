"use client"

import { motion } from "framer-motion"
import { 
  Bed, 
  Car, 
  Droplets, 
  CheckCircle2,
  Square,
  ArrowRight,
  Eye
} from "lucide-react"
import { useState } from "react"
import { Reveal } from "./reveal"
import { HomeViewerModal } from "./home-viewer-modal"

const homeTypes = [
  {
    id: "2br",
    name: "Covalent Homes",
    subtitle: "2 Bedroom Homes",
    size: "~135 sqm",
    bedrooms: 2,
    bathrooms: 2.5,
    parking: 2,
    features: [
      "2 Bedrooms",
      "Spacious Living & Dining Area",
      "Kitchen fitted with cabinetry",
      "Solar Energy System + Smart Home Features",
      "Parking for 2 Cars",
      "Water Storage",
      "2.5 Bathrooms (2 Ensuite + 1 Shared)",
    ],
    images: [
      "/projects/eden/2bedroom/A.jpg",
      "/projects/eden/2bedroom/B.jpg",
      "/projects/eden/2bedroom/C (1).jpg",
      "/projects/eden/2bedroom/D (1).jpg",
      "/projects/eden/2bedroom/E.jpg",
      "/projects/eden/2bedroom/F  (1).jpg",
    ],
    headerGradient: "from-neutral-50 to-neutral-100",
    checkColor: "text-neutral-900",
    borderColor: "border-neutral-900",
  },
  {
    id: "3br",
    name: "Tritone Homes",
    subtitle: "3 Bedroom Homes",
    size: "~200 sqm",
    bedrooms: 3,
    bathrooms: 3.5,
    parking: 3,
    features: [
      "3 Bedrooms",
      "Spacious Living & Dining Area",
      "Kitchen fitted with cabinetry",
      "Solar Energy System + Smart Home Features",
      "Parking for 3 Cars",
      "Water Storage",
      "3.5 Bathrooms (3 Ensuite + 1 Shared)",
    ],
    images: [
      "/projects/eden/2bedroom/A.jpg", // Using 2BR images as placeholder until 3BR images are added
      "/projects/eden/2bedroom/B.jpg",
      "/projects/eden/2bedroom/C (1).jpg",
    ],
    headerGradient: "from-neutral-50 to-neutral-100",
    checkColor: "text-neutral-900",
    borderColor: "border-neutral-900",
  },
]

export function HomeTypesSection() {
  const [selectedHome, setSelectedHome] = useState<string | null>(null)
  const [viewingHome, setViewingHome] = useState<typeof homeTypes[0] | null>(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const handleViewHome = (home: typeof homeTypes[0]) => {
    setViewingHome(home)
    setIsViewerOpen(true)
  }

  const handleCloseViewer = () => {
    setIsViewerOpen(false)
    setTimeout(() => setViewingHome(null), 300)
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Home Types
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose from thoughtfully designed 2 and 3 bedroom homes, 
              each equipped with modern amenities and sustainable features.
            </p>
          </div>
        </Reveal>

        {/* Home Type Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {homeTypes.map((home, index) => (
            <Reveal key={home.id} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 pb-20 ${
                  selectedHome === home.id 
                    ? home.borderColor
                    : "border-transparent hover:border-neutral-200"
                }`}
                onHoverStart={() => setSelectedHome(home.id)}
                onHoverEnd={() => setSelectedHome(null)}
              >
                {/* Header */}
                <div className={`p-8 bg-gradient-to-br ${home.headerGradient}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
                      {home.name}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-3">{home.subtitle}</p>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Square className="w-5 h-5" />
                      <span className="text-lg font-semibold">{home.size}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="px-8 py-6 bg-white border-b border-neutral-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-neutral-600 mb-1">
                        <Bed className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">{home.bedrooms}</div>
                      <div className="text-xs text-neutral-500">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-neutral-600 mb-1">
                        <Droplets className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">{home.bathrooms}</div>
                      <div className="text-xs text-neutral-500">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-neutral-600 mb-1">
                        <Car className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">{home.parking}</div>
                      <div className="text-xs text-neutral-500">Parking</div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {home.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + featureIndex * 0.05 
                        }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${home.checkColor}`} />
                        <span className="text-neutral-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                </div>

                {/* View Homes CTA - Bottom Right */}
                <div className="absolute bottom-6 right-6">
                  <motion.button
                    onClick={() => handleViewHome(home)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-200 font-medium shadow-lg"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">See Images</span>
                  </motion.button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Home Viewer Modal */}
      {viewingHome && (
        <HomeViewerModal
          home={viewingHome}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
        />
      )}
    </section>
  )
}

