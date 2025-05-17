// 'use client';

// import { useEffect, useMemo, useRef, useState } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function MazeWalls() {
//   const [grid, setGrid] = useState([]);
//   const ref = useRef();

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('✅ Grid loaded:', data.length, 'rows');
//         setGrid(data);
//       })
//       .catch((err) => console.error('❌ Failed to load maze grid:', err));
//   }, []);

//   const { dummy, count, positions } = useMemo(() => {
//     if (!grid || grid.length === 0) return { dummy: null, count: 0, positions: [] };

//     const dummy = new THREE.Object3D();
//     const positions = [];

//     for (let y = 0; y < grid.length; y++) {
//       for (let x = 0; x < grid[0].length; x++) {
//         if (grid[y][x] === 1) {
//           positions.push([x, 5, y]); // y=5 = centered box height
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

//code 2
'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MazeWalls({ grid }) {
  const ref = useRef();

  const { dummy, count, positions } = useMemo(() => {
    if (!grid || grid.length === 0) return { dummy: null, count: 0, positions: [] };

    const dummy = new THREE.Object3D();
    const positions = [];

    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === 1) {
          positions.push([x, 5, y]);
        }
      }
    }

    return { dummy, count: positions.length, positions };
  }, [grid]);

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
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 10, 1]} />
      <meshStandardMaterial color="#888" />
    </instancedMesh>
  );
}

