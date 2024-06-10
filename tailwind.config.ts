import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      smOnly: { max: '767px' },
      md: '768px',
      mdOnly: { min: '768px', max: '1279px' },
      xl: '1280px',
      notXL: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '34px',
          xl: '2rem',
        },
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)'],
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        light: ['14px', '1.30'],
        medium: ['16px', '1.40'],
        lightLarge: ['18px', '1.50'],
        large: ['20px', '1.30'],
        extraLarge: ['24px', '1.10'],
      },
      colors: {
        blueDefault: '#1A597C',
        blue32: 'rgba(26, 89, 124, 0.32)',
        lightBlue: '#E7F5F9',
        darkBlue: '#022C43',
        additionalBlue: '#10425D',
        white: '#FFFFFF',
        white32: 'rgba(255, 255, 255, 0.32)',
        white48: 'rgba(255, 255, 255, 0.48)',
        dark: '#4D4D4D',
        accentLightOrange: '#FF8C6C',
        accentDefaultOrange: '#FF6033',
        accentDarkOrange: '#FF4F1E',
        darkGreen: '#154343',
        accentGreen: '#18D790',
        grey01: '#D3D3D3',
        grey02: '#9D9D9D',
        red: '#DD4B4B',
        backdrop: 'rgba(0, 0, 0, 0.65)',
        greyBorder: 'rgba(21, 67, 67, 0.40)',
        orangeBorder: 'rgba(255, 96, 51, 0.4)',
      },
      boxShadow: {
        'bottom-md':
          '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
};
export default config;
