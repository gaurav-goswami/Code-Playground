/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inconsolata : 'Inconsolata, monospace',
        lato : 'Lato, sans-serif'
      }
    },
  },
  plugins: [],
}