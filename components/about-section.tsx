"use client"

import { motion } from "framer-motion"
// import { PinContainer, PinPerspective } from "./ui/3d-pin"

export function AboutSection() {
  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Open Challenge Hackathon
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side as Card with new theme */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                Welcome to the Open Challenge Hackathon, an exciting event organized by the Sci-Fi Innovation Club! This hackathon is designed to bring together passionate individuals, tech enthusiasts, and innovators to tackle real-world problems through creative and technical solutions.
                Whether you are an experienced developer, a budding entrepreneur, or someone looking to make an impact, the Open Challenge Hackathon provides a platform for you to showcase your skills, collaborate with like-minded people, and contribute to solutions that can drive positive change.
                Participants will have the opportunity to form teams, choose from a variety of challenges, and work under time constraints to create innovative products, prototypes, or solutions. The hackathon will not only encourage hands-on development but will also provide an environment that fosters learning, networking, and growth.
              </p>
            </div>
          </motion.div>

          {/* Right side with 3D Pin Effect */}
          {/* <PinContainer className="relative flex flex-col items-center">
    <PinPerspective className="absolute inset-0 bg-transparent">
    <div className="bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
    </div>
  </PinPerspective>
</PinContainer> */}


        </div>
      </div>
    </section>
  )
}
