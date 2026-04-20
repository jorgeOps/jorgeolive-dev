import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5f5e5c',
          container: '#e5e2df',
        },
        secondary: {
          DEFAULT: '#6f6d6b',
          container: '#e8e6e3',
        },
        tertiary: {
          DEFAULT: '#7a7674',
          container: '#ebe9e6',
        },
        surface: {
          DEFAULT: '#faf9f6',
          container: {
            DEFAULT: '#f5f4f1',
            low: '#f0efec',
            high: '#ebeae7',
            highest: '#e6e5e2',
            lowest: '#ffffff',
          },
          variant: '#e5e2df',
        },
        outline: {
          DEFAULT: '#7a7674',
          variant: '#c9c6c3',
        },
        on: {
          primary: '#fbf7f4',
          secondary: '#2f3430',
          surface: '#2f3430',
        },
      },
      fontFamily: {
        serif: ['Noto Serif', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'headline-lg': ['2rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'headline-md': ['1.5rem', { lineHeight: '1.35', letterSpacing: '0' }],
        'headline-sm': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-md': ['0.875rem', { lineHeight: '1.65', letterSpacing: '0.015em' }],
        'label-lg': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'label-md': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backdropBlur: {
        gallery: '25px',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

export default config
