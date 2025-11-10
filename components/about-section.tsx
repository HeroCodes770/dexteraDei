"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px), radial-gradient(circle at 75% 75%, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                About Us
              </motion.h2>
              <motion.div
                className="w-24 h-px bg-neutral-300 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </div>
          </Reveal>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center px-4 md:px-0">
            {/* Left Column - Main Text */}
            <Reveal delay={0.2}>
              <div className="space-y-6 md:space-y-8">
                <motion.h3
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Crafting Timeless Spaces, Shaping the Future
                </motion.h3>
                
                <motion.p
                  className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  At our core, we craft timeless solutions through architecture, building, and design. Harnessing the resources at our disposal, we create spaces that honor purpose, enrich the environment, and fulfill our clients' visions with enduring elegance.
                </motion.p>

             
              </div>
            </Reveal>

            {/* Right Column - Visual Element */}
            <Reveal delay={0.4}>
              {/* <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.6 }}
              >
                <BlurPanel className="bg-white/60 backdrop-blur-md p-8 lg:p-12 rounded-2xl shadow-xl border border-white/20">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-neutral-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#cee002] rounded-full" />
                      </div>
                      <h4 className="text-xl font-medium text-neutral-900 mb-2">Our Approach</h4>
                      <p className="text-neutral-600">
                        We believe in the power of thoughtful design to transform lives and communities.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#cee002] rounded-full" />
                        <span className="text-sm text-neutral-600">Architectural Excellence</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#cee002] rounded-full" />
                        <span className="text-sm text-neutral-600">Sustainable Building</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#cee002] rounded-full" />
                        <span className="text-sm text-neutral-600">Interior Design</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#cee002] rounded-full" />
                        <span className="text-sm text-neutral-600">Project Management</span>
                      </div>
                    </div>
                  </div>
                </BlurPanel>
              </motion.div> */}
                 {/* Values Grid */}
                 <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#cee002] rounded-full" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-neutral-900">Timeless Visualisation</h4>
                    <p className="text-xs md:text-sm text-neutral-600">Creating spaces that transcend trends and remain relevant for generations.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#cee002] rounded-full" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-neutral-900">Purpose-Driven</h4>
                    <p className="text-xs md:text-sm text-neutral-600">Every design decision serves a specific function and enhances the user experience.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#cee002] rounded-full" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-neutral-900">Environmental Care</h4>
                    <p className="text-xs md:text-sm text-neutral-600">Sustainable practices that enrich both the built and natural environment.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#cee002] rounded-full" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-neutral-900">Client Vision</h4>
                    <p className="text-sm text-neutral-600">Translating dreams into reality with precision and artistic excellence.</p>
                  </div>
                </motion.div>
            </Reveal>
          </div>

          {/* Bottom CTA */}
          {/* <Reveal delay={0.6}>
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button
                className="px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </Reveal> */}
        </div>
      </div>
    </section>
  )
}
