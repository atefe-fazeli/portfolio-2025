/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"       
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',      
        secondary: '#f59e0b',
        accent: '#10b981',
        background: '#f9fafb',
        'background-dark': '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio')
  ],
}
