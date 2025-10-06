'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, TrendingUp, Activity, AlertTriangle } from 'lucide-react'
import CounterAnimation from './CounterAnimation'

gsap.registerPlugin(ScrollTrigger)

export default function PredictiveMaintenance() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pm-card', {
        scrollTrigger: {
          trigger: '.pm-card',
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
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-successGreen/10 text-successGreen px-6 py-2 rounded-full mb-6 font-orbitron font-bold uppercase text-sm">
            <Brain className="w-5 h-5" />
            Step 1: Predictive Intelligence
          </div>
          <h2 className="text-5xl md:text-6xl font-inter font-bold text-deepSpace mb-6">
            Predictive Maintenance Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our ML model analyzes satellite telemetry to predict failures before they happen, enabling proactive maintenance missions
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl transition-all group">
            <TrendingUp className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-deepSpace mb-2">RUL Prediction</h3>
            <p className="text-sm text-gray-700">Estimates Remaining Useful Life of satellite components</p>
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl transition-all group">
            <Activity className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-deepSpace mb-2">Real-Time Monitoring</h3>
            <p className="text-sm text-gray-700">Continuous analysis of temperature, voltage, and current</p>
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl transition-all group">
            <AlertTriangle className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-deepSpace mb-2">Early Warning</h3>
            <p className="text-sm text-gray-700">Identifies potential failures weeks in advance</p>
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl transition-all group">
            <Brain className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-deepSpace mb-2">NASA Dataset</h3>
            <p className="text-sm text-gray-700">Trained on real satellite telemetry and battery data</p>
          </div>
        </div>

        {/* Data Visualization Area */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Chart 1: RUL Over Time */}
          <div className="pm-card bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-successGreen/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-successGreen" />
              <h3 className="text-2xl font-orbitron font-bold text-deepSpace">RUL Prediction Timeline</h3>
            </div>
            {/* Chart Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-successGreen/30 mx-auto mb-4" />
                <p className="text-gray-500 font-mono text-sm">RUL_TIMELINE_GRAPH</p>
                <p className="text-gray-400 text-xs mt-2">Remaining Useful Life vs Time</p>
              </div>
            </div>
          </div>

          {/* Chart 2: Component Health */}
          <div className="pm-card bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-successGreen/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8 text-successGreen" />
              <h3 className="text-2xl font-orbitron font-bold text-deepSpace">Component Health Status</h3>
            </div>
            {/* Chart Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <Activity className="w-16 h-16 text-successGreen/30 mx-auto mb-4" />
                <p className="text-gray-500 font-mono text-sm">HEALTH_STATUS_CHART</p>
                <p className="text-gray-400 text-xs mt-2">Battery, Solar Panels, Sensors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="pm-card bg-gradient-to-br from-successGreen/5 to-white rounded-xl p-8 border-l-4 border-successGreen text-center hover:shadow-lg transition-all group">
            <CounterAnimation 
              end={95} 
              suffix="%" 
              className="text-5xl font-bold text-successGreen mb-3 group-hover:scale-110 transition-transform"
            />
            <p className="text-gray-700 font-medium">Prediction Accuracy</p>
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/5 to-white rounded-xl p-8 border-l-4 border-successGreen text-center hover:shadow-lg transition-all group">
            <CounterAnimation 
              end={14} 
              suffix=" days" 
              className="text-5xl font-bold text-successGreen mb-3 group-hover:scale-110 transition-transform"
            />
            <p className="text-gray-700 font-medium">Average Warning Time</p>
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/5 to-white rounded-xl p-8 border-l-4 border-successGreen text-center hover:shadow-lg transition-all group">
            <CounterAnimation 
              end={87} 
              suffix="%" 
              className="text-5xl font-bold text-successGreen mb-3 group-hover:scale-110 transition-transform"
            />
            <p className="text-gray-700 font-medium">Preventable Failures</p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 bg-gradient-to-r from-deepSpace to-orbitBlue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-orbitron font-bold mb-6 text-successGreen">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-neonCyan">Data Sources</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• NASA satellite telemetry datasets</li>
                <li>• Lithium-ion battery sensor data</li>
                <li>• Temperature, voltage, current readings</li>
                <li>• Charge-discharge cycle history</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-neonCyan">ML Architecture</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• LSTM-based time series prediction</li>
                <li>• Multi-variate regression analysis</li>
                <li>• Anomaly detection algorithms</li>
                <li>• Continuous learning from new data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
