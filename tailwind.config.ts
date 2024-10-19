import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        'space-2xs': '4px',
        'space-lg': '24px',
        'space-sm': '12px',
      },
      animation: {
        'spin-slow': "spin 3s linear infinite",
      }
    },
  },
  plugins: [],
};
export default config;
