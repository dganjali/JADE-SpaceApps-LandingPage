'use client'

import { useEffect, useRef } from 'react'

interface AnimatedNumberProps {
  value: string
  delay?: number
  className?: string
}

export default function AnimatedStat({ value, delay = 0, className = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {value}
    </div>
  )
}
