// src/components/Card/animations.ts
import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren"
    }
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const imageVariants: Variants = {
  hover: {
    scale: 1.05,
    filter: "brightness(1.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

