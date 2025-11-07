"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BlurPanel } from "./blur-panel"

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  {
    name: "Home",
    href: "/",
    description: "Welcome to our studio",
    isHash: false
  },
  {
    name: "Collections",
    href: "#collections",
    description: "Explore our signature collections",
    isHash: true
  },
  {
    name: "Projects",
    href: "/projects",
    description: "Discover our projects and building practices",
    isHash: false
  },
  {
    name: "About Us",
    href: "#about",
    description: "Highlighted projects and pieces",
    isHash: true
  },
  {
    name: "Contact",
    href: "#newsletter",
    description: "Stay connected with our updates",
    isHash: true
  }
]

export function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const pathname = usePathname()

  const handleLinkClick = (href: string, isHash: boolean) => {
    if (isHash) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      onClose()
    } else {
      onClose()
      // Navigation will be handled by Next.js Link
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center  md:items-start md:justify-end "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ position: 'fixed' }}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 " onClick={onClose} />

          {/* Navigation Menu */}
          <motion.div
            className="fixed w-full bg-black/95 h-screen "
            initial={{ scale: 0.9, opacity: 0, y: 20, x: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20, x: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ position: 'fixed' }}
          >
            <BlurPanel className="bg-white/95 shadow-xl backdrop-blur-md w-full border max-w-2xl md:max-w-sm max-h-[80vh] overflow-hidden  md:mt-20 md:mr-4">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-neutral-900">Navigation</h2>
                  <button
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                    onClick={onClose}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.isHash ? (
                        <button
                          onClick={() => handleLinkClick(item.href, true)}
                          className="w-full text-left p-4 rounded-lg hover:bg-neutral-50 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                {item.name}
                              </h3>
                              <p className="text-sm text-neutral-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                            <motion.div
                              className="text-neutral-400 group-hover:text-neutral-600 transition-colors"
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.div>
                          </div>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => handleLinkClick(item.href, false)}
                          className="w-full text-left p-4 rounded-lg hover:bg-neutral-50 transition-all duration-200 group block"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                {item.name}
                              </h3>
                              <p className="text-sm text-neutral-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                            <motion.div
                              className="text-neutral-400 group-hover:text-neutral-600 transition-colors"
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.div>
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500 text-center">
                    Navigate through our studio experience
                  </p>
                </div>
              </div>
            </BlurPanel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
