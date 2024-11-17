// src/pages/Home/Home.tsx
import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import { HomeContainer, ImageDiv } from "./Home.styles";
import bonsai from "@/assets/bonsai.png";
import AnimatedText from "@/components/Animations/AnimatedText";

const FIXED_HEIGHT = 1020; // pixels

const Home: React.FC = () => {
   useEffect(() => {
      // Function to set initial scroll position
      const setInitialScroll = () => {
         window.scrollTo({
            top: FIXED_HEIGHT,
            behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate positioning
         });
      };

      // Set initial scroll position
      setInitialScroll();

      // Handle page refresh and back/forward navigation
      window.addEventListener('load', setInitialScroll);
      window.addEventListener('popstate', setInitialScroll);

      return () => {
         window.removeEventListener('load', setInitialScroll);
         window.removeEventListener('popstate', setInitialScroll);
      };
   }, []);

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