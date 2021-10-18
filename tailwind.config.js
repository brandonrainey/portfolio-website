module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    flex: {
      '4': '1 0 21%',
    },
    inset: {
      'one': '10%',
      'two': '37.5%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
