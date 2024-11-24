// src/styles/tailwind.config.ts
import { colors, typography, sizes } from './theme';

export const tailwindTheme = {
  extend: {
    colors: Object.entries(colors).reduce((acc, [key, value]) => {
      if (value && typeof value === 'object') {
        if ('500' in value) {
          acc[key] = value;
        } else {
          Object.entries(value).forEach(([subKey, subValue]) => {
            acc[`${key}-${subKey}`] = subValue;
          });
        }
      }
      return acc;
    }, {} as Record<string, unknown>),
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    lineHeight: {
      none: typography.lineHeight.none.toString(),
      tight: typography.lineHeight.tight.toString(),
      normal: typography.lineHeight.normal.toString(),
      relaxed: typography.lineHeight.relaxed.toString(),
    },
    fontWeight: typography.fontWeight,
    spacing: sizes,
  },
};

export const tailwindConfig = {
  prefix: 'tw-',
  theme: tailwindTheme,
  darkMode: 'class',
};

//  // src/styles/tailwind.config.ts
//  import { colors, fontFamily, fontSize, spacing } from './theme';

//  export default {
//    prefix: 'tw-',
//    content: [
//      './src/**/*.{js,jsx,ts,tsx}',
//    ],
//    theme: {
//      colors,
//      fontFamily,
//      fontSize,
//      spacing,
//      extend: {
//        // Add any Tailwind-specific extensions here
//      },
//    },
//    darkMode: 'class',
//  };