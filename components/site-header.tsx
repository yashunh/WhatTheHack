"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function SiteHeader() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ea623e]/10 via-[#934d76]/10 to-[#632182]/10 backdrop-blur-sm border-b border-border/40"
    >
      <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center space-x-3 ml-6"> {/* Increased space-x and added margin-left */}
  <Image
    src="/images/wth-logo.svg"
    alt="Wth Logo"
    width={68}  // Increased size
    height={68} // Increased size
    className="rounded-lg"
  />
</Link>

        <nav className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-base text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-base text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("theme")}
            className="text-base text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
          >
            Theme
          </button>
          <button
            onClick={() => scrollToSection("our-team")}
            className="text-base text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-base text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection("contact-us")}
            className="text-base text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
          >
            Contact Us
          </button>
          {/* Timeline Button */}
          <Link
  href="/timeline"
  className="inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-9 px-5"
>
  Timeline
</Link>

        </nav>
      </div>
    </motion.header>
  )
}
