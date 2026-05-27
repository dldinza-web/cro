/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif:     ['DM Serif Display', 'Georgia', 'serif'],
        sans:      ['DM Sans', 'sans-serif'],
        mono:      ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cro: {
          cream:   '#F7F6F2',
          white:   '#FFFFFF',
          border:  '#E8E6E0',
          navy:    '#1A3A5C',
          navy2:   '#12243A',
          green:   '#2ECC9A',
          green2:  '#0F6E56',
          text:    '#1A1A2E',
          muted:   '#6B7A8D',
          light:   '#8A9AB0',
        },
      },
    },
  },
  plugins: [],
}
