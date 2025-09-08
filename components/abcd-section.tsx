"use client";

import { motion } from "framer-motion";
import { Building, Construction, Users, Palette } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Architecture",
    description: "Shaping visionary structures that blend functionality, beauty, and purpose, creating spaces that stand the test of time.",
    keywords: ["DESIGN", "PLANNING", "INNOVATION"]
  },
  {
    icon: Construction,
    title: "Building",
    description: "Transforming concepts into reality with precision and craftsmanship, delivering enduring structures that inspire confidence.",
    keywords: ["CONSTRUCTION", "QUALITY", "EXECUTION"]
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Providing expert guidance to align visions with practical solutions, ensuring every project fulfills its potential seamlessly.",
    keywords: ["EXPERTISE", "STRATEGY", "SUPPORT"]
  },
  {
    icon: Palette,
    title: "Design",
    description: "Infusing creativity and innovation to craft spaces that reflect identity, purpose, and elegance.",
    keywords: ["CREATIVITY", "AESTHETICS", "FUNCTION"]
  }
];

export function ABCDSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#cee002] font-semibold text-sm uppercase tracking-wider">
              WHAT WE DO
            </span>
            <div className="w-16 h-0.5 bg-[#cee002] mx-auto mt-2"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            The{" "}
            <span className="relative">
              ABCD
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#cee002]"></div>
            </span>{" "}
            of Real Estate Development
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We are committed to delivering exceptional results through our comprehensive approach to real estate development.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-lime-600" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Keywords */}
              <div className="space-y-2">
                {service.keywords.map((keyword, keywordIndex) => (
                  <motion.span
                    key={keyword}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + 0.5 + keywordIndex * 0.1 
                    }}
                    className="inline-block bg-lime-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

