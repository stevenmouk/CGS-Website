/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      secondary: "#F4F2ED",
      black: "black",
      white: "white",
      indigo: {
        900: "#434190",
        500: "#667EEA",
      },
    },
    fontFamily: {
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
    },
    extend: {
      backgroundImage: {
        underline1: "url('/dist/assets/Underline1.svg')",
        underline2: "url('/dist/assets/Underline2.svg')",
        underline3: "url('/dist/assets/Underline3.svg')",
        underline4: "url('/dist/assets/Underline4.svg')",
        highlight3: "url('/dist/assets/Highlight3.svg')",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
