'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BarChart3, LineChart, TrendingUp, PieChart } from 'lucide-react'
import CounterAnimation from './CounterAnimation'

gsap.registerPlugin(ScrollTrigger)

export default function DataVisualization() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.graph-placeholder', {
        scrollTrigger: {
          trigger: '.graph-placeholder',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const graphs = [
    {
      Icon: LineChart,
      title: 'Predictive Maintenance Timeline',
      description: 'Remaining Useful Life (RUL) prediction over time',
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
    },
    {
      Icon: BarChart3,
      title: 'Cost Analysis',
      description: 'Repair costs vs. replacement costs comparison',
      color: 'text-successGreen',
      borderColor: 'border-successGreen',
    },
    {
      Icon: TrendingUp,
      title: 'Satellite Lifespan Extension',
      description: 'Average operational years before and after servicing',
      color: 'text-thrusterOrange',
      borderColor: 'border-thrusterOrange',
    },
    {
      Icon: PieChart,
      title: 'Mission Success Rate',
      description: 'Successful repairs by component type',
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0A0E16] to-[#182743] grid-pattern relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-white mb-16">
          Data & Analytics
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {graphs.map((graph, idx) => {
            const Icon = graph.Icon
            return (
              <div
                key={idx}
                className={`graph-placeholder bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-2 ${graph.borderColor} min-h-[400px] flex flex-col hover:border-opacity-80 transition-all shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${graph.color}`} />
                  <h3 className="text-xl font-orbitron font-bold text-white uppercase">
                    {graph.title}
                  </h3>
                </div>
                
                <p className="text-white/70 text-sm mb-6">{graph.description}</p>
                
                {/* Graph placeholder */}
                <div className="flex-1 flex items-center justify-center bg-deepSpace/50 rounded border border-mutedGray/20">
                  <div className="text-center">
                    <Icon className={`w-16 h-16 ${graph.color} mx-auto mb-4 opacity-30`} />
                    <p className="text-mutedGray text-sm">Chart visualization placeholder</p>
                    <p className="text-mutedGray/60 text-xs mt-2">Data visualization will appear here</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional insights section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-8 border border-successGreen/30 text-center hover:border-successGreen/60 hover:scale-105 transition-all shadow-lg group">
            <CounterAnimation 
              end={10000} 
              suffix="+" 
              className="text-5xl font-bold text-successGreen mb-3 group-hover:scale-110 transition-transform"
            />
            <p className="text-white/90 text-lg">Satellites in LEO</p>
          </div>
          <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-8 border border-neonCyan/30 text-center hover:border-neonCyan/60 hover:scale-105 transition-all shadow-lg group">
            <div className="text-5xl font-bold text-neonCyan mb-3 group-hover:scale-110 transition-transform">$1B</div>
            <p className="text-white/90 text-lg">Max cost per satellite</p>
          </div>
          <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-8 border border-thrusterOrange/30 text-center hover:border-thrusterOrange/60 hover:scale-105 transition-all shadow-lg group">
            <div className="text-5xl font-bold text-thrusterOrange mb-3 group-hover:scale-110 transition-transform">
              <CounterAnimation end={5} suffix="-" className="inline" />
              <CounterAnimation end={10} suffix=" yrs" className="inline" />
            </div>
            <p className="text-white/90 text-lg">Typical satellite lifespan</p>
          </div>
        </div>
      </div>
    </section>
  )
}
