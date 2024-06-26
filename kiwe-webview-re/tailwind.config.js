/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#58C047',
        secondary: '#9BD23C',
        chat: '#B4DD6D',
        cardPrimary: '#FFFFD8',
        cardSecondary: '#EDEDED',
        cardTertiary: '#DADADA',
      },
    },
  },
  plugins: [],
}
