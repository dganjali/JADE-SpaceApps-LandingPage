'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PartsSpec() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.parts-card', {
        scrollTrigger: {
          trigger: '.parts-card',
          start: 'top 85%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const partsCategories = [
    {
      title: 'Structure & Frame',
      color: 'text-neonCyan',
      items: [
        'Main chassis/plates — Al-7075',
        'Secondary brackets — Al-6061 or AlSi10Mg (3D-printed)',
        'Arm booms — CFRP tubes (AO-coated)',
        'Joint blocks/fasteners — Ti-6Al-4V',
      ],
    },
    {
      title: 'Robotic Arms & End-Effectors',
      color: 'text-thrusterOrange',
      items: [
        '2 × 3-DOF arms (CFRP + Ti joints)',
        'Motors (vacuum-rated BLDC/servos) + drivers — AlSi10Mg housings',
        'Harmonic drives/gearboxes — stainless/steel gears, solid-lubricant coating',
        'Encoders, ceramic hybrid bearings, cabling (PTFE/Kapton)',
        'Modular end-effector + spinning screwdriver — Ti / 17-4PH steel bits',
      ],
    },
    {
      title: 'Propulsion',
      color: 'text-successGreen',
      items: [
        'Cold-gas COPV tank (N₂) — Al or Ti liner + carbon fiber overwrap',
        'Cluster cold-gas thrusters + plumbing — Ti / stainless fittings',
      ],
    },
    {
      title: 'Sensors & GNC',
      color: 'text-neonCyan',
      items: [
        'GPS receiver (space-adapted), IMU',
        'Close-range cameras (YOLO)',
      ],
    },
    {
      title: 'Avionics & Power',
      color: 'text-thrusterOrange',
      items: [
        'Flight computer + vision board (YOLO inference) — conformal-coated PCBs, Al enclosures',
        'Batteries (space-qualified Li-ion), PDU, DC-DC converters',
        'Solar panels (GaAs cells on CFRP/Al substrate)',
      ],
    },
    {
      title: 'Docking & Safety',
      color: 'text-successGreen',
      items: [
        'Docking cone/soft-capture ring — Ti + stainless springs + PEEK pads',
        'Force/torque sensor at end-effector, contact pads (PEEK/PTFE)',
      ],
    },
    {
      title: 'Misc / Spares',
      color: 'text-mutedGray',
      items: [
        'Comm radio & antennas (S/X-band), data recorder, connectors (gold-plated)',
        'Spare motors, bearings, tool bits, valves',
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0A0E16] to-[#1B2333] dot-pattern relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-white mb-16">
          Parts & Components
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partsCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="parts-card group bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-6 border border-neonCyan/20 hover:border-neonCyan/60 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${category.color.replace('text-', 'bg-')}/10 rounded-bl-full transition-all group-hover:w-20 group-hover:h-20`} />
              
              <h3 className={`text-xl font-orbitron font-bold ${category.color} mb-4 uppercase relative z-10 flex items-center gap-2`}>
                <span className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} animate-pulse`} />
                {category.title}
              </h3>
              <ul className="space-y-2 text-sm text-softWhite relative z-10">
                {category.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="leading-relaxed hover:text-white hover:translate-x-1 transition-all cursor-default flex items-start gap-2"
                  >
                    <span className={`${category.color} mt-1`}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
