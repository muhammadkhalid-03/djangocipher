import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom1: "#082f49",
        highlight: "#0c4a6e",
        navcover: "#042f2e",
        cyan: {
          light: '#0ea5e9',
          dark: '#0c4a6e'
        }
      },
      backgroundImage: {
        'cyan-gradient' : 'linear-gradient(to right, 0ea5e9, 0c4a6e)',
      },
    },
  },
  plugins: [],
};
export default config;
