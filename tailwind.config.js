/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0092E0",
        secondary: "#8AB6D6",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          small: "2rem",
          large: "4rem",
        },
      },
      fontFamily: {
        handrawn: ["'Delicious Handrawn'", "sans-serif"],
        shafarik: ["'Shafarik'", "serif"],
      },
    },
  },
  plugins: [],
};
