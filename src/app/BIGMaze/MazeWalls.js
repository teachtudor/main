// //code 2
// 'use client';

// import { useMemo } from 'react';
// import { RigidBody } from '@react-three/rapier';

// export default function MazeWalls({ grid }) {
//   const wallPositions = useMemo(() => {
//     const positions = [];
//     for (let y = 0; y < grid.length; y++) {
//       for (let x = 0; x < grid[0].length; x++) {
//         if (grid[y][x] === 1) {
//           positions.push([x, 5, y]); // y=5 centers the 10-height box
//         }
//       }
//     }
//     return positions;
//   }, [grid]);

//   return (
//     <>
//       {wallPositions.map((pos, i) => (
//         <RigidBody key={i} type="fixed" position={pos} colliders="cuboid">
//           <mesh>
//             <boxGeometry args={[1, 10, 1]} />
//             <meshStandardMaterial color="#888" />
//           </mesh>
//         </RigidBody>
//       ))}
//     </>
//   );
// }

//code 3
// 'use client';

// import { useMemo } from 'react';
// import { RigidBody } from '@react-three/rapier';

// export default function MazeWalls({ grid }) {
//   const wallPositions = useMemo(() => {
//     const positions = [];
//     const width = grid[0]?.length || 0;
//     const height = grid.length;

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         if (grid[y][x] === 1) {
//           positions.push([x - width / 2, 5, y - height / 2]);
//         }
//       }
//     }
//     return positions;
//   }, [grid]);

//   return (
//     <>
//       {wallPositions.map((pos, i) => (
//         <RigidBody key={i} type="fixed" position={pos} colliders="cuboid">
//           <mesh>
//             <boxGeometry args={[1, 10, 1]} />
//             <meshStandardMaterial color="#888" />
//           </mesh>
//         </RigidBody>
//       ))}
//     </>
//   );
// }
