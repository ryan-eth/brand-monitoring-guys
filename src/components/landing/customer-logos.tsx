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
    <section className="py-12 sm:py-16 md:py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm text-white/40 mb-8 sm:mb-12 md:mb-16 font-extralight">
          Many more growing teams trust us to help protect their brand
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-8 items-center">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-start h-10 sm:h-12 opacity-40 hover:opacity-60 transition-opacity duration-300"
            >
              <span className="text-sm sm:text-base font-normal text-white tracking-wide">
                {customer.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
