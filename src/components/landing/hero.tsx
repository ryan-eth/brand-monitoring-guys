import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated purple glow background */}
      <div className="absolute inset-0 bg-purple-glow opacity-50 animate-gradient" />

      {/* Decorative stars/sparkles */}
      <div className="absolute right-1/4 top-1/4 w-2 h-2 bg-brand-purple-400 rounded-full animate-pulse" />
      <div className="absolute right-1/4 top-1/3 w-1.5 h-1.5 bg-brand-purple-300 rounded-full animate-pulse delay-75" />
      <div className="absolute right-1/4 top-2/5 w-2 h-2 bg-brand-purple-500 rounded-full animate-pulse delay-150" />
      <div className="absolute right-1/4 top-1/2 w-1 h-1 bg-brand-purple-200 rounded-full animate-pulse delay-300" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in">
            <span className="block">Something is impersonating</span>
            <span className="block">your brand.{" "}</span>
            <span className="block text-gradient-purple">We make it stop.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We help our customers find and take down scams when someone pretends to be your brand -
            providing monitoring and escalation of fake stores, scam ads, and impersonation accounts
            who should no longer mislead your customers.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link href="#contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
                Talk about Coverage
              </Button>
            </Link>
            <Link href="#learn-more">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-purple-500 text-brand-purple-400 hover:bg-brand-purple-500/10 px-8 py-6 text-lg"
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
