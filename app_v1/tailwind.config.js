/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      animation: {
        "infinite-scroll-mobile": "infinite-scroll 5s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#F9F6EE",      
        secondary: "#90E0EF",    
        textColor: "#03045E",    
        tertiary: "#72EFDD",     
      },
      fontFamily:{
        mergeOne: "var(--font-merge-one)",
        cocoBold: "var(--font-coco-bold)",
        cocoRegular: "var(--font-coco-regular)",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
