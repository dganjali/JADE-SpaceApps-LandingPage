'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, Eye, Radio, Target, Play } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function NavigationDocking() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-card', {
        scrollTrigger: {
          trigger: '.nav-card',
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
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0A0E16] to-[#182743] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonCyan rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-thrusterOrange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neonCyan/10 text-neonCyan px-6 py-2 rounded-full mb-6 font-orbitron font-bold uppercase text-sm border border-neonCyan/30">
            <Rocket className="w-5 h-5" />
            Step 2: Navigation & Approach
          </div>
          <h2 className="text-5xl md:text-6xl font-inter font-bold text-white mb-6">
            Autonomous Navigation & Docking
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            GPS guidance brings us close, YOLO-powered computer vision locks on, and cold gas thrusters execute precision docking
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Propulsion & Gazebo Sim */}
          <div className="nav-card bg-orbitBlue/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-thrusterOrange/50 hover:border-thrusterOrange transition-all hover:shadow-[0_0_50px_rgba(255,126,46,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-thrusterOrange/20 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-thrusterOrange" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white">Propulsion System</h3>
            </div>

            {/* Gazebo Simulation Video */}
            <div className="relative aspect-video bg-gradient-to-br from-deepSpace to-orbitBlue rounded-xl overflow-hidden mb-6 border border-thrusterOrange/30">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/videos/gazebo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="space-y-3 text-white/90">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-thrusterOrange mt-2" />
                <p className="text-sm">Cold gas thrusters for precise orbital maneuvering</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-thrusterOrange mt-2" />
                <p className="text-sm">Jetty Gazebo simulation validates thrust, rotation, and microgravity behavior</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-thrusterOrange mt-2" />
                <p className="text-sm">Low-thrust system optimized for fuel efficiency</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-thrusterOrange mt-2" />
                <p className="text-sm">Multiple repair missions without full refueling</p>
              </div>
            </div>
          </div>

          {/* Right: Computer Vision */}
          <div className="nav-card bg-orbitBlue/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-neonCyan/50 hover:border-neonCyan transition-all hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-neonCyan/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-neonCyan" />
              </div>
              <h3 className="text-3xl font-orbitron font-bold text-white">Computer Vision</h3>
            </div>

            {/* CV Detection Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-deepSpace to-orbitBlue rounded-xl overflow-hidden mb-6 border border-neonCyan/30 group cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Eye className="w-20 h-20 text-neonCyan/40 mb-4" />
                <span className="text-sm text-white/60 font-mono">YOLO_CV_DETECTION</span>
                <span className="text-xs text-white/40 mt-2">Real-time Satellite Tracking</span>
              </div>
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-neonCyan/90 flex items-center justify-center animate-pulse">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-white/90">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neonCyan mt-2" />
                <p className="text-sm">YOLO-based object detection identifies and tracks satellites</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neonCyan mt-2" />
                <p className="text-sm">Activates at close range for precision targeting</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neonCyan mt-2" />
                <p className="text-sm">Real-time pose estimation and distance calculation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neonCyan mt-2" />
                <p className="text-sm">Works in cluttered orbital environments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Process Steps */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="nav-card bg-orbitBlue/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-successGreen hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all text-center group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-successGreen w-0 group-hover:w-full transition-all duration-1000" />
            <div className="w-12 h-12 rounded-full bg-successGreen/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-successGreen/40 transition-all relative">
              <Radio className="w-6 h-6 text-successGreen group-hover:animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-successGreen/50 animate-ping" />
            </div>
            <h4 className="font-orbitron font-bold text-white mb-2">1. GPS Lock</h4>
            <p className="text-xs text-white/70">Local positioning and alignment</p>
          </div>

          <div className="nav-card bg-orbitBlue/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-neonCyan hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all text-center group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-neonCyan w-0 group-hover:w-full transition-all duration-1000" />
            <div className="w-12 h-12 rounded-full bg-neonCyan/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-neonCyan/40 transition-all">
              <Eye className="w-6 h-6 text-neonCyan group-hover:scale-125 transition-transform" />
            </div>
            <h4 className="font-orbitron font-bold text-white mb-2 glitch">2. Visual Detect</h4>
            <p className="text-xs text-white/70">YOLO identifies target satellite</p>
          </div>

          <div className="nav-card bg-orbitBlue/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-thrusterOrange hover:shadow-[0_0_30px_rgba(255,126,46,0.3)] transition-all text-center group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-thrusterOrange w-0 group-hover:w-full transition-all duration-1000" />
            <div className="w-12 h-12 rounded-full bg-thrusterOrange/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-thrusterOrange/40 transition-all">
              <Rocket className="w-6 h-6 text-thrusterOrange group-hover:-translate-y-2 transition-transform" />
            </div>
            <h4 className="font-orbitron font-bold text-white mb-2">3. Approach</h4>
            <p className="text-xs text-white/70">Controlled thruster maneuvers</p>
          </div>

          <div className="nav-card bg-orbitBlue/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-successGreen hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all text-center group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-successGreen w-0 group-hover:w-full transition-all duration-1000" />
            <div className="w-12 h-12 rounded-full bg-successGreen/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-successGreen/40 transition-all">
              <Target className="w-6 h-6 text-successGreen group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <h4 className="font-orbitron font-bold text-white mb-2">4. Dock</h4>
            <p className="text-xs text-white/70">Soft capture and stabilization</p>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="nav-card bg-gradient-to-r from-deepSpace via-orbitBlue to-deepSpace rounded-2xl p-8 border border-neonCyan/20">
          <h3 className="text-2xl font-orbitron font-bold text-neonCyan mb-6">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-thrusterOrange" />
                Propulsion
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Cold gas (N₂) thrusters</li>
                <li>• COPV composite tank</li>
                <li>• 4-thruster RCS cluster</li>
                <li>• ΔV: 50 m/s capability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-neonCyan" />
                Vision System
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• YOLOv8 detection model</li>
                <li>• 30 FPS processing rate</li>
                <li>• 0.5m range accuracy</li>
                <li>• Space-rated cameras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Radio className="w-5 h-5 text-successGreen" />
                Control
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Hybrid autonomous/manual</li>
                <li>• 6-30ms ground delay</li>
                <li>• PID control loops</li>
                <li>• Kalman filtering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
