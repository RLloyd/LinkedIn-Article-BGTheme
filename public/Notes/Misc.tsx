// Remove unused audioRef
const ImageLoader: React.FC<ImageLoaderProps> = ({
   src,
   alt,
   mode = "light",
   className
 }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [progress, setProgress] = useState(0);
   const [showPoem, setShowPoem] = useState(false);
   const [startSlideAnimation, setStartSlideAnimation] = useState(false);
   const [hasError, setHasError] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);

   // Remove unused audioRef
   const audioContextRef = useRef<AudioContext | null>(null);
   const sourceRef = useRef<AudioBufferSourceNode | null>(null);
   const gainNodeRef = useRef<GainNode | null>(null);
   const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

   // Initialize WebAudio context with reload handling
   useEffect(() => {
     const initAudioContext = async () => {
       try {
         // Close any existing context
         if (audioContextRef.current) {
           await audioContextRef.current.close();
         }

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

     // Cleanup function
     return () => {
       if (sourceRef.current) {
         sourceRef.current.stop();
         sourceRef.current.disconnect();
       }
       if (audioContextRef.current) {
         audioContextRef.current.close();
       }
     };
   }, []); // Empty dependency array to only run on mount

   // Modified playSound function without unused isAutoplay parameter
   const playSound = useCallback(async () => {
     if (!audioContextRef.current || !audioBuffer || !gainNodeRef.current) return;

     try {
       // Resume context if suspended
       if (audioContextRef.current.state === 'suspended') {
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
       gainNodeRef.current.gain.linearRampToValueAtTime(
         0.3,
         audioContextRef.current.currentTime + 1
       );

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
   }, [audioBuffer]);

   // Add reload detection and auto-play
   useEffect(() => {
     const handleReload = () => {
       if (document.visibilityState === 'visible') {
         const runAnimationSequence = async () => {
           await new Promise(resolve => setTimeout(resolve, 500));
           playSound();
         };
         runAnimationSequence();
       }
     };

     document.addEventListener('visibilitychange', handleReload);
     return () => {
       document.removeEventListener('visibilitychange', handleReload);
     };
   }, [playSound]);

   // Initialize animation and first play
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

           await new Promise(resolve => setTimeout(resolve, 500));
           setShowPoem(true);

           await new Promise(resolve => setTimeout(resolve, 1000));
           setStartSlideAnimation(true);

           // Play sound after animation
           await new Promise(resolve => setTimeout(resolve, 800));
           playSound();
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
     };
   }, [src, playSound]);

   // Simplified handlePlayClick without passing unused parameter
   const handlePlayClick = () => {
     playSound();
   };

   // Rest of the component remains the same...