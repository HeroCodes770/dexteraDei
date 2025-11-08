"use client";

import { motion } from "framer-motion";
import { Clipboard, BarChart3, Video } from "lucide-react";

const trustFeatures = [
  {
    icon: Clipboard,
    title: "Full Access",
    description: "From start to finish, you're always in the loop. Complete transparency in every phase of your project."
  },
  {
    icon: BarChart3,
    title: "Weekly Progress Updates",
    description: "Know exactly where your project stands with detailed weekly reports and milestone tracking."
  },
  {
    icon: Video,
    title: "Live Site Cameras",
    description: "Constant visual access to your site, anytime. Watch your vision come to life in real-time."
  }
];

export function TrustSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-lime-500/10 via-black/30 to-black/50"
            style={{
              backgroundImage: "url('https://i.postimg.cc/0QzhWzT0/pexels-thisisengineering-3862365-min.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-lime-500/5 to-black/40"></div>
            
            {/* Animated overlay elements */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-20 left-20 w-4 h-4 bg-[#cee002] rounded-full opacity-60"
            />
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: -360 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute bottom-32 right-32 w-6 h-6 border-2 border-[#cee002] rounded-full opacity-40"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full opacity-50"
            />
          </motion.div>

          {/* Content Side */}
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-16">
            <div className="max-w-lg w-full">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-4"
              >
                Building with{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[#cee002] relative inline-block"
                >
                  Trust
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#cee002] origin-left"
                  />
                </motion.span>
                ,<br />
                Delivering with{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-[#cee002] relative inline-block"
                >
                  Transparency
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#cee002] origin-left"
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 md:mb-12 px-4"
              >
                Enjoy peace of mind while we bring your vision to life. With us, you get:
              </motion.p>

              {/* Trust Features */}
              <div className="space-y-8">
                {trustFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-12 h-12 bg-[#cee002]/20 rounded-lg flex items-center justify-center group-hover:bg-[#cee002]/30 transition-colors duration-300"
                    >
                      <feature.icon className="w-6 h-6 text-[#cee002]" />
                    </motion.div>
                    <div>
                      <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                        className="text-base md:text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-[#cee002] transition-colors duration-300"
                      >
                        {feature.title}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                        className="text-sm md:text-base text-gray-400 leading-relaxed"
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Closing Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-sm md:text-base text-gray-300 italic text-center"
                >
                  We're committed to making your building process smooth, transparent, and enjoyable—every step of the way.
                </motion.p>
              </motion.div>

              {/* Floating animation elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 border border-[#cee002]/30 rounded-full"
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-8 -left-8 w-6 h-6 bg-[#cee002]/20 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


