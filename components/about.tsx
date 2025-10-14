"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, TrendingUp } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize agricultural trade in Nigeria by connecting farmers directly with buyers through innovative technology.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a trusted community where farmers and buyers can trade with confidence and transparency.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Empowering agricultural businesses to scale through product boosting and market insights.",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Emilyagros</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Emilyagros is Nigeria's leading agricultural marketplace, dedicated to making farm produce trading simple,
            accessible, and profitable. We connect urban buyers with farmers across Nigeria, creating opportunities for
            growth and sustainable agricultural practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
