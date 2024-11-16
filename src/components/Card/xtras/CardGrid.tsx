import React from 'react';
import styled from 'styled-components';
import Card from './Card';

interface CardGridProps {
  items: Array<{
    title: string;
    description: string;
    image: string;
    tags?: string[];
    links?: {
      demo?: string;
      github?: string;
      details?: string;
    };
  }>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 3rem;
  }
`;

const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return (
    <Grid>
      {items.map((item, index) => (
        <Card key={index} {...item} index={index} />
      ))}
    </Grid>
  );
};

export default CardGrid;