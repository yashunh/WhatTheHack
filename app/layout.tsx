"use client"

import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import "@/app/globals.css"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground dark`}>
        <SiteHeader />
        {children}
        <motion.div
          className="fixed top-0 left-0 w-64 h-64 bg-[#fc6b32] rounded-full mix-blend-screen filter blur-[60px] opacity-50 pointer-events-none"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
        />
        <motion.div
          className="fixed top-0 left-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-[40px] opacity-30 pointer-events-none"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
        />
      </body>
    </html>
  )
}

