// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   prefix: "tw-", // Optional: only if you need to avoid conflicts
   theme: {
     extend: {},
   },
   plugins: [],
 }
