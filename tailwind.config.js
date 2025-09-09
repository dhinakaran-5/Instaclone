/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoint between md and lg
        mdlg: { min: "1024px", max: "1421px" }, 
      },
    },
  },
  plugins: [],
}
