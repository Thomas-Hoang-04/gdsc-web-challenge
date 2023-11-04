/** @type {import('tailwindcss').Config} */

const fallbackFont = [
  "-apple-system",
  "BlinkMacSystemFont",
  `"Segoe UI"`,
  "Roboto",
  "Oxygen",
  "Cantarell",
  `"Open Sans"`,
  `"Helvetica Neue"`,
  "sans-serif",
];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1880px",
    },
    extend: {
      colors: {
        "pri-cyan": "hsl(180, 66%, 49%)",
        "pri-dark-violet": "hsl(257, 27%, 26%)",
        "sec-red": "hsl(0, 87%, 67%)",
        "neut-gray": "hsl(0, 0%, 75%)",
        "neut-grayish-violet": "hsl(257, 7%, 63%)",
        "neut-dark-blue": "hsl(255, 11%, 22%)",
        "neut-dark-violet": "hsl(260, 8%, 14%)",
        "neut-white": "hsl(150, 6%, 93%)",
        "neut-black": "hsl(0, 0%, 20%)",
      },
      fontFamily: {
        prime: ["Poppins", ...fallbackFont],
        "prime-italic": ["Poppins Italic", ...fallbackFont],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
