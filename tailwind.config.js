/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: '#2D1F5B',
        violet: '#8D76C7',
        lilac: '#CBB9EA',
        blush: '#EEE7FA',
        orchid: '#A78BDB',
        ink: '#2D2A3A',
        mist: '#F7F3FF',
        mint: '#EAF7EF',
        forest: '#063B16',
        botanical: '#1F7A32'
      },
      maxWidth: { container: '1240px' },
      fontFamily: { serif: ['var(--font-playfair)'], sans: ['var(--font-inter)'] },
      boxShadow: { soft: '0 18px 45px -24px rgba(45, 31, 91, 0.35)' }
    }
  },
  plugins: []
}
