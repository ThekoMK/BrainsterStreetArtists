/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#FCEBD5',
        backgroundDark: '#A16A5E',
        backgroundLight2: "#EDD5BB",
        cardBackground: '#E09686',
        cardBackground2: '#D44C2E',
        textButton: '#5A5A5A',
      },
      fontFamily: {
        reenie: ['Reenie Beanie', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        scrollReverse: 'scrollReverse 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 3))' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(calc(-250px * 3))' },
          '100%': { transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [],
}

