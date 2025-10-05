'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ParallaxTitleProps {
  children: ReactNode
  className?: string
  speed?: number
}

export default function ParallaxTitle({ children, className = '', speed = 0.5 }: ParallaxTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return
      
      const rect = titleRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * speed
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        titleRef.current.style.transform = `translateY(${rate * 0.1}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <h2 ref={titleRef} className={`transition-transform duration-100 ${className}`}>
      {children}
    </h2>
  )
}
