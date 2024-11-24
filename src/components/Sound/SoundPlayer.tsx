//src/components/Sound/AudioPlayer.tsx

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

const AudioControlsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const SoundPlayer: React.FC<AudioPlayerProps> = ({
   audioSrc,
   autoPlayDelay = 0,
   initialVolume = 0.8,
   fadeInDuration = 0.5,
   onPlayStart,
   onPlayEnd,
   onError,
   controls = true,
   className
 }) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
   const audioContextRef = useRef<AudioContext | null>(null);
   const gainNodeRef = useRef<GainNode | null>(null);
   const sourceRef = useRef<AudioBufferSourceNode | null>(null);
   const audioBufferRef = useRef<AudioBuffer | null>(null);

   const stopSound = useCallback(() => {
     try {
       if (sourceRef.current) {
         sourceRef.current.stop();
         sourceRef.current.disconnect();
         sourceRef.current = null;
       }
       if (gainNodeRef.current) {
         gainNodeRef.current.gain.value = 0;
       }
       setIsPlaying(false);
       onPlayEnd?.();
       console.log('Sound stopped');
     } catch (error) {
       console.error('Error stopping sound:', error);
     }
   }, [onPlayEnd]);

   const initAudioContext = useCallback(async () => {
     if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
       try {
         console.log('Creating new AudioContext...');
         const AudioContext = window.AudioContext || window.webkitAudioContext;
         audioContextRef.current = new AudioContext();

         console.log('Creating gain node...');
         gainNodeRef.current = audioContextRef.current.createGain();
         gainNodeRef.current.connect(audioContextRef.current.destination);
         gainNodeRef.current.gain.value = 0;

         console.log('Fetching audio file:', audioSrc);
         const response = await fetch(audioSrc);
         const arrayBuffer = await response.arrayBuffer();

         console.log('Decoding audio data...');
         audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);

         setIsLoaded(true);
         console.log('Audio initialized successfully');
         return true;
       } catch (error) {
         console.error('Audio initialization error:', error);
         onError?.(error as Error);
         return false;
       }
     }
     return true;
   }, [audioSrc, onError]);

   const playSound = useCallback(async () => {
     if (isPlaying) {
       stopSound();
       return;
     }

     try {
       // Initialize if needed
       if (!audioContextRef.current || !audioBufferRef.current) {
         console.log('Initializing audio before playing...');
         const initialized = await initAudioContext();
         if (!initialized) return;
       }

       // Resume if suspended
       if (audioContextRef.current.state === 'suspended') {
         console.log('Resuming audio context...');
         await audioContextRef.current.resume();
       }

       console.log('Setting up playback...');
       // Create and setup source
       sourceRef.current = audioContextRef.current.createBufferSource();
       sourceRef.current.buffer = audioBufferRef.current;
       sourceRef.current.connect(gainNodeRef.current!);

       // Set up volume fade in
       const currentTime = audioContextRef.current.currentTime;
       gainNodeRef.current!.gain.setValueAtTime(0, currentTime);
       gainNodeRef.current!.gain.linearRampToValueAtTime(
         initialVolume,
         currentTime + fadeInDuration
       );

       // Start playback
       console.log('Starting playback with volume:', initialVolume);
       sourceRef.current.start(0);
       setIsPlaying(true);
       onPlayStart?.();

       sourceRef.current.onended = () => {
         console.log('Playback ended naturally');
         setIsPlaying(false);
         onPlayEnd?.();
         sourceRef.current = null;
       };

     } catch (error) {
       console.error('Playback failed:', error);
       onError?.(error as Error);
       setIsPlaying(false);
     }
   }, [isPlaying, stopSound, initAudioContext, initialVolume, fadeInDuration, onPlayStart, onPlayEnd, onError]);

   // Initialize audio on mount
   useEffect(() => {
     console.log('Initializing audio component...');
     initAudioContext();

     return () => {
       console.log('Cleaning up audio component...');
       stopSound();
       if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
         audioContextRef.current.close().catch(console.error);
       }
     };
   }, [initAudioContext, stopSound]);

   // Handle autoplay
   useEffect(() => {
     if (autoPlayDelay > 0 && !hasAutoPlayed && isLoaded) {
       console.log(`Setting up autoplay with ${autoPlayDelay}ms delay...`);
       const autoPlayTimer = setTimeout(async () => {
         console.log('Executing autoplay...');
         await playSound();
         setHasAutoPlayed(true);
       }, autoPlayDelay);

       return () => {
         console.log('Cleaning up autoplay timer...');
         clearTimeout(autoPlayTimer);
       };
     }
   }, [autoPlayDelay, hasAutoPlayed, isLoaded, playSound]);

   // Don't render anything if controls are disabled
   if (!controls) return null;

   // Render play/stop button
   return (
     <AudioControlsContainer>
       <PlayButton
         onClick={playSound}
         disabled={!isLoaded}
         className={className}
       >
         {isPlaying ? '🔊 Stop' : '🔈 Play'}
       </PlayButton>
     </AudioControlsContainer>
   );
 };

 export default SoundPlayer;