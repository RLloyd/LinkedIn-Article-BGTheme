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

# AudioPlayer Component Documentation
Version 1.0.0 | Last Updated: November 23, 2024

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Props](#props)
5. [Features](#features)
6. [Accessibility](#accessibility)
7. [Events & Callbacks](#events--callbacks)
8. [Styling](#styling)
9. [Browser Support](#browser-support)
10. [Troubleshooting](#troubleshooting)
11. [Examples](#examples)
12. [API Reference](#api-reference)

## Overview

The AudioPlayer is a modern, feature-rich React component for playing audio content. Built with TypeScript and styled with Tailwind CSS, it provides a comprehensive solution for audio playback with advanced features like speed control, download capabilities, and full accessibility support.

### Key Features
- Full playback controls
- Volume management with mute toggle
- Playback speed adjustment
- Progress tracking with seek functionality
- Download capability
- Mobile-responsive design
- Accessibility compliance
- Comprehensive logging system

## Installation

```bash
# If using npm
npm install @your-org/audio-player

# If using yarn
yarn add @your-org/audio-player
```

Required peer dependencies:
- React 16.8+
- Tailwind CSS 3.0+
- TypeScript 4.5+ (for TypeScript users)

## Basic Usage

```tsx
import { AudioPlayer } from '@your-org/audio-player';

function App() {
  return (
    <AudioPlayer
      src="/path/to/audio.mp3"
      title="My Audio Track"
      autoPlay={false}
      initialVolume={0.8}
      onPlay={() => console.log('Audio started playing')}
    />
  );
}
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| src | string | URL or path to the audio file |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Audio Track' | Display title for the audio track |
| autoPlay | boolean | false | Whether to start playing automatically |
| loop | boolean | false | Whether to loop the audio |
| initialVolume | number | 1 | Initial volume (0-1) |
| className | string | '' | Additional CSS classes |
| onPlay | () => void | undefined | Callback when audio starts playing |
| onPause | () => void | undefined | Callback when audio is paused |
| onEnded | () => void | undefined | Callback when audio playback ends |

## Features

### Playback Controls
- Play/Pause toggle
- 10-second skip forward/backward
- Progress bar with time display
- Loop functionality

### Volume Controls
- Volume slider (0-100%)
- Mute toggle
- Visual volume level indicator
- Persistent volume settings

### Speed Control
- Multiple playback speeds (0.5x, 1x, 1.5x, 2x)
- One-click speed cycling
- Visual speed indicator

### Download Functionality
- Direct download support
- Automatic filename handling
- Progress tracking

### Progress Tracking
- Real-time progress updates
- Time elapsed/remaining display
- Interactive seek functionality
- Buffering indicator

## Accessibility

The component follows WCAG 2.1 guidelines and includes:

- ARIA labels for all controls
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast support

Keyboard shortcuts:
- Space: Play/Pause
- Left Arrow: Skip backward
- Right Arrow: Skip forward
- M: Mute/Unmute
- Up/Down Arrows: Volume control

## Events & Callbacks

```typescript
// Play event
onPlay={() => {
  console.log('Audio started playing');
}}

// Pause event
onPause={() => {
  console.log('Audio paused');
}}

// End event
onEnded={() => {
  console.log('Audio finished playing');
}}
```

## Styling

The component uses Tailwind CSS classes and can be customized via:

1. className prop for container styling
2. Tailwind theme customization
3. CSS custom properties for colors

```tsx
// Custom styling example
<AudioPlayer
  className="bg-custom-dark rounded-xl shadow-lg"
  src="/audio.mp3"
/>
```

## Browser Support

Supported browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Opera 47+

Mobile support:
- iOS Safari 12+
- Android Chrome 60+
- Android Firefox 60+

## Troubleshooting

Common issues and solutions:

1. **Autoplay not working**
   - Ensure user interaction
   - Check browser autoplay policies
   - Verify volume settings

2. **Audio format compatibility**
   - Use MP3 for maximum compatibility
   - Provide alternative formats
   - Check browser codec support

3. **Performance issues**
   - Optimize audio file size
   - Use appropriate bitrates
   - Enable browser caching

## Examples

### Basic Player
```tsx
<AudioPlayer
  src="/audio.mp3"
  title="Simple Audio"
/>
```

### Full-Featured Player
```tsx
<AudioPlayer
  src="/audio.mp3"
  title="Advanced Audio"
  autoPlay={false}
  loop={true}
  initialVolume={0.8}
  className="custom-player"
  onPlay={() => logPlayEvent()}
  onPause={() => logPauseEvent()}
  onEnded={() => handleCompletion()}
/>
```

### With Custom Controls
```tsx
<AudioPlayer
  src="/audio.mp3"
  title="Custom Audio"
  className="custom-controls"
  renderCustomControls={({ play, pause, seek }) => (
    <div className="custom-controls-container">
      {/* Custom control implementation */}
    </div>
  )}
/>
```

## API Reference

### Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| play | none | Promise<void> | Starts audio playback |
| pause | none | void | Pauses audio playback |
| seek | time: number | void | Seeks to specified time |
| setVolume | volume: number | void | Sets volume level |
| toggleMute | none | void | Toggles mute state |
| setPlaybackRate | rate: number | void | Sets playback speed |

### Events

| Event | Callback Parameters | Description |
|-------|-------------------|-------------|
| onPlay | none | Fired when playback starts |
| onPause | none | Fired when playback pauses |
| onEnded | none | Fired when playback ends |
| onTimeUpdate | currentTime: number | Fired when playback time updates |
| onVolumeChange | volume: number | Fired when volume changes |
| onError | error: Error | Fired when an error occurs |

### Logging Interface

```typescript
interface LoggerInterface {
  info: (message: string, data?: any) => void;
  error: (message: string, error?: any) => void;
  warn: (message: string, data?: any) => void;
  debug: (message: string, data?: any) => void;
}
```

For more detailed information about implementation details or advanced usage scenarios, please refer to our [GitHub repository](https://github.com/your-org/audio-player) or contact our support team.

This documentation provides:

Clear installation and usage instructions
Detailed props and API reference
Feature descriptions and examples
Accessibility guidelines
Troubleshooting tips
Browser compatibility information
Code examples for common use cases