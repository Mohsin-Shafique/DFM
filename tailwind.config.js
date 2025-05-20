/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3161',
          light: '#1A4374',
          dark: '#072547',
        },
        secondary: {
          DEFAULT: '#F0B323',
          light: '#F7CA56',
          dark: '#D99C10',
        },
        accent: {
          DEFAULT: '#C93A36',
          light: '#D85652',
          dark: '#A92E2A',
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(10, 49, 97, 0.8), rgba(10, 49, 97, 0.9)), url("/src/assets/images/wheat-field.jpg")',
        'about-pattern': 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/src/assets/images/wheat-pattern.jpg")',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'nav': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};