import { Tractor, Wheat, Apple, Leaf, Droplet, Package, Sprout, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Tractor / Farm Machines", image: "/tractors-farm-equipment.png", icon: Tractor, color: "bg-chart-1" },
  { name: "Grains & Cereals", image: "/seedlings.png", icon: Wheat, color: "bg-chart-2" },
  { name: "Fresh Fruits", image: "/food-fruits-veg.png", icon: Apple, color: "bg-chart-3" },
  { name: "Vegetables", image: "/food-vegetables.png", icon: Leaf, color: "bg-chart-4" },
  { name: "Irrigation Equipment", image: "/irrigation-equipment.png", icon: Droplet, color: "bg-chart-5" },
  { name: "Seeds & Fertilizers", image: "/seeds-fertilizers.png", icon: Sprout, color: "bg-chart-1" },
  { name: "Packaged Products", image: "/packaged-products.png", icon: Package, color: "bg-chart-2" },
  { name: "Logistics & Transport", image: "/logistics-transport.png", icon: Truck, color: "bg-chart-3" },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-2">Browse by Category</h2>
            <p className="text-muted-foreground text-pretty">
              Explore our wide range of agricultural products and services in our app
            </p>
          </div>
          <Button variant="outline" className="hidden bg-transparent">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {/* <div className="hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"> */}
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-lg transition-all duration-300 p-1 text-left"
              >
                <div
                  className={`${category.color} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >

                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-[10px] md:text-sm text-balance">{category.name}</h3>
              </div>
            )
          })}
        </div>

        <div className="mt-6 hidden">
          <Button variant="outline" className="w-full bg-transparent">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  )
}
