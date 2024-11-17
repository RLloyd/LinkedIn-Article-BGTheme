import logo from '@/assets/GD-Fusion-logo.png';
import { NavigationData } from '../types/navigation';

export const navigationData: NavigationData = {
   logo: {
      image: logo,
      alt: 'GonzalesDesign Fusion Logo'
   },
   menuItems: {
      left: [
         { label: 'Home', path: 'https://www.rlloydgonzales.com', isExternal: true },
         { label: 'MediaMash Studio', path: '/mediamash-studio' },
         { label: 'DigitalOne', path: '/digitalone' }
       ],
       right: [
         { label: 'Zenmonics', path: '/zenmonics' },
         { label: 'Styleguide', path: '/styleguide' },
         { label: 'Profile', path: '/profile' }
       ]
   }
};