npm i vite@latest
npm i gsap @gsap/react three @react-three/fiber @react-three/drei @react-three/postprocessing  // js animation library

// follow the steps mentioned in the link
https://tailwindcss.com/docs/installation/using-vite

npm i react-responsive

// use 3d models from Sketchfab
cd ./public/models
npx gltfjsx optimized-room.glb 

// animating words(Hero.jsx)
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// animating counter
npm i react-countup => import CountUp from 'react-countup'