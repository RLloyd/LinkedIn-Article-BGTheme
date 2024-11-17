// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import bonsai from "@/assets/bonsai.png";
// import CircularLoader from "@/components/Animations/CircularLoader";
import AnimatedText from "@/components/Animations/AnimatedText";
import ImageLoader from "@/components/Animations/CircularLoader";

/**
 * The Home component is the root component of the application's home page.
 * It simply displays a centered bonsai tree image and the text "BONSAI" in
 * an animated font.
 */
const Home: React.FC = () => {

   return (
      <HomeContainer>
         {/* <CircularLoader timer={3000} /> // Will animate for 3 seconds */}
         <AnimatedText>BONSAI</AnimatedText>
         <ImageDiv>
            {/* <img src={bonsai} alt="Bonsai" /> */}
            <ImageLoader src={bonsai} alt="Bonsai" />
         </ImageDiv>
      </HomeContainer>
   );
};

export default Home;
