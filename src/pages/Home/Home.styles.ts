// src/pages/Home/Home.styles.ts
import styled from 'styled-components';
import "../../App.css";

export const HomeContainer = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.sizes.navHeight};
//   border: 10px solid red; /* DEBUG: Remove after layout confirmation */
`;

export const CardsSection = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 20px auto;
  padding: 2rem 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Replaced by AnimatedText
export const TextDiv = styled.div`
   font-family: 'Libre Baskerville', serif;
   font-size: 200px;
   color: ${({ theme }) => theme.colors.text};
   opacity: 0.5;
   text-align: center;
   position: fixed;
   // bottom: 400px;
   top: 400px;
   transition: color 2s ease;
   //   border: 1px solid magenta;

   @media (max-width: 768px) {
      font-size: 22vw;
      top: 100px;
      // transform: translateY(-0%);
      // transition: transform 3s ease;
      animation: moveUp 5s ease -in -out forwards;
   }
`;
export const ImageDiv = styled.div`
   position: fixed;
   bottom: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   // border: 1px solid red;

  img {
    width: 900px;
   //  width: 100%;
   //  height: 100%;
    object-fit: contain;
   //  text-align: center;
   // padding: 0px;

   @media (max-width: 768px) {
    width: 110vw;
    bottom: 150px;
  }

  }
`;