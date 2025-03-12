/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
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
