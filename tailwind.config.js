module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    flex: {
      '4': '1 0 21%',
    },
    inset: {
      'one': '23.75%',
      'two': '53%',
    },
    
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
