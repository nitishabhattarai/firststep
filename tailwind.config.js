/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        'primary-color' : '#d8ad45',
        'secondary-color' : '#53320d',
        'color-1': '#f2f2f2'
      }
    },
  },
  plugins: [],
}

