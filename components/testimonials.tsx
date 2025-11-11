"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      role: "Farmer, Lagos State",
      content:
        "Emilyagros has transformed my farming business. I can now reach buyers across Nigeria without leaving my farm. The product boosting feature increased my sales by 300%!",
      initials: "AO",
    },
    {
      name: "Chioma Nwankwo",
      role: "Restaurant Owner, Abuja",
      content:
        "Finding fresh produce for my restaurant has never been easier. The quality is excellent and delivery is always on time. Highly recommend Emilyagros to any business owner.",
      initials: "CN",
    },
    {
      name: "Ibrahim Musa",
      role: "Wholesale Trader, Kano",
      content:
        "The wholesale support and logistics services are outstanding. I've been able to scale my business significantly since joining Emilyagros. Best agricultural platform in Nigeria!",
      initials: "IM",
    },
    {
      name: "Blessing Okoro",
      role: "Organic Farmer, Enugu",
      content:
        "As an organic farmer, I needed a platform that understood quality. Emilyagros connects me with buyers who appreciate premium produce. My income has doubled in 6 months!",
      initials: "BO",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            What Our <span className="text-primary">Community Says</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join thousands of satisfied farmers and buyers who trust Emilyagros for their agricultural trading needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />

              <div
                key={currentIndex}
                // initial={{ opacity: 0, x: 20 }}
                // animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: -20 }}
                // transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 bg-primary text-primary-foreground">
                    <AvatarFallback>{testimonials[currentIndex].initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
