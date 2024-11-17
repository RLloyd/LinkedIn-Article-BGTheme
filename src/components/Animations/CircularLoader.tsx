import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 314px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const CircularSVG = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 100%;
  z-index: 100;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.loaded {
    opacity: 1;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  position: relative;
  z-index: 101;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #85aab6;
`;

const CountdownText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 3rem;
  margin: 0;
  color: #85aab6;
`;

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const easing = [0.35, 0.27, 0.3, 0.83];
  const animationDuration = 3;

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = () => {
      if (xhr.status === 200) {
        setProgress(100);
        setLoading(false);
      }
    };

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(Math.round(percentComplete));
      }
    };

    xhr.onerror = () => {
      console.error('Error loading image');
      setLoading(false);
    };

    xhr.send();

    return () => {
      xhr.abort();
    };
  }, [src]);

  return (
    <Container>
      <Image
        src={src}
        alt={alt}
        className={`${className} ${!loading ? 'loaded' : ''}`}
      />

      <AnimatePresence>
        {loading && (
          <LoaderContainer>
            <CounterContainer>
              <LoadingText>LOADING...</LoadingText>
              <CountdownText>
                <span>{Math.min(progress, 100)}</span>
                <span>%</span>
              </CountdownText>
            </CounterContainer>

            <CircularSVG>
              <motion.svg
                width="180"
                height="180"
                viewBox="0 0 314 314"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.path
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 720 }}
                  transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z"
                  fill="#85aab6"
                />
                <motion.path
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M156.7 67C107.114 67 67 107.114 67 156.7C67 206.286 107.114 246.4 156.7 246.4C206.282 246.4 246.4 206.19 246.4 156.7H258.4C258.4 212.81 212.918 258.4 156.7 258.4C100.486 258.4 55 212.914 55 156.7C55 100.486 100.486 55 156.7 55C184.75 55 210.266 66.3749 228.655 84.8696L220.145 93.3304C203.934 77.0251 181.45 67 156.7 67Z"
                  fill="#85aab6"
                />
                <motion.path
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 * 4 }}
                  transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M171.65 71.8689C124.843 63.5629 80.1766 94.9308 71.8686 141.749C67.3737 167.057 74.5041 191.781 89.3643 210.454L86.2344 212.945C70.6946 193.418 63.225 167.542 67.9301 141.05L69.8993 141.4L67.9301 141.05C76.6221 92.0685 123.355 59.2364 172.349 67.9304C221.33 76.6224 254.163 123.356 245.469 172.349C236.777 221.331 190.043 254.163 141.05 245.469L141.749 241.53C188.555 249.836 233.222 218.469 241.53 171.65C249.836 124.844 218.468 80.177 171.65 71.8689Z"
                  fill="#f0fcff"
                />
                <motion.path
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -160 }}
                  transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
                  fill="#ff8d53"
                  d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z"
                />
              </motion.svg>
            </CircularSVG>
          </LoaderContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ImageLoader;