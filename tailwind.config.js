/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed", 100: "#ffedd5", 500: "#f97316",
          600: "#ea580c", 700: "#c2410c", 900: "#7c2d12"
        }
      },
      fontFamily: { display: ["Poppins", "sans-serif"], body: ["Inter", "sans-serif"] },
      boxShadow: { soft: "0 10px 30px -10px rgba(0,0,0,0.15)" }
    }
  },
  plugins: []
}
