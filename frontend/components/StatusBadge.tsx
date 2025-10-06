'use client'

interface StatusBadgeProps {
  status: 'active' | 'processing' | 'success' | 'warning'
  text: string
  className?: string
}

export default function StatusBadge({ status, text, className = '' }: StatusBadgeProps) {
  const colors = {
    active: 'bg-neonCyan/20 text-neonCyan border-neonCyan',
    processing: 'bg-thrusterOrange/20 text-thrusterOrange border-thrusterOrange',
    success: 'bg-successGreen/20 text-successGreen border-successGreen',
    warning: 'bg-warningRed/20 text-warningRed border-warningRed',
  }

  const dotColors = {
    active: 'bg-neonCyan',
    processing: 'bg-thrusterOrange',
    success: 'bg-successGreen',
    warning: 'bg-warningRed',
  }

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colors[status]} font-mono text-xs font-semibold ${className}`}>
      <div className={`w-2 h-2 rounded-full ${dotColors[status]} animate-pulse`} />
      {text}
    </div>
  )
}
