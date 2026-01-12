"use client"

import { useEffect, useState } from "react"

export function EvidencePackVisual() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden group">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Main document container with perspective */}
      <div className={`relative w-full max-w-xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Subtle shadow layers for depth */}
        <div className="absolute inset-0 bg-purple-500/5 rounded-xl blur-2xl translate-y-8 scale-95" />
        <div className="absolute inset-0 bg-blue-500/5 rounded-xl blur-xl translate-y-4 scale-97" />

        {/* Document window */}
        <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-purple-500/10 hover:shadow-2xl">
          {/* Chrome header */}
          <div className="relative bg-zinc-900/50 border-b border-white/5 px-3 sm:px-4 py-2.5 flex items-center gap-3 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
            </div>
            <div className="flex-1 flex items-center justify-center min-w-0">
              <div className="flex items-center gap-2 bg-black/30 rounded-md px-3 py-1.5 border border-white/5 max-w-full">
                <svg className="w-3.5 h-3.5 text-purple-400/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[10px] sm:text-xs text-white/90 font-mono tracking-tight truncate">TAKEDOWN_EVIDENCE_PACK.pdf</span>
              </div>
            </div>
          </div>

          {/* Content with scroll simulation */}
          <div className="relative p-4 sm:p-6 space-y-4 sm:space-y-5 max-h-[500px] overflow-hidden">
            {/* Header section with badge */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[10px] text-purple-300 font-mono uppercase tracking-wide">Active Incident</span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-normal mb-1">Domain Impersonation</h3>
                <div className="relative h-6 sm:h-7 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent rounded overflow-hidden" style={{ width: '90%' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]" />
                  <div className="absolute inset-0 flex items-center px-3">
                    <span className="text-xs text-white/50 font-mono">████████████</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-white/30 font-mono">ID: #4782</div>
            </div>

            {/* Evidence grid with staggered animation */}
            <div className="space-y-3 sm:space-y-4">
              {/* Hosting evidence */}
              <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Hosting Evidence</span>
                </div>
                <div className="space-y-1.5 pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/30 font-mono w-14">Domain</span>
                    <div className="relative h-4 bg-blue-500/10 rounded flex-1 border border-blue-500/20 overflow-hidden group/item">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000" />
                      <div className="relative flex items-center px-2 h-full">
                        <span className="text-[10px] text-blue-300/70 font-mono">████.████████.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/30 font-mono w-14">IP Addr</span>
                    <div className="relative h-4 bg-blue-500/10 rounded flex-1 border border-blue-500/20">
                      <div className="flex items-center px-2 h-full">
                        <span className="text-[10px] text-blue-300/70 font-mono">███.███.███.███</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/30 font-mono w-14">Registrar</span>
                    <div className="relative h-4 bg-blue-500/10 rounded flex-1 border border-blue-500/20">
                      <div className="flex items-center px-2 h-full">
                        <span className="text-[10px] text-blue-300/70 font-mono">████████ Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Activity Timeline</span>
                </div>
                <div className="pl-3 space-y-1">
                  <div className="flex items-start gap-2 text-[10px]">
                    <span className="text-emerald-400/70 font-mono whitespace-nowrap">2024-01-08</span>
                    <span className="text-white/40">Domain registered, ads launched</span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px]">
                    <span className="text-emerald-400/70 font-mono whitespace-nowrap">2024-01-09</span>
                    <span className="text-white/40">First customer complaint received</span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px]">
                    <span className="text-emerald-400/70 font-mono whitespace-nowrap">2024-01-10</span>
                    <span className="text-white/40">Escalation initiated</span>
                  </div>
                </div>
              </div>

              {/* Threat indicators */}
              <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-1 rounded-full bg-orange-400" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Threat Indicators</span>
                </div>
                <div className="pl-3 grid grid-cols-2 gap-1.5">
                  <div className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-[10px] text-orange-300/70">Checkout enabled</div>
                  <div className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-[10px] text-orange-300/70">Payment active</div>
                  <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-300/70">Brand assets used</div>
                  <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-300/70">Ads running</div>
                </div>
              </div>

              {/* Screenshots preview */}
              <div className={`transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-1 rounded-full bg-pink-400" />
                  <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Evidence Screenshots</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pl-3">
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded border border-white/10 overflow-hidden group/img relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 border border-white/20 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded border border-white/10 overflow-hidden group/img relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 border border-white/20 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded border border-white/10 overflow-hidden group/img relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 border border-white/20 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action footer */}
            <div className={`pt-3 sm:pt-4 border-t border-white/5 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Action Required</span>
              </div>
              <div className="relative bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-lg px-3 py-2.5 overflow-hidden group/action">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent translate-x-[-100%] group-hover/action:translate-x-[100%] transition-transform duration-1000" />
                <p className="relative text-xs text-red-300/90 leading-relaxed">
                  <span className="font-medium">Immediate takedown</span> of domain and associated ads impersonating{' '}
                  <span className="px-1.5 py-0.5 bg-black/40 rounded font-mono text-[10px]">[REDACTED]</span>
                </p>
              </div>
            </div>

            {/* Fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Enhanced caption */}
      <div className="absolute bottom-2 sm:bottom-4 left-4 right-4">
        <p className="text-white/30 text-[10px] sm:text-xs text-center font-light tracking-wide">
          Example evidence pack • Used during escalation with platforms and payment providers
        </p>
      </div>
    </div>
  )
}
