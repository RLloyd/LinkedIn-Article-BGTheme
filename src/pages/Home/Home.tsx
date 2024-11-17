// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import bonsai from "@/assets/bonsai.png";
import AnimatedText from "@/components/Animations/AnimatedText";

/**
 * The Home component is the root component of the application's home page.
 * It simply displays a centered bonsai tree image and the text "BONSAI" in
 * an animated font.
 */
const Home: React.FC = () => {

   return (
      <HomeContainer>
         <AnimatedText>BONSAI</AnimatedText>
         <ImageDiv>
            <img src={bonsai} alt="Bonsai" />
         </ImageDiv>
      </HomeContainer>
   );
};

export default Home;
