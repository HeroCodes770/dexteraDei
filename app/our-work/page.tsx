import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OurProjectsShowcase } from "@/components/our-projects-showcase"

export const metadata = {
  title: "Our Projects | Dextera Dei",
  description: "Explore our portfolio of architectural excellence — luxury residentials, innovative designs, and exceptional craftsmanship across Ghana.",
}

export default function OurWorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <OurProjectsShowcase />
      <Footer />
    </main>
  )
}
