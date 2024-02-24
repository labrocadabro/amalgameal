/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake']
  },
  plugins: [require('daisyui')]
}
