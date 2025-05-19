/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-light": "#f3f4f6",
        neutral: "#6b7280",
        "neutral-dark": "#374151",
      },
    },
  },
  plugins: [],
};
