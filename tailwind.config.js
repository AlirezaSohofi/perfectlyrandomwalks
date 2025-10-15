const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.md",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'base': '#ffffff',
          'primary': '#1f2937',
          'secondary': '#6b7280',
          'subtle': '#d1d5db',
          'strong': '#000000',
          'accent': '#3b82f6',
          'tag-bg': '#ffffff',
          'tag-bg-hover': '#f9fafb',
          'tag-bg-active': '#f3f4f6',
          'tag-bg-count': '#e5e7eb',
          'tag-text': '#1f2937',
          'tag-text-active': '#000000',
          'tag-border': '#d1d5db',
          'tag-border-active': '#000000',
          'tag-border-hover': '#9ca3af',
        },
        maxWidth: {
          'content': '65ch',
        },
        fontFamily: {
          'sans-primary': ['Inter', ...defaultTheme.fontFamily.sans],
          'sans-secondary': ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
          mono: defaultTheme.fontFamily.mono,
        },
        borderRadius: {
          'tag': defaultTheme.borderRadius.md,
        },
        spacing: {
          'spacing-xs': '0.5rem',
          'spacing-sm': '0.75rem',
          'spacing-md': '1rem',
          'spacing-lg': '1.5rem',
          'spacing-xl': '2rem',
          'spacing-2xl': '3rem',
        },
        fontSize: {
          'size-xs': ['0.75rem', { lineHeight: '1rem' }],
          'size-sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'size-base': ['1rem', { lineHeight: '1.5rem' }],
          'size-lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'size-xl': ['1.25rem', { lineHeight: '1.75rem' }],
          'size-2xl': ['1.5rem', { lineHeight: '2rem' }],
          'size-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          'size-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
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