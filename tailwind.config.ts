import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F2EA",
        paper: "#FBF8F2",
        champagne: "#EDE3D0",
        cappuccino: "#A67C52",
        "cappuccino-deep": "#8A6440",
        gold: "#C6A769",
        "gold-deep": "#B08D4F",
        espresso: "#2A231C",
        "espresso-soft": "#4A4038",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
      },
    },
  },
  plugins: [],
};

export default config;
