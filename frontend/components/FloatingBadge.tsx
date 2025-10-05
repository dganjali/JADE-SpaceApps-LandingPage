'use client'

import { Rocket } from 'lucide-react'

export default function FloatingBadge() {
  return (
    <div className="absolute top-8 right-8 z-20 animate-bounce">
      <div className="bg-gradient-to-r from-neonCyan to-successGreen p-1 rounded-full shadow-lg">
        <div className="bg-deepSpace rounded-full px-4 py-2 flex items-center gap-2">
          <Rocket className="w-4 h-4 text-neonCyan" />
          <span className="text-xs font-orbitron font-bold text-white uppercase tracking-wider">
            Space Apps 2025
          </span>
        </div>
      </div>
    </div>
  )
}
