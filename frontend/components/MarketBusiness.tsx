'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Satellite, Building2, Network } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function MarketBusiness() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.market-item', {
        scrollTrigger: {
          trigger: '.market-item',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const tiers = [
    {
      name: 'Basic',
      color: 'neonCyan',
      borderColor: 'border-neonCyan',
      bgColor: 'bg-neonCyan/10',
      features: [
        'Up to 5 satellites',
        '2 maintenance missions/year',
        'Standard monitoring',
        'Email support',
      ],
    },
    {
      name: 'Pro',
      color: 'successGreen',
      borderColor: 'border-successGreen',
      bgColor: 'bg-successGreen/10',
      features: [
        'Up to 50 satellites',
        '10 maintenance missions/year',
        'Advanced monitoring + alerts',
        'Priority support',
        'Custom repair protocols',
      ],
    },
    {
      name: 'Enterprise',
      color: 'thrusterOrange',
      borderColor: 'border-thrusterOrange',
      bgColor: 'bg-thrusterOrange/10',
      features: [
        'Unlimited satellites',
        'Unlimited missions',
        'Real-time monitoring',
        '24/7 dedicated support',
        'Custom mission planning',
        'Dedicated servicing robot',
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#1B2333] to-[#2D3F69]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-white mb-16">
          Market Opportunity + Business Model
        </h2>

        {/* Business Plan */}
        <div className="market-item mb-16 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-softWhite mb-6">Business Plan</h3>
          <p className="text-lg text-softWhite leading-relaxed">
            Our business plan focuses on providing <span className="text-neonCyan font-semibold">subscription-based in-orbit satellite maintenance services</span> to commercial satellite operators, government agencies, and scientific institutions. By offering recurring, scheduled maintenance, we aim to maximize satellite uptime, reduce replacement costs, and provide predictable, reliable service over the lifetime of each satellite.
          </p>
        </div>

        {/* Target Market */}
        <div className="market-item mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-softWhite mb-8">Target Market</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-neonCyan/30 text-center hover:border-neonCyan/60 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-center mb-4 relative z-10">
                <div className="p-3 rounded-full bg-neonCyan/10 group-hover:bg-neonCyan/20 transition-all">
                  <Satellite className="w-12 h-12 text-neonCyan group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 relative z-10">Commercial Operators</h4>
              <p className="text-sm text-softWhite relative z-10">
                Companies running communication, navigation, or Earth observation satellites. Subscription services for efficient fleet management.
              </p>
            </div>

            <div className="group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-successGreen/30 text-center hover:border-successGreen/60 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-center mb-4 relative z-10">
                <div className="p-3 rounded-full bg-successGreen/10 group-hover:bg-successGreen/20 transition-all">
                  <Building2 className="w-12 h-12 text-successGreen group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 relative z-10">Government Agencies</h4>
              <p className="text-sm text-softWhite relative z-10">
                NASA, ESA, CSA requiring continuous operation for research, defense, and environmental monitoring.
              </p>
            </div>

            <div className="group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-thrusterOrange/30 text-center hover:border-thrusterOrange/60 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-center mb-4 relative z-10">
                <div className="p-3 rounded-full bg-thrusterOrange/10 group-hover:bg-thrusterOrange/20 transition-all">
                  <Network className="w-12 h-12 text-thrusterOrange group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 relative z-10">Satellite Constellations</h4>
              <p className="text-sm text-softWhite relative z-10">
                Large LEO networks (Starlink, OneWeb) with hundreds or thousands of satellites requiring ongoing maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Subscription Tiers */}
        <div className="market-item mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-softWhite mb-8">Subscription Tiers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-8 border-2 ${tier.borderColor} ${tier.bgColor} transition-all hover:scale-105 hover:shadow-2xl relative overflow-hidden ${idx === 1 ? 'md:-translate-y-2 border-4' : ''}`}
              >
                {/* Best value badge for Pro tier */}
                {idx === 1 && (
                  <div className="absolute top-4 right-4 bg-successGreen text-deepSpace text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="text-center mb-6 relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${tier.color}/20 flex items-center justify-center`}>
                    <span className={`text-3xl font-bold text-${tier.color}`}>{idx + 1}</span>
                  </div>
                  <h4 className={`text-2xl font-orbitron font-bold text-${tier.color} uppercase mb-2`}>
                    {tier.name}
                  </h4>
                </div>
                <ul className="space-y-3 text-softWhite relative z-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                      <span className={`text-${tier.color} mt-1 font-bold`}>✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-mutedGray mt-8 text-sm">
            Annual or multi-year subscriptions ensure predictable revenue and cost certainty for operators
          </p>
        </div>

        {/* Sustainability Approach */}
        <div className="market-item">
          <h3 className="text-3xl font-orbitron font-bold text-center text-softWhite mb-8">Approach to Sustainability</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-l-4 border-thrusterOrange shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-thrusterOrange group-hover:h-full transition-all duration-500" />
              <h4 className="text-lg font-semibold text-thrusterOrange mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-thrusterOrange rounded-full animate-pulse" />
                Environmental
              </h4>
              <p className="text-sm text-softWhite leading-relaxed">
                Extending satellite lifespans reduces replacement launches, lowering rocket emissions and minimizing space debris in LEO.
              </p>
            </div>

            <div className="group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-l-4 border-successGreen shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-successGreen group-hover:h-full transition-all duration-500" />
              <h4 className="text-lg font-semibold text-successGreen mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-successGreen rounded-full animate-pulse" />
                Economic
              </h4>
              <p className="text-sm text-softWhite leading-relaxed">
                Subscription services provide cost-effective alternatives to replacement satellites, helping operators manage budgets and reduce financial risk.
              </p>
            </div>

            <div className="group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-l-4 border-neonCyan shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-neonCyan group-hover:h-full transition-all duration-500" />
              <h4 className="text-lg font-semibold text-neonCyan mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-neonCyan rounded-full animate-pulse" />
                Operational
              </h4>
              <p className="text-sm text-softWhite leading-relaxed">
                Robot docks back to recharge and replenish fuel, enabling multiple maintenance cycles without additional launches or generating debris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
