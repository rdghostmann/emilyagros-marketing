"use client"
import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Shield, Clock } from "lucide-react"


import { useEffect, useState } from "react"
import Image from "next/image"
import { Smartphone, Download, Star } from "lucide-react"
import DownloadApp from "/public/Store-Download.png"
import DownloadApp2 from "/public/Store-Download.png"
import ScreenUI1 from "../public/UI1.png"
import Link from "next/link"


const features = [
  {
    icon: MessageCircle,
    imageT: "/chat.png",
    title: "Real-time Chat",
    description: "Instant messaging with suppliers for quick negotiations",
  },
  {
    icon: Zap,
    imageT: "/zap.png",
    title: "Intutive Design",
    description: "Clean, modern interface designed for both beginners and pros",
  },
  {
    icon: Shield,
    imageT: "/shield.png",
    title: "Secure Platform",
    description: "All conversations are encrypted and protected",
  },
  {
    icon: Clock,
    imageT: "/support.png",
    title: "24/7 Support",
    description: "Round-the-clock customer support for your queries",
  },
]



export function MessagingFeature() {
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
      imageT: "/UI2.png",
      image: ScreenUI1,
      title: "iOS Version",
      description: "Monitor your portfolio with live market data",
    },
    {
      imageT: "/UI3.png",
      image: ScreenUI1,
      title: "Web Version",
      description: "Access worldwide crypto markets 24/7",
    },
    {
      imageT: "/CategoriesUI.png",
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
                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Image src={feature.imageT} alt="Intuitive Design" width={40} height={40} className="mb-3 sm:mb-4 md:size-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-primary-foreground/80 text-pretty">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Responsive Buttons: Stacks on mobile, inline on small and up */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            <div className="border border-black  relative w-80 h-[600px]">
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
                  <div className="relative w-full h-full bg-transparent rounded-[3rem] ">
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-transparent">
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
