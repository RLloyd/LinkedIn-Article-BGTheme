import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Play, Pause, Volume2, VolumeX, GripVertical, Moon, Sun, RotateCw } from "lucide-react";
import styled from "styled-components";

// ... keep styled components the same ...

const DraggableControlWidget: React.FC<DraggableControlWidgetProps> = ({
  audioSrc,
  toggleTheme,
  isDarkTheme,
  onProgressChange,
  onLoadComplete,
  onReload
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Audio refs
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Create audio element on mount
  useEffect(() => {
    audioElementRef.current = new Audio(audioSrc);
    audioElementRef.current.volume = volume;

    return () => {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current.src = '';
      }
    };
  }, [audioSrc]);

  // Handle play/pause
  const togglePlayback = async () => {
    if (!audioElementRef.current) return;

    try {
      if (isPlaying) {
        audioElementRef.current.pause();
      } else {
        // Reset to start if ended
        if (audioElementRef.current.ended) {
          audioElementRef.current.currentTime = 0;
        }
        await audioElementRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioElementRef.current) {
      audioElementRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (!audioElementRef.current) return;

    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    audioElementRef.current.volume = newMutedState ? 0 : volume;
  };

  // Handle audio ended
  useEffect(() => {
    const audioElement = audioElementRef.current;
    if (!audioElement) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener('ended', handleEnded);
    return () => {
      audioElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Progress simulation
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

  // Start initial progress
  useEffect(() => {
    simulateProgress();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // ... keep your dragging logic ...

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
        <span>Controls</span>
      </DragHandle>

      <ControlsGroup>
        <ReloadButton onClick={handleReload}>
          <RotateCw size={16} />
          Reload (Slow 4G)
        </ReloadButton>

        <Controls>
          <IconButton
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </IconButton>

          <IconButton
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
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
            aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </Controls>
      </ControlsGroup>
    </WidgetContainer>
  );
};

export default DraggableControlWidget;