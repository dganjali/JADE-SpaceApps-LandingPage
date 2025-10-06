'use client'

import { Cpu, Settings, Wrench, Battery, Play } from 'lucide-react'

export default function RoboticArms() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-thrusterOrange/10 text-thrusterOrange px-6 py-2 rounded-full mb-6 font-orbitron font-bold uppercase text-sm border border-thrusterOrange/30">
            <Cpu className="w-5 h-5" />
            Step 3: Robotic Repair
          </div>
          <h2 className="text-5xl md:text-6xl font-inter font-bold text-deepSpace mb-6">
            3-DOF Robotic Arms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two precision 3D-printed robotic arms work in tandem: one stabilizes, one repairs. Modular tools enable battery replacement, panel adjustment, and component repairs.
          </p>
        </div>

        {/* Main Demo Videos */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Demo 1: Arm Gripping & Manipulation */}
          <div className="arm-card bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-thrusterOrange hover:shadow-2xl transition-all group">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-thrusterOrange/10 via-transparent to-neonCyan/10 opacity-50" />
              <video 
                className="w-full h-full object-contain relative z-10"
                controls
                preload="metadata"
              >
                <source src="/videos/arm-gripping.mp4" type="video/mp4" />
                <div className="absolute inset-0 flex items-center justify-center text-white p-8 text-center">
                  <div>
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Video: Precision Gripping Demo</p>
                  </div>
                </div>
              </video>
            </div>
            <div className="p-8 bg-gradient-to-br from-white to-gray-50">
              <h3 className="text-2xl font-inter font-bold text-deepSpace mb-4">Precision Gripping</h3>
              <p className="text-gray-700 mb-4">
                Demonstration of the robotic arm's ability to grasp, hold, and manipulate satellite components with precision control.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-thrusterOrange" />
                  <span>Three servo motors per arm (3 DOF)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-thrusterOrange" />
                  <span>Anchoring mechanism stabilizes target</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-thrusterOrange" />
                  <span>Force feedback for delicate operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo 2: Tool Operation */}
          <div className="arm-card bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-neonCyan hover:shadow-2xl transition-all group">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neonCyan/10 via-transparent to-successGreen/10 opacity-50" />
              <video 
                className="w-full h-full object-contain relative z-10"
                controls
                preload="metadata"
              >
                <source src="/videos/tool-operation.mp4" type="video/mp4" />
                <div className="absolute inset-0 flex items-center justify-center text-white p-8 text-center">
                  <div>
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Video: Spinning Screwdriver Demo</p>
                  </div>
                </div>
              </video>
            </div>
            <div className="p-8 bg-gradient-to-br from-white to-gray-50">
              <h3 className="text-2xl font-inter font-bold text-deepSpace mb-4">Modular Tool System</h3>
              <p className="text-gray-700 mb-4">
                Watch the spinning screwdriver in action. Interchangeable tool heads enable various repair tasks from tightening bolts to adjusting panels.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-neonCyan" />
                  <span>Servo-controlled spinning screwdriver</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-neonCyan" />
                  <span>Swappable tool bits for different tasks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-neonCyan" />
                  <span>Torque control for precise operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="arm-card bg-gradient-to-br from-thrusterOrange/10 to-white rounded-xl p-8 border-l-4 border-thrusterOrange hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer tilt-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-thrusterOrange/0 via-thrusterOrange/5 to-thrusterOrange/0 shimmer" />
            <Battery className="w-12 h-12 text-thrusterOrange mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all relative z-10" />
            <h3 className="text-xl font-bold text-deepSpace mb-3 relative z-10">Battery Replacement</h3>
            <p className="text-sm text-gray-700 relative z-10">
              Remove and replace depleted battery modules to extend satellite operational life by 5-10 years
            </p>
            <div className="absolute bottom-2 right-2 text-xs font-mono text-thrusterOrange/40">~$500M saved</div>
          </div>

          <div className="arm-card bg-gradient-to-br from-neonCyan/10 to-white rounded-xl p-8 border-l-4 border-neonCyan hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer tilt-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neonCyan/0 via-neonCyan/5 to-neonCyan/0 shimmer" />
            <Settings className="w-12 h-12 text-neonCyan mb-4 group-hover:rotate-180 transition-all duration-700 relative z-10" />
            <h3 className="text-xl font-bold text-deepSpace mb-3 relative z-10">Panel Adjustment</h3>
            <p className="text-sm text-gray-700 relative z-10">
              Reorient solar panels and antennas for optimal positioning and maximum power generation
            </p>
            <div className="absolute bottom-2 right-2 text-xs font-mono text-neonCyan/40">+30% efficiency</div>
          </div>

          <div className="arm-card bg-gradient-to-br from-successGreen/10 to-white rounded-xl p-8 border-l-4 border-successGreen hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer tilt-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-successGreen/0 via-successGreen/5 to-successGreen/0 shimmer" />
            <Wrench className="w-12 h-12 text-successGreen mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10" />
            <h3 className="text-xl font-bold text-deepSpace mb-3 relative z-10">Mechanical Repairs</h3>
            <p className="text-sm text-gray-700 relative z-10">
              Fix stuck joints, tighten loose bolts, and repair damaged mounting hardware
            </p>
            <div className="absolute bottom-2 right-2 text-xs font-mono text-successGreen/40">5-10 yr extension</div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="arm-card bg-gradient-to-r from-deepSpace to-orbitBlue rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-orbitron font-bold text-thrusterOrange mb-8">Arm Specifications</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-neonCyan mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Hardware
                </h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Two 3D-printed CFRP arms</li>
                  <li>• Three servo motors per arm (3 DOF each)</li>
                  <li>• Ti-6Al-4V joint blocks</li>
                  <li>• Ceramic hybrid bearings</li>
                  <li>• Vacuum-rated BLDC motors</li>
                  <li>• PTFE/Kapton cabling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-successGreen mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  End Effector
                </h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Modular tool mount system</li>
                  <li>• Spinning screwdriver (variable RPM)</li>
                  <li>• Interchangeable bit heads</li>
                  <li>• Ti / 17-4PH steel construction</li>
                  <li>• Force/torque sensor integration</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-neonCyan mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Control System
                </h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Manual control from ground station</li>
                  <li>• 6-30 ms communication delay</li>
                  <li>• Real-time video feedback</li>
                  <li>• Position encoders on all joints</li>
                  <li>• Safety collision detection</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-thrusterOrange mb-3 flex items-center gap-2">
                  <Battery className="w-5 h-5" />
                  Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• 0.5 kg payload capacity per arm</li>
                  <li>• ±180° rotation per joint</li>
                  <li>• 5mm positioning accuracy</li>
                  <li>• 0.5 meter operational reach</li>
                  <li>• -150°C to +150°C operation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/80 text-sm">
              <span className="text-thrusterOrange font-semibold">3D-Printed Design</span> enables rapid prototyping and cost-effective manufacturing | 
              <span className="text-neonCyan font-semibold ml-2">Space-Rated Materials</span> ensure reliability in harsh orbital environment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
