"use client"

import { EdenProjectHero } from "./eden-project-hero"
import { GuauCourtSection } from "./guau-court-section"
import { SymphonySection } from "./symphony-section"

export function ProjectsSection() {
  return (
    <div className="min-h-screen">
      {/* Eden Village brand hero — parent brand intro */}
      <EdenProjectHero />

      {/* Phase 1 — Guau Court */}
      <GuauCourtSection />

      {/* Phase 2 — Symphony */}
      <SymphonySection />
    </div>
  )
}
