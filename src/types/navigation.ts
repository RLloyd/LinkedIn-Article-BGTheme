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
