// Originally: ImageLoader for the Bonsai

import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
// import { ThemeMode } from "@/styles/theme";
// import SpinningDots from "./SpinningDots";
import CircularSVG2 from "./CircularSVG2";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import DraggableControlWidget from "../DraggableControlWidget/DraggableControlWidget";
import { ThemeMode } from "@/styles/theme";
import whaleSound from "@/assets/sounds/whale-call-2.wav";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 314px;
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid yellowgreen;
`;

const LoaderContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	// border: 1px solid red;
`;

const CircularSVG = styled.div`
	position: absolute;
	// background: rgba(255, 255, 255, 0.15);
	border-radius: 100%;
	z-index: 100;
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid cyan;
`;

const Image = styled.img`
	max-width: 100%;
	width: 100%;
	height: auto;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
	&.loaded {
		opacity: 1;
	}
`;

const CounterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	line-height: 1;
	position: relative;
	z-index: 101;
	// border: 1px solid blue;
`;

const LoadingText = styled.p`
	font-size: 1rem;
	font-family: "Open Sans" san-serif;
	margin: 0;
	color: #3f1f0b;
`;

const CountdownText = styled.h1`
	display: flex;
	align-items: center;
	// gap: 4px;
	font-size: 3rem;
	margin: 0;
	color: #3f1f0b;
`;

interface ImageLoaderProps {
	src: string;
	alt: string;
	className?: string;
	mode?: ThemeMode;
	toggleTheme: () => void;
	isDarkTheme: boolean;
}

// const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, mode = "light", className, toggleTheme, isDarkTheme }) => {
	// const [isLoading, setIsLoading] = useState(true);
	// const [loading, setLoading] = useState(true);
	// const [progress, setProgress] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [showPoem, setShowPoem] = useState(false);
	const [startSlideAnimation, setStartSlideAnimation] = useState(false);
	const [hasError, setHasError] = useState(false);
	// 1. Add image preloading state
	const [isImagePreloaded, setIsImagePreloaded] = useState(false);
	const [smoothProgress, setSmoothProgress] = useState(0);

   useEffect(() => {
		// First effect: Preload image
		const img = new Image();
		img.src = src;
		img.onload = () => setIsImagePreloaded(true);

		return () => {
			img.onload = null;
		};
	}, [src]);
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

   const handleLoadComplete = useCallback(() => {
		return new Promise<void>((resolve) => {
			const img = new Image();
			img.onload = async () => {
				await new Promise((r) => setTimeout(r, 200));
				setIsLoading(false);
				// setShowPoem(true);
				await new Promise((r) => setTimeout(r, 1000));
				// setStartSlideAnimation(true);
				resolve();
			};
			img.src = src;
		});
	}, [src]);

   const handleReload = useCallback(() => {
		setIsLoading(true);
		setProgress(0);
		// setShowPoem(false);
		// setStartSlideAnimation(false);
	}, []);

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", src, true);
		xhr.responseType = "arraybuffer";
		xhr.onload = () => {
			if (xhr.status === 200) {
				setProgress(100);
				setIsLoading(false);
			}
		};
		xhr.onprogress = (event) => {
			if (event.lengthComputable) {
				const percentComplete = (event.loaded / event.total) * 100;
				setProgress(Math.round(percentComplete));
			}
		};
		xhr.onerror = () => {
			console.error("Error loading image");
			setIsLoading(false);
		};
		xhr.send();
		return () => {
			xhr.abort();
		};
	}, [src]);

	return (
		<Container>
			<Image src={src} alt={alt} className={`${className} ${!isLoading ? "loaded" : ""}`} />

			<AnimatePresence>
				{isLoading && (
					<LoaderContainer>
						<CounterContainer>
							<LoadingText>LOADING...</LoadingText>
							<CountdownText>
								<span>{Math.min(progress, 100)}</span>
								<span>%</span>
							</CountdownText>
						</CounterContainer>

						<CircularSVG>
							{/* <SpinningDots /> */}
							<CircularSVG2 />
						</CircularSVG>
					</LoaderContainer>
				)}
			</AnimatePresence>

			<DraggableControlWidget
            audioSrc={whaleSound}
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
            onProgressChange={handleProgressChange}
            onLoadComplete={handleLoadComplete}
            onReload={handleReload}
         />

			{isLoading && <LoadingOverlay progress={progress} mode={mode} />}
		</Container>
	);
};

export default ImageLoader;
