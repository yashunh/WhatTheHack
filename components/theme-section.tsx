"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MarqueeDemo } from "./ui/marquee-demo"
import { GlareCard } from "@/components/ui/glare-card" // Assuming the glare effect is defined here

export function ThemeSection() {
  const themes = [
    { name: "Open Innovation", description: "Creating innovative solutions to global challenges through collaboration and technology." },
    { name: "HealthTech", description: "Innovative technologies improving healthcare, accessibility, and patient outcomes." },
    { name: "EduTech", description: "Revolutionizing education with cutting-edge technology for better learning experiences." },
    { name: "FinTech", description: "Leveraging technology to enhance financial services, accessibility, and security." },
    { name: "AgriTech", description: "Technologies revolutionizing agriculture for sustainable and efficient farming practices." },
    { name: "Smart Cities", description: "Creating intelligent urban environments through IoT and sustainable solutions." },
    { name: "GreenTech", description: "Developing technologies that promote environmental sustainability and energy efficiency." },
    { name: "Social Impact", description: "Technologies and solutions that address social issues and improve lives." },
  ]

  return (
    <>
      <section id="theme" className="relative flex items-center justify-center min-h-screen w-full bg-background px-6">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
  <div className="max-w-[90%] mx-auto z-10">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold mb-8 text-center"
    >
      Themes
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl mx-auto mb-12"
    >
      {/* <p className="text-lg text-muted-foreground text-center">
        Explore the diverse themes of the Open Challenge Hackathon. Each theme presents unique opportunities to innovate
        and create impactful solutions.
      </p> */}
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-items-center max-w-[97%] mx-auto">
      {themes.map((theme, index) => (
        <motion.div
          key={theme.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="w-full"
        >
          <GlareCard className="h-full hover:from-gray-900/60 hover:to-purple-900/40 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold mb-2">{theme.name}</h3>
              <p className="text-sm text-muted-foreground">{theme.description}</p>
            </CardContent>
          </GlareCard>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section> <MarqueeDemo /></section>
      {/* Marquee Component */}
      
    </>
  )
}
