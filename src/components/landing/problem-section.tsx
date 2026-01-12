"use client"

import { InfiniteScroll } from "@/components/ui/infinite-scroll"
import { HelpCircle } from "lucide-react"

export function ProblemSection() {
  // Scrolling questions - the constant stream of concerns
  const streamQuestions = [
    "Who's monitoring Instagram for fake accounts?",
    "How many fake stores are out there right now?",
    "What if they create another domain tomorrow?",
    "Who handles the trademark paperwork?",
    "Can you track anonymous domain registrations?",
    "How fast can scam ads be taken down?",
    "What evidence do payment processors need?",
    "Who's checking Facebook Marketplace daily?",
    "How do you find lookalike domains?",
    "What happens when platforms don't respond?",
    "Can you stop them before customers notice?",
    "Who monitors TikTok for brand impersonation?",
    "How do you prove ownership to ad networks?",
    "What if it's a reseller, not a scammer?",
  ]

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-black overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/[0.01] to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight text-white mb-6">
              Brand impersonation isn't
              <br />
              a one-off. It comes in bursts.
            </h2>

            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-1 h-16 bg-gradient-to-b from-orange-400/50 to-transparent rounded-full flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-white/60 leading-relaxed font-extralight">
                From monitoring multiple platforms and marketplaces, to tracking down the latest fake stores and scam ads,{" "}
                <span className="text-white/80">there's always something that needs your attention</span>, taking time away from building a successful brand.
              </p>
            </div>
          </div>

          {/* Infinite scroll streams - showing the overwhelming volume */}
          <div className="mb-20 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-5 h-5 text-white/40" />
              <p className="text-sm text-white/40 font-light uppercase tracking-wider">
                The constant stream of questions
              </p>
            </div>

            {/* First row - left scroll */}
            <InfiniteScroll speed="slow" direction="left">
              {streamQuestions.slice(0, 7).map((question, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-zinc-900/40 border border-white/5 rounded-lg px-5 py-3 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300"
                >
                  <p className="text-sm text-white/60 font-light whitespace-nowrap">
                    {question}
                  </p>
                </div>
              ))}
            </InfiniteScroll>

            {/* Second row - right scroll */}
            <InfiniteScroll speed="normal" direction="right">
              {streamQuestions.slice(7).map((question, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-zinc-900/40 border border-white/5 rounded-lg px-5 py-3 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300"
                >
                  <p className="text-sm text-white/60 font-light whitespace-nowrap">
                    {question}
                  </p>
                </div>
              ))}
            </InfiniteScroll>
          </div>

        </div>
      </div>
    </section>
  )
}
