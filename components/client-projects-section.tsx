"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Building2 } from "lucide-react"
import { Reveal } from "./reveal"
import { clientProjectsData, Project } from "@/lib/projects-data"
import { ProjectDetailModal } from "./project-detail-modal"

export function ClientProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Client Projects
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our portfolio of architectural excellence, 
              showcasing innovative design and exceptional craftsmanship.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clientProjectsData.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
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
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Specifications Preview */}
                  {project.specifications && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                      {project.specifications.location && (
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span>{project.specifications.location}</span>
                        </div>
                      )}
                      {project.specifications.area && (
                        <div className="flex items-center gap-1.5">
                          <span>•</span>
                          <span>{project.specifications.area}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* View Details Button */}
                  <motion.button
                    onClick={() => handleProjectClick(project)}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-neutral-900 font-medium group-hover:text-neutral-700 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Building Practices Section */}
        <Reveal delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Our Building Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Why We Deliver
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  At Dextera Dei, we believe in creating spaces that stand the test of time. 
                  Our commitment to excellence drives every project, ensuring quality craftsmanship, 
                  sustainable practices, and innovative design solutions that exceed expectations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  What We Work On
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  From luxury residential developments to affordable housing initiatives, 
                  we tackle diverse projects that make a meaningful impact. Our portfolio 
                  reflects our dedication to architectural artistry and our mission to 
                  address housing needs across all communities.
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

