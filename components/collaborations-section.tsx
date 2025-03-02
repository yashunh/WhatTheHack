"use client"

import Image from "next/image"

const collaborators = [
  { name: "Cypher Lock Club", logo: "/images/cypher-lock-logo.png" },
  { name: "C Square Club", logo: "/images/csquare-logo.png" },
  { name: "CU Engineering Community", logo: "/images/cuec.png" },
]

export function CollaborationsSection() {
  return (
    <section 
      id="collaborations" 
      className="relative py-24 w-screen overflow-hidden bg-background"
    >
      {/* Full-screen width Radial Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />

      <div className="w-full max-w-screen-2xl mx-auto px-8">
        <h2 className="text-7xl font-bold text-center mb-16">Our Collaborators</h2>
        <div className="flex justify-center items-center gap-16 flex-wrap">
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
