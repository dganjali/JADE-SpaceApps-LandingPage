'use client'

import { DollarSign, Zap, Globe, Rocket } from 'lucide-react'

export default function Impact() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white">
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
                Each satellite can cost <strong className="text-successGreen">up to $1 billion</strong> to design, build, and launch. A single failed satellite represents a major financial loss.
              </li>
              <li>
                By repairing satellites in orbit, our system reduces the need to manufacture replacement satellites, <strong className="text-successGreen">saving millions of dollars per incident</strong>.
              </li>
              <li>
                <strong className="text-successGreen">Extending satellite lifespans by 5–10 years</strong> through battery replacements, mechanical repairs, and panel adjustments maximizes the return on investment for satellite operators.
              </li>
              <li>
                This cost-saving approach makes satellite operations more sustainable and financially feasible for companies and governments.
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
                Satellite failures currently lead to <strong className="text-neonCyan">service disruptions</strong> in communication, navigation, weather forecasting, and Earth observation.
              </li>
              <li>
                Our system allows targeted, <strong className="text-neonCyan">in-orbit maintenance</strong>, ensuring satellites remain fully operational and minimizing downtime.
              </li>
              <li>
                Ground operators can perform repairs with <strong className="text-neonCyan">manual precision</strong>, reducing the risk of errors during maintenance tasks.
              </li>
              <li>
                The hybrid approach of autonomous detection and manual repair improves efficiency, reliability, and safety in satellite operations.
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
                Non-functional satellites contribute to <strong className="text-thrusterOrange">space debris</strong>, increasing collision risks in low Earth orbit (LEO).
              </li>
              <li>
                By extending satellite lifespans and performing in-orbit repairs, our system <strong className="text-thrusterOrange">reduces the generation of space debris</strong>, improving safety for other satellites and future missions.
              </li>
              <li>
                Prolonging the usability of satellites <strong className="text-thrusterOrange">minimizes the frequency of launches</strong>, indirectly reducing the environmental footprint associated with rocket launches.
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
                Combines <strong className="text-successGreen">predictive maintenance using NASA lithium-ion battery and telemetry datasets</strong>, YOLO-based computer vision, and modular, 3D-printed robotic arms.
              </li>
              <li>
                Demonstrates a <strong className="text-successGreen">feasible, reusable approach</strong> for satellite maintenance in orbit, paving the way for next-generation servicing robots and sustainable satellite infrastructure.
              </li>
              <li>
                Provides a <strong className="text-successGreen">proof-of-concept for semi-autonomous repair systems</strong> that could be adapted for other space assets in the future.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
