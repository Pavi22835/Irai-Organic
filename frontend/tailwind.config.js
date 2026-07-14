/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2E7D32',
        'dark-green': '#1B4332',
        'light-green': '#E8F5E9',
        'bg-green': '#F8FFF8',
        'accent-gold': '#D4AF37',
        'text-dark': '#1F2937',
        'luxury-charcoal': '#1B2A1E',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(27, 67, 50, 0.04)',
        'premium-hover': '0 20px 50px rgba(27, 67, 50, 0.08)',
        'glass-shadow': '0 8px 32px 0 rgba(27, 67, 50, 0.06)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
