// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
  }

  #root {
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
  }
`;