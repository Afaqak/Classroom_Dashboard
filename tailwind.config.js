/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors: {
        lmbg: "#f6f8ff",
        lmbgcontent: "#fefefe",
        lmtext: "#4b6a9b",
        lmtextalt: "#2b3442",
        lmshadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.2)",
        lmshadowinactive: "0px 16px 30px -10px rgba(0, 0, 0, 0.2)",
        lmiconbg: "brightness(100%)",
        btn: "#0079ff",
        btnhover: "#60abff",
        veryDark:"#141d2e",
        desaturatedDark: "#1e2b48"
      },
      fontFamily: {
        space: ['Space Mono', 'monospace'],
      }

    },
  },
  plugins: [],
}
