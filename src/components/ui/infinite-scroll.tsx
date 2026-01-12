"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteScrollProps {
  children: React.ReactNode
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
  className?: string
  pauseOnHover?: boolean
}

export function InfiniteScroll({
  children,
  speed = "normal",
  direction = "left",
  className,
  pauseOnHover = true,
}: InfiniteScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerRef.current?.appendChild(duplicatedItem)
    })
  }, [])

  const speedMap = {
    slow: "60s",
    normal: "40s",
    fast: "20s",
  }

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsAnimating(false)}
      onMouseLeave={() => pauseOnHover && setIsAnimating(true)}
    >
      <div
        ref={scrollerRef}
        className="flex gap-4 w-max"
        style={{
          animation: isAnimating
            ? `scroll-${direction} ${speedMap[speed]} linear infinite`
            : "none",
        }}
      >
        {children}
      </div>
    </div>
  )
}
