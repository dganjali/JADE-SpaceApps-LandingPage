'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Video } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function MediaShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.media-card', {
        scrollTrigger: {
          trigger: '.media-card',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const mediaItems = [
    {
      title: 'Robotic Arm in Action',
      description: '3-DOF arm demonstrating gripping and manipulation capabilities',
      placeholder: 'ARM_DEMO',
    },
    {
      title: 'Computer Vision Detection',
      description: 'YOLO-based satellite detection and tracking system',
      placeholder: 'CV_DEMO',
    },
    {
      title: 'Modular Screwdriver System',
      description: 'Tool swapping mechanism for various repair tasks',
      placeholder: 'TOOL_DEMO',
    },
    {
      title: 'Propulsion Simulation',
      description: 'Jetty Gazebo simulation of orbital maneuvering',
      placeholder: 'SIM_DEMO',
    },
    {
      title: 'Hardware Testing',
      description: 'Servo motor testing and calibration process',
      placeholder: 'HARDWARE_TEST',
    },
    {
      title: 'Assembly Process',
      description: 'End-to-end build and integration workflow',
      placeholder: 'ASSEMBLY',
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-center text-deepSpace mb-6">
          Hardware & Software Demonstrations
        </h2>
        <p className="text-center text-mutedGray text-lg mb-16 max-w-3xl mx-auto">
          Real-world testing and validation of our satellite servicing system components
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              className="media-card bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-neonCyan transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Video/Image placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center cursor-pointer overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Video className="w-16 h-16 text-gray-400 mb-3" />
                  <span className="text-sm text-gray-500 font-mono">{item.placeholder}</span>
                </div>
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-16 h-16 rounded-full bg-neonCyan/90 flex items-center justify-center animate-pulse">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-inter font-bold text-deepSpace mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Upload your demonstration videos/images to replace placeholders
          </p>
        </div>
      </div>
    </section>
  )
}
