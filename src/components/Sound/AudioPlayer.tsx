import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AudioPlayerProps {
  audioSrc: string;
  autoPlayDelay?: number;
  initialVolume?: number;
  fadeInDuration?: number;
  onPlayStart?: () => void;
  onPlayEnd?: () => void;
  onError?: (error: Error) => void;
  controls?: boolean;
  className?: string;
}

const PlayButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 12px 24px;
	background: rgba(0, 0, 0, 0.7);
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
	z-index: 1000;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: background-color 0.3s ease;

	&:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc,
  autoPlayDelay = 0,
  initialVolume = 0.3,
  fadeInDuration = 1,
  onPlayStart,
  onPlayEnd,
  onError,
  controls = true,
  className
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const playTimeoutRef = useRef<number | null>(null);

  // Initialize audio context and fetch audio buffer
  useEffect(() => {
    const initAudioContext = async () => {
      try {
        // Create new audio context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();

        // Create gain node
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.connect(audioContextRef.current.destination);
        gainNodeRef.current.gain.value = 0;

        // Fetch and decode audio
        const response = await fetch(audioSrc);
        const arrayBuffer = await response.arrayBuffer();
        const decodedBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);

        setAudioBuffer(decodedBuffer);
        setIsInitialized(true);
      } catch (error) {
        console.error("Audio initialization error:", error);
        onError?.(error as Error);
      }
    };

    initAudioContext();

    // Cleanup function
    return () => {
      if (playTimeoutRef.current) {
        window.clearTimeout(playTimeoutRef.current);
      }
      if (sourceRef.current) {
        sourceRef.current.stop();
        sourceRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [audioSrc, onError]);

  const stopSound = useCallback(() => {
    if (sourceRef.current) {
      try {
        // Fade out
        if (gainNodeRef.current && audioContextRef.current) {
          const currentTime = audioContextRef.current.currentTime;
          gainNodeRef.current.gain.linearRampToValueAtTime(0, currentTime + 0.1);
        }

        // Schedule the stop slightly after fade out
        setTimeout(() => {
          if (sourceRef.current) {
            sourceRef.current.stop();
            sourceRef.current.disconnect();
            sourceRef.current = null;
          }
          setIsPlaying(false);
          onPlayEnd?.();
        }, 150);
      } catch (error) {
        console.error("Error stopping sound:", error);
      }
    }
  }, [onPlayEnd]);

  const playSound = useCallback(async () => {
    if (!audioContextRef.current || !audioBuffer || !gainNodeRef.current) {
      return;
    }

    try {
      // Stop any currently playing sound
      if (sourceRef.current) {
        stopSound();
      }

      // Resume context if suspended
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      // Create and configure new source
      sourceRef.current = audioContextRef.current.createBufferSource();
      sourceRef.current.buffer = audioBuffer;
      sourceRef.current.connect(gainNodeRef.current);

      // Reset gain and start fade in
      const currentTime = audioContextRef.current.currentTime;
      gainNodeRef.current.gain.setValueAtTime(0, currentTime);
      gainNodeRef.current.gain.linearRampToValueAtTime(
        initialVolume,
        currentTime + fadeInDuration
      );

      // Start playback
      sourceRef.current.start();
      setIsPlaying(true);
      onPlayStart?.();

      // Handle ending
      sourceRef.current.onended = () => {
        setIsPlaying(false);
        onPlayEnd?.();
        sourceRef.current = null;
      };

    } catch (error) {
      console.error("Playback failed:", error);
      onError?.(error as Error);
      setIsPlaying(false);
    }
  }, [audioBuffer, initialVolume, fadeInDuration, onPlayStart, onPlayEnd, onError, stopSound]);

  // Handle auto-play
  useEffect(() => {
    if (isInitialized && autoPlayDelay > 0) {
      playTimeoutRef.current = window.setTimeout(() => {
        playSound();
      }, autoPlayDelay);

      return () => {
        if (playTimeoutRef.current) {
          window.clearTimeout(playTimeoutRef.current);
        }
      };
    }
  }, [isInitialized, autoPlayDelay, playSound]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (playTimeoutRef.current) {
        window.clearTimeout(playTimeoutRef.current);
      }
      stopSound();
    };
  }, [stopSound]);

  if (!controls) {
    return null;
  }

  return (
    <PlayButton
      onClick={isPlaying ? stopSound : playSound}
      disabled={!isInitialized}
      className={className}
    >
      {isPlaying ? '🔊 Stop' : '🔈 Play Sound'}
    </PlayButton>
  );
};

export default AudioPlayer;