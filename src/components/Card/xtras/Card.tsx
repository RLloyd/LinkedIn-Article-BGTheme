// mockData.ts
export interface CardItem {
   id: number;
   title: string;
   description: string;
   image: string;
   ctaText: string;
   ctaLink: string;
 }

 // Card.tsx
 import React from 'react';
 import { motion } from 'framer-motion';
 import { CardContainer, CardImage, CardContent, CardButton } from './Card.styles';
 import { CardItem } from '@/data/mockData';

 interface CardProps {
   card: CardItem;
   index: number;
 }

 const Card: React.FC<CardProps> = ({
   card: { title, description, image, ctaText, ctaLink },
   index
 }) => {
   return (
     <CardContainer
       as={motion.div}
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: index * 0.2 }}
     >
       <CardImage>
         <img src={image} alt={title} />
       </CardImage>
       <CardContent>
         <h2>{title}</h2>
         <p>{description}</p>
         <CardButton as="a" href={ctaLink}>{ctaText}</CardButton>
       </CardContent>
     </CardContainer>
   );
 };

 export default Card;