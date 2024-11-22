// src/styles/styled.d.ts
import 'styled-components';
import { Theme as CustomTheme } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    // Additional properties specific to styled-components
    sizes: {
      navHeight: string;
    };
    navBackground: string;
    textSecondary: string;
    border: string;
    error: string;
  }
}
