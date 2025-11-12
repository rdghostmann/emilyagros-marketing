"use client"
import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Shield, Clock } from "lucide-react"


import { useEffect, useState } from "react"
import Image from "next/image"
import { Smartphone, Download, Star } from "lucide-react"
import DownloadApp from "/public/Store-Download.png"
import DownloadApp2 from "/public/Store-Download.png"
import ScreenUI1 from "../public/ui1.png"
import ScreenUI2 from "../public/ui2.png"
import ScreenUI3 from "../public/ui3.png"
import ScreenUI4 from "../public/CategoriesUI.png"
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
    imageT: "/ux.png",
    title: "Intutive Design",
    description: "Clean, modern interface designed for both beginners and pros",
  },
  {
    icon: Shield,
    imageT: "/security.png",
    title: "Secure Platform",
    description: "All conversations are encrypted and protected",
  },
  {
    icon: Clock,
    imageT: "/24-hours.png",
    title: "24/7 Support",
    description: "Round-the-clock customer support for your queries",
  },
]



export function MessagingFeature() {
  const [mounted, setMounted] = useState(false)
  const [currentPhone, setCurrentPhone] = useState(0)


  const phoneScreens = [
    {
      imageT: "/ui1.png",
      image: ScreenUI1,
      title: "Andriod Version",
      description: "Execute trades with professional-grade tools",
    },
    {
      imageT: "/ui2.png",
      image: ScreenUI2,
      title: "iOS Version",
      description: "Monitor your portfolio with live market data",
    },
    {
      imageT: "/Ui3.png",
      image: ScreenUI3,
      title: "Web Version",
      description: "Access worldwide crypto markets 24/7",
    },
    {
      imageT: "/CategoriesUI.png",
      image: ScreenUI4,
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
                  <div key={feature.title} className="flex gap-3 group cursor-pointer">
                    <div className="h-10 md:h-14 w-10 md:w-14 rounded-lg bg-transparent flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
                      <Image src={feature.imageT} alt={feature.title} width={40} height={40} className="border border-white w-fit h-fit mb-3 sm:mb-4" />
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
            <div className="relative w-60 h-[500px] sm:w-80 md:h-[600px]">
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
                        src={screen.image}
                        alt={screen.title}
                        width={3640}
                        height={6712}
                        // width={280}
                        // height={516}
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
