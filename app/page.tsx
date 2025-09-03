"use client"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ABCDSection } from "@/components/abcd-section"
import { FeaturedProducts } from "@/components/featured-products"
import { CollectionStrip } from "@/components/collection-strip"
import { MaterialsSection } from "@/components/materials-section"
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
        <ABCDSection />
        <FeaturedProducts />
        <CollectionStrip />
        <MaterialsSection />
        <AboutSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  )
}
