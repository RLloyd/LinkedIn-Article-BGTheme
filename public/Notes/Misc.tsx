GD-Articles-2025@0.0.0 build
> tsc -b && vite build

src/components/BulkImagesLoader/BulkImageLoader-b4Logo.tsx:163:11 - error TS6133: 'imageLoadProgress' is declared but its value is never read.

163    const [imageLoadProgress, setImageLoadProgress] = useState<number[]>(
              ~~~~~~~~~~~~~~~~~

src/components/BulkImagesLoader/BulkImageLoader-b4Logo.tsx:230:10 - error TS6133: 'mounted' is declared but its value is never read.

230      let mounted = true;
             ~~~~~~~

src/components/BulkImagesLoader/BulkImageLoader.tsx:163:11 - error TS6133: 'imageLoadProgress' is declared but its value is never read.

163    const [imageLoadProgress, setImageLoadProgress] = useState<number[]>(
              ~~~~~~~~~~~~~~~~~

src/components/BulkImagesLoader/BulkImageLoader.tsx:230:10 - error TS6133: 'mounted' is declared but its value is never read.

230      let mounted = true;
             ~~~~~~~

src/components/ExampleComponent.tsx:2:1 - error TS6133: 'React' is declared but its value is never read.

2 import React from 'react'
  ~~~~~~~~~~~~~~~~~~~~~~~~~

src/components/Navbar/Navbar.styles.ts:28:52 - error TS2551: Property 'navBackground' does not exist on type 'ColorPalette'. Did you mean 'background'?

28    background-color: ${({ theme }) => theme.colors.navBackground};
                                                      ~~~~~~~~~~~~~

  src/styles/theme.ts:26:3
    26   background: {
         ~~~~~~~~~~
    'background' is declared here.

src/components/Navbar/Navbar.styles.ts:172:51 - error TS2551: Property 'navBackground' does not exist on type 'ColorPalette'. Did you mean 'background'?

172   background-color: ${({ theme }) => theme.colors.navBackground};
                                                      ~~~~~~~~~~~~~

  src/styles/theme.ts:26:3
    26   background: {
         ~~~~~~~~~~
    'background' is declared here.

src/components/Sound/AudioPlayer.tsx:136:12 - error TS18047: 'audioContextRef.current' is possibly 'null'.

136        if (audioContextRef.current.state === 'suspended') {
               ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/AudioPlayer.tsx:138:16 - error TS18047: 'audioContextRef.current' is possibly 'null'.

138          await audioContextRef.current.resume();
                   ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/AudioPlayer.tsx:143:28 - error TS18047: 'audioContextRef.current' is possibly 'null'.

143        sourceRef.current = audioContextRef.current.createBufferSource();
                               ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/AudioPlayer.tsx:148:28 - error TS18047: 'audioContextRef.current' is possibly 'null'.

148        const currentTime = audioContextRef.current.currentTime;
                               ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/SoundPlayer.tsx:136:12 - error TS18047: 'audioContextRef.current' is possibly 'null'.

136        if (audioContextRef.current.state === 'suspended') {
               ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/SoundPlayer.tsx:138:16 - error TS18047: 'audioContextRef.current' is possibly 'null'.

138          await audioContextRef.current.resume();
                   ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/SoundPlayer.tsx:143:28 - error TS18047: 'audioContextRef.current' is possibly 'null'.

143        sourceRef.current = audioContextRef.current.createBufferSource();
                               ~~~~~~~~~~~~~~~~~~~~~~~

src/components/Sound/SoundPlayer.tsx:148:28 - error TS18047: 'audioContextRef.current' is possibly 'null'.

148        const currentTime = audioContextRef.current.currentTime;
                               ~~~~~~~~~~~~~~~~~~~~~~~

src/components/TestTailwind.tsx:2:1 - error TS6133: 'React' is declared but its value is never read.

2 import React from 'react';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~

src/pages/Home/Home.tsx:17:68 - error TS2322: Type '{ src: any; alt: string; mode: "light"; soundSrc: any; }' is not assignable to type 'IntrinsicAttributes & ImageLoaderProps'.
  Property 'soundSrc' does not exist on type 'IntrinsicAttributes & ImageLoaderProps'.

17     <ImageLoader src={whale} alt="Whale illustration" mode="light" soundSrc={whaleSound} />
                                                                      ~~~~~~~~

src/pages/Loader/Loader.tsx:1:1 - error TS6133: 'React' is declared but its value is never read.

1 import React from 'react'
  ~~~~~~~~~~~~~~~~~~~~~~~~~

src/pages/MashMediaStudio/MashMediaStudio.tsx:120:9 - error TS6133: 'mashMediaImages' is declared but its value is never read.

120   const mashMediaImages: ImageInfo[] = [
            ~~~~~~~~~~~~~~~

src/pages/MashMediaStudio/MashMediaStudio.tsx:120:26 - error TS2304: Cannot find name 'ImageInfo'.

120   const mashMediaImages: ImageInfo[] = [
                             ~~~~~~~~~

src/styles/tailwind.config.ts:2:1 - error TS6133: 'Theme' is declared but its value is never read.

2 import type { Theme } from './theme';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/styles/ThemeProvider.tsx:4:33 - error TS2305: Module '"./theme"' has no exported member 'ThemeInterface'.

4 import { lightTheme, darkTheme, ThemeInterface } from './theme';
                                  ~~~~~~~~~~~~~~

src/styles/ThemeProvider.tsx:4:33 - error TS6133: 'ThemeInterface' is declared but its value is never read.

4 import { lightTheme, darkTheme, ThemeInterface } from './theme';
                                  ~~~~~~~~~~~~~~


Found 23 errors.