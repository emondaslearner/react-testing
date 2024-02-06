const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black_: "#000000",
        white_: "#ffffff",
        gray_: "gray",
        blue_: "#0000FF",
      },
    },
  },
  plugins: [nextui()],
};
