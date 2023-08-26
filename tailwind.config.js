/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        strikethrough: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },

        lineDisappear: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },

        moveup: {
          '0%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },

        moveright1: {
          '0%': { transform: 'translateX(-30px)', opacity: 0 },
          '100%': { transform: 'translateX(10px)', opacity: 1 },
        },

        moveright2: {
          '0%': { transform: 'translateX(-90px)' },
          '100%': { transform: 'translateX(20px)' },
        },
      },
      animation: {
        'move-up': 'moveup linear 1s',
        'strike-through': 'strikethrough linear 3s forwards',
        'line-disappear': 'lineDisappear ease-in-out 3s forwards',
        'move-right-1': 'moveright1 linear 1s',
        'move-right-2': 'moveright2 linear 1s',
      },
    },
  },
  plugins: [],
}
