// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import whale from "@/assets/Loader/Whale.png";
import whaleSound from "@/assets/sounds/whale-call-2.wav";
// import CircularLoader from "@/components/CircularLoader/CircularLoader";
import ImageLoader from "@/components/ImageLoader/ImageLoader";
// import CircularLoader from "@/components/Animations/CircularLoader";
// import ImageLoader from "@/components/ImageLoader/ImageLoader";
// import { TestTailwind } from "@/components/TestTailwind";
// import ExampleComponent from "@/components/ExampleComponent";

const Home: React.FC = () => {
	console.log("Sound file path:", whaleSound);
	return (
		<HomeContainer>
			<ImageDiv>

				<ImageLoader
               src={whale}
               alt="Whale illustration"
               mode="light"
            />

            {/* <CircularLoader
               src={whale}
               alt="Whale illustration"
               // soundSrc={whaleSound}
            /> */}

            {/* <TestTailwind /> */}

            {/* <ExampleComponent /> */}

			</ImageDiv>

		</HomeContainer>
	);
};

export default Home;
