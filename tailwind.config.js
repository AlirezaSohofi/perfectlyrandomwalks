/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Add paths to all template files using Tailwind classes
      "./layouts/**/*.html",
      "./content/**/*.md", // If you ever put classes in markdown
      // "./assets/js/**/*.js", // If JS manipulates classes
    ],
    darkMode: 'class', // Use class strategy for dark mode (toggled via JS later)
    theme: {
      extend: {
        // You can add custom theme settings here later if needed
      },
    },
    plugins: [
      require('@tailwindcss/typography'), // Enable the typography plugin
    ],
  }