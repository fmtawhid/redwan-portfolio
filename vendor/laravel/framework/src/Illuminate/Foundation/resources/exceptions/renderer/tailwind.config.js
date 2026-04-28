const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
    ],

    theme: {
        extend: {
            colors: {
                background: '#0f172a',
                foreground: '#ffffff',
                border: '#1f2937',
                primary: '#f97316',
                secondary: '#1e293b',
                muted: '#334155',
                accent: '#f97316',
            },

            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [],
    
};