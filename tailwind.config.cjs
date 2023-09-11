/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
      ],
    },
    fontSize: {
      sm: ['12px', '14px'],
      base: ['14px', '16px'],
      lg: ['16px', '20px'],
      xl: ['18px', '24px'],
      '2xl': ['24px', '28px'],
      '3xl': ['32px', '38px']
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: { padding: 0, margin: 0 },
            ul: {
              'list-style-type': 'none',
            },
          },
        },
      },
      colors: {
        'dark-gray': '#949494',
        gray: {
          50: '#f7f7f8',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#BBBBBB',
          400: '#acacbe',
          500: '#8e8ea0',
          600: '#4b5563',
          700: '#40414f',
          800: '#343541',
          808: '#9098A0',
          900: '#949494',
        },
        gary_new: {
          0: '#F5F5F5',
          1: '#EFEFEF',
          2: '#000000',
          3: '#BBB',
          4: '#9098A0'
        },
        primary: '#5FD1B2',
        logStart: '#4EBE96',
        logEnd: '#A4DA5E',
        homeMain: '#68ECCD',
        btnStart: '#83F9DD',
        btnEnd: '#79C6FD',
        sendBtn:'#B1FFEC',
        textHig:'#51C9FD',
      },
      borderRadius: {

      },
      boxShadow: {
        'text-area': '0px 1px 7px 2px rgba(0, 0, 0, 0.10)',
      },
      spacing: {
        4.5: '1.125rem',
        35: '8.75rem',
        'sidebar': '260px'
      },
      backgroundImage: {
        'HomeBG': "url('@src/assets/background.png')",
        'btn': 'linear-gradient(190.12deg, #66CCC6 17.74%, #75E3C8 95.88%);'
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
  darkMode: 'class',
};
