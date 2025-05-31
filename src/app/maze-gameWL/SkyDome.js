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
// 'use client';

// import { useRef, useEffect } from 'react';
// import { useThree, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import './SkyShaderMaterial'; // this is your shaderMaterial file
// import StarField from './StarField';

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
//     <>
//       <mesh
//         position={[500, 0, 500]} // ✅ centered on your scene
//         scale={[5000, 5000, 5000]} // ✅ giant radius
//       >
//         <sphereGeometry args={[1, 64, 64]} />
//         <skyShaderMaterial 
//           ref={matRef} 
//           side={THREE.BackSide} />
//       </mesh>
//       <StarField count={2000} radius={6000}/>
//     </>
//   );
// }


//code 3
import { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './SkyShaderMaterial';
import './OuterShaderMaterial';

export default function SkyDome() {
  const innerMatRef = useRef();
  const outerMatRef = useRef();
  const { camera } = useThree();

  useFrame((state) => {
    if (innerMatRef.current) {
      innerMatRef.current.uTime = state.clock.getElapsedTime();
      innerMatRef.current.uCameraY = camera.position.y;
    }
    if (outerMatRef.current) {
      outerMatRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <>
      {/* OUTER Earth-like geography */}
      <mesh position={[500, 0, 500]} scale={[5000, 5000, 5000]}>
        <sphereGeometry args={[1, 64, 64]} />
        {/* <outerShaderMaterial
          ref={outerMatRef}
          side={THREE.FrontSide}
          transparent={true}
          depthWrite={false}
        /> */}
        <outerShaderMaterial
                  ref={outerMatRef}
                  side={THREE.FrontSide}
                  transparent={false}
                  depthWrite={true}
                  depthTest={true}
                />
      </mesh>

      {/* INNER moving sky */}
      <mesh position={[500, 0, 500]} scale={[4999, 4999, 4999]}>
        <sphereGeometry args={[1, 64, 64]} />
        <skyShaderMaterial
          ref={innerMatRef}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}
