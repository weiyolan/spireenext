const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
      // 'primary': '#171B4D',
      // 'accent':'#4100A4',
      // 'white':'#fff',
      // 'green':'#00CC99',
      // 'blue':'#6600FF',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
    // },
    extend: {
      fontFamily: {
        sans: ['var(--font-worksans)', ...fontFamily.sans],
        quick: ['var(--font-quicksand)',...fontFamily.sans],
      },
      letterSpacing: {
        max: '.25em',
      },
      screens: {
        'xs':'480px',
        'mobl':'420px',
        'mobm':'350px',
      },
      colors: {
        'primary': '#FFFAEA',
        'accent':'#4100A4',
        'white':'#fff',
        'green':'#00CC99',
        'blue':'#6600FF',
        // 'pink': '#ff49db',
        // 'orange': '#ff7849',
        // 'green': '#13ce66',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        leftScroll : {
          // '0%': {transform: 'translateX(0%)'},
          '100%' : {transform: 'translateX(-100%)'},
        },
        rightScroll : {
          // '0%': {transform: 'translateX(0%)'},
          '100%' : {transform: 'translateX(100%)'},
        },
        outlinePulse: {
          '50%': {'outline-color': 'rgba(255,255,255,0.05)'},
        },
        borderPulse: {
          '50%': {'border-color': 'rgba(255,255,255,0.05)'},
        },
        blob: {
          '0%, 100%': {
            transform: 'scale(1) translate(0,0)',
            // opacity: 1,
          },
          '50%': {
            transform: 'scale(1.05) translate(0,0)',
            // opacity: 0.9,
          }
          // '66%': {
            // transform: 'scale(0.9) translateX(10%,-20%)',
            // opacity: 0.8,
          },
        blob2: {
          '0%, 100%': {
            transform: 'scale(1) translate(0,0)',
            // opacity: 1,
          },
          '33%': {
            transform: 'scale(1.1) translate(-10%,20%)',
            // opacity: 0.8,
          },
          '66%': {
            transform: 'scale(0.9) translateX(20%,10%)',
            // opacity: 0.9,
          },
        },

        toBack: {
          '0%':{
            transform: 'translateY(30%)',
          },
          '100%':{
            // 'zIndex':0,
            transform: 'translateY(0%)',
          },

        },
        toFront: {
          '0%':{
            // 'zIndex':0,
            transform: 'translateY(0%)',
          },
          '100%':{
            transform: 'translateY(80px)',
          },
        },
        toLeft: {
          '0%':{
            // 'zIndex':0,
            transform: 'translateX(0px)',
          },
          '100%':{
            transform: 'translateX(-4px)',
          },
        },        
        toRight: {
          '0%':{
            // 'zIndex':0,
            'zIndex':0,
            transform: 'translateX(0px)',
          },
          '100%':{
            'zIndex':3,
            transform: 'translateX(4px)',
          },
        },toRight2: {
          '0%':{
            // 'zIndex':0,
            'zIndex':2,
            transform: 'translateX(4px)',
          },
          '100%':{
            'zIndex':0,
            transform: 'translateX(0px)',
          },
        },
        toLeft: {
          '0%':{
            'zIndex':0,
            transform: 'translateX(0px)',
          },
          '100%':{
            'zIndex':3,
            transform: 'translateX(-4px)',
          },
        },toLeft2: {
          '0%':{
            'zIndex':2,
            transform: 'translateX(-4px)',
          },
          '100%':{
            'zIndex':0,
            transform: 'translateX(0px)',
          },
        },

      },
        },
      animation: {
        wiggle: 'wiggle 1s ease infinite',
        outlinePulse: 'outlinePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        borderPulse: 'borderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blob: 'blob 20s ease infinite',
        blob2: 'blob2 7s ease infinite',
        toFrontR: 'toFront 1s linear 1, toRight 1s cubic-bezier(0,30,1,30) 1',
        toRight: 'toRight 0.5s cubic-bezier(0,30,1,30) 1',
        toRight2: 'toRight2 0.5s cubic-bezier(0,-30,1,-30) 1',
        toLeft: 'toLeft 0.5s cubic-bezier(0,30,1,30) 1',
        toLeft2: 'toLeft2 0.5s cubic-bezier(0,-30,1,-30) 1',
        // toFrontR: 'toFrontR 1s cubic-bezier(0.4, 0, 0.2, 1) 1, ',
        // toBackL: 'toBackL 1s cubic-bezier(0.4, 0, 0.2, 1) 1',
        // toBackR: 'toBackR 1s cubic-bezier(0.4, 0, 0.2, 1) 1',
      },
      variants: {
        animation: ["motion-safe"]
      },  
    
  },
  plugins: [],
}