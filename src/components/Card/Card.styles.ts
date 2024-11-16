// src/components/Card/Card.styles.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardGradient};
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
  min-width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

export const CardButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;