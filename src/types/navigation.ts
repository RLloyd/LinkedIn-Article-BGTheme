// src/types/navigation.ts
export interface NavigationItem {
   label: string;
   path: string;
   isExternal?: boolean;
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