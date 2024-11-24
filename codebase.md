# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

src/assets/WIP-ignoreGit

# During ImageLoader development ignore the following components
# Turn them back on when needed
src/components/CircularLoader

src/components/BulkImagesLoader
src/pages/BulkLoading
src/pages/BulkLoading/BulkLoading.tsx


```

# .vscode/settings.json

```json
{
   "editor.fontSize": 15,
   "editor.minimap.sectionHeaderFontSize": 12
}
```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Implementing Light & Dark Teheme</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "GD-Articles-2025",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-icons": "^1.3.2",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.263.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.28.0",
    "styled-components": "^6.1.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/node": "^22.9.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@types/styled-components": "^5.1.34",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "babel-plugin-styled-components": "^2.1.4",
    "clsx": "^2.1.1",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwind-merge": "^2.5.4",
    "tailwindcss": "^3.4.15",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.11.0",
    "vite": "^5.4.10"
  }
}

```

# postcss.config.cjs

```cjs
// postcss.config.cjs
module.exports = {
   plugins: {
     tailwindcss: {},
     autoprefixer: {},
   },
 }

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public/assets/bonsaiDarkBg.webp

This is a binary file of the type: Image

# public/assets/bonsaiLightBg.webp

This is a binary file of the type: Image

# public/assets/gradatedBackground-dark.webp

This is a binary file of the type: Image

# public/assets/gradatedBackground.webp

This is a binary file of the type: Image

# public/component-description.md

```md
<!-- src/components/Animations/ImageLoader.tsx | Loading & Audio & Replaced Poem : 11.23.2024•B -->

This is a React functional component named `ImageLoader`. It appears to be a complex animation component that loads an image, plays a whale sound, and displays a poem. Here's a succinct breakdown of its functionality:

1. **Image Loading**: The component loads an image from a specified `src` URL and displays a loading animation with a progress bar.
2. **Animation Sequence**: After the image is loaded, the component triggers an animation sequence that:
	* Waits for 500ms
	* Displays a poem overlay
	* Waits for 1000ms
	* Triggers a slide animation
	* Attempts to play a whale sound after the animation
3. **Whale Sound Playback**: The component uses the Web Audio API to play a whale sound. It creates an audio context, fetches and decodes the audio file, and plays it with a fade-in effect.
4. **Manual Play Button**: The component also includes a play button that allows the user to manually play the whale sound.
5. **Error Handling**: If there's an error loading the image or playing the sound, the component displays an error message.

The component uses several state variables to manage its behavior, including `isLoading`, `progress`, `showPoem`, `startSlideAnimation`, `hasError`, and `isPlaying`. It also uses several refs to store references to audio elements and nodes.



```

# public/Notes/Create folder structures.txt

```txt
go to root directory and run the following command in the terminal:
mkdir -p src/components/{Navbar,Hero,Card}
mkdir -p src/pages/Home
mkdir -p src/styles
mkdir -p src/data
```

# public/Notes/git.txt

```txt
echo "# Portfolio2025" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RLloyd/Portfolio2025.git
git push -u origin main

Use the source control to commit and push to GIT


```

# public/Notes/Misc.tsx

```tsx

```

# public/Notes/Misc2.ts

```ts

```

# public/sounds/whale-call-1.wav

This is a binary file of the type: Binary

# public/sounds/whale-call-2.wav

This is a binary file of the type: Binary

# public/vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

\`\`\`js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

\`\`\`js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
\`\`\`
# Portfolio2025
# LinkedIn-Article-BGTheme

```

# src/App.css

```css

```

# src/App.tsx

```tsx
// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import MashMediaStudio from './pages/MashMediaStudio/MashMediaStudio';
// import Loader from './pages/Loader/Loader';
import Home from '@/pages/Home';
// import { Loader } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Background isDarkTheme={isDarkTheme} />
      <Router>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/"                 element={<Home/>} />
          {/* <Route path="/"                 element={<Loader/>} /> */}
          {/* <Route path="/BulkLoading"      element={<div>MediaMash Studio</div>} /> */}
          <Route path="/mashmedia"        element={<MashMediaStudio />} />
          <Route path="/digitalone"       element={<div>DigitalOne</div>} />
          <Route path="/zenmonics"        element={<div>Zenmonics</div>} />
          <Route path="/styleguide"       element={<div>Styleguide</div>} />
          <Route path="/profile"          element={<div>Profile</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
```

# src/assets/bonsai.png

This is a binary file of the type: Image

# src/assets/Cards/D1-Logo.png

This is a binary file of the type: Image

# src/assets/Cards/portfolio2019-lg.png

This is a binary file of the type: Image

# src/assets/Cards/wavemaker-cover.png

This is a binary file of the type: Image

# src/assets/Cards/wavemaker-developers.png

This is a binary file of the type: Image

# src/assets/Cards/zenmonics-logo2.png

This is a binary file of the type: Image

# src/assets/Fusion-logo.png

This is a binary file of the type: Image

# src/assets/GD-Fusion-logo.png

This is a binary file of the type: Image

# src/assets/GD-Logo-2024.png

This is a binary file of the type: Image

# src/assets/GD-Logo.png

This is a binary file of the type: Image

# src/assets/gradatedBackground-dark.webp

This is a binary file of the type: Image

# src/assets/gradatedBackground.webp

This is a binary file of the type: Image

# src/assets/Hero/veil-1.webp

This is a binary file of the type: Image

# src/assets/Hero/veil-2.webp

This is a binary file of the type: Image

# src/assets/Hero/veil-3.webp

This is a binary file of the type: Image

# src/assets/Loader/floating-isle.jpeg

This is a binary file of the type: Image

# src/assets/Loader/peaceful-tropical.jpeg

This is a binary file of the type: Image

# src/assets/Loader/Whale.png

This is a binary file of the type: Image

# src/assets/mashmedia/image1.jpg

This is a binary file of the type: Image

# src/assets/mashmedia/image2.jpg

This is a binary file of the type: Image

# src/assets/mashmedia/landscape1.jpg

This is a binary file of the type: Image

# src/assets/mashmedia/landscape2.jpg

This is a binary file of the type: Image

# src/assets/react.svg

This is a file of the type: SVG Image

# src/assets/sounds/whale-call-1.wav

This is a binary file of the type: Binary

# src/assets/sounds/whale-call-2.wav

This is a binary file of the type: Binary

# src/assets/sounds/whale-call.wav

This is a binary file of the type: Binary

# src/assets/veil.png

This is a binary file of the type: Image

# src/assets/WIP-ignoreGit/PSD/gradatedBackground.psd

This is a binary file of the type: Binary

# src/assets/WIP-ignoreGit/Screenshot 2024-11-15 at 3.39.08 PM.png

This is a binary file of the type: Image

# src/assets/WIP-ignoreGit/Screenshot 2024-11-15 at 4.20.54 AM.png

This is a binary file of the type: Image

# src/assets/WIP-ignoreGit/Screenshot 2024-11-15 at 10.14.59 AM.png

This is a binary file of the type: Image

# src/components/Animations/AnimatedText.tsx

```tsx
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState, PropsWithChildren } from 'react';

// Define styled component with TypeScript
const AnimatedTextDiv = styled(motion.div)`
  font-family: 'Libre Baskerville', serif;
  font-size: 200px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  text-align: center;
  position: fixed;
  width: 100%;
  transition: color 2s ease;
  z-index: 100;

  @media (max-width: 768px) {
    font-size: 22vw;
  }
`;

// Define animation variants
const variants: Variants = {
  desktop: {
    top: 400,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  mobile: {
    top: 100,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

// Define component props interface
interface AnimatedTextProps extends PropsWithChildren {
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatedTextDiv
      initial={isMobile ? "mobile" : "desktop"}
      animate={isMobile ? "mobile" : "desktop"}
      variants={variants}
      className={className}
    >
      {children}
    </AnimatedTextDiv>
  );
};

export default AnimatedText;
```

# src/components/Animations/GearLoader.tsx

```tsx
// src/components/Animations/GearLoader.tsx

import React, { useEffect, useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', src);

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        console.log('Loading progress:', percent); // Debug log
        setProgress(Math.round(percent));
      }
    };

    xhr.send();

    return () => xhr.abort();
  }, [src]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Always visible loader for testing */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        <div style={{
          fontSize: '24px',
          color: '#4338CA',
          marginBottom: '16px'
        }}>
          Loading... {progress}%
        </div>

        <div style={{
          width: '200px',
          height: '4px',
          backgroundColor: '#E2E8F0',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#4338CA',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      <img
        src={src}
        alt={alt}
        className={className}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageLoader;

// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface GearLoaderProps {
//    src: string;
//    alt: string;
//    className?: string;
//  }

// // const GearLoader = ({ src, alt, className }) => {
// const GearLoader: React.FC<GearLoaderProps> = ({ src, alt, className }) => {
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', src, true);
//     xhr.responseType = 'blob';

//    //  xhr.onprogress = (event) => {
//    xhr.onprogress = (event: ProgressEvent) => {
//       if (event.lengthComputable) {
//         const percentComplete = (event.loaded / event.total) * 100;
//         setProgress(Math.round(percentComplete));
//       }
//     };

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         setImageLoaded(true);
//         setLoading(false);
//       }
//     };

//     xhr.onerror = () => {
//       console.error('Error loading image');
//       setLoading(false);
//     };

//     xhr.send();

//     return () => {
//       xhr.abort();
//     };
//   }, [src]);

//   // Helper function to create gear teeth
//   const createGearPath = (radius: number, teeth: number, innerRadius: number): string => {
//     const points = [];
//     const angleStep = (2 * Math.PI) / (teeth * 2);

//     for (let i = 0; i < teeth * 2; i++) {
//       const angle = i * angleStep;
//       const r = i % 2 === 0 ? radius : innerRadius;
//       const x = Math.cos(angle) * r;
//       const y = Math.sin(angle) * r;
//       points.push(`${x},${y}`);
//     }

//     return `M ${points.join(' L ')} Z`;
//   };

//   return (
//     <div className="relative inline-block">
//       <AnimatePresence>
//         {loading && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               className="relative w-32 h-32"
//             >
//               {/* Background circle that morphs into gear */}
//               <motion.svg
//                 viewBox="-100 -100 200 200"
//                 className="absolute w-full h-full"
//               >
//                 <motion.path
//                   d={createGearPath(180, 24, 60)}
//                   initial={{
//                     pathLength: 0,
//                     rotate: 0,
//                     scale: 0.8
//                   }}
//                   animate={{
//                     pathLength: progress / 100,
//                     rotate: 360,
//                     scale: 1
//                   }}
//                   transition={{
//                     pathLength: { duration: 0.5 },
//                     rotate: { duration: 3, repeat: Infinity, ease: "linear" }
//                   }}
//                   fill="none"
//                   stroke="#4F46E5"
//                   strokeWidth="4"
//                   className="origin-center"
//                 />
//               </motion.svg>

//               {/* Inner gear */}
//               <motion.svg
//                 viewBox="-100 -100 200 200"
//                 className="absolute w-full h-full"
//               >
//                 <motion.path
//                   d={createGearPath(40, 16, 30)}
//                   initial={{ rotate: 0 }}
//                   animate={{
//                     rotate: -360,
//                     scale: progress < 50 ? 0.8 : 1
//                   }}
//                   transition={{
//                     rotate: { duration: 2, repeat: Infinity, ease: "linear" },
//                     scale: { duration: 0.5 }
//                   }}
//                   fill="none"
//                   stroke="#818CF8"
//                   strokeWidth="4"
//                   className="origin-center"
//                 />
//               </motion.svg>

//               {/* Loading percentage text */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-indigo-600 font-bold"
//                 >
//                   {progress}%
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       <img
//         src={src}
//         alt={alt}
//         className={`transition-opacity duration-300 ${
//           loading ? 'opacity-0' : 'opacity-100'
//         } ${className || ''}`}
//       />
//     </div>
//   );
// };

// export default GearLoader;

```

# src/components/AudioPlayer/AudioPlayer.tsx

```tsx
// src/components/AudioPlayer/AudioPlayer.tsx

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, Download, Settings } from "lucide-react";

interface AudioPlayerProps {
	src: string;
	title?: string;
	autoPlay?: boolean;
	loop?: boolean;
	initialVolume?: number;
	className?: string;
	onPlay?: () => void;
	onPause?: () => void;
	onEnded?: () => void;
}

const formatTime = (seconds: number): string => {
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const AudioPlayer = ({ src, title = "Audio Track", autoPlay = false, loop = false, initialVolume = 1, className = "", onPlay, onPause, onEnded }: AudioPlayerProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(initialVolume);
	const [isMuted, setIsMuted] = useState(false);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = initialVolume;
			if (autoPlay) {
				audioRef.current.play().catch(() => {
					setError("Autoplay blocked by browser");
				});
			}
		}

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
			}
		};
	}, []);

	const handlePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
				onPause?.();
			} else {
				audioRef.current.play().catch((err) => {
					setError("Failed to play audio");
				});
				onPlay?.();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	const handleLoadedMetadata = () => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
			setIsLoading(false);
		}
	};

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const time = parseFloat(e.target.value);
		if (audioRef.current) {
			audioRef.current.currentTime = time;
			setCurrentTime(time);
		}
	};

	const handleSkip = (seconds: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime += seconds;
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(e.target.value);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
			setVolume(newVolume);
			setIsMuted(newVolume === 0);
		}
	};

	const handleSpeedChange = (speed: number) => {
		if (audioRef.current) {
			audioRef.current.playbackRate = speed;
			setPlaybackRate(speed);
		}
	};

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = src;
		link.download = title;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Update the className assignments to include tw- prefix
	return (
		<div
			className={`
     tw-fixed tw-bottom-4 tw-right-4 tw-w-96
     tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-4 ${className}
     `}
			role="region"
			aria-label="Audio player"
		>
			<audio ref={audioRef} src={src} loop={loop} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={onEnded} onError={() => setError("Error loading audio")} />

			{error && (
				<div className="tw-text-red-500 tw-text-sm tw-mb-2" role="alert">
					{error}
				</div>
			)}

			<div className="tw-flex tw-items-center tw-justify-between tw-mb-2">
				<h2 className="tw-text-lg tw-font-semibold tw-truncate">{title}</h2>
				<div className="tw-flex tw-items-center tw-space-x-2">
					<button onClick={() => handleSpeedChange(playbackRate === 2 ? 0.5 : playbackRate + 0.5)} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Change playback speed">
						{playbackRate}x
					</button>
					<button onClick={handleDownload} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Download audio">
						<Download size={20} />
					</button>
				</div>
			</div>

			<div className="tw-flex tw-items-center tw-space-x-4 tw-mb-2">
				<span className="tw-text-sm">{formatTime(currentTime)}</span>
				<input type="range" value={currentTime} min={0} max={duration} step={0.1} onChange={handleSeek} className="tw-flex-grow tw-h-2 tw-rounded-lg tw-appearance-none tw-bg-gray-200" aria-label="Seek" />
				<span className="tw-text-sm">{formatTime(duration)}</span>
			</div>

			<div className="tw-flex tw-items-center tw-justify-between">
				<div className="tw-flex tw-items-center tw-space-x-4">
					<button onClick={() => handleSkip(-10)} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Skip backward 10 seconds">
						<SkipBack size={24} />
					</button>

					<button onClick={handlePlayPause} className="tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white" aria-label={isPlaying ? "Pause" : "Play"}>
						{isLoading ? <div className="tw-animate-spin tw-rounded-full tw-h-6 tw-w-6 tw-border-2 tw-border-white tw-border-t-transparent" /> : isPlaying ? <Pause size={24} /> : <Play size={24} />}
					</button>

					<button onClick={() => handleSkip(10)} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label="Skip forward 10 seconds">
						<SkipForward size={24} />
					</button>
				</div>

				<div className="tw-flex tw-items-center tw-space-x-2">
					<button onClick={toggleMute} className="tw-text-gray-600 hover:tw-text-gray-800" aria-label={isMuted ? "Unmute" : "Mute"}>
						{isMuted ? <VolumeX size={20} /> : volume > 0.5 ? <Volume2 size={20} /> : <Volume1 size={20} />}
					</button>
					<input type="range" min={0} max={1} step={0.1} value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="tw-w-20 tw-h-2 tw-rounded-lg tw-appearance-none tw-bg-gray-200" aria-label="Volume" />
				</div>
			</div>
		</div>
	);

	//   return (
	//     <div className={`
	//       tw-fixed tw-bottom-4 tw-right-4 tw-w-96
	//       tw-bg-white  tw-rounded-lg
	//       shadow-lg p-4 ${className}
	//       border-2 border-red-500
	//       audioPlayer
	//       `}

	//       role="region"
	//       aria-label="Audio player"

	//       >
	//       <audio
	//         ref={audioRef}
	//         src={src}
	//         loop={loop}
	//         onTimeUpdate={handleTimeUpdate}
	//         onLoadedMetadata={handleLoadedMetadata}
	//         onEnded={onEnded}
	//         onError={() => setError('Error loading audio')}
	//       />

	//       {error && (
	//         <div className="text-red-500 text-sm mb-2" role="alert">
	//           {error}
	//         </div>
	//       )}

	//       <div className="flex items-center justify-between mb-2">
	//         <h2 className="text-lg font-semibold truncate">{title}</h2>
	//         <div className="flex items-center space-x-2">
	//           <button
	//             onClick={() => handleSpeedChange(playbackRate === 2 ? 0.5 : playbackRate + 0.5)}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Change playback speed"
	//           >
	//             {playbackRate}x
	//           </button>
	//           <button
	//             onClick={handleDownload}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Download audio"
	//           >
	//             <Download size={20} />
	//           </button>
	//         </div>
	//       </div>

	//       <div className="flex items-center space-x-4 mb-2">
	//         <span className="text-sm">{formatTime(currentTime)}</span>
	//         <input
	//           type="range"
	//           value={currentTime}
	//           min={0}
	//           max={duration}
	//           step={0.1}
	//           onChange={handleSeek}
	//           className="flex-grow h-2 rounded-lg appearance-none bg-gray-200"
	//           aria-label="Seek"
	//         />
	//         <span className="text-sm">{formatTime(duration)}</span>
	//       </div>

	//       <div className="flex items-center justify-between">
	//         <div className="flex items-center space-x-4">
	//           <button
	//             onClick={() => handleSkip(-10)}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Skip backward 10 seconds"
	//           >
	//             <SkipBack size={24} />
	//           </button>

	//           <button
	//             onClick={handlePlayPause}
	//             className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white"
	//             aria-label={isPlaying ? 'Pause' : 'Play'}
	//           >
	//             {isLoading ? (
	//               <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
	//             ) : isPlaying ? (
	//               <Pause size={24} />
	//             ) : (
	//               <Play size={24} />
	//             )}
	//           </button>

	//           <button
	//             onClick={() => handleSkip(10)}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label="Skip forward 10 seconds"
	//           >
	//             <SkipForward size={24} />
	//           </button>
	//         </div>

	//         <div className="flex items-center space-x-2">
	//           <button
	//             onClick={toggleMute}
	//             className="text-gray-600 hover:text-gray-800"
	//             aria-label={isMuted ? 'Unmute' : 'Mute'}
	//           >
	//             {isMuted ? (
	//               <VolumeX size={20} />
	//             ) : volume > 0.5 ? (
	//               <Volume2 size={20} />
	//             ) : (
	//               <Volume1 size={20} />
	//             )}
	//           </button>
	//           <input
	//             type="range"
	//             min={0}
	//             max={1}
	//             step={0.1}
	//             value={isMuted ? 0 : volume}
	//             onChange={handleVolumeChange}
	//             className="w-20 h-2 rounded-lg appearance-none bg-gray-200"
	//             aria-label="Volume"
	//           />
	//         </div>
	//       </div>
	//     </div>
	//   );
};

export default AudioPlayer;

```

# src/components/AudioPlayer/ReadMe.md

```md
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

/* Base styles */
body {
  font-family: 'Libre Baskerville', serif;
  line-height: 1.8;
  color: #2D3748;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #FFFDF7;
}

/* Typography scale */
h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #1A202C;
  letter-spacing: -0.02em;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.875rem;
  line-height: 1.3;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #2D3748;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #4A5568;
}

/* Paragraphs and lists */
p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Code blocks */
code {
  font-family: 'JetBrains Mono', Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 0.9em;
  background-color: #F7FAFC;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  border: 1px solid #E2E8F0;
}

pre {
  background-color: #F7FAFC;
  padding: 1.5rem;
  border-radius: 6px;
  overflow-x: auto;
  border: 1px solid #E2E8F0;
  margin: 1.5rem 0;
}

pre code {
  border: none;
  padding: 0;
}

/* Links */
a {
  color: #4A90E2;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

a:hover {
  border-bottom-color: currentColor;
}

/* Blockquotes */
blockquote {
  font-style: italic;
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  border-left: 3px solid #CBD5E0;
  color: #4A5568;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #E2E8F0;
  text-align: left;
}

th {
  background-color: #F7FAFC;
  font-weight: 700;
}

/* Emphasis and strong */
em {
  font-style: italic;
}

strong {
  font-weight: 700;
  color: #1A202C;
}

/* Meta information */
.meta {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 2rem;
}

/* Feature list checkmarks */
.features li::before {
  content: "✓";
  color: #48BB78;
  font-weight: bold;
  display: inline-block;
  width: 1.5em;
  margin-left: -1.5em;
}

/* Command line prompts */
.command {
  display: block;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #2D3748;
  color: #FFFFFF;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
}

.command::before {
  content: "$ ";
  color: #A0AEC0;
}
</style>

# AudioPlayer Component Documentation
Version 1.0.0 | Last Updated: November 23, 2024

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Props](#props)
5. [Features](#features)
6. [Accessibility](#accessibility)
7. [Events & Callbacks](#events--callbacks)
8. [Styling](#styling)
9. [Browser Support](#browser-support)
10. [Troubleshooting](#troubleshooting)
11. [Examples](#examples)
12. [API Reference](#api-reference)

## Overview

The AudioPlayer is a modern, feature-rich React component for playing audio content. Built with TypeScript and styled with Tailwind CSS, it provides a comprehensive solution for audio playback with advanced features like speed control, download capabilities, and full accessibility support.

### Key Features
- Full playback controls
- Volume management with mute toggle
- Playback speed adjustment
- Progress tracking with seek functionality
- Download capability
- Mobile-responsive design
- Accessibility compliance
- Comprehensive logging system

## Installation

\`\`\`bash
# If using npm
npm install @your-org/audio-player

# If using yarn
yarn add @your-org/audio-player
\`\`\`

Required peer dependencies:
- React 16.8+
- Tailwind CSS 3.0+
- TypeScript 4.5+ (for TypeScript users)

## Basic Usage

\`\`\`tsx
import { AudioPlayer } from '@your-org/audio-player';

function App() {
  return (
    <AudioPlayer
      src="/path/to/audio.mp3"
      title="My Audio Track"
      autoPlay={false}
      initialVolume={0.8}
      onPlay={() => console.log('Audio started playing')}
    />
  );
}
\`\`\`

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| src | string | URL or path to the audio file |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Audio Track' | Display title for the audio track |
| autoPlay | boolean | false | Whether to start playing automatically |
| loop | boolean | false | Whether to loop the audio |
| initialVolume | number | 1 | Initial volume (0-1) |
| className | string | '' | Additional CSS classes |
| onPlay | () => void | undefined | Callback when audio starts playing |
| onPause | () => void | undefined | Callback when audio is paused |
| onEnded | () => void | undefined | Callback when audio playback ends |

## Features

### Playback Controls
- Play/Pause toggle
- 10-second skip forward/backward
- Progress bar with time display
- Loop functionality

### Volume Controls
- Volume slider (0-100%)
- Mute toggle
- Visual volume level indicator
- Persistent volume settings

### Speed Control
- Multiple playback speeds (0.5x, 1x, 1.5x, 2x)
- One-click speed cycling
- Visual speed indicator

### Download Functionality
- Direct download support
- Automatic filename handling
- Progress tracking

### Progress Tracking
- Real-time progress updates
- Time elapsed/remaining display
- Interactive seek functionality
- Buffering indicator

## Accessibility

The component follows WCAG 2.1 guidelines and includes:

- ARIA labels for all controls
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast support

Keyboard shortcuts:
- Space: Play/Pause
- Left Arrow: Skip backward
- Right Arrow: Skip forward
- M: Mute/Unmute
- Up/Down Arrows: Volume control

## Events & Callbacks

\`\`\`typescript
// Play event
onPlay={() => {
  console.log('Audio started playing');
}}

// Pause event
onPause={() => {
  console.log('Audio paused');
}}

// End event
onEnded={() => {
  console.log('Audio finished playing');
}}
\`\`\`

## Styling

The component uses Tailwind CSS classes and can be customized via:

1. className prop for container styling
2. Tailwind theme customization
3. CSS custom properties for colors

\`\`\`tsx
// Custom styling example
<AudioPlayer
  className="bg-custom-dark rounded-xl shadow-lg"
  src="/audio.mp3"
/>
\`\`\`

## Browser Support

Supported browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Opera 47+

Mobile support:
- iOS Safari 12+
- Android Chrome 60+
- Android Firefox 60+

## Troubleshooting

Common issues and solutions:

1. **Autoplay not working**
   - Ensure user interaction
   - Check browser autoplay policies
   - Verify volume settings

2. **Audio format compatibility**
   - Use MP3 for maximum compatibility
   - Provide alternative formats
   - Check browser codec support

3. **Performance issues**
   - Optimize audio file size
   - Use appropriate bitrates
   - Enable browser caching

## Examples

### Basic Player
\`\`\`tsx
<AudioPlayer
  src="/audio.mp3"
  title="Simple Audio"
/>
\`\`\`

### Full-Featured Player
\`\`\`tsx
<AudioPlayer
  src="/audio.mp3"
  title="Advanced Audio"
  autoPlay={false}
  loop={true}
  initialVolume={0.8}
  className="custom-player"
  onPlay={() => logPlayEvent()}
  onPause={() => logPauseEvent()}
  onEnded={() => handleCompletion()}
/>
\`\`\`

### With Custom Controls
\`\`\`tsx
<AudioPlayer
  src="/audio.mp3"
  title="Custom Audio"
  className="custom-controls"
  renderCustomControls={({ play, pause, seek }) => (
    <div className="custom-controls-container">
      {/* Custom control implementation */}
    </div>
  )}
/>
\`\`\`

## API Reference

### Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| play | none | Promise<void> | Starts audio playback |
| pause | none | void | Pauses audio playback |
| seek | time: number | void | Seeks to specified time |
| setVolume | volume: number | void | Sets volume level |
| toggleMute | none | void | Toggles mute state |
| setPlaybackRate | rate: number | void | Sets playback speed |

### Events

| Event | Callback Parameters | Description |
|-------|-------------------|-------------|
| onPlay | none | Fired when playback starts |
| onPause | none | Fired when playback pauses |
| onEnded | none | Fired when playback ends |
| onTimeUpdate | currentTime: number | Fired when playback time updates |
| onVolumeChange | volume: number | Fired when volume changes |
| onError | error: Error | Fired when an error occurs |

### Logging Interface

\`\`\`typescript
interface LoggerInterface {
  info: (message: string, data?: any) => void;
  error: (message: string, error?: any) => void;
  warn: (message: string, data?: any) => void;
  debug: (message: string, data?: any) => void;
}
\`\`\`

For more detailed information about implementation details or advanced usage scenarios, please refer to our [GitHub repository](https://github.com/your-org/audio-player) or contact our support team.

This documentation provides:

Clear installation and usage instructions
Detailed props and API reference
Feature descriptions and examples
Accessibility guidelines
Troubleshooting tips
Browser compatibility information
Code examples for common use cases
```

# src/components/Background.tsx

```tsx
import React from 'react';
import styled from 'styled-components';

const lightBg = '/assets/bonsaiLightBg.webp';
const darkBg = '/assets/bonsaiDarkBg.webp';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundImage = styled.img<{ $isDark: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .8; //0.8
  transition: opacity 1.3s ease; //0.3
`;

const Overlay = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $isDark }) => $isDark ? 'rgba(18, 18, 18, 0.5)' : 'rgba(255, 255, 255, 0)'};
  transition: background-color 1.3s ease;
`;

interface BackgroundProps {
  isDarkTheme: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isDarkTheme }) => {
  const currentImage = isDarkTheme ? darkBg : lightBg;

  return (
    <BackgroundWrapper>
      <BackgroundImage
        src={currentImage}
        alt="background"
        $isDark={isDarkTheme}
      />
      <Overlay $isDark={isDarkTheme} />
    </BackgroundWrapper>
  );
};

export default Background;
```

# src/components/BulkImagesLoader/BulkImageLoader-b4Logo.tsx

```tsx
// src/components/Animations/BulkImageLoader.tsx

// import React, { useEffect, useState, useCallback, useRef } from "react";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export type Priority = "high" | "medium" | "low";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 314px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	align-items: center;
`;

const LoaderContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	z-index: 1000;
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

const ImageContainer = styled.div<{ $blur?: boolean }>`
	position: relative;
	min-width: 200px;
	min-height: 200px;
	flex: 1;
	${(props) =>
		props.$blur &&
		`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      backdrop-filter: blur(10px);
      z-index: 1;
    }
  `}
`;

// const Image = styled.img`
// 	max-width: 100%;
// 	width: 100%;
// 	height: auto;
// 	opacity: 0;
// 	transition: opacity 0.5s ease-in-out;
// 	&.loaded {
// 		opacity: 1;
// 	}
// `;
const Image = styled(motion.img)`
	max-width: 100%;
	width: 100%;
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
	font-size: 0.6rem;
	margin: 0;
	color: #3f1f0b;
`;

const CountdownText = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 2rem;
	margin: 0;
	color: #3f1f0b;
`;

// const Placeholder = styled.div<{ $backgroundColor: string }>`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background-color: ${(props) => props.$backgroundColor};
// 	transition: opacity 0.3s ease-in-out;
// `;

// const RetryButton = styled.button`
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	padding: 8px 16px;
// 	background: #ff6a00;
// 	color: white;
// 	border: none;
// 	border-radius: 4px;
// 	cursor: pointer;
// 	z-index: 2;

// 	&:hover {
// 		background: #ff8d53;
// 	}
// `;

// const DEFAULT_OPTIMIZATION = {
// 	maxWidth: 1200,
// 	quality: 85,
// 	format: "webp" as const,
// };

export interface ImageInfo {
   src: string;
   alt: string;
   loaded?: boolean;
 }

 interface BulkImageLoaderProps {
   images: ImageInfo[];
   className?: string;
 }

 const BulkImageLoader: React.FC<BulkImageLoaderProps> = ({
   images,
   className = '',
 }) => {
   const [loading, setLoading] = useState(true);
   const [progress, setProgress] = useState(0);
   const [imagesVisible, setImagesVisible] = useState(false);
   const [imageLoadProgress, setImageLoadProgress] = useState<number[]>(
     new Array(images.length).fill(0)
   );

   const calculateTotalProgress = useCallback((progressArray: number[]): number => {
     const sum = progressArray.reduce((acc, curr) => acc + curr, 0);
     return Math.floor(sum / progressArray.length);
   }, []);

   const loadImage = useCallback((imageInfo: ImageInfo, index: number): Promise<void> => {
     return new Promise<void>((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       xhr.open('GET', imageInfo.src, true);
       xhr.responseType = 'blob';

       // Track download progress
       xhr.onprogress = (event) => {
         if (event.lengthComputable) {
           const percentComplete = (event.loaded / event.total) * 100;
           setImageLoadProgress(prev => {
             const newProgress = [...prev];
             newProgress[index] = percentComplete;
             setProgress(calculateTotalProgress(newProgress));
             return newProgress;
           });
         }
       };

       xhr.onload = () => {
         if (xhr.status === 200) {
           // Create object URL for the loaded image
           const blob = xhr.response;
           const objectUrl = URL.createObjectURL(blob);
           const img = document.createElement('img');

           img.onload = () => {
             URL.revokeObjectURL(objectUrl);
             setImageLoadProgress(prev => {
               const newProgress = [...prev];
               newProgress[index] = 100;
               const totalProgress = calculateTotalProgress(newProgress);
               setProgress(totalProgress);

               if (totalProgress === 100) {
                 setImagesVisible(true);
                 setTimeout(() => setLoading(false), 500);
               }
               return newProgress;
             });
             resolve();
           };

           img.src = objectUrl;
         } else {
           reject(new Error(`HTTP error! status: ${xhr.status}`));
         }
       };

       xhr.onerror = () => {
         reject(new Error('Network error occurred'));
       };

       xhr.send();
     });
   }, [calculateTotalProgress]);

   useEffect(() => {
     let mounted = true;

     const loadImages = async () => {
       // Reset states
       setProgress(0);
       setImagesVisible(false);
       setLoading(true);
       setImageLoadProgress(new Array(images.length).fill(0));

       try {
         // Start loading all images in parallel
         await Promise.all(
           images.map((image, index) => loadImage(image, index))
         );
       } catch (error) {
         console.error('Error loading images:', error);
       }
     };

     loadImages();

     return () => {
       mounted = false;
     };
   }, [images, loadImage]);

   return (
     <Container>
       {images.map((image, index) => (
         <ImageContainer key={`${image.src}-${index}`}>
           <Image
             src={image.src}
             alt={image.alt}
             className={className}
             style={{
               opacity: imagesVisible ? 1 : 0,
               transition: 'opacity 0.5s ease-in-out'
             }}
           />
         </ImageContainer>
       ))}

       <AnimatePresence>
         {loading && (
           <LoaderContainer
             as={motion.div}
             initial={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
           >
             <CounterContainer>
               <LoadingText>LOADING...</LoadingText>
               <CountdownText>
                 <motion.span>{Math.min(progress, 100)}</motion.span>
                 <span>%</span>
               </CountdownText>
             </CounterContainer>

             <CircularSVG>
               <motion.svg
                 width="314"
                 height="314"
                 viewBox="0 0 314 314"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <motion.path
                   initial={{ rotate: 0 }}
                   animate={{ rotate: 720 }}
                   transition={{ duration: 3, ease: [0.35, 0.27, 0.3, 0.83], repeat: Infinity }}
                   fillRule="evenodd"
                   clipRule="evenodd"
                   d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z"
                   fill="#85aab6"
                 />

								{/* ----------------------------------- */}

								<motion.path initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: 3, ease: [0.35, 0.27, 0.3, 0.83], repeat: Infinity }} fillRule="evenodd" clipRule="evenodd" d="M156.7 49.2993C97.3844 49.2993 49.2998 97.3839 49.2998 156.699C49.2998 216.015 97.3844 264.099 156.7 264.099C216.015 264.099 264.1 216.015 264.1 156.699C264.1 97.3839 216.015 49.2993 156.7 49.2993ZM47.2998 156.699C47.2998 96.2794 96.2799 47.2993 156.7 47.2993C217.12 47.2993 266.1 96.2794 266.1 156.699C266.1 217.119 217.12 266.099 156.7 266.099C96.2799 266.099 47.2998 217.119 47.2998 156.699Z" fill="#ff8d53" />
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 3, ease: [0.35, 0.27, 0.3, 0.83], repeat: Infinity }} fill="#ff6a00" d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z" />
							</motion.svg>
						</CircularSVG>
					</LoaderContainer>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default BulkImageLoader;

// <AnimatePresence>
//   {loading && (
//     <LoaderContainer
//       as={motion.div}
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <CounterContainer>
//         <LoadingText>LOADING...</LoadingText>
//         <CountdownText>
//           <motion.span>{Math.min(Math.round(progress), 100)}</motion.span>
//           <span>%</span>
//         </CountdownText>
//       </CounterContainer>

//       <CircularSVG>
//         <motion.svg
//           width="314"
//           height="314"
//           viewBox="0 0 314 314"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 720 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z" fill="#85aab6" />
// 						<motion.path
// 							initial={{ rotate: 0 }}
// 							animate={{ rotate: 60 }}
// 							transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
// 							fill-rule="evenodd"
// 							clip-rule="evenodd"
// 							d="M147.046 36.5809C150.231 36.3283 153.451 36.1997 156.699 36.1997C159.948 36.1997 163.167 36.3283 166.352 36.5809L165.72 44.5559C162.745 44.32 159.737 44.1997 156.699 44.1997C153.662 44.1997 150.654 44.32 147.678 44.5559L147.046 36.5809ZM120.556 41.7153C126.636 39.8059 132.924 38.3655 139.375 37.4363L140.516 45.3546C134.493 46.2219 128.626 47.5662 122.953 49.3478L120.556 41.7153ZM174.023 37.4363C180.475 38.3655 186.762 39.8059 192.843 41.7153L190.446 49.3478C184.773 47.5662 178.905 46.2219 172.883 45.3546L174.023 37.4363ZM95.8792 52.653C101.407 49.415 107.217 46.6045 113.262 44.2673L116.147 51.7291C110.506 53.91 105.083 56.5331 99.9227 59.5559L95.8792 52.653ZM200.136 44.2673C206.182 46.6045 211.991 49.415 217.519 52.6531L213.476 59.556C208.315 56.5331 202.893 53.9101 197.251 51.7291L200.136 44.2673ZM74.2661 68.8071C78.9555 64.4072 83.9975 60.3782 89.3455 56.7669L93.8225 63.3968C88.8288 66.7689 84.12 70.5316 79.7399 74.6412L74.2661 68.8071ZM224.053 56.7669C229.401 60.3782 234.443 64.4073 239.132 68.8071L233.659 74.6412C229.279 70.5317 224.57 66.769 219.576 63.3969L224.053 56.7669ZM56.7664 89.3459C60.3777 83.998 64.4068 78.956 68.8066 74.2665L74.6407 79.7404C70.5312 84.1204 66.7685 88.8293 63.3964 93.823L56.7664 89.3459ZM244.592 74.2666C248.992 78.956 253.021 83.998 256.632 89.346L250.002 93.823C246.63 88.8293 242.867 84.1205 238.758 79.7404L244.592 74.2666ZM44.2668 113.263C46.604 107.217 49.4145 101.408 52.6526 95.8797L59.5555 99.9231C56.5326 105.084 53.9096 110.506 51.7286 116.148L44.2668 113.263ZM260.746 95.8797C263.984 101.408 266.794 107.217 269.132 113.263L261.67 116.148C259.489 110.506 256.866 105.084 253.843 99.9232L260.746 95.8797ZM37.4358 139.376C38.365 132.924 39.8054 126.637 41.7148 120.556L49.3473 122.953C47.5657 128.626 46.2214 134.494 45.3541 140.516L37.4358 139.376ZM271.684 120.556C273.593 126.637 275.033 132.924 275.963 139.376L268.044 140.516C267.177 134.494 265.833 128.626 264.051 122.953L271.684 120.556ZM36.1992 156.7C36.1992 153.451 36.3279 150.232 36.5804 147.047L44.5554 147.679C44.3195 150.654 44.1992 153.662 44.1992 156.7C44.1992 159.737 44.3195 162.745 44.5554 165.72L36.5804 166.353C36.3279 163.168 36.1992 159.948 36.1992 156.7ZM276.818 147.047C277.071 150.232 277.199 153.451 277.199 156.7C277.199 159.948 277.071 163.168 276.818 166.353L268.843 165.72C269.079 162.745 269.199 159.737 269.199 156.7C269.199 153.662 269.079 150.654 268.843 147.679L276.818 147.047ZM41.7148 192.843C39.8054 186.763 38.365 180.475 37.4358 174.024L45.3541 172.883C46.2214 178.906 47.5657 184.773 49.3473 190.446L41.7148 192.843ZM275.963 174.024C275.033 180.475 273.593 186.763 271.684 192.843L264.051 190.446C265.833 184.773 267.177 178.906 268.044 172.883L275.963 174.024ZM52.6525 217.52C49.4145 211.992 46.604 206.182 44.2668 200.136L51.7286 197.252C53.9096 202.893 56.5326 208.316 59.5555 213.476L52.6525 217.52ZM269.132 200.136C266.794 206.182 263.984 211.992 260.746 217.52L253.843 213.476C256.866 208.316 259.489 202.893 261.67 197.252L269.132 200.136ZM68.8066 239.133C64.4067 234.443 60.3777 229.401 56.7664 224.053L63.3964 219.576C66.7684 224.57 70.5311 229.279 74.6407 233.659L68.8066 239.133ZM256.632 224.053C253.021 229.401 248.992 234.443 244.592 239.133L238.758 233.659C242.867 229.279 246.63 224.57 250.002 219.576L256.632 224.053ZM89.3455 256.633C83.9975 253.021 78.9555 248.992 74.266 244.592L79.7399 238.758C84.1199 242.868 88.8288 246.63 93.8225 250.003L89.3455 256.633ZM239.132 244.592C234.443 248.992 229.401 253.021 224.053 256.633L219.576 250.003C224.57 246.63 229.278 242.868 233.659 238.758L239.132 244.592ZM113.262 269.132C107.217 266.795 101.407 263.984 95.8792 260.746L99.9227 253.843C105.083 256.866 110.506 259.489 116.147 261.67L113.262 269.132ZM217.519 260.746C211.991 263.984 206.182 266.795 200.136 269.132L197.251 261.67C202.893 259.489 208.315 256.866 213.476 253.843L217.519 260.746ZM139.375 275.963C132.924 275.034 126.636 273.594 120.556 271.684L122.953 264.052C128.626 265.833 134.493 267.177 140.516 268.045L139.375 275.963ZM192.843 271.684C186.762 273.594 180.475 275.034 174.023 275.963L172.883 268.045C178.905 267.177 184.773 265.833 190.446 264.052L192.843 271.684ZM156.699 277.2C153.451 277.2 150.231 277.071 147.046 276.818L147.678 268.844C150.654 269.079 153.662 269.2 156.699 269.2C159.737 269.2 162.745 269.079 165.72 268.844L166.352 276.818C163.167 277.071 159.948 277.2 156.699 277.2Z"
// 							fill="#85aab6"
// 						/>
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 49.2993C97.3844 49.2993 49.2998 97.3839 49.2998 156.699C49.2998 216.015 97.3844 264.099 156.7 264.099C216.015 264.099 264.1 216.015 264.1 156.699C264.1 97.3839 216.015 49.2993 156.7 49.2993ZM47.2998 156.699C47.2998 96.2794 96.2799 47.2993 156.7 47.2993C217.12 47.2993 266.1 96.2794 266.1 156.699C266.1 217.119 217.12 266.099 156.7 266.099C96.2799 266.099 47.2998 217.119 47.2998 156.699Z" fill="#ff8d53" />
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 67C107.114 67 67 107.114 67 156.7C67 206.286 107.114 246.4 156.7 246.4C206.282 246.4 246.4 206.19 246.4 156.7H258.4C258.4 212.81 212.918 258.4 156.7 258.4C100.486 258.4 55 212.914 55 156.7C55 100.486 100.486 55 156.7 55C184.75 55 210.266 66.3749 228.655 84.8696L220.145 93.3304C203.934 77.0251 181.45 67 156.7 67Z" fill="#85aab6" />
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 * 4 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M171.65 71.8689C124.843 63.5629 80.1766 94.9308 71.8686 141.749L71.8685 141.749C67.3737 167.057 74.5041 191.781 89.3643 210.454L86.2344 212.945C70.6946 193.418 63.225 167.542 67.9301 141.05L69.8993 141.4L67.9301 141.05C76.6221 92.0685 123.355 59.2364 172.349 67.9304C221.33 76.6224 254.163 123.356 245.469 172.349C236.777 221.331 190.043 254.163 141.05 245.469L141.749 241.53C188.555 249.836 233.222 218.469 241.53 171.65C249.836 124.844 218.468 80.177 171.65 71.8689Z" fill="#f0fcff" />
// 						<motion.path
// 							initial={{ rotate: 0 }}
// 							animate={{ rotate: -160 }}
// 							transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
// 							fill-rule="evenodd"
// 							clip-rule="evenodd"
// 							d="M155.715 75.5054C156.042 75.5015 156.371 75.4995 156.699 75.4995C157.028 75.4995 157.356 75.5015 157.683 75.5054L157.648 78.5051C157.332 78.5014 157.016 78.4995 156.699 78.4995C156.382 78.4995 156.066 78.5014 155.75 78.5051L155.715 75.5054ZM145.934 76.2069C146.582 76.1212 147.231 76.0431 147.883 75.9727L148.205 78.9553C147.577 79.0231 146.952 79.0984 146.328 79.1809L145.934 76.2069ZM165.515 75.9727C166.167 76.0431 166.816 76.1212 167.464 76.2069L167.07 79.1809C166.446 79.0984 165.821 79.0231 165.193 78.9553L165.515 75.9727ZM136.312 78.0806C136.942 77.9175 137.576 77.7618 138.213 77.6135L138.893 80.5354C138.28 80.6781 137.67 80.828 137.063 80.9851L136.312 78.0806ZM175.185 77.6135C175.822 77.7618 176.456 77.9175 177.087 78.0806L176.335 80.9851C175.728 80.828 175.118 80.6781 174.505 80.5354L175.185 77.6135ZM126.981 81.1102C127.589 80.8709 128.201 80.6387 128.816 80.4138L129.846 83.2314C129.254 83.448 128.665 83.6715 128.079 83.9019L126.981 81.1102ZM184.582 80.4138C185.197 80.6387 185.809 80.8709 186.417 81.1102L185.319 83.9019C184.733 83.6715 184.144 83.448 183.552 83.2314L184.582 80.4138ZM118.091 85.2477C118.665 84.937 119.243 84.633 119.825 84.3358L121.189 87.0077C120.629 87.2939 120.072 87.5866 119.519 87.8859L118.091 85.2477ZM193.573 84.3358C194.155 84.633 194.733 84.937 195.307 85.2477L193.879 87.8859C193.326 87.5866 192.769 87.2939 192.209 87.0077L193.573 84.3358ZM202.02 89.3145C202.563 89.68 203.1 90.0518 203.633 90.4299L201.897 92.8767C201.384 92.5125 200.866 92.1543 200.344 91.8023L202.02 89.3145ZM109.765 90.43C110.298 90.0518 110.835 89.68 111.378 89.3145L113.054 91.8023C112.532 92.1544 112.014 92.5125 111.501 92.8767L109.765 90.43ZM102.123 96.5743C102.607 96.1351 103.096 95.7017 103.59 95.2741L105.553 97.5426C105.077 97.9545 104.606 98.372 104.14 98.7951L102.123 96.5743ZM209.808 95.2741C210.302 95.7017 210.791 96.1351 211.275 96.5743L209.258 98.7951C208.792 98.372 208.321 97.9545 207.845 97.5426L209.808 95.2741ZM216.824 102.124C217.263 102.607 217.697 103.096 218.124 103.591L215.856 105.554C215.444 105.078 215.026 104.607 214.603 104.141L216.824 102.124ZM95.2736 103.591C95.7012 103.096 96.1346 102.607 96.5739 102.124L98.7946 104.141C98.3715 104.607 97.954 105.078 97.5421 105.554L95.2736 103.591ZM222.969 109.765C223.347 110.298 223.719 110.836 224.084 111.378L221.596 113.055C221.244 112.532 220.886 112.014 220.522 111.501L222.969 109.765ZM89.314 111.378C89.6795 110.836 90.0513 110.298 90.4295 109.765L92.8762 111.501C92.512 112.014 92.1539 112.532 91.8019 113.055L89.314 111.378ZM84.3353 119.826C84.6325 119.244 84.9365 118.665 85.2473 118.092L87.8854 119.52C87.5861 120.073 87.2934 120.629 87.0072 121.19L84.3353 119.826ZM228.151 118.092C228.462 118.665 228.766 119.244 229.063 119.826L226.391 121.19C226.105 120.629 225.812 120.073 225.513 119.52L228.151 118.092ZM80.4133 128.817C80.6382 128.201 80.8704 127.59 81.1097 126.981L83.9014 128.08C83.671 128.665 83.4475 129.254 83.2309 129.847L80.4133 128.817ZM232.288 126.981C232.528 127.59 232.76 128.201 232.985 128.817L230.167 129.847C229.951 129.254 229.727 128.665 229.497 128.08L232.288 126.981ZM77.6131 138.213C77.7613 137.577 77.917 136.943 78.0801 136.312L80.9846 137.063C80.8275 137.67 80.6776 138.281 80.5349 138.893L77.6131 138.213ZM235.318 136.312C235.481 136.943 235.637 137.577 235.785 138.213L232.863 138.893C232.72 138.281 232.57 137.67 232.413 137.063L235.318 136.312ZM75.9722 147.884C76.0426 147.232 76.1207 146.582 76.2064 145.935L79.1805 146.329C79.0979 146.952 79.0226 147.578 78.9548 148.206L75.9722 147.884ZM237.192 145.935C237.277 146.582 237.355 147.232 237.426 147.884L234.443 148.206C234.375 147.578 234.3 146.952 234.218 146.329L237.192 145.935ZM75.499 156.7C75.499 156.371 75.501 156.043 75.5049 155.715L78.5047 155.751C78.5009 156.067 78.499 156.383 78.499 156.7C78.499 157.016 78.5009 157.332 78.5047 157.648L75.5049 157.684C75.501 157.356 75.499 157.028 75.499 156.7ZM237.893 155.715C237.897 156.043 237.899 156.371 237.899 156.7C237.899 157.028 237.897 157.356 237.893 157.684L234.893 157.648C234.897 157.332 234.899 157.016 234.899 156.7C234.899 156.383 234.897 156.067 234.893 155.751L237.893 155.715ZM76.2064 167.464C76.1207 166.817 76.0426 166.167 75.9722 165.515L78.9548 165.193C79.0226 165.821 79.0979 166.447 79.1805 167.07L76.2064 167.464ZM237.426 165.515C237.355 166.167 237.277 166.817 237.192 167.464L234.218 167.07C234.3 166.447 234.375 165.821 234.443 165.193L237.426 165.515ZM78.0801 177.087C77.917 176.456 77.7613 175.823 77.6131 175.186L80.5349 174.506C80.6776 175.118 80.8275 175.729 80.9846 176.336L78.0801 177.087ZM235.785 175.186C235.637 175.823 235.481 176.456 235.318 177.087L232.413 176.336C232.57 175.729 232.72 175.118 232.863 174.506L235.785 175.186ZM81.1097 186.418C80.8704 185.809 80.6382 185.198 80.4133 184.582L83.2309 183.552C83.4475 184.145 83.671 184.734 83.9014 185.319L81.1097 186.418ZM232.985 184.582C232.76 185.198 232.528 185.809 232.288 186.418L229.497 185.319C229.727 184.734 229.951 184.145 230.167 183.552L232.985 184.582ZM85.2473 195.307C84.9365 194.734 84.6325 194.156 84.3353 193.573L87.0072 192.209C87.2934 192.77 87.5861 193.326 87.8854 193.879L85.2473 195.307ZM229.063 193.573C228.766 194.156 228.462 194.734 228.151 195.307L225.513 193.879C225.812 193.326 226.105 192.77 226.391 192.209L229.063 193.573ZM224.084 202.021C223.719 202.563 223.347 203.101 222.969 203.634L220.522 201.898C220.886 201.385 221.244 200.867 221.596 200.344L224.084 202.021ZM90.4295 203.634C90.0513 203.101 89.6795 202.563 89.314 202.021L91.8019 200.344C92.1539 200.867 92.512 201.385 92.8762 201.898L90.4295 203.634ZM96.5739 211.275C96.1346 210.792 95.7012 210.303 95.2736 209.809L97.5421 207.845C97.954 208.321 98.3715 208.792 98.7946 209.258L96.5739 211.275ZM218.124 209.809C217.697 210.303 217.263 210.792 216.824 211.275L214.603 209.258C215.026 208.792 215.444 208.321 215.856 207.845L218.124 209.809ZM103.59 218.125C103.096 217.697 102.607 217.264 102.123 216.825L104.14 214.604C104.606 215.027 105.077 215.445 105.553 215.856L103.59 218.125ZM211.275 216.825C210.791 217.264 210.302 217.697 209.808 218.125L207.845 215.856C208.321 215.445 208.792 215.027 209.258 214.604L211.275 216.825ZM111.378 224.085C110.835 223.719 110.298 223.347 109.765 222.969L111.501 220.522C112.014 220.887 112.532 221.245 113.054 221.597L111.378 224.085ZM203.633 222.969C203.1 223.347 202.563 223.719 202.02 224.085L200.344 221.597C200.866 221.245 201.384 220.887 201.897 220.522L203.633 222.969ZM119.825 229.063C119.243 228.766 118.665 228.462 118.091 228.151L119.519 225.513C120.072 225.812 120.629 226.105 121.189 226.391L119.825 229.063ZM195.307 228.151C194.733 228.462 194.155 228.766 193.573 229.063L192.209 226.391C192.769 226.105 193.326 225.812 193.879 225.513L195.307 228.151ZM128.816 232.985C128.201 232.76 127.589 232.528 126.981 232.289L128.079 229.497C128.665 229.728 129.254 229.951 129.846 230.168L128.816 232.985ZM186.417 232.289C185.809 232.528 185.197 232.76 184.582 232.985L183.552 230.168C184.144 229.951 184.733 229.728 185.319 229.497L186.417 232.289ZM138.213 235.785C137.576 235.637 136.942 235.482 136.312 235.318L137.063 232.414C137.67 232.571 138.28 232.721 138.893 232.864L138.213 235.785ZM177.087 235.318C176.456 235.482 175.822 235.637 175.185 235.785L174.505 232.864C175.118 232.721 175.728 232.571 176.335 232.414L177.087 235.318ZM147.883 237.426C147.231 237.356 146.582 237.278 145.934 237.192L146.328 234.218C146.952 234.301 147.577 234.376 148.205 234.444L147.883 237.426ZM167.464 237.192C166.816 237.278 166.167 237.356 165.515 237.426L165.193 234.444C165.821 234.376 166.446 234.301 167.07 234.218L167.464 237.192ZM156.699 237.9C156.371 237.9 156.042 237.898 155.715 237.894L155.75 234.894C156.066 234.898 156.382 234.9 156.699 234.9C157.016 234.9 157.332 234.898 157.648 234.894L157.683 237.894C157.356 237.898 157.028 237.9 156.699 237.9Z"
// 							fill="#A7A9AC"
// 						/>
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z" fill="#ff6a00" />
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: -260 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M166.383 101.654C136.009 96.339 106.97 116.654 101.655 147.014C98.807 163.443 103.365 179.476 113.039 191.521L108.361 195.278C97.6353 181.924 92.593 164.157 95.7439 145.987L95.7447 145.982C101.631 112.344 133.791 89.8598 167.417 95.7442C201.055 101.631 223.539 133.791 217.655 167.416C211.768 201.055 179.608 223.539 145.983 217.654L147.017 211.744C177.391 217.06 206.431 196.744 211.745 166.382C217.06 136.008 196.744 106.968 166.383 101.654Z" fill="#bad2d9" />
// 					</motion.svg>
// 				</CircularSVG>
// 			</LoaderContainer>
// 		)}
// 	</AnimatePresence>

```

# src/components/BulkImagesLoader/BulkImageLoader.tsx

```tsx
// src/components/Animations/BulkImageLoader.tsx

// import React, { useEffect, useState, useCallback, useRef } from "react";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export type Priority = "high" | "medium" | "low";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 314px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	align-items: center;
`;

const LoaderContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	z-index: 1000;
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

const ImageContainer = styled.div<{ $blur?: boolean }>`
	position: relative;
	min-width: 200px;
	min-height: 200px;
	flex: 1;
	${(props) =>
		props.$blur &&
		`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      backdrop-filter: blur(10px);
      z-index: 1;
    }
  `}
`;

// const Image = styled.img`
// 	max-width: 100%;
// 	width: 100%;
// 	height: auto;
// 	opacity: 0;
// 	transition: opacity 0.5s ease-in-out;
// 	&.loaded {
// 		opacity: 1;
// 	}
// `;
const Image = styled(motion.img)`
	max-width: 100%;
	width: 100%;
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
	font-size: 0.6rem;
	margin: 0;
	color: #3f1f0b;
`;

const CountdownText = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 2rem;
	margin: 0;
	color: #3f1f0b;
`;

// const Placeholder = styled.div<{ $backgroundColor: string }>`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background-color: ${(props) => props.$backgroundColor};
// 	transition: opacity 0.3s ease-in-out;
// `;

// const RetryButton = styled.button`
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	padding: 8px 16px;
// 	background: #ff6a00;
// 	color: white;
// 	border: none;
// 	border-radius: 4px;
// 	cursor: pointer;
// 	z-index: 2;

// 	&:hover {
// 		background: #ff8d53;
// 	}
// `;

// const DEFAULT_OPTIMIZATION = {
// 	maxWidth: 1200,
// 	quality: 85,
// 	format: "webp" as const,
// };

export interface ImageInfo {
   src: string;
   alt: string;
   loaded?: boolean;
 }

 interface BulkImageLoaderProps {
   images: ImageInfo[];
   className?: string;
 }

 const BulkImageLoader: React.FC<BulkImageLoaderProps> = ({
   images,
   className = '',
 }) => {
   const [loading, setLoading] = useState(true);
   const [progress, setProgress] = useState(0);
   const [imagesVisible, setImagesVisible] = useState(false);
   const [imageLoadProgress, setImageLoadProgress] = useState<number[]>(
     new Array(images.length).fill(0)
   );

   const calculateTotalProgress = useCallback((progressArray: number[]): number => {
     const sum = progressArray.reduce((acc, curr) => acc + curr, 0);
     return Math.floor(sum / progressArray.length);
   }, []);

   const loadImage = useCallback((imageInfo: ImageInfo, index: number): Promise<void> => {
     return new Promise<void>((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       xhr.open('GET', imageInfo.src, true);
       xhr.responseType = 'blob';

       // Track download progress
       xhr.onprogress = (event) => {
         if (event.lengthComputable) {
           const percentComplete = (event.loaded / event.total) * 100;
           setImageLoadProgress(prev => {
             const newProgress = [...prev];
             newProgress[index] = percentComplete;
             setProgress(calculateTotalProgress(newProgress));
             return newProgress;
           });
         }
       };

       xhr.onload = () => {
         if (xhr.status === 200) {
           // Create object URL for the loaded image
           const blob = xhr.response;
           const objectUrl = URL.createObjectURL(blob);
           const img = document.createElement('img');

           img.onload = () => {
             URL.revokeObjectURL(objectUrl);
             setImageLoadProgress(prev => {
               const newProgress = [...prev];
               newProgress[index] = 100;
               const totalProgress = calculateTotalProgress(newProgress);
               setProgress(totalProgress);

               if (totalProgress === 100) {
                 setImagesVisible(true);
                 setTimeout(() => setLoading(false), 500);
               }
               return newProgress;
             });
             resolve();
           };

           img.src = objectUrl;
         } else {
           reject(new Error(`HTTP error! status: ${xhr.status}`));
         }
       };

       xhr.onerror = () => {
         reject(new Error('Network error occurred'));
       };

       xhr.send();
     });
   }, [calculateTotalProgress]);

   useEffect(() => {
     let mounted = true;

     const loadImages = async () => {
       // Reset states
       setProgress(0);
       setImagesVisible(false);
       setLoading(true);
       setImageLoadProgress(new Array(images.length).fill(0));

       try {
         // Start loading all images in parallel
         await Promise.all(
           images.map((image, index) => loadImage(image, index))
         );
       } catch (error) {
         console.error('Error loading images:', error);
       }
     };

     loadImages();

     return () => {
       mounted = false;
     };
   }, [images, loadImage]);

   return (
     <Container>
       {images.map((image, index) => (
         <ImageContainer key={`${image.src}-${index}`}>
           <Image
             src={image.src}
             alt={image.alt}
             className={className}
             style={{
               opacity: imagesVisible ? 1 : 0,
               transition: 'opacity 0.5s ease-in-out'
             }}
           />
         </ImageContainer>
       ))}

       <AnimatePresence>
         {loading && (
           <LoaderContainer
             as={motion.div}
             initial={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
           >
             <CounterContainer>
               <LoadingText>LOADING...</LoadingText>
               <CountdownText>
                 <motion.span>{Math.min(progress, 100)}</motion.span>
                 <span>%</span>
               </CountdownText>
             </CounterContainer>

             <CircularSVG>
               <motion.svg
                 width="314"
                 height="314"
                 viewBox="0 0 314 314"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <motion.path
                   initial={{ rotate: 0 }}
                   animate={{ rotate: 720 }}
                   transition={{ duration: 3, ease: [0.35, 0.27, 0.3, 0.83], repeat: Infinity }}
                   fillRule="evenodd"
                   clipRule="evenodd"
                   d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z"
                   fill="#85aab6"
                 />

								{/* ----------------------------------- */}

								<motion.path initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: 3, ease: [0.35, 0.27, 0.3, 0.83], repeat: Infinity }} fillRule="evenodd" clipRule="evenodd" d="M156.7 49.2993C97.3844 49.2993 49.2998 97.3839 49.2998 156.699C49.2998 216.015 97.3844 264.099 156.7 264.099C216.015 264.099 264.1 216.015 264.1 156.699C264.1 97.3839 216.015 49.2993 156.7 49.2993ZM47.2998 156.699C47.2998 96.2794 96.2799 47.2993 156.7 47.2993C217.12 47.2993 266.1 96.2794 266.1 156.699C266.1 217.119 217.12 266.099 156.7 266.099C96.2799 266.099 47.2998 217.119 47.2998 156.699Z" fill="#ff8d53" />
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 3, ease: [0.35, 0.27, 0.3, 0.83], repeat: Infinity }} fill="#ff6a00" d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z" />
							</motion.svg>
						</CircularSVG>
					</LoaderContainer>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default BulkImageLoader;

// <AnimatePresence>
//   {loading && (
//     <LoaderContainer
//       as={motion.div}
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <CounterContainer>
//         <LoadingText>LOADING...</LoadingText>
//         <CountdownText>
//           <motion.span>{Math.min(Math.round(progress), 100)}</motion.span>
//           <span>%</span>
//         </CountdownText>
//       </CounterContainer>

//       <CircularSVG>
//         <motion.svg
//           width="314"
//           height="314"
//           viewBox="0 0 314 314"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 720 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z" fill="#85aab6" />
// 						<motion.path
// 							initial={{ rotate: 0 }}
// 							animate={{ rotate: 60 }}
// 							transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
// 							fill-rule="evenodd"
// 							clip-rule="evenodd"
// 							d="M147.046 36.5809C150.231 36.3283 153.451 36.1997 156.699 36.1997C159.948 36.1997 163.167 36.3283 166.352 36.5809L165.72 44.5559C162.745 44.32 159.737 44.1997 156.699 44.1997C153.662 44.1997 150.654 44.32 147.678 44.5559L147.046 36.5809ZM120.556 41.7153C126.636 39.8059 132.924 38.3655 139.375 37.4363L140.516 45.3546C134.493 46.2219 128.626 47.5662 122.953 49.3478L120.556 41.7153ZM174.023 37.4363C180.475 38.3655 186.762 39.8059 192.843 41.7153L190.446 49.3478C184.773 47.5662 178.905 46.2219 172.883 45.3546L174.023 37.4363ZM95.8792 52.653C101.407 49.415 107.217 46.6045 113.262 44.2673L116.147 51.7291C110.506 53.91 105.083 56.5331 99.9227 59.5559L95.8792 52.653ZM200.136 44.2673C206.182 46.6045 211.991 49.415 217.519 52.6531L213.476 59.556C208.315 56.5331 202.893 53.9101 197.251 51.7291L200.136 44.2673ZM74.2661 68.8071C78.9555 64.4072 83.9975 60.3782 89.3455 56.7669L93.8225 63.3968C88.8288 66.7689 84.12 70.5316 79.7399 74.6412L74.2661 68.8071ZM224.053 56.7669C229.401 60.3782 234.443 64.4073 239.132 68.8071L233.659 74.6412C229.279 70.5317 224.57 66.769 219.576 63.3969L224.053 56.7669ZM56.7664 89.3459C60.3777 83.998 64.4068 78.956 68.8066 74.2665L74.6407 79.7404C70.5312 84.1204 66.7685 88.8293 63.3964 93.823L56.7664 89.3459ZM244.592 74.2666C248.992 78.956 253.021 83.998 256.632 89.346L250.002 93.823C246.63 88.8293 242.867 84.1205 238.758 79.7404L244.592 74.2666ZM44.2668 113.263C46.604 107.217 49.4145 101.408 52.6526 95.8797L59.5555 99.9231C56.5326 105.084 53.9096 110.506 51.7286 116.148L44.2668 113.263ZM260.746 95.8797C263.984 101.408 266.794 107.217 269.132 113.263L261.67 116.148C259.489 110.506 256.866 105.084 253.843 99.9232L260.746 95.8797ZM37.4358 139.376C38.365 132.924 39.8054 126.637 41.7148 120.556L49.3473 122.953C47.5657 128.626 46.2214 134.494 45.3541 140.516L37.4358 139.376ZM271.684 120.556C273.593 126.637 275.033 132.924 275.963 139.376L268.044 140.516C267.177 134.494 265.833 128.626 264.051 122.953L271.684 120.556ZM36.1992 156.7C36.1992 153.451 36.3279 150.232 36.5804 147.047L44.5554 147.679C44.3195 150.654 44.1992 153.662 44.1992 156.7C44.1992 159.737 44.3195 162.745 44.5554 165.72L36.5804 166.353C36.3279 163.168 36.1992 159.948 36.1992 156.7ZM276.818 147.047C277.071 150.232 277.199 153.451 277.199 156.7C277.199 159.948 277.071 163.168 276.818 166.353L268.843 165.72C269.079 162.745 269.199 159.737 269.199 156.7C269.199 153.662 269.079 150.654 268.843 147.679L276.818 147.047ZM41.7148 192.843C39.8054 186.763 38.365 180.475 37.4358 174.024L45.3541 172.883C46.2214 178.906 47.5657 184.773 49.3473 190.446L41.7148 192.843ZM275.963 174.024C275.033 180.475 273.593 186.763 271.684 192.843L264.051 190.446C265.833 184.773 267.177 178.906 268.044 172.883L275.963 174.024ZM52.6525 217.52C49.4145 211.992 46.604 206.182 44.2668 200.136L51.7286 197.252C53.9096 202.893 56.5326 208.316 59.5555 213.476L52.6525 217.52ZM269.132 200.136C266.794 206.182 263.984 211.992 260.746 217.52L253.843 213.476C256.866 208.316 259.489 202.893 261.67 197.252L269.132 200.136ZM68.8066 239.133C64.4067 234.443 60.3777 229.401 56.7664 224.053L63.3964 219.576C66.7684 224.57 70.5311 229.279 74.6407 233.659L68.8066 239.133ZM256.632 224.053C253.021 229.401 248.992 234.443 244.592 239.133L238.758 233.659C242.867 229.279 246.63 224.57 250.002 219.576L256.632 224.053ZM89.3455 256.633C83.9975 253.021 78.9555 248.992 74.266 244.592L79.7399 238.758C84.1199 242.868 88.8288 246.63 93.8225 250.003L89.3455 256.633ZM239.132 244.592C234.443 248.992 229.401 253.021 224.053 256.633L219.576 250.003C224.57 246.63 229.278 242.868 233.659 238.758L239.132 244.592ZM113.262 269.132C107.217 266.795 101.407 263.984 95.8792 260.746L99.9227 253.843C105.083 256.866 110.506 259.489 116.147 261.67L113.262 269.132ZM217.519 260.746C211.991 263.984 206.182 266.795 200.136 269.132L197.251 261.67C202.893 259.489 208.315 256.866 213.476 253.843L217.519 260.746ZM139.375 275.963C132.924 275.034 126.636 273.594 120.556 271.684L122.953 264.052C128.626 265.833 134.493 267.177 140.516 268.045L139.375 275.963ZM192.843 271.684C186.762 273.594 180.475 275.034 174.023 275.963L172.883 268.045C178.905 267.177 184.773 265.833 190.446 264.052L192.843 271.684ZM156.699 277.2C153.451 277.2 150.231 277.071 147.046 276.818L147.678 268.844C150.654 269.079 153.662 269.2 156.699 269.2C159.737 269.2 162.745 269.079 165.72 268.844L166.352 276.818C163.167 277.071 159.948 277.2 156.699 277.2Z"
// 							fill="#85aab6"
// 						/>
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 49.2993C97.3844 49.2993 49.2998 97.3839 49.2998 156.699C49.2998 216.015 97.3844 264.099 156.7 264.099C216.015 264.099 264.1 216.015 264.1 156.699C264.1 97.3839 216.015 49.2993 156.7 49.2993ZM47.2998 156.699C47.2998 96.2794 96.2799 47.2993 156.7 47.2993C217.12 47.2993 266.1 96.2794 266.1 156.699C266.1 217.119 217.12 266.099 156.7 266.099C96.2799 266.099 47.2998 217.119 47.2998 156.699Z" fill="#ff8d53" />
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 67C107.114 67 67 107.114 67 156.7C67 206.286 107.114 246.4 156.7 246.4C206.282 246.4 246.4 206.19 246.4 156.7H258.4C258.4 212.81 212.918 258.4 156.7 258.4C100.486 258.4 55 212.914 55 156.7C55 100.486 100.486 55 156.7 55C184.75 55 210.266 66.3749 228.655 84.8696L220.145 93.3304C203.934 77.0251 181.45 67 156.7 67Z" fill="#85aab6" />
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 * 4 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M171.65 71.8689C124.843 63.5629 80.1766 94.9308 71.8686 141.749L71.8685 141.749C67.3737 167.057 74.5041 191.781 89.3643 210.454L86.2344 212.945C70.6946 193.418 63.225 167.542 67.9301 141.05L69.8993 141.4L67.9301 141.05C76.6221 92.0685 123.355 59.2364 172.349 67.9304C221.33 76.6224 254.163 123.356 245.469 172.349C236.777 221.331 190.043 254.163 141.05 245.469L141.749 241.53C188.555 249.836 233.222 218.469 241.53 171.65C249.836 124.844 218.468 80.177 171.65 71.8689Z" fill="#f0fcff" />
// 						<motion.path
// 							initial={{ rotate: 0 }}
// 							animate={{ rotate: -160 }}
// 							transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
// 							fill-rule="evenodd"
// 							clip-rule="evenodd"
// 							d="M155.715 75.5054C156.042 75.5015 156.371 75.4995 156.699 75.4995C157.028 75.4995 157.356 75.5015 157.683 75.5054L157.648 78.5051C157.332 78.5014 157.016 78.4995 156.699 78.4995C156.382 78.4995 156.066 78.5014 155.75 78.5051L155.715 75.5054ZM145.934 76.2069C146.582 76.1212 147.231 76.0431 147.883 75.9727L148.205 78.9553C147.577 79.0231 146.952 79.0984 146.328 79.1809L145.934 76.2069ZM165.515 75.9727C166.167 76.0431 166.816 76.1212 167.464 76.2069L167.07 79.1809C166.446 79.0984 165.821 79.0231 165.193 78.9553L165.515 75.9727ZM136.312 78.0806C136.942 77.9175 137.576 77.7618 138.213 77.6135L138.893 80.5354C138.28 80.6781 137.67 80.828 137.063 80.9851L136.312 78.0806ZM175.185 77.6135C175.822 77.7618 176.456 77.9175 177.087 78.0806L176.335 80.9851C175.728 80.828 175.118 80.6781 174.505 80.5354L175.185 77.6135ZM126.981 81.1102C127.589 80.8709 128.201 80.6387 128.816 80.4138L129.846 83.2314C129.254 83.448 128.665 83.6715 128.079 83.9019L126.981 81.1102ZM184.582 80.4138C185.197 80.6387 185.809 80.8709 186.417 81.1102L185.319 83.9019C184.733 83.6715 184.144 83.448 183.552 83.2314L184.582 80.4138ZM118.091 85.2477C118.665 84.937 119.243 84.633 119.825 84.3358L121.189 87.0077C120.629 87.2939 120.072 87.5866 119.519 87.8859L118.091 85.2477ZM193.573 84.3358C194.155 84.633 194.733 84.937 195.307 85.2477L193.879 87.8859C193.326 87.5866 192.769 87.2939 192.209 87.0077L193.573 84.3358ZM202.02 89.3145C202.563 89.68 203.1 90.0518 203.633 90.4299L201.897 92.8767C201.384 92.5125 200.866 92.1543 200.344 91.8023L202.02 89.3145ZM109.765 90.43C110.298 90.0518 110.835 89.68 111.378 89.3145L113.054 91.8023C112.532 92.1544 112.014 92.5125 111.501 92.8767L109.765 90.43ZM102.123 96.5743C102.607 96.1351 103.096 95.7017 103.59 95.2741L105.553 97.5426C105.077 97.9545 104.606 98.372 104.14 98.7951L102.123 96.5743ZM209.808 95.2741C210.302 95.7017 210.791 96.1351 211.275 96.5743L209.258 98.7951C208.792 98.372 208.321 97.9545 207.845 97.5426L209.808 95.2741ZM216.824 102.124C217.263 102.607 217.697 103.096 218.124 103.591L215.856 105.554C215.444 105.078 215.026 104.607 214.603 104.141L216.824 102.124ZM95.2736 103.591C95.7012 103.096 96.1346 102.607 96.5739 102.124L98.7946 104.141C98.3715 104.607 97.954 105.078 97.5421 105.554L95.2736 103.591ZM222.969 109.765C223.347 110.298 223.719 110.836 224.084 111.378L221.596 113.055C221.244 112.532 220.886 112.014 220.522 111.501L222.969 109.765ZM89.314 111.378C89.6795 110.836 90.0513 110.298 90.4295 109.765L92.8762 111.501C92.512 112.014 92.1539 112.532 91.8019 113.055L89.314 111.378ZM84.3353 119.826C84.6325 119.244 84.9365 118.665 85.2473 118.092L87.8854 119.52C87.5861 120.073 87.2934 120.629 87.0072 121.19L84.3353 119.826ZM228.151 118.092C228.462 118.665 228.766 119.244 229.063 119.826L226.391 121.19C226.105 120.629 225.812 120.073 225.513 119.52L228.151 118.092ZM80.4133 128.817C80.6382 128.201 80.8704 127.59 81.1097 126.981L83.9014 128.08C83.671 128.665 83.4475 129.254 83.2309 129.847L80.4133 128.817ZM232.288 126.981C232.528 127.59 232.76 128.201 232.985 128.817L230.167 129.847C229.951 129.254 229.727 128.665 229.497 128.08L232.288 126.981ZM77.6131 138.213C77.7613 137.577 77.917 136.943 78.0801 136.312L80.9846 137.063C80.8275 137.67 80.6776 138.281 80.5349 138.893L77.6131 138.213ZM235.318 136.312C235.481 136.943 235.637 137.577 235.785 138.213L232.863 138.893C232.72 138.281 232.57 137.67 232.413 137.063L235.318 136.312ZM75.9722 147.884C76.0426 147.232 76.1207 146.582 76.2064 145.935L79.1805 146.329C79.0979 146.952 79.0226 147.578 78.9548 148.206L75.9722 147.884ZM237.192 145.935C237.277 146.582 237.355 147.232 237.426 147.884L234.443 148.206C234.375 147.578 234.3 146.952 234.218 146.329L237.192 145.935ZM75.499 156.7C75.499 156.371 75.501 156.043 75.5049 155.715L78.5047 155.751C78.5009 156.067 78.499 156.383 78.499 156.7C78.499 157.016 78.5009 157.332 78.5047 157.648L75.5049 157.684C75.501 157.356 75.499 157.028 75.499 156.7ZM237.893 155.715C237.897 156.043 237.899 156.371 237.899 156.7C237.899 157.028 237.897 157.356 237.893 157.684L234.893 157.648C234.897 157.332 234.899 157.016 234.899 156.7C234.899 156.383 234.897 156.067 234.893 155.751L237.893 155.715ZM76.2064 167.464C76.1207 166.817 76.0426 166.167 75.9722 165.515L78.9548 165.193C79.0226 165.821 79.0979 166.447 79.1805 167.07L76.2064 167.464ZM237.426 165.515C237.355 166.167 237.277 166.817 237.192 167.464L234.218 167.07C234.3 166.447 234.375 165.821 234.443 165.193L237.426 165.515ZM78.0801 177.087C77.917 176.456 77.7613 175.823 77.6131 175.186L80.5349 174.506C80.6776 175.118 80.8275 175.729 80.9846 176.336L78.0801 177.087ZM235.785 175.186C235.637 175.823 235.481 176.456 235.318 177.087L232.413 176.336C232.57 175.729 232.72 175.118 232.863 174.506L235.785 175.186ZM81.1097 186.418C80.8704 185.809 80.6382 185.198 80.4133 184.582L83.2309 183.552C83.4475 184.145 83.671 184.734 83.9014 185.319L81.1097 186.418ZM232.985 184.582C232.76 185.198 232.528 185.809 232.288 186.418L229.497 185.319C229.727 184.734 229.951 184.145 230.167 183.552L232.985 184.582ZM85.2473 195.307C84.9365 194.734 84.6325 194.156 84.3353 193.573L87.0072 192.209C87.2934 192.77 87.5861 193.326 87.8854 193.879L85.2473 195.307ZM229.063 193.573C228.766 194.156 228.462 194.734 228.151 195.307L225.513 193.879C225.812 193.326 226.105 192.77 226.391 192.209L229.063 193.573ZM224.084 202.021C223.719 202.563 223.347 203.101 222.969 203.634L220.522 201.898C220.886 201.385 221.244 200.867 221.596 200.344L224.084 202.021ZM90.4295 203.634C90.0513 203.101 89.6795 202.563 89.314 202.021L91.8019 200.344C92.1539 200.867 92.512 201.385 92.8762 201.898L90.4295 203.634ZM96.5739 211.275C96.1346 210.792 95.7012 210.303 95.2736 209.809L97.5421 207.845C97.954 208.321 98.3715 208.792 98.7946 209.258L96.5739 211.275ZM218.124 209.809C217.697 210.303 217.263 210.792 216.824 211.275L214.603 209.258C215.026 208.792 215.444 208.321 215.856 207.845L218.124 209.809ZM103.59 218.125C103.096 217.697 102.607 217.264 102.123 216.825L104.14 214.604C104.606 215.027 105.077 215.445 105.553 215.856L103.59 218.125ZM211.275 216.825C210.791 217.264 210.302 217.697 209.808 218.125L207.845 215.856C208.321 215.445 208.792 215.027 209.258 214.604L211.275 216.825ZM111.378 224.085C110.835 223.719 110.298 223.347 109.765 222.969L111.501 220.522C112.014 220.887 112.532 221.245 113.054 221.597L111.378 224.085ZM203.633 222.969C203.1 223.347 202.563 223.719 202.02 224.085L200.344 221.597C200.866 221.245 201.384 220.887 201.897 220.522L203.633 222.969ZM119.825 229.063C119.243 228.766 118.665 228.462 118.091 228.151L119.519 225.513C120.072 225.812 120.629 226.105 121.189 226.391L119.825 229.063ZM195.307 228.151C194.733 228.462 194.155 228.766 193.573 229.063L192.209 226.391C192.769 226.105 193.326 225.812 193.879 225.513L195.307 228.151ZM128.816 232.985C128.201 232.76 127.589 232.528 126.981 232.289L128.079 229.497C128.665 229.728 129.254 229.951 129.846 230.168L128.816 232.985ZM186.417 232.289C185.809 232.528 185.197 232.76 184.582 232.985L183.552 230.168C184.144 229.951 184.733 229.728 185.319 229.497L186.417 232.289ZM138.213 235.785C137.576 235.637 136.942 235.482 136.312 235.318L137.063 232.414C137.67 232.571 138.28 232.721 138.893 232.864L138.213 235.785ZM177.087 235.318C176.456 235.482 175.822 235.637 175.185 235.785L174.505 232.864C175.118 232.721 175.728 232.571 176.335 232.414L177.087 235.318ZM147.883 237.426C147.231 237.356 146.582 237.278 145.934 237.192L146.328 234.218C146.952 234.301 147.577 234.376 148.205 234.444L147.883 237.426ZM167.464 237.192C166.816 237.278 166.167 237.356 165.515 237.426L165.193 234.444C165.821 234.376 166.446 234.301 167.07 234.218L167.464 237.192ZM156.699 237.9C156.371 237.9 156.042 237.898 155.715 237.894L155.75 234.894C156.066 234.898 156.382 234.9 156.699 234.9C157.016 234.9 157.332 234.898 157.648 234.894L157.683 237.894C157.356 237.898 157.028 237.9 156.699 237.9Z"
// 							fill="#A7A9AC"
// 						/>
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z" fill="#ff6a00" />
// 						<motion.path initial={{ rotate: 0 }} animate={{ rotate: -260 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M166.383 101.654C136.009 96.339 106.97 116.654 101.655 147.014C98.807 163.443 103.365 179.476 113.039 191.521L108.361 195.278C97.6353 181.924 92.593 164.157 95.7439 145.987L95.7447 145.982C101.631 112.344 133.791 89.8598 167.417 95.7442C201.055 101.631 223.539 133.791 217.655 167.416C211.768 201.055 179.608 223.539 145.983 217.654L147.017 211.744C177.391 217.06 206.431 196.744 211.745 166.382C217.06 136.008 196.744 106.968 166.383 101.654Z" fill="#bad2d9" />
// 					</motion.svg>
// 				</CircularSVG>
// 			</LoaderContainer>
// 		)}
// 	</AnimatePresence>

```

# src/components/CircularLoader/CircularLoader.tsx

```tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
// import AudioPlayer from "../Sound/AudioPlayer";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import whaleSound from "@/assets/sounds/whale-call-2.wav";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 314px;
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid yellowgreen;
`;

const LoaderContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	// border: 1px solid red;
`;

const CircularSVG = styled.div`
	position: absolute;
	// background: rgba(255, 255, 255, 0.15);
	border-radius: 100%;
	z-index: 100;
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid cyan;
`;

const Image = styled.img`
	max-width: 100%;
	width: 100%;
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
	// border: 1px solid blue;
`;

const LoadingText = styled.p`
	font-size: 0.6rem;
	margin: 0;
	color: #3f1f0b;
`;

const CountdownText = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 2rem;
	margin: 0;
	color: #3f1f0b;
`;

interface ImageLoaderProps {
	src: string;
	alt: string;
	className?: string;
}

const CircularLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
	const [loading, setLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const easing = [0.35, 0.27, 0.3, 0.83];
	const animationDuration = 3;

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", src, true);
		xhr.responseType = "arraybuffer";

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
			console.error("Error loading image");
			setLoading(false);
		};

		xhr.send();

		return () => {
			xhr.abort();
		};
	}, [src]);

	return (
		<Container>
			<Image src={src} alt={alt} className={`${className} ${!loading ? "loaded" : ""}`} />
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
							<motion.svg width="314" height="314" viewBox="0 0 314 314" fill="none" xmlns="http://www.w3.org/2000/svg">
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: 720 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.699 33.1997C88.4921 33.1997 33.1992 88.4925 33.1992 156.7C33.1992 224.907 88.4921 280.2 156.699 280.2C224.906 280.2 280.199 224.907 280.199 156.7C280.199 88.4925 224.906 33.1997 156.699 33.1997ZM31.1992 156.7C31.1992 87.388 87.3875 31.1997 156.699 31.1997C226.011 31.1997 282.199 87.388 282.199 156.7C282.199 226.011 226.011 282.2 156.699 282.2C87.3875 282.2 31.1992 226.011 31.1992 156.7Z" fill="#85aab6" />
								<motion.path
									initial={{ rotate: 0 }}
									animate={{ rotate: 60 }}
									transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M147.046 36.5809C150.231 36.3283 153.451 36.1997 156.699 36.1997C159.948 36.1997 163.167 36.3283 166.352 36.5809L165.72 44.5559C162.745 44.32 159.737 44.1997 156.699 44.1997C153.662 44.1997 150.654 44.32 147.678 44.5559L147.046 36.5809ZM120.556 41.7153C126.636 39.8059 132.924 38.3655 139.375 37.4363L140.516 45.3546C134.493 46.2219 128.626 47.5662 122.953 49.3478L120.556 41.7153ZM174.023 37.4363C180.475 38.3655 186.762 39.8059 192.843 41.7153L190.446 49.3478C184.773 47.5662 178.905 46.2219 172.883 45.3546L174.023 37.4363ZM95.8792 52.653C101.407 49.415 107.217 46.6045 113.262 44.2673L116.147 51.7291C110.506 53.91 105.083 56.5331 99.9227 59.5559L95.8792 52.653ZM200.136 44.2673C206.182 46.6045 211.991 49.415 217.519 52.6531L213.476 59.556C208.315 56.5331 202.893 53.9101 197.251 51.7291L200.136 44.2673ZM74.2661 68.8071C78.9555 64.4072 83.9975 60.3782 89.3455 56.7669L93.8225 63.3968C88.8288 66.7689 84.12 70.5316 79.7399 74.6412L74.2661 68.8071ZM224.053 56.7669C229.401 60.3782 234.443 64.4073 239.132 68.8071L233.659 74.6412C229.279 70.5317 224.57 66.769 219.576 63.3969L224.053 56.7669ZM56.7664 89.3459C60.3777 83.998 64.4068 78.956 68.8066 74.2665L74.6407 79.7404C70.5312 84.1204 66.7685 88.8293 63.3964 93.823L56.7664 89.3459ZM244.592 74.2666C248.992 78.956 253.021 83.998 256.632 89.346L250.002 93.823C246.63 88.8293 242.867 84.1205 238.758 79.7404L244.592 74.2666ZM44.2668 113.263C46.604 107.217 49.4145 101.408 52.6526 95.8797L59.5555 99.9231C56.5326 105.084 53.9096 110.506 51.7286 116.148L44.2668 113.263ZM260.746 95.8797C263.984 101.408 266.794 107.217 269.132 113.263L261.67 116.148C259.489 110.506 256.866 105.084 253.843 99.9232L260.746 95.8797ZM37.4358 139.376C38.365 132.924 39.8054 126.637 41.7148 120.556L49.3473 122.953C47.5657 128.626 46.2214 134.494 45.3541 140.516L37.4358 139.376ZM271.684 120.556C273.593 126.637 275.033 132.924 275.963 139.376L268.044 140.516C267.177 134.494 265.833 128.626 264.051 122.953L271.684 120.556ZM36.1992 156.7C36.1992 153.451 36.3279 150.232 36.5804 147.047L44.5554 147.679C44.3195 150.654 44.1992 153.662 44.1992 156.7C44.1992 159.737 44.3195 162.745 44.5554 165.72L36.5804 166.353C36.3279 163.168 36.1992 159.948 36.1992 156.7ZM276.818 147.047C277.071 150.232 277.199 153.451 277.199 156.7C277.199 159.948 277.071 163.168 276.818 166.353L268.843 165.72C269.079 162.745 269.199 159.737 269.199 156.7C269.199 153.662 269.079 150.654 268.843 147.679L276.818 147.047ZM41.7148 192.843C39.8054 186.763 38.365 180.475 37.4358 174.024L45.3541 172.883C46.2214 178.906 47.5657 184.773 49.3473 190.446L41.7148 192.843ZM275.963 174.024C275.033 180.475 273.593 186.763 271.684 192.843L264.051 190.446C265.833 184.773 267.177 178.906 268.044 172.883L275.963 174.024ZM52.6525 217.52C49.4145 211.992 46.604 206.182 44.2668 200.136L51.7286 197.252C53.9096 202.893 56.5326 208.316 59.5555 213.476L52.6525 217.52ZM269.132 200.136C266.794 206.182 263.984 211.992 260.746 217.52L253.843 213.476C256.866 208.316 259.489 202.893 261.67 197.252L269.132 200.136ZM68.8066 239.133C64.4067 234.443 60.3777 229.401 56.7664 224.053L63.3964 219.576C66.7684 224.57 70.5311 229.279 74.6407 233.659L68.8066 239.133ZM256.632 224.053C253.021 229.401 248.992 234.443 244.592 239.133L238.758 233.659C242.867 229.279 246.63 224.57 250.002 219.576L256.632 224.053ZM89.3455 256.633C83.9975 253.021 78.9555 248.992 74.266 244.592L79.7399 238.758C84.1199 242.868 88.8288 246.63 93.8225 250.003L89.3455 256.633ZM239.132 244.592C234.443 248.992 229.401 253.021 224.053 256.633L219.576 250.003C224.57 246.63 229.278 242.868 233.659 238.758L239.132 244.592ZM113.262 269.132C107.217 266.795 101.407 263.984 95.8792 260.746L99.9227 253.843C105.083 256.866 110.506 259.489 116.147 261.67L113.262 269.132ZM217.519 260.746C211.991 263.984 206.182 266.795 200.136 269.132L197.251 261.67C202.893 259.489 208.315 256.866 213.476 253.843L217.519 260.746ZM139.375 275.963C132.924 275.034 126.636 273.594 120.556 271.684L122.953 264.052C128.626 265.833 134.493 267.177 140.516 268.045L139.375 275.963ZM192.843 271.684C186.762 273.594 180.475 275.034 174.023 275.963L172.883 268.045C178.905 267.177 184.773 265.833 190.446 264.052L192.843 271.684ZM156.699 277.2C153.451 277.2 150.231 277.071 147.046 276.818L147.678 268.844C150.654 269.079 153.662 269.2 156.699 269.2C159.737 269.2 162.745 269.079 165.72 268.844L166.352 276.818C163.167 277.071 159.948 277.2 156.699 277.2Z"
									fill="#85aab6"
								/>
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 49.2993C97.3844 49.2993 49.2998 97.3839 49.2998 156.699C49.2998 216.015 97.3844 264.099 156.7 264.099C216.015 264.099 264.1 216.015 264.1 156.699C264.1 97.3839 216.015 49.2993 156.7 49.2993ZM47.2998 156.699C47.2998 96.2794 96.2799 47.2993 156.7 47.2993C217.12 47.2993 266.1 96.2794 266.1 156.699C266.1 217.119 217.12 266.099 156.7 266.099C96.2799 266.099 47.2998 217.119 47.2998 156.699Z" fill="#ff8d53" />
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 67C107.114 67 67 107.114 67 156.7C67 206.286 107.114 246.4 156.7 246.4C206.282 246.4 246.4 206.19 246.4 156.7H258.4C258.4 212.81 212.918 258.4 156.7 258.4C100.486 258.4 55 212.914 55 156.7C55 100.486 100.486 55 156.7 55C184.75 55 210.266 66.3749 228.655 84.8696L220.145 93.3304C203.934 77.0251 181.45 67 156.7 67Z" fill="#85aab6" />
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 * 4 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M171.65 71.8689C124.843 63.5629 80.1766 94.9308 71.8686 141.749L71.8685 141.749C67.3737 167.057 74.5041 191.781 89.3643 210.454L86.2344 212.945C70.6946 193.418 63.225 167.542 67.9301 141.05L69.8993 141.4L67.9301 141.05C76.6221 92.0685 123.355 59.2364 172.349 67.9304C221.33 76.6224 254.163 123.356 245.469 172.349C236.777 221.331 190.043 254.163 141.05 245.469L141.749 241.53C188.555 249.836 233.222 218.469 241.53 171.65C249.836 124.844 218.468 80.177 171.65 71.8689Z" fill="#f0fcff" />
								<motion.path
									initial={{ rotate: 0 }}
									animate={{ rotate: -160 }}
									transition={{ duration: animationDuration, ease: easing, repeat: Infinity }}
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M155.715 75.5054C156.042 75.5015 156.371 75.4995 156.699 75.4995C157.028 75.4995 157.356 75.5015 157.683 75.5054L157.648 78.5051C157.332 78.5014 157.016 78.4995 156.699 78.4995C156.382 78.4995 156.066 78.5014 155.75 78.5051L155.715 75.5054ZM145.934 76.2069C146.582 76.1212 147.231 76.0431 147.883 75.9727L148.205 78.9553C147.577 79.0231 146.952 79.0984 146.328 79.1809L145.934 76.2069ZM165.515 75.9727C166.167 76.0431 166.816 76.1212 167.464 76.2069L167.07 79.1809C166.446 79.0984 165.821 79.0231 165.193 78.9553L165.515 75.9727ZM136.312 78.0806C136.942 77.9175 137.576 77.7618 138.213 77.6135L138.893 80.5354C138.28 80.6781 137.67 80.828 137.063 80.9851L136.312 78.0806ZM175.185 77.6135C175.822 77.7618 176.456 77.9175 177.087 78.0806L176.335 80.9851C175.728 80.828 175.118 80.6781 174.505 80.5354L175.185 77.6135ZM126.981 81.1102C127.589 80.8709 128.201 80.6387 128.816 80.4138L129.846 83.2314C129.254 83.448 128.665 83.6715 128.079 83.9019L126.981 81.1102ZM184.582 80.4138C185.197 80.6387 185.809 80.8709 186.417 81.1102L185.319 83.9019C184.733 83.6715 184.144 83.448 183.552 83.2314L184.582 80.4138ZM118.091 85.2477C118.665 84.937 119.243 84.633 119.825 84.3358L121.189 87.0077C120.629 87.2939 120.072 87.5866 119.519 87.8859L118.091 85.2477ZM193.573 84.3358C194.155 84.633 194.733 84.937 195.307 85.2477L193.879 87.8859C193.326 87.5866 192.769 87.2939 192.209 87.0077L193.573 84.3358ZM202.02 89.3145C202.563 89.68 203.1 90.0518 203.633 90.4299L201.897 92.8767C201.384 92.5125 200.866 92.1543 200.344 91.8023L202.02 89.3145ZM109.765 90.43C110.298 90.0518 110.835 89.68 111.378 89.3145L113.054 91.8023C112.532 92.1544 112.014 92.5125 111.501 92.8767L109.765 90.43ZM102.123 96.5743C102.607 96.1351 103.096 95.7017 103.59 95.2741L105.553 97.5426C105.077 97.9545 104.606 98.372 104.14 98.7951L102.123 96.5743ZM209.808 95.2741C210.302 95.7017 210.791 96.1351 211.275 96.5743L209.258 98.7951C208.792 98.372 208.321 97.9545 207.845 97.5426L209.808 95.2741ZM216.824 102.124C217.263 102.607 217.697 103.096 218.124 103.591L215.856 105.554C215.444 105.078 215.026 104.607 214.603 104.141L216.824 102.124ZM95.2736 103.591C95.7012 103.096 96.1346 102.607 96.5739 102.124L98.7946 104.141C98.3715 104.607 97.954 105.078 97.5421 105.554L95.2736 103.591ZM222.969 109.765C223.347 110.298 223.719 110.836 224.084 111.378L221.596 113.055C221.244 112.532 220.886 112.014 220.522 111.501L222.969 109.765ZM89.314 111.378C89.6795 110.836 90.0513 110.298 90.4295 109.765L92.8762 111.501C92.512 112.014 92.1539 112.532 91.8019 113.055L89.314 111.378ZM84.3353 119.826C84.6325 119.244 84.9365 118.665 85.2473 118.092L87.8854 119.52C87.5861 120.073 87.2934 120.629 87.0072 121.19L84.3353 119.826ZM228.151 118.092C228.462 118.665 228.766 119.244 229.063 119.826L226.391 121.19C226.105 120.629 225.812 120.073 225.513 119.52L228.151 118.092ZM80.4133 128.817C80.6382 128.201 80.8704 127.59 81.1097 126.981L83.9014 128.08C83.671 128.665 83.4475 129.254 83.2309 129.847L80.4133 128.817ZM232.288 126.981C232.528 127.59 232.76 128.201 232.985 128.817L230.167 129.847C229.951 129.254 229.727 128.665 229.497 128.08L232.288 126.981ZM77.6131 138.213C77.7613 137.577 77.917 136.943 78.0801 136.312L80.9846 137.063C80.8275 137.67 80.6776 138.281 80.5349 138.893L77.6131 138.213ZM235.318 136.312C235.481 136.943 235.637 137.577 235.785 138.213L232.863 138.893C232.72 138.281 232.57 137.67 232.413 137.063L235.318 136.312ZM75.9722 147.884C76.0426 147.232 76.1207 146.582 76.2064 145.935L79.1805 146.329C79.0979 146.952 79.0226 147.578 78.9548 148.206L75.9722 147.884ZM237.192 145.935C237.277 146.582 237.355 147.232 237.426 147.884L234.443 148.206C234.375 147.578 234.3 146.952 234.218 146.329L237.192 145.935ZM75.499 156.7C75.499 156.371 75.501 156.043 75.5049 155.715L78.5047 155.751C78.5009 156.067 78.499 156.383 78.499 156.7C78.499 157.016 78.5009 157.332 78.5047 157.648L75.5049 157.684C75.501 157.356 75.499 157.028 75.499 156.7ZM237.893 155.715C237.897 156.043 237.899 156.371 237.899 156.7C237.899 157.028 237.897 157.356 237.893 157.684L234.893 157.648C234.897 157.332 234.899 157.016 234.899 156.7C234.899 156.383 234.897 156.067 234.893 155.751L237.893 155.715ZM76.2064 167.464C76.1207 166.817 76.0426 166.167 75.9722 165.515L78.9548 165.193C79.0226 165.821 79.0979 166.447 79.1805 167.07L76.2064 167.464ZM237.426 165.515C237.355 166.167 237.277 166.817 237.192 167.464L234.218 167.07C234.3 166.447 234.375 165.821 234.443 165.193L237.426 165.515ZM78.0801 177.087C77.917 176.456 77.7613 175.823 77.6131 175.186L80.5349 174.506C80.6776 175.118 80.8275 175.729 80.9846 176.336L78.0801 177.087ZM235.785 175.186C235.637 175.823 235.481 176.456 235.318 177.087L232.413 176.336C232.57 175.729 232.72 175.118 232.863 174.506L235.785 175.186ZM81.1097 186.418C80.8704 185.809 80.6382 185.198 80.4133 184.582L83.2309 183.552C83.4475 184.145 83.671 184.734 83.9014 185.319L81.1097 186.418ZM232.985 184.582C232.76 185.198 232.528 185.809 232.288 186.418L229.497 185.319C229.727 184.734 229.951 184.145 230.167 183.552L232.985 184.582ZM85.2473 195.307C84.9365 194.734 84.6325 194.156 84.3353 193.573L87.0072 192.209C87.2934 192.77 87.5861 193.326 87.8854 193.879L85.2473 195.307ZM229.063 193.573C228.766 194.156 228.462 194.734 228.151 195.307L225.513 193.879C225.812 193.326 226.105 192.77 226.391 192.209L229.063 193.573ZM224.084 202.021C223.719 202.563 223.347 203.101 222.969 203.634L220.522 201.898C220.886 201.385 221.244 200.867 221.596 200.344L224.084 202.021ZM90.4295 203.634C90.0513 203.101 89.6795 202.563 89.314 202.021L91.8019 200.344C92.1539 200.867 92.512 201.385 92.8762 201.898L90.4295 203.634ZM96.5739 211.275C96.1346 210.792 95.7012 210.303 95.2736 209.809L97.5421 207.845C97.954 208.321 98.3715 208.792 98.7946 209.258L96.5739 211.275ZM218.124 209.809C217.697 210.303 217.263 210.792 216.824 211.275L214.603 209.258C215.026 208.792 215.444 208.321 215.856 207.845L218.124 209.809ZM103.59 218.125C103.096 217.697 102.607 217.264 102.123 216.825L104.14 214.604C104.606 215.027 105.077 215.445 105.553 215.856L103.59 218.125ZM211.275 216.825C210.791 217.264 210.302 217.697 209.808 218.125L207.845 215.856C208.321 215.445 208.792 215.027 209.258 214.604L211.275 216.825ZM111.378 224.085C110.835 223.719 110.298 223.347 109.765 222.969L111.501 220.522C112.014 220.887 112.532 221.245 113.054 221.597L111.378 224.085ZM203.633 222.969C203.1 223.347 202.563 223.719 202.02 224.085L200.344 221.597C200.866 221.245 201.384 220.887 201.897 220.522L203.633 222.969ZM119.825 229.063C119.243 228.766 118.665 228.462 118.091 228.151L119.519 225.513C120.072 225.812 120.629 226.105 121.189 226.391L119.825 229.063ZM195.307 228.151C194.733 228.462 194.155 228.766 193.573 229.063L192.209 226.391C192.769 226.105 193.326 225.812 193.879 225.513L195.307 228.151ZM128.816 232.985C128.201 232.76 127.589 232.528 126.981 232.289L128.079 229.497C128.665 229.728 129.254 229.951 129.846 230.168L128.816 232.985ZM186.417 232.289C185.809 232.528 185.197 232.76 184.582 232.985L183.552 230.168C184.144 229.951 184.733 229.728 185.319 229.497L186.417 232.289ZM138.213 235.785C137.576 235.637 136.942 235.482 136.312 235.318L137.063 232.414C137.67 232.571 138.28 232.721 138.893 232.864L138.213 235.785ZM177.087 235.318C176.456 235.482 175.822 235.637 175.185 235.785L174.505 232.864C175.118 232.721 175.728 232.571 176.335 232.414L177.087 235.318ZM147.883 237.426C147.231 237.356 146.582 237.278 145.934 237.192L146.328 234.218C146.952 234.301 147.577 234.376 148.205 234.444L147.883 237.426ZM167.464 237.192C166.816 237.278 166.167 237.356 165.515 237.426L165.193 234.444C165.821 234.376 166.446 234.301 167.07 234.218L167.464 237.192ZM156.699 237.9C156.371 237.9 156.042 237.898 155.715 237.894L155.75 234.894C156.066 234.898 156.382 234.9 156.699 234.9C157.016 234.9 157.332 234.898 157.648 234.894L157.683 237.894C157.356 237.898 157.028 237.9 156.699 237.9Z"
									fill="#A7A9AC"
								/>
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M156.7 95.2993C138.384 95.2993 121.907 103.312 110.707 116.059L101.692 108.139C115.092 92.8871 134.816 83.2993 156.7 83.2993C197.214 83.2993 230.1 116.186 230.1 156.699C230.1 197.213 197.214 230.099 156.7 230.099C116.186 230.099 83.2998 197.213 83.2998 156.699H95.2998C95.2998 190.586 122.814 218.099 156.7 218.099C190.586 218.099 218.1 190.586 218.1 156.699C218.1 122.813 190.586 95.2993 156.7 95.2993Z" fill="#ff6a00" />
								<motion.path initial={{ rotate: 0 }} animate={{ rotate: -260 }} transition={{ duration: animationDuration, ease: easing, repeat: Infinity }} fill-rule="evenodd" clip-rule="evenodd" d="M166.383 101.654C136.009 96.339 106.97 116.654 101.655 147.014C98.807 163.443 103.365 179.476 113.039 191.521L108.361 195.278C97.6353 181.924 92.593 164.157 95.7439 145.987L95.7447 145.982C101.631 112.344 133.791 89.8598 167.417 95.7442C201.055 101.631 223.539 133.791 217.655 167.416C211.768 201.055 179.608 223.539 145.983 217.654L147.017 211.744C177.391 217.06 206.431 196.744 211.745 166.382C217.06 136.008 196.744 106.968 166.383 101.654Z" fill="#bad2d9" />
							</motion.svg>
						</CircularSVG>
					</LoaderContainer>
				)}
			</AnimatePresence>

         {/* Basic usage */}
			{/* <AudioPlayer audioSrc={whaleSound} /> */}

         {/* Advanced usage */}
         {/* <AudioPlayer
            audioSrc={whaleSound}
            autoPlayDelay={1000}
            initialVolume={0.5}
            fadeInDuration={2}
            onPlayStart={() => console.log('Started playing')}
            onPlayEnd={() => console.log('Finished playing')}
            onError={(error) => console.error('Audio error:', error)}
            controls={true}
            className="custom-audio-player"
         /> */}

         <AudioPlayer
            src={whaleSound}
            title="Simple Audio"
            />

         {/* <AudioPlayer
               src={whaleSound}
               title="My Audio Track"
               autoPlay={true}
               loop={false}
               initialVolume={0.8}
               onPlay={() => console.log('Playing')}
               onPause={() => console.log('Paused')}
               onEnded={() => console.log('Ended')}
            /> */}

		</Container>
	);
};

export default CircularLoader;

```

# src/components/ImageLoader/ImageLoader.tsx

```tsx
// src/components/Animations/ImageLoader.tsx | Loading & Audio & Replaced Poem : 11.23.2024•B

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ThemeMode } from "@/styles/theme";
import whaleSound from "@/assets/sounds/whale-call-2.wav";

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
	background-color: ${({ $mode }) => ($mode === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)")};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;

const StyledImage = styled(motion.img)`
	max-width: 100%;
	width: 100%;
	height: 50%;
	display: block;
	object-fit: cover;
	position: relative;
	border-radius: 2rem;
	border: 6px solid yellow;
`;

const PoemOverlay = styled(motion.div)`
	position: absolute;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	padding: 2rem;
	text-align: center;
	pointer-events: none;
`;

const PoemTitle = styled.h2`
	font-size: 4rem;
	margin-bottom: 1rem;
	font-family: "Libre Baskerville", serif;
`;

const PoemText = styled.p`
	font-size: 2rem;
	line-height: 1.6;
	font-family: "Libre Baskerville", serif;
	font-style: italic;
`;

const ContentWrapper = styled(motion.div)`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PlayButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 12px 24px;
	background: rgba(0, 0, 0, 0.7);
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
	z-index: 1000;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: background-color 0.3s ease;

	&:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

interface ImageLoaderProps {
	src: string;
	alt: string;
	mode?: ThemeMode;
	className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, mode = "light", className }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [showPoem, setShowPoem] = useState(false);
	const [startSlideAnimation, setStartSlideAnimation] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);


	// const audioRef = useRef<HTMLAudioElement | null>(null);
	const audioContextRef = useRef<AudioContext | null>(null);
	const sourceRef = useRef<AudioBufferSourceNode | null>(null);
	const gainNodeRef = useRef<GainNode | null>(null);
	const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

	// Initialize WebAudio context
	useEffect(() => {
		const initAudioContext = async () => {
			try {
				const AudioContext = window.AudioContext || window.webkitAudioContext;
				audioContextRef.current = new AudioContext();

				// Fetch and decode audio file
				const response = await fetch(whaleSound);
				const arrayBuffer = await response.arrayBuffer();
				const decodedBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
				setAudioBuffer(decodedBuffer);

				// Create gain node
				gainNodeRef.current = audioContextRef.current.createGain();
				gainNodeRef.current.connect(audioContextRef.current.destination);
				gainNodeRef.current.gain.value = 0;
			} catch (error) {
				console.error("Audio initialization error:", error);
			}
		};

		initAudioContext();

		return () => {
			if (audioContextRef.current) {
				audioContextRef.current.close();
			}
		};
	}, []);

	const playSound = useCallback(
		async (isAutoplay = false) => {
			if (!audioContextRef.current || !audioBuffer || !gainNodeRef.current) return;

			try {
				// Resume context if suspended
				if (audioContextRef.current.state === "suspended") {
					await audioContextRef.current.resume();
				}

				// Stop any currently playing sound
				if (sourceRef.current) {
					sourceRef.current.stop();
					sourceRef.current.disconnect();
				}

				// Create and configure new source
				sourceRef.current = audioContextRef.current.createBufferSource();
				sourceRef.current.buffer = audioBuffer;
				sourceRef.current.connect(gainNodeRef.current);

				// Reset gain and start fade in
				gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
				gainNodeRef.current.gain.linearRampToValueAtTime(0.3, audioContextRef.current.currentTime + 1);

				// Start playback
				sourceRef.current.start();
				setIsPlaying(true);

				// Handle ending
				sourceRef.current.onended = () => {
					setIsPlaying(false);
				};
			} catch (error) {
				console.error("Playback failed:", error);
				setIsPlaying(false);
			}
		},
		[audioBuffer]
	);

	// Initialize animation and try autoplay
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
				const runAnimationSequence = async () => {
					setIsLoading(false);

					await new Promise((resolve) => setTimeout(resolve, 500));
					setShowPoem(true);

					await new Promise((resolve) => setTimeout(resolve, 1000));
					setStartSlideAnimation(true);

					// Attempt to play sound after animation
					await new Promise((resolve) => setTimeout(resolve, 800));

					// Create a temporary button and simulate click
					const tempButton = document.createElement("button");
					tempButton.style.display = "none";
					document.body.appendChild(tempButton);
					tempButton.addEventListener("click", () => {
						playSound(true);
						tempButton.remove();
					});
					tempButton.click();
				};

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
			if (sourceRef.current) {
				sourceRef.current.stop();
			}
		};
	}, [src, playSound]);

	// Handle manual play button click
	const handlePlayClick = () => {
		playSound(false);
	};

	if (hasError) {
		return <div>Error loading image</div>;
	}

	return (
		<Container className={className}>
			<ContentWrapper>
				<StyledImage
					src={src}
					alt={alt}
					initial={{ opacity: 0, y: 0 }}
					animate={{
						opacity: isLoading ? 0 : 1,
						y: startSlideAnimation ? -210 : 0,
					}}
					transition={{
						opacity: { duration: 0.5 },
						y: { duration: 1.2, ease: "easeOut" },
					}}
				/>

				<AnimatePresence>
					{showPoem && (
						<PoemOverlay
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: startSlideAnimation ? 150 : 20,
							}}
							exit={{ opacity: 0, y: -20 }}
							transition={{
								opacity: { duration: 0.8 },
								y: { duration: 1.2, ease: "easeOut" },
							}}
						>
							<PoemTitle>Guiding Song</PoemTitle>
							<PoemText>
								Beneath the waves, a whale does sing,
								<br />
								Of minds that learn and dreams that spring.
								<br />
								Its hums weave tales of AI’s might,
								<br />A guiding song in endless night.
							</PoemText>
						</PoemOverlay>
					)}
				</AnimatePresence>
			</ContentWrapper>

			<PlayButton onClick={handlePlayClick} disabled={isPlaying}>
				{isPlaying ? "🔊 Playing..." : "🔈 Play Whale Sound"}
			</PlayButton>

			{isLoading && (
				<LoaderOverlay $mode={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
					<div>Loading... {progress}%</div>
				</LoaderOverlay>
			)}
		</Container>
	);
};

export default ImageLoader;

```

# src/components/ImageTest.tsx

```tsx
// src/components/ImageTest.tsx
// import React from 'react';
import styled from 'styled-components';
import lightBg from '../assets/gradatedBackground.webp';
import darkBg from '../assets/gradatedBackground-dark.webp';

const TestContainer = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid black;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
`;

const TestImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 5px;
  border: 1px solid black;
`;

const ImageTest = () => {
  return (
    <TestContainer>
      <h3>Test Images:</h3>
      <TestImage src={lightBg} alt="Light background" />
      <TestImage src={darkBg} alt="Dark background" />
      <div>
        <p>Light bg path: {lightBg}</p>
        <p>Dark bg path: {darkBg}</p>
      </div>
    </TestContainer>
  );
};

export default ImageTest;
```

# src/components/index.ts

```ts
// // src/components/index.ts
// export { Navbar } from './Navbar';
// export { Hero } from './HeroX';
// export { Card } from './CardX';
```

# src/components/Navbar/index.ts

```ts
export { default } from './Navbar';
```

# src/components/Navbar/Navbar.styles.ts

```ts
// src/components/Navbar/Navbar.styles.ts
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideVertical = keyframes`
  from { top: -100px}
  to { top: 20px }
`;

export const NavbarContainer = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   height: ${({ theme }) => theme.sizes.navHeight};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 24px;
   background-color: ${({ theme }) => theme.colors.navBackground};
   z-index: 1000;
   box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
   transition: background-color 1s ease;
`;

export const NavigationGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; // This allows the navigation group to take up available space
  gap: 1rem; // Space between elements in the navigation group
`;

export const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
//   margin-left: 1rem; // Space between navigation and controls
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  top: 0;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

   img {
      height: 100px; // Adjust this value based on your needs
      width: auto;
      object-fit: contain;
      position: relative;
      animation: ${slideVertical} .5s ease-in forwards;
   }
`;

export const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in forwards;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;


export const MenuItems = styled.ul`
   display: flex;
   gap: 20px;
   list-style: none;
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   padding: 0;
//   margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
   //  opacity: .75;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navHeight};
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.navBackground};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 999;

  ${MenuItem} {
    text-align: center;
  }
`;

export const ExternalLinkIcon = styled.span`
  display: inline-block;
  margin-left: 0.25rem;
  font-size: 0.875rem;
  vertical-align: middle;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

// Add error message styling
//   background-color: ${({ theme }) => theme.colors.error};
export const ErrorMessage = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;
```

# src/components/Navbar/Navbar.tsx

```tsx
// src/components/Navbar/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import {
  NavbarContainer,
  NavigationGroup,
  ControlsGroup,
  Logo,
  MenuItems,
  MenuItem,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu,
  LogoButton
} from './Navbar.styles';
import { navigationData } from '@/data/mockData';
import { NavigationItem } from '@/types/navigation';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { menuItems: { left: leftMenuItems, right: rightMenuItems }, logo } = navigationData;

  const getWindowFeatures = (isLogo: boolean = false) => {
    if (isLogo) {
      return `
        height=1020,
        width=${window.innerWidth},
        left=${window.screenX},
        top=${window.screenY},
        menubar=no,
        toolbar=no,
        location=yes,
        status=no,
        scrollbars=yes
      `.replace(/\s/g, '');
    }

    // Features for social window
    const width = 1920;
    const height = 1020;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    return `
      width=${width},
      height=${height},
      left=${left},
      top=${top},
      menubar=no,
      toolbar=no,
      location=yes,
      status=no,
      scrollbars=yes
    `.replace(/\s/g, '');
  };

  const handleLogoClick = () => {
    const newWindow = window.open(logo.path, '_blank', getWindowFeatures(true));
    if (newWindow) {
      newWindow.focus();
      window.close();
    }
  };

  const handleWindowOpen = (path: string) => {
    const newWindow = window.open(path, 'SocialWindow', getWindowFeatures());
    if (newWindow) {
      newWindow.focus();
    }
  };

  const renderMenuItem = (item: NavigationItem) => {
    if (item.openInWindow) {
      return (
        <MenuItem key={item.label}>
          <a
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              handleWindowOpen(item.path);
            }}
          >
            {item.label}
          </a>
        </MenuItem>
      );
    }

    if (item.label === 'Home' || item.isExternal) {
      return (
        <MenuItem key={item.label}>
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        </MenuItem>
      );
    }

    return (
      <MenuItem key={item.label}>
        <Link to={item.path}>{item.label}</Link>
      </MenuItem>
    );
  };

  return (
    <NavbarContainer>
      <NavigationGroup>
        <MenuItems className="left-menu">
          {leftMenuItems.map(renderMenuItem)}
        </MenuItems>

        <Logo>
          <LogoButton
            onClick={handleLogoClick}
            aria-label={`${logo.alt} - Open article site in new window`}
          >
            <img
              src={logo.image}
              alt={logo.alt}
              loading="eager"
            />
          </LogoButton>
        </Logo>

        <MenuItems className="right-menu">
          {rightMenuItems.map(renderMenuItem)}
        </MenuItems>
      </NavigationGroup>

      <ControlsGroup>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? <FiSun /> : <FiMoon />}
        </ThemeToggle>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </ControlsGroup>

      {isMobileMenuOpen && (
        <MobileMenu>
          {[...leftMenuItems, ...rightMenuItems].map(renderMenuItem)}
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

```

# src/components/Sound/AudioPlayer.tsx

```tsx
//src/components/Sound/AudioPlayer.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AudioPlayerProps {
  audioSrc: string;
  autoPlayDelay?: number;
  initialVolume?: number;
  fadeInDuration?: number;
  onPlayStart?: () => void;
  onPlayEnd?: () => void;
  onError?: (error: Error) => void;
  controls?: boolean;
  className?: string;
}


const PlayButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 12px 24px;
	background: rgba(0, 0, 0, 0.7);
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
	z-index: 1000;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: background-color 0.3s ease;

	&:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

const AudioControlsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const AudioPlayer: React.FC<AudioPlayerProps> = ({
   audioSrc,
   autoPlayDelay = 0,
   initialVolume = 0.8,
   fadeInDuration = 0.5,
   onPlayStart,
   onPlayEnd,
   onError,
   controls = true,
   className
 }) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
   const audioContextRef = useRef<AudioContext | null>(null);
   const gainNodeRef = useRef<GainNode | null>(null);
   const sourceRef = useRef<AudioBufferSourceNode | null>(null);
   const audioBufferRef = useRef<AudioBuffer | null>(null);

   const stopSound = useCallback(() => {
     try {
       if (sourceRef.current) {
         sourceRef.current.stop();
         sourceRef.current.disconnect();
         sourceRef.current = null;
       }
       if (gainNodeRef.current) {
         gainNodeRef.current.gain.value = 0;
       }
       setIsPlaying(false);
       onPlayEnd?.();
       console.log('Sound stopped');
     } catch (error) {
       console.error('Error stopping sound:', error);
     }
   }, [onPlayEnd]);

   const initAudioContext = useCallback(async () => {
     if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
       try {
         console.log('Creating new AudioContext...');
         const AudioContext = window.AudioContext || window.webkitAudioContext;
         audioContextRef.current = new AudioContext();

         console.log('Creating gain node...');
         gainNodeRef.current = audioContextRef.current.createGain();
         gainNodeRef.current.connect(audioContextRef.current.destination);
         gainNodeRef.current.gain.value = 0;

         console.log('Fetching audio file:', audioSrc);
         const response = await fetch(audioSrc);
         const arrayBuffer = await response.arrayBuffer();

         console.log('Decoding audio data...');
         audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);

         setIsLoaded(true);
         console.log('Audio initialized successfully');
         return true;
       } catch (error) {
         console.error('Audio initialization error:', error);
         onError?.(error as Error);
         return false;
       }
     }
     return true;
   }, [audioSrc, onError]);

   const playSound = useCallback(async () => {
     if (isPlaying) {
       stopSound();
       return;
     }

     try {
       // Initialize if needed
       if (!audioContextRef.current || !audioBufferRef.current) {
         console.log('Initializing audio before playing...');
         const initialized = await initAudioContext();
         if (!initialized) return;
       }

       // Resume if suspended
       if (audioContextRef.current.state === 'suspended') {
         console.log('Resuming audio context...');
         await audioContextRef.current.resume();
       }

       console.log('Setting up playback...');
       // Create and setup source
       sourceRef.current = audioContextRef.current.createBufferSource();
       sourceRef.current.buffer = audioBufferRef.current;
       sourceRef.current.connect(gainNodeRef.current!);

       // Set up volume fade in
       const currentTime = audioContextRef.current.currentTime;
       gainNodeRef.current!.gain.setValueAtTime(0, currentTime);
       gainNodeRef.current!.gain.linearRampToValueAtTime(
         initialVolume,
         currentTime + fadeInDuration
       );

       // Start playback
       console.log('Starting playback with volume:', initialVolume);
       sourceRef.current.start(0);
       setIsPlaying(true);
       onPlayStart?.();

       sourceRef.current.onended = () => {
         console.log('Playback ended naturally');
         setIsPlaying(false);
         onPlayEnd?.();
         sourceRef.current = null;
       };

     } catch (error) {
       console.error('Playback failed:', error);
       onError?.(error as Error);
       setIsPlaying(false);
     }
   }, [isPlaying, stopSound, initAudioContext, initialVolume, fadeInDuration, onPlayStart, onPlayEnd, onError]);

   // Initialize audio on mount
   useEffect(() => {
     console.log('Initializing audio component...');
     initAudioContext();

     return () => {
       console.log('Cleaning up audio component...');
       stopSound();
       if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
         audioContextRef.current.close().catch(console.error);
       }
     };
   }, [initAudioContext, stopSound]);

   // Handle autoplay
   useEffect(() => {
     if (autoPlayDelay > 0 && !hasAutoPlayed && isLoaded) {
       console.log(`Setting up autoplay with ${autoPlayDelay}ms delay...`);
       const autoPlayTimer = setTimeout(async () => {
         console.log('Executing autoplay...');
         await playSound();
         setHasAutoPlayed(true);
       }, autoPlayDelay);

       return () => {
         console.log('Cleaning up autoplay timer...');
         clearTimeout(autoPlayTimer);
       };
     }
   }, [autoPlayDelay, hasAutoPlayed, isLoaded, playSound]);

   // Don't render anything if controls are disabled
   if (!controls) return null;

   // Render play/stop button
   return (
     <AudioControlsContainer>
       <PlayButton
         onClick={playSound}
         disabled={!isLoaded}
         className={className}
       >
         {isPlaying ? '🔊 Stop' : '🔈 Play'}
       </PlayButton>
     </AudioControlsContainer>
   );
 };

 export default AudioPlayer;
```

# src/components/Sound/SoundPlayer.tsx

```tsx
//src/components/Sound/AudioPlayer.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AudioPlayerProps {
  audioSrc: string;
  autoPlayDelay?: number;
  initialVolume?: number;
  fadeInDuration?: number;
  onPlayStart?: () => void;
  onPlayEnd?: () => void;
  onError?: (error: Error) => void;
  controls?: boolean;
  className?: string;
}


const PlayButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 12px 24px;
	background: rgba(0, 0, 0, 0.7);
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
	z-index: 1000;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: background-color 0.3s ease;

	&:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

const AudioControlsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const SoundPlayer: React.FC<AudioPlayerProps> = ({
   audioSrc,
   autoPlayDelay = 0,
   initialVolume = 0.8,
   fadeInDuration = 0.5,
   onPlayStart,
   onPlayEnd,
   onError,
   controls = true,
   className
 }) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
   const audioContextRef = useRef<AudioContext | null>(null);
   const gainNodeRef = useRef<GainNode | null>(null);
   const sourceRef = useRef<AudioBufferSourceNode | null>(null);
   const audioBufferRef = useRef<AudioBuffer | null>(null);

   const stopSound = useCallback(() => {
     try {
       if (sourceRef.current) {
         sourceRef.current.stop();
         sourceRef.current.disconnect();
         sourceRef.current = null;
       }
       if (gainNodeRef.current) {
         gainNodeRef.current.gain.value = 0;
       }
       setIsPlaying(false);
       onPlayEnd?.();
       console.log('Sound stopped');
     } catch (error) {
       console.error('Error stopping sound:', error);
     }
   }, [onPlayEnd]);

   const initAudioContext = useCallback(async () => {
     if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
       try {
         console.log('Creating new AudioContext...');
         const AudioContext = window.AudioContext || window.webkitAudioContext;
         audioContextRef.current = new AudioContext();

         console.log('Creating gain node...');
         gainNodeRef.current = audioContextRef.current.createGain();
         gainNodeRef.current.connect(audioContextRef.current.destination);
         gainNodeRef.current.gain.value = 0;

         console.log('Fetching audio file:', audioSrc);
         const response = await fetch(audioSrc);
         const arrayBuffer = await response.arrayBuffer();

         console.log('Decoding audio data...');
         audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);

         setIsLoaded(true);
         console.log('Audio initialized successfully');
         return true;
       } catch (error) {
         console.error('Audio initialization error:', error);
         onError?.(error as Error);
         return false;
       }
     }
     return true;
   }, [audioSrc, onError]);

   const playSound = useCallback(async () => {
     if (isPlaying) {
       stopSound();
       return;
     }

     try {
       // Initialize if needed
       if (!audioContextRef.current || !audioBufferRef.current) {
         console.log('Initializing audio before playing...');
         const initialized = await initAudioContext();
         if (!initialized) return;
       }

       // Resume if suspended
       if (audioContextRef.current.state === 'suspended') {
         console.log('Resuming audio context...');
         await audioContextRef.current.resume();
       }

       console.log('Setting up playback...');
       // Create and setup source
       sourceRef.current = audioContextRef.current.createBufferSource();
       sourceRef.current.buffer = audioBufferRef.current;
       sourceRef.current.connect(gainNodeRef.current!);

       // Set up volume fade in
       const currentTime = audioContextRef.current.currentTime;
       gainNodeRef.current!.gain.setValueAtTime(0, currentTime);
       gainNodeRef.current!.gain.linearRampToValueAtTime(
         initialVolume,
         currentTime + fadeInDuration
       );

       // Start playback
       console.log('Starting playback with volume:', initialVolume);
       sourceRef.current.start(0);
       setIsPlaying(true);
       onPlayStart?.();

       sourceRef.current.onended = () => {
         console.log('Playback ended naturally');
         setIsPlaying(false);
         onPlayEnd?.();
         sourceRef.current = null;
       };

     } catch (error) {
       console.error('Playback failed:', error);
       onError?.(error as Error);
       setIsPlaying(false);
     }
   }, [isPlaying, stopSound, initAudioContext, initialVolume, fadeInDuration, onPlayStart, onPlayEnd, onError]);

   // Initialize audio on mount
   useEffect(() => {
     console.log('Initializing audio component...');
     initAudioContext();

     return () => {
       console.log('Cleaning up audio component...');
       stopSound();
       if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
         audioContextRef.current.close().catch(console.error);
       }
     };
   }, [initAudioContext, stopSound]);

   // Handle autoplay
   useEffect(() => {
     if (autoPlayDelay > 0 && !hasAutoPlayed && isLoaded) {
       console.log(`Setting up autoplay with ${autoPlayDelay}ms delay...`);
       const autoPlayTimer = setTimeout(async () => {
         console.log('Executing autoplay...');
         await playSound();
         setHasAutoPlayed(true);
       }, autoPlayDelay);

       return () => {
         console.log('Cleaning up autoplay timer...');
         clearTimeout(autoPlayTimer);
       };
     }
   }, [autoPlayDelay, hasAutoPlayed, isLoaded, playSound]);

   // Don't render anything if controls are disabled
   if (!controls) return null;

   // Render play/stop button
   return (
     <AudioControlsContainer>
       <PlayButton
         onClick={playSound}
         disabled={!isLoaded}
         className={className}
       >
         {isPlaying ? '🔊 Stop' : '🔈 Play'}
       </PlayButton>
     </AudioControlsContainer>
   );
 };

 export default SoundPlayer;
```

# src/components/TestTailwind.tsx

```tsx
// src/components/TestTailwind.tsx
import React from 'react';

export const TestTailwind = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100 ">
      <div className="tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-lg">
        <h1 className="tw-text-3xl tw-font-bold tw-text-blue-600">
          Testing Tailwind
        </h1>
        <p className="tw-mt-4 tw-text-gray-600">
          If you see this styled, Tailwind is working!
        </p>
        <button className="tw-mt-4 tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
};
```

# src/data/mockData.ts

```ts
// src/data/mockData.ts

import logo from '@/assets/GD-Fusion-logo.png';

const URLS = {
  portfolioSite: 'https://www.rlloydgonzales.com',
  articleSite: 'https://gd-article-bgtheme.netlify.app/',
  samplePage: 'https://gd-article-bgtheme.netlify.app/' // Add your actual URL here
} as const;

export const navigationData = {
  logo: {
    image: logo,
    alt: 'GonzalesDesign Fusion Logo',
    path: URLS.articleSite
  },
  menuItems: {
    left: [
      // { label: 'Home', path: URLS.portfolioSite, isExternal: true },
      { label: 'Home', path: '/' },
      { label: 'MashMedia Studio', path: '/mashmedia' },
      { label: 'DigitalOne', path: '/digitalone' }
    ],
    right: [
      { label: 'Zenmonics', path: '/zenmonics' },
      { label: 'Styleguide', path: '/styleguide' },
      { label: 'Profile', path: '/profile' },
      // {
      //   label: 'Sample page',
      //   path: URLS.samplePage,
      //   isExternal: true,
      //   openInWindow: true // New flag to indicate window opening behavior
      // }
    ]
  }
};

export { URLS };

// import logo from '@/assets/GD-Fusion-logo.png';

// const URLS = {
//   portfolioSite: 'https://www.rlloydgonzales.com',
//   articleSite: 'https://gd-article-bgtheme.netlify.app/'
// } as const;

// export const navigationData = {
//   logo: {
//     image: logo,
//     alt: 'GonzalesDesign Fusion Logo',
//     path: URLS.articleSite
//   },
//   menuItems: {
//     left: [
//       { label: 'Home', path: URLS.portfolioSite, isExternal: true },
//       { label: 'MashMedia Studio', path: '/mediamash-studio' },
//       { label: 'DigitalOne', path: '/digitalone' }
//     ],
//     right: [
//       { label: 'Zenmonics', path: '/zenmonics' },
//       { label: 'Styleguide', path: '/styleguide' },
//       { label: 'Profile', path: '/profile' }
//     ]
//   }
// };

// export { URLS };



// import logo from '@/assets/GD-Fusion-logo.png';
// import { NavigationData } from '../types/navigation';

// export const navigationData: NavigationData = {
//    logo: {
//       image: logo,
//       alt: 'GonzalesDesign Fusion Logo'
//    },
//    menuItems: {
//       left: [
//          // { label: 'Home', path: 'https://www.rlloydgonzales.com', isExternal: true },
//          { label: 'Home', path: 'https://gd-article-bgtheme.netlify.app/', isExternal: true },
//          { label: 'MediaMash Studio', path: '/mediamash-studio' },
//          { label: 'DigitalOne', path: '/digitalone' }
//        ],
//        right: [
//          { label: 'Zenmonics', path: '/zenmonics' },
//          { label: 'Styleguide', path: '/styleguide' },
//          { label: 'Profile', path: '/profile' }
//        ]
//    }
// };
```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

# src/main.tsx

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

# src/pages/BulkLoading/BulkLoading.tsx

```tsx
// BulkLoading.tsx
// import React from "react";
// import BulkImageLoader from "@/components/Animations/BulkImageLoader";
// import { type ImageInfo } from "@/components/Animations/BulkImageLoader"; // Import the type

// const images = [
//   {
//     src: "@assets/Loader/peaceful-tropical.jpg", // Update with actual image paths
//     alt: "Description 1",
//     priority: "high",
//   },
//   {
//     src: "@assets/Loader/floating-isle.jpg",
//     alt: "Description 2",
//     priority: "medium",
//   },
// ];

const BulkLoading = () => {
  return (
   //  <BulkImageLoader
   //    images={images}
   //    maxRetries={3}
   //    optimizationOptions={{
   //      maxWidth: 1200,
   //      quality: 85,
   //      format: "webp",
   //    }}
      // enablePlaceholders={true}
      // enablePriority={true}
   //  />
   <>TEST</>
  );
};

export default BulkLoading;
```

# src/pages/Home/Home.styles.ts

```ts
// src/pages/Home/Home.styles.ts

import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.sizes.navHeight};
  background: transparent;
  position: relative;
  border: 6px solid red;
`;

export const ImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1020px;
  margin: 0 auto;
//   overflow: hidden;
  border-radius: 1rem;
  background: transparent;
  border: 6px solid white;
`;
```

# src/pages/Home/Home.tsx

```tsx
// src/pages/Home/Home.tsx

import React from "react";
import { HomeContainer, ImageDiv } from "./Home.styles";
import whale from "@/assets/Loader/Whale.png";
import whaleSound from "@/assets/sounds/whale-call-2.wav";
import CircularLoader from "@/components/Animations/CircularLoader";
import { TestTailwind } from "@/components/TestTailwind";
import ImageLoader from "@/components/ImageLoader/ImageLoader";

const Home: React.FC = () => {
	console.log("Sound file path:", whaleSound);
	return (
		<HomeContainer>
			<ImageDiv>
				<ImageLoader src={whale} alt="Whale illustration" mode="light" soundSrc={whaleSound} />

            {/* <CircularLoader
               src={whale}
               alt="Whale illustration"
               soundSrc={whaleSound}
            /> */}

            {/* <TestTailwind /> */}

			</ImageDiv>

		</HomeContainer>
	);
};

export default Home;

```

# src/pages/Home/index.ts

```ts
export { default } from './Home';
```

# src/pages/Loader/Loader.tsx

```tsx
import React from 'react'

const Loader = () => {
  return (
    <div>

      <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3827 7.65442C42.0091 2.33904 12.9697 22.6539
         7.65532 53.014C4.80697 69.4431 9.36475 85.4756 19.0388 97.5208L14.3608 101.278C3.63526 87.9236 -1.40698
         70.1569 1.74391 51.9867L1.74471 51.9822C7.63144 18.3437 39.7913 -4.14025 73.4169 1.74423C107.055
         7.63097 129.539 39.7909 123.655 73.4165C117.768 107.055 85.6083 129.539 51.9827 123.654L53.0169
         117.744C83.3913 123.06 112.431 102.744 117.745 72.3822C123.06 42.0078 102.744 12.9677 72.3827 7.65442Z"
         fill="#808285"/>
      </svg>

    </div>
  )
}

export default Loader


```

# src/pages/MashMediaStudio/MashMediaStudio.tsx

```tsx
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
```

# src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... rest of your CSS variables ... */
  }
}
```

# src/styles/GlobalStyles-sc.ts

```ts
// src/styles/GlobalStyles.ts
// In App.tsx or GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: transparent;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text.light.primary};
  }

  #root {
    min-height: 100vh;
    background: transparent;
  }
`;

```

# src/styles/GlobalStyles.ts

```ts
// src/styles/GlobalStyles.ts
// In App.tsx or GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: transparent;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text.light.primary};
  }

  #root {
    min-height: 100vh;
    background: transparent;
  }
`;

```

# src/styles/styled.d.ts

```ts
// src/styles/styled.d.ts
import 'styled-components';
import { ThemeInterface } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

// // src/styles/styled.d.ts
// import 'styled-components';
// import type { ThemeInterface } from './theme';

// declare module 'styled-components' {
//   // We need to add at least one property to avoid the "no members" warning
//   export interface DefaultTheme extends ThemeInterface {
//     _brand: 'themed'; // This is a phantom type to make TypeScript happy
//   }
// }

// // // src/styles/styled.d.ts
// // import 'styled-components';
// // import { ThemeInterface } from './theme';

// // declare module 'styled-components' {
// //   export interface DefaultTheme extends ThemeInterface {}
// // }

// // // // src/styles/styled.d.ts
// // // import 'styled-components';
// // // import { ThemeInterface } from './theme';

// // // declare module 'styled-components' {
// // //   export interface DefaultTheme extends ThemeInterface {
// // //     typography: Typography;
// // //     error: ErrorStyles;
// // //   }
// // // }


```

# src/styles/tailwind.config.ts

```ts
// src/styles/tailwind.config.ts
import { colors, typography, sizes } from './theme';

export const tailwindTheme = {
  extend: {
    colors: Object.entries(colors).reduce((acc, [key, value]) => {
      if (value && typeof value === 'object') {
        if ('500' in value) {
          acc[key] = value;
        } else {
          Object.entries(value).forEach(([subKey, subValue]) => {
            acc[`${key}-${subKey}`] = subValue;
          });
        }
      }
      return acc;
    }, {} as Record<string, unknown>),
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    lineHeight: {
      none: typography.lineHeight.none.toString(),
      tight: typography.lineHeight.tight.toString(),
      normal: typography.lineHeight.normal.toString(),
      relaxed: typography.lineHeight.relaxed.toString(),
    },
    fontWeight: typography.fontWeight,
    spacing: sizes,
  },
};

export const tailwindConfig = {
  prefix: 'tw-',
  theme: tailwindTheme,
  darkMode: 'class',
};

//  // src/styles/tailwind.config.ts
//  import { colors, fontFamily, fontSize, spacing } from './theme';

//  export default {
//    prefix: 'tw-',
//    content: [
//      './src/**/*.{js,jsx,ts,tsx}',
//    ],
//    theme: {
//      colors,
//      fontFamily,
//      fontSize,
//      spacing,
//      extend: {
//        // Add any Tailwind-specific extensions here
//      },
//    },
//    darkMode: 'class',
//  };
```

# src/styles/theme-sc.ts

```ts
// src/styles/theme.ts

export interface Theme {
   colors: ColorPalette;
   typography: Typography;
   // Add these new properties to match our theme implementation
   sizes: {
     navHeight: string;
   };
   navBackground: string;
   textSecondary: string;
   border: string;
   error: string;
   backgroundColor?: string;  // Optional property for background color
   backgroundBlendMode?: string;  // Optional property for blend mode
 }

export interface ColorShades {
   100: string;
   200: string;
   300: string;
   400: string;
   500: string; // Base color
   600: string;
   700: string;
   800: string;
   900: string;
}

export interface ColorPalette {
   primary: ColorShades;
   secondary: ColorShades;
   accent: ColorShades;
   success: ColorShades;
   warning: ColorShades;
   danger: ColorShades;
   gray: ColorShades;
   background: {
      light: string;
      dark: string;
   };
   text: {
      light: {
         primary: string;
         secondary: string;
         disabled: string;
      };
      dark: {
         primary: string;
         secondary: string;
         disabled: string;
      };
   };
}

export interface Typography {
   heading: {
      fontFamily: string;
      weights: {
         regular: number;
         medium: number;
         bold: number;
      };
      sizes: {
         h1: string;
         h2: string;
         h3: string;
         h4: string;
         h5: string;
         h6: string;
      };
   };
   body: {
      fontFamily: string;
      weights: {
         regular: number;
         medium: number;
         bold: number;
      };
      sizes: {
         xs: string;
         sm: string;
         base: string;
         lg: string;
         xl: string;
      };
   };
}

export type ThemeMode = 'light' | 'dark';

// export interface Theme {
//    colors: ColorPalette;
//    typography: Typography;
// }

// Define specific heading and body font sizes to fix type issues
type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodySizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

// Create the base theme
const baseTheme = {
   typography: {
      heading: {
         fontFamily: '"Libre Baskerville", serif',
         weights: {
            regular: 400,
            medium: 500,
            bold: 700
         },
         sizes: {
            h1: '2.5rem',
            h2: '2rem',
            h3: '1.75rem',
            h4: '1.5rem',
            h5: '1.25rem',
            h6: '1rem'
         }
      },
      body: {
         fontFamily: '"Open Sans", sans-serif',
         weights: {
            regular: 400,
            medium: 500,
            bold: 700
         },
         sizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem'
         }
      }
   }
} as const;

// Common colors
const colors = {
   primary: {
      100: '#EBE5F6',
      200: '#D7CCED',
      300: '#C3B2E3',
      400: '#AF99DA',
      500: '#8465C3',
      600: '#6A51C0',
      700: '#503DBD',
      800: '#3629BA',
      900: '#1C15B7'
   },
   secondary: {
      100: '#E6FEFF',
      200: '#CCFEFF',
      300: '#B3FDFF',
      400: '#99FCFF',
      500: '#3AF1F9',
      600: '#2ED8E0',
      700: '#22BFC6',
      800: '#16A6AD',
      900: '#0A8D93'
   },
   accent: {
      100: '#FFE9E3',
      200: '#FFD3C8',
      300: '#FFBDAC',
      400: '#FFA791',
      500: '#F46A47',
      600: '#DB503D',
      700: '#C23633',
      800: '#A91C29',
      900: '#90021F'
   },
   success: {
      100: '#F0F7E6',
      200: '#E1EFCC',
      300: '#D2E7B3',
      400: '#C3DF99',
      500: '#A2C465',
      600: '#88AB4B',
      700: '#6F9231',
      800: '#557917',
      900: '#3C5F00'
   },
   warning: {
      100: '#FFF5EB',
      200: '#FFEBD7',
      300: '#FFE1C3',
      400: '#FFD7AF',
      500: '#FAD8B4',
      600: '#E1BF9A',
      700: '#C8A680',
      800: '#AF8D66',
      900: '#96744C'
   },
   danger: {
      100: '#FFE5E8',
      200: '#FFCCD1',
      300: '#FFB2BA',
      400: '#FF99A3',
      500: '#F5536A',
      600: '#DC3950',
      700: '#C21F36',
      800: '#A9051C',
      900: '#900002'
   },
   gray: {
      100: '#F7F7F7',
      200: '#E6E6E6',
      300: '#D5D5D5',
      400: '#C4C4C4',
      500: '#676767',
      600: '#525252',
      700: '#3D3D3D',
      800: '#282828',
      900: '#131313'
   }
};

// Light theme
export const lightTheme: Theme = {
   colors: {
      ...colors,
      background: {
         light: '#FFFFFF',
         dark: '#121212'
      },
      text: {
         light: {
            primary: '#676767',
            secondary: '#8F8F8F',
            disabled: '#CCCCCC'
         },
         dark: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            disabled: '#6E6E6E'
         }
      }
   },
   typography: baseTheme.typography,
   sizes: {
      navHeight: '80px'
   },
   navBackground: 'rgba(255, 255, 255, 0.8)',
   textSecondary: '#8F8F8F',
   border: '#E5E7EB',
   error: '#DC2626'
};

// Dark theme
export const darkTheme: Theme = {
   colors: {
      ...colors,
      background: {
         light: '#121212',
         dark: '#000000'
      },
      text: {
         light: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            disabled: '#6E6E6E'
         },
         dark: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            disabled: '#6E6E6E'
         }
      }
   },
   typography: baseTheme.typography,
   sizes: {
      navHeight: '80px'
   },
   navBackground: 'rgba(18, 18, 18, 0.8)',
   textSecondary: '#E0E0E0',
   border: '#374151',
   error: '#EF4444'
};

// Default theme (for utilities to use)
export const theme = lightTheme;

// Utility functions
export const getColor = (colorName: keyof Omit<ColorPalette, "background" | "text">, shade: keyof ColorShades = 500): string => {
   return theme.colors[colorName][shade];
};

export const getBackgroundColor = (mode: ThemeMode): string => {
   return theme.colors.background[mode];
};

export const getTextColor = (mode: ThemeMode, variant: "primary" | "secondary" | "disabled"): string => {
   return theme.colors.text[mode][variant];
};

export const getFontFamily = (type: "heading" | "body"): string => {
   return theme.typography[type].fontFamily;
};

export const getFontWeight = (type: "heading" | "body", weight: "regular" | "medium" | "bold"): number => {
   return theme.typography[type].weights[weight];
};

export const getFontSize = (type: "heading" | "body", size: HeadingSizes | BodySizes): string => {
   if (type === "heading" && isHeadingSize(size)) {
      return theme.typography.heading.sizes[size];
   }
   if (type === "body" && isBodySize(size)) {
      return theme.typography.body.sizes[size];
   }
   throw new Error(`Invalid size ${size} for type ${type}`);
};

// Type guards
const isHeadingSize = (size: HeadingSizes | BodySizes): size is HeadingSizes => {
   return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(size);
};

const isBodySize = (size: HeadingSizes | BodySizes): size is BodySizes => {
   return ["xs", "sm", "base", "lg", "xl"].includes(size);
};

// CSS helper
export const applyFontStyle = (type: "heading" | "body", weight: "regular" | "medium" | "bold", size: HeadingSizes | BodySizes): string => {
   return `
    font-family: ${getFontFamily(type)};
    font-weight: ${getFontWeight(type, weight)};
    font-size: ${getFontSize(type, size)};
  `;
};

```

# src/styles/theme.ts

```ts
// src/styles/theme.ts

export interface Theme {
   colors: ColorPalette;
   typography: Typography;
   // Add these new properties to match our theme implementation
   sizes: {
     navHeight: string;
   };
   navBackground: string;
   textSecondary: string;
   border: string;
   error: string;
   backgroundColor?: string;  // Optional property for background color
   backgroundBlendMode?: string;  // Optional property for blend mode
 }

export interface ColorShades {
   100: string;
   200: string;
   300: string;
   400: string;
   500: string; // Base color
   600: string;
   700: string;
   800: string;
   900: string;
}

export interface ColorPalette {
   primary: ColorShades;
   secondary: ColorShades;
   accent: ColorShades;
   success: ColorShades;
   warning: ColorShades;
   danger: ColorShades;
   gray: ColorShades;
   background: {
      light: string;
      dark: string;
   };
   text: {
      light: {
         primary: string;
         secondary: string;
         disabled: string;
      };
      dark: {
         primary: string;
         secondary: string;
         disabled: string;
      };
   };
}

export interface Typography {
   heading: {
      fontFamily: string;
      weights: {
         regular: number;
         medium: number;
         bold: number;
      };
      sizes: {
         h1: string;
         h2: string;
         h3: string;
         h4: string;
         h5: string;
         h6: string;
      };
   };
   body: {
      fontFamily: string;
      weights: {
         regular: number;
         medium: number;
         bold: number;
      };
      sizes: {
         xs: string;
         sm: string;
         base: string;
         lg: string;
         xl: string;
      };
   };
}

export type ThemeMode = 'light' | 'dark';

// export interface Theme {
//    colors: ColorPalette;
//    typography: Typography;
// }

// Define specific heading and body font sizes to fix type issues
type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodySizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

// Create the base theme
const baseTheme = {
   typography: {
      heading: {
         fontFamily: '"Libre Baskerville", serif',
         weights: {
            regular: 400,
            medium: 500,
            bold: 700
         },
         sizes: {
            h1: '2.5rem',
            h2: '2rem',
            h3: '1.75rem',
            h4: '1.5rem',
            h5: '1.25rem',
            h6: '1rem'
         }
      },
      body: {
         fontFamily: '"Open Sans", sans-serif',
         weights: {
            regular: 400,
            medium: 500,
            bold: 700
         },
         sizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem'
         }
      }
   }
} as const;

// Common colors
const colors = {
   primary: {
      100: '#EBE5F6',
      200: '#D7CCED',
      300: '#C3B2E3',
      400: '#AF99DA',
      500: '#8465C3',
      600: '#6A51C0',
      700: '#503DBD',
      800: '#3629BA',
      900: '#1C15B7'
   },
   secondary: {
      100: '#E6FEFF',
      200: '#CCFEFF',
      300: '#B3FDFF',
      400: '#99FCFF',
      500: '#3AF1F9',
      600: '#2ED8E0',
      700: '#22BFC6',
      800: '#16A6AD',
      900: '#0A8D93'
   },
   accent: {
      100: '#FFE9E3',
      200: '#FFD3C8',
      300: '#FFBDAC',
      400: '#FFA791',
      500: '#F46A47',
      600: '#DB503D',
      700: '#C23633',
      800: '#A91C29',
      900: '#90021F'
   },
   success: {
      100: '#F0F7E6',
      200: '#E1EFCC',
      300: '#D2E7B3',
      400: '#C3DF99',
      500: '#A2C465',
      600: '#88AB4B',
      700: '#6F9231',
      800: '#557917',
      900: '#3C5F00'
   },
   warning: {
      100: '#FFF5EB',
      200: '#FFEBD7',
      300: '#FFE1C3',
      400: '#FFD7AF',
      500: '#FAD8B4',
      600: '#E1BF9A',
      700: '#C8A680',
      800: '#AF8D66',
      900: '#96744C'
   },
   danger: {
      100: '#FFE5E8',
      200: '#FFCCD1',
      300: '#FFB2BA',
      400: '#FF99A3',
      500: '#F5536A',
      600: '#DC3950',
      700: '#C21F36',
      800: '#A9051C',
      900: '#900002'
   },
   gray: {
      100: '#F7F7F7',
      200: '#E6E6E6',
      300: '#D5D5D5',
      400: '#C4C4C4',
      500: '#676767',
      600: '#525252',
      700: '#3D3D3D',
      800: '#282828',
      900: '#131313'
   }
};

// Light theme
export const lightTheme: Theme = {
   colors: {
      ...colors,
      background: {
         light: '#FFFFFF',
         dark: '#121212'
      },
      text: {
         light: {
            primary: '#676767',
            secondary: '#8F8F8F',
            disabled: '#CCCCCC'
         },
         dark: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            disabled: '#6E6E6E'
         }
      }
   },
   typography: baseTheme.typography,
   sizes: {
      navHeight: '80px'
   },
   navBackground: 'rgba(255, 255, 255, 0.8)',
   textSecondary: '#8F8F8F',
   border: '#E5E7EB',
   error: '#DC2626'
};

// Dark theme
export const darkTheme: Theme = {
   colors: {
      ...colors,
      background: {
         light: '#121212',
         dark: '#000000'
      },
      text: {
         light: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            disabled: '#6E6E6E'
         },
         dark: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            disabled: '#6E6E6E'
         }
      }
   },
   typography: baseTheme.typography,
   sizes: {
      navHeight: '80px'
   },
   navBackground: 'rgba(18, 18, 18, 0.8)',
   textSecondary: '#E0E0E0',
   border: '#374151',
   error: '#EF4444'
};

// Default theme (for utilities to use)
export const theme = lightTheme;

// Utility functions
export const getColor = (colorName: keyof Omit<ColorPalette, "background" | "text">, shade: keyof ColorShades = 500): string => {
   return theme.colors[colorName][shade];
};

export const getBackgroundColor = (mode: ThemeMode): string => {
   return theme.colors.background[mode];
};

export const getTextColor = (mode: ThemeMode, variant: "primary" | "secondary" | "disabled"): string => {
   return theme.colors.text[mode][variant];
};

export const getFontFamily = (type: "heading" | "body"): string => {
   return theme.typography[type].fontFamily;
};

export const getFontWeight = (type: "heading" | "body", weight: "regular" | "medium" | "bold"): number => {
   return theme.typography[type].weights[weight];
};

export const getFontSize = (type: "heading" | "body", size: HeadingSizes | BodySizes): string => {
   if (type === "heading" && isHeadingSize(size)) {
      return theme.typography.heading.sizes[size];
   }
   if (type === "body" && isBodySize(size)) {
      return theme.typography.body.sizes[size];
   }
   throw new Error(`Invalid size ${size} for type ${type}`);
};

// Type guards
const isHeadingSize = (size: HeadingSizes | BodySizes): size is HeadingSizes => {
   return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(size);
};

const isBodySize = (size: HeadingSizes | BodySizes): size is BodySizes => {
   return ["xs", "sm", "base", "lg", "xl"].includes(size);
};

// CSS helper
export const applyFontStyle = (type: "heading" | "body", weight: "regular" | "medium" | "bold", size: HeadingSizes | BodySizes): string => {
   return `
    font-family: ${getFontFamily(type)};
    font-weight: ${getFontWeight(type, weight)};
    font-size: ${getFontSize(type, size)};
  `;
};

```

# src/styles/ThemeProvider.tsx

```tsx
// src/styles/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeInterface } from './theme';
import { GlobalStyles } from './GlobalStyles';

interface ThemeContextType {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDark: false,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = false
}) => {
  const [isDark, setIsDark] = useState(defaultTheme);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
// // src/styles/ThemeProvider.tsx
// import React, { createContext, useContext, useState } from 'react';
// import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';
// import { GlobalStyles } from './GlobalStyles';

// interface ThemeContextType {
//   toggleTheme: () => void;
//   isDark: boolean;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   toggleTheme: () => {},
//   isDark: false,
// });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
//   children
// }) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark');
//   };

//   const theme = isDark ? darkTheme : lightTheme;

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, isDark }}>
//       <StyledThemeProvider theme={theme}>
//         <GlobalStyles />
//         {children}
//       </StyledThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// // // src/styles/ThemeProvider.tsx
// // import React, { createContext, useContext } from 'react';
// // import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// // import { lightTheme, darkTheme } from './theme';
// // import { GlobalStyles } from './GlobalStyles';

// // interface ThemeContextType {
// //   toggleTheme: () => void;
// //   isDark: boolean;
// // }

// // const ThemeContext = createContext<ThemeContextType>({
// //   toggleTheme: () => {},
// //   isDark: false,
// // });

// // export const useTheme = () => useContext(ThemeContext);

// // export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// //   const [isDark, setIsDark] = React.useState(false);

// //   const toggleTheme = () => {
// //     setIsDark(!isDark);
// //     document.documentElement.classList.toggle('dark');
// //   };

// //   const themeContextValue = {
// //     toggleTheme,
// //     isDark,
// //   };

// //   return (
// //     <ThemeContext.Provider value={themeContextValue}>
// //       <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
// //         <GlobalStyles />
// //         {children}
// //       </StyledThemeProvider>
// //     </ThemeContext.Provider>
// //   );
// // };

// // // Example usage (can be moved to a separate file)
// // // const useThemeExample = () => {
// // //   const StyledButton = styled.button`
// // //     background-color: ${({ theme }) => theme.colors.primary[500]};
// // //     font-family: ${({ theme }) => theme.fonts.sans.join(', ')};
// // //     font-size: ${({ theme }) => theme.fontSizes.base};
// // //     padding: ${({ theme }) => `${theme.sizes.base} ${theme.sizes.lg}`};

// // //     &:hover {
// // //       background-color: ${({ theme }) => theme.colors.primary[600]};
// // //     }
// // //   `;

// // //   return { StyledButton };
// // // };


```

# src/types/global.d.ts

```ts
interface Window {
   webkitAudioContext: typeof AudioContext;
 }

 declare class webkitAudioContext extends AudioContext {
   constructor();
 }
```

# src/types/images.d.ts

```ts
// src/types/images.d.ts
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.wav' {
   const content: string;
   export default content;
 }
```

# src/types/navigation.ts

```ts
// src/types/navigation.ts
export interface NavigationItem {
   label: string;
   path: string;
   isExternal?: boolean;
   openInWindow?: boolean; // New property
 }

 export interface NavigationData {
   logo: {
     image: string;
     alt: string;
   };
   menuItems: {
     left: NavigationItem[];
     right: NavigationItem[];
   };
 }

```

# src/types/paths.d.ts

```ts
// src/types/paths.d.ts
declare module '@/*' {
   const content: any;
   export default content;
 }

 declare module '@components/*' {
   const content: any;
   export default content;
 }

 declare module '@pages/*' {
   const content: any;
   export default content;
 }

 declare module '@styles/*' {
   const content: any;
   export default content;
 }

 declare module '@data/*' {
   const content: any;
   export default content;
 }

 // Add specific declarations for image imports
 declare module '*.webp' {
   const content: string;
   export default content;
 }

 declare module '*.png' {
   const content: string;
   export default content;
 }

 declare module '*.jpg' {
   const content: string;
   export default content;
 }

 declare module '*.svg' {
   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
   export default content;
 }
```

# src/types/styled.d.ts

```ts
// src/styles/styled.d.ts
import 'styled-components';
import { Theme as CustomTheme } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    // Additional properties specific to styled-components
    sizes: {
      navHeight: string;
    };
    navBackground: string;
    textSecondary: string;
    border: string;
    error: string;
  }
}

```

# src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.cjs

```cjs
 // tailwind.config.js (renamed to tailwind.config.cjs)
 /** @type {import('tailwindcss').Config} */
 module.exports = {
   darkMode: ["class"],
   content: [
     './pages/**/*.{ts,tsx}',
     './components/**/*.{ts,tsx}',
     './app/**/*.{ts,tsx}',
     './src/**/*.{ts,tsx}',
   ],
   prefix: "tw-",
   theme: {
     container: {
       center: true,
       padding: "2rem",
       screens: {
         "2xl": "1400px",
       },
     },
     extend: {
       colors: {
         border: "hsl(var(--border))",
         input: "hsl(var(--input))",
         ring: "hsl(var(--ring))",
         background: "hsl(var(--background))",
         foreground: "hsl(var(--foreground))",
         primary: {
           DEFAULT: "hsl(var(--primary))",
           foreground: "hsl(var(--primary-foreground))",
         },
         secondary: {
           DEFAULT: "hsl(var(--secondary))",
           foreground: "hsl(var(--secondary-foreground))",
         },
         destructive: {
           DEFAULT: "hsl(var(--destructive))",
           foreground: "hsl(var(--destructive-foreground))",
         },
         muted: {
           DEFAULT: "hsl(var(--muted))",
           foreground: "hsl(var(--muted-foreground))",
         },
         accent: {
           DEFAULT: "hsl(var(--accent))",
           foreground: "hsl(var(--accent-foreground))",
         },
         popover: {
           DEFAULT: "hsl(var(--popover))",
           foreground: "hsl(var(--popover-foreground))",
         },
         card: {
           DEFAULT: "hsl(var(--card))",
           foreground: "hsl(var(--card-foreground))",
         },
       },
       borderRadius: {
         lg: "var(--radius)",
         md: "calc(var(--radius) - 2px)",
         sm: "calc(var(--radius) - 4px)",
       },
       keyframes: {
         "accordion-down": {
           from: { height: "0" },
           to: { height: "var(--radix-accordion-content-height)" },
         },
         "accordion-up": {
           from: { height: "var(--radix-accordion-content-height)" },
           to: { height: "0" },
         },
       },
       animation: {
         "accordion-down": "accordion-down 0.2s ease-out",
         "accordion-up": "accordion-up 0.2s ease-out",
       },
     },
   },
   plugins: [require("tailwindcss-animate")],
   important: true,
   corePlugins: {
     preflight: false,
   }
 }
```

# tailwind.config.js

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   prefix: "tw-", // Optional: only if you need to avoid conflicts
   theme: {
     extend: {},
   },
   plugins: [],
 }

```

# tsconfig.app.json

```json
{
  "compilerOptions": {
   "forceConsistentCasingInFileNames": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

# tsconfig.json

```json
{
   "compilerOptions": {
     "target": "ES2020",
     "forceConsistentCasingInFileNames": true,
     "useDefineForClassFields": true,
     "lib": ["ES2020", "DOM", "DOM.Iterable"],
     "module": "ESNext",
     "skipLibCheck": true,
     "moduleResolution": "bundler",
     "allowImportingTsExtensions": true,
     "resolveJsonModule": true,
     "isolatedModules": true,
     "noEmit": true,
     "jsx": "react-jsx",
     "strict": true,
     "noUnusedLocals": true,
     "noUnusedParameters": true,
     "noFallthroughCasesInSwitch": true,
     "baseUrl": ".",
     "paths": {
       "@/*": ["./src/*"],
       "@components/*": ["src/components/*"],
       "@pages/*": ["src/pages/*"],
       "@styles/*": ["src/styles/*"],
       "@data/*": ["src/data/*"]
     },
     "typeRoots": [
       "./node_modules/@types",
       "./src/types"
     ]
   },
   "include": [
     "src/**/*.ts",
     "src/**/*.tsx",
     "src/**/*.d.ts"
   ],
   "references": [{ "path": "./tsconfig.node.json" }]
 }
```

# tsconfig.node.json

```json
{
   "compilerOptions": {
     "composite": true,
     "skipLibCheck": true,
     "module": "ESNext",
     "moduleResolution": "bundler",
     "allowSyntheticDefaultImports": true,
     "forceConsistentCasingInFileNames": true,
     "strict": true
   },
   "include": ["vite.config.ts"]
 }
```

# tsconfig.node.tsbuildinfo

```tsbuildinfo
{"fileNames":["./node_modules/typescript/lib/lib.d.ts","./node_modules/typescript/lib/lib.es5.d.ts","./node_modules/typescript/lib/lib.es2015.d.ts","./node_modules/typescript/lib/lib.es2016.d.ts","./node_modules/typescript/lib/lib.es2017.d.ts","./node_modules/typescript/lib/lib.es2018.d.ts","./node_modules/typescript/lib/lib.es2019.d.ts","./node_modules/typescript/lib/lib.es2020.d.ts","./node_modules/typescript/lib/lib.dom.d.ts","./node_modules/typescript/lib/lib.webworker.importscripts.d.ts","./node_modules/typescript/lib/lib.scripthost.d.ts","./node_modules/typescript/lib/lib.es2015.core.d.ts","./node_modules/typescript/lib/lib.es2015.collection.d.ts","./node_modules/typescript/lib/lib.es2015.generator.d.ts","./node_modules/typescript/lib/lib.es2015.iterable.d.ts","./node_modules/typescript/lib/lib.es2015.promise.d.ts","./node_modules/typescript/lib/lib.es2015.proxy.d.ts","./node_modules/typescript/lib/lib.es2015.reflect.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2016.array.include.d.ts","./node_modules/typescript/lib/lib.es2016.intl.d.ts","./node_modules/typescript/lib/lib.es2017.date.d.ts","./node_modules/typescript/lib/lib.es2017.object.d.ts","./node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2017.string.d.ts","./node_modules/typescript/lib/lib.es2017.intl.d.ts","./node_modules/typescript/lib/lib.es2017.typedarrays.d.ts","./node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts","./node_modules/typescript/lib/lib.es2018.asynciterable.d.ts","./node_modules/typescript/lib/lib.es2018.intl.d.ts","./node_modules/typescript/lib/lib.es2018.promise.d.ts","./node_modules/typescript/lib/lib.es2018.regexp.d.ts","./node_modules/typescript/lib/lib.es2019.array.d.ts","./node_modules/typescript/lib/lib.es2019.object.d.ts","./node_modules/typescript/lib/lib.es2019.string.d.ts","./node_modules/typescript/lib/lib.es2019.symbol.d.ts","./node_modules/typescript/lib/lib.es2019.intl.d.ts","./node_modules/typescript/lib/lib.es2020.bigint.d.ts","./node_modules/typescript/lib/lib.es2020.date.d.ts","./node_modules/typescript/lib/lib.es2020.promise.d.ts","./node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2020.string.d.ts","./node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2020.intl.d.ts","./node_modules/typescript/lib/lib.es2020.number.d.ts","./node_modules/typescript/lib/lib.decorators.d.ts","./node_modules/typescript/lib/lib.decorators.legacy.d.ts","./node_modules/@types/node/compatibility/disposable.d.ts","./node_modules/@types/node/compatibility/indexable.d.ts","./node_modules/@types/node/compatibility/iterators.d.ts","./node_modules/@types/node/compatibility/index.d.ts","./node_modules/@types/node/ts5.6/globals.typedarray.d.ts","./node_modules/@types/node/ts5.6/buffer.buffer.d.ts","./node_modules/undici-types/header.d.ts","./node_modules/undici-types/readable.d.ts","./node_modules/undici-types/file.d.ts","./node_modules/undici-types/fetch.d.ts","./node_modules/undici-types/formdata.d.ts","./node_modules/undici-types/connector.d.ts","./node_modules/undici-types/client.d.ts","./node_modules/undici-types/errors.d.ts","./node_modules/undici-types/dispatcher.d.ts","./node_modules/undici-types/global-dispatcher.d.ts","./node_modules/undici-types/global-origin.d.ts","./node_modules/undici-types/pool-stats.d.ts","./node_modules/undici-types/pool.d.ts","./node_modules/undici-types/handlers.d.ts","./node_modules/undici-types/balanced-pool.d.ts","./node_modules/undici-types/agent.d.ts","./node_modules/undici-types/mock-interceptor.d.ts","./node_modules/undici-types/mock-agent.d.ts","./node_modules/undici-types/mock-client.d.ts","./node_modules/undici-types/mock-pool.d.ts","./node_modules/undici-types/mock-errors.d.ts","./node_modules/undici-types/proxy-agent.d.ts","./node_modules/undici-types/env-http-proxy-agent.d.ts","./node_modules/undici-types/retry-handler.d.ts","./node_modules/undici-types/retry-agent.d.ts","./node_modules/undici-types/api.d.ts","./node_modules/undici-types/interceptors.d.ts","./node_modules/undici-types/util.d.ts","./node_modules/undici-types/cookies.d.ts","./node_modules/undici-types/patch.d.ts","./node_modules/undici-types/websocket.d.ts","./node_modules/undici-types/eventsource.d.ts","./node_modules/undici-types/filereader.d.ts","./node_modules/undici-types/diagnostics-channel.d.ts","./node_modules/undici-types/content-type.d.ts","./node_modules/undici-types/cache.d.ts","./node_modules/undici-types/index.d.ts","./node_modules/@types/node/globals.d.ts","./node_modules/@types/node/assert.d.ts","./node_modules/@types/node/assert/strict.d.ts","./node_modules/@types/node/async_hooks.d.ts","./node_modules/@types/node/buffer.d.ts","./node_modules/@types/node/child_process.d.ts","./node_modules/@types/node/cluster.d.ts","./node_modules/@types/node/console.d.ts","./node_modules/@types/node/constants.d.ts","./node_modules/@types/node/crypto.d.ts","./node_modules/@types/node/dgram.d.ts","./node_modules/@types/node/diagnostics_channel.d.ts","./node_modules/@types/node/dns.d.ts","./node_modules/@types/node/dns/promises.d.ts","./node_modules/@types/node/domain.d.ts","./node_modules/@types/node/dom-events.d.ts","./node_modules/@types/node/events.d.ts","./node_modules/@types/node/fs.d.ts","./node_modules/@types/node/fs/promises.d.ts","./node_modules/@types/node/http.d.ts","./node_modules/@types/node/http2.d.ts","./node_modules/@types/node/https.d.ts","./node_modules/@types/node/inspector.d.ts","./node_modules/@types/node/module.d.ts","./node_modules/@types/node/net.d.ts","./node_modules/@types/node/os.d.ts","./node_modules/@types/node/path.d.ts","./node_modules/@types/node/perf_hooks.d.ts","./node_modules/@types/node/process.d.ts","./node_modules/@types/node/punycode.d.ts","./node_modules/@types/node/querystring.d.ts","./node_modules/@types/node/readline.d.ts","./node_modules/@types/node/readline/promises.d.ts","./node_modules/@types/node/repl.d.ts","./node_modules/@types/node/sea.d.ts","./node_modules/@types/node/sqlite.d.ts","./node_modules/@types/node/stream.d.ts","./node_modules/@types/node/stream/promises.d.ts","./node_modules/@types/node/stream/consumers.d.ts","./node_modules/@types/node/stream/web.d.ts","./node_modules/@types/node/string_decoder.d.ts","./node_modules/@types/node/test.d.ts","./node_modules/@types/node/timers.d.ts","./node_modules/@types/node/timers/promises.d.ts","./node_modules/@types/node/tls.d.ts","./node_modules/@types/node/trace_events.d.ts","./node_modules/@types/node/tty.d.ts","./node_modules/@types/node/url.d.ts","./node_modules/@types/node/util.d.ts","./node_modules/@types/node/v8.d.ts","./node_modules/@types/node/vm.d.ts","./node_modules/@types/node/wasi.d.ts","./node_modules/@types/node/worker_threads.d.ts","./node_modules/@types/node/zlib.d.ts","./node_modules/@types/node/ts5.6/index.d.ts","./node_modules/@types/estree/index.d.ts","./node_modules/rollup/dist/rollup.d.ts","./node_modules/rollup/dist/parseast.d.ts","./node_modules/vite/types/hmrpayload.d.ts","./node_modules/vite/types/customevent.d.ts","./node_modules/vite/types/hot.d.ts","./node_modules/vite/dist/node/types.d-agj9qkwt.d.ts","./node_modules/esbuild/lib/main.d.ts","./node_modules/source-map-js/source-map.d.ts","./node_modules/vite/node_modules/postcss/lib/previous-map.d.ts","./node_modules/vite/node_modules/postcss/lib/input.d.ts","./node_modules/vite/node_modules/postcss/lib/css-syntax-error.d.ts","./node_modules/vite/node_modules/postcss/lib/declaration.d.ts","./node_modules/vite/node_modules/postcss/lib/root.d.ts","./node_modules/vite/node_modules/postcss/lib/warning.d.ts","./node_modules/vite/node_modules/postcss/lib/lazy-result.d.ts","./node_modules/vite/node_modules/postcss/lib/no-work-result.d.ts","./node_modules/vite/node_modules/postcss/lib/processor.d.ts","./node_modules/vite/node_modules/postcss/lib/result.d.ts","./node_modules/vite/node_modules/postcss/lib/document.d.ts","./node_modules/vite/node_modules/postcss/lib/rule.d.ts","./node_modules/vite/node_modules/postcss/lib/node.d.ts","./node_modules/vite/node_modules/postcss/lib/comment.d.ts","./node_modules/vite/node_modules/postcss/lib/container.d.ts","./node_modules/vite/node_modules/postcss/lib/at-rule.d.ts","./node_modules/vite/node_modules/postcss/lib/list.d.ts","./node_modules/vite/node_modules/postcss/lib/postcss.d.ts","./node_modules/vite/node_modules/postcss/lib/postcss.d.mts","./node_modules/vite/dist/node/runtime.d.ts","./node_modules/vite/types/importglob.d.ts","./node_modules/vite/types/metadata.d.ts","./node_modules/vite/dist/node/index.d.ts","./node_modules/@babel/types/lib/index.d.ts","./node_modules/@types/babel__generator/index.d.ts","./node_modules/@babel/parser/typings/babel-parser.d.ts","./node_modules/@types/babel__template/index.d.ts","./node_modules/@types/babel__traverse/index.d.ts","./node_modules/@types/babel__core/index.d.ts","./node_modules/@vitejs/plugin-react/dist/index.d.mts","./vite.config.ts","./node_modules/@types/react/global.d.ts","./node_modules/csstype/index.d.ts","./node_modules/@types/prop-types/index.d.ts","./node_modules/@types/react/index.d.ts","./node_modules/@types/hoist-non-react-statics/index.d.ts","./node_modules/@types/json-schema/index.d.ts","./node_modules/@types/react-dom/index.d.ts","./node_modules/@types/styled-components/index.d.ts","./node_modules/@types/stylis/index.d.ts"],"fileIdsList":[[54,96,179],[54,96],[54,96,179,180,181,182,183],[54,96,179,181],[54,96,190],[54,93,96],[54,95,96],[54,96,101,131],[54,96,97,102,108,109,116,128,139],[54,96,97,98,108,116],[49,50,51,54,96],[54,96,99,140],[54,96,100,101,109,117],[54,96,101,128,136],[54,96,102,104,108,116],[54,95,96,103],[54,96,104,105],[54,96,108],[54,96,106,108],[54,95,96,108],[54,96,108,109,110,128,139],[54,96,108,109,110,123,128,131],[54,91,96,144],[54,91,96,104,108,111,116,128,139],[54,96,108,109,111,112,116,128,136,139],[54,96,111,113,128,136,139],[54,96,108,114],[54,96,115,139,144],[54,96,104,108,116,128],[54,96,117],[54,96,118],[54,95,96,119],[54,93,94,95,96,97,98,99,100,101,102,103,104,105,106,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145],[54,96,121],[54,96,122],[54,96,108,123,124],[54,96,123,125,140,142],[54,96,108,128,129,130,131],[54,96,128,130],[54,96,128,129],[54,96,131],[54,96,132],[54,93,96,128],[54,96,108,134,135],[54,96,134,135],[54,96,101,116,128,136],[54,96,137],[96],[52,53,54,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145],[54,96,116,138],[54,96,111,122,139],[54,96,101,140],[54,96,128,141],[54,96,115,142],[54,96,143],[54,96,101,108,110,119,128,139,142,144],[54,96,128,145],[54,96,187,188,189],[54,96,188,190,191],[54,96,178,184],[54,96,148,177],[54,96,147,148],[54,63,67,96,139],[54,63,96,128,139],[54,58,96],[54,60,63,96,136,139],[54,96,116,136],[54,96,146],[54,58,96,146],[54,60,63,96,116,139],[54,55,56,59,62,96,108,128,139],[54,63,70,96],[54,55,61,96],[54,63,84,85,96],[54,59,63,96,131,139,146],[54,84,96,146],[54,57,58,96,146],[54,63,96],[54,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,85,86,87,88,89,90,96],[54,63,78,96],[54,63,70,71,96],[54,61,63,71,72,96],[54,62,96],[54,55,58,63,96],[54,63,67,71,72,96],[54,67,96],[54,61,63,66,96,139],[54,55,60,63,70,96],[54,96,128],[54,58,63,84,96,144,146],[54,96,108,109,111,112,113,116,128,136,139,145,146,148,149,150,151,152,153,154,174,175,176,177],[54,96,150,151,152,153],[54,96,150,151,152],[54,96,170],[54,96,168,170],[54,96,159,167,168,169,171],[54,96,157],[54,96,160,165,170,173],[54,96,156,173],[54,96,160,161,164,165,166,173],[54,96,160,161,162,164,165,173],[54,96,157,158,159,160,161,165,166,167,169,170,171,173],[54,96,173],[54,96,155,157,158,159,160,161,162,164,165,166,167,168,169,170,171,172],[54,96,155,173],[54,96,160,162,163,165,166,173],[54,96,164,173],[54,96,165,166,170,173],[54,96,158,168],[54,96,150],[54,96,151],[54,96,148],[54,96,118,178,185]],"fileInfos":[{"version":"a7297ff837fcdf174a9524925966429eb8e5feecc2cc55cc06574e6b092c1eaa","impliedFormat":1},{"version":"44e584d4f6444f58791784f1d530875970993129442a847597db702a073ca68c","affectsGlobalScope":true,"impliedFormat":1},{"version":"45b7ab580deca34ae9729e97c13cfd999df04416a79116c3bfb483804f85ded4","impliedFormat":1},{"version":"3facaf05f0c5fc569c5649dd359892c98a85557e3e0c847964caeb67076f4d75","impliedFormat":1},{"version":"9a68c0c07ae2fa71b44384a839b7b8d81662a236d4b9ac30916718f7510b1b2d","impliedFormat":1},{"version":"5e1c4c362065a6b95ff952c0eab010f04dcd2c3494e813b493ecfd4fcb9fc0d8","impliedFormat":1},{"version":"68d73b4a11549f9c0b7d352d10e91e5dca8faa3322bfb77b661839c42b1ddec7","impliedFormat":1},{"version":"5efce4fc3c29ea84e8928f97adec086e3dc876365e0982cc8479a07954a3efd4","impliedFormat":1},{"version":"9e8ca8ed051c2697578c023d9c29d6df689a083561feba5c14aedee895853999","affectsGlobalScope":true,"impliedFormat":1},{"version":"80e18897e5884b6723488d4f5652167e7bb5024f946743134ecc4aa4ee731f89","affectsGlobalScope":true,"impliedFormat":1},{"version":"cd034f499c6cdca722b60c04b5b1b78e058487a7085a8e0d6fb50809947ee573","affectsGlobalScope":true,"impliedFormat":1},{"version":"6920e1448680767498a0b77c6a00a8e77d14d62c3da8967b171f1ddffa3c18e4","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc2df20b1bcdc8c2d34af4926e2c3ab15ffe1160a63e58b7e09833f616efff44","affectsGlobalScope":true,"impliedFormat":1},{"version":"515d0b7b9bea2e31ea4ec968e9edd2c39d3eebf4a2d5cbd04e88639819ae3b71","affectsGlobalScope":true,"impliedFormat":1},{"version":"45d8ccb3dfd57355eb29749919142d4321a0aa4df6acdfc54e30433d7176600a","affectsGlobalScope":true,"impliedFormat":1},{"version":"0dc1e7ceda9b8b9b455c3a2d67b0412feab00bd2f66656cd8850e8831b08b537","affectsGlobalScope":true,"impliedFormat":1},{"version":"ce691fb9e5c64efb9547083e4a34091bcbe5bdb41027e310ebba8f7d96a98671","affectsGlobalScope":true,"impliedFormat":1},{"version":"8d697a2a929a5fcb38b7a65594020fcef05ec1630804a33748829c5ff53640d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ff2a353abf8a80ee399af572debb8faab2d33ad38c4b4474cff7f26e7653b8d","affectsGlobalScope":true,"impliedFormat":1},{"version":"93495ff27b8746f55d19fcbcdbaccc99fd95f19d057aed1bd2c0cafe1335fbf0","affectsGlobalScope":true,"impliedFormat":1},{"version":"6fc23bb8c3965964be8c597310a2878b53a0306edb71d4b5a4dfe760186bcc01","affectsGlobalScope":true,"impliedFormat":1},{"version":"ea011c76963fb15ef1cdd7ce6a6808b46322c527de2077b6cfdf23ae6f5f9ec7","affectsGlobalScope":true,"impliedFormat":1},{"version":"38f0219c9e23c915ef9790ab1d680440d95419ad264816fa15009a8851e79119","affectsGlobalScope":true,"impliedFormat":1},{"version":"69ab18c3b76cd9b1be3d188eaf8bba06112ebbe2f47f6c322b5105a6fbc45a2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"4738f2420687fd85629c9efb470793bb753709c2379e5f85bc1815d875ceadcd","affectsGlobalScope":true,"impliedFormat":1},{"version":"2f11ff796926e0832f9ae148008138ad583bd181899ab7dd768a2666700b1893","affectsGlobalScope":true,"impliedFormat":1},{"version":"4de680d5bb41c17f7f68e0419412ca23c98d5749dcaaea1896172f06435891fc","affectsGlobalScope":true,"impliedFormat":1},{"version":"9fc46429fbe091ac5ad2608c657201eb68b6f1b8341bd6d670047d32ed0a88fa","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac9538681b19688c8eae65811b329d3744af679e0bdfa5d842d0e32524c73e1c","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a969edff4bd52585473d24995c5ef223f6652d6ef46193309b3921d65dd4376","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e9fbd7030c440b33d021da145d3232984c8bb7916f277e8ffd3dc2e3eae2bdb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811ec78f7fefcabbda4bfa93b3eb67d9ae166ef95f9bff989d964061cbf81a0c","affectsGlobalScope":true,"impliedFormat":1},{"version":"717937616a17072082152a2ef351cb51f98802fb4b2fdabd32399843875974ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"d7e7d9b7b50e5f22c915b525acc5a49a7a6584cf8f62d0569e557c5cfc4b2ac2","affectsGlobalScope":true,"impliedFormat":1},{"version":"71c37f4c9543f31dfced6c7840e068c5a5aacb7b89111a4364b1d5276b852557","affectsGlobalScope":true,"impliedFormat":1},{"version":"576711e016cf4f1804676043e6a0a5414252560eb57de9faceee34d79798c850","affectsGlobalScope":true,"impliedFormat":1},{"version":"89c1b1281ba7b8a96efc676b11b264de7a8374c5ea1e6617f11880a13fc56dc6","affectsGlobalScope":true,"impliedFormat":1},{"version":"74f7fa2d027d5b33eb0471c8e82a6c87216223181ec31247c357a3e8e2fddc5b","affectsGlobalScope":true,"impliedFormat":1},{"version":"1a94697425a99354df73d9c8291e2ecd4dddd370aed4023c2d6dee6cccb32666","affectsGlobalScope":true,"impliedFormat":1},{"version":"063600664504610fe3e99b717a1223f8b1900087fab0b4cad1496a114744f8df","affectsGlobalScope":true,"impliedFormat":1},{"version":"934019d7e3c81950f9a8426d093458b65d5aff2c7c1511233c0fd5b941e608ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"bf14a426dbbf1022d11bd08d6b8e709a2e9d246f0c6c1032f3b2edb9a902adbe","affectsGlobalScope":true,"impliedFormat":1},{"version":"e3f9fc0ec0b96a9e642f11eda09c0be83a61c7b336977f8b9fdb1e9788e925fe","affectsGlobalScope":true,"impliedFormat":1},{"version":"59fb2c069260b4ba00b5643b907ef5d5341b167e7d1dbf58dfd895658bda2867","affectsGlobalScope":true,"impliedFormat":1},{"version":"479553e3779be7d4f68e9f40cdb82d038e5ef7592010100410723ceced22a0f7","affectsGlobalScope":true,"impliedFormat":1},{"version":"368af93f74c9c932edd84c58883e736c9e3d53cec1fe24c0b0ff451f529ceab1","affectsGlobalScope":true,"impliedFormat":1},{"version":"33358442698bb565130f52ba79bfd3d4d484ac85fe33f3cb1759c54d18201393","affectsGlobalScope":true,"impliedFormat":1},{"version":"782dec38049b92d4e85c1585fbea5474a219c6984a35b004963b00beb1aab538","affectsGlobalScope":true,"impliedFormat":1},{"version":"70521b6ab0dcba37539e5303104f29b721bfb2940b2776da4cc818c07e1fefc1","affectsGlobalScope":true,"impliedFormat":1},{"version":"030e350db2525514580ed054f712ffb22d273e6bc7eddc1bb7eda1e0ba5d395e","affectsGlobalScope":true,"impliedFormat":1},{"version":"d153a11543fd884b596587ccd97aebbeed950b26933ee000f94009f1ab142848","affectsGlobalScope":true,"impliedFormat":1},{"version":"21d819c173c0cf7cc3ce57c3276e77fd9a8a01d35a06ad87158781515c9a438a","impliedFormat":1},{"version":"613b21ccdf3be6329d56e6caa13b258c842edf8377be7bc9f014ed14cdcfc308","affectsGlobalScope":true,"impliedFormat":1},{"version":"2d1319e6b5d0efd8c5eae07eb864a00102151e8b9afddd2d45db52e9aae002c4","affectsGlobalScope":true,"impliedFormat":1},{"version":"5929864ce17fba74232584d90cb721a89b7ad277220627cc97054ba15a98ea8f","impliedFormat":1},{"version":"24bd580b5743dc56402c440dc7f9a4f5d592ad7a419f25414d37a7bfe11e342b","impliedFormat":1},{"version":"25c8056edf4314820382a5fdb4bb7816999acdcb929c8f75e3f39473b87e85bc","impliedFormat":1},{"version":"c464d66b20788266e5353b48dc4aa6bc0dc4a707276df1e7152ab0c9ae21fad8","impliedFormat":1},{"version":"78d0d27c130d35c60b5e5566c9f1e5be77caf39804636bc1a40133919a949f21","impliedFormat":1},{"version":"c6fd2c5a395f2432786c9cb8deb870b9b0e8ff7e22c029954fabdd692bff6195","impliedFormat":1},{"version":"1d6e127068ea8e104a912e42fc0a110e2aa5a66a356a917a163e8cf9a65e4a75","impliedFormat":1},{"version":"5ded6427296cdf3b9542de4471d2aa8d3983671d4cac0f4bf9c637208d1ced43","impliedFormat":1},{"version":"6bdc71028db658243775263e93a7db2fd2abfce3ca569c3cca5aee6ed5eb186d","impliedFormat":1},{"version":"cadc8aced301244057c4e7e73fbcae534b0f5b12a37b150d80e5a45aa4bebcbd","impliedFormat":1},{"version":"385aab901643aa54e1c36f5ef3107913b10d1b5bb8cbcd933d4263b80a0d7f20","impliedFormat":1},{"version":"9670d44354bab9d9982eca21945686b5c24a3f893db73c0dae0fd74217a4c219","impliedFormat":1},{"version":"0b8a9268adaf4da35e7fa830c8981cfa22adbbe5b3f6f5ab91f6658899e657a7","impliedFormat":1},{"version":"11396ed8a44c02ab9798b7dca436009f866e8dae3c9c25e8c1fbc396880bf1bb","impliedFormat":1},{"version":"ba7bc87d01492633cb5a0e5da8a4a42a1c86270e7b3d2dea5d156828a84e4882","impliedFormat":1},{"version":"4893a895ea92c85345017a04ed427cbd6a1710453338df26881a6019432febdd","impliedFormat":1},{"version":"c21dc52e277bcfc75fac0436ccb75c204f9e1b3fa5e12729670910639f27343e","impliedFormat":1},{"version":"13f6f39e12b1518c6650bbb220c8985999020fe0f21d818e28f512b7771d00f9","impliedFormat":1},{"version":"9b5369969f6e7175740bf51223112ff209f94ba43ecd3bb09eefff9fd675624a","impliedFormat":1},{"version":"4fe9e626e7164748e8769bbf74b538e09607f07ed17c2f20af8d680ee49fc1da","impliedFormat":1},{"version":"24515859bc0b836719105bb6cc3d68255042a9f02a6022b3187948b204946bd2","impliedFormat":1},{"version":"ea0148f897b45a76544ae179784c95af1bd6721b8610af9ffa467a518a086a43","impliedFormat":1},{"version":"24c6a117721e606c9984335f71711877293a9651e44f59f3d21c1ea0856f9cc9","impliedFormat":1},{"version":"dd3273ead9fbde62a72949c97dbec2247ea08e0c6952e701a483d74ef92d6a17","impliedFormat":1},{"version":"405822be75ad3e4d162e07439bac80c6bcc6dbae1929e179cf467ec0b9ee4e2e","impliedFormat":1},{"version":"0db18c6e78ea846316c012478888f33c11ffadab9efd1cc8bcc12daded7a60b6","impliedFormat":1},{"version":"4d2b0eb911816f66abe4970898f97a2cfc902bcd743cbfa5017fad79f7ef90d8","impliedFormat":1},{"version":"bd0532fd6556073727d28da0edfd1736417a3f9f394877b6d5ef6ad88fba1d1a","impliedFormat":1},{"version":"89167d696a849fce5ca508032aabfe901c0868f833a8625d5a9c6e861ef935d2","impliedFormat":1},{"version":"e53a3c2a9f624d90f24bf4588aacd223e7bec1b9d0d479b68d2f4a9e6011147f","impliedFormat":1},{"version":"24b8685c62562f5d98615c5a0c1d05f297cf5065f15246edfe99e81ec4c0e011","impliedFormat":1},{"version":"93507c745e8f29090efb99399c3f77bec07db17acd75634249dc92f961573387","impliedFormat":1},{"version":"339dc5265ee5ed92e536a93a04c4ebbc2128f45eeec6ed29f379e0085283542c","impliedFormat":1},{"version":"4732aec92b20fb28c5fe9ad99521fb59974289ed1e45aecb282616202184064f","impliedFormat":1},{"version":"2e85db9e6fd73cfa3d7f28e0ab6b55417ea18931423bd47b409a96e4a169e8e6","impliedFormat":1},{"version":"c46e079fe54c76f95c67fb89081b3e399da2c7d109e7dca8e4b58d83e332e605","impliedFormat":1},{"version":"bf67d53d168abc1298888693338cb82854bdb2e69ef83f8a0092093c2d562107","impliedFormat":1},{"version":"81184fe8e67d78ac4e5374650f0892d547d665d77da2b2f544b5d84729c4a15d","affectsGlobalScope":true,"impliedFormat":1},{"version":"f52e8dacc97d71dcc96af29e49584353f9c54cb916d132e3e768d8b8129c928d","impliedFormat":1},{"version":"7394959e5a741b185456e1ef5d64599c36c60a323207450991e7a42e08911419","impliedFormat":1},{"version":"76103716ba397bbb61f9fa9c9090dca59f39f9047cb1352b2179c5d8e7f4e8d0","impliedFormat":1},{"version":"53eac70430b30089a3a1959d8306b0f9cfaf0de75224b68ef25243e0b5ad1ca3","affectsGlobalScope":true,"impliedFormat":1},{"version":"4314c7a11517e221f7296b46547dbc4df047115b182f544d072bdccffa57fc72","impliedFormat":1},{"version":"115971d64632ea4742b5b115fb64ed04bcaae2c3c342f13d9ba7e3f9ee39c4e7","impliedFormat":1},{"version":"c2510f124c0293ab80b1777c44d80f812b75612f297b9857406468c0f4dafe29","affectsGlobalScope":true,"impliedFormat":1},{"version":"a40826e8476694e90da94aa008283a7de50d1dafd37beada623863f1901cb7fb","impliedFormat":1},{"version":"a76037255d4e7af8b20d191a4d3ad13236fba352239d3d9d54868a98dbb222f5","affectsGlobalScope":true,"impliedFormat":1},{"version":"24642567d3729bcc545bacb65ee7c0db423400c7f1ef757cab25d05650064f98","impliedFormat":1},{"version":"e6f5a38687bebe43a4cef426b69d34373ef68be9a6b1538ec0a371e69f309354","impliedFormat":1},{"version":"a6bf63d17324010ca1fbf0389cab83f93389bb0b9a01dc8a346d092f65b3605f","impliedFormat":1},{"version":"e009777bef4b023a999b2e5b9a136ff2cde37dc3f77c744a02840f05b18be8ff","impliedFormat":1},{"version":"1e0d1f8b0adfa0b0330e028c7941b5a98c08b600efe7f14d2d2a00854fb2f393","impliedFormat":1},{"version":"ee1ee365d88c4c6c0c0a5a5701d66ebc27ccd0bcfcfaa482c6e2e7fe7b98edf7","affectsGlobalScope":true,"impliedFormat":1},{"version":"875928df2f3e9a3aed4019539a15d04ff6140a06df6cd1b2feb836d22a81eaca","affectsGlobalScope":true,"impliedFormat":1},{"version":"20b97c3368b1a63d2156deea35d03b125bb07908906eb35e0438042a3bbb3e71","impliedFormat":1},{"version":"f65eecc63138013d13fefea9092e83c3043cb52a5e351d22ea194e81021c1cd5","impliedFormat":1},{"version":"4617299caf33afef24b5e074e6d20ce8f510dd212cebd75884ef27c64457a77b","impliedFormat":1},{"version":"fa56be9b96f747e93b895d8dc2aa4fb9f0816743e6e2abb9d60705e88d4743a2","impliedFormat":1},{"version":"8257c55ff6bff6169142a35fce6811b511d857b4ae4f522cdb6ce20fd2116b2c","impliedFormat":1},{"version":"6d386bc0d7f3afa1d401afc3e00ed6b09205a354a9795196caed937494a713e6","impliedFormat":1},{"version":"5990bd8b9bc91f6e90269685ff5a154eeda52c18238f89f0101fb4d08cd80476","affectsGlobalScope":true,"impliedFormat":1},{"version":"94c4187083503a74f4544503b5a30e2bd7af0032dc739b0c9a7ce87f8bddc7b9","impliedFormat":1},{"version":"b1b6ee0d012aeebe11d776a155d8979730440082797695fc8e2a5c326285678f","impliedFormat":1},{"version":"45875bcae57270aeb3ebc73a5e3fb4c7b9d91d6b045f107c1d8513c28ece71c0","impliedFormat":1},{"version":"3eb62baae4df08c9173e6903d3ca45942ccec8c3659b0565684a75f3292cffbb","affectsGlobalScope":true,"impliedFormat":1},{"version":"6f6abdaf8764ef01a552a958f45e795b5e79153b87ddad3af5264b86d2681b72","affectsGlobalScope":true,"impliedFormat":1},{"version":"3f16a7e4deafa527ed9995a772bb380eb7d3c2c0fd4ae178c5263ed18394db2c","impliedFormat":1},{"version":"c6b4e0a02545304935ecbf7de7a8e056a31bb50939b5b321c9d50a405b5a0bba","impliedFormat":1},{"version":"fab29e6d649aa074a6b91e3bdf2bff484934a46067f6ee97a30fcd9762ae2213","impliedFormat":1},{"version":"8145e07aad6da5f23f2fcd8c8e4c5c13fb26ee986a79d03b0829b8fce152d8b2","impliedFormat":1},{"version":"e1120271ebbc9952fdc7b2dd3e145560e52e06956345e6fdf91d70ca4886464f","impliedFormat":1},{"version":"15c5e91b5f08be34a78e3d976179bf5b7a9cc28dc0ef1ffebffeb3c7812a2dca","impliedFormat":1},{"version":"a8f06c2382a30b7cb89ad2dfc48fc3b2b490f3dafcd839dadc008e4e5d57031d","impliedFormat":1},{"version":"553870e516f8c772b89f3820576152ebc70181d7994d96917bb943e37da7f8a7","impliedFormat":1},{"version":"37ba7b45141a45ce6e80e66f2a96c8a5ab1bcef0fc2d0f56bb58df96ec67e972","impliedFormat":1},{"version":"93452d394fdd1dc551ec62f5042366f011a00d342d36d50793b3529bfc9bd633","impliedFormat":1},{"version":"745c4240220559bd340c8aeb6e3c5270a709d3565e934dc22a69c304703956bc","affectsGlobalScope":true,"impliedFormat":1},{"version":"2754d8221d77c7b382096651925eb476f1066b3348da4b73fe71ced7801edada","impliedFormat":1},{"version":"918d3b03a75858dcd5dbb275f19448b6b9a222aa8fc8471aca38c28a32ecb40f","affectsGlobalScope":true,"impliedFormat":1},{"version":"bef91efa0baea5d0e0f0f27b574a8bc100ce62a6d7e70220a0d58af6acab5e89","affectsGlobalScope":true,"impliedFormat":1},{"version":"282fd2a1268a25345b830497b4b7bf5037a5e04f6a9c44c840cb605e19fea841","impliedFormat":1},{"version":"5360a27d3ebca11b224d7d3e38e3e2c63f8290cb1fcf6c3610401898f8e68bc3","impliedFormat":1},{"version":"66ba1b2c3e3a3644a1011cd530fb444a96b1b2dfe2f5e837a002d41a1a799e60","impliedFormat":1},{"version":"7e514f5b852fdbc166b539fdd1f4e9114f29911592a5eb10a94bb3a13ccac3c4","impliedFormat":1},{"version":"7d6ff413e198d25639f9f01f16673e7df4e4bd2875a42455afd4ecc02ef156da","affectsGlobalScope":true,"impliedFormat":1},{"version":"6bd91a2a356600dee28eb0438082d0799a18a974a6537c4410a796bab749813c","affectsGlobalScope":true,"impliedFormat":1},{"version":"a5c09990a37469b0311a92ce8feeb8682e83918723aedbd445bd7a0f510eaaa3","impliedFormat":1},{"version":"ae25afbbf1ed5df63a177d67b9048bf7481067f1b8dc9c39212e59db94fc9fc6","impliedFormat":1},{"version":"ac5ed35e649cdd8143131964336ab9076937fa91802ec760b3ea63b59175c10a","impliedFormat":1},{"version":"89332fc3cc945c8df2bc0aead55230430a0dabd3277c39a43315e00330de97a6","affectsGlobalScope":true,"impliedFormat":1},{"version":"78dc0513cc4f1642906b74dda42146bcbd9df7401717d6e89ea6d72d12ecb539","impliedFormat":1},{"version":"171fd8807643c46a9d17e843959abdf10480d57d60d38d061fb44a4c8d4a8cc4","impliedFormat":1},{"version":"785b9d575b49124ce01b46f5b9402157c7611e6532effa562ac6aebec0074dfc","impliedFormat":1},{"version":"207bee54c60bfe26feca8ef79922f66fd091092a9d24aa12daea1b340fa7e0ee","affectsGlobalScope":true,"impliedFormat":1},{"version":"a660aa95476042d3fdcc1343cf6bb8fdf24772d31712b1db321c5a4dcc325434","impliedFormat":1},{"version":"282f98006ed7fa9bb2cd9bdbe2524595cfc4bcd58a0bb3232e4519f2138df811","impliedFormat":1},{"version":"6222e987b58abfe92597e1273ad7233626285bc2d78409d4a7b113d81a83496b","impliedFormat":1},{"version":"cbe726263ae9a7bf32352380f7e8ab66ee25b3457137e316929269c19e18a2be","impliedFormat":1},{"version":"8b96046bf5fb0a815cba6b0880d9f97b7f3a93cf187e8dcfe8e2792e97f38f87","impliedFormat":99},{"version":"bacf2c84cf448b2cd02c717ad46c3d7fd530e0c91282888c923ad64810a4d511","affectsGlobalScope":true,"impliedFormat":1},{"version":"402e5c534fb2b85fa771170595db3ac0dd532112c8fa44fc23f233bc6967488b","impliedFormat":1},{"version":"8885cf05f3e2abf117590bbb951dcf6359e3e5ac462af1c901cfd24c6a6472e2","impliedFormat":1},{"version":"4d979e3c12ffb6497d2b1dc5613130196d986fff764c4526360c0716a162e7e7","impliedFormat":1},{"version":"e61df3640a38d535fd4bc9f4a53aef17c296b58dc4b6394fd576b808dd2fe5e6","impliedFormat":1},{"version":"80781460eca408fe8d2937d9fdbbb780d6aac35f549621e6200c9bee1da5b8fe","impliedFormat":1},{"version":"4719c209b9c00b579553859407a7e5dcfaa1c472994bd62aa5dd3cc0757eb077","impliedFormat":1},{"version":"7ec359bbc29b69d4063fe7dad0baaf35f1856f914db16b3f4f6e3e1bca4099fa","impliedFormat":1},{"version":"b9261ac3e9944d3d72c5ee4cf888ad35d9743a5563405c6963c4e43ee3708ca4","impliedFormat":1},{"version":"c84fd54e8400def0d1ef1569cafd02e9f39a622df9fa69b57ccc82128856b916","impliedFormat":1},{"version":"a022503e75d6953d0e82c2c564508a5c7f8556fad5d7f971372d2d40479e4034","impliedFormat":1},{"version":"2ed6489ef46eb61442d067c08e87e3db501c0bfb2837eee4041a27bf3e792bb0","impliedFormat":1},{"version":"644491cde678bd462bb922c1d0cfab8f17d626b195ccb7f008612dc31f445d2d","impliedFormat":1},{"version":"d60fe6d59d4e19ecc65359490b8535e359ca4b760d2cdb56897ca75d09d41ba3","impliedFormat":1},{"version":"f45a2a8b1777ecb50ed65e1a04bb899d4b676529b7921bd5d69b08573a00c832","impliedFormat":1},{"version":"774b783046ba3d473948132d28a69f52a295b2f378f2939304118ba571b1355e","impliedFormat":1},{"version":"b5734e05c787a40e4f9efe71f16683c5f7dc3bdb0de7c04440c855bd000f8fa7","impliedFormat":1},{"version":"14ba97f0907144771331e1349fdccb5a13526eba0647e6b447e572376d811b6f","impliedFormat":1},{"version":"2a771d907aebf9391ac1f50e4ad37952943515eeea0dcc7e78aa08f508294668","impliedFormat":1},{"version":"7165050eddaed878c2d2cd3cafcaf171072ac39e586a048c0603712b5555f536","impliedFormat":1},{"version":"26e629be9bbd94ea1d465af83ce5a3306890520695f07be6eb016f8d734d02be","impliedFormat":99},{"version":"82e687ebd99518bc63ea04b0c3810fb6e50aa6942decd0ca6f7a56d9b9a212a6","impliedFormat":99},{"version":"7f698624bbbb060ece7c0e51b7236520ebada74b747d7523c7df376453ed6fea","impliedFormat":1},{"version":"8f07f2b6514744ac96e51d7cb8518c0f4de319471237ea10cf688b8d0e9d0225","impliedFormat":1},{"version":"9ae0ca65717af0d3b554a26fd333ad9c78ad3910ad4b22140ff02acb63076927","impliedFormat":99},{"version":"03f1d83d61696326ea29c8a1c15cbaccf61e92598d53f2ccae06078531f42448","impliedFormat":1},{"version":"2c8e55457aaf4902941dfdba4061935922e8ee6e120539c9801cd7b400fae050","impliedFormat":1},{"version":"3a9313fe5ace558b8b18e85f931da10b259e738775f411c061e5f15787b138eb","impliedFormat":1},{"version":"670a76db379b27c8ff42f1ba927828a22862e2ab0b0908e38b671f0e912cc5ed","impliedFormat":1},{"version":"9e0cf651e8e2c5b9bebbabdff2f7c6f8cedd91b1d9afcc0a854cdff053a88f1b","impliedFormat":1},{"version":"069bebfee29864e3955378107e243508b163e77ab10de6a5ee03ae06939f0bb9","impliedFormat":1},{"version":"f5e8546cfe500116aba8a6cb7ee171774b14a6db30d4bcd6e0aa5073e919e739","impliedFormat":99},{"version":"ce617e4e4fa2d6efaaf24906279a0cbfd3462a4b946af37b40a4577167069bf3","signature":"4b96dd19fd2949d28ce80e913412b0026dc421e5bf6c31d87c7b5eb11b5753b4"},{"version":"36a2e4c9a67439aca5f91bb304611d5ae6e20d420503e96c230cf8fcdc948d94","affectsGlobalScope":true,"impliedFormat":1},{"version":"8a8eb4ebffd85e589a1cc7c178e291626c359543403d58c9cd22b81fab5b1fb9","impliedFormat":1},{"version":"ed6b820c54de95b2510bb673490d61c7f2187f532a339d8d04981645a918961f","impliedFormat":1},{"version":"aa17748c522bd586f8712b1a308ea23af59c309b2fd278f6d4f406647c72e659","affectsGlobalScope":true,"impliedFormat":1},{"version":"a7ca2a9e61286d74bc37fe64e5dcd7da04607f7f5432f7c651b47b573fc76cef","impliedFormat":1},{"version":"f3d8c757e148ad968f0d98697987db363070abada5f503da3c06aefd9d4248c1","impliedFormat":1},{"version":"17ed71200119e86ccef2d96b73b02ce8854b76ad6bd21b5021d4269bec527b5f","impliedFormat":1},{"version":"cfb95dbcdee02402fb9373c62ec4ba735b5479e5d879f39e7c23fe1d58186e31","affectsGlobalScope":true,"impliedFormat":1},{"version":"480ffa66827143d60025514f0d979f7bc790024821e5ecc12967ce13a7e3e08a","impliedFormat":1}],"root":[186],"options":{"allowSyntheticDefaultImports":true,"composite":true,"module":99,"skipLibCheck":true,"strict":true},"referencedMap":[[181,1],[179,2],[184,3],[180,1],[182,4],[183,1],[147,2],[191,5],[192,2],[93,6],[94,6],[95,7],[96,8],[97,9],[98,10],[49,2],[52,11],[50,2],[51,2],[99,12],[100,13],[101,14],[102,15],[103,16],[104,17],[105,17],[107,18],[106,19],[108,20],[109,21],[110,22],[92,23],[111,24],[112,25],[113,26],[114,27],[115,28],[116,29],[117,30],[118,31],[119,32],[120,33],[121,34],[122,35],[123,36],[124,36],[125,37],[126,2],[127,2],[128,38],[130,39],[129,40],[131,41],[132,42],[133,43],[134,44],[135,45],[136,46],[137,47],[54,48],[53,2],[146,49],[138,50],[139,51],[140,52],[141,53],[142,54],[143,55],[144,56],[145,57],[189,2],[193,5],[187,2],[190,58],[194,59],[195,2],[185,60],[188,2],[154,2],[149,61],[148,62],[155,2],[1,2],[47,2],[48,2],[9,2],[13,2],[12,2],[3,2],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[4,2],[22,2],[5,2],[23,2],[27,2],[24,2],[25,2],[26,2],[28,2],[29,2],[30,2],[6,2],[31,2],[32,2],[33,2],[34,2],[7,2],[38,2],[35,2],[36,2],[37,2],[39,2],[8,2],[40,2],[45,2],[46,2],[41,2],[42,2],[43,2],[44,2],[2,2],[11,2],[10,2],[70,63],[80,64],[69,63],[90,65],[61,66],[60,67],[89,68],[83,69],[88,70],[63,71],[77,72],[62,73],[86,74],[58,75],[57,68],[87,76],[59,77],[64,78],[65,2],[68,78],[55,2],[91,79],[81,80],[72,81],[73,82],[75,83],[71,84],[74,85],[84,68],[66,86],[67,87],[76,88],[56,89],[79,80],[78,78],[82,2],[85,90],[178,91],[175,92],[153,93],[171,94],[169,95],[170,96],[158,97],[159,95],[166,98],[157,99],[162,100],[172,2],[163,101],[168,102],[174,103],[173,104],[156,105],[164,106],[165,107],[160,108],[167,94],[161,109],[151,110],[150,2],[152,111],[176,2],[177,112],[186,113]],"latestChangedDtsFile":"./vite.config.d.ts","version":"5.6.3"}
```

# tsconfig.tsbuildinfo

```tsbuildinfo
{"root":["./src/vite-env.d.ts","./src/components/index.ts","./src/components/navbar/navbar.styles.ts","./src/components/navbar/index.ts","./src/data/mockdata.ts","./src/pages/home/home.styles.ts","./src/pages/home/index.ts","./src/styles/globalstyles-sc.ts","./src/styles/globalstyles.ts","./src/styles/styled.d.ts","./src/styles/tailwind.config.ts","./src/styles/theme-sc.ts","./src/styles/theme.ts","./src/types/global.d.ts","./src/types/images.d.ts","./src/types/navigation.ts","./src/types/paths.d.ts","./src/types/styled.d.ts","./src/app.tsx","./src/main.tsx","./src/components/background.tsx","./src/components/imagetest.tsx","./src/components/testtailwind.tsx","./src/components/animations/animatedtext.tsx","./src/components/animations/gearloader.tsx","./src/components/audioplayer/audioplayer.tsx","./src/components/bulkimagesloader/bulkimageloader-b4logo.tsx","./src/components/bulkimagesloader/bulkimageloader.tsx","./src/components/circularloader/circularloader.tsx","./src/components/imageloader/imageloader.tsx","./src/components/navbar/navbar.tsx","./src/components/sound/audioplayer.tsx","./src/components/sound/soundplayer.tsx","./src/pages/bulkloading/bulkloading.tsx","./src/pages/home/home.tsx","./src/pages/loader/loader.tsx","./src/pages/mashmediastudio/mashmediastudio.tsx","./src/styles/themeprovider.tsx"],"errors":true,"version":"5.6.3"}
```

# vite.config.d.ts

```ts
declare const _default: import("vite").UserConfig;
export default _default;

```

# vite.config.js

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@data': path.resolve(__dirname, './src/data'),
        },
    },
});

```

# vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [
      react({
         babel: {
            plugins: [
               [
                  "babel-plugin-styled-components",
                  'styled-components',
                  {
                     displayName: true,
                     fileName: true,
                     meaninglessFileNames: ["index", "styles"],
                     ssr: false
                  }
               ]
            ]
         }
      })
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
         '@components': path.resolve(__dirname, './src/components'),
         '@pages': path.resolve(__dirname, './src/pages'),
         '@styles': path.resolve(__dirname, './src/styles'),
         '@data': path.resolve(__dirname, './src/data'),
      },
   },
});
```

