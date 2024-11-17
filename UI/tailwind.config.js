/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluish: "#4c73ff",
        purpish: "#4c4aff",
      },
    },
  },
  plugins: [],
};
