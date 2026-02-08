/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F2A44',
          800: '#1A3A54',
        },
        teal: {
          500: '#2FA4A9',
          400: '#4EBEC4',
          600: '#247F84',
        },
        gold: {
          500: '#F2B705',
          400: '#F5C422',
          600: '#D49905',
        },
        gray: {
          50: '#F7F9FB',
          100: '#F0F4F8',
          200: '#E5E7EB',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2FA4A9 0%, #0F2A44 100%)',
      },
    },
  },
  plugins: [],
};
