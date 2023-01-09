/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instagram': "url('../pages/assets/images/insta.png')",
        'linkedin': "url('../pages/assets/images/linkedin.png')",
        'whatsapp': "url('../pages/assets/images/whats.png')",
        'gmail': "url('../pages/assets/images/mail.png')",
      }
    },
  },
  plugins: [],
}
