
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        emeraldGreen: "#004721",
        safetyOrange: "#FF5F15",
        primaryColor: "#F1E3D3",
        textColor: "#4E545F",
        headingColor: "#181A1E",
      },
      
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
      
    },
  },
  plugins: [],
}

