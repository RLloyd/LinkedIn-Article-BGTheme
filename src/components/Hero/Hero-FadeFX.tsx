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
} from './Hero.styles';

interface HeroProps {
  slides: HeroSlide[];
}

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <HeroContainer>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ display: 'flex', width: '100%' }}
        >
          <ContentSide>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Title>{slides[currentSlide].title}</Title>
              <Subtitle>{slides[currentSlide].description}</Subtitle>
              <CTAButton onClick={() => window.location.href = slides[currentSlide].ctaLink || '#'}>
                {slides[currentSlide].ctaText}
                <ArrowRight size={20} />
              </CTAButton>
            </motion.div>

            <SlideIndicators>
              {slides.map((_, index) => (
                <NavigationDots
                  key={index}
                  active={currentSlide === index}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </SlideIndicators>
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
        </motion.div>
      </AnimatePresence>
    </HeroContainer>
  );
};

export default Hero;