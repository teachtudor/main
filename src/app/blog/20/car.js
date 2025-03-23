// //CODE 2
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei"; // Correctly import useGLTF

// // const { scene: model } = useGLTF("/future_car.glb");

// export function createCar({ scene, model }) {

//     // Check if the model is loaded
//     if (!model) {
//         console.error("Model is not defined or loaded");
//         return { car: null, carState: null };
//     }

//     // Create car object group
//     const car = new THREE.Group();
//     model.scale.set(0.01, 0.01, 0.01);
//     model.position.set(0, 2, 0);
//     car.rotation.y = Math.PI;

//     car.add(model); // Add model to car group

//     scene.add(car);

//     // Car physics state
//     const carState = {
//         velocity: new THREE.Vector3(0, 0, 1), // Speed in 3D space
//         acceleration: 0.1,  // Forward acceleration
//         maxSpeed: 2,  // Max speed limit
//         friction: 0.98, // Gradual slow down
//         turnSpeed: 0.03, // Rotation speed
//     };

//     return { car, carState }; // Return car and its physics state
// }


//code 2
// import React, { useEffect, useRef } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// export function Car() {
//   const carRef = useRef();
//   const gltf = useLoader(GLTFLoader, '/future_car.glb');

//   useEffect(() => {
//     if (gltf) {
//       carRef.current = gltf.scene;
//     }
//   }, [gltf]);

//   return gltf ? <primitive object={gltf.scene} ref={carRef} scale={[0.5, 0.5, 0.5]} /> : null;
// }
