# To Do


## Component: NavBar
### Date: Nov. 24, 2024
- Fix the Mobile menu: hide mobile menu when screen goes larger than mobile size
- Home button menu open _blank page. Shouldn't!


## Component: ImageLoader, LoadingOverlay
### Date: Nov. 27, 2024
- Image responsiveness
   - Keep the width of 1020px on large screen
   - Fix the spacing between the image and the poem on sn=mall screens
- Loader color theming : comply with the existing color themes
- Loader background color is black in dark mode

## Component: ColorPalette
### Date: Nov. 28, 2024
- Image responsiveness

## Component: All affected
### Date: Nov. 29, 2024
- Source control: Changes/Discard all changes
- npx ai-digest : Created a new codebase for a new chat

## Project: All components integration
#### Date: Nov. 29, 2024
### Troubleshooting Light/Dark Mode Switch
- Light & Dark mode switch not working
   - Copy & paste App.tsx & Navbar.tsx code
   - I see the issue. In the Navbar component, you're not using the toggleTheme and isDarkTheme props that are being passed down. Let's fix that. Here's the corrected Navbar component:
   - ✅ Fixed!
<!--================================================================-->
### Implement Reusable Draggable Control Widget
- I need the DraggableControlWidget to work accross all the different pages
 - Created a new SharedControlWidget.tsx and update App.tsx
 - ✅ Fixed!
<!--================================================================-->
### Fix Home menu item to use internal navigation
- Home button is opening external link
 - In /src/components/Navbar/Navbar.tsx, the renderMenuItem function needs to be fixed to correctly handle internal vs external links.
 - ✅ Fixed!
<!--================================================================-->
### Add Minimize & Maximize button for the SharedControlWidget
- To be able to get the widget out of the way we should be able to minimize it.
<!--================================================================-->
### Hard reload brakes loader
- When doing a browser hard reload the percentages goes awry and the sequence of animation is out of synch.
- It continues on the animation while the image is still loading. It should wait for the image
  to finish loading before starting the animation.
- Once loaded the Reload button works fine
- It also takes time to load when hard reloading
<!--================================================================-->
### Loader has a black background in Darkmode
- Go to dark mode, Reload page using widget, the background goes black covering
  the Navbar, Widget and the image background, the loader continue to calculate.
- Needs to show the dark image backgrpound instead of just black during loading
<!--================================================================-->
### Miscellaneous manual fixes
- PoemEverlay width:97% instead of 100% : ✅ Fixed!
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
- Home opens a new window. Shouldn't!
- Play a Whale sound after animation is not working. This can wait.
- Loader color theme needs work. Comply to themes
- Fonts in Color Palette is OFF



























<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

/* Base styles */
body {
  font-family: 'Libre Baskerville', serif;
  line-height: 1.8;
  color: #2D3748;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: #FFFDF7;
}

/* Typography scale */
h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #1A202C;
  letter-spacing: -0.02em;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.875rem;
  line-height: 1.3;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #2D3748;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #4A5568;
}

/* Paragraphs and lists */
p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Code blocks */
code {
  font-family: 'JetBrains Mono', Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 0.9em;
  background-color: #F7FAFC;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  border: 1px solid #E2E8F0;
}

pre {
  background-color: #F7FAFC;
  padding: 1.5rem;
  border-radius: 6px;
  overflow-x: auto;
  border: 1px solid #E2E8F0;
  margin: 1.5rem 0;
}

pre code {
  border: none;
  padding: 0;
}

/* Links */
a {
  color: #4A90E2;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

a:hover {
  border-bottom-color: currentColor;
}

/* Blockquotes */
blockquote {
  font-style: italic;
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  border-left: 3px solid #CBD5E0;
  color: #4A5568;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #E2E8F0;
  text-align: left;
}

th {
  background-color: #F7FAFC;
  font-weight: 700;
}

/* Emphasis and strong */
em {
  font-style: italic;
}

strong {
  font-weight: 700;
  color: #1A202C;
}

/* Meta information */
.meta {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 2rem;
}

/* Feature list checkmarks */
.features li::before {
  content: "✓";
  color: #48BB78;
  font-weight: bold;
  display: inline-block;
  width: 1.5em;
  margin-left: -1.5em;
}

/* Command line prompts */
.command {
  display: block;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #2D3748;
  color: #FFFFFF;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
}

.command::before {
  content: "$ ";
  color: #A0AEC0;
}
</style>

