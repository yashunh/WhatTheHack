"use client"

import Image from "next/image"

const collaborators = [
  { name: "Cypher Lock Club", logo: "/images/cypher-lock-logo.png" },
  { name: "C Square Club", logo: "/images/csquare-logo.png" },
]

export function CollaborationsSection() {
  return (
    <section id="collaborations" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-16">Our Collaborators</h2>
        <div className="flex justify-center items-center gap-16">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={collaborator.logo}
                alt={collaborator.name}
                width={400}
                height={400}
                className="h-48 w-auto object-contain"
              />
              <p className="mt-4 text-xl font-semibold">{collaborator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
