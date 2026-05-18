import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#063B16', botanical: '#1F7A32', mint: '#EAF7EF', pale: '#DCEFE3', cream: '#FAFAF5', charcoal: '#1E1E1E', muted: '#6F756F'
      },
      maxWidth: { container: '1240px' },
      fontFamily: { serif: ['var(--font-playfair)'], sans: ['var(--font-inter)'] }
    }
  },
  plugins: []
} satisfies Config;
