import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#BB46C4',
        secundary: '#502b60',
      },
      backgroundColor: {
        primary: '#BB46C4',
        secundary: '#502b60',
      },
      borderColor: {
        primary: '#BB46C4',
        secundary: '#502b60',
      },
      fill: {
        primary: '#BB46C4',
        secundary: '#502b60',
      },
    },
  },
  plugins: [],
};
export default config;
