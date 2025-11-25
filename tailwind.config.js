/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE4300",
        secondary: "#868686",
        softGray: "#F0F0F0",
        mistGray: "#D7DCDD",
        gray: "#C0D8E0",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
