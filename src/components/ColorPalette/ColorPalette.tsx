// src/compoents/ColorPalette/ColorPalette.tsx

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
/*-+++++++++++++++++++++++++++++++++++++++++++++++++-*/
// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   padding-top: ${({ theme }) => theme.sizes.navHeight};
//   padding: 2rem;
//   background: transparent;
//   border: 2px solid red; // Debug border
// `;

// const Content = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   border: 2px solid blue; // Debug border
// `;

// const ColorPalette: React.FC = () => {
//   console.log('ColorPalette is rendering'); // Debug log

//   return (
//     <Container>
//       <Content>
//         <h1>Color Palette</h1>
//         <p>This is a test to verify the component is rendering.</p>
//       </Content>
//     </Container>
//   );
// };

// export default ColorPalette;

/*-+++++++++++++++++++++++++++++++++++++++++++++++++-*/
// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   padding-top: ${({ theme }) => theme.sizes.navHeight};
//   background: transparent;
// `;

// const Content = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   color: ${({ theme }) => theme.colors.text.light.primary};
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-gap: 2rem;
// `;

// const ColorSection = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 0.5rem;
//   padding: 1rem;
//   border: 1px solid rgba(255, 255, 255, 0.2);
// `;

// const SectionTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   text-transform: capitalize;
//   color: ${({ theme }) => theme.colors.text.light.primary};
// `;

// const ColorGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 1rem;
// `;

// const ColorSwatch = styled.div<{ $bgColor: string }>`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   .swatch {
//     height: 5rem;
//     border-radius: 0.375rem;
//     background-color: ${props => props.$bgColor};
//     transition: transform 0.2s ease;
//     border: 1px solid rgba(255, 255, 255, 0.1);

//     &:hover {
//       transform: scale(1.05);
//     }
//   }

//   .info {
//     font-size: 0.875rem;

//     .shade {
//       font-weight: 500;
//       color: ${({ theme }) => theme.colors.text.light.primary};
//     }

//     .value {
//       font-family: monospace;
//       opacity: 0.75;
//       color: ${({ theme }) => theme.colors.text.light.secondary};
//     }
//   }
// `;

// const ColorPalette: React.FC = () => {
//   // Define the color palette directly
//   const colorPalette = {
//     primary: {
//       '100': '#EBE5F6',
//       '200': '#D7CCED',
//       '300': '#C3B2E3',
//       '400': '#AF99DA',
//       '500': '#8465C3',
//       '600': '#6A51C0',
//       '700': '#503DBD',
//       '800': '#3629BA',
//       '900': '#1C15B7'
//     },
//     secondary: {
//       '100': '#E6FEFF',
//       '200': '#CCFEFF',
//       '300': '#B3FDFF',
//       '400': '#99FCFF',
//       '500': '#3AF1F9',
//       '600': '#2ED8E0',
//       '700': '#22BFC6',
//       '800': '#16A6AD',
//       '900': '#0A8D93'
//     },
//     accent: {
//       '100': '#FFE9E3',
//       '200': '#FFD3C8',
//       '300': '#FFBDAC',
//       '400': '#FFA791',
//       '500': '#F46A47',
//       '600': '#DB503D',
//       '700': '#C23633',
//       '800': '#A91C29',
//       '900': '#90021F'
//     }
//   };

//   const renderColorSection = (colorName: string, shades: Record<string, string>) => {
//     return (
//       <ColorSection key={colorName}>
//         <SectionTitle>{colorName}</SectionTitle>
//         <ColorGrid>
//           {Object.entries(shades).map(([shade, value]) => (
//             <ColorSwatch key={`${colorName}-${shade}`} $bgColor={value}>
//               <div className="swatch" />
//               <div className="info">
//                 <div className="shade">{shade}</div>
//                 <div className="value">{value}</div>
//               </div>
//             </ColorSwatch>
//           ))}
//         </ColorGrid>
//       </ColorSection>
//     );
//   };

//   return (
//     <Container>
//       <Content>
//         <Title>Color Palette</Title>
//         <Grid>
//           {Object.entries(colorPalette).map(([colorName, shades]) =>
//             renderColorSection(colorName, shades)
//           )}
//         </Grid>
//       </Content>
//     </Container>
//   );
// };

// export default ColorPalette;

/*-+++++++++++++++++++++++++++++++++++++++++++++++++-*/
// import React from 'react';
// import styled from 'styled-components';
// import { colors } from '@/styles/theme';

// const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   padding-top: ${({ theme }) => theme.sizes.navHeight};
//   background: transparent;
// `;

// const Content = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   color: ${({ theme }) => theme.colors.text.light.primary};
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-gap: 2rem;
// `;

// const ColorSection = styled.div`
//   background: ${({ theme }) => theme.colors.backgrounds.light}10;
//   border-radius: 0.5rem;
//   padding: 1rem;
//   border: 1px solid ${({ theme }) => theme.colors.gray[200]};
// `;

// const SectionTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   text-transform: capitalize;
//   color: ${({ theme }) => theme.colors.text.light.primary};
// `;

// const ColorGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 1rem;
// `;

// const ColorSwatch = styled.div<{ $bgColor: string }>`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   .swatch {
//     height: 5rem;
//     border-radius: 0.375rem;
//     background-color: ${props => props.$bgColor};
//     transition: transform 0.2s ease;
//     border: 1px solid ${({ theme }) => theme.colors.gray[200]};

//     &:hover {
//       transform: scale(1.05);
//     }
//   }

//   .info {
//     font-size: 0.875rem;

//     .shade {
//       font-weight: 500;
//       color: ${({ theme }) => theme.colors.text.light.primary};
//     }

//     .value {
//       font-family: monospace;
//       opacity: 0.75;
//       color: ${({ theme }) => theme.colors.text.light.secondary};
//     }
//   }
// `;

// const ColorPalette: React.FC = () => {
//   console.log('ColorPalette rendered'); // Debug log
//   console.log('Colors from theme:', colors); // Debug log

//   const renderColorSection = (colorName: string, shades: Record<string, string>) => {
//     return (
//       <ColorSection key={colorName}>
//         <SectionTitle>{colorName}</SectionTitle>
//         <ColorGrid>
//           {Object.entries(shades).map(([shade, value]) => (
//             <ColorSwatch key={`${colorName}-${shade}`} $bgColor={value}>
//               <div className="swatch" />
//               <div className="info">
//                 <div className="shade">{shade}</div>
//                 <div className="value">{value}</div>
//               </div>
//             </ColorSwatch>
//           ))}
//         </ColorGrid>
//       </ColorSection>
//     );
//   };

//   // Filter out 'background' and 'text' as they have different structure
//   const colorEntries = Object.entries(colors).filter(
//     ([key]) => !['background', 'text'].includes(key)
//   );

//   return (
//     <Container>
//       <Content>
//         <Title>Color Palette</Title>
//         <Grid>
//           {colorEntries.map(([colorName, shades]) =>
//             renderColorSection(colorName, shades as Record<string, string>)
//           )}
//         </Grid>
//       </Content>
//     </Container>
//   );
// };

// export default ColorPalette;