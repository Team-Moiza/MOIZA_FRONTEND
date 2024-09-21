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

        subText: '#737373',

        accent: '#EEF2F5',

        background: '#FAFAFA',
      },
    },
  },
  plugins: [],
};

export default config;
