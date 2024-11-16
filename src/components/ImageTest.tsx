// src/components/ImageTest.tsx
import React from 'react';
import styled from 'styled-components';
import lightBg from '../assets/gradatedBackground.webp';
import darkBg from '../assets/gradatedBackground-dark.webp';

const TestContainer = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid black;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
`;

const TestImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 5px;
  border: 1px solid black;
`;

const ImageTest = () => {
  return (
    <TestContainer>
      <h3>Test Images:</h3>
      <TestImage src={lightBg} alt="Light background" />
      <TestImage src={darkBg} alt="Dark background" />
      <div>
        <p>Light bg path: {lightBg}</p>
        <p>Dark bg path: {darkBg}</p>
      </div>
    </TestContainer>
  );
};

export default ImageTest;