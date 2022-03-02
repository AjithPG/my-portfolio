module.exports = {
  content:["./pages/**/*.{html,js,jsx}","./components/**/*.{html,js,jsx}","./container/**/*.{html,js,jsx}","./public/**/*.{png,svg}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary':'#edf2f8',
      'secondary':'#313bac',
      'white':'#fff',
      'black':'#030303',
      'brown':'#46364a',
      'grey': '#6b7688',
      'grey-light':'#e4e4e4',
      'gray-dark': '#273444',
    },
    fontFamily: {
      primary: ['DM Sans', 'sans-serif'],
      secondary: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
