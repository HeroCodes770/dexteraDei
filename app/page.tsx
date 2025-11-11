"use client"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { PillarsSection } from "@/components/pillars-section"
import { FeaturedProjectSection } from "@/components/featured-project-section"
import { CollectionStrip } from "@/components/collection-strip"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {/* {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />} */}
      
      <main className={`min-h-screen transition-opacity duration-1000 `}>
        <Header />
        <HeroSection />
        <PillarsSection />
        <FeaturedProjectSection />
        <TrustSection />
        <CollectionStrip />
        <AboutSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  )
}
