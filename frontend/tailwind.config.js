module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepSpace: '#0A0E16',
        orbitBlue: '#1B2333',
        neonCyan: '#00FFFF',
        thrusterOrange: '#FF7E2E',
        softWhite: '#E6EDF7',
        mutedGray: '#8C9AAE',
        successGreen: '#39FF14',
        warningRed: '#FF5555'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif']
      }
    }
  },
  plugins: []
}
