"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  { name: "Sponsor 1", logo: "/images/devfolio-logo.png" },
  { name: "Sponsor 2", logo: "/images/ethindia-logo.png" },
  { name: "Sponsor 3", logo: "/images/polygon-logo.png" },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center bg-clip-text bg-gradient-to-r from-[#ea623e] via-[#934d76] to-[#632182] mb-12">Our Sponsors</h2>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex space-x-8"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ display: "flex", width: "max-content" }}
          >
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
