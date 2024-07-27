/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".boardSquare": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          border: "solid 1px black",
          fontSize: "3em",
          fontWeight: "bold",
          width: "50px",
          height: "50px",
          paddingBottom: "10px",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
