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