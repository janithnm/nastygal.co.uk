/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll':'loop-scroll 50s linear infinite',
        'move-down':'move-down 500ms linear',
        'move-up':'move-up 500ms linear',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to : { transform: 'translateX(-100%)' },
        },
        'move-down': {
          from: { transform: 'translateY(-100%)' },
          to : { transform: 'translateY(0)' },
        },
        'move-up': {
          from: { transform: 'translateY(0)' },
          to : { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

