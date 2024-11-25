const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, mode = "light", className }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [progress, setProgress] = useState(0);
   const [showPoem, setShowPoem] = useState(false);
   const [startSlideAnimation, setStartSlideAnimation] = useState(false);

   const handleProgressChange = useCallback((newProgress: number) => {
     setProgress(newProgress);
   }, []);

   const handleLoadComplete = useCallback(() => {
     // Start the animation sequence
     setIsLoading(false);  // This will hide the loader

     setTimeout(() => {
       setShowPoem(true);
       setTimeout(() => {
         setStartSlideAnimation(true);
       }, 1000);
     }, 500);
   }, []);

   const handleReload = useCallback(() => {
     // Reset all states
     setIsLoading(true);
     setProgress(0);
     setShowPoem(false);
     setStartSlideAnimation(false);

     // Force image reload
     const timestamp = new Date().getTime();
     const imageUrl = `${src}?t=${timestamp}`;

     const img = new Image();
     img.src = imageUrl;
   }, [src]);

   return (
     <Container className={className}>
       <NetworkThrottle
         onProgressChange={handleProgressChange}
         onLoadComplete={handleLoadComplete}
         onReload={handleReload}
       >
         <ContentWrapper>
           <StyledImage
             src={src}
             alt={alt}
             initial={{ opacity: 0, y: 0, height: 550 }}
             animate={{
               opacity: isLoading ? 0 : 1,
               y: startSlideAnimation ? -210 : 0,
               height: startSlideAnimation ? 220 : 550,
             }}
             transition={{
               opacity: { duration: 0.5 },
               y: { duration: 1.2, ease: "easeOut" },
               height: {
                 duration: 2.2,
                 ease: "easeOut",
                 delay: 1.2
               }
             }}
           />

           {isLoading && (
             <LoadingOverlay progress={progress} mode={mode} />
           )}

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
       </NetworkThrottle>
     </Container>
   );
 };