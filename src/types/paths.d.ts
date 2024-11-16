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