// src/components/Navbar/Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { NavbarContainer, NavigationGroup, ControlsGroup, Logo, MenuItems, MenuItem, ThemeToggle, MobileMenuButton, MobileMenu, LogoButton } from "./Navbar.styles";
import { navigationData } from "@/data/mockData";
import { NavigationItem } from "@/types/navigation";

interface NavbarProps {
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const {
		menuItems: { left: leftMenuItems, right: rightMenuItems },
		logo,
	} = navigationData;

	const getWindowFeatures = (isLogo: boolean = false) => {
		if (isLogo) {
			return `
        height=1020,
        width=${window.innerWidth},
        left=${window.screenX},
        top=${window.screenY},
        menubar=no,
        toolbar=no,
        location=yes,
        status=no,
        scrollbars=yes
      `.replace(/\s/g, "");
		}

		// Features for social window
		const width = 1920;
		const height = 1020;
		const left = (window.screen.width - width) / 2;
		const top = (window.screen.height - height) / 2;

		return `
      width=${width},
      height=${height},
      left=${left},
      top=${top},
      menubar=no,
      toolbar=no,
      location=yes,
      status=no,
      scrollbars=yes
    `.replace(/\s/g, "");
	};

	const handleLogoClick = () => {
		const newWindow = window.open(logo.path, "_blank", getWindowFeatures(true));
		if (newWindow) {
			newWindow.focus();
			window.close();
		}
	};

	const handleWindowOpen = (path: string) => {
		const newWindow = window.open(path, "SocialWindow", getWindowFeatures());
		if (newWindow) {
			newWindow.focus();
		}
	};

	const renderMenuItem = (item: NavigationItem) => {
		if (item.openInWindow) {
			return (
				<MenuItem key={item.label}>
					<a
						href={item.path}
						onClick={(e) => {
							e.preventDefault();
							handleWindowOpen(item.path);
						}}
					>
						{item.label}
					</a>
				</MenuItem>
			);
		}

		if (item.label === "Home" || item.isExternal) {
			return (
				<MenuItem key={item.label}>
					<a href={item.path} target="_blank" rel="noopener noreferrer">
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
				<MenuItems className="left-menu">{leftMenuItems.map(renderMenuItem)}</MenuItems>

				<Logo>
					<LogoButton onClick={handleLogoClick} aria-label={`${logo.alt} - Open article site in new window`}>
						<img src={logo.image} alt={logo.alt} loading="eager" />
					</LogoButton>
				</Logo>

				<MenuItems className="right-menu">{rightMenuItems.map(renderMenuItem)}</MenuItems>
			</NavigationGroup>

			<ControlsGroup>
				<ThemeToggle
               onClick={toggleTheme}
               aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
               >
                  {isDarkTheme ? <FiSun /> : <FiMoon />}
                  </ThemeToggle>

				<MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <FiX /> : <FiMenu />}</MobileMenuButton>
			</ControlsGroup>

			{isMobileMenuOpen && <MobileMenu>{[...leftMenuItems, ...rightMenuItems].map(renderMenuItem)}</MobileMenu>}
		</NavbarContainer>
	);
};

export default Navbar;
