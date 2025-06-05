import PremiumHero from "@/components/premium-hero"
import WhatDefinesUs from "@/components/what-defines-us"
import OurServices from "@/components/our-services"
import OurTechnologies from "@/components/our-technologies"
import DirectorAndWhyChoose from "@/components/director-and-why-choose"
import CompactFooter from "@/components/compact-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Remove the navbar from here since it's now in the layout */}
      <PremiumHero />
      <WhatDefinesUs />
      <OurServices />
      <OurTechnologies />
      <DirectorAndWhyChoose />
      <CompactFooter />
    </div>
  )
}
