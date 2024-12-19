/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s infinite",
      },
      colors: {
        bluish: "#4c73ff",
        purpish: "#4c4aff",
        indigo: {
          500: "#6366F1",
        },
        purple: {
          500: "#A78BFA",
        },
        pink: {
          500: "#F472B6",
        },
      },
    },
  },
  plugins: [],
};
