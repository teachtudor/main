// // 'use client';
// // import * as THREE from 'three';

// // export default function GroundPlane() {
// //   return (
// //     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
// //       <planeGeometry args={[10000, 10000]} />
// //       <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
// //     </mesh>
// //   );
// // }

// //code 2
// import React, { useRef } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import './SnowInstancedMaterial';

// export default function GroundPlane() {
//   const materialRef = useRef();
//   const { clock } = useThree();

//   useFrame(() => {
//     if (materialRef.current) {
//       materialRef.current.uTime = clock.getElapsedTime();
//     }
//   });

//   return (
//     // <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//     //   <planeGeometry args={[1000, 1000]} />
//     //   <snowInstancedMaterial ref={materialRef} />
//     // </mesh>
//     <mesh
//       position={[500, 0, 500]} // half of 1000x1000 to align top-left
//       rotation={[-Math.PI / 2, 0, 0]}
//       receiveShadow
//     >
//       <planeGeometry args={[1000, 1000]} />
//       <snowInstancedMaterial ref={materialRef} />
//     </mesh>

//   );
// }


//CODE 2 FOR FRACTALS
// import React, { useRef, useEffect } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import './SnowInstancedMaterial';

// export default function GroundPlane() {
//   const materialRef = useRef();
//   const { clock, size } = useThree();

//   useEffect(() => {
//     if (materialRef.current) {
//       materialRef.current.uResolution.set(size.width, size.height);
//     }
//   }, [size]);

//   useFrame(() => {
//     if (materialRef.current) {
//       materialRef.current.uTime = clock.getElapsedTime();
//     }
//   });

//   return (
//     // <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    // <mesh
    //   position={[500, 0, 500]} // half of 1000x1000 to align top-left
    //   rotation={[-Math.PI / 2, 0, 0]}
    //   receiveShadow
    // >
//       <planeGeometry args={[1000, 1000]} />
//       <snowInstancedMaterial ref={materialRef} />
//     </mesh>
//   );
// }


// import React, { useRef, useEffect } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import './SnowInstancedMaterial';

// export default function GroundPlane() {
//   const materialRef = useRef();
//   const { size } = useThree();

//   useEffect(() => {
//     if (materialRef.current) {
//       materialRef.current.uResolution.set(size.width, size.height);
//     }
//   }, [size]);

//   return (
//     // <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//         <mesh
//           position={[500, 0, 500]} // half of 1000x1000 to align top-left
//           rotation={[-Math.PI / 2, 0, 0]}
//           receiveShadow
//         >
//           <planeGeometry args={[1000, 1000]} />
//           <snowInstancedMaterial ref={materialRef} />
//         </mesh>
//   );
// }


// import React, { useRef, useEffect } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import { SnowInstancedMaterial } from './SnowInstancedMaterial';

// export default function GroundPlane() {
//   const materialRef = useRef();
//   const { size } = useThree();

//   // ✅ Safe update for iResolution
//   useEffect(() => {
//     if (materialRef.current && materialRef.current.iResolution) {
//       materialRef.current.iResolution.set(size.width, size.height);
//     }
//   }, [size]);

//   // ✅ Animate iTime
//   useFrame((state) => {
//     if (materialRef.current) {
//       materialRef.current.iTime = state.clock.elapsedTime;
//     }
//   });

//   return (
//     <mesh
//       position={[500, 0, 500]}
//       rotation={[-Math.PI / 2, 0, 0]}
//       receiveShadow
//     >
//       <planeGeometry args={[1000, 1000]} />
//       <snowInstancedMaterial ref={materialRef} />
//     </mesh>
//   );
// }


// import React, { useRef, useEffect } from 'react';
// import { useThree, useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import './SnowInstancedMaterial'; // ✅ Just side-effect import to make <snowInstancedMaterial /> valid

// export default function GroundPlane() {
//   const materialRef = useRef();
//   const { size } = useThree();
//   const texture = useLoader(TextureLoader, '/patternISL2.png');

//   useEffect(() => {
//     if (materialRef.current) {
//       materialRef.current.uTexture = texture;
//       materialRef.current.uTileSize = 4.0; // 4x4 meter tiles — adjust here!
//     }
//   }, [texture, size]);

//   return (
//     <mesh
//       position={[500, 0, 500]}
//       rotation={[-Math.PI / 2, 0, 0]}
//       receiveShadow
//     >
//       <planeGeometry args={[1000, 1000]} />
//       <snowInstancedMaterial ref={materialRef} />
//     </mesh>
//   );
// }

//works
'use client';

import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping, NearestFilter, LinearMipMapLinearFilter } from 'three';

export default function GroundPlane() {
  const texture = useLoader(TextureLoader, '/patternISL2.png'); // Make sure this path is correct

  useEffect(() => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(250, 250); // Adjust tiling here
    texture.anisotropy = 16;
    texture.magFilter = NearestFilter;
    texture.minFilter = LinearMipMapLinearFilter;
  }, [texture]);

  return (
    <mesh
      position={[500, 0, 500]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

