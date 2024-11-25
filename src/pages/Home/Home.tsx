// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import whale from "@/assets/Loader/Whale.png";
import whaleSound from "@/assets/sounds/whale-call-2.wav";
<<<<<<< HEAD
import ImageLoader from "@/components/ImageLoader/ImageLoader";
// import CircularLoader from "@/components/Animations/CircularLoader";
// import ImageLoader from "@/components/ImageLoader/ImageLoader";
// import { TestTailwind } from "@/components/TestTailwind";
// import ExampleComponent from "@/components/ExampleComponent";
=======
// import ImageLoader from "@/components/Animations/ImageLoader";
import ImageLoader from "@/components/ImageLoader/ImageLoader";
>>>>>>> cc52749138d1b016acfcc8f474e5998e2578f32a

const Home: React.FC = () => {
	console.log("Sound file path:", whaleSound);
	return (
		<HomeContainer>
			<ImageDiv>
				<ImageLoader
               src={whale}
               alt="Whale illustration"
               mode="light"
<<<<<<< HEAD
            />

            {/* <CircularLoader
               src={whale}
               alt="Whale illustration"
               soundSrc={whaleSound}
            /> */}

            {/* <TestTailwind /> */}

            {/* <ExampleComponent /> */}

=======
               // soundSrc={whaleSound}
               />
>>>>>>> cc52749138d1b016acfcc8f474e5998e2578f32a
			</ImageDiv>

		</HomeContainer>
	);
};

export default Home;
