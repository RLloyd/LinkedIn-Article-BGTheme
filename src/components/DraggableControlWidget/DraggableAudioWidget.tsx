//src/components/DraggableControlWidget/DraggableAudioWidget.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, GripVertical, Moon, Sun } from 'lucide-react';
import styled from 'styled-components';

const WidgetContainer = styled.div<{ $isDragging: boolean }>`
  position: fixed;
  background: ${({ theme }) => theme.isDarkTheme
    ? 'rgba(18, 18, 18, 0.9)'
    : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${({ theme }) => theme.colors.border[theme.isDarkTheme ? 'dark' : 'light'].primary};
  border-radius: 0.5rem;
  padding: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${({ $isDragging }) => $isDragging ? 'scale(1.02)' : 'scale(1)'};
  transition: ${({ $isDragging }) => $isDragging ? 'none' : 'all 0.2s ease'};
  z-index: 50;
`;

const DragHandle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  cursor: move;
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].secondary};
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: 0.875rem;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const IconButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border[theme.isDarkTheme ? 'dark' : 'light'].primary};
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.isDarkTheme
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.05)'};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const VolumeSlider = styled.input`
  width: 6rem;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 4rem;
  }
`;

interface DraggableAudioWidgetProps {
  audioSrc: string;
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const DraggableAudioWidget: React.FC<DraggableAudioWidgetProps> = ({
  audioSrc,
  toggleTheme,
  isDarkTheme
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const widgetRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  // Initialize position
  useEffect(() => {
    const updatePosition = () => {
      if (widgetRef.current) {
        const widgetRect = widgetRef.current.getBoundingClientRect();
        setPosition({
          x: window.innerWidth - widgetRect.width - 20,
          y: window.innerHeight - widgetRect.height - 20
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Initialize audio
  useEffect(() => {
    const initAudio = async () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.connect(audioContextRef.current.destination);
        gainNodeRef.current.gain.value = volume;

        const response = await fetch(audioSrc);
        const arrayBuffer = await response.arrayBuffer();
        const decoded = await audioContextRef.current.decodeAudioData(arrayBuffer);
        setAudioBuffer(decoded);
      } catch (error) {
        console.error('Audio initialization error:', error);
      }
    };

    initAudio();

    return () => {
      if (sourceRef.current) {
        sourceRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [audioSrc]);

  // Handle dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      if (widgetRef.current) {
        const widgetRect = widgetRef.current.getBoundingClientRect();
        const maxX = window.innerWidth - widgetRect.width;
        const maxY = window.innerHeight - widgetRect.height;

        const boundedX = Math.min(Math.max(0, newX), maxX);
        const boundedY = Math.min(Math.max(0, newY), maxY);

        setPosition({ x: boundedX, y: boundedY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (widgetRef.current) {
      const rect = widgetRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const togglePlayback = async () => {
    if (!audioContextRef.current || !audioBuffer) return;

    try {
      if (isPlaying && sourceRef.current) {
        sourceRef.current.stop();
        sourceRef.current = null;
        setIsPlaying(false);
        return;
      }

      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      sourceRef.current = audioContextRef.current.createBufferSource();
      sourceRef.current.buffer = audioBuffer;
      sourceRef.current.connect(gainNodeRef.current!);
      sourceRef.current.loop = true;
      sourceRef.current.start(0);
      setIsPlaying(true);

      sourceRef.current.onended = () => {
        setIsPlaying(false);
        sourceRef.current = null;
      };
    } catch (error) {
      console.error('Playback error:', error);
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (gainNodeRef.current) {
      if (isMuted) {
        gainNodeRef.current.gain.value = volume;
      } else {
        gainNodeRef.current.gain.value = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <WidgetContainer
      ref={widgetRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      $isDragging={isDragging}
    >
      <DragHandle onMouseDown={handleMouseDown}>
        <GripVertical size={16} />
        <span>Audio Controls</span>
      </DragHandle>

      <Controls>
        <IconButton onClick={togglePlayback} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </IconButton>

        <IconButton onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </IconButton>

        <VolumeSlider
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
        />

        <IconButton
          onClick={toggleTheme}
          aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>
      </Controls>
    </WidgetContainer>
  );
};

export default DraggableAudioWidget;