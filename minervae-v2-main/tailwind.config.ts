import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1428",
        ivory: "#F4F0E6",
        gold: "#C8A24A",
        ink: "#111111"
      },
      fontFamily: {
        monument: ["Cinzel", "Times New Roman", "serif"],
        reading: ["EB Garamond", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
export default config;
