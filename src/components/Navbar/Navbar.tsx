import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiExternalLink } from 'react-icons/fi';
import {
  NavbarContainer,
  NavigationGroup,
  ControlsGroup,
  Logo,
  MenuItems,
  MenuItem,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu,
  ExternalLinkIcon,
  VisuallyHidden
} from './Navbar.styles';
import { navigationData } from '@/data/mockData';
import { NavigationItem } from '@/types/navigation';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { menuItems: { left: leftMenuItems, right: rightMenuItems }, logo } = navigationData;

  const handleExternalLink = useCallback((
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    label: string
  ) => {
    try {
      // Validate URL
      const url = new URL(path);
      if (!['http:', 'https:'].includes(url.protocol)) {
        throw new Error('Invalid URL protocol');
      }
    } catch (err) {
      event.preventDefault();
      setError(`Unable to navigate to ${label}. Please try again later.`);
      console.error('Navigation error:', err);

      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const renderMenuItem = (item: NavigationItem, isMobile: boolean = false) => {
    const commonProps = {
      onClick: isMobile ? toggleMobileMenu : undefined,
      role: "menuitem",
    };

    if (item.isExternal) {
      return (
        <MenuItem
          key={item.label}
          {...commonProps}
        >
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleExternalLink(e, item.path, item.label)}
            aria-label={`${item.label} (opens in new tab)`}
          >
            {item.label}
            <ExternalLinkIcon aria-hidden="true">
              <FiExternalLink />
            </ExternalLinkIcon>
            <VisuallyHidden>(opens in new tab)</VisuallyHidden>
          </a>
        </MenuItem>
      );
    }

    return (
      <MenuItem
        key={item.label}
        {...commonProps}
      >
        <Link
          to={item.path}
          aria-current={window.location.pathname === item.path ? "page" : undefined}
        >
          {item.label}
        </Link>
      </MenuItem>
    );
  };

  return (
    <nav
      aria-label="Main navigation"
      role="navigation"
    >
      <NavbarContainer>
        <NavigationGroup>
          <MenuItems
            className="left-menu"
            role="menu"
            aria-label="Left navigation"
          >
            {leftMenuItems.map(item => renderMenuItem(item))}
          </MenuItems>

          <Logo>
            <Link
              to="/"
              aria-label={`${logo.alt} - Return to homepage`}
            >
              <img
                src={logo.image}
                alt=""
                loading="eager"
                aria-hidden="true"
              />
            </Link>
          </Logo>

          <MenuItems
            className="right-menu"
            role="menu"
            aria-label="Right navigation"
          >
            {rightMenuItems.map(item => renderMenuItem(item))}
          </MenuItems>
        </NavigationGroup>

        <ControlsGroup>
          <ThemeToggle
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
            role="button"
          >
            {isDarkTheme ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </ThemeToggle>

          <MobileMenuButton
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} mobile menu`}
          >
            {isMobileMenuOpen ?
              <FiX aria-hidden="true" /> :
              <FiMenu aria-hidden="true" />
            }
          </MobileMenuButton>
        </ControlsGroup>

        {isMobileMenuOpen && (
          <MobileMenu
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
          >
            {[...leftMenuItems, ...rightMenuItems].map(item =>
              renderMenuItem(item, true)
            )}
          </MobileMenu>
        )}

        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="error-message"
          >
            {error}
          </div>
        )}
      </NavbarContainer>
    </nav>
  );
};

export default Navbar;