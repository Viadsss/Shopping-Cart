/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        integral: ["Integral", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        satoshiBold: ["SatoshiBold", "sans-serif"],
      },
      keyframes: {
        appear: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        appear: "appear ease 0.5s",
      },
    },
  },
  plugins: [],
};
