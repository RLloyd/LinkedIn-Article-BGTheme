// src/pages/Home/Home.styles.ts

import styled from 'styled-components';

export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 1020px;
   padding-top: ${({ theme }) => theme.sizes.navHeight};
   overflow: hidden;
`;

export const ImageDiv = styled.div`
   position: fixed;
   bottom: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;

   img {
      width: 900px;
      object-fit: contain;

      @media (max-width: 768px) {
         width: 110vw;
      }
   }
`;
