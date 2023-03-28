module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
      'pfp': '0 0 8px 8px #052033 inset'
    }
    },
    flex: {
      '4': '1 0 21%',
    },
    inset: {
      'one': '10%',
      'two': '37.5%',
    },
    fontFamily: {
      'custom': ['ABeeZee']
    },
    minWidth: {
      'project': '350px',
    },
    aspectRatio: {
      '5/3': '5 / 3',
      '1.9/1': '1.9 / 1'
    },
    
    
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
