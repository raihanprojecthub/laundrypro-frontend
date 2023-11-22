/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'login.html', 'register.html', './src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0c4a6e',
        secondary: '#082f49',
        dark: '#0f172a',
        light: '#cbd5e1',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

