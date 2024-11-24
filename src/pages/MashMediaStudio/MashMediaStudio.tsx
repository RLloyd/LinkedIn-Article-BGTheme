// // / src/pages/MashMediaStudio/MashMediaStudio.tsx
// import React from 'react';
// import styled from 'styled-components';
// import image1 from '@/assets/mashmedia/image1.jpg';
// import image2 from '@/assets/mashmedia/image2.jpg';
// import image3 from '@/assets/mashmedia/image2.jpg';
// import image4 from '@/assets/mashmedia/image2.jpg';
// // import image3 from '@/assets/mashmedia/landscape1.jpg';
// // import image4 from '@/assets/mashmedia/landscape2.jpg';

// const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   padding: 2rem;
//   position: relative;
//   z-index: 1;
// //   border: 1px solid red;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   color: red;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const MasonryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   grid-auto-rows: 10px;
//   gap: 1.5rem;
//   border: 1px solid red;
// `;

// const MasonryItem = styled.div`
//   position: relative;
//   break-inside: avoid;
//   overflow: hidden;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   img {
//     width: 100%;
//     height: 300px;
//    //  height: auto;
//     display: block;
//     transition: transform 0.3s ease;
//     border: 2px solid cyan;
//   }

//   &:hover img {
//     transform: scale(1.1);
//   }
// `;

// const MashMediaStudio: React.FC = () => {
//   const mashMediaImages = [
//     {
//       src: image1,
//       alt: "MashMedia Project 1",
//     },
//     {
//       src: image2,
//       alt: "MashMedia Project 2",
//     },
//     {
//       src: image3,
//       alt: "MashMedia Project 3",
//     },
//     {
//       src: image4,
//       alt: "MashMedia Project 4",
//     },
//   ];

//   return (
//     <Container>
//       <Title>MashMedia Studio</Title>
//       <MasonryGrid>
//         {mashMediaImages.map((image, index) => (
//           <MasonryItem key={index}>
//             <img src={image.src} alt={image.alt} />
//           </MasonryItem>
//         ))}
//       </MasonryGrid>
//     </Container>
//   );
// };

// export default MashMediaStudio;


// src/pages/MashMediaStudio/MashMediaStudio.tsx
import React from 'react';
import styled from 'styled-components';
// import BulkImageLoader, { ImageInfo } from '@/components/Animations/BulkImageLoader';

// Import images directly
import image1 from '@/assets/mashmedia/image1.jpg';
import image2 from '@/assets/mashmedia/image2.jpg';
import image3 from '@/assets/mashmedia/landscape1.jpg';
import image4 from '@/assets/mashmedia/landscape2.jpg';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: red;
//   color: ${props => props.theme.text};
  margin-bottom: 2rem;
`;

const MashMediaStudio: React.FC = () => {
  const mashMediaImages: ImageInfo[] = [
    {
      src: image1,
      alt: "MashMedia Project 1"
    },
    {
      src: image2,
      alt: "MashMedia Project 2"
    },
    {
      src: image3,
      alt: "MashMedia Project 3"
    },{
      src: image4,
      alt: "MashMedia Project 4"
    }
  ];

  return (
    <Container>
      <Title>MashMedia Studio</Title>
      Test page
      {/* <BulkImageLoader
        images={mashMediaImages}
        className="media-image"
      /> */}
    </Container>
  );
};

export default MashMediaStudio;