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
    },
  },
  plugins: [],
};
