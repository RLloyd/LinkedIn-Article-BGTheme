// src/components/ImageLoader/ImageLoader.tsx

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ThemeMode } from "@/styles/theme";
import whaleSound from "@/assets/sounds/whale-call-2.wav";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: 6px solid green;
`;

const LoaderOverlay = styled(motion.div)<{ $mode: ThemeMode }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ $mode }) => ($mode === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)")};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10;
	border: 6px solid cyan;
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
	border: 6px solid yellow;
`;
// Define animation variants
const imageVariants = {
   initial: {
     opacity: 0,
     y: 0,
     height: 550
   },
   animate: {
     opacity: 1,
     y: -210,
     transition: {
       opacity: { duration: 0.5 },
       y: { duration: 1.2, ease: "easeOut" }
     }
   },
   resize: {
     height: 220,
     transition: {
       height: {
         duration: 2.2,
         ease: "easeOut",
         delay: 1.2 // Delay height change until after y animation
       }
     }
   }
 };

const PoemOverlay = styled(motion.div)`
	position: absolute;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.1);
	color: white;
	padding: 2rem;
	text-align: center;
	pointer-events: none;
	border: 1px solid magenta;
`;

const PoemTitle = styled.h2`
	font-size: 4rem;
	margin-bottom: 1rem;
	font-family: "Libre Baskerville", serif;
`;

const PoemText = styled.p`
	font-size: 2rem;
	line-height: 1.6;
	font-family: "Libre Baskerville", serif;
	font-style: italic;
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
   const [startAnimation, setStartAnimation] = useState(false);
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

	return (
		<Container className={className}>
			<ContentWrapper>
				{/* Whale image */}
				<StyledImage
					src={src}
					alt={alt}
					initial={{ opacity: 0, y: 0, height: false }}
					animate={{
						opacity: isLoading ? 0 : 1,
						y: startSlideAnimation ? -210 : 0,
                  height: !isLoading ? 220 : 550,
					}}
					transition={{
						opacity: { duration: 0.5 },
						y: { duration: 1.2, ease: "easeOut" },
						height: { duration: 2.2, ease: "easeOut" },
					}}
				/>

				<AnimatePresence>
					{showPoem && (
						<PoemOverlay
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: startSlideAnimation ? 150 : 20,
							}}
							exit={{ opacity: 0, y: -20 }}
							transition={{
								opacity: { duration: 0.8 },
								y: { duration: 1.2, ease: "easeOut" },
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

			<PlayButton onClick={handlePlayClick} disabled={isPlaying}>
				{isPlaying ? "🔊 Playing..." : "🔈 Play Whale Sound"}
			</PlayButton>

			{isLoading && (
				<LoaderOverlay $mode={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
					<div>Loading... {progress}%</div>
				</LoaderOverlay>
			)}
		</Container>
	);
};

export default ImageLoader;
