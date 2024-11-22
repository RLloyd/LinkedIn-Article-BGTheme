import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState, PropsWithChildren } from 'react';

// Define styled component with TypeScript
const AnimatedTextDiv = styled(motion.div)`
  font-family: 'Libre Baskerville', serif;
  font-size: 200px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  text-align: center;
  position: fixed;
  width: 100%;
  transition: color 2s ease;
  z-index: 100;

  @media (max-width: 768px) {
    font-size: 22vw;
  }
`;

// Define animation variants
const variants: Variants = {
  desktop: {
    top: 400,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  mobile: {
    top: 100,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

// Define component props interface
interface AnimatedTextProps extends PropsWithChildren {
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatedTextDiv
      initial={isMobile ? "mobile" : "desktop"}
      animate={isMobile ? "mobile" : "desktop"}
      variants={variants}
      className={className}
    >
      {children}
    </AnimatedTextDiv>
  );
};

export default AnimatedText;