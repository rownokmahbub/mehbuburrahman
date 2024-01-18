const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-inter)']},
      animation: {
        "bounce-slow": "bounce 4s linear infinite",
        "spin-slow": "spin 4s linear infinite",
        marquee: "marquee 1s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#575CE5",
            },
            secondary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#1C4684",
            },
            // ... rest of the colors
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#0f172a", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#1C4684",
            },
            secondary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#FFFFFF",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
