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
