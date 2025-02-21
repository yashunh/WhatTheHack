"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  const teamMembers = [
    { name: "Ashish", role: "Secretary", image: "/images/Ashish.jpg" },
    { name: "Rishi", role: "Jt. Secretary", image: "/images/Rishi.jpg" },
    { name: "Krish", role: "Jt. Secretary", image: "/images/Krish.jpg" },
    { name: "Harshita", role: "Jt. Secretary", image: "/images/Harshita.jpg" },
    { name: "Ashini", role: "Design Lead", image: "/images/Ashini.jpeg" },
    { name: "Priyanshu", role: "Technical Lead", image: "/images/Priyanshu.jpg" },
    { name: "Utkarsh", role: "Event Management Lead", image: "/images/Utkarsh.jpg" },
    { name: "Sarthak", role: "Marketing Lead", image: "/images/Sarthak.jpg" },
    { name: "Adith", role: "Content Lead", image: "/images/Adith.jpg" },
    { name: "Atish", role: "Media Lead", image: "/images/Atish.jpg" },
    { name: "Harshit", role: "Finance Lead", image: "/images/Harshit.jpg" },
  ]

  return (
    <section id="our-team" className="relative flex items-center justify-center min-h-screen bg-background pt-20">
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
  className="rounded-full mb-4 object-cover aspect-square"
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

