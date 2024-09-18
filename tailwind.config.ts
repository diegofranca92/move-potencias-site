import withMT from "@material-tailwind/react/utils/withMT";
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
        primary: "#76479C",
        secondary: '#3FC0B4',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        bounce: 'bounce 4s infinite',
        'pulse-color': 'pulseColor 8s ease-in-out infinite',
      },
      keyframes: {
        pulseColor: {
          '0%, 100%': { backgroundColor: '#76479C' }, // Cor inicial e final (roxo escuro)
          '50%': { backgroundColor: '#3FC0B4' }, // Cor intermediária (roxo claro)
        },
      },
    },
  },
  plugins: [],
};
export default withMT(config);
