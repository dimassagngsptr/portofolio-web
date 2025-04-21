import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "15rem",
        "2xl": "22rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "50%": { width: "20ch" }, // Ganti 25ch sesuai panjang teks
          "100%": { width: "0ch" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "black" },
        },
      },
      animation: {
        typing: "typing 4s steps(25) infinite",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
