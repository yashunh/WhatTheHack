"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Sponsor 2", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Sponsor 3", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Sponsor 4", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Sponsor 5", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Sponsor 6", logo: "/placeholder.svg?height=80&width=200" },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="relative">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
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

