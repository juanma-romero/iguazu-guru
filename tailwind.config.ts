import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
                        'iguazu-dark': '#1B3232',
                        'iguazu-green': '#3D9676',
                        'iguazu-teal': '#386565',
                        'iguazu-accent': '#E74D4D',
                        'iguazu-light': '#F5EADD',
      },
      screens: {
        'xs': '475px' 
      }
    },
  },
  plugins: [],
} satisfies Config;
