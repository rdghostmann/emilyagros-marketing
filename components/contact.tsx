"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Thank you for contacting us! We will get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@emilyagros.com", "emilyagros@gmail.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 816 881 7063", "+234 915 936 8743"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kwang 930103, Plateau, Nigeria", "Mon - Fri: 9AM - 6PM"],
    },
  ]
// +2349159368743 
  // https://maps.app.goo.gl/cT4oFcab3WaZswTE8?g_st=aw 
  // [Home] 0816 881 7063
  // [Home] info@emilyagros.com
  // [Work] emilyagros@gmail.com
  // [Website] emilyagros.com

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* <Card key={info.title}>
                <CardContent className="p-6"> */}
            {contactInfo.map((info) => (
              <div key={info.title}>
                <div className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* </CardContent>
          </Card> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstname" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstname" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastname" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastname" type="lastname" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                     <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium">
                      Inquiry Type
                    </label>
                    <Select required>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="business">Business Partnership</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  </div>

                 

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
