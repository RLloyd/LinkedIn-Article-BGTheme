// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      navBackground: string;
      cardGradient: string;
      heroGradient: string;
      textSecondary: string;
      border: string;
      secondary: string;
    };
    sizes: {
      navHeight: string;
      // heroHeight: string;
      // maxWidth: string;
    };
    backgroundColor: string;
    backgroundBlendMode: string;
  }
}