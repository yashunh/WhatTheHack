"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Key } from "lucide-react"

export function DigitalAvatarSection() {
  const [teamInfo, setTeamInfo] = useState({
    teamName: "",
    teamId: "",
    email: "",
  })

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamInfo({ ...teamInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Team info submitted:", teamInfo)
    alert("Authentication email sent to " + teamInfo.email)
  }

  if (!hydrated) return null

  return (
    <section
      id="digital-avatar"
      className="relative flex items-center justify-center min-h-screen w-full bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)]" />
      <div className="container mx-auto px-6 py-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Create Your Digital Avatar
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 max-w-md h-full"
          >
            <Card className="bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Team Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="teamName" className="text-sm font-medium text-muted-foreground">
                      Team Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="teamName"
                        name="teamName"
                        value={teamInfo.teamName}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="Enter team name"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="teamId" className="text-sm font-medium text-muted-foreground">
                      Team ID
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="teamId"
                        name="teamId"
                        value={teamInfo.teamId}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="Enter team ID"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={teamInfo.email}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="Enter email for authentication"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" className="w-full">
                      Create Your Digital Avatar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 max-w-md h-full"
          >
            <Card className="bg-gradient-to-br from-[#fc6b32]/15 to-purple-900/20 backdrop-blur-xl border border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Digital ID Card</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="w-80 h-80 bg-gray-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  {teamInfo.teamName && teamInfo.teamName[0] ? teamInfo.teamName[0].toUpperCase() : "?"}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{teamInfo.teamName || "Team Name"}</h3>
                  <p className="text-muted-foreground">ID: {teamInfo.teamId || "Team ID"}</p>
                  <p className="text-muted-foreground">{teamInfo.email || "team@example.com"}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
