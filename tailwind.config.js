/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "0",
        md: "393px",
      },
      container: {
        center: true,
        screens: {
          xl: "1280px",
        },
      },
      colors: {
        black: {
          DEFAULT: "#0F172A",
        },
        grey: {
          DEFAULT: "#475569",
          1: "#E2E8F0",
          2: "#94A3B8",
          3: "#F1F5F9",
          4: "#CBD5E1",
        },
        blue: {
          DEFAULT: "#2563EB",
        },
        white: {
          DEFAULT: "#fff",
        },
      },
      fontWeight: {
        bold: "700",
      },
      backgroundImage: {
        "background-image": "url('/images/backgound.png')",
      },
    },
  },
  plugins: [],
};
