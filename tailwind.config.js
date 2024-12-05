/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "searchtires": "url('./src/Assets/SOne_index_bg_searchtype.jpg')",
        "banner": "url('./src/Assets/SOne_index_banner.jpg')",
      },
      fontFamily: {
        supermarket: "Conv_supermarket",
      },
      colors: {
        main: "#f05a28",
        black: "#252525",
        dark: "#1b1b1b",
      },
      borderColor: {
        main: "rgb(240, 90, 40)",
        divider: "#f9c977"
      },
      fontSize: {
        10: "10px",
        xs: "13px",
        xl: "21px",
      },
      height: {
        4: "15px",
        6: "25px",
        9: "35px",
        64: "264px",
        300: "300px"
      },
      width: {
        6: "25px",
        64: "240px",
      },
      spacing: {
        1: "5px",
      },
      gap: {
        2: "10px",
      },
    },
  },
  plugins: [],
};
