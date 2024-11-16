import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSlide } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';
import {
  HeroContainer,
  ContentSide,
  ImageSide,
  Title,
  Subtitle,
  CTAButton,
  SlideIndicators,
  NavigationDots,
  SlideWrapper
} from './Hero.styles';

interface HeroProps {
  slides: HeroSlide[];
}

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <HeroContainer>
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <SlideWrapper
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <ContentSide>
            <Title>{slides[currentSlide].title}</Title>
            <Subtitle>{slides[currentSlide].description}</Subtitle>
            <CTAButton onClick={() => window.location.href = slides[currentSlide].ctaLink || '#'}>
              {slides[currentSlide].ctaText}
              <ArrowRight size={20} />
            </CTAButton>
          </ContentSide>

          <ImageSide>
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </ImageSide>
        </SlideWrapper>
      </AnimatePresence>

      <SlideIndicators>
        {slides.map((_, index) => (
          <NavigationDots
            key={index}
            active={currentSlide === index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </SlideIndicators>
    </HeroContainer>
  );
};

export default Hero;