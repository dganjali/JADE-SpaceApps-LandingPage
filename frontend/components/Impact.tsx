'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, Zap, Globe, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.impact-card', {
        scrollTrigger: {
          trigger: '.impact-card',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-deepSpace mb-20">
          Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Economic Impact */}
          <div className="impact-card bg-white rounded-xl p-8 border-l-4 border-successGreen shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-successGreen/20 flex items-center justify-center group-hover:bg-successGreen/30 transition-all">
                <DollarSign className="w-7 h-7 text-successGreen group-hover:rotate-12 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-deepSpace uppercase">Economic</h3>
            </div>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                <strong className="text-successGreen">Up to $1 billion saved</strong> per satellite by enabling repairs instead of replacements
              </li>
              <li>
                <strong className="text-successGreen">5–10 year lifespan extension</strong> through battery replacements, mechanical repairs, and panel adjustments
              </li>
              <li>
                Maximizes return on investment for satellite operators
              </li>
              <li>
                Makes satellite operations more sustainable and financially feasible for companies and governments
              </li>
            </ul>
          </div>

          {/* Operational Impact */}
          <div className="impact-card bg-white rounded-xl p-8 border-l-4 border-neonCyan shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-neonCyan/20 flex items-center justify-center group-hover:bg-neonCyan/30 transition-all">
                <Zap className="w-7 h-7 text-neonCyan group-hover:rotate-12 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-deepSpace uppercase">Operational</h3>
            </div>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                Targeted, <strong className="text-neonCyan">in-orbit maintenance</strong> ensures satellites remain fully operational
              </li>
              <li>
                <strong className="text-neonCyan">Minimizes downtime</strong> in communication, navigation, weather forecasting, and Earth observation
              </li>
              <li>
                Ground operators perform repairs with manual precision, reducing error risk
              </li>
              <li>
                Hybrid approach improves efficiency, reliability, and safety
              </li>
            </ul>
          </div>

          {/* Environmental Impact */}
          <div className="impact-card bg-white rounded-xl p-8 border-l-4 border-thrusterOrange shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-thrusterOrange/20 flex items-center justify-center group-hover:bg-thrusterOrange/30 transition-all">
                <Globe className="w-7 h-7 text-thrusterOrange group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-deepSpace uppercase">Environmental</h3>
            </div>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                <strong className="text-thrusterOrange">Reduces space debris</strong> by extending satellite lifespans and performing in-orbit repairs
              </li>
              <li>
                Improves safety for other satellites and future missions in LEO
              </li>
              <li>
                Minimizes launch frequency, <strong className="text-thrusterOrange">reducing environmental footprint</strong> from rocket launches
              </li>
              <li>
                Contributes to sustainable space infrastructure
              </li>
            </ul>
          </div>

          {/* Technological Impact */}
          <div className="impact-card bg-white rounded-xl p-8 border-l-4 border-successGreen shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-successGreen/20 flex items-center justify-center group-hover:bg-successGreen/30 transition-all">
                <Rocket className="w-7 h-7 text-successGreen group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-deepSpace uppercase">Technological</h3>
            </div>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                Combines <strong className="text-successGreen">predictive maintenance, YOLO-based CV</strong>, and modular 3D-printed robotic arms
              </li>
              <li>
                Demonstrates feasible, reusable approach for satellite maintenance in orbit
              </li>
              <li>
                Paves the way for <strong className="text-successGreen">next-generation servicing robots</strong>
              </li>
              <li>
                Provides proof-of-concept for semi-autonomous repair systems adaptable to other space assets
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
