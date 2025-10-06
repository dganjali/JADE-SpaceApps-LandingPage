'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import FloatingBadge from './FloatingBadge'
import StatusBadge from './StatusBadge'

// Earth component with rotation and orbit lines
function Earth() {
  const earthRef = useRef<THREE.Mesh>(null)
  const orbitLinesRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0003
    }
    if (orbitLinesRef.current) {
      orbitLinesRef.current.rotation.y += 0.0002
    }
  })

  // Create orbit lines
  const orbitLines = []
  for (let i = 0; i < 3; i++) {
    const radius = 2.5 + i * 0.4
    const points = []
    for (let j = 0; j <= 64; j++) {
      const angle = (j / 64) * Math.PI * 2
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.3) * 0.2,
          Math.sin(angle) * radius
        )
      )
    }
    orbitLines.push(points)
  }

  return (
    <group position={[0, -1, -3]}>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#0D2A4E"
          metalness={0.1}
          roughness={0.7}
          emissive="#001a33"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbit lines */}
      <group ref={orbitLinesRef}>
        {orbitLines.map((points, i) => (
          <line key={i}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attach="attributes-position"
                count={points.length}
                array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              attach="material"
              color="#00FFFF"
              transparent
              opacity={0.2}
            />
          </line>
        ))}
      </group>

      {/* Satellite constellation - orbiting satellites */}
      <OrbitingSatellites />
    </group>
  )
}

// Orbiting Satellites Component
function OrbitingSatellites() {
  const satellitesRef = useRef<THREE.Group[]>([])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    satellitesRef.current.forEach((satellite, i) => {
      if (satellite) {
        const orbitSpeed = 0.1 + (i % 3) * 0.05 // Different speeds per orbit
        const angle = time * orbitSpeed + (i / 80) * Math.PI * 2
        const orbitRadius = 2.6 + (i % 3) * 0.3
        const orbitTilt = Math.sin(i * 0.7) * 0.5
        
        satellite.position.set(
          Math.cos(angle) * orbitRadius,
          orbitTilt + Math.sin(angle * 2) * 0.1, // Add subtle vertical oscillation
          Math.sin(angle) * orbitRadius
        )
        
        // Rotate satellites as they orbit
        satellite.rotation.y = angle
      }
    })
  })

  return (
    <group>
      {Array.from({ length: 80 }).map((_, i) => (
        <group
          key={i}
          ref={(el) => {
            if (el) satellitesRef.current[i] = el
          }}
        >
          <mesh>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial 
              color="#00FFFF" 
              emissive="#00FFFF" 
              emissiveIntensity={0.8}
              transparent
              opacity={0.9}
            />
          </mesh>
          {/* Add small trail line behind each satellite */}
          <mesh position={[-0.05, 0, 0]}>
            <boxGeometry args={[0.03, 0.005, 0.005]} />
            <meshBasicMaterial color="#00FFFF" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// Robot silhouette with slow rotation
function RobotSilhouette() {
  const robotRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (robotRef.current) {
      robotRef.current.rotation.y += 0.002
      // Removed floating animation for stability
    }
  })

  return (
    <group ref={robotRef} position={[3, 0.5, -1]}>
      {/* Main body */}
      <mesh>
        <boxGeometry args={[0.6, 0.8, 0.4]} />
        <meshStandardMaterial
          color="#182743"
          metalness={0.8}
          roughness={0.2}
          emissive="#00FFFF"
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* Robotic arm */}
      <mesh position={[0.5, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.15, 0.15]} />
        <meshStandardMaterial color="#1B2333" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Gripper */}
      <mesh position={[0.9, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

// Particle field for orbital dust
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 200

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0001
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00FFFF" transparent opacity={0.3} />
    </points>
  )
}

export default function Hero(): JSX.Element {
  const titleRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const keywordsRef = useRef<HTMLDivElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [subtitleText, setSubtitleText] = useState('')
  const fullSubtitle = 'Predict • Navigate • Repair • Reuse'

  useEffect(() => {
    // Title letter-by-letter animation
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char')
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.6, ease: 'power2.out' }
      )
    }

    // Typing effect for subtitle
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullSubtitle.length) {
        setSubtitleText(fullSubtitle.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    // Subtitle fade-in
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.5, ease: 'power2.out' }
      )
    }

    return () => clearInterval(typingInterval)

    // Keywords sequential pulse
    if (keywordsRef.current) {
      const keywords = keywordsRef.current.querySelectorAll('.keyword')
      gsap.fromTo(
        keywords,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.5,
          delay: 1,
          ease: 'back.out(1.7)',
        }
      )

      // Continuous pulse animation
      gsap.to(keywords, {
        opacity: 0.7,
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'sine.inOut',
      })
    }
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0A0E16] to-[#111A27]">
      <FloatingBadge />
      {/* Cyan radial glow behind title */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)',
          transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
        }}
      />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Lighting setup - orbit-blue hue */}
        <ambientLight intensity={0.2} color="#1B2333" />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#00FFFF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#182743" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#00FFFF" distance={10} />

        <Suspense fallback={null}>
          <Earth />
          <ParticleField />
        </Suspense>
      </Canvas>

      {/* Content overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="text-center px-6 max-w-5xl">
          {/* Main Title - Inter SemiBold 72px */}
          <div ref={titleRef} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-inter font-semibold leading-tight text-white">
              {Array.from('Autonomous Satellite Servicing System').map((c, i) => (
                <span key={i} className="char inline-block">
                  {c === ' ' ? '\u00A0' : c}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle - Inter Medium 28px with typing effect */}
          <p
            ref={subtitleRef}
            className="text-2xl font-inter font-medium text-white/90 mb-8 min-h-[2rem]"
          >
            {subtitleText}
            <span className="inline-block w-0.5 h-6 bg-neonCyan ml-1 animate-pulse" />
          </p>

          {/* Keywords - Orbitron Bold 24px with pulse */}
          <div ref={keywordsRef} className="flex flex-wrap gap-4 justify-center text-xl font-orbitron font-bold uppercase mb-8">
            <span className="keyword px-6 py-3 border-2 border-neonCyan text-neonCyan rounded-xl neon backdrop-blur-sm bg-neonCyan/5 hover:bg-neonCyan hover:text-deepSpace hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all cursor-pointer">
              PREDICT
            </span>
            <span className="keyword px-6 py-3 border-2 border-neonCyan text-neonCyan rounded-xl neon backdrop-blur-sm bg-neonCyan/5 hover:bg-neonCyan hover:text-deepSpace hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all cursor-pointer">
              NAVIGATE
            </span>
            <span className="keyword px-6 py-3 border-2 border-neonCyan text-neonCyan rounded-xl neon backdrop-blur-sm bg-neonCyan/5 hover:bg-neonCyan hover:text-deepSpace hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all cursor-pointer">
              REPAIR
            </span>
            <span className="keyword px-6 py-3 border-2 border-neonCyan text-neonCyan rounded-xl neon backdrop-blur-sm bg-neonCyan/5 hover:bg-neonCyan hover:text-deepSpace hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all cursor-pointer">
              REUSE
            </span>
          </div>

          {/* Live Status Indicators */}
          <div className="flex flex-wrap gap-4 justify-center">
            <StatusBadge status="active" text="SYSTEM ONLINE" />
            <StatusBadge status="success" text="ALL CHECKS PASSED" />
            <StatusBadge status="warning" text="DEMO MODE" />
          </div>
        </div>
      </div>

    </section>
  )
}
