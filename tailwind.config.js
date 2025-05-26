/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-red': '#C41E3A',
        'primary-gold': '#FFD700',
        'primary-navy': '#1B365D',
        'secondary-red-light': '#E53E5A',
        'secondary-red-dark': '#A01729',
        'secondary-gold-light': '#FFF59D',
        'secondary-gold-dark': '#F57F17',
        'accent-purple': '#8B5CF6',
        'accent-blue': '#3B82F6',
        'accent-green': '#10B981',
        'accent-yellow': '#F59E0B',
        'accent-pink': '#EC4899',
        'accent-indigo': '#6366F1',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C41E3A 0%, #FFD700 100%)',
        'gradient-hero': 'linear-gradient(135deg, #C41E3A 0%, #E53E5A 50%, #FFD700 100%)',
        'gradient-card': 'linear-gradient(145deg, #FFFFFF 0%, #F9FAFB 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1B365D 0%, #374151 100%)',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'heading': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    }
  },
  plugins: []
};
