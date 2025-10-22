"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingCart, Store, Truck, Package, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: ShoppingCart,
      imageT: "/organic_1971004.png",
      title: "Buy Farm Produce",
      description: "Access fresh farm produce directly from verified farmers across Nigeria with competitive pricing.",
    },
    {
      icon: Store,
      imageT: "/sale_7910062.png",
      title: "Sell Your Goods",
      description: "List your agricultural products and reach thousands of potential buyers instantly.",
    },
    {
      icon: Truck,
      imageT: "/logistics_12577049.png",
      title: "Agro Logistics",
      description: "Reliable delivery services ensuring your produce reaches customers fresh and on time.",
    },
    {
      icon: Package,
      imageT: "/wholesale_16963079.png",
      title: "Wholesale Support",
      description: "Special pricing and support for bulk orders and wholesale agricultural trading.",
    },
    {
      icon: TrendingUp,
      imageT: "/boost_5579796.png",
      title: "Product Boosting",
      description: "Increase your product visibility and sales with our targeted promotion features.",
    },
    {
      icon: Shield,
      imageT: "/protection.png",
      title: "Secure Transactions",
      description: "Trade with confidence using our secure payment system and buyer protection.",
    },
    {
      icon: Shield,
      imageT: "/personal-guarantee_4318327.png",
      title: "Verified Seller",
      description: "Trade only with sellers who have been verified for authenticity and reliability.",
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to succeed in agricultural trading, all in one platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 p-2 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Image src={service.imageT} alt={service.title} width={24} height={24} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
