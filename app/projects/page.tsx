"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

