import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-main-theme": "aquamarine",
        "color-second-theme": "dodgerblue",
      },
    },
  },
  plugins: [],
};
export default config;
