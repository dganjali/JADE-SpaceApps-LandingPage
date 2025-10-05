'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-orbitBlue/30 z-50">
      <div
        className="h-full bg-gradient-to-r from-neonCyan via-successGreen to-thrusterOrange transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
