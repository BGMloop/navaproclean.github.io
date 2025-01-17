/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0067FF",
          dark: "#0052CC",
          light: "#338DFF"
        },
        safety: {
          DEFAULT: "#FF5F15",
          dark: "#E54600",
          light: "#FF8851"
        },
        emerald: {
          DEFAULT: "#004721",
          dark: "#003518",
          light: "#006B32"
        },
        text: {
          heading: "#181A1E",
          body: "#4E545F",
          muted: "#6B7280"
        },
        accent: {
          yellow: "#FEB60D",
          purple: "#9771FF",
          blue: "#01B5C5"
        },
        background: {
          light: "#F7F9FC",
          dark: "#1A202C"
        }
      },
      boxShadow: {
        panel: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        card: "0px 10px 20px rgba(0, 71, 33, 0.1)",
        button: "0 4px 14px 0 rgba(0, 71, 33, 0.39)",
        'hover': '0 8px 20px rgba(0, 71, 33, 0.2)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(120deg, #1a8d5f 0%, #004721 100%)',
        'gradient-dark': 'linear-gradient(120deg, #1A202C 0%, #2D3748 100%)'
      }
    },
  },
  plugins: [],
}