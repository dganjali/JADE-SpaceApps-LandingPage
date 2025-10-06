'use client'

import { useEffect, useRef, useState } from 'react'

interface ProgressBarProps {
  percentage: number
  label: string
  color: 'cyan' | 'orange' | 'green'
  delay?: number
}

export default function ProgressBar({ percentage, label, color, delay = 0 }: ProgressBarProps) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  const colors = {
    cyan: {
      bg: 'bg-neonCyan/20',
      fill: 'bg-neonCyan',
      text: 'text-neonCyan',
      glow: 'shadow-[0_0_10px_rgba(0,255,255,0.5)]'
    },
    orange: {
      bg: 'bg-thrusterOrange/20',
      fill: 'bg-thrusterOrange',
      text: 'text-thrusterOrange',
      glow: 'shadow-[0_0_10px_rgba(255,126,46,0.5)]'
    },
    green: {
      bg: 'bg-successGreen/20',
      fill: 'bg-successGreen',
      text: 'text-successGreen',
      glow: 'shadow-[0_0_10px_rgba(57,255,20,0.5)]'
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setWidth(percentage)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [percentage, delay])

  return (
    <div ref={barRef} className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className={`text-sm font-bold ${colors[color].text}`}>{percentage}%</span>
      </div>
      <div className={`h-3 ${colors[color].bg} rounded-full overflow-hidden`}>
        <div 
          className={`h-full ${colors[color].fill} ${colors[color].glow} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
