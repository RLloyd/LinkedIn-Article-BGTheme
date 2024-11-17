// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

const sharedTheme = {
  sizes: {
    navHeight: '86px',
  }
};

export const lightTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    primary: '#000000',
    background: '#FFFFFF',
    text: '#000000',
    navBackground: 'rgba(255, 255, 255, 0.95)',
    textSecondary: '#666666',
    border: '#e1e1e1',
    error: '#dc2626',
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
    textSecondary: '#a0a0a0',
    border: '#2a2a2a',
    error: '#dc2626',
  },
  backgroundColor: '#121212',
  backgroundBlendMode: 'multiply'
};