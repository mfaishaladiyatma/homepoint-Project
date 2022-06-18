// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     container: {
//       screens: {
//         sm: { 'max': '640px' },
//         'md': { 'max': '768px' },
//         'lg': { 'max': '1024px' },
//         'xl': { 'max': '1280px' },
//         '2xl': { 'max': '1440px' },
//         '3xl': { 'max': '1920px' },
//       },
//     },
//     extend: {
//       colors: {
//         'blue-pale': '#6999B8',
//         'light-blue-pale': "#DBE4EA",
//       },
//       fontFamily: {
//         'helvetica': ['Helvetica', 'sans-serif'], //untuk custom font
//         Inter: ['Inter', 'sans-serif'],
//       },
//       boxShadow: {
//         'shadow-custom-1': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
//       }
//     },
//   },
//   plugins: [],
// }


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
      '3xl': { 'max': '1920px' },
      '2xl': { 'max': '1440px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
    extend: {
      colors: {
        'blue-pale': '#6999B8',
        'light-blue-pale': "#DBE4EA",
        'white-transparent': 'rgba(255, 255, 255, 0.51)',

      },
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'], //untuk custom font
        Inter: ['Inter', 'sans-serif'],
      },
      // backgroundImage: {
      //   'backgroundRegisLogin': "url('./')",
      // }
      boxShadow: {
        'shadow-custom-1': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}