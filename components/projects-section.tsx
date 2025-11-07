"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Home, 
  Bed, 
  Car, 
  Droplets, 
  Sun, 
  Shield, 
  Users, 
  TreePine, 
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Building2
} from "lucide-react"
import { EdenProjectHero } from "./eden-project-hero"
import { HomeTypesSection } from "./home-types-section"
import { CommunityAmenities } from "./community-amenities"
import { ClientProjectsSection } from "./client-projects-section"

export function ProjectsSection() {
  return (
    <section className="min-h-screen bg-white">
      {/* Eden Project Hero Section */}
      <EdenProjectHero />
      
      {/* Home Types Section */}
      <HomeTypesSection />
      
      {/* Community Amenities Section */}
      <CommunityAmenities />
      
      {/* Client Projects Section */}
      <ClientProjectsSection />
    </section>
  )
}
