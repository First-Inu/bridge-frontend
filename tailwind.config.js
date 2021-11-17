module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      colors:{
        orange: {
          dark: '#4c3b17',
          light: '#f6893a',
          left: '#ffea51',
          right: 'ffcb46',
          top: '#e6a839'
        }
      }
    }
  },
  plugins: []
}
