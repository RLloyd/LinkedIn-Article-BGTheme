// src/components/SharedControlWidget/SharedControlWidget.tsx
import React from 'react';
import DraggableControlWidget from '@/components/DraggableControlWidget/DraggableControlWidget';
import whaleSound from '@/assets/sounds/whale-call-2.wav';

interface SharedControlWidgetProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
  onProgressChange?: (progress: number) => void;
  onLoadComplete?: () => void;
  onReload?: () => void;
}

const SharedControlWidget: React.FC<SharedControlWidgetProps> = ({
  toggleTheme,
  isDarkTheme,
  onProgressChange = () => {},
  onLoadComplete = () => {},
  onReload = () => {}
}) => {
  return (
    <DraggableControlWidget
      audioSrc={whaleSound}
      toggleTheme={toggleTheme}
      isDarkTheme={isDarkTheme}
      onProgressChange={onProgressChange}
      onLoadComplete={onLoadComplete}
      onReload={onReload}
    />
  );
};

export default SharedControlWidget;