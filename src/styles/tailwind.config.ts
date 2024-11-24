// src/styles/tailwind.config.ts
// import type { Theme } from './theme';
import { lightTheme } from './theme';

export const tailwindTheme = {
  extend: {
    colors: {
      primary: {
        100: lightTheme.colors.primary[100],
        200: lightTheme.colors.primary[200],
        300: lightTheme.colors.primary[300],
        400: lightTheme.colors.primary[400],
        500: lightTheme.colors.primary[500],
        600: lightTheme.colors.primary[600],
        700: lightTheme.colors.primary[700],
        800: lightTheme.colors.primary[800],
        900: lightTheme.colors.primary[900],
      },
      secondary: {
        100: lightTheme.colors.secondary[100],
        200: lightTheme.colors.secondary[200],
        300: lightTheme.colors.secondary[300],
        400: lightTheme.colors.secondary[400],
        500: lightTheme.colors.secondary[500],
        600: lightTheme.colors.secondary[600],
        700: lightTheme.colors.secondary[700],
        800: lightTheme.colors.secondary[800],
        900: lightTheme.colors.secondary[900],
      },
      accent: {
        100: lightTheme.colors.accent[100],
        200: lightTheme.colors.accent[200],
        300: lightTheme.colors.accent[300],
        400: lightTheme.colors.accent[400],
        500: lightTheme.colors.accent[500],
        600: lightTheme.colors.accent[600],
        700: lightTheme.colors.accent[700],
        800: lightTheme.colors.accent[800],
        900: lightTheme.colors.accent[900],
      },
      success: {
        100: lightTheme.colors.success[100],
        200: lightTheme.colors.success[200],
        300: lightTheme.colors.success[300],
        400: lightTheme.colors.success[400],
        500: lightTheme.colors.success[500],
        600: lightTheme.colors.success[600],
        700: lightTheme.colors.success[700],
        800: lightTheme.colors.success[800],
        900: lightTheme.colors.success[900],
      },
      warning: {
        100: lightTheme.colors.warning[100],
        200: lightTheme.colors.warning[200],
        300: lightTheme.colors.warning[300],
        400: lightTheme.colors.warning[400],
        500: lightTheme.colors.warning[500],
        600: lightTheme.colors.warning[600],
        700: lightTheme.colors.warning[700],
        800: lightTheme.colors.warning[800],
        900: lightTheme.colors.warning[900],
      },
      danger: {
        100: lightTheme.colors.danger[100],
        200: lightTheme.colors.danger[200],
        300: lightTheme.colors.danger[300],
        400: lightTheme.colors.danger[400],
        500: lightTheme.colors.danger[500],
        600: lightTheme.colors.danger[600],
        700: lightTheme.colors.danger[700],
        800: lightTheme.colors.danger[800],
        900: lightTheme.colors.danger[900],
      },
      gray: {
        100: lightTheme.colors.gray[100],
        200: lightTheme.colors.gray[200],
        300: lightTheme.colors.gray[300],
        400: lightTheme.colors.gray[400],
        500: lightTheme.colors.gray[500],
        600: lightTheme.colors.gray[600],
        700: lightTheme.colors.gray[700],
        800: lightTheme.colors.gray[800],
        900: lightTheme.colors.gray[900],
      },
      background: {
        light: lightTheme.colors.background.light,
        dark: lightTheme.colors.background.dark
      },
      text: {
        light: {
          primary: lightTheme.colors.text.light.primary,
          secondary: lightTheme.colors.text.light.secondary,
          disabled: lightTheme.colors.text.light.disabled
        },
        dark: {
          primary: lightTheme.colors.text.dark.primary,
          secondary: lightTheme.colors.text.dark.secondary,
          disabled: lightTheme.colors.text.dark.disabled
        }
      }
    },
    fontFamily: {
      sans: [lightTheme.typography.body.fontFamily],
      serif: [lightTheme.typography.heading.fontFamily],
    },
    fontSize: {
      xs: lightTheme.typography.body.sizes.xs,
      sm: lightTheme.typography.body.sizes.sm,
      base: lightTheme.typography.body.sizes.base,
      lg: lightTheme.typography.body.sizes.lg,
      xl: lightTheme.typography.body.sizes.xl,
      '2xl': lightTheme.typography.heading.sizes.h6,
      '3xl': lightTheme.typography.heading.sizes.h5,
      '4xl': lightTheme.typography.heading.sizes.h4,
      '5xl': lightTheme.typography.heading.sizes.h3,
      '6xl': lightTheme.typography.heading.sizes.h2,
      '7xl': lightTheme.typography.heading.sizes.h1,
    },
    fontWeight: {
      normal: lightTheme.typography.body.weights.regular,
      medium: lightTheme.typography.body.weights.medium,
      bold: lightTheme.typography.body.weights.bold,
    },
    spacing: {
      navHeight: lightTheme.sizes.navHeight,
    }
  },
};

export const tailwindConfig = {
  prefix: 'tw-',
  theme: tailwindTheme,
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
};