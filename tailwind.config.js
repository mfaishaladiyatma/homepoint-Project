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
      'md': {'min': '641px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1024px'},
      'xl': {'min': '1025px', 'max': '1280px'},
      '2xl': {'min': '1281px', 'max': '1440px'},
      '3xl': {'min': '1441px', 'max': '1920px'},
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
