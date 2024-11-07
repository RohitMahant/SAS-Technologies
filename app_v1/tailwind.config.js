/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0096C7",      
        secondary: "#90E0EF",    
        textColor: "#03045E",    
        tertiary: "#90E0EF",     
      },
      fontFamily:{
        mergeOne: "var(--font-merge-one)",
      }
    },
  },
  plugins: [],
};
