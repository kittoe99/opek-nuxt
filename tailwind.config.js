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
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'brand': '0 10px 25px -5px rgba(10, 138, 76, 0.2), 0 8px 10px -6px rgba(10, 138, 76, 0.1)',
        'brand-lg': '0 20px 40px -10px rgba(10, 138, 76, 0.3), 0 10px 20px -8px rgba(10, 138, 76, 0.15)',
      },
    },
  },
  plugins: [],
}
