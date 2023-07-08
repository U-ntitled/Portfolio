/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
        md:"800px",
        lg:"1000px",
        'xxl':"1340px",
        dll:"500px"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
           Exo2:['Exo2']
      },
      backgroundColor:{
           bgprimary:'#0A0E26',
           btnprimary:'#B73BF0'
      },
      

    
      screens: {
        // 'lg': '843px',
         'xlg':'1400px',
        // => @media (min-width: 843px) { ... }
          'lgm':'1275px',
          'lgl': '1100px',
           
        'tg': '800px',
        'xxs': '369px'
      }
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
