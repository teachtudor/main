// import * as THREE from "three";

// export function createCamera() {
//   const camera = new THREE.PerspectiveCamera(
//     75, // Field of view
//     window.innerWidth / window.innerHeight, // Aspect ratio
//     0.1, // Near clipping plane
//     1000 // Far clipping plane
//   );

//   // Initial camera position (adjust as needed)
//   camera.position.set(0, 5, 15);
//   camera.lookAt(0, 0, 0); // Look at the origin initially

//   return camera;
// }

//code 2
// import { useRef } from 'react';
// import { PerspectiveCamera } from '@react-three/drei';

// export function Camera() {
//   const cameraRef = useRef();

//   return (
//     <PerspectiveCamera ref={cameraRef} makeDefault position={[5, 5, 10]} fov={75} />
//   );
// }
