import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function Hero() {
  const customers = [
    { name: "Pattern", logo: "Pattern" },
    { name: "CarEdge", logo: "CarEdge" },
    { name: "Luxe Software", logo: "LUXE SOFTWARE" },
    { name: "Ultralight", logo: "Ultralight" },
    { name: "Cubby", logo: "CUBBY" },
    { name: "Suno", logo: "SUNO" },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Background gradient layers */}
      <div className="absolute inset-0">
        {/* Subtle red alert glow on the right */}
        <div className="absolute top-[40%] right-[20%] w-[800px] h-[800px] rounded-full bg-red-950/8 blur-[120px]" />

        {/* Bottom gradient - dark fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between py-16 sm:py-20 lg:py-24">
        {/* Main content */}
        <div className="max-w-6xl pt-4 sm:pt-8">
          {/* Main headline - 2 lines total */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-normal leading-[1.1] tracking-tight mb-6 sm:mb-8 font-sans">
            <span className="block text-white">
              There's a fake Shopify store
            </span>
            <span className="block">
              <span className="text-white">selling your hoodies </span>
              <span className="text-gradient-alert">
                right now
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-full mb-8 sm:mb-10 leading-relaxed font-extralight">
            Someone set it up yesterday. They're using your product photos. Running Instagram ads with your logo. Your customers are clicking "Buy Now" and wondering why their order never arrives. We find them. Kill them. Before lunch.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FF3B30] text-white hover:bg-[#FF3B30]/90 text-base font-medium px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-md shadow-lg shadow-red-500/20"
              >
                Show me what you've found
              </Button>
            </Link>
            <Link href="#learn-more" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-white/5 text-base font-normal px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-md"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                How it works
              </Button>
            </Link>
          </div>
        </div>

        {/* Customer logos at bottom - tighter spacing */}
        <div className="max-w-6xl pb-4 sm:pb-6">
          <p className="text-xs sm:text-sm text-white/40 mb-6 sm:mb-8 font-extralight">
            Protected brands you actually know
          </p>

          <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-6">
            {customers.map((customer) => (
              <div
                key={customer.name}
                className="opacity-40 hover:opacity-60 transition-opacity duration-300"
              >
                <span className="text-sm sm:text-base font-normal text-white tracking-wide">
                  {customer.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
