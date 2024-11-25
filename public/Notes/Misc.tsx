<<<<<<< HEAD
// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  body {
    color: ${({ theme }) => theme.colors.text[theme.isDarkTheme ? 'dark' : 'light'].primary};
    background-color: ${({ theme }) => theme.colors.backgrounds[theme.isDarkTheme ? 'dark' : 'light']};
  }
`;
=======
// src/components/ImageLoader/ImageLoader.tsx

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ThemeMode } from "@/styles/theme";

const StyledImage = styled(motion.img)`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 550px;
  display: block;
  object-fit: cover;
  border-radius: 2rem;
`;

// Define animation variants
const imageVariants = {
  initial: {
    opacity: 0,
    y: 0,
    height: 550
  },
  loaded: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  slideUp: {
    y: -210,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  },
  resize: {
    height: 220,
    transition: {
      duration: 2.2,
      ease: "easeOut"
    }
  }
};

const poemVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 20,
    transition: {
      duration: 0.8
    }
  },
  slide: {
    y: 150,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, mode = "light", className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPoem, setShowPoem] = useState(false);
  const [startSlideAnimation, setStartSlideAnimation] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [animationState, setAnimationState] = useState("initial");

  const runAnimationSequence = async () => {
    // Initial fade in
    setIsLoading(false);
    setAnimationState("loaded");

    // Show poem after delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setShowPoem(true);

    // Start slide animation after delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStartSlideAnimation(true);
    setAnimationState("slideUp");

    // Start resize animation after slide completes
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setAnimationState("resize");

    // Play sound after final animation
    await new Promise((resolve) => setTimeout(resolve, 800));
    const tempButton = document.createElement("button");
    tempButton.style.display = "none";
    document.body.appendChild(tempButton);
    tempButton.addEventListener("click", () => {
      playSound();
      tempButton.remove();
    });
    tempButton.click();
  };

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", src, true);
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(Math.round(percentComplete));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        setProgress(100);
        runAnimationSequence();
      } else {
        setHasError(true);
      }
    };

    xhr.onerror = () => {
      setHasError(true);
    };

    xhr.send();

    return () => {
      xhr.abort();
    };
  }, [src]);

  if (hasError) {
    return <div>Error loading image</div>;
  }

  return (
    <Container className={className}>
      <ContentWrapper>
        <StyledImage
          src={src}
          alt={alt}
          variants={imageVariants}
          initial="initial"
          animate={animationState}
        />

        <AnimatePresence>
          {showPoem && (
            <PoemOverlay
              variants={poemVariants}
              initial="initial"
              animate={startSlideAnimation ? "slide" : "visible"}
              exit={{ opacity: 0, y: -20 }}
            >
              <PoemTitle>Guiding Song</PoemTitle>
              <PoemText>
                Beneath the waves, a whale does sing,
                <br />
                Of minds that learn and dreams that spring.
                <br />
                Its hums weave tales of AI's might,
                <br />
                A guiding song in endless night.
              </PoemText>
            </PoemOverlay>
          )}
        </AnimatePresence>
      </ContentWrapper>

      {isLoading && (
        <LoaderOverlay
          $mode={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>Loading... {progress}%</div>
        </LoaderOverlay>
      )}
    </Container>
  );
};

export default ImageLoader;
>>>>>>> cc52749138d1b016acfcc8f474e5998e2578f32a
