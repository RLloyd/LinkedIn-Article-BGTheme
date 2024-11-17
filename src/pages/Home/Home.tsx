// src/pages/Home/Home.tsx
import React from "react";
// import { motion } from "framer-motion";
import { HomeContainer, ImageDiv } from "./Home.styles";
import WindowOpener from "@/components/WindowOpener/WindowOpener";
import bonsai from "@/assets/bonsai.png";
import AnimatedText from "@/components/Animations/AnimatedText";
import { navigationData } from "@/data/mockData";

/**
 * The Home page component.
 *
 * This component renders a full-screen page with an animated text
 * and a window opener button that opens a new window to the Home URL
 * found in the navigation data. If the Home URL is not found, it
 * falls back to https://www.rlloydgonzales.com.
 *
 * @returns The Home page component.
 */
const Home: React.FC = () => {
   // Find the Home link URL from navigation data
   const homeUrl = navigationData.menuItems.left.find(
      item => item.label === 'Home'
   )?.path || 'https://www.rlloydgonzales.com'; // Fallback URL if not found

   return (
      <HomeContainer>
         <WindowOpener url={homeUrl} />
         <AnimatedText>BONSAI</AnimatedText>
         <ImageDiv>
            <img src={bonsai} alt="Bonsai" />
         </ImageDiv>
      </HomeContainer>
   );
};

export default Home;

// // src/pages/Home/Home.tsx
// import React, { useEffect } from "react";
// // import { motion } from "framer-motion";
// import { HomeContainer, ImageDiv } from "./Home.styles";
// import bonsai from "@/assets/bonsai.png";
// import AnimatedText from "@/components/Animations/AnimatedText";
// import WindowOpener from "@/components/WindowOpener/WindowOpener";

// const FIXED_HEIGHT = 1020; // pixels

// const Home: React.FC = () => {
//    useEffect(() => {
//       // Function to set initial scroll position
//       const setInitialScroll = () => {
//          window.scrollTo({
//             top: FIXED_HEIGHT,
//             behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate positioning
//          });
//       };

//       // Set initial scroll position
//       setInitialScroll();

//       // Handle page refresh and back/forward navigation
//       window.addEventListener('load', setInitialScroll);
//       window.addEventListener('popstate', setInitialScroll);

//       return () => {
//          window.removeEventListener('load', setInitialScroll);
//          window.removeEventListener('popstate', setInitialScroll);
//       };
//    }, []);

//    return (
//       <HomeContainer>
//          <WindowOpener url="https://www.rlloydgonzales.com" />
//          <AnimatedText>BONSAI</AnimatedText>
//          <ImageDiv>
//             <img src={bonsai} alt="Bonsai" />
//          </ImageDiv>
//       </HomeContainer>
//    );
// };

// export default Home;