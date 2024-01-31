/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'alpha-6': '#00934DA4',
        'alpha-8': '#0193374B',
        'alpha-4': '#FFBB0148',
        'alpha-10': '#FFB301E5',
        'alpha-7': '#E4010139',
        'alpha-11': '#BB0007D5',
        'range-slider': 'rgba(255, 255, 255, 0.00)',
        'neutral-12': '#EDEEF0',
        'neutral-11': '#ADB1B8',
        'card-good-color': 'rgba(1, 147, 55, 0.29)',
        'card-non-critical-color': 'rgba(68, 56, 21, 0.90)',
      },
      backgroundColor: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      backgroundImage: {
        card: 'radial-gradient(34.84% 34.68% at 50% 50%, rgba(30, 30, 30, 0.95) 0%, #1D1D1E 100%)',
        dashboard:
          'radial-gradient(38.35% 46.37% at 38.58% 24.11%, rgba(214, 163, 92, 0.24) 0%, rgba(214, 163, 92, 0.00) 100%)',
        'yellow-gradient': 'linear-gradient(90deg, #DDB527 0%, #B88522 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
