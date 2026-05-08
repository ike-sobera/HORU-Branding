/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d2738", // New Deep Blue
        accent: {
          DEFAULT: "#c7ad6d", // New Gold
          dark: "#b39b62",
        },
        ice: {
          DEFAULT: "#e8e8ea", // New Ice Gray
          light: "rgba(232, 232, 234, 0.1)",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
