/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A1A14',
          forest: '#0D2E24',
          'forest-light': '#144234',
          orange: '#EA580C',
          'orange-hover': '#C2410C',
          yellow: '#F59E0B',
          'yellow-light': '#FDE68A',
          cream: '#FDFBF7',
          'cream-alt': '#F7F3EA',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
