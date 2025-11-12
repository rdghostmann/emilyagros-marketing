"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"


export function HeroSection() {
  return (
    <section id="home" className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/agricultural-farm-field-landscape.jpg')] bg-cover bg-center opacity-50
 " />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            className="text-[10px] inline-flex items-center gap-2 bg-primary-foreground/90 text-primary px-4 py-2 rounded-full mb-6 md:mb-8" >
            <Sparkles className="w-2 h-2" />
            <span className="font-medium">Nigeria's Fastest-Growing Agro Marketplace</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}

              className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Connect, Trade, and Grow Your  <span className="text-accent">Agricultural Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
              Source fresh agricultural products/services directly from trusted suppliers. <br className="block md:hidden" /> <span className="hidden lg:block">Instant messaging, verified suppliers,
              and guaranteed delivery.</span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
