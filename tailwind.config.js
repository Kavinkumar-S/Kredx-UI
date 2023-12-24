/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "dark-blue": "#0B4074",
        "summer-sky": "#126286",
        "pagoda-blue": "#198096",
        white: "#FFFFFF",
        blue: "#32BDBF",
        primary: "#239A99",
        secondary: "#4EB7E9",
        "dark--blue": "#0B4174",
        "light-teal": "#1F9EA6",
        "twilight-blue": "#093A71",
        "lagoon-blue": "#1F9EA6",
        "pearl-black": "#001932",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
