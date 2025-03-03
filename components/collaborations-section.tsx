"use client"

import Image from "next/image"
import Link from "next/link"

const collaborators = [
  { name: "CypherLock Club", logo: "/images/cypher-lock-logo.svg", linkedin: "https://www.linkedin.com/company/cypherlock/" },
  { name: "C Square Club", logo: "/images/csquare-logo.png", linkedin: "https://www.linkedin.com/company/csquare-club/" },
  { name: "CU Engineering Community", logo: "/images/cuec.png", linkedin: "https://www.linkedin.com/in/engineering-community-cuec-698774320/" },
]

export function CollaborationsSection() {
  return (
    <section id="collaborations" className="relative py-24 w-screen overflow-hidden bg-background text-white">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />
      
      <div className="w-full max-w-screen-2xl mx-auto px-8 relative z-10">
        <h2 className="text-7xl font-bold text-center mb-16 text-white">Our Collaborators</h2>
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={collaborator.logo || "/placeholder.svg"}
                alt={collaborator.name}
                width={400}
                height={400}
                className="h-48 w-auto object-contain"
              />
              <p className="mt-4 text-xl font-semibold text-white">{collaborator.name}</p>
              
              {/* LinkedIn Logo */}
              <Link href={collaborator.linkedin} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin-logo.png" // Replace with the correct path for your LinkedIn logo
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="mt-2 hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
