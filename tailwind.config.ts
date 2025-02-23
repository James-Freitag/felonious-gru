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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "minion-yellow": "#FFCC00",
        "electric-blue": "#0074E4",
        "crimson-red": "#D72638",
      },
      boxShadow: {
        "crimson-red-lg": "0 0 10px #D72638, 0 0 20px #D72638",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        luckiest: ["var(--font-luckiest-guy)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
