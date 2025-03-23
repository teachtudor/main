// import * as THREE from "three";

// // Create a simple texture for the car's front
// export function getCarFrontTexture() {
//     const canvas = document.createElement("canvas");
//     canvas.width = 32;
//     canvas.height = 32;
//     const context = canvas.getContext("2d");

//     // Fill background
//     context.fillStyle = "#ffffff"; // White background
//     context.fillRect(0, 0, 32, 32);

//     // Add black rectangle to simulate a grille
//     context.fillStyle = "#333333";
//     context.fillRect(6, 10, 20, 12);

//     return new THREE.CanvasTexture(canvas);
// }

// // Create a texture for the car's side
// export function getCarSideTexture() {
//     const canvas = document.createElement("canvas");
//     canvas.width = 64;
//     canvas.height = 32;
//     const context = canvas.getContext("2d");

//     // Fill background
//     context.fillStyle = "#ffffff"; // White background
//     context.fillRect(0, 0, 64, 32);

//     // Draw windows (light blue)
//     context.fillStyle = "#a0c8ff";
//     context.fillRect(8, 8, 48, 10);

//     return new THREE.CanvasTexture(canvas);
// }


// //code 2
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';

// export function Textures() {
//   const texture = useLoader(TextureLoader, '/path_to_texture.jpg');

//   return (
//     <meshStandardMaterial map={texture} />
//   );
// }
