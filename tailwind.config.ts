import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        'main': '#1b334b',
        'button': '#3598dc',
        'time': 'rgba(168, 220, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
export default config
