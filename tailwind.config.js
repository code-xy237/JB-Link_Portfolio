/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#040608',
          secondary: '#080c10',
          tertiary: '#0d1117',
          card: '#0a0f14',
          glass: 'rgba(10, 15, 22, 0.8)',
        },
        accent: {
          cyan: '#00d4ff',
          blue: '#0066ff',
          teal: '#00b8a9',
          silver: '#a8b2c1',
          dim: '#3d5166',
        },
        text: {
          primary: '#e8edf2',
          secondary: '#8899aa',
          muted: '#4a5a6b',
          accent: '#00d4ff',
        },
        border: {
          default: 'rgba(255,255,255,0.06)',
          accent: 'rgba(0,212,255,0.2)',
          hover: 'rgba(0,212,255,0.4)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #001a2e 0px, transparent 50%), radial-gradient(at 80% 0%, #000d1a 0px, transparent 50%), radial-gradient(at 0% 50%, #001219 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff33' },
          '100%': { boxShadow: '0 0 20px #00d4ff66, 0 0 40px #00d4ff22' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
