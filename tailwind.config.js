/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#172339",
        grey: "#49566D",
        cream: "#F3EDE7",
        "cream-white": "#FAF8F6",
        heliotrope: "#A060FF",
        "medium-purple": "#CB30E3",
        "texas-rose": "#FFA84E",
      },
    },
  },
  plugins: [],
};
