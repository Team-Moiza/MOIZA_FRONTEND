import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F3FDFB',
          200: '#C6F7EC',
          300: '#8CEFD9',
          400: '#54E7C7',
          500: '#1ADFB4',
        },

        gray: {
          100: '#F2F4F6',
          200: '#E3E3E3',
          300: '#BFBFBF',
          400: '#9E9E9E',
          500: '#787878',
          600: '#5A5A5A',
        },

        sub: {
          yellow: '#FFF176',
          blue: '#4572FF',
          red: '#FF3B30',
        },

        black: '#04201A',
        white: '#FFFFFF',
      },
      // fontSize: {
      //   D1: [
      //     '72px',
      //     { lineHeight: '130%', fontWeight: 'bold', letterSpacing: '-1.5px' },
      //   ],
      // },
    },
  },
  plugins: [],
};

export default config;
