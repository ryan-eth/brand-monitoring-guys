"use client"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { EvidencePackVisual } from "./evidence-pack-visual"
import { CheckCircle2, Target, FileText, Shield, Zap, Lock, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export function IncidentProcessSection() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setInView(true)
  }, [])

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-black border-t border-white/5 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/[0.02] to-transparent" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main headline with refined typography */}
          <div className="mb-20 sm:mb-28">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight text-white mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              How we run an
              <br />
              impersonation incident
            </h2>
            <div className={`w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
          </div>

          {/* Refined Bento Grid with better proportions */}
          <BentoGrid className="grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6 auto-rows-[minmax(280px,auto)] mb-24 sm:mb-32">
            {/* Step 1 - Better visual hierarchy */}
            <BentoCard className="col-span-1 lg:col-span-2 row-span-1 group/card">
              <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">
                {/* Floating number indicator */}
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl group-hover/card:bg-purple-500/20 transition-all duration-500" />
                    <span className="relative text-2xl font-light text-purple-300">1</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-5 leading-tight">
                      We verify
                      <br />
                      what it is
                    </h3>
                    <p className="text-white/70 text-base font-extralight leading-relaxed mb-4">
                      We confirm whether the domain, ad, or account is genuinely unaffiliated — including resellers and partners if relevant.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-purple-300/80 text-sm font-light italic flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>You won't be asked to prove it's not you</span>
                    </p>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Step 2 - Optimized spacing */}
            <BentoCard className="col-span-1 lg:col-span-3 row-span-1 group/card">
              <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">
                {/* Floating number indicator */}
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl group-hover/card:bg-purple-500/20 transition-all duration-500" />
                    <span className="relative text-2xl font-light text-purple-300">2</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 leading-tight pr-16">
                      We choose the fastest leverage point
                    </h3>
                    <p className="text-white/60 text-sm font-extralight mb-5">
                      We don't start with whoever's easiest to email.
                    </p>

                    <div className="space-y-3 mb-5">
                      <p className="text-white/90 text-sm font-light">We prioritise:</p>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform duration-300" />
                          <span className="text-white/70 text-sm font-extralight">payment rails if money is flowing</span>
                        </div>
                        <div className="flex items-center gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform duration-300" />
                          <span className="text-white/70 text-sm font-extralight">ads if traffic is being driven</span>
                        </div>
                        <div className="flex items-center gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform duration-300" />
                          <span className="text-white/70 text-sm font-extralight">platforms/hosts if persistence is likely</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-purple-300/80 text-sm font-light italic flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>Stop harm first, then remove the source</span>
                    </p>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Evidence Pack Visual - Hero visual on right */}
            <BentoCard className="col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 order-last lg:order-none border-purple-500/10 hover:border-purple-500/20">
              <EvidencePackVisual />
            </BentoCard>

            {/* Step 3 - Full width bottom */}
            <BentoCard className="col-span-1 lg:col-span-5 row-span-1 group/card">
              <div className="relative z-10 h-full flex flex-col lg:flex-row items-start gap-8 p-8 lg:p-10">
                {/* Left side - Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl group-hover/card:bg-purple-500/20 transition-all duration-500" />
                      <span className="relative text-2xl font-light text-purple-300">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 leading-tight">
                        We build an evidence pack that gets action
                      </h3>
                      <p className="text-white/70 text-base font-extralight leading-relaxed max-w-2xl">
                        Screenshots, timelines, ownership proof, and platform-specific language tailored to each escalation point.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Highlight */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="relative bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <p className="relative text-white/90 text-sm font-light leading-relaxed">
                      Most customers stop hearing about the issue{' '}
                      <span className="text-purple-300 font-normal">before we stop working on it</span>
                    </p>
                    <div className="relative mt-4 flex items-center gap-2 text-white/50 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Average resolution: 48-72 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>

          {/* Recent Patterns - Refined cards */}
          <div className={`transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-baseline justify-between mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white">
                Recent patterns we've handled
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Pattern 1 - Enhanced visual interest */}
              <div className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20 font-normal px-3">
                      Neutralised
                    </Badge>
                  </div>

                  <h4 className="text-xl font-normal text-white mb-2">
                    Lookalike domains
                  </h4>
                  <p className="text-white/50 text-sm font-extralight mb-6">
                    with checkout enabled
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-white/40 text-xs font-light mb-1.5">First action</p>
                    <p className="text-white/70 text-sm font-light">
                      Payment escalated, ads disabled
                    </p>
                  </div>
                </div>
              </div>

              {/* Pattern 2 */}
              <div className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-emerald-400" />
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20 font-normal px-3">
                      Neutralised
                    </Badge>
                  </div>

                  <h4 className="text-xl font-normal text-white mb-2">
                    Scam ads during launches
                  </h4>
                  <p className="text-white/50 text-sm font-extralight mb-6">
                    targeting your brand keywords
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-white/40 text-xs font-light mb-1.5">First action</p>
                    <p className="text-white/70 text-sm font-light">
                      Wildfire ad escalation list
                    </p>
                  </div>
                </div>
              </div>

              {/* Pattern 3 */}
              <div className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-400" />
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20 font-normal px-3">
                      Resolved
                    </Badge>
                  </div>

                  <h4 className="text-xl font-normal text-white mb-2">
                    Fake support accounts
                  </h4>
                  <p className="text-white/50 text-sm font-extralight mb-6">
                    in comments/DMs
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-white/40 text-xs font-light mb-1.5">First action</p>
                    <p className="text-white/70 text-sm font-light">
                      Official handles verified + takedowns requested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
