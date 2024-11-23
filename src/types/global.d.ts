interface Window {
   webkitAudioContext: typeof AudioContext;
 }

 declare class webkitAudioContext extends AudioContext {
   constructor();
 }