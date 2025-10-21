"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Smartphone, Download, Star } from "lucide-react"
import ScreenUI1 from "../public/UI1.png"
import Link from "next/link"

export function MobileShowcase() {
  const [mounted, setMounted] = useState(false)
  const [currentPhone, setCurrentPhone] = useState(0)

  const phoneScreens = [
    {
      imageT: "/UI1.png",
      image: ScreenUI1,
      title: "Andriod Version",
      description: "Execute trades with professional-grade tools",
    },
    {
      imageT: "/UI1.png",
      image: ScreenUI1,
      title: "iOS Version",
      description: "Monitor your portfolio with live market data",
    },
    {
      imageT: "/UI1.png",
      image: ScreenUI1,
      title: "Web Version",
      description: "Access worldwide crypto markets 24/7",
    },
  ]

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentPhone((prev) => (prev + 1) % phoneScreens.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-32 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-neon"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-neon"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-green-700 text-balance glow-text">Trade on the Go</h2>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">EmilyAgros Mobile App</h3>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Experience the full power of EmilyAgros in your pocket.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="crypto-card p-6 rounded-xl">
                {/* <Smartphone className="h-12 w-12 text-primary mb-4" /> */}
                <Image src="/user-interface.png" alt="Intuitive Design" width={40} height={40} className="mb-3 sm:mb-4 md:size-16" />
                <h4 className="text-xl font-bold mb-2">Intuitive Design</h4>
                <p className="text-muted-foreground">Clean, modern interface designed for both beginners and pros</p>
              </div>
              <div className="crypto-card p-6 rounded-xl">
                {/* <Star className="h-12 w-12 text-accent mb-4" /> */}
                <Image src="/good-rating.png" alt="Good Rating" width={40} height={40} className="mb-3 sm:mb-4 md:size-16" />
                <h4 className="text-xl font-bold mb-2">5-Star Rated</h4>
                <p className="text-muted-foreground">Trusted by millions of users worldwide</p>
              </div>
            </div>

            {/* Responsive Buttons: Stacks on mobile, inline on small and up */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-xl px-6 sm:px-8 py-3 sm:py-6 animate-glow w-full sm:w-auto"> */}
              <Download className="hidden mr-2 h-5 w-5" />
              {/* Download Now */}
              <Link href="#" className="block">
                <Image
                  src="/playstore-download.png"
                  alt="Download on App Store and Google Play"
                  width={200}
                  height={60}
                  className="rounded-md"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/appstore-download.png"
                  alt="Download on App Store "
                  width={200}
                  height={60}
                  className="rounded-md"
                />
              </Link>
              {/* </Button> */}
              <Button size="lg" variant="outline" className="hidden text-base sm:text-xl px-6 sm:px-8 py-3 sm:py-4 neon-border bg-transparent w-full sm:w-auto">
                View Features
              </Button>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-[600px]">
              {phoneScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${index === currentPhone
                    ? "opacity-100 scale-100 rotate-0"
                    : index === (currentPhone + 1) % phoneScreens.length
                      ? "opacity-60 scale-95 rotate-3 translate-x-8"
                      : "opacity-30 scale-90 -rotate-3 -translate-x-8"
                    }`}
                  style={{ zIndex: phoneScreens.length - Math.abs(index - currentPhone) }}
                >
                  <div className="w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-none">
                    <Image
                      // src="/UI1.png"
                      src={screen.imageT || "/placeholder.svg"}
                      alt={screen.title}
                      fill
                      className="object-cover"
                    />
                    <Image
                      src="/UI1.png"
                      // src={screen.imageT || "/placeholder.svg"}
                      alt={screen.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm" />
            <div
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-accent/20 rounded-full animate-float blur-sm"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
