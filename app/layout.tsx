import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Inter font for website texts (Product Sans alternative)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Dextera Dei .",
  description: "Crafting Timeless Spaces, Shaping the Future.",
  generator: "virtuoso",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
