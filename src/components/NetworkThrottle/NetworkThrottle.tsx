// src/components/NetworkThrottle/NetworkThrottle.tsx

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { RotateCw } from 'lucide-react'; // Import reload icon

const ThrottleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 100px; // Moved right to make space for theme button
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
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
         setTimeout(() => {
           onLoadComplete();
         }, 200);
       }
     }, SLOW_4G.progressInterval);

     setIntervalId(interval);
   }, [SLOW_4G.totalLoadTime, SLOW_4G.progressInterval, SLOW_4G.randomVariation, onProgressChange, onLoadComplete]);

   const handleReload = useCallback(() => {
     onReload();
     setTimeout(simulateProgress, 100);
   }, [onReload, simulateProgress]);

   // Auto-start on mount
   useEffect(() => {
     handleReload();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // Cleanup on unmount
   useEffect(() => {
     return () => {
       if (intervalId) {
         clearInterval(intervalId);
       }
     };
   }, [intervalId]);

   return (
      <>
        <ThrottleButton onClick={handleReload}>
          <RotateCw /> Reload (Slow 4G)
        </ThrottleButton>
        {children}
      </>
  );
};

export default NetworkThrottle;