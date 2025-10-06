/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e9fbf1',
          100: '#c9f5de',
          200: '#95eac0',
          300: '#5adf9f',
          400: '#25d07f',
          500: '#0ea05a',
          600: '#0a8a4c',
          700: '#066f3e',
          800: '#055832',
          900: '#034428',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        'DEFAULT': '2px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}
