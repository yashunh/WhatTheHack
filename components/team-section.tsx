"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  const teamMembers = [
    { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
    { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Alice Johnson", role: "Lead Designer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Bob Williams", role: "AI Specialist", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <section id="our-team" className="relative flex items-center justify-center min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Our Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=""
        >
          <p className="text-lg text-muted-foreground text-center">
            The Reflect team is a diverse group of thinkers, creators, and problem-solvers. We&apos;re united by our passion
            for building tools that enhance human cognition and creativity.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

