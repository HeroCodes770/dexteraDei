"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "@/lib/gsap-setup";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const counterRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || typeof window === "undefined") return;

    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute w-1 h-1 bg-white/30 rounded-full";

        // Use deterministic values based on index
        const baseX = (i * 13) % 100;
        const baseY = (i * 19) % 100;
        const duration = 3 + (i % 4);

        particle.style.left = `${baseX}%`;
        particle.style.top = `${baseY}%`;
        particlesRef.current.appendChild(particle);

        // Animate particle with deterministic values
        gsap.to(particle, {
          x: ((i * 7) % 200) - 100,
          y: ((i * 11) % 200) - 100,
          opacity: 1,
          duration: duration,
          repeat: -1,
          ease: "none",
        });
      }
    };

    // Animate progress bar
    const animateProgress = () => {
      if (!progressRef.current) return;

      gsap.to(progressRef.current, {
        width: "100%",
        duration: 30, // 30 seconds
        ease: "power2.out",
      });
    };

    // Animate counter with text plugin
    const animateCounter = () => {
      if (!counterRef.current) return;

      gsap.to(counterRef.current, {
        duration: 30, // 30 seconds
        text: "100",
        ease: "power2.out",
        snap: { text: 1 },
        onUpdate: function () {
          const currentValue = parseInt(this.targets()[0].textContent || "0");
          setCount(currentValue);
        },
      });
    };

    // Animate logo/brand
    const animateLogo = () => {
      gsap.fromTo(
        ".loading-logo",
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 2,
          ease: "back.out(1.7)",
        }
      );
    };

    // Animate subtitle
    const animateSubtitle = () => {
      gsap.fromTo(
        ".loading-subtitle",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    };

    // Animate progress container
    const animateProgressContainer = () => {
      gsap.fromTo(
        ".progress-container",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power2.out",
        }
      );
    };

    // Animate percentage text
    const animatePercentage = () => {
      gsap.fromTo(
        ".percentage-text",
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 1.5,
          ease: "back.out(1.7)",
        }
      );
    };

    // Start all animations
    // Set up completion after 30 seconds
    gsap.delayedCall(32, () => {
      // Fade out loading screen
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIsVisible(false);
          onComplete();
        },
      });
    });

    // Execute animations
    createParticles();
    animateLogo();
    animateSubtitle();
    animateProgressContainer();
    animatePercentage();

    // Start counter and progress after initial animations
    gsap.delayedCall(2, () => {
      animateCounter();
      animateProgress();
    });
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Floating particles */}
        {/* <div
          ref={particlesRef}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        /> */}

        {/* Main content */}
        <div className="relative z-10 text-center text-white">
          {/* Home SVG Drawing Animation */}
          <motion.div
            className="loading-logo mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24" 
              fill="none"
              className="mx-auto mb-4"
            >
              {/* Home icon - main house outline */}
              <motion.path
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0.2,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              />

              {/* Roof line */}
              <motion.path
                d="M9 22V12h6v10"
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 1.2,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              />

              {/* Door */}
              {/* <motion.path
                d="M10 14h4v8h-4z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              /> */}

              {/* Left window */}
              {/* <motion.path
                d="M4 10h3v3H4z"
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              /> */}

              {/* Right window */}
              {/* <motion.path
                d="M17 10h3v3h-3z"
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 2.7,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              /> */}

              {/* Chimney */}
              {/* <motion.path
                d="M16 6h2v4h-2"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 3,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              /> */}

              {/* Door handle */}
              {/* <motion.circle
                cx="13"
                cy="18"
                r="0.5"
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 3.2,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              /> */}
            </svg>

            {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              KATACHI
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mt-4" /> */}
          </motion.div>

          {/* Subtitle */}
          {/* <motion.p
            className="loading-subtitle text-xl md:text-2xl text-white/70 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            Crafting timeless furniture for modern living
          </motion.p> */}

          {/* Progress bar */}
          {/* <motion.div
            className="progress-container w-80 md:w-96 mx-auto mb-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-white/40 to-white/80 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 30, ease: "easeOut", delay: 2 }}
              />
            </div>
          </motion.div> */}

          {/* Counter */}
          <motion.div
            className="percentage-text text-xl  font-bold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          >
            <span ref={counterRef}>0</span>
            <span className="text-2xl md:text-4xl ml-2">%</span>
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="text-sm md:text-base text-white/50 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Loading your experience...
          </motion.p>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-white/10"
          animate={{
            borderColor: [
              "rgba(255,255,255,0.1)",
              "rgba(255,255,255,0.3)",
              "rgba(255,255,255,0.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
