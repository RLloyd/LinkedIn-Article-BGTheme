import React from 'react';
import styled from 'styled-components';

const lightBg = '/assets/bonsaiLightBg.webp';
const darkBg = '/assets/bonsaiDarkBg.webp';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundImage = styled.img<{ $isDark: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .8; //0.8
  transition: opacity 1.3s ease; //0.3
`;

const Overlay = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $isDark }) => $isDark ? 'rgba(18, 18, 18, 0.5)' : 'rgba(255, 255, 255, 0)'};
  transition: background-color 1.3s ease;
`;

interface BackgroundProps {
  isDarkTheme: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isDarkTheme }) => {
  const currentImage = isDarkTheme ? darkBg : lightBg;

  return (
    <BackgroundWrapper>
      <BackgroundImage
        src={currentImage}
        alt="background"
        $isDark={isDarkTheme}
      />
      <Overlay $isDark={isDarkTheme} />
    </BackgroundWrapper>
  );
};

export default Background;