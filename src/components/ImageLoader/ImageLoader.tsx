// src/components/ImageLoader/ImageLoader.tsx

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ThemeMode } from "@/styles/theme";
import whaleSound from "@/assets/sounds/whale-call-2.wav";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import NetworkThrottle from "../NetworkThrottle/NetworkThrottle";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	// border: 6px solid green;
`;

const StyledImage = styled(motion.img)`
	position: relative;
	max-width: 100%;
	width: 100%;
	//   height: 50%;
	height: 550px;
	display: block;
	object-fit: cover;
	border-radius: 2rem;
	z-index: 1;
	// border: 1px solid white;
	border: 1px solid ${({ theme }) => theme.colors.border[theme.isDarkTheme ? "dark" : "light"].primary};
`;

const PoemOverlay = styled(motion.div)`
	position: absolute;
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// background: rgba(0, 0, 0, 0.5);
	background-image: linear-gradient(to bottom, rgba(5, 25, 52, 1), rgba(5, 25, 52, 0.85), rgba(5, 25, 52, 0));
	color: white;
	// padding: 2rem;
	text-align: center;
	pointer-events: none;
	border-radius: 2rem;
	// border: 1px solid magenta;
`;

const PoemTitle = styled.h2`
	font-size: 3rem;
	margin-top: 6rem;
	margin-bottom: 1rem;
	font-family: "Libre Baskerville", serif;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].secondary};
`;

const PoemText = styled.p`
	margin-top: 0;
	font-size: 1.5rem;
	line-height: 1.6;
	font-family: "Libre Baskerville", serif;
	font-style: italic;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].secondary};
`;

const ContentWrapper = styled(motion.div)`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PlayButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 12px 24px;
	background: rgba(0, 0, 0, 0.7);
	// color: white;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].secondary};
	border: 1px solid #0d94a0cc;
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

interface ImageLoaderProps {
	src: string;
	alt: string;
	mode?: ThemeMode;
	className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, mode = "light", className }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [showPoem, setShowPoem] = useState(false);
	const [startSlideAnimation, setStartSlideAnimation] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	const audioContextRef = useRef<AudioContext | null>(null);
	const sourceRef = useRef<AudioBufferSourceNode | null>(null);
	const gainNodeRef = useRef<GainNode | null>(null);
	const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

	useEffect(() => {
		const initAudioContext = async () => {
			try {
				const AudioContext = window.AudioContext || window.webkitAudioContext;
				audioContextRef.current = new AudioContext();

				const response = await fetch(whaleSound);
				const arrayBuffer = await response.arrayBuffer();
				const decodedBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
				setAudioBuffer(decodedBuffer);

				gainNodeRef.current = audioContextRef.current.createGain();
				gainNodeRef.current.connect(audioContextRef.current.destination);
				gainNodeRef.current.gain.value = 0;
			} catch (error) {
				console.error("Audio initialization error:", error);
			}
		};

		initAudioContext();

		return () => {
			if (audioContextRef.current) {
				audioContextRef.current.close();
			}
		};
	}, []);

	const playSound = useCallback(async () => {
		if (!audioContextRef.current || !audioBuffer || !gainNodeRef.current) return;

		try {
			if (audioContextRef.current.state === "suspended") {
				await audioContextRef.current.resume();
			}

			if (sourceRef.current) {
				sourceRef.current.stop();
				sourceRef.current.disconnect();
			}

			sourceRef.current = audioContextRef.current.createBufferSource();
			sourceRef.current.buffer = audioBuffer;
			sourceRef.current.connect(gainNodeRef.current);

			gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
			gainNodeRef.current.gain.linearRampToValueAtTime(0.3, audioContextRef.current.currentTime + 1);

			sourceRef.current.start();
			setIsPlaying(true);

			sourceRef.current.onended = () => {
				setIsPlaying(false);
			};
		} catch (error) {
			console.error("Playback failed:", error);
			setIsPlaying(false);
		}
	}, [audioBuffer]);

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", src, true);
		xhr.responseType = "blob";

		xhr.onprogress = (event) => {
			if (event.lengthComputable) {
				const percentComplete = (event.loaded / event.total) * 100;
				setProgress(Math.round(percentComplete));
			}
		};

		xhr.onload = () => {
			if (xhr.status === 200) {
				setProgress(100);
				const runAnimationSequence = async () => {
					setIsLoading(false);
					await new Promise((resolve) => setTimeout(resolve, 500));
					setShowPoem(true);
					await new Promise((resolve) => setTimeout(resolve, 1000));
					setStartSlideAnimation(true);
					await new Promise((resolve) => setTimeout(resolve, 800));

					const tempButton = document.createElement("button");
					tempButton.style.display = "none";
					document.body.appendChild(tempButton);
					tempButton.addEventListener("click", () => {
						playSound();
						tempButton.remove();
					});
					tempButton.click();
				};

				runAnimationSequence();
			} else {
				setHasError(true);
			}
		};

		xhr.onerror = () => {
			setHasError(true);
		};

		xhr.send();

		return () => {
			xhr.abort();
			if (sourceRef.current) {
				sourceRef.current.stop();
			}
		};
	}, [src, playSound]);

	const handlePlayClick = () => {
		playSound();
	};

	if (hasError) {
		return <div>Error loading image</div>;
	}

   // Handle progress change
	const handleProgressChange = useCallback((newProgress: number) => {
		setProgress(newProgress);
	}, []);

   const handleLoadComplete = useCallback(() => {
      // Start the animation sequence
      setIsLoading(false);  // This will hide the loader

      setTimeout(() => {
        setShowPoem(true);
        setTimeout(() => {
          setStartSlideAnimation(true);
        }, 1000);
      }, 500);
    }, []);

    const handleReload = useCallback(() => {
      // Reset all states
      setIsLoading(true);
      setProgress(0);
      setShowPoem(false);
      setStartSlideAnimation(false);

      // Force image reload
      const timestamp = new Date().getTime();
      const imageUrl = `${src}?t=${timestamp}`;

      const img = new Image();
      img.src = imageUrl;
    }, [src]);

	return (
		<Container className={className}>
			<NetworkThrottle
            onProgressChange={handleProgressChange}
            onLoadComplete={handleLoadComplete}
            onReload={handleReload}
         >
				<ContentWrapper>
					{/* Whale image */}
					<StyledImage
						src={src}
						alt={alt}
						initial={{ opacity: 0, y: 0, height: 550 }}
						animate={{
							opacity: isLoading ? 0 : 1,
							y: startSlideAnimation ? -210 : 0,
							height: !isLoading ? 400 : 550,
						}}
						transition={{
							opacity: { duration: 0.5 },
							y: { duration: 1.2, ease: "easeOut" },
							height: { duration: 1, ease: "easeOut", delay: 3 },
						}}
					/>

					{isLoading && <LoadingOverlay progress={progress} mode={mode} />}

					<AnimatePresence>
						{showPoem && (
							<PoemOverlay
								initial={{ opacity: 0, y: 0 }}
								animate={{
									opacity: 1,
									y: startSlideAnimation ? 120 : 20,
								}}
								exit={{ opacity: 0, y: -20 }}
								transition={{
									opacity: { duration: 0.8 },
									y: { duration: 1.2, ease: "easeOut", delay: 2 },
								}}
							>
								<PoemTitle>Guiding Song</PoemTitle>
								{/* <PoemText className="tw-font-sans tw-text-2xl"> // custom: apply the tw-font-sans class */}
								<PoemText>
									Beneath the waves, a whale does sing,
									<br />
									Of minds that learn and dreams that spring.
									<br />
									Its hums weave tales of AI's might,
									<br />A guiding song in endless night.
								</PoemText>
							</PoemOverlay>
						)}
					</AnimatePresence>
				</ContentWrapper>
			</NetworkThrottle>

			<PlayButton onClick={handlePlayClick} disabled={isPlaying}>
				{isPlaying ? "🔊 Playing..." : "🔈 Play Whale Sound"}
			</PlayButton>

			{/* Loader Component */}
			{/* {isLoading && <LoadingOverlay progress={progress} mode={mode} />} */}
		</Container>
	);
};

export default ImageLoader;
