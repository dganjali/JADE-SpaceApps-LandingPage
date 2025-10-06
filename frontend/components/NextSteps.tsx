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
        'Our robotic arm has been built and successfully tested, demonstrating reliable gripping, stabilization, and manipulation capabilities.',
        'The spinning screwdriver is also fully functional, allowing precise repair operations.',
        'Next step: develop a modular tool system, enabling the robot to swap different tools for various maintenance tasks, such as tightening bolts, adjusting panels, or replacing components.',
      ],
    },
    {
      Icon: Rocket,
      title: 'Propulsion System Advancement',
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
      items: [
        'Begin designing a compact, efficient propulsion unit capable of navigating between satellites in LEO.',
        'Test low-thrust systems and orbital maneuver algorithms using small-scale experimental platforms.',
        'Optimize propulsion for fuel efficiency and long-term operation, ensuring multiple repair missions without requiring full refueling.',
      ],
    },
    {
      Icon: Brain,
      title: 'Software & AI Improvements',
      color: 'text-successGreen',
      borderColor: 'border-successGreen',
      items: [
        'Refine predictive maintenance algorithms using NASA telemetry and lithium-ion battery datasets.',
        'Enhance YOLO-based satellite detection for improved accuracy in cluttered orbital environments.',
        'Integrate a hybrid interface that allows seamless switching between autonomous navigation and manual ground control during repairs.',
      ],
    },
    {
      Icon: ClipboardList,
      title: 'Operational Planning',
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
      items: [
        'Develop a docking and recharge protocol for repeated use, ensuring the robot can reliably return to the host or nearby satellites.',
        'Create mission scheduling software to optimize repair sequences, minimize fuel use, and extend operational lifespan.',
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
