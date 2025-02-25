"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PrizePoolSection() {
  return (
    <section id="prize-pool" className="relative py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-12">Prize Pool</h2>
        <div className="flex justify-center gap-8">
          {["Grand Prize", "1st Runner-Up", "2nd Runner-Up"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="w-80 bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold text-center">XXXXXX</p>
                  <p className="text-center mt-4">
                    {index === 0 ? "For the winning team" : index === 1 ? "For the 1st runner-up" : "For the 2nd runner-up"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
