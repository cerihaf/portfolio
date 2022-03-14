module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      brand: "'Poppins', sans-serif",
      body: "'Source Sans Pro', sans-serif",
    },
    extend: {
      colors: {
        navy: "#2b4257",
        "navy-light": "#405d76",
        gold: "#ddc6a4",
      },
    },
  },
  plugins: [],
};
