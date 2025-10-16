import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MessagingFeature } from "@/components/messaging-feature"
import { MobileShowcase } from "@/components/mobile-showcase"
import { CategoriesSection } from "@/components/categories-section"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      {/* <Hero /> */}
      <CategoriesSection />
      <About />
      <Services />
      <HowItWorks />
      <MessagingFeature />
      {/* <MobileShowcase /> */}
      {/* <DownloadApp /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
