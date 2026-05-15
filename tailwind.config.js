/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#0a0e1a",
        card: "#1a1f36",
        cardLight: "#1e2746",
        primary: "#3b82f6",
        primaryLight: "#60a5fa",
        primaryDark: "#2563eb",
        danger: "#ef4444",
        warning: "#f97316",
        caution: "#eab308",
        success: "#22c55e",
        text: "#f3f4f6",
        textMuted: "#9ca3af",
      },
    },
  },
  plugins: [],
}
