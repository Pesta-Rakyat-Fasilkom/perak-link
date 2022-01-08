module.exports = {
  content: ["./pages/**/*.{html,js,tsx,ts}", "./components/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        electric: "#db00ff",
        ribbon: "#0047ff",
        // Neutrals
        black: {
          DEFAULT: "#000000",
          900: "#121212",
          800: "#1e1e1e",
          700: "#222222",
          600: "#242424",
          500: "#272727",
          400: "#2c2c2c",
          300: "#2d2d2d",
          200: "#333333",
          100: "#353535",
          50: "#383838",
        },
        darkgrey: "#303030",
        grey: "#999999",
        softgrey: "#cccccc",
        white: "#fff",
        // Primary Colors
        aqua: "#21fefd",
        salmon: "#f87980",
        lemon: "#ffff7b",
        // Accents
        orchid: "#c149d7",
        skyblue: "#35cdea",
        fuschia: "#ff00ec",
        violet: "#9e00ff",
        fanta: "#ff007a",
        darkblue: "#182380",
        oxford: "#0a0933",
        bluegray: "#3846c4",
        popblue: "#0030ff",
        // States
        success: "#4cc667",
        danger: "#e73636",
        warning: "#ffcc00",
        info: "#3f66da",
      },
      fontFamily: {
        retro: ["Retro", "sans-serif"],
        sans: ["DM Sans"],
      },
      fontSize: {
        "p-lg": "24px",
        "p-md": "16px",
        "p-sm": "12px",
      },
      screens: {
        "3xl": "1792px",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      height: ["hover"],
    },
  },
}
