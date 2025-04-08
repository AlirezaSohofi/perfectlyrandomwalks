// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.md",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        // Define custom colors
        colors: {
          'base': '#ffffff', // Base background (white)
          'primary': '#1f2937', // Dark gray for primary text (like gray-800)
          'secondary': '#6b7280', // Lighter gray for secondary text (like gray-500)
          'subtle': '#d1d5db', // Very light gray for borders (like gray-300)
          'strong': '#000000', // Black for strong borders/active elements
          'accent': '#3b82f6', // Blue for link hovers (like blue-500)
          // 'tag-bg': '#ffffff', // Default tag background
          // 'tag-bg-active': '#f3f4f6', // Active tag background (light gray)
          // 'tag-bg-hover': '#f3f4f6', // Hover tag background (light gray)
          'tag-bg': '#ffffff', // Default tag background (white)
          'tag-bg-hover': '#f9fafb', // Hover tag background (gray-50) - More subtle
          'tag-bg-active': '#f3f4f6', // Active tag background (gray-100) - Light Gray
          'tag-bg-count': '#e5e7eb', // Background for the count number in tags
          'tag-text': '#1f2937', // Default tag text (dark gray)
          'tag-text-active': '#000000', // Active tag text (black)
          'tag-border': '#d1d5db', // Default tag border (darker gray like gray-700)
          'tag-border-active': '#000000', // Active tag border (black)
          // 'tag-border-hover': '#000000', // Hover tag border (black)
          'tag-border-hover': '#9ca3af',
        },
        // Define custom max-width for content
        maxWidth: {
          'content': '65ch', // Equivalent to 'prose' width, using character units
        },
        // Define custom font families (adding a secondary/alternative)
        fontFamily: {
          'sans-primary': ['Inter', ...defaultTheme.fontFamily.sans], // Example: Inter as primary
          'sans-secondary': ['"Source Serif 4"', ...defaultTheme.fontFamily.serif], // Example: Source Serif as secondary
          // Keep mono if needed
          mono: defaultTheme.fontFamily.mono,
        },
        // Define custom border radius (optional)
        borderRadius: {
          'tag': defaultTheme.borderRadius.md, // Use Tailwind's 'md' as default for tags
        },
        // Define custom spacing scale
        spacing: {
          'spacing-xs': '0.5rem', // 8px
          'spacing-sm': '0.75rem', // 12px
          'spacing-md': '1rem',   // 16px
          'spacing-lg': '1.5rem', // 24px
          'spacing-xl': '2rem',   // 32px
          'spacing-2xl': '3rem',  // 48px
        },
        // Define custom font size scale
        fontSize: {
          'size-xs': ['0.75rem', { lineHeight: '1rem' }],    // 12px
          'size-sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
          'size-base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
          'size-lg': ['1.125rem', { lineHeight: '1.75rem' }],// 18px
          'size-xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
          'size-2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
          'size-3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
          'size-4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        },
      },
    },
    plugins: [
      // require('@tailwindcss/typography'), // Temporarily commented out
    ],
  }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       // Add paths to all template files using Tailwind classes
//       "./layouts/**/*.html",
//       "./content/**/*.md", // If you ever put classes in markdown
//       // "./assets/js/**/*.js", // If JS manipulates classes
//     ],
//     darkMode: 'class', // Use class strategy for dark mode (toggled via JS later)
//     theme: {
//       extend: {
//         // You can add custom theme settings here later if needed
//       },
//     },
//     plugins: [
//       require('@tailwindcss/typography'), // Enable the typography plugin
//     ],
//   }