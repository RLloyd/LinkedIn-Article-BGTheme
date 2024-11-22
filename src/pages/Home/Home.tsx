// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import whale from "@/assets/Loader/Whale.png";
import ImageLoader from "@/components/Animations/ImageLoader";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ImageDiv>
        <ImageLoader
          src={whale}
          alt="Whale illustration"
          mode="light"
        />
      </ImageDiv>
    </HomeContainer>
  );
};

export default Home;
