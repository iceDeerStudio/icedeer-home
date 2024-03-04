/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                minor: 'var(--minor)',
                shadow: 'var(--shadow)',
                divider: 'var(--divider)',
                font: 'var(--font)',
                bg1: 'var(--bg-1)',
                bg2: 'var(--bg-2)',
            },
            padding: {
                lg: '4.5rem',
                md: '2rem',
                sm: '1rem',
                xs: '0.5rem',
            },
            margin: {
                lg: '4.5rem',
                md: '2rem',
                sm: '1rem',
                xs: '0.5rem',
            },
            screens: {
                mobile: { max: '640px' },
                pad: { max: '1024px' },
                padOnly: { min: '640px', max: '1024px' },
            },
        },
    },
    plugins: [],
}
