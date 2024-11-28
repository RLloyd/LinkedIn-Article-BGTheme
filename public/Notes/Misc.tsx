

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/theme';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.sizes.navHeight};
  background: transparent;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid red; // Debug border
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.light.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

const ColorSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.light.primary};
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const ColorSwatch = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .swatch {
    height: 5rem;
    border-radius: 0.375rem;
    background-color: ${props => props.$bgColor};
    transition: transform 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: scale(1.05);
    }
  }

  .info {
    font-size: 0.875rem;

    .shade {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text.light.primary};
    }

    .value {
      font-family: monospace;
      opacity: 0.75;
      color: ${({ theme }) => theme.colors.text.light.secondary};
    }
  }
`;

const ColorPalette: React.FC = () => {
  useEffect(() => {
    console.log('ColorPalette mounted');
    console.log('Theme colors available:', colors);

    return () => {
      console.log('ColorPalette unmounted');
    };
  }, []);

  const displayableColors = {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    gray: colors.gray
  };

  const renderColorSection = (colorName: string, shades: Record<string | number, string>) => {
    console.log(`Rendering color section: ${colorName}`, shades);
    return (
      <ColorSection key={colorName}>
        <SectionTitle>{colorName}</SectionTitle>
        <ColorGrid>
          {Object.entries(shades).map(([shade, value]) => (
            <ColorSwatch key={`${colorName}-${shade}`} $bgColor={value}>
              <div className="swatch" />
              <div className="info">
                <div className="shade">{shade}</div>
                <div className="value">{value}</div>
              </div>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </ColorSection>
    );
  };

  if (!colors || Object.keys(displayableColors).length === 0) {
    console.warn('No colors available in theme');
    return (
      <Container>
        <Content>
          <Title>Color Palette</Title>
          <p>No colors available to display</p>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Title>Color Palette</Title>
        <Grid>
          {Object.entries(displayableColors).map(([colorName, shades]) => {
            console.log(`Processing color: ${colorName}`);
            return renderColorSection(colorName, shades);
          })}
        </Grid>
      </Content>
    </Container>
  );
};

export default ColorPalette;