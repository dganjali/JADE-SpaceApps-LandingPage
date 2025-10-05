'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TechPipeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-section', {
        scrollTrigger: {
          trigger: '.tech-section',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-deepSpace mb-16">
          Software & Hardware Pipeline
        </h2>

        {/* Hardware Section */}
        <div className="tech-section mb-16">
          <div className="border-l-4 border-thrusterOrange pl-6 mb-8">
            <h3 className="text-4xl font-orbitron font-bold text-thrusterOrange mb-4 uppercase">Hardware</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-neonCyan/50 hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 shimmer" />
              <h4 className="text-xl text-neonCyan font-semibold mb-4 relative z-10">Robotic Arms</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Two 3D-printed robotic arms</li>
                <li>• Three servo motors per arm (3 degrees of freedom)</li>
                <li>• One servo controls spinning, modular screwdriver</li>
                <li>• Interchangeable tools: tightening bolts, adjusting panels, replacing battery modules</li>
                <li>• Anchoring mechanism stabilizes satellite during repairs</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-neonCyan/50 hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 shimmer" />
              <h4 className="text-xl text-neonCyan font-semibold mb-4 relative z-10">Propulsion & Control</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Cold gas thrusters for orbital maneuvering</li>
                <li>• Propulsion simulated in Jetty Gazebo</li>
                <li>• Models thrust, rotation, and microgravity behavior</li>
                <li>• Control transitions to manual operation for Earth-based engineers</li>
                <li>• Enables delicate, high-precision repairs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software Section */}
        <div className="tech-section mb-16">
          <div className="border-l-4 border-neonCyan pl-6 mb-8">
            <h3 className="text-4xl font-orbitron font-bold text-neonCyan mb-4 uppercase">Software</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl text-successGreen font-semibold mb-4">Predictive Maintenance Model</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Trained on NASA satellite telemetry and lithium-ion battery sensor datasets</li>
                <li>• Analyzes temperature, voltage, current, and charge-discharge cycles</li>
                <li>• Predicts potential power or component failures</li>
                <li>• Enables preemptive maintenance before critical breakdowns</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl text-successGreen font-semibold mb-4">Autonomous Navigation & Docking</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• GPS used for local positioning and alignment</li>
                <li>• YOLO-powered computer vision activates at close range</li>
                <li>• Detects and tracks satellites for precise docking</li>
                <li>• Hybrid operation: autonomous detection + manual Earth-based repair control</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl text-successGreen font-semibold mb-4">Control Interface</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Engineers monitor robot status in real-time</li>
                <li>• Oversee navigation and perform manual repairs</li>
                <li>• High-precision control with 6–30 ms delay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mathematical Foundation */}
        <div className="tech-section">
          <div className="border-l-4 border-successGreen pl-6 mb-8">
            <h3 className="text-4xl font-orbitron font-bold text-successGreen mb-4 uppercase">Mathematical Foundation</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg text-neonCyan font-jetbrains mb-3">Orbital Mechanics</h4>
              <div className="space-y-2 text-sm text-gray-700 font-jetbrains">
                <p>• Newton's Law of Universal Gravitation</p>
                <p>• Two-Body Equation of Motion (Kepler's Problem)</p>
                <p>• Vis-viva Equation: <span className="text-successGreen">v = √(μ(2/r − 1/a))</span></p>
                <p>• Clohessy–Wiltshire Equations (relative motion)</p>
                <p>• Orbital Decay with drag/perturbations</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg text-neonCyan font-jetbrains mb-3">Attitude & Rotation</h4>
              <div className="space-y-2 text-sm text-gray-700 font-jetbrains">
                <p>• Euler's Rotational Equations of Motion</p>
                <p>• Quaternion Kinematics Equations</p>
                <p>• Direction Cosine Matrix (DCM)</p>
                <p>• Angular Momentum Conservation</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg text-neonCyan font-jetbrains mb-3">Thruster Physics</h4>
              <div className="space-y-2 text-sm text-gray-700 font-jetbrains">
                <p>• Thrust Equation</p>
                <p>• Tsiolkovsky Rocket Equation</p>
                <p>• Torque: <span className="text-successGreen">τ = r × F</span></p>
                <p>• Reaction Control System (RCS) Dynamics</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg text-neonCyan font-jetbrains mb-3">Guidance, Navigation & Control</h4>
              <div className="space-y-2 text-sm text-gray-700 font-jetbrains">
                <p>• PD/PID Control Law for precise docking</p>
                <p>• Line-of-Sight (LOS) Guidance</p>
                <p>• Kalman Filter for position/velocity estimation</p>
                <p>• Docking Cone/Approach Trajectory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
