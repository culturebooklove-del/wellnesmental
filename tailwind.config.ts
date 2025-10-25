import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { bg: "#0b1420", fg: "#eef5ff", mint: "#8ce4c1", lav: "#bda6ff", teal: "#5fd0c5" } } },
  plugins: [],
} satisfies Config;
