// src/components/Navbar/Navbar.styles.ts
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideVertical = keyframes`
  from { top: -100px}
  to { top: 20px }
`;

export const NavbarContainer = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   height: ${({ theme }) => theme.sizes.navHeight};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 24px;
   background-color: ${({ theme }) => theme.colors.navBackground};
   z-index: 1000;
   box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
   transition: background-color 1s ease;
`;

export const NavigationGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; // This allows the navigation group to take up available space
  gap: 1rem; // Space between elements in the navigation group
`;

export const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
//   margin-left: 1rem; // Space between navigation and controls
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  top: 0;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

   img {
      height: 100px; // Adjust this value based on your needs
      width: auto;
      object-fit: contain;
      position: relative;
      animation: ${slideVertical} .5s ease-in forwards;
   }
`;

export const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;


export const MenuItems = styled.ul`
   display: flex;
   gap: 20px;
   list-style: none;
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   padding: 0;
//   margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
   //  opacity: .75;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navHeight};
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.navBackground};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 999;

  ${MenuItem} {
    text-align: center;
  }
`;

export const ExternalLinkIcon = styled.span`
  display: inline-block;
  margin-left: 0.25rem;
  font-size: 0.875rem;
  vertical-align: middle;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

// Add error message styling
//   background-color: ${({ theme }) => theme.colors.error};
export const ErrorMessage = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;