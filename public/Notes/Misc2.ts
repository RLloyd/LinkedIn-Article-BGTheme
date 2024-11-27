import React from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import { ThemeMode } from '@/styles/theme';

// ... other styled components ...

const ThemedPath = styled(motion.path)`
  fill: ${({ theme }) => theme.isDarkTheme ?
    theme.colors.text.dark.secondary :
    theme.colors.text.light.secondary};
`;

const LoadingOverlay: React.FC<{ progress: number; mode: ThemeMode }> = ({ progress, mode }) => {
  const theme = useTheme();
  const easing = [0.35, 0.27, 0.3, 0.83];
  const animationDuration = 3;

  return (
    <LoaderOverlay
      $mode={mode}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LoaderContainer>
        <CounterContainer>
          <CountdownText>
            <span>{Math.min(progress, 100)}</span>
            <span>%</span>
          </CountdownText>
        </CounterContainer>

        <CircularSVG>
          <motion.svg width="314" height="314" viewBox="0 0 314 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ThemedPath
              initial={{ rotate: 0 }}
              animate={{ rotate: 720 }}
              transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
              d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z"
            />

            <ThemedPath
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
              d="M156.7 49.2993C97.3844 49.2993 49.2998 97.3839 49.2998 156.699C49.2998 216.015 97.3844 264.099 156.7 264.099C216.015 264.099 264.1 216.015 264.1 156.699C264.1 97.3839 216.015 49.2993 156.7 49.2993ZM47.2998 156.699C47.2998 96.2794 96.2799 47.2993 156.7 47.2993C217.12 47.2993 266.1 96.2794 266.1 156.699C266.1 217.119 217.12 266.099 156.7 266.099C96.2799 266.099 47.2998 217.119 47.2998 156.699Z"
            />

            <ThemedPath
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
              d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z"
            />

            {/* Add ThemedPath for other paths as well */}
          </motion.svg>
        </CircularSVG>
      </LoaderContainer>
    </LoaderOverlay>
  );
};

export default LoadingOverlay;