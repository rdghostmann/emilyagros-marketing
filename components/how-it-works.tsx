"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, UserPlus, ShoppingBag, Rocket } from "lucide-react"
import Image from "next/image"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Download,
      imageT: "/download.png",
      number: "01",
      title: "Download App",
      description: "Get the Emilyagros app from Google Play or App Store and install it on your device.",
    },
    {
      icon: UserPlus,
      imageT: "/website.png",
      number: "02",
      title: "Register Account",
      description: "Create your account in minutes with basic information and start your trading journey.",
    },
    {
      icon: ShoppingBag,
      imageT: "/salary.png",
      number: "03",
      title: "Sell Produce",
      description: "Browse thousands of products or sell your own farm produce with photos and details.",
    },
    {
      icon: Rocket,
      imageT: "/boost.png",
      number: "04",
      title: "Boost Sales",
      description: "Use our product boosting feature to increase visibility and reach more potential buyers.",
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Get started with Emilyagros in four simple steps and join Nigeria's thriving agricultural marketplace.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    {/* <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg"> */}
                    <div className="w-16 h-16  rounded-xl flex items-center justify-center shadow-lg">
                      <Image src={step.imageT} alt={step.title} width={32} height={32} className="w-full h-full object-contain" />
                      {/* <step.icon className="w-8 h-8 text-primary-foreground" /> */}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-5xl font-bold text-primary/10 absolute -top-4 right-0">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
