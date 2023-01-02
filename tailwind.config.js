/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'snow': '#FFFCFC',
                'black-fogra39': '#040404',
                'midnight-green-eagle-green': '#13505B',
                'teal-blue': '#0C7489',
                'viridian-green': '#119DA4',
            },
        }
    },
    plugins: [],
}
