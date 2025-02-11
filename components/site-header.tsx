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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Reflect Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold">OCH</span>
        </Link>
        <nav className="mx-6 flex flex-1 items-center justify-center space-x-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-base font-medium text-muted-foreground hover:text-primary"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-base font-medium text-muted-foreground hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("theme")}
            className="text-base font-medium text-muted-foreground hover:text-primary"
          >
            Theme
          </button>
          <button
            onClick={() => scrollToSection("our-team")}
            className="text-base font-medium text-muted-foreground hover:text-primary"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-base font-medium text-muted-foreground hover:text-primary"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection("contact-us")}
            className="text-base font-medium text-muted-foreground hover:text-primary"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </motion.header>
  )
}
