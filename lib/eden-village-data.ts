// Eden Village — parent brand with two phases

export interface EdenPhase {
  id: string
  name: string
  fullName: string
  phase: number
  location: string
  status: "launching" | "ongoing" | "coming-soon"
  launchLabel: string
  totalUnits: number
  unitsSold: number
  bedrooms: string
  description: string
  longDescription: string
  features: string[]
  images: string[]
  heroImage: string
  accentColor: string
}

export const edenVillagePhases: EdenPhase[] = [
  {
    id: "guau-court",
    name: "Guau Court",
    fullName: "Eden Village — Guau Court",
    phase: 1,
    location: "Prampram, Greater Accra",
    status: "launching",
    launchLabel: "Launching May 2026",
    totalUnits: 10,
    unitsSold: 7,
    bedrooms: "4 Bedroom",
    description: "An exclusive gated community of 10 luxury 4-bedroom homes, nestled in the serene coastal enclave of Prampram.",
    longDescription:
      "Guau Court is the first chapter of the Eden Village story — a meticulously crafted community of ten 4-bedroom homes in Prampram. With only 3 homes remaining, this is a rare opportunity to own a piece of thoughtfully designed luxury living, moments from the coast. Every home features smart home technology, solar power integration, and premium finishes throughout.",
    features: [
      "4 Bedrooms, all en-suite",
      "Spacious open-plan living & dining",
      "Fully fitted kitchen with cabinetry",
      "Solar energy system",
      "Smart home technology",
      "Parking for 3+ cars",
      "Private courtyard / outdoor space",
      "Gated community with 24/7 security",
      "Water storage system",
    ],
    images: [
      "/projects/guau-court/IMG_4574.JPEG",
      "/projects/guau-court/IMG_4573.JPEG",
      "/projects/guau-court/IMG_4571.JPEG",
      "/projects/guau-court/IMG_4566.JPEG",
      "/projects/guau-court/IMG_4569.PNG",
      "/projects/guau-court/img_interior1.jpeg",
      "/projects/guau-court/img_interior2.jpeg",
      "/projects/guau-court/img_interior3.jpeg",
    ],
    heroImage: "/projects/guau-court/IMG_4574.JPEG",
    accentColor: "#cee002",
  },
  {
    id: "symphony",
    name: "Symphony",
    fullName: "Eden Village — Symphony",
    phase: 2,
    location: "East Legon Hills, Accra",
    status: "coming-soon",
    launchLabel: "Accepting Reservations",
    totalUnits: 25,
    unitsSold: 0,
    bedrooms: "2 & 3 Bedroom",
    description: "A vibrant neighborhood of 25 modern homes in the prestigious East Legon Hills — where elevated living meets community.",
    longDescription:
      "Symphony is the second phase of Eden Village, set in the prestigious East Legon Hills. A thoughtfully designed neighborhood of 25 homes — a blend of spacious 2-bedroom and 3-bedroom layouts — Symphony carries forward the Eden Village ethos of smart, sustainable, community-focused living. Reservations are now open for those who want to secure their home early.",
    features: [
      "Choice of 2 or 3 Bedroom layouts",
      "Spacious living & dining areas",
      "Kitchen fitted with cabinetry",
      "Solar Energy System + Smart Home",
      "Parking for 2–3 cars",
      "Water storage",
      "Community green spaces",
      "Gated with 24/7 security",
    ],
    images: [
      "/projects/eden/3bedroom/Triton.png",
      "/projects/eden/2bedroom/B.jpg",
      "/projects/eden/2bedroom/C (1).jpg",
      "/projects/eden/2bedroom/D (1).jpg",
      "/projects/eden/3bedroom/entrance_without_name.jpg",
      "/projects/eden/3bedroom/entrance.jpeg",
      "/projects/eden/3bedroom/inside_view.png",
      "/projects/eden/3bedroom/night view.jpeg",
      "/projects/eden/2bedroom/E.jpg",
      "/projects/eden/2bedroom/F  (1).jpg",
      "/projects/eden/3bedroom/road.jpeg",
      "/projects/eden/3bedroom/better_internal_view.jpg",
    ],
    heroImage: "/projects/eden/3bedroom/night view.jpeg",
    accentColor: "#cee002",
  },
]

export const symphonyHomeTypes = [
  {
    id: "2br",
    name: "Covalent Homes",
    subtitle: "2 Bedroom",
    size: "~135 sqm",
    bedrooms: 2,
    bathrooms: 2.5,
    parking: 2,
    features: [
      "2 Bedrooms",
      "Spacious Living & Dining Area",
      "Kitchen fitted with cabinetry",
      "Solar Energy System + Smart Home Features",
      "Parking for 2 Cars",
      "Water Storage",
      "2.5 Bathrooms (2 Ensuite + 1 Shared)",
    ],
    images: [
      "/projects/eden/2bedroom/A.jpg",
      "/projects/eden/2bedroom/B.jpg",
      "/projects/eden/2bedroom/C (1).jpg",
      "/projects/eden/2bedroom/D (1).jpg",
      "/projects/eden/2bedroom/E.jpg",
      "/projects/eden/2bedroom/F  (1).jpg",
    ],
  },
  {
    id: "3br",
    name: "Tritone Homes",
    subtitle: "3 Bedroom",
    size: "~200 sqm",
    bedrooms: 3,
    bathrooms: 3.5,
    parking: 3,
    features: [
      "3 Bedrooms",
      "Spacious Living & Dining Area",
      "Kitchen fitted with cabinetry",
      "Solar Energy System + Smart Home Features",
      "Parking for 3 Cars",
      "Water Storage",
      "3.5 Bathrooms (3 Ensuite + 1 Shared)",
    ],
    images: [
      "/projects/eden/3bedroom/entrance_without_name.jpg",
      "/projects/eden/3bedroom/entrance.jpeg",
      "/projects/eden/3bedroom/inside_view.png",
      "/projects/eden/3bedroom/road.jpeg",
      "/projects/eden/3bedroom/better_internal_view.jpg",
      "/projects/eden/3bedroom/night view.jpeg",
    ],
  },
]
