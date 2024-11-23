// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   prefix: "tw-",
   important: true, // Add this line
   theme: {
     extend: {},
   },
   plugins: [],
 }