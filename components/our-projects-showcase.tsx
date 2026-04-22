"use client"

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, ArrowUpRight } from "lucide-react"
import { clientProjectsData, Project } from "@/lib/projects-data"
import { ProjectDetailModal } from "./project-detail-modal"

// ─── Dummy metadata (replace with real data later) ────────────────────────────
const projectMeta: Record<string, { year: string; tagline: string }> = {
  "casa-crispina": { year: "2023", tagline: "Luxury living redefined" },
  "vertika":       { year: "2023", tagline: "Vertical architecture, elevated" },
  "grandiose":     { year: "2024", tagline: "A landmark in the making" },
  "proton":        { year: "2024", tagline: "Innovation meets form" },
  "quadra":        { year: "2025", tagline: "Space. Scale. Ambition." },
  "royal-seat":    { year: "2022", tagline: "Where royalty finds its home" },
}

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
  "Completed":   { label: "Completed",   color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", dot: "bg-emerald-400" },
  "On-site":     { label: "On-Site",     color: "bg-blue-500/20 text-blue-400 border-blue-500/30",         dot: "bg-blue-400" },
  "In-Design":   { label: "In Design",   color: "bg-violet-500/20 text-violet-400 border-violet-500/30",   dot: "bg-violet-400" },
  "In Progress": { label: "In Progress", color: "bg-blue-500/20 text-blue-400 border-blue-500/30",         dot: "bg-blue-400" },
  "Upcoming":    { label: "Upcoming",    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",      dot: "bg-amber-400 animate-pulse" },
}

// ─── Animated heading letters ──────────────────────────────────────────────────
function SplitHeading({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.035, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

// ─── Hero background ───────────────────────────────────────────────────────────
const bgImages = [
  "/projects/casa-crispina/1.png",
  "/projects/Vertika/vert1.jpg",
  "/projects/grandiose/001.jpg",
  "/projects/royal-seat/night_view.mp4",
]

function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const t = setInterval(() => setBgIndex(p => (p + 1) % (bgImages.length - 1)), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-end overflow-hidden bg-neutral-950">
      {/* Background images */}
      <div className="absolute inset-0">
        {bgImages.slice(0, 3).map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ opacity: i === bgIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <Image src={src} alt="" fill className="object-cover scale-105" sizes="100vw" priority={i === 0} />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div style={{ y }} className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-[#cee002]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#cee002] uppercase">Dextera Dei Studio</span>
          </motion.div>

          {/* Main title */}
          <div className="overflow-hidden mb-4">
            <h1 className="text-[clamp(4rem,12vw,12rem)] font-bold leading-none text-white tracking-tight">
              <SplitHeading text="Our" />
            </h1>
          </div>
          <div className="overflow-hidden mb-10">
            <h1 className="text-[clamp(4rem,12vw,12rem)] font-bold leading-none text-[#cee002] tracking-tight">
              <SplitHeading text="Projects" />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <p className="text-lg md:text-xl text-white/50 font-light max-w-md leading-relaxed">
              Every project is a conversation between space, light, and the people who live in it.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold text-white">{clientProjectsData.length}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Projects</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-4xl font-bold text-white">4+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-xs text-white/30 tracking-[0.2em] uppercase rotate-90 origin-center mt-2">Scroll</span>
      </motion.div>
    </section>
  )
}

// ─── Editorial hover list ──────────────────────────────────────────────────────
function EditorialSection({
  onProjectClick,
}: {
  onProjectClick: (p: Project) => void
}) {
  const [activeId, setActiveId] = useState(clientProjectsData[0].id)
  const activeProject = clientProjectsData.find(p => p.id === activeId)!
  const sectionRef = useRef<HTMLDivElement>(null)

  // Cursor follower
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 180, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 180, damping: 28 })
  const [cursorVisible, setCursorVisible] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
  }

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">Selected Works</span>
          <span className="flex-1 h-px bg-neutral-100" />
        </motion.div>

        {/* Desktop: split layout */}
        <div className="hidden lg:grid grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: list */}
          <div
            ref={sectionRef}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
          >
            {/* Cursor follower thumbnail */}
            <motion.div
              className="absolute z-30 w-48 h-36 rounded-xl overflow-hidden pointer-events-none shadow-2xl"
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-120%",
              }}
              animate={{ opacity: cursorVisible ? 1 : 0, scale: cursorVisible ? 1 : 0.85 }}
              transition={{ duration: 0.25 }}
            >
              {activeProject.isVideo ? (
                <video
                  src={activeProject.image}
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={activeProject.image}
                  alt={activeProject.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              )}
            </motion.div>

            {/* Project rows */}
            <div className="divide-y divide-neutral-100">
              {clientProjectsData.map((project, index) => {
                const meta = projectMeta[project.id]
                const status = statusConfig[project.status]
                const isActive = project.id === activeId

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    onMouseEnter={() => setActiveId(project.id)}
                    onClick={() => onProjectClick(project)}
                    className="group relative flex items-center justify-between py-7 cursor-pointer"
                  >
                    {/* Active indicator */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#cee002]"
                      animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="flex items-center gap-6 min-w-0 flex-1 pl-4">
                      {/* Index */}
                      <motion.span
                        className="text-xs font-mono text-neutral-300 group-hover:text-[#cee002] transition-colors w-6 flex-shrink-0"
                        animate={{ color: isActive ? "#cee002" : undefined }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>

                      <div className="min-w-0">
                        {/* Name */}
                        <motion.h3
                          className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight mb-1 truncate"
                          animate={{ x: isActive ? 4 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.name}
                        </motion.h3>
                        {/* Tagline */}
                        <p className="text-sm text-neutral-400 font-light">{meta?.tagline}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 flex-shrink-0 ml-4">
                      {/* Location */}
                      <div className="hidden xl:flex items-center gap-1.5 text-neutral-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-sm">{project.specifications?.location}</span>
                      </div>

                      {/* Status dot */}
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${status?.dot}`} />
                        <span className="text-xs font-medium text-neutral-500">{status?.label}</span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="p-2 rounded-full border border-neutral-200 text-neutral-400 group-hover:border-neutral-900 group-hover:text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200"
                        animate={{
                          borderColor: isActive ? "#171717" : undefined,
                          backgroundColor: isActive ? "#171717" : undefined,
                          color: isActive ? "#ffffff" : undefined,
                        }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: sticky image panel */}
          <div className="sticky top-8 h-[80vh] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                {activeProject.isVideo ? (
                  <video
                    src={activeProject.image}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover"
                    onLoadedMetadata={(e) => {
                      if (activeProject.image.includes("night_view")) e.currentTarget.currentTime = 22
                    }}
                  />
                ) : (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.name}
                    fill
                    className="object-cover"
                    sizes="55vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Project info overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-8"
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border mb-3 ${statusConfig[activeProject.status]?.color}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[activeProject.status]?.dot}`} />
                        {statusConfig[activeProject.status]?.label}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-1">{activeProject.name}</h3>
                      <div className="flex items-center gap-3 text-white/60 text-sm">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {activeProject.specifications?.location}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {projectMeta[activeProject.id]?.year}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs mb-1">Area</div>
                      <div className="text-white font-semibold">{activeProject.specifications?.area}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-4">
          {clientProjectsData.map((project, index) => {
            const meta = projectMeta[project.id]
            const status = statusConfig[project.status]

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                onClick={() => onProjectClick(project)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                {project.isVideo ? (
                  <video
                    src={project.image}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="100vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border mb-2 ${status?.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status?.dot}`} />
                      {status?.label}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <p className="text-white/60 text-xs mt-0.5">{meta?.tagline}</p>
                  </div>
                  <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Staggered grid ────────────────────────────────────────────────────────────
function GridSection({ onProjectClick }: { onProjectClick: (p: Project) => void }) {
  return (
    <section className="bg-neutral-950 py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">
              <SplitHeading text="All Work" />
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            A full view of our portfolio — from concept to completion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {clientProjectsData.map((project, index) => {
            const meta = projectMeta[project.id]
            const status = statusConfig[project.status]
            // Vary card height for visual rhythm
            const isTall = index === 0 || index === 4

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 + (index % 3) * 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: (index % 3) * 0.12,
                  duration: 0.7,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  isTall ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[600px]" : "aspect-[3/4]"
                }`}
                onClick={() => onProjectClick(project)}
              >
                {/* Image / Video */}
                {project.isVideo ? (
                  <video
                    src={project.image}
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onLoadedMetadata={(e) => {
                      if (project.image.includes("night_view")) e.currentTarget.currentTime = 22
                    }}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${status?.color}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${status?.dot}`} />
                    {status?.label}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10 backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Hover detail panel */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {project.description.split(".")[0]}.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                      {project.specifications?.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" />
                          {project.specifications.location}
                        </span>
                      )}
                      {project.specifications?.area && (
                        <span>{project.specifications.area}</span>
                      )}
                    </div>
                  </motion.div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-white/40 text-xs mb-1 font-mono">{meta?.year}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-white/50 text-xs mt-1">{meta?.tagline}</p>
                    </div>
                    <motion.div
                      className="flex-shrink-0 p-2.5 bg-white/0 border border-white/20 rounded-full text-white/50 group-hover:bg-[#cee002] group-hover:border-[#cee002] group-hover:text-neutral-900 transition-all duration-300"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA / Building practices ──────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#cee002]" />
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase">Our Approach</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Built on craft.
            <br />
            <span className="text-neutral-400">Driven by vision.</span>
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            At Dextera Dei, we believe great architecture is born at the intersection of bold ideas and careful 
            execution. Every project we take on becomes a reflection of both our clients' vision and our 
            commitment to building spaces that endure.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            From luxury residential developments to intimate custom builds, our work speaks for itself — 
            and we'd love for it to speak for you too.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-neutral-950 rounded-3xl p-10 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a vision?
            <br />
            <span className="text-[#cee002]">Let's build it.</span>
          </h3>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            Tell us about your project. Whether it's a dream home, a commercial space, or something entirely 
            new — we'd love to hear about it.
          </p>
          <Link
            href="/#newsletter"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#cee002] text-neutral-900 rounded-full font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#cee002]/20"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Root export ───────────────────────────────────────────────────────────────
export function OurProjectsShowcase() {
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
    <>
      <HeroSection />
      <EditorialSection onProjectClick={handleProjectClick} />
      <GridSection onProjectClick={handleProjectClick} />
      <CtaSection />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
