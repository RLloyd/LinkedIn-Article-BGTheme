// src/components/Navbar/Navbar.styles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: ${({ theme }) => theme.sizes.navHeight};
  background: ${({ theme }) => theme.colors.navBackground};
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between; // Changed to space-between for main container
  padding: 0 1rem;
  z-index: 1000;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
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
  margin-left: 1rem; // Space between navigation and controls
`;

// image logo
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  img {
    height: 100px; // Adjust this value based on your needs
    width: auto;
    object-fit: contain;
    position: relative;
   top: 10px;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  padding: 0;
  margin: 0;

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
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navHeight};
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.navBackground};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(5px);

  @media (min-width: 769px) {
    display: none;
  }
`;