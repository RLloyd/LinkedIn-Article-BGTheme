// src/components/Card/types.ts
export interface CardProps {
   title: string;
   description: string;
   image: string;
   index: number;
   tags?: string[];
   links?: {
     demo?: string;
     github?: string;
     details?: string;
   };
 }