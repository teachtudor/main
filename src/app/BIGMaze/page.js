//code 2 page.js rapier

// 'use client';

// import { useEffect, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics } from '@react-three/rapier';

// import MazeWalls from './MazeWalls';
// import GroundPlane from './GroundPlane';

// import ResizeListener from './ResizeListener';

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('Failed to load maze grid:', err));
//   }, []);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ResizeListener/>
//       <Canvas shadows camera={{ position: [20, 30, 20], fov: 60 }}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[10, 30, 10]} intensity={1} castShadow />

//         <Physics gravity={[0, -9.8, 0]} debug>
//           <GroundPlane />
//           {grid.length > 0 && <MazeWalls grid={grid} />}
//         </Physics>
//       </Canvas>
//     </div>
//   );
// }

//code 3
'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Camera from './Camera';
import Character from './Character';

import GroundPlane from './GroundPlane';
import InstancedMazeWalls from './InstancedMazeWalls';
import MazePhysicsWalls from './MazePhysicsWalls';

export default function MazePage() {
  const [grid, setGrid] = useState([]);
  const [modelRef, setModelRef] = useState(null);

  useEffect(() => {
    fetch('/maze-assets/maze_grid.json')
      .then((res) => res.json())
      .then((data) => setGrid(data))
      .catch((err) => console.error('❌ Maze load error:', err));
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas 
        // camera={{ position: [0, 100, 100], fov: 60 }}>
        camera={{ position: [0, 100, 100],
        fov: 60, 
        near: 0.01, 
        far: 5000 
      }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 100, 0]} intensity={1} />
        <Physics gravity={[0, -9.8, 0]}>
          <GroundPlane />
          {grid.length > 0 && (
            <>
              <InstancedMazeWalls grid={grid} />
              <MazePhysicsWalls grid={grid} />
            </>
          )}
          <Character onModelRef={setModelRef}/>
          <Camera targetRef={modelRef}/>
        </Physics>
      </Canvas>
    </div>
  );
}
