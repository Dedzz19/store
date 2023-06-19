/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        shad:'0px 6px 1px #f8f8f8;'
      },
      screens:{
        'xs':'300px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1270px',
        '2xl': '1536px',
        },
        colors:{
          brown:'#868686',
          dark:'#1a1a1a',
          light:'#f8f8f8',
        }
    },
  },
  plugins: [],
}

