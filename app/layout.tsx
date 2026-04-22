import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

// Display font — Cormorant Garamond for all major headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Dextera Dei .",
  description: "Crafting Timeless Spaces, Shaping the Future.",
  generator: "virtuoso",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    siteName: "Dextera Dei",
    title: "Crafting Timeless Spaces, Shaping the Future | Dextera Dei",
    description: "Crafting Timeless Spaces, Shaping the Future.",
    type: "website",
    images: [
      {
        url: "/Dex Dark.png",
        alt: "Dextera Dei - Architectural Artistry and Craftsmanship",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crafting Timeless Spaces, Shaping the Future | Dextera Dei",
    description: "Crafting Timeless Spaces, Shaping the Future.",
    images: [
      {
        url: "/Dex Dark.png",
        alt: "Dextera Dei - Architectural Artistry and Craftsmanship",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
