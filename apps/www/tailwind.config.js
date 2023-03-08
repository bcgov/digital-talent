/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bcgov: {
          blue: {
            ultralight: '#F5FAFF',
            light: '#38598A',
            DEFAULT: '#003366',
          },
          grey: {
            light: '#F1F1F1',
            dark: '#313131',
          },
        },
      },
    },
  },
  plugins: [],
};
