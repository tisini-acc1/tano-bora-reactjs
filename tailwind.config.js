/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#005b96",
        secondary: "#b3cde0",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          small: "2rem",
          large: "4rem",
        },
      },
    },
  },
  plugins: [],
};
