'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Rocket, Brain, ClipboardList } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function NextSteps() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: '.step-card',
          start: 'top 85%',
        },
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      Icon: Cpu,
      title: 'Hardware Validation & Expansion',
      color: 'text-thrusterOrange',
      borderColor: 'border-thrusterOrange',
      items: [
        'Robotic arm built and successfully tested',
        'Spinning screwdriver fully functional',
        'Develop modular tool system for swapping different tools',
        'Enable various maintenance tasks: tightening bolts, adjusting panels, replacing components',
      ],
    },
    {
      Icon: Rocket,
      title: 'Propulsion System Advancement',
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
      items: [
        'Design compact, efficient propulsion unit for LEO navigation',
        'Test low-thrust systems and orbital maneuver algorithms',
        'Use small-scale experimental platforms',
        'Optimize for fuel efficiency and long-term operation',
        'Enable multiple repair missions without full refueling',
      ],
    },
    {
      Icon: Brain,
      title: 'Software & AI Improvements',
      color: 'text-successGreen',
      borderColor: 'border-successGreen',
      items: [
        'Refine predictive maintenance algorithms using NASA datasets',
        'Enhance YOLO-based satellite detection for cluttered orbital environments',
        'Integrate hybrid interface for seamless autonomous/manual switching',
        'Improve accuracy and reliability during repairs',
      ],
    },
    {
      Icon: ClipboardList,
      title: 'Operational Planning',
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
      items: [
        'Develop docking and recharge protocol for repeated use',
        'Ensure reliable return to host or nearby satellites',
        'Create mission scheduling software to optimize repair sequences',
        'Minimize fuel use and extend operational lifespan',
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#182743] to-[#0A0E16] grid-pattern relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-white mb-16">
          Next Steps
        </h2>

        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.Icon
            return (
              <div
                key={idx}
                className={`step-card bg-orbitBlue/40 backdrop-blur-sm rounded-xl p-8 border-l-4 ${step.borderColor} hover:scale-[1.02] hover:shadow-xl transition-all shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className={`w-12 h-12 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-4 uppercase">
                      {step.title}
                    </h3>
                    <ul className="space-y-2 text-white/85">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`${step.color} mt-1 flex-shrink-0`}>▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white/90 mb-6">
            <span className="text-neonCyan font-semibold">Demonstrating a feasible, cost-effective solution</span> for sustainable satellite servicing in LEO
          </p>
        </div>
      </div>
    </section>
  )
}
