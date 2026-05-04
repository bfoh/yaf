/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          ink: "#0A0807",
          charcoal: "#14110D",
          "charcoal-soft": "#1F1B16",
          gold: "#C5A059",
          "gold-light": "#D4B06A",
          "gold-deep": "#A6864A",
          cream: "#F5F1EA",
          warm: "#EFEAE0",
          "warm-deep": "#E5DFD2",
          "gray-warm": "#8A8275",
          "gray-soft": "#6B6458",
        },
        fontFamily: {
          display: ["'Playfair Display'", "serif"],
          body: ["'Manrope'", "system-ui", "sans-serif"],
        },
        letterSpacing: {
          widest: "0.2em",
          ultra: "0.32em",
        },
        transitionTimingFunction: {
          editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
          smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
      },
    },
    plugins: [],
  }
