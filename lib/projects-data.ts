// Project data structure with actual images and specifications

export interface Project {
  id: string
  name: string
  description: string
  category: string
  image: string
  status: "Completed" | "In Progress" | "Upcoming" | "On-site" | "In-Design"
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
  isVideo?: boolean
}

// Client Projects (separate from Eden Project)
export const clientProjectsData: Project[] = [
  {
    id: "casa-crispina",
    name: "Casa Crispina",
    description: "Luxury residential design that embodies elegance and contemporary living. A masterpiece of modern architecture combining sophisticated design with functional living spaces.",
    category: "Residential",
    image: "/projects/casa-crispina/1.png",
    status: "Completed",
    type: "Design & Build",
    images: [
      "/projects/casa-crispina/1.png",
      "/projects/casa-crispina/2.png",
      "/projects/casa-crispina/3.png",
      "/projects/casa-crispina/4.png",
      "/projects/casa-crispina/5.png",
      "/projects/casa-crispina/6.png",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "~1,300 sqm",
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
      area: "~163 sqm",
      type: "Design & Build"
    }
  },
  {
    id: "grandiose",
    name: "Project Grandiose",
    description: "A landmark architectural project showcasing innovative design and premium construction. This residential development sets new standards for excellence with its sophisticated design and attention to detail.",
    category: "Residential",
    image: "/projects/grandiose/001.jpg",
    status: "On-site",
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
      area: "~1,300 sqm",
      type: "Design & Build"
    }
  },
  {
    id: "proton",
    name: "Project Proton",
    description: "A cutting-edge development project combining technology and sustainable design. Modern architecture meets innovation in this forward-thinking development.",
    category: "Residential",
    image: "/projects/proton/img1.jpg",
    status: "In-Design",
    type: "Design",
    images: [
      "/projects/proton/img1.jpg",
      "/projects/proton/img2.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "~325 sqm",
      type: "Design"
    }
  },
  {
    id: "quadra",
    name: "Project Quadra",
    description: "An innovative architectural project showcasing modern design principles. A visionary development that balances aesthetics with functionality.",
    category: "Residential",
    image: "/projects/quadra/hero.jpg",
    status: "Upcoming",
    type: "Design & Build",
    images: [
      "/projects/quadra/hero.jpg",
    ],
    specifications: {
      location: "Accra, Ghana",
      area: "~4,047 sqm",
      type: "Design & Build"
    }
  },
  {
    id: "royal-seat",
    name: "Royal Seat",
    description: "A luxury residential project that embodies elegance and contemporary living. Where sophistication meets modern design in a stunning architectural masterpiece.",
    category: "Residential",
    image: "/projects/royal-seat/night_view.mp4",
    status: "Completed",
    type: "Design & Build",
    images: [
      "/projects/royal-seat/night_view.mp4",
      "/projects/royal-seat/Royal Seat.mp4",
    ],
    isVideo: true,
    specifications: {
      location: "Bibiani, Ghana",
      area: "~1,950 sqm",
      type: "Design & Build"
    }
  }
]

// Legacy export for backward compatibility
export const projectsData = clientProjectsData

