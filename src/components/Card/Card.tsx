// src/components/Card/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CardContainer, CardImage, CardContent, CardButton } from './Card.styles';
import { CardItem } from '@/data/mockData';

interface CardProps {
  item: CardItem;
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  return (
    <CardContainer
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <CardImage>
        <img src={item.image} alt={item.title} />
      </CardImage>
      <CardContent>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <CardButton as="a" href={item.ctaLink}>{item.ctaText}</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

// src/components/Card/index.ts
export { default as Card } from './Card';