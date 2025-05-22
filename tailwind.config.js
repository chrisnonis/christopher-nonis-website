/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#4f46e5',
        accent: '#3b82f6',
        light: '#f3f4f6',
        dark: '#1f2937',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      opacity: {
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '95': '0.95',
      },
      backdropBlur: {
        'sm': '4px',
        'DEFAULT': '8px',
        'lg': '12px',
      },
    },
  },
  plugins: [],
} 