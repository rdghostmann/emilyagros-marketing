"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Play, Smartphone } from "lucide-react"

export function DownloadApp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="download" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Download the <span className="text-primary">Emilyagros App</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Take your agricultural business mobile. Buy, sell, and manage your products on the go with our
                easy-to-use mobile application available on iOS and Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base font-semibold px-6">
                  <Apple className="mr-2 w-5 h-5" />
                  App Store
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold px-6 bg-transparent">
                  <Play className="mr-2 w-5 h-5" />
                  Google Play
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
              </div>
            </motion.div>

            {/* App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-sm">
                {/* Phone frame */}
                <div className="relative bg-card rounded-3xl shadow-2xl p-3 border-8 border-foreground/10">
                  <div className="aspect-[9/19] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-primary/40" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
