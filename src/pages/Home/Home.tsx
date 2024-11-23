// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import whale from "@/assets/Loader/Whale.png";
import ImageLoader from "@/components/Animations/ImageLoader";
import whaleSound from "@/assets/sounds/whale-call-2.wav";

const Home: React.FC = () => {
	console.log("Sound file path:", whaleSound);
	return (
		<HomeContainer>
			<ImageDiv>
				<ImageLoader src={whale} alt="Whale illustration" mode="light" soundSrc={whaleSound} />
			</ImageDiv>
		</HomeContainer>
	);
};

export default Home;
