// src/components/ImageLoader/ImageLoader.tsx

import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ThemeMode } from "@/styles/theme";
import whaleSound from "@/assets/sounds/whale-call-2.wav";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
// import NetworkThrottle from "../NetworkThrottle/NetworkThrottle";
// import DraggableAudioWidget from "../DraggableControlWidget/DraggableAudioWidget";
import DraggableControlWidget from "../DraggableControlWidget/DraggableControlWidget";

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
	// width: 100%;
	width: 1020px;
	height: 550px;
	display: block;
	object-fit: cover;
	border-radius: 2rem;
	z-index: 1;
	border: 1px solid ${({ theme }) => theme.colors.border[theme.isDarkTheme ? "dark" : "light"].primary};

	@media (max-width: 1024px) {
		height: 450px;
	}

	@media (max-width: 768px) {
		height: 350px;
		border-radius: 1.5rem;
	}

	@media (max-width: 480px) {
		height: 250px;
		border-radius: 1rem;
	}
`;

const PoemOverlay = styled(motion.div)`
	position: absolute;
	max-width: 100%;
	width: 97%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to bottom, rgba(5, 25, 52, 1), rgba(5, 25, 52, 0.85), rgba(5, 25, 52, 0));
	color: white;
	text-align: center;
	pointer-events: none;
	border-radius: 2rem;
	padding: 2rem 1rem;

	@media (max-width: 768px) {
		border-radius: 1.5rem;
		padding: 1.5rem 0.75rem;
	}

	@media (max-width: 480px) {
		border-radius: 1rem;
		padding: 1rem 0.5rem;
	}
`;

const PoemTitle = styled.h2`
	font-size: 3rem;
	margin-top: 6rem;
	margin-bottom: 1rem;
	font-family: "Libre Baskerville", serif;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].secondary};
	transition: all 0.3s ease;

	@media (max-width: 1024px) {
		font-size: 2.5rem;
		margin-top: 5rem;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
		margin-top: 4rem;
		margin-bottom: 0.75rem;
	}

	@media (max-width: 480px) {
		font-size: 1.5rem;
		margin-top: 3rem;
		margin-bottom: 0.5rem;
	}
`;

const PoemText = styled.p`
	margin-top: 0;
	font-size: 1.5rem;
	line-height: 1.6;
	font-family: "Libre Baskerville", serif;
	font-style: italic;
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].secondary};
	transition: all 0.3s ease;

	@media (max-width: 1024px) {
		font-size: 1.25rem;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
		line-height: 1.4;
	}

	@media (max-width: 480px) {
		font-size: 0.875rem;
		line-height: 1.3;
		br {
			display: none; // Optional: removes line breaks on very small screens
		}
	}
`;

const ContentWrapper = styled(motion.div)`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// const PlayButton = styled.button`
// 	position: fixed;
// 	bottom: 20px;
// 	right: 20px;
// 	padding: 12px 24px;
// 	background: rgba(0, 0, 0, 0.7);
// 	// color: white;
// 	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].secondary};
// 	border: 1px solid #0d94a0cc;
// 	border-radius: 8px;
// 	cursor: pointer;
// 	font-size: 1rem;
// 	z-index: 1000;
// 	display: flex;
// 	align-items: center;
// 	gap: 8px;
// 	transition: background-color 0.3s ease;

// 	&:hover {
// 		background: rgba(0, 0, 0, 0.9);
// 	}

// 	&:disabled {
// 		opacity: 0.5;
// 		cursor: not-allowed;
// 	}
// `;

interface ImageLoaderProps {
	src: string;
	alt: string;
	mode?: ThemeMode;
	className?: string;
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, mode = "light", className, toggleTheme, isDarkTheme }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [showPoem, setShowPoem] = useState(false);
	const [startSlideAnimation, setStartSlideAnimation] = useState(false);
	const [hasError, setHasError] = useState(false);
	// 1. Add image preloading state
	const [isImagePreloaded, setIsImagePreloaded] = useState(false);
	const [smoothProgress, setSmoothProgress] = useState(0);

	// 2. Split loading effect into two parts
	useEffect(() => {
		// First effect: Preload image
		const img = new Image();
		img.src = src;
		img.onload = () => setIsImagePreloaded(true);

		return () => {
			img.onload = null;
		};
	}, [src]);

	// useEffect(() => {
	// 	// Only start XHR after image is preloaded
	// 	if (!isImagePreloaded) return;

	// 	const xhr = new XMLHttpRequest();
	// 	// Rest of your existing XHR code...
	// }, [src, isImagePreloaded]);

	const getImageHeight = () => {
		// Initial heights matching the styled component media queries
		if (window.innerWidth <= 480) return 250;
		if (window.innerWidth <= 768) return 350;
		if (window.innerWidth <= 1024) return 450;
		return 550;
	};

	const handleProgressChange = useCallback((newProgress: number) => {
		setProgress(newProgress);
	}, []);

	// const handleLoadComplete = useCallback(() => {
	// 	setIsLoading(false);
	// 	setTimeout(() => {
	// 		setShowPoem(true);
	// 		setTimeout(() => {
	// 			setStartSlideAnimation(true);
	// 		}, 1000);
	// 	}, 500);
	// }, []);

	// 3. Update handleLoadComplete to wait for animations
	// const handleLoadComplete = useCallback(() => {
	// 	const runSequence = async () => {
	// 		setIsLoading(false);
	// 		await new Promise((resolve) => setTimeout(resolve, 500));
	// 		setShowPoem(true);
	// 		await new Promise((resolve) => setTimeout(resolve, 1000));
	// 		setStartSlideAnimation(true);
	//       setIsImagePreloaded(false); // Reset for next load
	// 	};
	// 	runSequence();
	// }, []);

	interface LoadingState {
		downloadProgress: number;
		imageLoadProgress: number;
	}

	const [loadingState, setLoadingState] = useState<LoadingState>({
		downloadProgress: 0,
		imageLoadProgress: 0,
	});

	const handleLoadComplete = useCallback(() => {
		return new Promise<void>((resolve) => {
			const img = new Image();
			// img.src = src;
			// Keep progress at current value during image load
			// setProgress((prev) => Math.min(prev, 95));
			img.onload = async () => {
				// // Only show 100% when fully loaded
				// setProgress(100);
				// setLoadingState((prev) => ({ ...prev, imageLoadProgress: 100 }));
				// setIsLoading(false);
				// await new Promise((r) => setTimeout(r, 500));
				// setShowPoem(true);
				// await new Promise((r) => setTimeout(r, 1000));
				// setStartSlideAnimation(true);
				// resolve();
				// Small delay before finishing
				await new Promise((r) => setTimeout(r, 200));
				setIsLoading(false);
				setShowPoem(true);
				await new Promise((r) => setTimeout(r, 1000));
				setStartSlideAnimation(true);
				resolve();
			};
			// Keep progress at 95% during final image load
			// setProgress(95);
			img.src = src;
		});
	}, [src]);

	const handleReload = useCallback(() => {
		setIsLoading(true);
		setProgress(0);
		setShowPoem(false);
		setStartSlideAnimation(false);
	}, []);

	// useEffect(() => {
	// 	// Only start XHR after image is preloaded
	// 	if (!isImagePreloaded) return;

	// 	const xhr = new XMLHttpRequest();
	// 	xhr.open("GET", src, true);
	// 	xhr.responseType = "blob";

	// 	// xhr.onprogress = (event) => {
	// 	// 	if (event.lengthComputable) {
	// 	// 		const percentComplete = (event.loaded / event.total) * 100;
	// 	// 		handleProgressChange(Math.round(percentComplete));
	// 	// 	}
	// 	// };
	// 	xhr.onprogress = (event) => {
	// 		// if (event.lengthComputable) {
	// 		// 	const downloadPercent = (event.loaded / event.total) * 100;
	// 		// 	setLoadingState((prev) => ({
	// 		// 		...prev,
	// 		// 		downloadProgress: Math.round(downloadPercent),
	// 		// 	}));
	// 		// }
	// 		if (event.lengthComputable) {
	// 			handleProgressChange(Math.round((event.loaded / event.total) * 80)); // Up to 80%
	// 		}
	// 	};
	// 	// Pass combined progress to LoadingOverlay
	// 	const totalProgress = Math.round((loadingState.downloadProgress + loadingState.imageLoadProgress) / 2);
	// 	handleProgressChange(totalProgress);

	// 	// xhr.onload = () => {
	// 	// 	if (xhr.status === 200) {
	// 	// 		handleLoadComplete();
	// 	// 	} else {
	// 	// 		setHasError(true);
	// 	// 	}
	// 	// };

	// 	// xhr.onerror = () => {
	// 	// 	setHasError(true);
	// 	// };
	// 	xhr.onload = async () => {
	// 		if (xhr.status === 200) {
	// 			const blob = xhr.response;
	// 			const imageUrl = URL.createObjectURL(blob);
	// 			const img = new Image();

	// 			img.onprogress = (event) => {
	// 				if (event.lengthComputable) {
	// 					const remaining = (event.loaded / event.total) * 20 + 80; // Last 20%
	// 					handleProgressChange(Math.round(remaining));
	// 				}
	// 			};

	// 			img.onload = async () => {
	// 				URL.revokeObjectURL(imageUrl);
	// 				handleLoadComplete();
	// 			};

	// 			img.src = imageUrl;
	// 		} else {
	// 			setHasError(true);
	// 		}
	// 	};

	// 	xhr.send();

	// 	return () => {
	// 		xhr.abort();
	// 	};
	// }, [src, isImagePreloaded, handleLoadComplete, handleProgressChange]);
	// // }, [src, isImagePreloaded]);

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", src, true);
		xhr.responseType = "blob";

		xhr.onprogress = (event) => {
			// if (event.lengthComputable) {
			// 	// handleProgressChange(Math.round((event.loaded / event.total) * 100));
			// 	const rawProgress = (event.loaded / event.total) * 100;
			// 	// Smooth early progress updates
			// 	if (rawProgress < 15) {
			// 		setSmoothProgress((prev) => Math.max(prev, Math.round(rawProgress)));
			// 	} else {
			// 		setSmoothProgress(Math.round(rawProgress));
			// 	}
			// }
			if (event.lengthComputable) {
				// Cap progress at 90% until fully loaded
				// const progress = (event.loaded / event.total) * 90;
            const progress = (event.loaded / event.total) * 100;
            handleProgressChange(Math.round(progress));
			}
		};

		handleProgressChange(smoothProgress);

		xhr.onload = () => {
			if (xhr.status === 200) {
				const imageUrl = URL.createObjectURL(xhr.response);
				const img = new Image();

				img.onload = () => {
					// URL.revokeObjectURL(imageUrl);
					// handleLoadComplete();
					// handleProgressChange(100);
					URL.revokeObjectURL(imageUrl);
					handleLoadComplete();
				};

				img.src = imageUrl;
			// } else {
			// 	setHasError(true);
			}
		};

		xhr.send();

		return () => xhr.abort();
	}, [src, handleLoadComplete, handleProgressChange]);

	if (hasError) {
		return <div>Error loading image</div>;
	}

	return (
		<Container className={className}>
			<ContentWrapper>
				<StyledImage
					src={src}
					alt={alt}
					initial={{ opacity: 0, y: 0, height: getImageHeight() }}
					animate={{
						opacity: isLoading ? 0 : 1,
						y: startSlideAnimation ? -210 : 0,
						height: !isLoading ? getImageHeight() - 150 : getImageHeight(), // Reduced height after loading
					}}
					transition={{
						opacity: { duration: 0.5 },
						y: { duration: 1.2, ease: "easeOut" },
						height: { duration: 1, ease: "easeOut", delay: 3 },
					}}
				/>

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

			{/* <DraggableAudioWidget
            audioSrc={whaleSound}
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
            /> */}

			<DraggableControlWidget audioSrc={whaleSound} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} onProgressChange={handleProgressChange} onLoadComplete={handleLoadComplete} onReload={handleReload} />

			{isLoading && <LoadingOverlay progress={progress} mode={mode} />}
		</Container>
	);
};

export default ImageLoader;
