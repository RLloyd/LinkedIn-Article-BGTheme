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