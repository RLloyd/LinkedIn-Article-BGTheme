// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  body {
    color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
    background-color: ${({ theme }) => theme.colors.backgrounds[theme.isDarkTheme ? 'dark' : 'light']};
  }
`;

// // src/styles/GlobalStyles.ts

// import { createGlobalStyle } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`
//   h1, h2, h3, h4, h5, h6 {
//     font-family: "Libre Baskerville", serif;
//   }

//   body, p, span, div {
//     font-family: "Open Sans", sans-serif;
//   }

//   // Optional: Add specific styles for each heading level
//   h1 { font-size: 2.5rem; line-height: 1.2; }
//   h2 { font-size: 2rem; line-height: 1.3; }
//   h3 { font-size: 1.75rem; line-height: 1.4; }
//   h4 { font-size: 1.5rem; line-height: 1.4; }
//   h5 { font-size: 1.25rem; line-height: 1.4; }
//   h6 { font-size: 1rem; line-height: 1.4; }
// `;