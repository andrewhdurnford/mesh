/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      druk: ["Druk Wide Trial"],
      trip: ["Trip Sans"],
      DTWT: ["DTWT"],
      TSMR: ["TSMR"],
    },
    extend: {
      backgroundImage: {
        noisy: "url('/Noise Background.png')",
        gradients: "url('/Gradient Shapes.svg')",
      },
    },
  },
  plugins: [],
};
