/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001F2E",
        progress: "#EBEDEE",
        "progress-low": "#B4DFFE",
        "progress-middle": "#68BEFC",
        "progress-high": "#0067B2",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))", // 16-column grid
      },
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        scroll: {
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
      },
      animation: {
        ripple: "ripple 0.65s linear forwards",
        scroll: "scroll 50s linear infinite",
        scrollmobile: "scroll 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
