"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import { cn } from "@/lib/utils";
import { BackgroundLines } from "./ui/background-lines";
// import { SparklesPreview } from "./ui/sparkles-preview";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)] z-0" />
      <BackgroundLines className="absolute inset-0 z-0 opacity-40">
        {/* You can pass any content here if needed */}
        {/* For example, an empty fragment */}
        <></>
      </BackgroundLines>

      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex flex-col items-center text-center">
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 mb-6 leading-[1.15]">
              Open Challenge Hackathon
            </h1>
          </div>

          <p className="max-w-[650px] mx-auto text-muted-foreground text-lg sm:text-xl md:text-2xl mb-8 font-medium">
            Collaborate, Innovate, and Compete with the Best Minds!!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8",
                HoverBorderGradient
              )}
            >
              Explore Themes
            </Link>
            <Link
              href="#"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8",
                HoverBorderGradient
              )}
            >
              Join Community
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
