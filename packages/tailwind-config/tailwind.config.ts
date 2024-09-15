import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        '': '',
      },
    },
  },
  plugins: [],
};

export default config;
