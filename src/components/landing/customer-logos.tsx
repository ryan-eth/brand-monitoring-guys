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
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-8">
        <p className="text-sm text-white/40 mb-16 font-light">
          Many more growing teams trust us to help protect their brand
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8 items-center">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-start h-12 opacity-40 hover:opacity-60 transition-opacity duration-300"
            >
              <span className="text-base font-normal text-white tracking-wide">
                {customer.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
