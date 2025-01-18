/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mtc: {
          red: '#DC2626',
          darkred: '#991B1B',
          blue: '#1E3A8A',
          navy: '#0A0F1C',
          gold: '#FCD34D',
          dark: '#050914',
          darker: '#030509',
        },
      },
    },
  },
  plugins: [],
};