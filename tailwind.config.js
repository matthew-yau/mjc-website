/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      writingMode: {
        vertical: "vertical-rl",
        horizontal: "horizontal-tb",
      },
      fontFamily: {
        mplus: ['"M PLUS 1p"', "sans-serif"],
        cute: ['"M PLUS Rounded 1c"', "sans-serif"],
        enCute: ['"Quicksand"', "sans-serif"],
        jpCute: ['"Zen Maru Gothic"', "sans-serif"],
      },
      keyframes: {
        slideUpFade: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideUpFade: "slideUpFade 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
