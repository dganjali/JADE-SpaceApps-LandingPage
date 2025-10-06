'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-card', {
        scrollTrigger: {
          trigger: '.problem-card',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.solution-card', {
        scrollTrigger: {
          trigger: '.solution-card',
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-[#111A27] to-[#182743] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neonCyan rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-thrusterOrange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-white mb-20">
          Problem + Solution
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Problem Side */}
          <div className="problem-card space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-warningRed to-thrusterOrange" />
              <h3 className="text-3xl font-inter font-semibold text-warningRed mb-6">Problem</h3>
            </div>
            
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p className="relative pl-6">
                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-warningRed animate-pulse" />
                There are currently over <span className="text-warningRed font-semibold">10,000 satellites</span> in Low Earth Orbit (LEO) providing essential services such as communications, navigation, Earth observation, and weather monitoring.
              </p>
              
              <p className="relative pl-6">
                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-warningRed animate-pulse" />
                Despite their importance, LEO satellites have limited lifespans — typically <span className="text-warningRed font-semibold">5 to 10 years</span>. If even a single critical component fails, the entire satellite becomes dysfunctional.
              </p>
              
              <p className="relative pl-6">
                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-warningRed animate-pulse" />
                Each satellite can cost anywhere from <span className="text-warningRed font-semibold">$50 million up to $1 billion</span> to manufacture and launch, making early failures a major financial loss.
              </p>
              
              <p className="relative pl-6">
                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-warningRed animate-pulse" />
                Non-functional satellites also contribute to <span className="text-warningRed font-semibold">space debris</span>, increasing collision risks and endangering other satellites.
              </p>
              
              <p className="text-mutedGray italic">
                Currently, there is no cost-effective way to repair or maintain satellites in orbit, so when a satellite fails, operators have to build a new satellite to replace it.
              </p>

              {/* Satellite Image */}
              <div className="mt-8 rounded-xl overflow-hidden border-2 border-warningRed/30 shadow-lg">
                <img 
                  src="/images/satellite.png" 
                  alt="Satellite in orbit" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="solution-card space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-neonCyan to-successGreen" />
              <h3 className="text-3xl font-inter font-semibold text-neonCyan mb-6">Solution</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed mb-6">
              Our solution is a <span className="text-neonCyan font-semibold">satellite servicing system</span> designed to autonomously locate satellites and enable in-orbit repairs through manual control by technicians on the ground.
            </p>

            <div className="space-y-6">
              {/* Predictive Maintenance */}
              <div className="bg-orbitBlue/40 border border-neonCyan/30 rounded-lg p-5 hover:border-neonCyan/50 transition-colors">
                <h4 className="text-lg font-orbitron text-neonCyan mb-3 uppercase">Predictive Maintenance</h4>
                <ul className="space-y-2 text-sm text-softWhite leading-relaxed">
                  <li>• Analyzes onboard sensor data to estimate Remaining Useful Life (RUL)</li>
                  <li>• Identifies potential issues before failure</li>
                  <li>• Supports efficient mission planning by prioritizing critical tasks</li>
                </ul>
              </div>

              {/* Deployment */}
              <div className="bg-orbitBlue/40 border border-neonCyan/30 rounded-lg p-5 hover:border-neonCyan/50 transition-colors">
                <h4 className="text-lg font-orbitron text-neonCyan mb-3 uppercase">Deployment</h4>
                <ul className="space-y-2 text-sm text-softWhite leading-relaxed">
                  <li>• Launched as part of an existing satellite to reduce costs</li>
                  <li>• Uses cold gas thrusters to maneuver toward target</li>
                  <li>• Computer vision detects and tracks satellites autonomously</li>
                </ul>
              </div>

              {/* Servicing Mechanics */}
              <div className="bg-orbitBlue/40 border border-neonCyan/30 rounded-lg p-5 hover:border-neonCyan/50 transition-colors">
                <h4 className="text-lg font-orbitron text-neonCyan mb-3 uppercase">Servicing Mechanics</h4>
                <ul className="space-y-2 text-sm text-softWhite leading-relaxed">
                  <li>• Two robotic arms: one anchors, one repairs</li>
                  <li>• Manual control from ground (6–30 ms delay)</li>
                  <li>• Replaces batteries, repairs panels, fixes joints</li>
                </ul>
              </div>

              {/* Docking and Reusability */}
              <div className="bg-orbitBlue/40 border border-neonCyan/30 rounded-lg p-5 hover:border-neonCyan/50 transition-colors">
                <h4 className="text-lg font-orbitron text-neonCyan mb-3 uppercase">Docking & Reusability</h4>
                <ul className="space-y-2 text-sm text-softWhite leading-relaxed">
                  <li>• Docks back onto host or compatible satellite</li>
                  <li>• Recharges batteries and replenishes fuel for future missions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical divider animation */}
        <div className="hidden md:block absolute left-1/2 top-40 bottom-20 w-0.5 bg-gradient-to-b from-transparent via-neonCyan to-transparent opacity-30" />
      </div>
    </section>
  )
}
