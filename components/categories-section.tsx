import { Tractor, Wheat, Apple, Leaf, Droplet, Package, Sprout, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Tractor / Farm Machines", icon: Tractor, color: "bg-chart-1" },
  { name: "Grains & Cereals", icon: Wheat, color: "bg-chart-2" },
  { name: "Fresh Fruits", icon: Apple, color: "bg-chart-3" },
  { name: "Vegetables", icon: Leaf, color: "bg-chart-4" },
  { name: "Irrigation Equipment", icon: Droplet, color: "bg-chart-5" },
  { name: "Seeds & Fertilizers", icon: Sprout, color: "bg-chart-1" },
  { name: "Packaged Products", icon: Package, color: "bg-chart-2" },
  { name: "Logistics & Transport", icon: Truck, color: "bg-chart-3" },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-2">Browse by Category</h2>
            <p className="text-muted-foreground text-pretty">
              Explore our wide range of agricultural products and services
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex bg-transparent">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {/* <div className="hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"> */}
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-lg transition-all duration-300 p-6 text-left"
              >
                <div
                  className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-balance">{category.name}</h3>
              </div>
            )
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Button variant="outline" className="w-full bg-transparent">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  )
}
