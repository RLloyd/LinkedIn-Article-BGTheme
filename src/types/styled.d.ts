// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      navBackground: string;
      textSecondary: string;
      border: string;
      error: string;
    };
    sizes: {
      navHeight: string;
    };
    backgroundColor: string;
    backgroundBlendMode: string;
  }
}