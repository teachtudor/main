//code 1 page.js
// 'use client';

// import { useEffect, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics } from '@react-three/rapier';

// import MazeWalls from './MazeWalls';
// import GroundPlane from './GroundPlane';
// import Camera from './Camera';
// import Character from './Character';

// export default function MazePage() {
//   const [modelRef, setModelRef] = useState(null);
//   const [grid, setGrid] = useState([]);

//   // Load the maze grid only once
//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('✅ Maze grid loaded:', data.length, 'rows');
//         setGrid(data);
//       })
//       .catch((err) => console.error('❌ Failed to load maze grid:', err));
//   }, []);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas
//         camera={{ position: [50, 150, 50], fov: 60, near: 0.1, far: 5000 }}
//         style={{ background: '#111' }}
//       >
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[0, 100, 0]} intensity={1} />

//         <Camera targetRef={modelRef} />

//         <Physics gravity={[0, -9.8, 0]} debug>
//           <GroundPlane />
//           <Character onModelRef={setModelRef} />
//           <MazeWalls grid={grid}/>
//         </Physics>
//       </Canvas>
//     </div>
//   );
// }


//code 2 page.js rapier

'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';

import MazeWalls from './MazeWalls';
import GroundPlane from './GroundPlane';
import Camera from './Camera';
import Character from './Character';

import ResizeListener from './ResizeListener';

export default function MazePage() {
  const [modelRef, setModelRef] = useState(null);
  const [grid, setGrid] = useState([]);
  const handleResize = ({ width, height }) => {
    console.log(`🖥️ Resized to ${width} x ${height}`);
    // optionally update a state or trigger other effects
  };

  useEffect(() => {
    fetch('/maze-assets/maze_grid.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('✅ Maze grid loaded:', data.length, 'rows');
        setGrid(data);
      })
      .catch((err) => console.error('❌ Failed to load maze grid:', err));
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
        {/* ✅ Logic-only component – NO canvas context needed */}
      <ResizeListener onResize={handleResize} />
      <Canvas
        camera={{ position: [50, 150, 50], fov: 60, near: 0.1, far: 5000 }}
        style={{ background: '#111' }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 100, 0]} intensity={1} />

        <Camera targetRef={modelRef} />

        <Physics gravity={[0, -9.8, 0]} debug>
          <GroundPlane />
          <Character onModelRef={setModelRef} />
          <MazeWalls grid={grid} />
        </Physics>
      </Canvas>
    </div>
  );
}
