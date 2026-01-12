"use client"

import { InfiniteScroll } from "@/components/ui/infinite-scroll"
import { AlertCircle, Clock } from "lucide-react"

/**
 * SECTION CONFIGURATION
 * Edit these values to customize the appearance and content
 */
const SECTION_CONFIG = {
  // Main headline text
  headline: {
    line1: "Last week's takedowns",
    line2: "from our dashboard"
  },

  // Description text below headline
  description: {
    main: "This is what brand impersonation actually looks like. Real incidents. Real consequences. Real brands we protected.",
    emphasis: "Every one of these was online yesterday.",
  },

  // Section label
  label: "Live incident feed",

  // Spacing configuration
  spacing: {
    section: "py-20 sm:py-24 lg:py-32",
    headlineBottom: "mb-16 sm:mb-20",
    scrollStreamsBottom: "mb-20",
    streamRows: "space-y-4",
    labelBottom: "mb-6",
  },

  // Accent bar (decorative element next to description)
  accentBar: {
    height: "h-16",
    color: "from-red-400/50",
  }
}

/**
 * INCIDENT DATA
 * Real-world brand protection incidents with specific details
 */
const INCIDENTS = [
  {
    id: "INC-4782",
    platform: "Shopify",
    type: "Fake Store",
    brand: "DTC Apparel Co.",
    detail: "Unauthorized store selling counterfeit hoodies with stolen product photos",
    status: "Neutralized",
    timeAgo: "4h ago",
    severity: "critical" as const
  },
  {
    id: "INC-4781",
    platform: "Instagram",
    type: "Scam Ad",
    brand: "SaaS Platform Inc.",
    detail: "Phishing ad claiming 70% discount, directing to credential harvesting site",
    status: "Takedown Filed",
    timeAgo: "6h ago",
    severity: "critical" as const
  },
  {
    id: "INC-4779",
    platform: "Facebook",
    type: "Impersonation Page",
    brand: "E-commerce Brand",
    detail: "Fake customer support page collecting payment info from confused customers",
    status: "Neutralized",
    timeAgo: "8h ago",
    severity: "critical" as const
  },
  {
    id: "INC-4776",
    platform: "TikTok",
    type: "Scam Ad",
    brand: "Fashion Brand",
    detail: "Influencer-style ad promoting fake giveaway, harvesting email lists",
    status: "Under Review",
    timeAgo: "12h ago",
    severity: "warning" as const
  },
  {
    id: "INC-4773",
    platform: "Google Ads",
    type: "Trademark Infringement",
    brand: "Software Company",
    detail: "Competitor bidding on exact-match brand keywords, violating trademark",
    status: "Neutralized",
    timeAgo: "18h ago",
    severity: "warning" as const
  },
  {
    id: "INC-4770",
    platform: "Amazon",
    type: "Counterfeit Listing",
    brand: "Consumer Electronics",
    detail: "Unauthorized third-party seller listing fake products as 'genuine'",
    status: "Takedown Filed",
    timeAgo: "22h ago",
    severity: "critical" as const
  },
  {
    id: "INC-4767",
    platform: "Domain Registration",
    type: "Lookalike Domain",
    brand: "Financial Services",
    detail: "Domain registered with typosquatting (financia1-services.com)",
    status: "Monitoring",
    timeAgo: "1d ago",
    severity: "warning" as const
  },
  {
    id: "INC-4765",
    platform: "X (Twitter)",
    type: "Impersonation Account",
    brand: "Crypto Project",
    detail: "Verified-looking account running giveaway scam targeting crypto holders",
    status: "Neutralized",
    timeAgo: "1d ago",
    severity: "critical" as const
  },
  {
    id: "INC-4762",
    platform: "Facebook Marketplace",
    type: "Counterfeit Goods",
    brand: "Luxury Accessories",
    detail: "Local seller offering 'authentic' products at 80% discount",
    status: "Under Review",
    timeAgo: "2d ago",
    severity: "warning" as const
  },
  {
    id: "INC-4759",
    platform: "YouTube",
    type: "Scam Video",
    brand: "Tech Company",
    detail: "Fake product launch video redirecting to phishing survey",
    status: "Neutralized",
    timeAgo: "2d ago",
    severity: "critical" as const
  },
  {
    id: "INC-4756",
    platform: "Pinterest",
    type: "Content Theft",
    brand: "Home Decor Brand",
    detail: "Pins redirecting to dropshipping site using stolen lifestyle photography",
    status: "Takedown Filed",
    timeAgo: "3d ago",
    severity: "warning" as const
  },
  {
    id: "INC-4753",
    platform: "Reddit",
    type: "Impersonation",
    brand: "Gaming Company",
    detail: "Fake support account DMing users requesting account credentials",
    status: "Neutralized",
    timeAgo: "3d ago",
    severity: "critical" as const
  },
]

/**
 * SCROLL CONFIGURATION
 * Controls how the incident rows animate
 */
const SCROLL_CONFIG = {
  row1: {
    speed: "slow" as const,
    direction: "left" as const,
    incidents: INCIDENTS.slice(0, 6),
  },
  row2: {
    speed: "normal" as const,
    direction: "right" as const,
    incidents: INCIDENTS.slice(6),
  }
}

/**
 * REUSABLE COMPONENTS
 */

// Individual incident card
function IncidentCard({ incident }: { incident: typeof INCIDENTS[0] }) {
  const statusColors = {
    "Neutralized": "text-green-400 bg-green-500/10 border-green-500/20",
    "Takedown Filed": "text-amber-400 bg-amber-500/10 border-amber-500/20",
    "Under Review": "text-blue-400 bg-blue-500/10 border-blue-500/20",
    "Monitoring": "text-white/60 bg-white/5 border-white/10",
  }

  const severityIndicator = incident.severity === "critical"
    ? "bg-red-500 shadow-[0_0_8px_rgba(255,59,48,0.5)]"
    : "bg-amber-500 shadow-[0_0_8px_rgba(255,149,0,0.3)]"

  return (
    <div className="flex-shrink-0 bg-zinc-900/60 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-white/15 transition-all duration-300 w-[420px]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${severityIndicator}`} />
          <span className="text-white/40 text-xs font-mono">{incident.id}</span>
          <span className="text-white/60 text-xs font-medium px-2 py-0.5 bg-white/5 rounded">{incident.platform}</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/40">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs">{incident.timeAgo}</span>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="text-sm font-medium text-white mb-1">{incident.type}: {incident.brand}</h3>
        <p className="text-xs text-white/60 leading-relaxed">{incident.detail}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${statusColors[incident.status]}`}>
          {incident.status}
        </span>
      </div>
    </div>
  )
}

/**
 * MAIN COMPONENT
 */
export function ProblemSection() {
  return (
    <section className={`relative ${SECTION_CONFIG.spacing.section} bg-black overflow-hidden`}>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/[0.02] to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className={SECTION_CONFIG.spacing.headlineBottom}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight text-white mb-6">
              {SECTION_CONFIG.headline.line1}
              <br />
              {SECTION_CONFIG.headline.line2}
            </h2>

            {/* Description with accent bar */}
            <div className="flex items-start gap-4 max-w-3xl">
              {/* Decorative vertical bar */}
              <div className={`w-1 ${SECTION_CONFIG.accentBar.height} bg-gradient-to-b ${SECTION_CONFIG.accentBar.color} to-transparent rounded-full flex-shrink-0 mt-1`} />

              {/* Description text */}
              <p className="text-base sm:text-lg text-white/60 leading-relaxed font-extralight">
                {SECTION_CONFIG.description.main}{" "}
                <span className="text-white/80">{SECTION_CONFIG.description.emphasis}</span>
              </p>
            </div>
          </div>

          {/* Infinite scrolling incident streams */}
          <div className={SECTION_CONFIG.spacing.scrollStreamsBottom}>

            {/* Label */}
            <div className={`flex items-center gap-3 ${SECTION_CONFIG.spacing.labelBottom}`}>
              <AlertCircle className="w-5 h-5 text-red-400/60" />
              <p className="text-sm text-white/40 font-light uppercase tracking-wider">
                {SECTION_CONFIG.label}
              </p>
            </div>

            {/* Two rows of scrolling incidents */}
            <div className={SECTION_CONFIG.spacing.streamRows}>

              {/* Row 1: Scrolls left, slower speed */}
              <InfiniteScroll
                speed={SCROLL_CONFIG.row1.speed}
                direction={SCROLL_CONFIG.row1.direction}
              >
                {SCROLL_CONFIG.row1.incidents.map((incident) => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))}
              </InfiniteScroll>

              {/* Row 2: Scrolls right, normal speed */}
              <InfiniteScroll
                speed={SCROLL_CONFIG.row2.speed}
                direction={SCROLL_CONFIG.row2.direction}
              >
                {SCROLL_CONFIG.row2.incidents.map((incident) => (
                  <IncidentCard key={incident.id} incident={incident} />
                ))}
              </InfiniteScroll>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
