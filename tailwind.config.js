/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ampurple: '#A83351',
      },
    },
    screens: {
      sf: '300px',
      xx: '360px',
      xxs: '480px',
      xs: '620px',
      ss: '700px',
      sm: '800px',
      sd: '900px',
      md: '1060px',
      lg: '1200px',
      ll: '1300px',
      xl: '1500px',
      xxl: '1700px',
    },
  },
  plugins: [],
}
