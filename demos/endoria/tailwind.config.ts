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
        primary: {
          DEFAULT: "#FF1493",
          dark: "#C71585",
          light: "#FF69B4",
        },
        secondary: {
          DEFAULT: "#9333EA",
          dark: "#7C3AED",
          light: "#A855F7",
        },
        dark: {
          DEFAULT: "#0A0A0F",
          lighter: "#1A1A2E",
          card: "rgba(26, 26, 46, 0.7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        minecraft: ["var(--font-minecraft)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "gradient": "gradient 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 20, 147, 0.5), 0 0 10px rgba(147, 51, 234, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(255, 20, 147, 0.8), 0 0 30px rgba(147, 51, 234, 0.6)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
