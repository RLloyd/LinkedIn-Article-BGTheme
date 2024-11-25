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

# Integrating Tailwind CSS with Styled Components

## 1. Configuration Setup

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  // Prefix all Tailwind classes to avoid conflicts
  prefix: 'tw-',

  // Your content paths
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  // Prevent Tailwind from purging Styled Components styles
  important: true,

  // Disable Tailwind's base styles to prevent conflicts
  corePlugins: {
    preflight: false,
  }
};
```

### Global Styles
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
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

```typescript
const StyledButton = styled.button`
  position: relative;
  transition: all 0.3s ease;

  // Dynamic styling based on props
  ${props => props.variant === 'primary' && `
    background-color: ${props.theme.colors.primary};
  `}
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
<div className="tw-flex tw-items-center tw-gap-4">
  <span className="tw-text-sm tw-text-gray-500">
    Quick utility classes
  </span>
</div>
```

## 3. Best Practices

### 1. Consistent Prefix Usage
```tsx
// Always use the tw- prefix for Tailwind classes
<div className="tw-flex tw-items-center">
  <StyledComponent>
    Mixed styling approach
  </StyledComponent>
</div>
```

### 2. Component Organization
```typescript
// Separate styled components into .styles.ts files
// src/components/Button/Button.styles.ts
export const StyledButton = styled.button`
  /* Base styles */
`;

// src/components/Button/Button.tsx
const Button: React.FC = () => (
  <StyledButton className="tw-hover:opacity-80">
    Combined styling
  </StyledButton>
);
```

### 3. Theme Integration
```typescript
// Use theme values in both systems
const theme = {
  colors: {
    primary: '#3490dc',
    secondary: '#ffed4a',
  }
};

// Tailwind config
module.exports = {
  theme: {
    extend: {
      colors: theme.colors
    }
  }
};

// Styled Components
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
`;
```

## 4. Common Patterns

### Layout Components
```typescript
// Use Styled Components for layouts
const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
`;

// Use Tailwind for inner elements
const Component = () => (
  <Layout>
    <div className="tw-col-span-4 tw-p-4">
      Grid item with Tailwind
    </div>
  </Layout>
);
```

### Interactive Components
```typescript
const Button = styled.button`
  // Base styles with Styled Components
  position: relative;
  transition: all 0.3s ease;

  // Combine with Tailwind for states
  &:hover {
    @apply tw-shadow-lg;
  }
`;
```

### Responsive Design
```typescript
// Use Tailwind for simple responsive adjustments
<div className="tw-w-full tw-md:w-1/2 tw-lg:w-1/3">
  Responsive width
</div>

// Use Styled Components for complex responsive layouts
const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
```

## 5. Performance Considerations

1. **Style Extraction**
- Styled Components styles are processed at runtime
- Tailwind classes are processed at build time
- Use Tailwind for frequently repeated styles

2. **Bundle Size**
- Tailwind's purge process removes unused styles
- Styled Components bundles only used components
- Balance between runtime and build-time styles

3. **Caching**
- Tailwind styles can be cached more effectively
- Use Tailwind for common patterns
- Use Styled Components for dynamic styles

## 6. Debugging Tips

1. **Class Names**
```typescript
// Add debug names to styled components
const StyledButton = styled.button.withConfig({
  displayName: 'StyledButton',
})`
  // styles
`;
```

2. **Inspect Tools**
- Use the React DevTools to inspect Styled Components
- Use browser inspector for Tailwind classes
- Keep the tw- prefix for easy identification

## 7. Maintenance

1. **Documentation**
- Document component styling approach
- Maintain a style guide
- Document theme integration

2. **Updates**
- Keep both libraries updated
- Test thoroughly after updates
- Maintain consistent patterns