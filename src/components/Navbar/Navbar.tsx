import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import {
  NavbarContainer,
  NavigationGroup,
  ControlsGroup,
  Logo,
  MenuItems,
  MenuItem,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu
} from './Navbar.styles';
import { navigationData } from '@/data/mockData';
import { NavigationItem } from '@/types/navigation';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { menuItems: { left: leftMenuItems, right: rightMenuItems }, logo } = navigationData;

  const renderMenuItem = (item: NavigationItem, isMobile: boolean = false) => {
    if (item.isExternal) {
      return (
        <MenuItem
          key={item.label}
          onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
        >
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        </MenuItem>
      );
    }

    return (
      <MenuItem
        key={item.label}
         // onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined} // If isMobile is true, close the menu //Claude original
         // onClick={isMobile && (() => setIsMobileMenuOpen(false))} // If isMobile is true, close the menu //ChatGPT suugestion trying to avoud undefined but it doesn't work
         onClick={() => { //CGPT alternative //too many lines
            if (isMobile) {
              setIsMobileMenuOpen(false);
            }
         }}
      >
        <Link to={item.path}>{item.label}</Link>
      </MenuItem>
    );
  };

  return (
    <NavbarContainer>
      <NavigationGroup>
        <MenuItems className="left-menu">
          {leftMenuItems.map(item => renderMenuItem(item))}
        </MenuItems>

        <Logo>
          <Link to="/">
            <img
              src={logo.image}
              alt={logo.alt}
              loading="eager"
            />
          </Link>
        </Logo>

        <MenuItems className="right-menu">
          {rightMenuItems.map(item => renderMenuItem(item))}
        </MenuItems>
      </NavigationGroup>

      <ControlsGroup>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? <FiSun /> : <FiMoon />}
        </ThemeToggle>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </ControlsGroup>

      {isMobileMenuOpen && (
        <MobileMenu>
          {[...leftMenuItems, ...rightMenuItems].map(item =>
            renderMenuItem(item, true)
          )}
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;