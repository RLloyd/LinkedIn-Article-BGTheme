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
