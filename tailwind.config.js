/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my_bg_image': "url('../../public/Background.png')",
      },
      fontFamily: {
        'oswald': ['oswald', 'ui-serif', 'Georgia'],
        'georgia': ['Georgia', 'poppins', 'ui-serif'],
        'poppins': ['poppins', 'Georgia', 'oswald'] 
      },
      colors: {
        'bg-primary': '#DEE0ED',
        'primary': '#19097E',
        'blue-main': '#0A125C',
        'red-main': '#BB1919'
      }
    },
  },
  plugins: [],
}
