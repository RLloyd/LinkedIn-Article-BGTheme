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
      // { label: 'DigitalOne', path: '/digitalone' }
      // { label: 'DigitalOneX', path: '/colorpalette' }
      // { label: 'DigitalOne', path: '/digitalone/colorpalette' }
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