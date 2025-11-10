"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Users, 
  Lightbulb, 
  TreePine, 
  Home,
  CheckCircle2
} from "lucide-react"
import { Reveal } from "./reveal"

const amenities = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security monitoring for your peace of mind",
    bgColor: "bg-neutral-50",
    iconColor: "text-neutral-900",
  },
  {
    icon: Users,
    title: "Inclusive Access for All Abilities",
    description: "Thoughtfully designed to be accessible, comfortable, and welcoming for everyone.",
    bgColor: "bg-neutral-50",
    iconColor: "text-neutral-900",
  },
  {
    icon: Lightbulb,
    title: "Solar-Powered Street Lighting",
    description: "Sustainable lighting powered by renewable energy",
    bgColor: "bg-neutral-50",
    iconColor: "text-neutral-900",
  },
  {
    icon: TreePine,
    title: "Green Spaces & Walkways",
    description: "Beautifully landscaped areas for relaxation and recreation",
    bgColor: "bg-neutral-50",
    iconColor: "text-neutral-900",
  },
  {
    icon: Home,
    title: "Affordable & Safe Construction",
    description: "Quality-built homes that prioritize safety and affordability",
    bgColor: "bg-neutral-50",
    iconColor: "text-neutral-900",
  },
]

export function CommunityAmenities() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Community Amenities
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Experience a thoughtfully designed community with amenities 
              that enhance your quality of life.
            </p>
          </div>
        </Reveal>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <Reveal key={amenity.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                {/* Icon */}
                <motion.div
                  className={`mb-3 md:mb-4 p-3 md:p-4 rounded-xl ${amenity.bgColor} w-fit`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <amenity.icon className={`w-6 h-6 md:w-8 md:h-8 ${amenity.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {amenity.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neutral-200 transition-colors"
                  initial={false}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-neutral-900 rounded-2xl p-8 md:p-12 max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Building Sustainable Communities
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Eden Project reflects our commitment to providing affordable, sustainable housing that never compromises on quality, comfort, or design. Each home is built to nurture both people and the planet, creating spaces where communities can truly thrive.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

