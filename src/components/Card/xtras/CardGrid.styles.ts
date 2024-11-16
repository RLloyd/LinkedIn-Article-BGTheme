// src/components/Card/CardGrid.styles.ts
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.normal};
`;

