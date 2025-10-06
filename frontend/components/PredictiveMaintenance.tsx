'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, TrendingUp, Activity, AlertTriangle } from 'lucide-react'
import CounterAnimation from './CounterAnimation'

gsap.registerPlugin(ScrollTrigger)

export default function PredictiveMaintenance() {
  const sectionRef = useRef<HTMLElement>(null)

  // Animation removed for better visibility
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.pm-card', {
  //       scrollTrigger: {
  //         trigger: '.pm-card',
  //         start: 'top 85%',
  //       },
  //       y: 40,
  //       opacity: 0,
  //       duration: 0.7,
  //       stagger: 0.15,
  //     })
  //   }, sectionRef)
  //
  //   return () => ctx.revert()
  // }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white relative">
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
          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100" />
            <TrendingUp className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10" />
            <h3 className="text-lg font-bold text-deepSpace mb-2 relative z-10">RUL Prediction</h3>
            <p className="text-sm text-gray-700 relative z-10">Estimates Remaining Useful Life of satellite components</p>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-successGreen animate-pulse" />
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100" />
            <Activity className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 animate-pulse transition-all relative z-10" />
            <h3 className="text-lg font-bold text-deepSpace mb-2 relative z-10">Real-Time Monitoring</h3>
            <p className="text-sm text-gray-700 relative z-10">Continuous analysis of temperature, voltage, and current</p>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-neonCyan animate-pulse" />
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100" />
            <AlertTriangle className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 group-hover:animate-bounce transition-transform relative z-10" />
            <h3 className="text-lg font-bold text-deepSpace mb-2 relative z-10">Early Warning</h3>
            <p className="text-sm text-gray-700 relative z-10">Identifies potential failures weeks in advance</p>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-warningRed animate-pulse" />
          </div>

          <div className="pm-card bg-gradient-to-br from-successGreen/10 to-neonCyan/10 rounded-xl p-6 border border-successGreen/30 hover:border-successGreen hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100" />
            <Brain className="w-10 h-10 text-successGreen mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all relative z-10" />
            <h3 className="text-lg font-bold text-deepSpace mb-2 relative z-10">NASA Dataset</h3>
            <p className="text-sm text-gray-700 relative z-10">Trained on real satellite telemetry and battery data</p>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-thrusterOrange animate-pulse" />
          </div>
        </div>

        {/* Model Details - M1: Battery Degradation */}
        <div className="mt-16 bg-gradient-to-br from-deepSpace to-orbitBlue rounded-2xl p-10 text-white border-2 border-successGreen/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-successGreen/20 flex items-center justify-center">
              <Brain className="w-7 h-7 text-successGreen" />
            </div>
            <div>
              <h3 className="text-3xl font-orbitron font-bold text-successGreen">M1: Li-ion Battery Degradation Model</h3>
              <p className="text-white/70 text-sm">NASA PCoE Dataset • LSTM + Gradient Boosting Architecture</p>
            </div>
          </div>

          {/* Model Description */}
          <div className="mb-8 bg-white/5 rounded-xl p-6 border border-successGreen/20">
            <p className="text-white/90 leading-relaxed mb-4">
              The Battery Degradation Model predicts the <span className="text-successGreen font-semibold">Remaining Useful Life (RUL)</span> of satellite lithium-ion batteries by learning from NASA's Li-ion degradation data. It combines time-series feature extraction with a hybrid <span className="text-neonCyan font-semibold">LSTM–Gradient Boosting (GBM)</span> regressor for both temporal accuracy and interpretability.
            </p>
            <p className="text-white/80 text-sm">
              <span className="text-successGreen font-semibold">Data Source:</span> NASA Prognostics Center of Excellence (PCoE) Battery Data Set • 
              <span className="text-neonCyan font-semibold"> Citation:</span> B. Saha and K. Goebel (2007)
            </p>
          </div>

          {/* RUL Calculation Pipeline */}
          <div className="mb-8">
            <h4 className="text-xl font-orbitron font-bold text-neonCyan mb-4">RUL Calculation Pipeline</h4>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-successGreen">
                <div className="text-successGreen text-sm font-bold mb-2">Step 1: Nominal Capacity</div>
                <p className="text-white/80 text-xs mb-2">C₀ = max capacity in first 5 cycles</p>
                <div className="font-mono text-white text-xs bg-deepSpace/50 p-2 rounded">
                  C<sub>0</sub> = max(capacity<sub>0-5</sub>)
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-neonCyan">
                <div className="text-neonCyan text-sm font-bold mb-2">Step 2: End-of-Life</div>
                <p className="text-white/80 text-xs mb-2">Battery fails at 80% capacity</p>
                <div className="font-mono text-white text-xs bg-deepSpace/50 p-2 rounded">
                  C<sub>EoL</sub> = 0.8 × C<sub>0</sub>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-thrusterOrange">
                <div className="text-thrusterOrange text-sm font-bold mb-2">Step 3: RUL Target</div>
                <p className="text-white/80 text-xs mb-2">Cycles remaining until failure</p>
                <div className="font-mono text-white text-xs bg-deepSpace/50 p-2 rounded">
                  RUL<sub>n</sub> = N<sub>EoL</sub> - n
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-warningRed">
                <div className="text-warningRed text-sm font-bold mb-2">Step 4: Trigger Alert</div>
                <p className="text-white/80 text-xs mb-2">Deploy servicing mission</p>
                <div className="font-mono text-white text-xs bg-deepSpace/50 p-2 rounded">
                  if RUL &lt; threshold
                </div>
              </div>
            </div>
          </div>

          {/* Model Architecture & Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-orbitron font-bold text-neonCyan mb-4">Feature Engineering</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Sliding Window:</span> 15-cycle sequences for temporal context</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-neonCyan font-semibold">Statistics:</span> Mean, std, min, max, Δ-change, rolling trend</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-thrusterOrange font-semibold">Smoothing:</span> 3-cycle capacity smoothing to reduce noise</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Filtering:</span> Remove batteries with &lt;50 cycles</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-orbitron font-bold text-neonCyan mb-4">Model Architecture</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-neonCyan font-semibold">Temporal Attention LSTM:</span> 3 layers, 128 hidden units</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-neonCyan font-semibold">Multi-head Attention:</span> 8-head self-attention mechanism</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-thrusterOrange font-semibold">GBM Regressor:</span> XGBoost/LightGBM for tabular features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Training:</span> GroupKFold cross-validation by battery ID</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chart Placeholders for M1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-successGreen/30">
              <div className="rounded-lg overflow-hidden border border-successGreen/20">
                <img 
                  src="/images/m1-graph1.png" 
                  alt="Battery capacity degradation over cycles showing C₀, 80% threshold, and EoL point" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-neonCyan/30">
              <div className="rounded-lg overflow-hidden border border-neonCyan/20">
                <img 
                  src="/images/m1-graph2.png" 
                  alt="RUL prediction accuracy showing MAE, RMSE, and sMAPE metrics" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Generalized RUL Prediction Framework */}
        <div className="mt-8 bg-gradient-to-br from-deepSpace to-orbitBlue rounded-2xl p-10 text-white border-2 border-thrusterOrange/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-thrusterOrange/20 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-thrusterOrange" />
            </div>
            <div>
              <h3 className="text-3xl font-orbitron font-bold text-thrusterOrange">Generalized RUL Prediction Framework</h3>
              <p className="text-white/70 text-sm">Multi-Component Degradation Modeling • Adaptive Threshold System</p>
            </div>
          </div>

          {/* Model Description */}
          <div className="mb-8 bg-white/5 rounded-xl p-6 border border-thrusterOrange/20">
            <p className="text-white/90 leading-relaxed mb-4">
              Beyond battery-specific models, our framework provides a <span className="text-thrusterOrange font-semibold">generalized RUL prediction system</span> that can be adapted to any satellite component: solar panels, sensors, reaction wheels, or communication systems. The model learns degradation patterns from historical telemetry and predicts time-to-failure across diverse hardware.
            </p>
            <p className="text-white/80 text-sm">
              <span className="text-thrusterOrange font-semibold">Key Innovation:</span> Mission-flexible EoL thresholds can be adjusted based on satellite criticality and mission duration requirements.
            </p>
          </div>

          {/* Universal RUL Pipeline */}
          <div className="mb-8">
            <h4 className="text-xl font-orbitron font-bold text-neonCyan mb-4">Universal Prediction Pipeline</h4>
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-neonCyan">
                <div className="text-neonCyan text-sm font-bold mb-2">1. Data Ingestion</div>
                <p className="text-white/80 text-xs">Multi-sensor telemetry streams (voltage, temp, current, power)</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-successGreen">
                <div className="text-successGreen text-sm font-bold mb-2">2. Feature Extraction</div>
                <p className="text-white/80 text-xs">Sliding windows, trends, anomalies, statistical features</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-thrusterOrange">
                <div className="text-thrusterOrange text-sm font-bold mb-2">3. LSTM Encoding</div>
                <p className="text-white/80 text-xs">Temporal patterns captured in sequential embeddings</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-successGreen">
                <div className="text-successGreen text-sm font-bold mb-2">4. RUL Regression</div>
                <p className="text-white/80 text-xs">GBM predicts cycles/days until component failure</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-warningRed">
                <div className="text-warningRed text-sm font-bold mb-2">5. Mission Alert</div>
                <p className="text-white/80 text-xs">If RUL &lt; threshold → deploy servicing</p>
              </div>
            </div>
          </div>

          {/* Component Adaptability */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-orbitron font-bold text-neonCyan mb-4">Supported Components</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Batteries:</span> Li-ion degradation, capacity fade (80% EoL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-neonCyan font-semibold">Solar Panels:</span> Power output decay, radiation damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-thrusterOrange mt-1.5" />
                  <span><span className="text-thrusterOrange font-semibold">Reaction Wheels:</span> Bearing wear, torque degradation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Sensors:</span> Calibration drift, noise increase</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-neonCyan font-semibold">Transceivers:</span> Signal strength loss, bit error rate</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-orbitron font-bold text-neonCyan mb-4">Model Flexibility</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-thrusterOrange mt-1.5" />
                  <span><span className="text-thrusterOrange font-semibold">Adaptive Thresholds:</span> Adjust EoL from 70%-90% based on mission risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Transfer Learning:</span> Pre-trained weights adapt to new component types</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5" />
                  <span><span className="text-neonCyan font-semibold">Continuous Learning:</span> Model updates from in-orbit data streams</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-thrusterOrange mt-1.5" />
                  <span><span className="text-thrusterOrange font-semibold">Uncertainty Quantification:</span> Confidence intervals for RUL predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-successGreen mt-1.5" />
                  <span><span className="text-successGreen font-semibold">Multi-Component:</span> Predicts RUL for entire satellite subsystems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chart Placeholders for Generalized RUL */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-thrusterOrange/30">
              <div className="rounded-lg overflow-hidden border border-thrusterOrange/20">
                <img 
                  src="/images/rul-graph1.png" 
                  alt="Multi-component RUL comparison timeline" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-neonCyan/30">
              <div className="rounded-lg overflow-hidden border border-neonCyan/20">
                <img 
                  src="/images/rul-graph2.png" 
                  alt="RUL prediction confidence intervals" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
