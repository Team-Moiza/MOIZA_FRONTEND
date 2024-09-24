import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F3FAFF',
          200: '#D1E9FF',
          300: '#97CFFF',
          400: '#47A9FF',
        },

        secondary: {
          100: 'rgba(14,14,14,0.25)',
          200: 'rgba(14,14,14,0.5)',
          300: 'rgba(14,14,14,0.75)',
          400: 'rgba(14,14,14,1)',
        },

        tertiary: {
          100: 'rgba(75,77,237,0.25)',
          200: 'rgba(75,77,237,0.5)',
          300: 'rgba(75,77,237,0.75)',
          400: 'rgba(75,77,237,1)',
        },

        success: {
          100: 'rgba(49,208,170,0.25)',
          200: 'rgba(49,208,170,0.5)',
          300: 'rgba(49,208,170,0.75)',
          400: 'rgba(49,208,170,1)',
        },

        actions: {
          100: 'rgba(255,59,48,0.25)',
          200: 'rgba(255,59,48,0.5)',
          300: 'rgba(255,59,48,0.75)',
          400: 'rgba(255,59,48,1)',
        },

        text: '#121212',

        subText1: '#737373',
        subText2: '#8C95A0',

        accent: '#EEF2F5',

        background: '#FAFAFA',
      },
      fontSize: {
        D1: [
          '72px',
          { lineHeight: '130%', fontWeight: 'bold', letterSpacing: '-1.5px' },
        ],
        D2: [
          '60px',
          { lineHeight: '130%', fontWeight: 'bold', letterSpacing: '-0.5px' },
        ],
        D3: [
          '48px',
          { lineHeight: '130%', fontWeight: 'bold', letterSpacing: '0' },
        ],
        H1: [
          '36px',
          { lineHeight: '140%', fontWeight: 'bold', letterSpacing: '0.25px' },
        ],
        H2: [
          '28px',
          { lineHeight: '140%', fontWeight: 'bold', letterSpacing: '0' },
        ],
        H3: [
          '24px',
          {
            lineHeight: '140%',
            fontWeight: '600',
            letterSpacing: '0.15px',
          },
        ],
        H4: [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: '600',
            letterSpacing: '0.15px',
          },
        ],
        H5: [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '600',
            letterSpacing: '0.15px',
          },
        ],
        p1: [
          '18px',
          {
            lineHeight: '160%',
            fontWeight: 'normal',
            letterSpacing: '-0.15px',
          },
        ],
        p2: [
          '16px',
          {
            lineHeight: '160%',
            fontWeight: 'normal',
            letterSpacing: '-0.15px',
          },
        ],
        p3: [
          '14px',
          { lineHeight: '160%', fontWeight: 'normal', letterSpacing: '-0.1px' },
        ],
        context: [
          '16px',
          { lineHeight: '130%', fontWeight: '500', letterSpacing: '0' },
        ],
        caption: [
          '12px',
          { lineHeight: '140%', fontWeight: 'normal', letterSpacing: '0' },
        ],
        code: [
          '16px',
          { lineHeight: '130%', fontWeight: 'normal', letterSpacing: '0' },
        ],
        btn1: [
          '18px',
          { lineHeight: '130%', fontWeight: '600', letterSpacing: '0' },
        ],
        btn2: [
          '16px',
          { lineHeight: '130%', fontWeight: '500', letterSpacing: '0' },
        ],
        btn3: [
          '14px',
          { lineHeight: '130%', fontWeight: '500', letterSpacing: '0' },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
