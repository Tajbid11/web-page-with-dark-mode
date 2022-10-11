/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        top:['Permanent Marker']
      },
      colors:{
        "p-c": "var(--primary-color)",
        "s-c": "var(--secondary-color)",
        "t-c": "var(--third-color)",
        "f-c":"var(--fourth-color)",
      }
    },
  },
  plugins: [],
}