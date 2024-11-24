// src/styles/theme.ts

export type ThemeMode = 'light' | 'dark';

// Shared type definitions
export interface ColorShades {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string; // Base color
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface ColorPalette {
  primary: ColorShades;
  secondary: ColorShades;
  accent: ColorShades;
  success: ColorShades;
  warning: ColorShades;
  danger: ColorShades;
  gray: ColorShades;
  background: {
    light: string;
    dark: string;
  };
  text: {
    light: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    dark: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
}

export interface Typography {
  heading: {
    fontFamily: string;
    weights: {
      regular: number;
      medium: number;
      bold: number;
    };
    sizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  body: {
    fontFamily: string;
    weights: {
      regular: number;
      medium: number;
      bold: number;
    };
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
  };
}

export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  sizes: {
    navHeight: string;
  };
  navBackground: string;
  textSecondary: string;
  border: string;
  error: string;
  backgroundColor?: string;
  backgroundBlendMode?: string;
}

type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodySizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

// Base theme configuration
export const baseTheme = {
  typography: {
    heading: {
      fontFamily: '"Libre Baskerville", serif',
      weights: {
        regular: 400,
        medium: 500,
        bold: 700
      },
      sizes: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.75rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem'
      }
    },
    body: {
      fontFamily: '"Open Sans", sans-serif',
      weights: {
        regular: 400,
        medium: 500,
        bold: 700
      },
      sizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      }
    }
  }
} as const;

// Color definitions
export const colors = {
  primary: {
    100: '#EBE5F6',
    200: '#D7CCED',
    300: '#C3B2E3',
    400: '#AF99DA',
    500: '#8465C3',
    600: '#6A51C0',
    700: '#503DBD',
    800: '#3629BA',
    900: '#1C15B7'
  },
  secondary: {
    100: '#E6FEFF',
    200: '#CCFEFF',
    300: '#B3FDFF',
    400: '#99FCFF',
    500: '#3AF1F9',
    600: '#2ED8E0',
    700: '#22BFC6',
    800: '#16A6AD',
    900: '#0A8D93'
  },
  accent: {
    100: '#FFE9E3',
    200: '#FFD3C8',
    300: '#FFBDAC',
    400: '#FFA791',
    500: '#F46A47',
    600: '#DB503D',
    700: '#C23633',
    800: '#A91C29',
    900: '#90021F'
  },
  success: {
    100: '#F0F7E6',
    200: '#E1EFCC',
    300: '#D2E7B3',
    400: '#C3DF99',
    500: '#A2C465',
    600: '#88AB4B',
    700: '#6F9231',
    800: '#557917',
    900: '#3C5F00'
  },
  warning: {
    100: '#FFF5EB',
    200: '#FFEBD7',
    300: '#FFE1C3',
    400: '#FFD7AF',
    500: '#FAD8B4',
    600: '#E1BF9A',
    700: '#C8A680',
    800: '#AF8D66',
    900: '#96744C'
  },
  danger: {
    100: '#FFE5E8',
    200: '#FFCCD1',
    300: '#FFB2BA',
    400: '#FF99A3',
    500: '#F5536A',
    600: '#DC3950',
    700: '#C21F36',
    800: '#A9051C',
    900: '#900002'
  },
  gray: {
    100: '#F7F7F7',
    200: '#E6E6E6',
    300: '#D5D5D5',
    400: '#C4C4C4',
    500: '#676767',
    600: '#525252',
    700: '#3D3D3D',
    800: '#282828',
    900: '#131313'
  }
};

// Theme definitions
export const lightTheme: Theme = {
  colors: {
    ...colors,
    background: {
      light: '#FFFFFF',
      dark: '#121212'
    },
    text: {
      light: {
        primary: '#676767',
        secondary: '#8F8F8F',
        disabled: '#CCCCCC'
      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#E0E0E0',
        disabled: '#6E6E6E'
      }
    }
  },
  typography: baseTheme.typography,
  sizes: {
    navHeight: '80px'
  },
  navBackground: 'rgba(255, 255, 255, 0.8)',
  textSecondary: '#8F8F8F',
  border: '#E5E7EB',
  error: '#DC2626'
};

export const darkTheme: Theme = {
  colors: {
    ...colors,
    background: {
      light: '#121212',
      dark: '#000000'
    },
    text: {
      light: {
        primary: '#FFFFFF',
        secondary: '#E0E0E0',
        disabled: '#6E6E6E'
      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#E0E0E0',
        disabled: '#6E6E6E'
      }
    }
  },
  typography: baseTheme.typography,
  sizes: {
    navHeight: '80px'
  },
  navBackground: 'rgba(18, 18, 18, 0.8)',
  textSecondary: '#E0E0E0',
  border: '#374151',
  error: '#EF4444'
};

// Default theme for utilities
export const theme = lightTheme;

// Utility functions
export const getColor = (colorName: keyof Omit<ColorPalette, "background" | "text">, shade: keyof ColorShades = 500): string => {
  return theme.colors[colorName][shade];
};

export const getBackgroundColor = (mode: ThemeMode): string => {
  return theme.colors.background[mode];
};

export const getTextColor = (mode: ThemeMode, variant: "primary" | "secondary" | "disabled"): string => {
  return theme.colors.text[mode][variant];
};

export const getFontFamily = (type: "heading" | "body"): string => {
  return theme.typography[type].fontFamily;
};

export const getFontWeight = (type: "heading" | "body", weight: "regular" | "medium" | "bold"): number => {
  return theme.typography[type].weights[weight];
};

export const getFontSize = (type: "heading" | "body", size: HeadingSizes | BodySizes): string => {
  if (type === "heading" && isHeadingSize(size)) {
    return theme.typography.heading.sizes[size];
  }
  if (type === "body" && isBodySize(size)) {
    return theme.typography.body.sizes[size];
  }
  throw new Error(`Invalid size ${size} for type ${type}`);
};

// Type guards
const isHeadingSize = (size: HeadingSizes | BodySizes): size is HeadingSizes => {
  return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(size);
};

const isBodySize = (size: HeadingSizes | BodySizes): size is BodySizes => {
  return ["xs", "sm", "base", "lg", "xl"].includes(size);
};

// CSS helper
export const applyFontStyle = (type: "heading" | "body", weight: "regular" | "medium" | "bold", size: HeadingSizes | BodySizes): string => {
  return `
    font-family: ${getFontFamily(type)};
    font-weight: ${getFontWeight(type, weight)};
    font-size: ${getFontSize(type, size)};
  `;
};