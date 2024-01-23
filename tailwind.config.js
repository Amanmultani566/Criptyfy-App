/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },
    colors: {
      gray: { 100: "#7077A1", 200: "#424769", 300: "#2D3250" },
      white: "#fff",
      cyan: "#F6B17A",
      red: "#d6436e",
      green: "#25da72",
    },
    fontSize:{
      sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"
    }
  },
  plugins: [require("tailwind-scrollbar")],
}

