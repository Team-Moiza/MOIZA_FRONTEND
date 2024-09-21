import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary100: '#F3FAFF',
        primary200: '#D1E9FF',
        primary300: '#97CFFF',
        primary400: '#47A9FF',

        secondary100: 'rgba(14,14,14,1)',
        secondary200: 'rgba(14,14,14,0.75)',
        secondary300: 'rgba(14,14,14,0.5)',
        secondary400: 'rgba(14,14,14,0.25)',

        tertiary100: 'rgba(75,77,237,1)',
        tertiary200: 'rgba(75,77,237,0.75)',
        tertiary300: 'rgba(75,77,237,0.5)',
        tertiary400: 'rgba(75,77,237,0.25)',

        success100: 'rgba(49,208,170,1)',
        success200: 'rgba(49,208,170,0.75)',
        success300: 'rgba(49,208,170,0.5)',
        success400: 'rgba(49,208,170,0.25)',

        actions100: 'rgba(255,59,48,1)',
        actions200: 'rgba(255,59,48,0.75)',
        actions300: 'rgba(255,59,48,0.5)',
        actions400: 'rgba(255,59,48,0.25)',

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
