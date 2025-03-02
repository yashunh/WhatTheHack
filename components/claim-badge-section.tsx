"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Users, Key } from "lucide-react"
// import html2canvas from "html2canvas"
// import Image from "next/image"

export function ClaimBadgeSection() {
  const [participantInfo, setParticipantInfo] = useState({
    participantName: "",
    teamName: "",
    teamCode: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantInfo({ ...participantInfo, [e.target.name]: e.target.value })
  }

  return (
    <section id="claim-badge" className="relative flex items-center justify-center min-h-screen w-full bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 py-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-12 text-center "
        >
          Claim Your Badge
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] text-white shadow-lg border border-black">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Participant Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="participantName" className="text-lg font-medium">
                      Participant Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                      <Input
                        id="participantName"
                        name="participantName"
                        value={participantInfo.participantName}
                        onChange={handleChange}
                        className="pl-10 !text-lg !h-[56px] !py-3 !leading-relaxed bg-white text-black border border-black"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="teamName" className="text-lg font-medium">
                      Team Name
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                      <Input
                        id="teamName"
                        name="teamName"
                        value={participantInfo.teamName}
                        onChange={handleChange}
                        className="pl-10 !text-lg !h-[56px] !py-3 !leading-relaxed bg-white text-black border border-black"
                        placeholder="Enter team name"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="teamCode" className="text-lg font-medium">
                      Team Code
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                      <Input
                        id="teamCode"
                        name="teamCode"
                        value={participantInfo.teamCode}
                        onChange={handleChange}
                        className="pl-10 !text-lg !h-[56px] !py-3 !leading-relaxed bg-white text-black border border-black"
                        placeholder="Enter team code"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    className="w-full text-lg bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white border border-black"
                  >
                    Claim Your Badge
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <Card className="relative bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg border-4 border-yellow-700 overflow-hidden">
              <div className="flex flex-col text-xl items-center justify-center h-80">
                <span className="text-6xl font-bold">❓</span>
                <p>Your badge appears here</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
