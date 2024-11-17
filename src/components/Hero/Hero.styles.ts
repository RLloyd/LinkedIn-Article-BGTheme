import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SlideWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.heroGradient};
`;

//   max-width: ${({ theme }) => theme.sizes.maxWidth};
//   height: ${({ theme }) => theme.sizes.heroHeight};
export const HeroContainer = styled.section`
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.sizes.navHeight};
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ContentSide = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 2rem;
    text-align: center;
  }
`;

export const ImageSide = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.heroGradient};
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  max-width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const SlideIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 4rem;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const NavigationDots = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : `${theme.colors.primary}40`};
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;