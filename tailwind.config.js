module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      md: '640px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
