/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#14b8a6',
        secondary:'#64748b',
        dark: '#0f172a',
        linkedin:'#0A68C6',
        instagram:'#EE01CE',
        gmail:'#C14437',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

