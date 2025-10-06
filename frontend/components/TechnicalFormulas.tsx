'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calculator, Orbit, Rocket, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function TechnicalFormulas() {
  const sectionRef = useRef<HTMLElement>(null)

  // Animation removed for better visibility
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.formula-card', {
  //       scrollTrigger: {
  //         trigger: '.formula-card',
  //         start: 'top 85%',
  //       },
  //       y: 30,
  //       opacity: 0,
  //       duration: 0.6,
  //       stagger: 0.12,
  //     })
  //   }, sectionRef)
  //
  //   return () => ctx.revert()
  // }, [])

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0A0E16] to-[#111A27]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-successGreen/10 text-successGreen px-6 py-2 rounded-full mb-6 font-orbitron font-bold uppercase text-sm border border-successGreen/30">
            <Calculator className="w-5 h-5" />
            Mathematical Foundation
          </div>
          <h2 className="text-5xl md:text-6xl font-inter font-bold text-white mb-6">
            Core Equations & Physics
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            The mathematical framework powering autonomous satellite servicing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Orbital Mechanics */}
          <div className="formula-card group bg-orbitBlue/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-neonCyan/50 hover:border-neonCyan transition-all hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-neonCyan/20 flex items-center justify-center group-hover:bg-neonCyan/30 transition-all">
                <Orbit className="w-7 h-7 text-neonCyan" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white">Orbital Mechanics</h3>
            </div>

            <div className="space-y-6">
              {/* Vis-viva Equation */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-neonCyan/20">
                <p className="text-neonCyan text-sm font-semibold mb-2 font-mono">Vis-viva Equation (Orbital Velocity)</p>
                <div className="text-white text-center py-3 font-mono text-xl overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">v</span><sup>2</sup> = <span className="italic">μ</span>(<span className="text-neonCyan">2/<span className="italic">r</span></span> − <span className="text-neonCyan">1/<span className="italic">a</span></span>)
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  <span className="text-neonCyan italic">μ</span> = gravitational parameter, <span className="text-neonCyan italic">r</span> = current radius, <span className="text-neonCyan italic">a</span> = semi-major axis
                </p>
              </div>

              {/* Two-Body Equation */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-neonCyan/20">
                <p className="text-neonCyan text-sm font-semibold mb-2 font-mono">Two-Body Equation of Motion</p>
                <div className="text-white text-center py-3 font-mono text-xl overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">r̈</span> = −<span className="italic">μ</span>(<span className="text-neonCyan"><span className="italic">r</span>/|<span className="italic">r</span>|<sup>3</sup></span>)
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Fundamental equation governing satellite orbital motion
                </p>
              </div>

              {/* Clohessy-Wiltshire */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-neonCyan/20">
                <p className="text-neonCyan text-sm font-semibold mb-2 font-mono">Clohessy–Wiltshire Equations</p>
                <div className="text-white text-center py-2 font-mono text-base overflow-x-auto">
                  <div className="space-y-1">
                    <div><span className="italic">ẍ</span> − 2<span className="italic">nẏ</span> − 3<span className="italic">n</span><sup>2</sup><span className="italic">x</span> = <span className="text-neonCyan"><span className="italic">F</span><sub>x</sub>/<span className="italic">m</span></span></div>
                    <div><span className="italic">ÿ</span> + 2<span className="italic">nẋ</span> = <span className="text-neonCyan"><span className="italic">F</span><sub>y</sub>/<span className="italic">m</span></span></div>
                    <div><span className="italic">z̈</span> + <span className="italic">n</span><sup>2</sup><span className="italic">z</span> = <span className="text-neonCyan"><span className="italic">F</span><sub>z</sub>/<span className="italic">m</span></span></div>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Relative motion between servicer and target satellite
                </p>
              </div>
            </div>
          </div>

          {/* Thruster & Propulsion */}
          <div className="formula-card group bg-orbitBlue/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-thrusterOrange/50 hover:border-thrusterOrange transition-all hover:shadow-[0_0_50px_rgba(255,126,46,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-thrusterOrange/20 flex items-center justify-center group-hover:bg-thrusterOrange/30 transition-all">
                <Rocket className="w-7 h-7 text-thrusterOrange" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white">Thruster Physics</h3>
            </div>

            <div className="space-y-6">
              {/* Tsiolkovsky Rocket Equation */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-thrusterOrange/20">
                <p className="text-thrusterOrange text-sm font-semibold mb-2 font-mono">Tsiolkovsky Rocket Equation</p>
                <div className="text-white text-center py-3 font-mono text-xl overflow-x-auto">
                  <div className="inline-block">
                    Δ<span className="italic">v</span> = <span className="italic">v</span><sub>e</sub> ln(<span className="text-thrusterOrange"><span className="italic">m</span><sub>0</sub>/<span className="italic">m</span><sub>f</sub></span>)
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  <span className="text-thrusterOrange italic">v</span><sub>e</sub> = exhaust velocity, <span className="text-thrusterOrange italic">m</span><sub>0</sub> = initial mass, <span className="text-thrusterOrange italic">m</span><sub>f</sub> = final mass
                </p>
              </div>

              {/* Thrust Equation */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-thrusterOrange/20">
                <p className="text-thrusterOrange text-sm font-semibold mb-2 font-mono">Thrust Force</p>
                <div className="text-white text-center py-3 font-mono text-xl overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">F</span> = <span className="italic">ṁv</span><sub>e</sub> + (<span className="text-thrusterOrange"><span className="italic">P</span><sub>e</sub> − <span className="italic">P</span><sub>0</sub></span>)<span className="italic">A</span><sub>e</sub>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Mass flow rate and pressure differential produce thrust
                </p>
              </div>

              {/* Torque Equation */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-thrusterOrange/20">
                <p className="text-thrusterOrange text-sm font-semibold mb-2 font-mono">Torque for Rotation Control</p>
                <div className="text-white text-center py-3 font-mono text-xl overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">τ</span> = <span className="text-thrusterOrange italic">r</span> × <span className="italic">F</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Cross product of position vector and force generates torque
                </p>
              </div>
            </div>
          </div>

          {/* Attitude Dynamics */}
          <div className="formula-card group bg-orbitBlue/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-successGreen/50 hover:border-successGreen transition-all hover:shadow-[0_0_50px_rgba(57,255,20,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-successGreen/20 flex items-center justify-center group-hover:bg-successGreen/30 transition-all">
                <Target className="w-7 h-7 text-successGreen" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white">Attitude Control</h3>
            </div>

            <div className="space-y-6">
              {/* Euler's Equation */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-successGreen/20">
                <p className="text-successGreen text-sm font-semibold mb-2 font-mono">Euler's Rotational Equation</p>
                <div className="text-white text-center py-3 font-mono text-lg overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">I</span><span className="italic">ω̇</span> + <span className="italic">ω</span> × (<span className="text-successGreen italic">I</span><span className="italic">ω</span>) = <span className="italic">τ</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  <span className="text-successGreen italic">I</span> = inertia tensor, <span className="text-successGreen italic">ω</span> = angular velocity, <span className="text-successGreen italic">τ</span> = external torque
                </p>
              </div>

              {/* Quaternion Kinematics */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-successGreen/20">
                <p className="text-successGreen text-sm font-semibold mb-2 font-mono">Quaternion Kinematics</p>
                <div className="text-white text-center py-3 font-mono text-lg overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">q̇</span> = <sup>1</sup>/<sub>2</sub>Ω(<span className="text-successGreen italic">ω</span>)<span className="italic">q</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Quaternion-based attitude propagation (singularity-free)
                </p>
              </div>

              {/* Angular Momentum */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-successGreen/20">
                <p className="text-successGreen text-sm font-semibold mb-2 font-mono">Angular Momentum Conservation</p>
                <div className="text-white text-center py-3 font-mono text-xl overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">L</span> = <span className="text-successGreen italic">I</span><span className="italic">ω</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Conservation principle for rotational dynamics
                </p>
              </div>
            </div>
          </div>

          {/* GNC & Control */}
          <div className="formula-card group bg-orbitBlue/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-neonCyan/50 hover:border-neonCyan transition-all hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-neonCyan/20 flex items-center justify-center group-hover:bg-neonCyan/30 transition-all">
                <Calculator className="w-7 h-7 text-neonCyan" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white">Guidance & Control</h3>
            </div>

            <div className="space-y-6">
              {/* PID Control */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-neonCyan/20">
                <p className="text-neonCyan text-sm font-semibold mb-2 font-mono">PID Control Law</p>
                <div className="text-white text-center py-3 font-mono text-base overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">u</span>(<span className="italic">t</span>) = <span className="italic">K</span><sub>p</sub><span className="italic">e</span>(<span className="italic">t</span>) + <span className="italic">K</span><sub>i</sub><span className="text-neonCyan">∫<span className="italic">e</span>(<span className="italic">τ</span>)d<span className="italic">τ</span></span> + <span className="italic">K</span><sub>d</sub>(<span className="text-neonCyan">d<span className="italic">e</span>/d<span className="italic">t</span></span>)
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Proportional-Integral-Derivative control for precise docking
                </p>
              </div>

              {/* Line of Sight */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-neonCyan/20">
                <p className="text-neonCyan text-sm font-semibold mb-2 font-mono">Line-of-Sight Guidance</p>
                <div className="text-white text-center py-3 font-mono text-lg overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">λ̇</span> = <span className="text-neonCyan"><span className="italic">V</span><sub>t</sub> sin(<span className="italic">θ</span>)</span>/<span className="italic">R</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  LOS angle rate for approach trajectory planning
                </p>
              </div>

              {/* Newton's 2nd Law */}
              <div className="bg-deepSpace/50 rounded-xl p-4 border border-neonCyan/20">
                <p className="text-neonCyan text-sm font-semibold mb-2 font-mono">Newton's Second Law</p>
                <div className="text-white text-center py-3 font-mono text-2xl overflow-x-auto">
                  <div className="inline-block">
                    <span className="italic">F</span> = <span className="text-neonCyan italic">m</span><span className="italic">a</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Foundation for all thrust and acceleration calculations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-neonCyan/10 via-thrusterOrange/10 to-successGreen/10 rounded-2xl p-8 border border-white/10 text-center">
          <p className="text-white/90 text-lg mb-4">
            These equations are implemented in our <span className="text-neonCyan font-semibold">Gazebo simulation environment</span> and 
            <span className="text-thrusterOrange font-semibold"> real-time control systems</span> to enable autonomous satellite servicing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <span className="px-4 py-2 bg-white/5 rounded-full border border-neonCyan/30">
              ✓ Validated in Simulation
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-thrusterOrange/30">
              ✓ Real-time Computation
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-successGreen/30">
              ✓ Flight-ready Algorithms
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
