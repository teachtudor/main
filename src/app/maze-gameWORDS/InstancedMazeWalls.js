// //code 2
// 'use client';

// import { useMemo, useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function MazeWalls({ grid }) {
//   const ref = useRef();

//   const { dummy, count, positions } = useMemo(() => {
//     if (!grid || grid.length === 0) return { dummy: null, count: 0, positions: [] };

//     const dummy = new THREE.Object3D();
//     const positions = [];

//     for (let y = 0; y < grid.length; y++) {
//       for (let x = 0; x < grid[0].length; x++) {
//         if (grid[y][x] === 1) {
//           positions.push([x, 5, y]);
//         }
//       }
//     }

//     return { dummy, count: positions.length, positions };
//   }, [grid]);

//   useFrame(() => {
//     if (!ref.current || !dummy) return;

//     positions.forEach((pos, i) => {
//       dummy.position.set(...pos);
//       dummy.updateMatrix();
//       ref.current.setMatrixAt(i, dummy.matrix);
//     });

//     ref.current.instanceMatrix.needsUpdate = true;
//   });

//   if (!dummy) return null;

//   return (
//     <instancedMesh ref={ref} args={[undefined, undefined, count]}>
//       <boxGeometry args={[1, 10, 1]} />
//       <meshStandardMaterial color="#888" />
//     </instancedMesh>
//   );
// }

//code 3 works great
// 'use client';

// import { useMemo, useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import './FlubberInstancedMaterial'; // ✅ just runs the class and extend()

// export default function MazeWalls({ grid }) {
//   const ref = useRef();
//   const wallHeight = 0.8; // 🔧 Adjust this to control height
//   const materialRef = useRef();

//   useFrame((state) => {
//     if (materialRef.current) {
//       materialRef.current.uTime = state.clock.getElapsedTime();
//     }
//   });

//   const { dummy, count, positions } = useMemo(() => {
//     if (!grid || grid.length === 0) return { dummy: null, count: 0, positions: [] };

//     const dummy = new THREE.Object3D();
//     const positions = [];

//     for (let y = 0; y < grid.length; y++) {
//       for (let x = 0; x < grid[0].length; x++) {
//         if (grid[y][x] === 1) {
//           positions.push([x, wallHeight / 2, y]); // ✅ center wall on ground
//         }
//       }
//     }

//     return { dummy, count: positions.length, positions };
//   }, [grid]);

//   useFrame(() => {
//     if (!ref.current || !dummy) return;

//     positions.forEach((pos, i) => {
//       dummy.position.set(...pos);
//       dummy.updateMatrix();
//       ref.current.setMatrixAt(i, dummy.matrix);
//     });

//     ref.current.instanceMatrix.needsUpdate = true;
//   });

//   if (!dummy) return null;

//   return (
//     <instancedMesh ref={ref} args={[undefined, undefined, count]}>
//       <boxGeometry args={[1, wallHeight, 1]} /> {/* ✅ Apply new height here */}
//       {/* <meshStandardMaterial color="#888" /> */}
//       <flubberInstancedMaterial ref={materialRef} />
//       {/* <meshStandardMaterial color="lime" /> */}



//     </instancedMesh>
//   );
// }

//code 4 works great InstancedMazeWalls.js
'use client';

import { useMemo, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './FlubberInstancedMaterial'; // Runs the class and extend()

export default function MazeWalls({ grid }) {
  const ref = useRef();
  const wallHeight = 0.8;
  const materialRef = useRef();


  // Animate uTime
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  // Calculate wall positions
  const { dummy, count, positions } = useMemo(() => {
    if (!grid || grid.length === 0) return { dummy: null, count: 0, positions: [] };

    const dummy = new THREE.Object3D();
    const positions = [];

    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === 1) {
          positions.push([x, wallHeight / 2, y]); // Center on ground
        }
      }
    }

    return { dummy, count: positions.length, positions };
  }, [grid]);

  // Set uCenter based on maze size
  useEffect(() => {
    if (materialRef.current && grid.length > 0) {
      const mazeWidth = grid[0].length;
      const mazeHeight = grid.length;

      materialRef.current.uCenter = new THREE.Vector2(
        mazeWidth / 2,
        mazeHeight / 2
      );
    }
  }, [grid]);

  // Apply instance positions
  useFrame(() => {
    if (!ref.current || !dummy) return;

    positions.forEach((pos, i) => {
      dummy.position.set(...pos);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });

    ref.current.instanceMatrix.needsUpdate = true;
  });

  if (!dummy) return null;

  return (
    <instancedMesh 
      ref={ref} 
      args={[undefined, undefined, count]}
      castShadow
      receiveShadow
      frustumCulled={false}
      >
      <boxGeometry args={[1, wallHeight, 1]} />
      <flubberInstancedMaterial ref={materialRef} />
    </instancedMesh>
  );
}

// 'use client';

// import { useMemo, useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import './FlubberInstancedMaterial'; // Your shader

// export default function MazeWalls({ grid }) {
//   const ref = useRef();
//   const materialRef = useRef();

//   const DOME_RADIUS = 6_371_000; // 🌍 Earth's radius in meters
//   const wallScale = 10; // 🏠 Each wall = 10x10 meters
//   const wallHeight = 10;
//   const spacing = 12; // little bit of space between walls

//   // Animate shader time
//   useFrame((state) => {
//     if (materialRef.current) {
//       materialRef.current.uTime = state.clock.getElapsedTime();
//     }
//   });

//   // Grid -> spherical position + rotation
//   const { dummy, count, positions, rotations } = useMemo(() => {
//     if (!grid || grid.length === 0) return { dummy: null, count: 0, positions: [], rotations: [] };

//     const dummy = new THREE.Object3D();
//     const positions = [];
//     const rotations = [];

//     const height = grid.length;
//     const width = grid[0].length;

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         if (grid[y][x] === 1) {
//           const theta = ((x * spacing) / width) * 2 * Math.PI;
//           const phi = ((y * spacing) / height) * Math.PI;

//           const safePhi = THREE.MathUtils.clamp(phi, 0.1, Math.PI - 0.1);

//           const sx = DOME_RADIUS * Math.sin(safePhi) * Math.cos(theta);
//           const sy = DOME_RADIUS * Math.cos(safePhi);
//           const sz = DOME_RADIUS * Math.sin(safePhi) * Math.sin(theta);

//           const pos = new THREE.Vector3(sx, sy, sz);
//           positions.push(pos);

//           const normal = pos.clone().normalize();
//           const up = new THREE.Vector3(0, 1, 0);
//           const q = new THREE.Quaternion().setFromUnitVectors(up, normal);
//           rotations.push(q);
//         }
//       }
//     }

//     return { dummy, count: positions.length, positions, rotations };
//   }, [grid]);

//   // Set uCenter for shader
//   useEffect(() => {
//     if (materialRef.current && grid.length > 0) {
//       const mazeWidth = grid[0].length;
//       const mazeHeight = grid.length;
//       materialRef.current.uCenter = new THREE.Vector2(mazeWidth / 2, mazeHeight / 2);
//     }
//   }, [grid]);

//   // Apply position/rotation transforms
//   useFrame(() => {
//     if (!ref.current || !dummy) return;

//     for (let i = 0; i < positions.length; i++) {
//       dummy.position.copy(positions[i]);
//       dummy.setRotationFromQuaternion(rotations[i]);
//       dummy.updateMatrix();
//       ref.current.setMatrixAt(i, dummy.matrix);
//     }

//     ref.current.instanceMatrix.needsUpdate = true;
//   });

//   if (!positions.length) return null;

//   return (
//     <instancedMesh
//       ref={ref}
//       args={[undefined, undefined, count]}
//       castShadow
//       receiveShadow
//       frustumCulled={false}
//     >
//       <boxGeometry args={[wallScale, wallHeight, wallScale]} />
//       <flubberInstancedMaterial ref={materialRef} />
//     </instancedMesh>
//   );
// }
