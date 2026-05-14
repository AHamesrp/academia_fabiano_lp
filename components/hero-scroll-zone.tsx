"use client"

import type { ReactNode } from "react"
import { useCallback, useEffect, useState } from "react"

import { HeroBackgroundCarousel } from "@/components/hero-background-carousel"

function readCarouselOpacity(): number {
  const hero = document.getElementById("hero")
  const plans = document.getElementById("planos")
  if (!hero || !plans) return 1

  const y = window.scrollY
  const fadeStart = hero.getBoundingClientRect().bottom + y
  const fadeEnd = plans.getBoundingClientRect().top + y
  const range = fadeEnd - fadeStart
  if (range <= 0) return y >= fadeEnd ? 0 : 1

  if (y <= fadeStart) return 1
  if (y >= fadeEnd) return 0
  return 1 - (y - fadeStart) / range
}

export function HeroScrollZone({ children }: { children: ReactNode }) {
  const [opacity, setOpacity] = useState(1)

  const updateOpacity = useCallback(() => {
    setOpacity(readCarouselOpacity())
  }, [])

  useEffect(() => {
    updateOpacity()
    window.addEventListener("scroll", updateOpacity, { passive: true })
    window.addEventListener("resize", updateOpacity)
    return () => {
      window.removeEventListener("scroll", updateOpacity)
      window.removeEventListener("resize", updateOpacity)
    }
  }, [updateOpacity])

  return (
    <div className="relative isolate overflow-x-clip">
      {/* fixed = fora do fluxo: evita “100vh fantasmas” que o par sticky + -mt-dvh gerava ao dar zoom */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-dvh w-full overflow-hidden"
        style={{ opacity }}
        aria-hidden
      >
        <HeroBackgroundCarousel className="h-full min-h-dvh" minTrackHeightClass="min-h-dvh" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
