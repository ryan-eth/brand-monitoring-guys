"use client"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { EvidencePackVisual } from "./evidence-pack-visual"
import { CheckCircle2, Shield, Zap, AlertTriangle, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

/**
 * SECTION CONFIGURATION
 * Edit these values to customize the content and appearance
 */
const SECTION_CONFIG = {
  // Main headline text
  headline: {
    line1: "Standard Operating Procedure:",
    line2: "Brand Impersonation Incident"
  },

  // Animation timing (in milliseconds)
  animation: {
    fadeDuration: 1000,
    delayBetweenCards: 200,
    delayBeforePatterns: 500,
  },

  // Spacing
  spacing: {
    sectionVertical: "py-24 sm:py-32 lg:py-40",
    headlineBottom: "mb-20 sm:mb-28",
    gridBottom: "mb-24 sm:mb-32",
    patternsHeaderBottom: "mb-12 sm:mb-16",
  }
}

/**
 * PROCESS STEPS DATA
 * Edit these to change the step content
 */
const PROCESS_STEPS = [
  {
    number: 1,
    stepCode: "VER-01",
    title: {
      line1: "Verification Phase:",
      line2: "Confirm unauthorized activity"
    },
    description: "We confirm whether the domain, ad, or account is genuinely unaffiliated. Including legitimate resellers, authorized affiliates, or partners. If it's yours, we tell you. If it's not, we proceed.",
    footer: {
      icon: Shield,
      text: "You will never be asked to 'prove' it's not you",
      severity: "neutral" as const
    },
    layout: "col-span-1 lg:col-span-2 row-span-1"
  },
  {
    number: 2,
    stepCode: "TGT-02",
    title: {
      line1: "Target Selection:",
      line2: "Fastest leverage point"
    },
    subtitle: "We don't start with whoever's easiest to email. We go where it matters.",
    priorities: [
      { text: "Payment rails if money is flowing", severity: "critical" as const },
      { text: "Ad platforms if traffic is being driven", severity: "warning" as const },
      { text: "Hosting/domains if persistence is likely", severity: "active" as const }
    ],
    footer: {
      icon: Target,
      text: "Stop the harm first. Remove the source second.",
      severity: "critical" as const
    },
    layout: "col-span-1 lg:col-span-3 row-span-1"
  },
  {
    number: 3,
    stepCode: "EVD-03",
    title: {
      line1: "Evidence Assembly:",
      line2: "Build takedown package"
    },
    description: "Screenshots, domain registration data, timelines, ownership proof, and platform-specific legal language. Tailored to each escalation target. We know what Stripe needs vs what Shopify needs vs what Meta needs.",
    highlight: {
      text: "Most incidents are resolved",
      emphasis: "before you ever hear about them",
      stat: "Median resolution time: 48-72 hours"
    },
    layout: "col-span-1 lg:col-span-5 row-span-1"
  }
]

/**
 * RECENT PATTERNS DATA
 * Edit these to change the pattern cards
 */
const RECENT_PATTERNS = [
  {
    incidentId: "PTN-7820",
    title: "Lookalike domains + payment processing",
    subtitle: "Fake Shopify stores with Stripe checkout enabled",
    status: {
      text: "Neutralized",
      severity: "active" as const
    },
    icon: AlertTriangle,
    firstAction: "Stripe account frozen within 6 hours",
    outcome: "3 domains taken down, payment processor notified"
  },
  {
    incidentId: "PTN-7804",
    title: "Coordinated scam ad campaigns",
    subtitle: "Launch week targeting with brand keywords",
    status: {
      text: "Neutralized",
      severity: "active" as const
    },
    icon: Target,
    firstAction: "Meta & Google escalation submitted",
    outcome: "14 ad accounts disabled, $12k in fraudulent spend stopped"
  },
  {
    incidentId: "PTN-7791",
    title: "Fake customer support impersonation",
    subtitle: "Social media accounts harvesting credentials",
    status: {
      text: "Resolved",
      severity: "warning" as const
    },
    icon: Shield,
    firstAction: "Platform verification + DMCA filed",
    outcome: "7 accounts suspended, official badges secured"
  }
]

/**
 * REUSABLE COMPONENTS
 */

// Floating step number badge with step code
function StepNumber({ number, stepCode }: { number: number; stepCode: string }) {
  return (
    <div className="flex flex-col items-end gap-1">
      <div className="text-[10px] font-mono text-white/30 tracking-wider">{stepCode}</div>
      <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/20 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 rounded-lg bg-red-500/10 blur-xl group-hover/card:bg-red-500/20 transition-all duration-500" />
        <span className="relative text-2xl font-light text-red-300">{number}</span>
      </div>
    </div>
  )
}

// Footer with icon and text
function StepFooter({ icon: Icon, text, severity }: { icon: any; text: string; severity: "critical" | "warning" | "active" | "neutral" }) {
  const severityColors = {
    critical: "text-red-400/80 border-red-500/20",
    warning: "text-amber-400/80 border-amber-500/20",
    active: "text-green-400/80 border-green-500/20",
    neutral: "text-white/60 border-white/5"
  }

  return (
    <div className={`pt-4 border-t ${severityColors[severity]}`}>
      <p className={`${severityColors[severity]} text-sm font-light italic flex items-center gap-2`}>
        <Icon className="w-4 h-4" />
        <span>{text}</span>
      </p>
    </div>
  )
}

// Priority list bullet point with severity indicator
function PriorityItem({ text, severity }: { text: string; severity: "critical" | "warning" | "active" }) {
  const severityColors = {
    critical: "bg-red-500 shadow-[0_0_6px_rgba(255,59,48,0.5)]",
    warning: "bg-amber-500 shadow-[0_0_6px_rgba(255,149,0,0.4)]",
    active: "bg-green-500 shadow-[0_0_6px_rgba(52,199,89,0.4)]"
  }

  return (
    <div className="flex items-center gap-3 group/item">
      <div className={`w-1.5 h-1.5 rounded-full ${severityColors[severity]} group-hover/item:scale-150 transition-transform duration-300`} />
      <span className="text-white/70 text-sm font-light">{text}</span>
    </div>
  )
}

/**
 * MAIN COMPONENT
 */
export function IncidentProcessSection() {
  const [inView, setInView] = useState(false)

  // Trigger animations when component mounts
  useEffect(() => {
    setInView(true)
  }, [])

  const step1 = PROCESS_STEPS[0]
  const step2 = PROCESS_STEPS[1]
  const step3 = PROCESS_STEPS[2]

  return (
    <section className={`relative ${SECTION_CONFIG.spacing.sectionVertical} bg-black border-t border-white/5 overflow-hidden`}>

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/[0.015] to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section headline */}
          <div className={SECTION_CONFIG.spacing.headlineBottom}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 text-red-400/60 text-xs font-mono uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Incident Response Protocol</span>
              </div>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-white mb-6 transition-all duration-${SECTION_CONFIG.animation.fadeDuration} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {SECTION_CONFIG.headline.line1}
              <br />
              {SECTION_CONFIG.headline.line2}
            </h2>
            <div className={`w-16 h-0.5 bg-gradient-to-r from-red-400 to-transparent transition-all duration-${SECTION_CONFIG.animation.fadeDuration} delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
          </div>

          {/* Process steps in bento grid */}
          <BentoGrid className={`grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6 auto-rows-[minmax(280px,auto)] ${SECTION_CONFIG.spacing.gridBottom}`}>

            {/* Step 1: Verify */}
            <BentoCard className={`${step1.layout} group/card`}>
              <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <StepNumber number={step1.number} stepCode={step1.stepCode} />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-5 leading-tight">
                      {step1.title.line1}
                      <br />
                      {step1.title.line2}
                    </h3>
                    <p className="text-white/70 text-base font-light leading-relaxed mb-4">
                      {step1.description}
                    </p>
                  </div>

                  {step1.footer && <StepFooter icon={step1.footer.icon} text={step1.footer.text} severity={step1.footer.severity} />}
                </div>
              </div>
            </BentoCard>

            {/* Step 2: Choose leverage point */}
            <BentoCard className={`${step2.layout} group/card`}>
              <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <StepNumber number={step2.number} stepCode={step2.stepCode} />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 leading-tight pr-16">
                      {step2.title.line1}
                      <br />
                      {step2.title.line2}
                    </h3>
                    <p className="text-white/60 text-sm font-light mb-5">
                      {step2.subtitle}
                    </p>

                    <div className="space-y-3 mb-5">
                      <p className="text-white/90 text-sm font-medium">Prioritization order:</p>
                      <div className="grid gap-2">
                        {step2.priorities?.map((priority) => (
                          <PriorityItem key={priority.text} text={priority.text} severity={priority.severity} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {step2.footer && <StepFooter icon={step2.footer.icon} text={step2.footer.text} severity={step2.footer.severity} />}
                </div>
              </div>
            </BentoCard>

            {/* Evidence Pack Visual - positioned on the right */}
            <BentoCard className="col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 order-last lg:order-none border-red-500/10 hover:border-red-500/15">
              <EvidencePackVisual />
            </BentoCard>

            {/* Step 3: Build evidence pack */}
            <BentoCard className={`${step3.layout} group/card`}>
              <div className="relative z-10 h-full flex flex-col lg:flex-row items-start gap-8 p-8 lg:p-10">

                {/* Left: Main content */}
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <StepNumber number={step3.number} stepCode={step3.stepCode} />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 leading-tight">
                        {step3.title.line1}
                        <br />
                        {step3.title.line2}
                      </h3>
                      <p className="text-white/70 text-base font-light leading-relaxed max-w-2xl">
                        {step3.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Highlight box */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="relative bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <p className="relative text-white/90 text-sm font-light leading-relaxed">
                      {step3.highlight?.text}{' '}
                      <span className="text-green-300 font-medium">{step3.highlight?.emphasis}</span>
                    </p>
                    <div className="relative mt-4 flex items-center gap-2 text-white/50 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      <span>{step3.highlight?.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>

          {/* Recent Patterns section */}
          <div className={`transition-all duration-${SECTION_CONFIG.animation.fadeDuration} delay-${SECTION_CONFIG.animation.delayBeforePatterns} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            <div className={`flex items-baseline justify-between ${SECTION_CONFIG.spacing.patternsHeaderBottom}`}>
              <div>
                <div className="flex items-center gap-2 text-amber-400/60 text-xs font-mono uppercase tracking-wider mb-4">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Recent Incident Patterns</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                  What we handled last month
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {RECENT_PATTERNS.map((pattern, index) => {
                const Icon = pattern.icon

                const severityColors = {
                  critical: "text-red-400 bg-red-500/10 border-red-500/20 hover:border-red-500/30",
                  warning: "text-amber-400 bg-amber-500/10 border-amber-500/20 hover:border-amber-500/30",
                  active: "text-green-400 bg-green-500/10 border-green-500/20 hover:border-green-500/30"
                }

                const severityGlow = {
                  critical: "from-red-500/0 to-red-500/0 group-hover:from-red-500/5",
                  warning: "from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5",
                  active: "from-green-500/0 to-green-500/0 group-hover:from-green-500/5"
                }

                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-8 hover:border-white/15 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${severityGlow[pattern.status.severity]} group-hover:to-transparent transition-all duration-500`} />

                    <div className="relative">
                      {/* Header: Incident ID and Status */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="text-[10px] font-mono text-white/30 tracking-wider">{pattern.incidentId}</div>
                        <Badge className={`${severityColors[pattern.status.severity]} font-normal px-3 text-xs`}>
                          {pattern.status.text}
                        </Badge>
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg ${severityColors[pattern.status.severity]} flex items-center justify-center mb-5`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-normal text-white mb-2">
                        {pattern.title}
                      </h4>
                      <p className="text-white/50 text-sm font-light mb-6">
                        {pattern.subtitle}
                      </p>

                      {/* Actions */}
                      <div className="space-y-3">
                        <div className="pt-3 border-t border-white/5">
                          <p className="text-white/40 text-xs font-light mb-1.5">First action taken</p>
                          <p className="text-white/70 text-sm font-light">
                            {pattern.firstAction}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-white/5">
                          <p className="text-white/40 text-xs font-light mb-1.5">Final outcome</p>
                          <p className="text-white/70 text-sm font-light">
                            {pattern.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
