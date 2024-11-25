// src/components/NetworkThrottle/NetworkThrottle.tsx

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const ThrottleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }
`;

interface NetworkThrottleProps {
  children: React.ReactNode;
  onProgressChange: (progress: number) => void;
  onLoadComplete: () => void;
  onReload: () => void;
}

const NetworkThrottle: React.FC<NetworkThrottleProps> = ({
  children,
  onProgressChange,
  onLoadComplete,
  onReload
}) => {
  const [isThrottled, setIsThrottled] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const SLOW_4G = useMemo(() => ({
    totalLoadTime: 8000,
    progressInterval: 100,
    randomVariation: 0.2,
  }), []);

  const simulateProgress = useCallback(() => {
    let progress = 0;

    if (intervalId) {
      clearInterval(intervalId);
    }

    const interval = setInterval(() => {
      const incrementsNeeded = SLOW_4G.totalLoadTime / SLOW_4G.progressInterval;
      const baseIncrement = 100 / incrementsNeeded;
      const variation = (Math.random() * 2 - 1) * SLOW_4G.randomVariation * baseIncrement;
      const increment = Math.max(0.1, baseIncrement + variation);

      progress = Math.min(100, progress + increment);
      onProgressChange(Math.floor(progress));

      if (progress >= 100) {
        clearInterval(interval);
        setIntervalId(null);
        // Add small delay before completing to ensure final progress is shown
        setTimeout(() => {
          onLoadComplete();
        }, 200);
      }
    }, SLOW_4G.progressInterval);

    setIntervalId(interval);
  }, [SLOW_4G.totalLoadTime, SLOW_4G.progressInterval, SLOW_4G.randomVariation, onProgressChange, onLoadComplete]);

  const toggleThrottle = useCallback(() => {
    setIsThrottled(prev => {
      if (!prev) {
        // Enabling throttle
        onReload();
        // Start progress simulation after a short delay
        setTimeout(simulateProgress, 100);
      } else {
        // Disabling throttle
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }
      return !prev;
    });
  }, [onReload, simulateProgress, intervalId]);

  // Cleanup on unmount or when disabled
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <>
      <ThrottleButton onClick={toggleThrottle}>
        {isThrottled ? 'Disable' : 'Enable'} Slow 4G
      </ThrottleButton>
      {children}
    </>
  );
};

export default NetworkThrottle;