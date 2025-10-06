'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-deepSpace to-orbitBlue border-t border-neonCyan/20 py-16">
      {/* Orbit path curve SVG decoration */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <svg width="100%" height="40" className="opacity-30">
            <path
              d="M0,20 Q250,0 500,20 T1000,20"
              stroke="#00FFFF"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="pt-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left: Project Info */}
          <div>
            <h3 className="text-xl font-orbitron font-bold text-neonCyan mb-3 uppercase">
              JADE
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Autonomous Satellite Servicing System
              <br />
              Predict • Navigate • Repair • Reuse
            </p>
          </div>

          {/* Center: GitHub */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-mutedGray text-sm mb-2">GitHub</p>
              <a
                href="https://github.com/dganjali/JADE-SpaceApps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-softWhite hover:text-neonCyan transition-colors text-sm"
              >
                github.com/dganjali/JADE-SpaceApps
              </a>
            </div>
          </div>

          {/* Right: Team LinkedIn */}
          <div className="text-center md:text-right">
            <p className="text-mutedGray text-sm mb-3">Team LinkedIn</p>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/daniel-ganjali-792bab30a/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-softWhite hover:text-neonCyan transition-colors text-sm"
              >
                Daniel Ganjali
              </a>
              <a
                href="https://www.linkedin.com/in/emerson-ni/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-softWhite hover:text-neonCyan transition-colors text-sm"
              >
                Emerson Ni
              </a>
              <a
                href="https://www.linkedin.com/in/arjwaraich/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-softWhite hover:text-neonCyan transition-colors text-sm"
              >
                Arjan Waraich
              </a>
              <a
                href="https://www.linkedin.com/in/justin-rui-801375355/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-softWhite hover:text-neonCyan transition-colors text-sm"
              >
                Justin Rui
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 pt-8 border-t border-neonCyan/20 text-center">
          <p className="text-mutedGray text-sm">
            Developed by <span className="text-neonCyan font-semibold">Team JADE</span> | NASA Space Apps Challenge 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
