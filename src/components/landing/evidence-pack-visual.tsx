"use client"

import { useEffect, useState } from "react"

/**
 * VISUAL DESIGN CONSTANTS
 * Change these values to customize the appearance
 */
const VISUAL_CONFIG = {
  // Animation timing (in milliseconds)
  fadeInDuration: 1000,
  staggerDelay: 100, // Delay between each section animating in

  // Colors - adjust these to change the color scheme
  colors: {
    primary: "red", // Main accent color for alerts
    secondary: "blue",
    accent: "amber",
    warning: "amber",
    danger: "red",
    success: "green",
  },

  // Spacing
  spacing: {
    containerPadding: "p-4 sm:p-6 lg:p-8",
    contentPadding: "p-4 sm:p-6",
    sectionGap: "space-y-4 sm:space-y-5",
  }
}

/**
 * MOCK DATA - The content shown in the evidence pack preview
 * Edit these to change what's displayed
 */
const EVIDENCE_PACK_DATA = {
  fileName: "TAKEDOWN_EVIDENCE_PACK.pdf",
  incidentId: "#4782",
  incidentType: "Domain Impersonation",

  sections: [
    {
      title: "Hosting Evidence",
      color: "blue",
      fields: [
        { label: "Domain", value: "████.████████.com" },
        { label: "IP Addr", value: "███.███.███.███" },
        { label: "Registrar", value: "████████ Inc." },
      ]
    },
    {
      title: "Activity Timeline",
      color: "emerald",
      events: [
        { date: "2024-01-08", description: "Domain registered, ads launched" },
        { date: "2024-01-09", description: "First customer complaint received" },
        { date: "2024-01-10", description: "Escalation initiated" },
      ]
    }
  ],

  threatIndicators: [
    { label: "Checkout enabled", severity: "warning" },
    { label: "Payment active", severity: "warning" },
    { label: "Brand assets used", severity: "danger" },
    { label: "Ads running", severity: "danger" },
  ],

  screenshotCount: 3,

  actionRequired: {
    title: "Immediate takedown",
    description: "of domain and associated ads impersonating [REDACTED]"
  },

  caption: "Example evidence pack • Used during escalation with platforms and payment providers"
}

/**
 * REUSABLE UI COMPONENTS
 * These are building blocks used throughout the evidence pack
 */

// Small colored dot indicator
function StatusDot({ color, animated = false }: { color: string; animated?: boolean }) {
  return (
    <div className={`w-1 h-1 rounded-full bg-${color}-400 ${animated ? 'animate-pulse' : ''}`} />
  )
}

// Window control buttons (red, yellow, green dots)
function WindowControls() {
  const buttons = [
    { color: "red", ariaLabel: "Close" },
    { color: "yellow", ariaLabel: "Minimize" },
    { color: "green", ariaLabel: "Maximize" }
  ]

  return (
    <div className="flex gap-1.5">
      {buttons.map(({ color, ariaLabel }) => (
        <div
          key={color}
          className={`w-2.5 h-2.5 rounded-full bg-${color}-500/70 hover:bg-${color}-500 transition-colors cursor-pointer`}
          aria-label={ariaLabel}
        />
      ))}
    </div>
  )
}

// Data field with label and value (used for hosting info)
function DataField({ label, value, color = "blue" }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-white/30 font-mono w-14">{label}</span>
      <div className={`relative h-4 bg-${color}-500/10 rounded flex-1 border border-${color}-500/20 overflow-hidden group/item`}>
        {/* Hover shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000" />
        <div className="relative flex items-center px-2 h-full">
          <span className={`text-[10px] text-${color}-300/70 font-mono`}>{value}</span>
        </div>
      </div>
    </div>
  )
}

// Screenshot placeholder with hover effect
function ScreenshotPlaceholder({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <div className="aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded border border-white/10 overflow-hidden group/img relative">
      {/* Hover color overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-3 h-3 border border-white/20 rounded animate-pulse"
          style={{ animationDelay: `${delay}s` }}
        />
      </div>
    </div>
  )
}

/**
 * MAIN COMPONENT
 * This displays the evidence pack visual with all animations
 */
export function EvidencePackVisual() {
  const [mounted, setMounted] = useState(false)

  // Trigger animations after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${VISUAL_CONFIG.spacing.containerPadding} overflow-hidden group`}>

      {/* Background glow effect (appears on hover) */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Main document container */}
      <div className={`relative w-full max-w-xl transition-all duration-${VISUAL_CONFIG.fadeInDuration} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Shadow layers for depth effect */}
        <div className="absolute inset-0 bg-red-500/5 rounded-xl blur-2xl translate-y-8 scale-95" />
        <div className="absolute inset-0 bg-amber-500/5 rounded-xl blur-xl translate-y-4 scale-97" />

        {/* Document window */}
        <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-red-500/10 hover:shadow-2xl">

          {/* Window header (like a browser chrome) */}
          <div className="relative bg-zinc-900/50 border-b border-white/5 px-3 sm:px-4 py-2.5 flex items-center gap-3 backdrop-blur-sm">
            <WindowControls />

            {/* File name display */}
            <div className="flex-1 flex items-center justify-center min-w-0">
              <div className="flex items-center gap-2 bg-black/30 rounded-md px-3 py-1.5 border border-white/5 max-w-full">
                {/* Document icon */}
                <svg className="w-3.5 h-3.5 text-red-400/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[10px] sm:text-xs text-white/90 font-mono tracking-tight truncate">
                  {EVIDENCE_PACK_DATA.fileName}
                </span>
              </div>
            </div>
          </div>

          {/* Document content */}
          <div className={`relative ${VISUAL_CONFIG.spacing.contentPadding} ${VISUAL_CONFIG.spacing.sectionGap} max-h-[500px] overflow-hidden`}>

            {/* Header: Incident type and ID */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                {/* "Active Incident" badge */}
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 mb-2">
                  <StatusDot color="red" animated />
                  <span className="text-[10px] text-red-300 font-mono uppercase tracking-wide">Active Incident</span>
                </div>

                <h3 className="text-white text-base sm:text-lg font-normal mb-1">
                  {EVIDENCE_PACK_DATA.incidentType}
                </h3>

                {/* Animated placeholder bar (represents redacted info) */}
                <div className="relative h-6 sm:h-7 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent rounded overflow-hidden" style={{ width: '90%' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]" />
                  <div className="absolute inset-0 flex items-center px-3">
                    <span className="text-xs text-white/50 font-mono">████████████</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-white/30 font-mono">
                ID: {EVIDENCE_PACK_DATA.incidentId}
              </div>
            </div>

            {/* Evidence sections with staggered animations */}
            <div className={VISUAL_CONFIG.spacing.sectionGap}>

              {/* Section 1: Hosting Evidence */}
              <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <StatusDot color="blue" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Hosting Evidence</span>
                </div>
                <div className="space-y-1.5 pl-3">
                  {EVIDENCE_PACK_DATA.sections[0]?.fields?.map((field) => (
                    <DataField key={field.label} {...field} />
                  ))}
                </div>
              </div>

              {/* Section 2: Timeline */}
              <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <StatusDot color="green" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Activity Timeline</span>
                </div>
                <div className="pl-3 space-y-1">
                  {EVIDENCE_PACK_DATA.sections[1]?.events?.map((event) => (
                    <div key={event.date} className="flex items-start gap-2 text-[10px]">
                      <span className="text-green-400/70 font-mono whitespace-nowrap">{event.date}</span>
                      <span className="text-white/40">{event.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Threat Indicators */}
              <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <StatusDot color="amber" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Threat Indicators</span>
                </div>
                <div className="pl-3 grid grid-cols-2 gap-1.5">
                  {EVIDENCE_PACK_DATA.threatIndicators.map((indicator) => {
                    const colorClass = indicator.severity === "danger" ? "red" : "amber"
                    return (
                      <div
                        key={indicator.label}
                        className={`px-2 py-1 bg-${colorClass}-500/10 border border-${colorClass}-500/20 rounded text-[10px] text-${colorClass}-300/70`}
                      >
                        {indicator.label}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Section 4: Screenshots */}
              <div className={`transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <StatusDot color="blue" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Evidence Screenshots</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pl-3">
                  <ScreenshotPlaceholder color="red" delay={0} />
                  <ScreenshotPlaceholder color="amber" delay={0.2} />
                  <ScreenshotPlaceholder color="green" delay={0.4} />
                </div>
              </div>
            </div>

            {/* Action Required footer */}
            <div className={`pt-3 sm:pt-4 border-t border-white/5 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 mb-2">
                <StatusDot color="red" animated />
                <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Action Required</span>
              </div>
              <div className="relative bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-lg px-3 py-2.5 overflow-hidden group/action">
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent translate-x-[-100%] group-hover/action:translate-x-[100%] transition-transform duration-1000" />
                <p className="relative text-xs text-red-300/90 leading-relaxed">
                  <span className="font-medium">{EVIDENCE_PACK_DATA.actionRequired.title}</span> {EVIDENCE_PACK_DATA.actionRequired.description}{' '}
                  <span className="px-1.5 py-0.5 bg-black/40 rounded font-mono text-[10px]">[REDACTED]</span>
                </p>
              </div>
            </div>

            {/* Fade at bottom to suggest more content below */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Caption at bottom */}
      <div className="absolute bottom-2 sm:bottom-4 left-4 right-4">
        <p className="text-white/30 text-[10px] sm:text-xs text-center font-light tracking-wide">
          {EVIDENCE_PACK_DATA.caption}
        </p>
      </div>
    </div>
  )
}
