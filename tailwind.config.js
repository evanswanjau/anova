export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2f6d41",
        "nasa-blue": "#0B3D91",
        "nasa-black": "#000000",
        "nasa-gray": "#F5F5F5",
        "accent-red": "#fc3f22",
      },
      fontFamily: {
        "display": ["'Chakra Petch'", "sans-serif"],
        "body": ["'Chakra Petch'", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0px",
        "sm": "0px", 
        "md": "0px", 
        "lg": "0px", 
        "xl": "0px", 
        "2xl": "0px", 
        "3xl": "0px", 
        "full": "0px" 
      },
    },
  },
  plugins: [],
}
