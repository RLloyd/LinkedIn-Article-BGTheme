import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Play, Pause, Volume2, VolumeX, GripVertical, Moon, Sun, RotateCw } from "lucide-react";
import styled from "styled-components";

// ... keep all your styled components the same ...

const DraggableControlWidget: React.FC<DraggableControlWidgetProps> = ({
  audioSrc,
  toggleTheme,
  isDarkTheme,
  onProgressChange,
  onLoadComplete,
  onReload
}) => {
  // ... keep your state declarations and refs the same ...

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
  }, [SLOW_4G.totalLoadTime, SLOW_4G.progressInterval, SLOW_4G.randomVariation, onProgressChange, onLoadComplete, intervalId]);

  const handleReload = useCallback(() => {
    onReload();
    setTimeout(() => {
      simulateProgress();
    }, 100);
  }, [onReload, simulateProgress]);

  // Initialize audio context
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
        console.error("Audio initialization error:", error);
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
  }, [audioSrc, volume]);

  // Initialize position
  useEffect(() => {
    const updatePosition = () => {
      if (widgetRef.current) {
        const widgetRect = widgetRef.current.getBoundingClientRect();
        setPosition({
          x: window.innerWidth - widgetRect.width - 20,
          y: window.innerHeight - widgetRect.height - 20,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  // Start initial progress
  useEffect(() => {
    simulateProgress();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []); // Empty dependency array since we only want this to run once on mount

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
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // ... keep your other handlers (handleMouseDown, togglePlayback, etc.) ...

  return (
    // ... keep your JSX the same ...
  );
};

export default DraggableControlWidget;