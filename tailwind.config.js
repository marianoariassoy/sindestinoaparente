/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['nimbus-sans', 'sans-serif'],
        condensed: ['nimbus-sans-condensed', 'sans-serif']
      },
      colors: {
        primary: '#eaf88d',
        secondary: '#ed6e58',
        tertiary: '#82f77f',
        quaternary: '#4ca3cf'
      }
    }
  },
  plugins: []
}
