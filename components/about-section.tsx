"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />

      <div className="w-full px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          About Open Challenge Hackathon
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Added gap */}
          {/* Left Section with Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] flex items-center justify-center text-white rounded-xl p-6 bg-left bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/images/about-bg.png')" }} // Left-side background
          >
            <div className="text-center px-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-white">
                The Open Challenge Hackathon, organized by the Sci-Fi Innovation Club, is a platform for passionate individuals, tech enthusiasts, and innovators to solve real-world problems creatively.
              </p>
            </div>
          </motion.div>

          {/* Right Section with Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[400px] flex items-center justify-center text-white rounded-xl p-6 bg-right bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/images/about-bg.png')" }} // Right-side background
          >
            <div className="text-center px-8">
              <h3 className="text-xl font-semibold mb-4">What to Expect?</h3>
              <p className="text-white">
                Participants will form teams, select challenges, and develop innovative solutions under time constraints. The event fosters learning, networking, and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
