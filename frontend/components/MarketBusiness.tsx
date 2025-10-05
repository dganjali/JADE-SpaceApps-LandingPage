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
            <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-neonCyan/30 text-center hover:border-neonCyan/60 transition-all shadow-lg">
              <div className="flex justify-center mb-4">
                <Satellite className="w-12 h-12 text-neonCyan" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Commercial Operators</h4>
              <p className="text-sm text-softWhite">
                Companies running communication, navigation, or Earth observation satellites. Subscription services for efficient fleet management.
              </p>
            </div>

            <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-successGreen/30 text-center hover:border-successGreen/60 transition-all shadow-lg">
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-successGreen" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Government Agencies</h4>
              <p className="text-sm text-softWhite">
                NASA, ESA, CSA requiring continuous operation for research, defense, and environmental monitoring.
              </p>
            </div>

            <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-thrusterOrange/30 text-center hover:border-thrusterOrange/60 transition-all shadow-lg">
              <div className="flex justify-center mb-4">
                <Network className="w-12 h-12 text-thrusterOrange" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Satellite Constellations</h4>
              <p className="text-sm text-softWhite">
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
                className={`bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-8 border-2 ${tier.borderColor} ${tier.bgColor} transition-all hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-orbitron font-bold text-${tier.color} uppercase mb-2`}>
                    {tier.name}
                  </h4>
                </div>
                <ul className="space-y-3 text-softWhite">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`text-${tier.color} mt-1`}>✓</span>
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
            <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-l-4 border-thrusterOrange shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-lg font-semibold text-thrusterOrange mb-3">Environmental</h4>
              <p className="text-sm text-softWhite leading-relaxed">
                Extending satellite lifespans reduces replacement launches, lowering rocket emissions and minimizing space debris in LEO.
              </p>
            </div>

            <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-l-4 border-successGreen shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-lg font-semibold text-successGreen mb-3">Economic</h4>
              <p className="text-sm text-softWhite leading-relaxed">
                Subscription services provide cost-effective alternatives to replacement satellites, helping operators manage budgets and reduce financial risk.
              </p>
            </div>

            <div className="bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border-l-4 border-neonCyan shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-lg font-semibold text-neonCyan mb-3">Operational</h4>
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
