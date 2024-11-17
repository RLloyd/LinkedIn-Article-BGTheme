// src/components/WindowOpener/WindowOpener.tsx
import React from 'react';
import styled from 'styled-components';

interface WindowOpenerProps {
  url: string;
  className?: string;
}

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    opacity: 0.9;
  }
`;

/**
 * A button that opens the given URL in a new window.
 * If the popup is blocked, it will open in the same window.
 *
 * @param {string} url The URL to open
 * @param {string} [className] Additional class names for the button
 * @returns {ReactElement}
 */
const WindowOpener: React.FC<WindowOpenerProps> = ({ url, className }) => {
  const openNewWindow = () => {
    const windowFeatures = {
      height: 1020,
      width: window.innerWidth,
      menubar: 'no',
      toolbar: 'no',
      status: 'no',
      scrollbars: 'yes'
    };

    const featuresString = Object.entries(windowFeatures)
      .map(([key, value]) => `${key}=${value}`)
      .join(',');

    const newWindow = window.open(url, '_blank', featuresString);

    if (newWindow) {
      newWindow.focus();
    } else {
      // If popup was blocked, open in same window
      window.location.href = url;
    }
  };

  return (
    <Button
      onClick={openNewWindow}
      className={className}
      aria-label="Open in new window"
    >
      Open in New Window
    </Button>
  );
};

export default WindowOpener;