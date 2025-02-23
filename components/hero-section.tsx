"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "./ui/background-lines";
import Image from "next/image";
import Countdown from "./ui/Countdown";
import { Iceland } from "next/font/google";

// Import Iceland font
const iceland = Iceland({ subsets: ["latin"], weight: "400" });

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)] z-0" />
      <BackgroundLines className="absolute inset-0 z-0 opacity-40">
        <></>
      </BackgroundLines>

      {/* Text Container with Background Image */}
      <div
  className="relative container mx-auto px-2 text-center z-10  
  bg-[url('/images/bg-texture.png')] bg-cover bg-top 
  pt-32 pb-20"
  style={{ top: "70px" }} // Adjust this value to push down
>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="pt-20">
            <p className={iceland.className}></p>
          </div>
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-tight text-white ${iceland.className}`}
          >
            What The Hack??
          </h1>

          <Image
            src="/images/24-hours.svg"
            alt="24 Hours Icon"
            width={400}
            height={400}
            className="mx-auto"
          />

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 w-full sm:w-auto">
            <Link
              href="#"
              className={cn(
                `inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8 ${iceland.className}`,
                HoverBorderGradient
              )}
            >
              Register Here
            </Link>
            <Link
              href="#"
              className={cn(
                `inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8 ${iceland.className}`,
                HoverBorderGradient
              )}
            >
              Join Community
            </Link>
          </div>

          {/* Countdown Timer - Fixed Separation Issue */}
          <div className="relative flex justify-center items-center -mt-12">
            {/* Background Image & Countdown Wrapper */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              {/* Background Image */}
              <Image
                src="/images/countdown-bg1.svg"
                alt="Countdown Background"
                fill
                className="object-contain"
              />
              {/* Countdown Positioned Absolutely Inside */}
              <div
                className={`absolute flex items-center justify-center ${iceland.className}`}
              >
                <Countdown />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
