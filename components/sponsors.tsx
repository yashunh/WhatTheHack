"use client"

import Image from "next/image"

const sponsors = [
  { name: "Devfolio", logo: "/images/devfolio-logo.png", alt: "DEVFOLIO LOGO" },
  { name: "ETHIndia", logo: "/images/ethindia-logo.png", alt: "ETHINDIA LOGO" },
  { name: "Polygon", logo: "/images/polygon-logo.png", alt: "POLYGON LOGO" },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-7xl font-bold bg-clip-text bg-gradient-to-r from-[#ea623e] via-[#934d76] to-[#632182] mb-12">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          {sponsors.map((sponsor, index) => (
            <Image
              key={index}
              src={sponsor.logo}
              alt={sponsor.alt} // Explicitly setting ALT tags
              width={200}
              height={80}
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
