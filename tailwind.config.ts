/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          charcoal: "#1A1A1A",
          gold: "#C5A059",
          "gold-light": "#D4B06A",
          cream: "#FAFAFA",
          warm: "#F2F0ED",
          "gray-warm": "#8A8A8A",
        },
        fontFamily: {
          display: ["'Playfair Display'", "serif"],
          body: ["'Inter'", "sans-serif"],
        },
        letterSpacing: {
          widest: "0.2em",
        },
      },
    },
    plugins: [],
  }