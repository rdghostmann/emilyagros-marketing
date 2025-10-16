import { Users, Package, Globe, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10+",
    label: "Active Users",
    // label: "Verified Suppliers",
    description: "Trusted partners worldwide",
  },
  {
    icon: Package,
    value: "5K+",
    label: "Agro Products Listed",
    // label: "Total Trade Value",
    description: "Successful transactions",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfaction Rate",
    // label: "Success Rate",
    description: "Customer satisfaction",
  },
]

export function StatsSection() {
  return (
    // <section className="py-16 md:py-24">
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="hidden text-center mb-16">
          <h2 className="text-3xl md:tex t-4xl font-bold text-balance mb-4">
            Major country importing from <span className="text-accent">Bangladesh</span>
          </h2>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join thousands of successful businesses trading globally
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                {/* <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4"> */}
                <div className="hidden items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                {/* <div className="font-semibold mb-1">{stat.label}</div> */}
                <div className="hidden text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"> */}
        <div className="hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { country: "America", flag: "🇺🇸" },
            { country: "Germany", flag: "🇩🇪" },
            { country: "United Kingdom", flag: "🇬🇧" },
            { country: "Spain", flag: "🇪🇸" },
            { country: "China", flag: "🇨🇳" },
            { country: "Brazil", flag: "🇧🇷" },
            { country: "Japan", flag: "🇯🇵" },
            { country: "Australia", flag: "🇦🇺" },
            { country: "India", flag: "🇮🇳" },
            { country: "Indonesia", flag: "🇮🇩" },
            { country: "Saudi Arabia", flag: "🇸🇦" },
            { country: "Canada", flag: "🇨🇦" },
          ].map((country) => (
            <div
              key={country.country}
              className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-sm font-medium">{country.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
