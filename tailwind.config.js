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
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    colors: {
      "dark-blue": "#172339",
      grey: "#49566D",
      cream: "#F3EDE7",
      "cream-white": "#FAF8F6",
      heliotrope: "#A060FF",
      "medium-purple": "#CB30E3",
      "texas-rose": "#FFA84E",
    },
    fontSize: {
      xl: ["4.5rem", { lineHeight: "4.875rem", letterSpacing: "-1px" }],
      lg: ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.5px" }],
      md: ["1.25rem", { lineHeight: "2rem", letterSpacing: "-0.2px" }],
      sm: ["1rem", { lineHeight: "1.625rem", letterSpacing: "2.5px" }],
      quote: ["1.25rem", { lineHeight: "2.1875" }],
      body: ["1.125rem", { lineHeight: "2rem" }],
      footer: ["0.9375", { lineHeight: "2rem" }],
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },

    extend: {
      backgroundImage: {
        // https://cssgradient.io/
        "theme-gradient":
          "linear-gradient(135deg, rgba(160,96,255,1) 0%, rgba(203,48,227,1) 49%, rgba(255,168,78,1) 100%)",
        "hero-section": "url('/image-hero-portrait.png')",
        "pattern-curved-line-1": "url('/pattern-curved-line-1.svg')",
        "pattern-blur": "url('/pattern-blur.svg')",
      },
    },
  },
  plugins: [],
};
