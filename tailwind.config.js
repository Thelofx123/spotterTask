/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "move-gradient": {
          "0%": {
            backgroundPosition: "150%",
          },
          "100%": {
            backgroundPosition: "0%",
          },
        },
      },
      animation: {
        "gradient-move": "move-gradient 0.4s ease-in-out",
      },
      colors: {
        "primary-text": "#fffefe",
        "secondary-text": "#adadad",
        highlight: "#f9dd93",
        customGold: "#DE9B35",
        customLightGold: "#FFF3D4",
        customDarkGold: "#CCBA7C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: {
          min: "1024px",
          max: "1360px",
        },
        "2xl": {
          min: "1441px",
        },
        "3xl": {
          min: "2561px",
        },
        "4xl": {
          min: "3500px",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
