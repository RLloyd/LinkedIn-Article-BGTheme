// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import whale from "@/assets/Loader/Whale.png";
// import whaleSound from "@/assets/sounds/whale-call-2.wav";
import ImageLoader from "@/components/ImageLoader/ImageLoader"; //Getting too complicated loader but kinda working
// import ImageLoader from "@/components/ImageLoader/SimpleImageLoader"; //Bonsai original loader

interface HomeProps {
   toggleTheme: () => void;
   isDarkTheme: boolean;
 }

// const Home: React.FC = () => {
const Home: React.FC<HomeProps> = ({ toggleTheme, isDarkTheme }) => {
	// console.log("Sound file path:", whaleSound);
	return (
		<HomeContainer>
			<ImageDiv>

         <ImageLoader
            src={whale}
            alt="Whale illustration"
            mode={isDarkTheme ? 'dark' : 'light'}
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
         />

				{/* <ImageLoader
               src={whale}
               alt="Whale illustration"
               mode="light"
            /> */}

            {/* <CircularLoader
               src={whale}
               alt="Whale illustration"
               // soundSrc={whaleSound}
            /> */}

			</ImageDiv>

		</HomeContainer>
	);
};

export default Home;
