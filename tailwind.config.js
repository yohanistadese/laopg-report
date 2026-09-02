import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5fb',
          100: '#d6e8f4',
          200: '#add1e9',
          300: '#84badd',
          400: '#5ba3d2',
          500: '#1c6ea4',
          600: '#0b3d63',
          700: '#092f4d',
          800: '#072137',
          900: '#041421',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
