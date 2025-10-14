"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Nigeria's Fastest-Growing Agro Marketplace</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            Connect, Trade, and Grow Your <span className="text-primary">Agricultural Business</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto text-balance"
          >
            Join thousands of farmers and buyers trading farm produce seamlessly online. Boost your products for
            increased visibility and sales on Nigeria's most trusted agricultural platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="text-base font-semibold px-8 group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 bg-transparent">
              <Download className="mr-2 w-5 h-5" />
              Download App
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 md:mt-24 max-w-3xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm md:text-base text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5K+</div>
              <div className="text-sm md:text-base text-muted-foreground">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
