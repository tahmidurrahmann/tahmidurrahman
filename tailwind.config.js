/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', 'sans- serif'",
        raleway: "'Raleway', 'sans- serif'",
        permanent: "'Permanent Marker', 'cursive'",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
