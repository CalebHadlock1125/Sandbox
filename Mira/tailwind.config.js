/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/app/**/*.{js,jsx,ts,tsx}", "app/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/tailwind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
