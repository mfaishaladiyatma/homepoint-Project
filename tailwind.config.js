module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    container: {
      screens: {
        'sm': "600px",
        'md': "700px",
        'lg': "900px",
        'xl': "1200px",
        '2xl': "1400px",
        '3xl': "1800px",
      }
    },
    screens: {
      sm: {'max': '640px'},
      'md': { 'max': '768px'},
      'lg': { 'max': '1024px'},
      'xl': { 'max': '1280px'},
      '2xl': { 'max': '1440px'},
      '3xl': { 'max': '1920px'},
    },
    extend: {
      colors: {
        'blue-pale': '#6999B8',
        'light-blue-pale': "#DBE4EA",

      },
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'], //untuk custom font
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
