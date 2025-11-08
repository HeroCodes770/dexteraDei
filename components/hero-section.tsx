"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { PackageCheck, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { BlurPanel } from "./blur-panel";


// Project images for the hero section
const heroProjects = [
  {
    src: "/Royal Seat.mp4",
    alt: "Project Royal Seat - Luxury residential project",
    title: "PROJECT ROYAL SEAT",
    subtitle: "Luxury Residential",
    category: "RESIDENTIAL",
    category2: "MODERN DESIGN",
    description: "Where elegance meets contemporary living",
    isVideo: true
  },
  {
    src: "/projects/Villa/villa1.jpg",
    alt: "Project Villa - Sophisticated villa design",
    title: "PROJECT VILLA",
    subtitle: "Villa Design",
    category: "ARCHITECTURE",
    category2: "LUXURY",
    description: "Crafting spaces that inspire"
  },
  {
    src: "/projects/Vertika/vert1.jpg",
    alt: "Project Vertika - Vertical development",
    title: "PROJECT VERTIKA",
    subtitle: "Vertical Development",
    category: "URBAN",
    category2: "INNOVATION",
    description: "Pushing boundaries of modern architecture"
  },
  {
    src: "/projects/interior/int1.jpeg",
    alt: "Interior excellence",
    title: "INTERIOR EXCELLENCE",
    subtitle: "Interior Design",
    category: "DESIGN",
    category2: "CRAFTSMANSHIP",
    description: "Every detail tells a story"
  }
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Auto-change project every 30 seconds
  useEffect(() => {
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        const nextIndex = (currentProjectIndex + 1) % heroProjects.length;
        
        // Simple state change after a short delay
        setTimeout(() => {
          setCurrentProjectIndex(nextIndex);
          setIsTransitioning(false);
        }, 800);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [currentProjectIndex, isTransitioning]);

  // Simple scroll effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.2;

      projectRefs.current.forEach((ref, index) => {
        if (ref && index === currentProjectIndex) {
          ref.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0001})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentProjectIndex]);

  const AnimatedText = ({
    text,
    delay = 0,
  }: {
    text: string;
    delay?: number;
  }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section ref={containerRef} id="home" className="relative h-screen overflow-hidden">
      {/* Header */}
      {/* <header className="sticky top-0 left-0 right-0 z-30 p-6  text-white text-4xlflex justify-between items-center">
       
      </header> */}

      {/* Project Background Images with Clean Animation */}
      <div className="absolute inset-0">
        {heroProjects.map((project, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="absolute inset-0"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{
              opacity: index === currentProjectIndex ? 1 : 0,
            }}
            transition={{
              duration: 1.0,
              ease: "easeInOut",
            }}
          >
            {project.isVideo ? (
              <video
                src={project.src.replace(' ', '%20')}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ position: 'absolute', inset: 0 }}
              />
            ) : (
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-black/50" />

            {/* Modern overlay with subtle gradient */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              style={{
                background: `linear-gradient(135deg, 
                  rgba(0,0,0,0.6) 0%, 
                  rgba(0,0,0,0.3) 50%, 
                  rgba(0,0,0,0.7) 100%)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const baseX = (i * 17) % 100;
          const baseY = (i * 23) % 100;
          const duration = 8 + (i % 4);

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: [0, 50, -30, 20, 0],
                y: [0, -40, 60, -20, 0],
                opacity: [0, 1, 0.5, 1, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${baseX}%`,
                top: `${baseY}%`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="px-4 md:px-8 text-white w-full">
          {/* Animated text content for each project */}
          {heroProjects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center w-full px-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: index === currentProjectIndex ? 1 : 0,
                y: index === currentProjectIndex ? 0 : 30,
              }}
              transition={{
                duration: 1.2,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: index === currentProjectIndex ? 0.4 : 0,
              }}
            >
              <div className="w-full max-w-6xl mx-auto">
                <Reveal>
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.h1
                      className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-none tracking-tight mb-4 md:mb-6 px-4"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.0,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                    >
                      <AnimatedText text={project.title} delay={0.8} />
                    </motion.h1>

                    <motion.p
                      className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 px-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    >
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        {project.subtitle}
                      </span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        {project.category}
                      </span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        {project.category2}
                      </span>
                    </motion.div>
                  </motion.div>
                </Reveal>
              </div>
            </motion.div>
          ))}

          {/* <Reveal delay={0.2}>
            <motion.p
              className="text-xs text-white/90 mb-12 leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              3D VISUALIZATION SERVICES FOR ARCHITECTS, DESIGNERS, AND REAL ESTATE DEVELOPERS. HIGH QUALITY, REALISTIC TIMELINES, AND CLEAR PROCESS.
            </motion.p>
          </Reveal> */}

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              WORK
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.button>
          </motion.div> */}
        </div>
      </motion.div>

      {/* Modern Project Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex gap-3">
          {heroProjects.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProjectIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => setCurrentProjectIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Project Counter */}
      <motion.div
        className="absolute bottom-8 right-8 z-30 text-white/80"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="text-right">
          <div className="text-2xl font-light">
            {String(currentProjectIndex + 1).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider">
            of {String(heroProjects.length).padStart(2, '0')}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
