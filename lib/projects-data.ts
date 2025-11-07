// Project data structure with actual images and specifications

export interface Project {
  id: string
  name: string
  description: string
  category: string
  image: string
  status: "Completed" | "In Progress" | "Upcoming"
  type: "Design & Build" | "Design"
  specifications?: {
    location?: string
    area?: string
    completionDate?: string
    client?: string
    [key: string]: any
  }
  images?: string[]
  details?: string
}

// Client Projects (separate from Eden Project)
export const clientProjectsData: Project[] = [
  {
    id: "casa-crispina",
    name: "Casa Crispina",
    description: "Luxury residential design that embodies elegance and contemporary living. A masterpiece of modern architecture combining sophisticated design with functional living spaces.",
    category: "Residential",
    image: "/projects/Casa/casa1.jpg",
    status: "Completed",
    type: "Design & Build",
    images: [
      "/projects/Casa/casa1.jpg",
      "/projects/Casa/casa3.jpg",
      "/projects/Casa/casa4.jpg",
      "/projects/Casa/case2.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "450 sqm",
      completionDate: "2023",
      type: "Design & Build"
    }
  },
  {
    id: "vertika",
    name: "Project Vertika",
    description: "Vertical development project pushing the boundaries of modern architecture. A stunning high-rise that redefines urban living with innovative design and premium amenities.",
    category: "Residential",
    image: "/projects/Vertika/vert1.jpg",
    status: "Completed",
    type: "Design & Build",
    images: [
      "/projects/Vertika/vert1.jpg",
      "/projects/Vertika/vert2.jpg",
      "/projects/Vertika/vert4.jpg",
      "/projects/Vertika/vert5.jpg",
      "/projects/Vertika/vert6.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "1,200 sqm",
      completionDate: "2024",
      type: "Design & Build"
    }
  },
  {
    id: "grandiose",
    name: "Project Grandiose",
    description: "A landmark architectural project showcasing innovative design and premium construction. This commercial development sets new standards for excellence with its sophisticated design and attention to detail.",
    category: "Commercial",
    image: "/projects/grandiose/001.jpg",
    status: "In Progress",
    type: "Design & Build",
    images: [
      "/projects/grandiose/001.jpg",
      "/projects/grandiose/002.jpg",
      "/projects/grandiose/003.jpg",
      "/projects/grandiose/004.jpg",
      "/projects/grandiose/005.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "2,500 sqm",
      completionDate: "2025",
      type: "Design & Build"
    }
  },
  {
    id: "proton",
    name: "Project Proton",
    description: "A cutting-edge development project combining technology and sustainable design. Modern architecture meets innovation in this forward-thinking development.",
    category: "Commercial",
    image: "/projects/proton/hero.jpg",
    status: "In Progress",
    type: "Design & Build",
    images: [
      "/projects/proton/hero.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "1,800 sqm",
      completionDate: "2025",
      type: "Design & Build"
    }
  },
  {
    id: "quadra",
    name: "Project Quadra",
    description: "An innovative architectural project showcasing modern design principles. A visionary development that balances aesthetics with functionality.",
    category: "Commercial",
    image: "/projects/quadra/hero.jpg",
    status: "Upcoming",
    type: "Design & Build",
    images: [
      "/projects/quadra/hero.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "TBD",
      completionDate: "2026",
      type: "Design & Build"
    }
  }
]

// Legacy export for backward compatibility
export const projectsData = clientProjectsData

