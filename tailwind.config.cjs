/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{jsx,ts,tsx,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#009FE3",
        primary2: "#0066B3",
        secondary: "#32434f",
        third: "#454F7C",
        back: "#f5f5f5",
        lighter: "#fff",
      },
      spacing: {
        05: "4px",
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "56px",
        8: "64px",
        side: "40px",
      },
    },
  },
  plugins: [],
  // Fuerzo generación del css para maquetar en Chrome
  // safelist: [
  //   {
  //     pattern: /.*/,
  //   }
  // ],
};
