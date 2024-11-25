# Complete Guide: Tailwind CSS & Styled Components Integration
A comprehensive guide to integrating Tailwind CSS with Styled Components, including typography, theming, and best practices.

## 1. Initial Setup

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],     // Headers
        sans: ['"Open Sans"', 'sans-serif'],         // Body text
      },
      colors: {
        // Extend with your theme colors
        primary: {
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        }
      },
    },
  },
  important: true,
  corePlugins: {
    preflight: false,
  }
};
```

### Theme Setup
```typescript
// src/styles/theme.ts
export interface Theme {
  isDarkTheme: boolean;
  colors: ColorPalette;
  typography: Typography;
  sizes: {
    navHeight: string;
  };
  // ... other theme properties
}

export const lightTheme: Theme = {
  isDarkTheme: false,
  colors: {
    backgrounds: {
      light: '#FFFFFF',
      dark: '#121212',
      nav: 'rgba(255, 255, 255, 0.8)'
    },
    text: {
      light: {
        primary: '#676767',
        secondary: '#8F8F8F',
        disabled: '#CCCCCC'
      }
    }
    // ... other colors
  },
  typography: {
    heading: {
      fontFamily: '"Libre Baskerville", serif',
      // ... heading styles
    },
    body: {
      fontFamily: '"Open Sans", sans-serif',
      // ... body styles
    }
  }
};

export const darkTheme: Theme = {
  isDarkTheme: true,
  // ... dark theme properties
};
```

### Global Styles
```typescript
// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  // Typography defaults
  h1, h2, h3, h4, h5, h6 {
    font-family: "Libre Baskerville", serif;
  }

  body, p, span, div {
    font-family: "Open Sans", sans-serif;
    color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
    background-color: ${({ theme }) => theme.colors.backgrounds[theme.isDarkTheme ? 'dark' : 'light']};
  }
`;
```

## 2. Typography Components
```typescript
// src/components/Typography/Typography.styles.ts
import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-size: 2.5rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
`;

export const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
`;

// ... other typography components
```

## 3. Common UI Components

### Navigation
```typescript
// src/components/Navbar/Navbar.styles.ts
export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.backgrounds.nav};
  height: ${({ theme }) => theme.sizes.navHeight};
  transition: background-color 0.3s ease;
`;

export const MenuItem = styled.li`
  a {
    font-family: "Open Sans", sans-serif;
    color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ThemeToggle = styled.button`
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
  transition: all 0.3s ease;
`;
```

## 4. Usage Patterns

### When to Use Styled Components
```typescript
// 1. Complex, reusable components
const Card = styled.div`
  font-family: "Open Sans", sans-serif;
  background: ${({ theme }) => theme.colors.backgrounds[theme.isDarkTheme ? 'dark' : 'light']};

  h2 {
    font-family: "Libre Baskerville", serif;
    color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
  }
`;

// 2. Theme-dependent styles
const ThemedButton = styled.button`
  background: ${({ theme }) => theme.colors.backgrounds[theme.isDarkTheme ? 'dark' : 'light']};
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
`;

// 3. Dynamic components
const DynamicText = styled.p<{ size?: 'small' | 'large' }>`
  font-family: "Open Sans", sans-serif;
  font-size: ${props => props.size === 'large' ? '1.25rem' : '1rem'};
`;
```

### When to Use Tailwind
```tsx
// 1. Quick adjustments
<div className="tw-font-sans tw-text-lg">
  Quick text styling
</div>

// 2. Responsive design
<h1 className="tw-font-serif tw-text-2xl tw-md:text-3xl tw-lg:text-4xl">
  Responsive heading
</h1>

// 3. Layout utilities
<div className="tw-flex tw-items-center tw-gap-4">
  <span className="tw-font-sans">Flexbox layout</span>
</div>
```

## 5. Combined Approach Examples

### Responsive Component with Theme Support
```typescript
const ResponsiveSection = styled.section`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};

  h2 {
    font-family: "Libre Baskerville", serif;
  }
`;

const Component = () => (
  <ResponsiveSection className="tw-p-4 tw-md:p-6 tw-lg:p-8">
    <h2 className="tw-text-2xl tw-md:text-3xl">
      Themed Header
    </h2>
    <p className="tw-text-base tw-md:text-lg">
      Responsive content
    </p>
  </ResponsiveSection>
);
```

### Theme-Aware Interactive Component
```typescript
const InteractiveCard = styled.div`
  font-family: "Open Sans", sans-serif;
  background: ${({ theme }) => theme.colors.backgrounds[theme.isDarkTheme ? 'dark' : 'light']};
  transition: all 0.3s ease;
`;

const Component = () => (
  <InteractiveCard className="tw-p-4 tw-hover:shadow-lg tw-cursor-pointer">
    <h3 className="tw-font-serif tw-text-xl">
      Card Title
    </h3>
    <p className="tw-mt-2">
      Card content
    </p>
  </InteractiveCard>
);
```

## 6. Best Practices

### 1. Typography Consistency
- Use Typography components for consistent styling
- Stick to defined font families (Libre Baskerville for headers, Open Sans for body)
- Use theme colors for text

### 2. Theme Integration
- Always use theme values for colors
- Include dark/light mode support
- Add smooth transitions for theme changes

### 3. Performance
- Use Tailwind for frequently repeated utilities
- Use Styled Components for complex, themed components
- Combine approaches thoughtfully to minimize duplicate styles

### 4. Maintenance
- Keep theme definitions centralized
- Document component usage
- Use consistent naming conventions

## 7. Font Loading
```html
<!-- index.html -->
<head>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
```

## 8. Type Safety
```typescript
// Ensure type safety with theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

Remember:
- Headers always use Libre Baskerville
- Body text always uses Open Sans
- Always include theme support
- Use Tailwind for layout and quick styling
- Use Styled Components for complex, themed components
- Maintain consistent typography and color usage
- Consider performance implications
- Keep documentation updated

This combined approach gives you:
- Consistent typography
- Theme support (light/dark)
- Responsive design capabilities
- Type safety
- Performance optimization
- Maintainable codebase
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

/* Base styles */
body {
  font-family: 'Libre Baskerville', serif;
  line-height: 1.8;
  color: #2D3748;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #FFFDF7;
}

/* Typography scale */
h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #1A202C;
  letter-spacing: -0.02em;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.875rem;
  line-height: 1.3;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #2D3748;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #4A5568;
}

/* Paragraphs and lists */
p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Code blocks */
code {
  font-family: 'JetBrains Mono', Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 0.9em;
  background-color: #F7FAFC;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  border: 1px solid #E2E8F0;
}

pre {
  background-color: #F7FAFC;
  padding: 1.5rem;
  border-radius: 6px;
  overflow-x: auto;
  border: 1px solid #E2E8F0;
  margin: 1.5rem 0;
}

pre code {
  border: none;
  padding: 0;
}

/* Links */
a {
  color: #4A90E2;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

a:hover {
  border-bottom-color: currentColor;
}

/* Blockquotes */
blockquote {
  font-style: italic;
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  border-left: 3px solid #CBD5E0;
  color: #4A5568;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #E2E8F0;
  text-align: left;
}

th {
  background-color: #F7FAFC;
  font-weight: 700;
}

/* Emphasis and strong */
em {
  font-style: italic;
}

strong {
  font-weight: 700;
  color: #1A202C;
}

/* Meta information */
.meta {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 2rem;
}

/* Feature list checkmarks */
.features li::before {
  content: "✓";
  color: #48BB78;
  font-weight: bold;
  display: inline-block;
  width: 1.5em;
  margin-left: -1.5em;
}

/* Command line prompts */
.command {
  display: block;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #2D3748;
  color: #FFFFFF;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
}

.command::before {
  content: "$ ";
  color: #A0AEC0;
}
</style>