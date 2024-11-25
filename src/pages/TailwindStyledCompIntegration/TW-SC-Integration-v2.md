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

# Integrating Tailwind CSS with Styled Components + Typography

## 1. Configuration Setup

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
    },
  },
  important: true,
  corePlugins: {
    preflight: false,
  }
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

  // Global typography defaults
  h1, h2, h3, h4, h5, h6 {
    font-family: "Libre Baskerville", serif;
  }

  body, p, span, div {
    font-family: "Open Sans", sans-serif;
  }
`;
```

### Typography Components
```typescript
// src/components/Typography/Typography.styles.ts
import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-size: 2.5rem;
  line-height: 1.2;
`;

export const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
`;

// ... other typography components
```

## 2. When to Use Each
### Use Styled Components for:
- Component-level styles
- Dynamic styling based on props
- Complex animations
- Themed components
- Reusable style patterns
- Global style themes
- Layout components
- Style inheritance

### Use Styled Components for:
```typescript
// Complex, reusable components with consistent typography
const StyledHeader = styled.header`
  font-family: "Libre Baskerville", serif;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
  }
`;

// Dynamic styling with theme and props
const DynamicText = styled.p<{ size?: 'small' | 'large' }>`
  font-family: "Open Sans", sans-serif;
  font-size: ${props => props.size === 'large' ? '1.25rem' : '1rem'};
`;
```

### Use Tailwind for:
- Quick prototyping
- Small style adjustments
- One-off styles
- Responsive utilities
- Spacing utilities
- Typography utilities
- Colors that don't need theming
```tsx
// Quick typography adjustments
<h1 className="tw-font-serif tw-text-4xl">
  Header with Libre Baskerville
</h1>

// Body text with Open Sans
<p className="tw-font-sans tw-text-base">
  Paragraph with Open Sans
</p>

// Responsive typography
<div className="tw-font-serif tw-text-2xl tw-md:text-3xl tw-lg:text-4xl">
  Responsive Header
</div>
```

## 3. Best Practices

### 1. Consistent Typography Structure
```typescript
// Use Typography components for consistent styling
import { H1, Paragraph } from '@/components/Typography';

const Component = () => (
  <>
    <H1>This uses Libre Baskerville</H1>
    <Paragraph>This uses Open Sans</Paragraph>
  </>
);
```

### 2. Mixing Styles
```typescript
// Combining styled-components with Tailwind
const StyledSection = styled.section`
  font-family: "Open Sans", sans-serif;

  h1, h2, h3 {
    font-family: "Libre Baskerville", serif;
  }
`;

const Component = () => (
  <StyledSection>
    <h1 className="tw-text-4xl">Libre Baskerville Header</h1>
    <p className="tw-text-base">Open Sans Paragraph</p>
  </StyledSection>
);
```

### 3. Theme Integration
```typescript
// theme.ts
export const theme = {
  fonts: {
    heading: '"Libre Baskerville", serif',
    body: '"Open Sans", sans-serif',
  },
  // ... other theme properties
};

// Using theme in styled components
const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
`;
```

## 4. Common Patterns

### Headers and Content Sections
```typescript
const Section = () => (
  <div>
    {/* Styled Component for main header */}
    <H1>Main Header</H1>

    {/* Tailwind for quick text styling */}
    <p className="tw-font-sans tw-text-lg tw-leading-relaxed">
      Body content with Open Sans
    </p>
  </div>
);
```

### Responsive Typography
```typescript
const ResponsiveText = styled.div`
  // Base styles with Styled Components
  font-family: "Open Sans", sans-serif;

  h1 {
    font-family: "Libre Baskerville", serif;
  }

  // Combine with Tailwind for responsive sizes
  &.responsive-text {
    @apply tw-text-base tw-md:text-lg tw-lg:text-xl;
  }
`;
```

### Forms and Interactive Elements
```typescript
const FormField = styled.div`
  label {
    font-family: "Libre Baskerville", serif;
    @apply tw-text-sm tw-font-medium;
  }

  input {
    font-family: "Open Sans", sans-serif;
    @apply tw-text-base;
  }
`;
```

## 5. Import Fonts
```html
<!-- index.html -->
<head>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
```

## 6. Performance Tips

1. **Font Loading**
- Use font-display: swap
- Preload critical fonts
- Consider self-hosting fonts for better performance

2. **Style Organization**
- Group typography-related styles
- Use typography components for consistency
- Leverage Tailwind's utilities for small adjustments

3. **Maintenance**
- Document typography usage
- Create a style guide
- Keep font definitions in theme file

Remember:
- Headers: Always use Libre Baskerville
- Body Text: Always use Open Sans
- Use Styled Components for complex, reusable patterns
- Use Tailwind for quick adjustments and responsive design
- Maintain consistent typographic scale
- Keep font family definitions in one place