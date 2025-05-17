// // In animate.js:
// export function animate(scene, camera, renderer, carModel) {
//     function renderFrame() {
//         requestAnimationFrame(renderFrame);

//         if (carModel) {
//             camera.position.lerp(
//                 new THREE.Vector3(
//                     carModel.position.x - Math.sin(carModel.rotation.y) * 10,
//                     5, //Adjust camera height
//                     carModel.position.z - Math.cos(carModel.rotation.y) * 10
//                 ),
//                 0.05 // Adjust lerp speed
//             );
//             camera.lookAt(carModel.position);
//         }

//         renderer.render(scene, camera);
//     }
//     renderFrame();
// }
  
//code 2
// import { useFrame } from '@react-three/fiber';

// export function Animation() {
//   useFrame((state) => {
//     // Update any animations or movement logic here
//   });

//   return null; // Nothing to render, it's for animation logic
// }
