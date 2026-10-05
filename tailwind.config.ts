import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090a0b",
        foreground: "#f4f4f6",
        surface: "#111317",
        border: "#1f232b",
        muted: "#8b929e",
        accent: "#f59e0b",
      },
      letterSpacing: {
        widestHero: "0.3em",
      },
      borderRadius: {
        button: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
