import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          blue: { value: '#2d2da8' },
          black: { value: '#000000' },
          gray: { value: '#c4c4c4' },
          darkgray: { value: '#25262b' },
          lightgray: { value: '#ced4da' },
          white: { value: '#ffffff' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
