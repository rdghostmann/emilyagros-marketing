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

          <div className="hidden flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for products, suppliers, or categories..."
                className="pl-10 h-12 bg-background text-foreground"
              />
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
              Search
            </Button>
          </div>

          <div className="hidden flex-wrap gap-2 justify-center">
            <span className="text-sm text-primary-foreground/80">Popular Searches:</span>
            {["Rice", "Corn", "Vegetables", "Fruits", "Seeds"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-sm transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
