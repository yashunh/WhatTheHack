"use client"

import Image from "next/image"

const sponsors = [
  { name: "Devfolio", logo: "/images/devfolio-logo.png", alt: "DEVFOLIO LOGO" },
  { name: "ETHIndia", logo: "/images/ethindia-logo.png", alt: "ETHINDIA LOGO" },
  { name: "Polygon", logo: "/images/polygon-logo.png", alt: "POLYGON LOGO" },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-16 bg-background overflow-hidden text-white">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-7xl text-white font-bold bg-clip-text bg-gradient-to-r from-[#ea623e] via-[#934d76] to-[#632182] mb-12">
          Our Sponsors
        </h2>

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-16 animate-scroll">
            {/* Duplicate sponsors to create seamless looping effect */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor.logo}
                alt={sponsor.alt} 
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
