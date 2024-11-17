// src/components/Navbar/Navbar.tsx
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
  MobileMenu,
  LogoButton
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

  const homeUrl = leftMenuItems.find(item => item.label === 'Home')?.path || 'https://www.rlloydgonzales.com';

  const handleLogoClick = () => {
    const windowFeatures = `
      height=1020,
      width=${window.innerWidth},
      left=${window.screenX},
      top=${window.screenY},
      menubar=no,
      toolbar=no,
      location=yes,
      status=no,
      scrollbars=yes
    `.replace(/\s/g, '');

    const newWindow = window.open(homeUrl, '_blank', windowFeatures);
    if (newWindow) {
      newWindow.focus();
      window.close();
    }
  };

  const renderMenuItem = (item: NavigationItem) => {
    if (item.isExternal) {
      return (
        <MenuItem key={item.label}>
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
      <MenuItem key={item.label}>
        <Link to={item.path}>{item.label}</Link>
      </MenuItem>
    );
  };

  return (
    <NavbarContainer>
      <NavigationGroup>
        <MenuItems className="left-menu">
          {leftMenuItems.map(renderMenuItem)}
        </MenuItems>

        <Logo>
          <LogoButton
            onClick={handleLogoClick}
            aria-label={`${logo.alt} - Open in new window`}
          >
            <img
              src={logo.image}
              alt={logo.alt}
              loading="eager"
            />
          </LogoButton>
        </Logo>

        <MenuItems className="right-menu">
          {rightMenuItems.map(renderMenuItem)}
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
          {[...leftMenuItems, ...rightMenuItems].map(renderMenuItem)}
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

// // src/components/Navbar/Navbar.tsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
// import {
//   NavbarContainer,
//   NavigationGroup,
//   ControlsGroup,
//   Logo,
//   MenuItems,
//   MenuItem,
//   ThemeToggle,
//   MobileMenuButton,
//   MobileMenu,
//   LogoButton,
//   FadeOverlay
// } from './Navbar.styles';
// import { navigationData } from '@/data/mockData';
// import { NavigationItem } from '@/types/navigation';

// interface NavbarProps {
//   toggleTheme: () => void;
//   isDarkTheme: boolean;
// }

// const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const { menuItems: { left: leftMenuItems, right: rightMenuItems }, logo } = navigationData;

//   const homeUrl = leftMenuItems.find(item => item.label === 'Home')?.path || 'https://www.rlloydgonzales.com';

//   const handleLogoClick = () => {
//     const windowFeatures = `
//       height=1020,
//       width=${window.innerWidth},
//       left=${window.screenX},
//       top=${window.screenY},
//       menubar=no,
//       toolbar=no,
//       location=yes,
//       status=no,
//       scrollbars=yes
//     `.replace(/\s/g, '');

//     const newWindow = window.open(homeUrl, '_blank', windowFeatures);
//     if (newWindow) {
//       newWindow.focus();
//       window.close();
//     }
//   };

//   const renderMenuItem = (item: NavigationItem) => {
//     if (item.isExternal) {
//       return (
//         <MenuItem key={item.label}>
//           <a
//             href={item.path}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {item.label}
//           </a>
//         </MenuItem>
//       );
//     }

//     return (
//       <MenuItem key={item.label}>
//         <Link to={item.path}>{item.label}</Link>
//       </MenuItem>
//     );
//   };

//   return (
//     <>
//       {isTransitioning && <FadeOverlay />}
//       <NavbarContainer>
//         <NavigationGroup>
//           <MenuItems className="left-menu">
//             {leftMenuItems.map(renderMenuItem)}
//           </MenuItems>

//           <Logo>
//             <LogoButton
//               onClick={handleLogoClick}
//               aria-label={`${logo.alt} - Open in new window`}
//               disabled={isTransitioning}
//             >
//               <img
//                 src={logo.image}
//                 alt={logo.alt}
//                 loading="eager"
//               />
//             </LogoButton>
//           </Logo>

//           <MenuItems className="right-menu">
//             {rightMenuItems.map(renderMenuItem)}
//           </MenuItems>
//         </NavigationGroup>

//         <ControlsGroup>
//           <ThemeToggle onClick={toggleTheme} disabled={isTransitioning}>
//             {isDarkTheme ? <FiSun /> : <FiMoon />}
//           </ThemeToggle>

//           <MobileMenuButton
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             disabled={isTransitioning}
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </MobileMenuButton>
//         </ControlsGroup>

//         {isMobileMenuOpen && (
//           <MobileMenu>
//             {[...leftMenuItems, ...rightMenuItems].map(renderMenuItem)}
//           </MobileMenu>
//         )}
//       </NavbarContainer>
//     </>
//   );
// };

// export default Navbar;