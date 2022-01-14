const { WatchDirectoryFlags } = require("typescript");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      backgroundImage: {
        'water': "url('/images/bg-water.jpg')"
      }
    } 
  },
  plugins: [],
}
