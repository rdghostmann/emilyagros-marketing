import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/agricultural-farm-field-landscape.jpg')] bg-cover bg-center opacity-50
 " />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Connect, Trade, and Grow Your  <span className="text-accent">Agricultural Business</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
              Source fresh agricultural products directly from trusted suppliers. Instant messaging, verified suppliers,
              and guaranteed delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
