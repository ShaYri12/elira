/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom-bluish":
          "linear-gradient(to right, rgba(37, 69, 161, 1) 0%, rgba(2, 28, 110, 0.8) 60%, rgba(0, 0, 0, 0.9) 100%)",
        "gradient-custom-yellowish":
          "linear-gradient(to right, rgba(101, 77, 2, 1) 0%, rgba(94, 72, 2, 0.8) 60%, rgba(0, 0, 0, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};
