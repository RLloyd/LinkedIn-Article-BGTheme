// src/styles/GlobalStyles.ts
// In App.tsx or GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: transparent;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text.light.primary};
  }

  #root {
    min-height: 100vh;
    background: transparent;
  }
`;

// import { createGlobalStyle } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   // Set the height of the body to 1020px
//   html, body, #root {
//     height: 1020px;
//     overflow: hidden;
//   }

//   body {
//     font-family: 'Open Sans', sans-serif;
//     color: ${({ theme }) => theme.colors.text};
//     transition: all 1.3s ease;
//   }

//   #root {
//     position: relative;
//     z-index: 1;
//   }

//   h1 { font-size: 40px; }
//   h2 { font-size: 24px; }
//   p { font-size: 20px; }
// `;