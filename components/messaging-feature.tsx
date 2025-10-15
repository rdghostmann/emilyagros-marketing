"use client"
import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Shield, Clock } from "lucide-react"


import { useEffect, useState } from "react"
import Image from "next/image"
import { Smartphone, Download, Star } from "lucide-react"
import DownloadApp from "/public/Store-Download.png"
import DownloadApp2 from "/public/Store-Download.png"


const features = [
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description: "Instant messaging with suppliers for quick negotiations",
  },
  {
    icon: Zap,
    title: "Intutive Design",
    description: "Clean, modern interface designed for both beginners and pros",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "All conversations are encrypted and protected",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for your queries",
  },
]



export function MessagingFeature() {
  const [mounted, setMounted] = useState(false)
  const [currentPhone, setCurrentPhone] = useState(0)

  const phoneScreens = [
    {
      image: "/mobileimage.jpg",
      title: "Andriod-Version",
      description: "Execute trades with professional-grade tools",
    },
    {
      image: "/mobileimage.jpg",
      title: "iOS-Version",
      description: "Monitor your portfolio with live market data",
    },
    {
      image: "/mobileimage.jpg",
      title: "Web-Version",
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
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">

      {/* Parallax background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-neon"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-neon"
        style={{ animationDelay: "1s" }}
      />



      <div className=" container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Ready to grow your business with verified buyers & sellers?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
              Experience the full power of EmilyAgros in your pocket. Negotiate prices, discuss terms,
              and close deals faster than ever before.
            </p>
            <p className="hidden text-lg text-primary-foreground/90 mb-8 text-pretty">
              Connect instantly with suppliers through our built-in messaging system. Negotiate prices, discuss terms,
              and close deals faster than ever before.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-primary-foreground/80 text-pretty">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <Button size="lg" className="hidden bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
            <div className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit overflow-hidden rounded-md">
              <Image src={DownloadApp} alt="Download-Button" width={192} height={50} />
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
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                      <Image
                        src={screen.image || "/placeholder.svg"}
                        alt={screen.title}
                        fill
                        className="object-cover"
                      />
                    </div>
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
