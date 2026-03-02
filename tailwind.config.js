/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f4f1ea",
        soot: "#14110f"
      },
      fontFamily: {
        display: ["Space Grotesk", "General Sans", "Inter", "system-ui", "sans-serif"],
        body: ["General Sans", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        veil: "0 8px 30px rgba(0,0,0,0.06)",
        veilHover: "0 18px 45px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

