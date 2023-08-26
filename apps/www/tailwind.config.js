const { fontFamily } = require('tailwindcss/defaultTheme');
const tailwindAnimate = require('tailwindcss-animate');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md}'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
      '2xl': '1024px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        bcgov: {
          blue: {
            dark: '#003366',
            DEFAULT: '#38598A',
            light: '#F5FAFF',
          },
          gold: {
            DEFAULT: '#FCBA19',
            light: '#FCEDCA',
            extralight: '#FFFBF0',
          },
          gray: {
            dark: '#313131',
          },
        },
        'custom-yellow': '#FCBA19',
        'custom-gold': {
          50: '#FFFCE6',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: [`var(--font-noto-sans-display)`, ...fontFamily.sans],
        serif: ['var(--font-noto-serif-display)', ...fontFamily.serif],
        mono: ['var(--font-noto-sans-mono)', ...fontFamily.mono],
        montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      textUnderlineOffset: {
        12: '12px',
      },
    },
  },
  plugins: [tailwindAnimate, typography],
};
