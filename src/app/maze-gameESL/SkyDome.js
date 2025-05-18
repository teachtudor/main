// import React, { useRef } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import './SkyShaderMaterial';
// import * as THREE from 'three';

// export default function SkyDome() {
//   const matRef = useRef();
//   const { camera } = useThree();

//   useFrame((state) => {
//     if (matRef.current) {
//       matRef.current.uTime = state.clock.getElapsedTime();
//       matRef.current.uCameraY = camera.position.y;
//     }
//   });

//   return (
//     <mesh scale={[-1000, 1000, 1000]}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <skyShaderMaterial ref={matRef} side={THREE.BackSide} />
//     </mesh>
//   );
// }


//code 2
'use client';

import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './SkyShaderMaterial'; // this is your shaderMaterial file

export default function SkyDome() {
  const matRef = useRef();
  const { camera } = useThree();

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uTime = state.clock.getElapsedTime();
      matRef.current.uCameraY = camera.position.y;
    }
  });

  return (
    <mesh
      position={[500, 0, 500]} // ✅ centered on your scene
      scale={[5000, 5000, 5000]} // ✅ giant radius
    >
      <sphereGeometry args={[1, 64, 64]} />
      <skyShaderMaterial ref={matRef} side={THREE.BackSide} />
    </mesh>
  );
}
