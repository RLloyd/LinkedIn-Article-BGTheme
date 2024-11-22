// src/components/Animations/ImageLoader.tsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { ThemeMode } from '@/styles/theme';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const LoaderOverlay = styled(motion.div)<{ $mode: ThemeMode }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $mode }) =>
    $mode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const LoadingText = styled.div<{ $mode: ThemeMode }>`
  font-size: 18px;
  color: ${({ $mode }) =>
    $mode === 'light' ? '#333333' : '#FFFFFF'};
  margin-bottom: 1rem;
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background-color: #E5E7EB;
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background-color: #3B82F6;
  border-radius: 2px;
`;

const StyledImage = styled(motion.img)`
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

interface ImageLoaderProps {
  src: string;
  alt: string;
  mode?: ThemeMode;
  className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  mode = 'light',
  className
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(Math.round(percentComplete));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 300);
      } else {
        setHasError(true);
      }
    };

    xhr.onerror = () => {
      setHasError(true);
    };

    xhr.send();

    return () => xhr.abort();
  }, [src]);

  if (hasError) {
    return <div>Error loading image</div>;
  }

  return (
    <Container className={className}>
      <AnimatePresence>
        {isLoading && (
          <LoaderOverlay
            $mode={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoadingText $mode={mode}>Loading...</LoadingText>
            <ProgressBar>
              <ProgressFill
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </ProgressBar>
          </LoaderOverlay>
        )}
      </AnimatePresence>

      <StyledImage
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
    </Container>
  );
};

export default ImageLoader;
