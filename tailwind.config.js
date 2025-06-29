/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkbg: '#131313',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
