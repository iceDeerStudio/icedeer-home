/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        secondaryBackground: 'rgb(var(--secondaryBackground) / <alpha-value>)',
        divider: 'rgb(var(--divider) / <alpha-value>)',
      },
      padding: {
        lg: '4rem',
        md: '2rem',
        sm: '1rem',
      },
      margin: {
        lg: '4rem',
        md: '2rem',
        sm: '1rem',
      },
    },
  },
  plugins: [],
}
