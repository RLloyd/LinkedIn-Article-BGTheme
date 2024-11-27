// src/components/DraggableControlWidget/DraggableControlWidget.tsx

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, GripVertical, Moon, Sun, RotateCw } from "lucide-react";
import styled from "styled-components";

// ================ Styled Components ================
const WidgetContainer = styled.div<{ $isDragging: boolean }>`
	position: fixed;
	background: ${({ theme }) => (theme.isDarkTheme ? "rgba(18, 18, 18, 0.9)" : "rgba(180, 200, 250, 0.75)")};
	border: 1px solid ${({ theme }) => theme.colors.border[theme.isDarkTheme ? "dark" : "light"].primary};
	border-radius: 0.5rem;
	padding: 0.75rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transform: ${({ $isDragging }) => ($isDragging ? "scale(1.02)" : "scale(1)")};
	transition: ${({ $isDragging }) => ($isDragging ? "none" : "all 0.2s ease")};
	z-index: 50;
	min-width: 200px;
`;

const DragHandle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.75rem;
	cursor: move;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].accent};
	font-family: ${({ theme }) => theme.typography.heading.fontFamily};
	//   font-family: ${({ theme }) => theme.typography.body.fontFamily};
	font-size: 1rem;
`;

const ControlsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
`;

const IconButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: 1px solid ${({ theme }) => theme.colors.border[theme.isDarkTheme ? "dark" : "light"].primary};
	padding: 0.5rem;
	border-radius: 0.25rem;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].primary};
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${({ theme }) => (theme.isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)")};
	}

	&:active {
		transform: scale(0.95);
	}
`;

const ReloadButton = styled(IconButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 100%;
	padding: 0.625rem;
	font-family: ${({ theme }) => theme.typography.body.fontFamily};
	font-size: 0.875rem;
`;

const VolumeSlider = styled.input`
	width: 6rem;
	cursor: pointer;

	@media (max-width: 640px) {
		width: 4rem;
	}
`;

export const useLoadingSimulator = (onProgressChange: (progress: number) => void, onLoadComplete: () => void) => {
	const [isSimulating, setIsSimulating] = useState(false);
	const progressRef = useRef(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const SLOW_4G = useMemo(
		() => ({
			totalLoadTime: 8000,
			progressInterval: 100,
			randomVariation: 0.2,
		}),
		[]
	);

	const clearSimulation = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		progressRef.current = 0;
		setIsSimulating(false);
	}, []);

	const simulateProgress = useCallback(() => {
		// Clear any existing simulation
		clearSimulation();

		// Reset progress
		progressRef.current = 0;
		onProgressChange(0);
		setIsSimulating(true);

		intervalRef.current = setInterval(() => {
			const incrementsNeeded = SLOW_4G.totalLoadTime / SLOW_4G.progressInterval;
			const baseIncrement = 100 / incrementsNeeded;
			const variation = (Math.random() * 2 - 1) * SLOW_4G.randomVariation * baseIncrement;
			const increment = Math.max(0.1, baseIncrement + variation);

			progressRef.current = Math.min(100, progressRef.current + increment);
			onProgressChange(Math.floor(progressRef.current));

			if (progressRef.current >= 100) {
				clearSimulation();
				setTimeout(() => {
					onLoadComplete();
				}, 200);
			}
		}, SLOW_4G.progressInterval);
	}, [SLOW_4G.totalLoadTime, SLOW_4G.progressInterval, SLOW_4G.randomVariation, onProgressChange, onLoadComplete, clearSimulation]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			clearSimulation();
		};
	}, [clearSimulation]);

	return { simulateProgress, isSimulating, clearSimulation };
};

// ================ Component Interface ================
interface DraggableControlWidgetProps {
	audioSrc: string;
	toggleTheme: () => void;
	isDarkTheme: boolean;
	onProgressChange: (progress: number) => void;
	onLoadComplete: () => void;
	onReload: () => void;
}

// ================ Main Component ================
const DraggableControlWidget: React.FC<DraggableControlWidgetProps> = ({ audioSrc, toggleTheme, isDarkTheme, onProgressChange, onLoadComplete, onReload }) => {
	// ================ State Management ================
	// Audio States
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [volume, setVolume] = useState(0.5);

	// Dragging States
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

	// Loading State
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	// ================ Refs ================
	const widgetRef = useRef<HTMLDivElement>(null);
	const audioElementRef = useRef<HTMLAudioElement | null>(null);

	// ================ Loading Configuration ================
	const SLOW_4G = useMemo(
		() => ({
			totalLoadTime: 8000,
			progressInterval: 100,
			randomVariation: 0.2,
		}),
		[]
	);

	// ================ Audio Functions ================
	// Initialize Audio
	useEffect(() => {
		audioElementRef.current = new Audio(audioSrc);
		audioElementRef.current.volume = volume;

		return () => {
			if (audioElementRef.current) {
				audioElementRef.current.pause();
				audioElementRef.current.src = "";
			}
		};
	}, [audioSrc]);

	// Handle Play/Pause
	const togglePlayback = async () => {
		if (!audioElementRef.current) return;

		try {
			if (isPlaying) {
				audioElementRef.current.pause();
			} else {
				if (audioElementRef.current.ended) {
					audioElementRef.current.currentTime = 0;
				}
				await audioElementRef.current.play();
			}
			setIsPlaying(!isPlaying);
		} catch (error) {
			console.error("Error playing audio:", error);
		}
	};

	// Handle Volume
	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (audioElementRef.current) {
			audioElementRef.current.volume = newVolume;
		}
		setIsMuted(newVolume === 0);
	};

	// Handle Mute
	const toggleMute = () => {
		if (!audioElementRef.current) return;

		const newMutedState = !isMuted;
		setIsMuted(newMutedState);
		audioElementRef.current.volume = newMutedState ? 0 : volume;
	};

	// Handle Audio Ended
	useEffect(() => {
		const audioElement = audioElementRef.current;
		if (!audioElement) return;

		const handleEnded = () => {
			setIsPlaying(false);
		};

		audioElement.addEventListener("ended", handleEnded);
		return () => {
			audioElement.removeEventListener("ended", handleEnded);
		};
	}, []);

	// ================ Loading Functions ================

   const { simulateProgress, clearSimulation } = useLoadingSimulator(
      onProgressChange,
      onLoadComplete
    );

    const handleReload = useCallback(() => {
      // Call parent's onReload first
      onReload();
      // Then start a fresh progress simulation
      simulateProgress();
    }, [onReload, simulateProgress]);

    // Start initial progress simulation on mount
    useEffect(() => {
      simulateProgress();
      return () => {
        clearSimulation();
      };
    }, [simulateProgress, clearSimulation]);

	// const simulateProgress = useCallback(() => {
	// 	let progress = 0;

	// 	if (intervalId) {
	// 		clearInterval(intervalId);
	// 	}

	// 	const interval = setInterval(() => {
	// 		const incrementsNeeded = SLOW_4G.totalLoadTime / SLOW_4G.progressInterval;
	// 		const baseIncrement = 100 / incrementsNeeded;
	// 		const variation = (Math.random() * 2 - 1) * SLOW_4G.randomVariation * baseIncrement;
	// 		const increment = Math.max(0.1, baseIncrement + variation);

	// 		progress = Math.min(100, progress + increment);
	// 		onProgressChange(Math.floor(progress));

	// 		if (progress >= 100) {
	// 			clearInterval(interval);
	// 			setIntervalId(null);
	// 			setTimeout(() => {
	// 				onLoadComplete();
	// 			}, 200);
	// 		}
	// 	}, SLOW_4G.progressInterval);

	// 	setIntervalId(interval);
	// }, [SLOW_4G.totalLoadTime, SLOW_4G.progressInterval, SLOW_4G.randomVariation, onProgressChange, onLoadComplete]);

	// // Start initial progress
	// useEffect(() => {
	// 	simulateProgress();
	// 	return () => {
	// 		if (intervalId) {
	// 			clearInterval(intervalId);
	// 		}
	// 	};
	// }, []);

	// // Handle Reload
	// const handleReload = useCallback(() => {
	// 	onReload();
	// 	setTimeout(() => {
	// 		simulateProgress();
	// 	}, 100);
	// }, [onReload, simulateProgress]);

	// ================ Dragging Functions ================
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

	const handleMouseDown = (e: React.MouseEvent) => {
		if (widgetRef.current) {
			const rect = widgetRef.current.getBoundingClientRect();
			setDragOffset({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
			setIsDragging(true);
		}
	};

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

	// ================ Render ================
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
					<IconButton onClick={togglePlayback} aria-label={isPlaying ? "Pause" : "Play"}>
						{isPlaying ? <Pause size={20} /> : <Play size={20} />}
					</IconButton>

					<IconButton onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
						{isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
					</IconButton>

					<VolumeSlider type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} aria-label="Volume" />

					<IconButton onClick={toggleTheme} aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}>
						{isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
					</IconButton>
				</Controls>
			</ControlsGroup>
		</WidgetContainer>
	);
};

export default DraggableControlWidget;
