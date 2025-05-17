// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane } from '@react-three/cannon';
// import * as THREE from 'three';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <>
//     {/* Add direct light just above the plane */}
//     <directionalLight
//         position={[0, 5, 0]}
//         intensity={1.5}
//         castShadow
//         target-position={[0, 0, 0]}
//       />
//     <ambientLight intensity={0.3} />
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//     </>
//   );
// }

//code 2
// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane } from '@react-three/cannon';
// import * as THREE from 'three';
// import { useBox } from '@react-three/cannon';
// import { useContactMaterial } from '@react-three/cannon';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');
  
//   const [ref] = useBox(() => ({
//     position: [0, -7.5, 0],
//     args: [100, 15, 100], // width, height, depth — required for collision shape
//     // type: 'Dynamic',
//     // mass: 1
//     type: 'Static',
//     material: 'ground',
//   }));

//   useContactMaterial('ground', 'player', {
//     friction: 0.1,      // ✅ change this value for more or less grip
//     restitution: 0.0,   // bounce (keep zero unless needed)
//   });



//   const [secondPlaneRef] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -80, 0],
//     type: 'Static'
//   }));
  

//   return (
//     <>
//     {/* Add direct light just above the plane */}
//     <directionalLight
//         position={[0,10,0]}
//         intensity={5}
//         castShadow
//         target-position={[0, 0, 0]}
//       />
//     <ambientLight intensity={1} />
    
//     <mesh ref={ref} castShadow receiveShadow>
//       <boxGeometry args={[100, 15, 100]} />
//       <meshStandardMaterial map={texture} color="#fff5b5"  />
//     </mesh>
//     <mesh ref={secondPlaneRef} castShadow >
//       <planeGeometry args={[300, 300]} />
//       <meshStandardMaterial color="#222" side={THREE.DoubleSide} />
//     </mesh>
//     </>
//   );
// }

//code 3 rectangular pole
// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane, useBox, useContactMaterial } from '@react-three/cannon';
// import * as THREE from 'three';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');

//   // Ground box plane
//   const [ref] = useBox(() => ({
//     position: [0, -7.5, 0],
//     args: [100, 15, 100],
//     type: 'Static',
//     material: 'ground',
//   }));

//   // Contact material
//   useContactMaterial('ground', 'player', {
//     friction: 0.1,
//     restitution: 0.0,
//   });

//   // Second flat plane far below
//   const [secondPlaneRef] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -80, 0],
//     type: 'Static',
//   }));

//   // ✅ Pole that connects both vertically
//   const poleHeight = 80 - 7.5; // difference between Y positions
//   const [poleRef] = useBox(() => ({
//     position: [0, -43.75, 0], // midway between -7.5 and -80
//     args: [1, poleHeight, 1], // thin vertical box
//     type: 'Static',
//   }));

//   return (
//     <>
//       <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
//       <ambientLight intensity={1} />

//       {/* Main ground box */}
//       <mesh ref={ref} castShadow receiveShadow>
//         <boxGeometry args={[100, 15, 100]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>

//       {/* Second flat plane */}
//       <mesh ref={secondPlaneRef} castShadow>
//         <planeGeometry args={[300, 300]} />
//         <meshStandardMaterial color="#222" side={THREE.DoubleSide} />
//       </mesh>

//       {/* Pole */}
//       <mesh ref={poleRef} castShadow receiveShadow>
//         <boxGeometry args={[14, poleHeight, 14]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>
//     </>
//   );
// }

//code 4
// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane, useBox, useCylinder, useContactMaterial } from '@react-three/cannon';
// import * as THREE from 'three';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');
//   const textureOne = useLoader(THREE.TextureLoader, '/paving.png');




//   // Main ground box
//   const [ref] = useBox(() => ({
//     position: [0, -7.5, 0],
//     args: [100, 15, 100],
//     type: 'Dynamic',
//     material: 'ground',
//   }));

//   // Second flat plane
//   const [secondPlaneRef] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -80, 0],
//     type: 'Static',
//   }));

//   // Contact material between ground and player
//   useContactMaterial('ground', 'player', {
//     friction: 0.1,
//     restitution: 0.0,
//   });

//   // ✅ Cylindrical pole
//   const poleHeight = 72.5; // from -7.5 to -80
//   const poleY = -43.75;    // midpoint
//   const poleRadius = 20;    // thicker pole

//   const [poleRef] = useCylinder(() => ({
//     args: [poleRadius, poleRadius, poleHeight, 32], // radiusTop, radiusBottom, height, segments
//     position: [0, poleY, 0],
//     type: 'Static',
//   }));

//   return (
//     <>
//       <pointLight
//         position={[0, -70, 10]}
//         intensity={15}
//         distance={50}
//       />

//       <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
//       <ambientLight intensity={3} />

//       {/* Main ground box */}
//       <mesh ref={ref} castShadow receiveShadow>
//         <boxGeometry args={[100, 15, 100]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>

//       {/* Second flat plane */}
//       <mesh ref={secondPlaneRef} castShadow>
//         <planeGeometry args={[300, 300]} />
//         <meshStandardMaterial map={textureOne} color="#222" side={THREE.DoubleSide} />
//       </mesh>

//       {/* Cylindrical pole */}
//       <mesh ref={poleRef} castShadow receiveShadow>
//         <cylinderGeometry args={[poleRadius, poleRadius, poleHeight, 32]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>
//     </>
//   );
// }

//code 5 with fence no layered textures
// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane, useBox, useCylinder, useContactMaterial } from '@react-three/cannon';
// import * as THREE from 'three';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');
//   const textureOne = useLoader(THREE.TextureLoader, '/paving.png');

//   // Main ground box
//   const [ref] = useBox(() => ({
//     position: [0, -7.5, 0],
//     args: [100, 15, 100],
//     type: 'Dynamic',
//     material: 'ground',
//   }));

//   // Second flat plane
//   const [secondPlaneRef] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -80, 0],
//     type: 'Static',
//   }));

//   // Contact material between ground and player
//   useContactMaterial('ground', 'player', {
//     friction: 0.1,
//     restitution: 0.0,
//   });

//   // Cylindrical pole
//   const poleHeight = 72.5;
//   const poleY = -43.75;
//   const poleRadius = 20;

//   const [poleRef] = useCylinder(() => ({
//     args: [poleRadius, poleRadius, poleHeight, 32],
//     position: [0, poleY, 0],
//     type: 'Static',
//   }));

//   // Fence dimensions around secondPlaneRef
//   const planeSize = 300;
//   const fenceHeight = 10;
//   const fenceThickness = 1;
//   const fenceY = -80 + fenceHeight / 2;

//   const [northFenceRef] = useBox(() => ({
//     args: [planeSize, fenceHeight, fenceThickness],
//     position: [0, fenceY, -planeSize / 2],
//     type: 'Static',
//   }));

//   const [southFenceRef] = useBox(() => ({
//     args: [planeSize, fenceHeight, fenceThickness],
//     position: [0, fenceY, planeSize / 2],
//     type: 'Static',
//   }));

//   const [eastFenceRef] = useBox(() => ({
//     args: [fenceThickness, fenceHeight, planeSize],
//     position: [planeSize / 2, fenceY, 0],
//     type: 'Static',
//   }));

//   const [westFenceRef] = useBox(() => ({
//     args: [fenceThickness, fenceHeight, planeSize],
//     position: [-planeSize / 2, fenceY, 0],
//     type: 'Static',
//   }));

//   return (
//     <>
//       <pointLight position={[0, -70, 10]} intensity={15} distance={50} />
//       <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
//       <ambientLight intensity={3} />

//       {/* Main ground box */}
//       <mesh ref={ref} castShadow receiveShadow>
//         <boxGeometry args={[100, 15, 100]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>

//       {/* Second flat plane */}
//       <mesh ref={secondPlaneRef} castShadow receiveShadow>
//         <planeGeometry args={[300, 300]} />
//         <meshStandardMaterial map={textureOne} color="#222" side={THREE.DoubleSide} />
//       </mesh>

//       {/* Cylindrical pole */}
//       <mesh ref={poleRef} castShadow receiveShadow>
//         <cylinderGeometry args={[poleRadius, poleRadius, poleHeight, 32]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>

//       {/* Fence - North */}
//       <mesh ref={northFenceRef} castShadow receiveShadow>
//         <boxGeometry args={[planeSize, fenceHeight, fenceThickness]} />
//         <meshStandardMaterial color="#805533" />
//       </mesh>

//       {/* Fence - South */}
//       <mesh ref={southFenceRef} castShadow receiveShadow>
//         <boxGeometry args={[planeSize, fenceHeight, fenceThickness]} />
//         <meshStandardMaterial color="#805533" />
//       </mesh>

//       {/* Fence - East */}
//       <mesh ref={eastFenceRef} castShadow receiveShadow>
//         <boxGeometry args={[fenceThickness, fenceHeight, planeSize]} />
//         <meshStandardMaterial color="#805533" />
//       </mesh>

//       {/* Fence - West */}
//       <mesh ref={westFenceRef} castShadow receiveShadow>
//         <boxGeometry args={[fenceThickness, fenceHeight, planeSize]} />
//         <meshStandardMaterial color="#805533" />
//       </mesh>
//     </>
//   );
// }

//code 6
// 'use client';
// import { useLoader, useFrame } from '@react-three/fiber';
// import {
//   usePlane,
//   useBox,
//   useCylinder,
//   useContactMaterial,
// } from '@react-three/cannon';
// import * as THREE from 'three';
// import { useRef, useEffect } from 'react';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');

//   // ✅ PBR Maps for secondPlaneRef
//   const [
//     colorMap,
//     normalMap,
//     roughnessMap,
//     aoMap,
//     displacementMap,
//   ] = useLoader(THREE.TextureLoader, [
//     '/paving/PavingStones138_1K-JPG_Color.jpg',
//     '/paving/PavingStones138_1K-JPG_NormalGL.jpg',
//     '/paving/PavingStones138_1K-JPG_Roughness.jpg',
//     '/paving/PavingStones138_1K-JPG_AmbientOcclusion.jpg',
//     '/paving/PavingStones138_1K-JPG_Displacement.jpg',
//   ]);

//   const secondPlaneMeshRef = useRef();

//   useEffect(() => {
//     if (secondPlaneMeshRef.current) {
//       secondPlaneMeshRef.current.geometry.setAttribute(
//         'uv2',
//         secondPlaneMeshRef.current.geometry.attributes.uv
//       );
//     }
//   }, []);

//   // Main ground box
//   const [ref] = useBox(() => ({
//     position: [0, -7.5, 0],
//     args: [100, 15, 100],
//     type: 'Dynamic',
//     material: 'ground',
//   }));

//   // Second flat plane
//   const [secondPlaneRef] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -78.5, 0],
//     type: 'Static',
//   }));

//   // Contact material between ground and player
//   useContactMaterial('ground', 'player', {
//     friction: 0.1,
//     restitution: 0.0,
//   });

//   // Cylindrical pole
//   const poleHeight = 72.5;
//   const poleY = -43.75;
//   const poleRadius = 20;

//   const [poleRef] = useCylinder(() => ({
//     args: [poleRadius, poleRadius, poleHeight, 32],
//     position: [0, poleY, 0],
//     type: 'Static',
//   }));

//   return (
//     <>
//       <pointLight position={[0, -70, 10]} intensity={15} distance={50} />
//       <directionalLight position={[0, 10, 0]} intensity={5} castShadow />
//       <ambientLight intensity={3} />

//       {/* Main ground box */}
//       <mesh ref={ref} castShadow receiveShadow>
//         <boxGeometry args={[100, 15, 100]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>

//       {/* Second flat plane with full PBR material */}
//       <mesh ref={secondPlaneMeshRef} castShadow receiveShadow position={[0, -80, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <planeGeometry args={[300, 300, 64, 64]} />
//         <meshStandardMaterial
//           map={colorMap}
//           normalMap={normalMap}
//           roughnessMap={roughnessMap}
//           aoMap={aoMap}
//           displacementMap={displacementMap}
//           displacementScale={2} // You can tweak this
//           side={THREE.DoubleSide}
//         />
//       </mesh>

//       {/* Cylindrical pole */}
//       <mesh ref={poleRef} castShadow receiveShadow>
//         <cylinderGeometry args={[poleRadius, poleRadius, poleHeight, 32]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>
//     </>
//   );
// }


//code 7
// 'use client';
// import { useLoader } from '@react-three/fiber';
// import {
//   usePlane,
//   useBox,
//   useCylinder,
//   useContactMaterial,
// } from '@react-three/cannon';
// import * as THREE from 'three';
// import { useRef, useEffect } from 'react';
// // import FenceRing from './FenceRing';
// // import GatePanel from './GatePanel';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');

//   // ✅ PBR Maps for secondPlaneRef
//   const [
//     colorMap,
//     normalMap,
//     roughnessMap,
//     aoMap,
//     displacementMap,
//   ] = useLoader(THREE.TextureLoader, [
//     '/paving/PavingStones138_1K-JPG_Color.jpg',
//     '/paving/PavingStones138_1K-JPG_NormalGL.jpg',
//     '/paving/PavingStones138_1K-JPG_Roughness.jpg',
//     '/paving/PavingStones138_1K-JPG_AmbientOcclusion.jpg',
//     '/paving/PavingStones138_1K-JPG_Displacement.jpg',
//   ]);

//   const secondPlaneMeshRef = useRef();

//   useEffect(() => {
//     if (secondPlaneMeshRef.current) {
//       secondPlaneMeshRef.current.geometry.setAttribute(
//         'uv2',
//         secondPlaneMeshRef.current.geometry.attributes.uv
//       );
//     }
//   }, []);

//   // Main ground box
//   const [ref] = useBox(() => ({
//     position: [0, -7.5, 0],
//     args: [100, 15, 100],
//     type: 'Dynamic',
//     material: 'ground',
//   }));

//   // Second flat plane collider (physics)
//   const [secondPlaneRef] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0], // collider remains facing up
//     position: [0, -78.5, 0],
//     type: 'Static',
//   }));

//   // Contact material between ground and player
//   useContactMaterial('ground', 'player', {
//     friction: 0.1,
//     restitution: 0.0,
//   });

//   // Cylindrical pole
//   const poleHeight = 72.5;
//   const poleY = -43.75;
//   const poleRadius = 20;

//   const [poleRef] = useCylinder(() => ({
//     args: [poleRadius, poleRadius, poleHeight, 32],
//     position: [0, poleY, 0],
//     type: 'Static',
//   }));

//   return (
//     <>
//       <pointLight position={[0, -79, 10]} intensity={1} distance={50} />
//       <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
//       <ambientLight intensity={3} />

//       {/* Main ground box */}
//       <mesh ref={ref} castShadow receiveShadow>
//         <boxGeometry args={[100, 15, 100]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>

//       {/* ✅ Second plane (flipped visually to show bottom) */}
//       <mesh
//         ref={secondPlaneMeshRef}
//         castShadow
//         receiveShadow
//         position={[0, -80, 0]}
//         rotation={[Math.PI / 2, 0, 0]} // flipped to show bottom
//       >
//         <planeGeometry args={[300, 300, 64, 64]} />
//         <meshStandardMaterial
//           map={colorMap}
//           normalMap={normalMap}
//           roughnessMap={roughnessMap}
//           aoMap={aoMap}
//           displacementMap={displacementMap}
//           displacementScale={-2} // flipped for better bump
//           side={THREE.DoubleSide}
//         />
//       </mesh>

//       {/* Cylindrical pole */}
//       <mesh ref={poleRef} castShadow receiveShadow>
//         <cylinderGeometry args={[poleRadius, poleRadius, poleHeight, 32]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" />
//       </mesh>
//     </>
//   );
// }

//code 8
'use client';
import { useLoader } from '@react-three/fiber';
import {
  usePlane,
  useBox,
  useCylinder,
  useContactMaterial,
} from '@react-three/cannon';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';

export default function GroundPlane() {
  const texture = useLoader(THREE.TextureLoader, '/wt.jpg');

  const [
    colorMap,
    normalMap,
    roughnessMap,
    aoMap,
    displacementMap,
  ] = useLoader(THREE.TextureLoader, [
    '/paving/PavingStones138_1K-JPG_Color.jpg',
    '/paving/PavingStones138_1K-JPG_NormalGL.jpg',
    '/paving/PavingStones138_1K-JPG_Roughness.jpg',
    '/paving/PavingStones138_1K-JPG_AmbientOcclusion.jpg',
    '/paving/PavingStones138_1K-JPG_Displacement.jpg',
  ]);

  const secondPlaneMeshRef = useRef();

  useEffect(() => {
    if (secondPlaneMeshRef.current) {
      secondPlaneMeshRef.current.geometry.setAttribute(
        'uv2',
        secondPlaneMeshRef.current.geometry.attributes.uv
      );
    }
  }, []);

  const [ref] = useBox(() => ({
    position: [0, -7.5, 0],
    args: [100, 15, 100],
    type: 'Dynamic',
    material: 'ground',
  }));

  const [secondPlaneRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -78.5, 0],
    type: 'Static',
  }));

  useContactMaterial('ground', 'player', {
    friction: 0.1,
    restitution: 0.0,
  });

  const poleHeight = 72.5;
  const poleY = -43.75;
  const poleRadius = 20;

  const [poleRef] = useCylinder(() => ({
    args: [poleRadius, poleRadius, poleHeight, 32],
    position: [0, poleY, 0],
    type: 'Static',
  }));

  // 🪵 Fence dimensions
  const fenceY = -75;
  const picketHeight = 10;
  const picketWidth = 0.5;
  const planeSize = 300;
  const spacing = 3;

  const fencePickets = [];

  // North and South sides
  for (let i = -planeSize / 2; i <= planeSize / 2; i += spacing) {
    // North
    fencePickets.push(
      <FencePicket
        key={`n-${i}`}
        position={[i, fenceY, -planeSize / 2]}
        rotation={[0, 0, 0]}
      />
    );

    // South (skip middle 3 pickets to form a "door")
    if (i < -spacing * 1.5 || i > spacing * 1.5) {
      fencePickets.push(
        <FencePicket
          key={`s-${i}`}
          position={[i, fenceY, planeSize / 2]}
          rotation={[0, Math.PI, 0]}
        />
      );
    }
  }

  // East and West sides
  for (let i = -planeSize / 2; i <= planeSize / 2; i += spacing) {
    fencePickets.push(
      <FencePicket
        key={`e-${i}`}
        position={[planeSize / 2, fenceY, i]}
        rotation={[0, Math.PI / 2, 0]}
      />
    );

    fencePickets.push(
      <FencePicket
        key={`w-${i}`}
        position={[-planeSize / 2, fenceY, i]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    );
  }

  return (
    <>
      <pointLight position={[0, -79, 10]} intensity={1} distance={50} />
      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
      <ambientLight intensity={3} />

      {/* Main ground box */}
      <mesh ref={ref} castShadow receiveShadow>
        <boxGeometry args={[100, 15, 100]} />
        <meshStandardMaterial map={texture} color="#fff5b5" />
      </mesh>

      {/* PBR second plane */}
      <mesh
        ref={secondPlaneMeshRef}
        castShadow
        receiveShadow
        position={[0, -80, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[300, 300, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
          displacementMap={displacementMap}
          displacementScale={-2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Pole */}
      <mesh ref={poleRef} castShadow receiveShadow>
        <cylinderGeometry args={[poleRadius, poleRadius, poleHeight, 32]} />
        <meshStandardMaterial map={texture} color="#fff5b5" />
      </mesh>

      {/* 🪵 Fence all around */}
      {fencePickets}
    </>
  );
}

// 🪵 One picket
function FencePicket({ position, rotation }) {
  const [ref] = useBox(() => ({
    args: [0.5, 10, 0.5],
    position,
    rotation,
    type: 'Static',
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[0.5, 10, 0.5]} />
      <meshStandardMaterial color="#deb887" /> {/* light brown wood */}
    </mesh>
  );
}
