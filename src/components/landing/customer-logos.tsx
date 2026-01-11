export function CustomerLogos() {
  const customers = [
    { name: "Pattern", logo: "Pattern" },
    { name: "CarEdge", logo: "CarEdge" },
    { name: "Luxe Software", logo: "LUXE SOFTWARE" },
    { name: "Ultralight", logo: "Ultralight" },
    { name: "Cubby", logo: "CUBBY" },
    { name: "Suno", logo: "SUNO" },
  ]

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-12">
          Many more growing teams trust us to help protect their brand
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-center h-16 w-full px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {customer.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
