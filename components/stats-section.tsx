"use client"

import { motion } from "framer-motion"
import { Users, Package, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
    description: "Trusted partners worldwide",
  },
  {
    icon: Package,
    value: "5K+",
    label: "Products Listed",
    description: "Successful transactions",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Customer satisfaction",
  },
]

export function StatsSection() {
  return (
    <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }} className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-8 mt-16 md:mt-24 max-w-3xl mx-auto">
      {stats.map((stat) => {
        const IconComponent = stat.icon
        return (
          <div key={stat.label} className="text-center">
            <div className="hidden justify-center mb-3">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="hidden md:block text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            <div className="text-xs text-muted-foreground/70">{stat.description}</div>
          </div>
        )
      })}
    </motion.div>
  )
}