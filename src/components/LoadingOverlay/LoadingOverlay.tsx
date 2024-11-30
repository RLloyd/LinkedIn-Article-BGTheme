// scr/components/LoadingOverlay/LoadingOverlay.tsx

import React from "react";
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import { ThemeMode } from "@/styles/theme";
import SpinningDots from "../ImageLoader/SpinningDots";
import CircularSVG2 from "../ImageLoader/CircularSVG2";
// import SpinningDots from "../ImageLoader/SpinningDots";
// import CircularSVG2 from "../ImageLoader/CircularSVG2";

// Styled components for the SVGs
const ThemedPath = styled(motion.path)`
	fill: ${({ theme }) => (theme.isDarkTheme ? theme.colors.text.dark.svgColor1 : theme.colors.text.light.svgColor1)};
`;
const ThemedPath2 = styled(motion.path)`
	fill: ${({ theme }) => (theme.isDarkTheme ? theme.colors.text.dark.svgColor2 : theme.colors.text.light.svgColor2)};
`;
const ThemedPath3 = styled(motion.path)`
	fill: ${({ theme }) => (theme.isDarkTheme ? theme.colors.text.dark.svgColor3 : theme.colors.text.light.svgColor3)};
`;
const ThemedPath4 = styled(motion.path)`
	fill: ${({ theme }) => (theme.isDarkTheme ? theme.colors.text.dark.svgColor4 : theme.colors.text.light.svgColor4)};
`;
const ThemedPath5 = styled(motion.path)`
	fill: ${({ theme }) => (theme.isDarkTheme ? theme.colors.text.dark.svgColor5 : theme.colors.text.light.svgColor5)};
`;

const LoaderOverlay = styled(motion.div)<{ $mode: ThemeMode }>`
	position: fixed; // Changed from absolute to fixed
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh; // Use viewport height
	background-color: ${({ $mode }) => ($mode === "light" ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0.9)")};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1000; // Increased z-index to ensure it stays on top
`;

const LoaderContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 314px;
	height: 314px;
`;

const CircularSVG = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 314px;
	height: 314px;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none; // Prevent interference with other elements
`;

const CounterContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1001;
`;

const CountdownText = styled.h1<{ $primary?: boolean; }>`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 4.75rem;
	// font-family: "Open Sans", sans-serif;
   font-family: "Playfair Display", serif;
   font-weight: 800;
   // color: ${props => props.$primary ? "white" : "#BF4F74"};
	// color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].primary};
	color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? "dark" : "light"].primary};
	margin: 0;
	line-height: 1;

   // span {
   //    font-size: 2.25rem;
   // }
`;

const MySpan = styled.span`
  ${props => props.className}
`;

const LoadingOverlay: React.FC<{ progress: number; mode: ThemeMode }> = ({ progress, mode }) => {

	return (
		<LoaderOverlay $mode={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
			<LoaderContainer>
				<CounterContainer>
					<CountdownText>
                  {/* <MySpan className="text-red text-5xl">{Math.min(progress, 100)}</MySpan>
                  <MySpan className="text-yellow text-base">%</MySpan> */}
						<span>{Math.min(progress, 100)}</span>
						<span className="text-blue text-base">%</span>
					</CountdownText>
				</CounterContainer>

				<CircularSVG>
				   <CircularSVG2 />
               {/* <SpinningDots /> */}
				</CircularSVG>
			</LoaderContainer>
		</LoaderOverlay>
	);
};

export default LoadingOverlay;
