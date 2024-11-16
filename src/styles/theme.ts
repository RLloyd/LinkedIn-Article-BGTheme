// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

const sharedTheme = {
  sizes: {
    navHeight: '86px',
   //  heroHeight: '400px',
   //  maxWidth: '1334px',
  }
};

export const lightTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    primary: '#000000',
    background: '#FFFFFF',
    text: '#000000',
    navBackground: 'rgba(255, 255, 255, 0.95)',
    cardGradient: 'linear-gradient(45deg, #c5c5c5, white)',
    heroGradient: 'linear-gradient(45deg, #F1E8E7, #ffffff)',
    textSecondary: '#666666',
    border: '#e1e1e1',
    secondary: '#f5f5f5',
  },
  backgroundColor: '#FFFFFF',
  backgroundBlendMode: 'overlay'
};

export const darkTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    primary: '#FAFEFF',
    background: '#121212',
    text: '#FAFEFF',
    navBackground: 'rgba(18, 18, 18, 0.95)',
    cardGradient: 'linear-gradient(45deg, #2a2a2a, #121212)',
    heroGradient: 'linear-gradient(45deg, #2a2a2a, #121212)',
    textSecondary: '#a0a0a0',
    border: '#2a2a2a',
    secondary: '#2a2a2a',
  },
  backgroundColor: '#121212',
  backgroundBlendMode: 'multiply'
};
