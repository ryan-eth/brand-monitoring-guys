import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      {/* Decorative stars on the right side */}
      <div className="absolute right-[15%] top-[30%] flex flex-col gap-8 opacity-60">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8 py-32 pt-32">
        <div className="max-w-5xl">
          {/* Main headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal leading-[1.1] tracking-tight mb-8">
            <span className="block text-white">
              Something is impersonating
            </span>
            <span className="block text-white">
              your brand.{" "}
            </span>
            <span className="block bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 bg-clip-text text-transparent">
              We make it stop.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 max-w-4xl mb-12 leading-relaxed">
            We help our customers find and take down scams when someone pretends to be your brand -
            providing monitoring and escalation of fake stores, scam ads, and impersonation accounts
            who should no longer mislead your customers.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 text-base font-normal px-8 py-6 h-auto rounded-md"
              >
                Talk about Coverage
              </Button>
            </Link>
            <Link href="#learn-more">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/5 text-base font-normal px-8 py-6 h-auto rounded-md"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
