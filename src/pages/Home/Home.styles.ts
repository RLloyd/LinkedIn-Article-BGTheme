// src/pages/Home/Home.styles.ts

import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.sizes.navHeight};
  background: transparent;
  position: relative;
`;

export const ImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
  background: transparent;
`;