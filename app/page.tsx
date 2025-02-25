"use client"

import { HeroSection } from "@/components/hero-section"
import { ClaimBadgeSection } from "@/components/claim-badge-section"
import { SponsorsSection } from "@/components/sponsors"
import { CollaborationsSection } from "@/components/collaborations-section"
import { PrizePoolSection } from "@/components/prize-pool-section"
import { AboutSection } from "@/components/about-section"
import { ThemeSection } from "@/components/theme-section"
import { TeamSection } from "@/components/team-section"
import { FAQsSection } from "@/components/faqs-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <HeroSection />
      <ClaimBadgeSection />
      {/* <DigitalAvatarSection /> */}
      <AboutSection />
      <ThemeSection />
      <SponsorsSection />
      <CollaborationsSection />
      <PrizePoolSection />

      <TeamSection />
      <FAQsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

