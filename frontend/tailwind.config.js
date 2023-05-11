/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ligthsand: "#F6E0CA",
        sand: "#D8A477",
        darksand: "#C77A4F",
        blue: "#64A1B1",
      },
    },
  },
  plugins: [],
};
