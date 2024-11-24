// src/styles/styled.d.ts
import 'styled-components';
import { ThemeInterface } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

// // src/styles/styled.d.ts
// import 'styled-components';
// import type { ThemeInterface } from './theme';

// declare module 'styled-components' {
//   // We need to add at least one property to avoid the "no members" warning
//   export interface DefaultTheme extends ThemeInterface {
//     _brand: 'themed'; // This is a phantom type to make TypeScript happy
//   }
// }

// // // src/styles/styled.d.ts
// // import 'styled-components';
// // import { ThemeInterface } from './theme';

// // declare module 'styled-components' {
// //   export interface DefaultTheme extends ThemeInterface {}
// // }

// // // // src/styles/styled.d.ts
// // // import 'styled-components';
// // // import { ThemeInterface } from './theme';

// // // declare module 'styled-components' {
// // //   export interface DefaultTheme extends ThemeInterface {
// // //     typography: Typography;
// // //     error: ErrorStyles;
// // //   }
// // // }

