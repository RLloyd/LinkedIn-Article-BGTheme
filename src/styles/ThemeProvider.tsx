// src/styles/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';

interface ThemeContextType {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDark: false,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = false
}) => {
  const [isDark, setIsDark] = useState(defaultTheme);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
// // src/styles/ThemeProvider.tsx
// import React, { createContext, useContext, useState } from 'react';
// import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';
// import { GlobalStyles } from './GlobalStyles';

// interface ThemeContextType {
//   toggleTheme: () => void;
//   isDark: boolean;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   toggleTheme: () => {},
//   isDark: false,
// });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
//   children
// }) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark');
//   };

//   const theme = isDark ? darkTheme : lightTheme;

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, isDark }}>
//       <StyledThemeProvider theme={theme}>
//         <GlobalStyles />
//         {children}
//       </StyledThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// // // src/styles/ThemeProvider.tsx
// // import React, { createContext, useContext } from 'react';
// // import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// // import { lightTheme, darkTheme } from './theme';
// // import { GlobalStyles } from './GlobalStyles';

// // interface ThemeContextType {
// //   toggleTheme: () => void;
// //   isDark: boolean;
// // }

// // const ThemeContext = createContext<ThemeContextType>({
// //   toggleTheme: () => {},
// //   isDark: false,
// // });

// // export const useTheme = () => useContext(ThemeContext);

// // export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// //   const [isDark, setIsDark] = React.useState(false);

// //   const toggleTheme = () => {
// //     setIsDark(!isDark);
// //     document.documentElement.classList.toggle('dark');
// //   };

// //   const themeContextValue = {
// //     toggleTheme,
// //     isDark,
// //   };

// //   return (
// //     <ThemeContext.Provider value={themeContextValue}>
// //       <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
// //         <GlobalStyles />
// //         {children}
// //       </StyledThemeProvider>
// //     </ThemeContext.Provider>
// //   );
// // };

// // // Example usage (can be moved to a separate file)
// // // const useThemeExample = () => {
// // //   const StyledButton = styled.button`
// // //     background-color: ${({ theme }) => theme.colors.primary[500]};
// // //     font-family: ${({ theme }) => theme.fonts.sans.join(', ')};
// // //     font-size: ${({ theme }) => theme.fontSizes.base};
// // //     padding: ${({ theme }) => `${theme.sizes.base} ${theme.sizes.lg}`};

// // //     &:hover {
// // //       background-color: ${({ theme }) => theme.colors.primary[600]};
// // //     }
// // //   `;

// // //   return { StyledButton };
// // // };

