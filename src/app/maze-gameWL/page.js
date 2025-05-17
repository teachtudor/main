//code 2 page.js
// 'use client';

// import { useEffect, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics } from '@react-three/cannon';

// import MazeWalls from './InstancedMazeWalls';
// import GroundPlane from './GroundPlane';
// import Camera from './Camera';
// import Character from './Character';
// import MazePhysicsManager from './MazePhysicsManager';

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

//         <Physics gravity={[0, -9.8, 0]}>
//           <GroundPlane />
//           {grid.length > 0 && <MazeWalls grid={grid} />}
//           {grid.length > 0 && modelRef && (
//             <MazePhysicsManager grid={grid} targetRef={modelRef} />
//           )}
//           <Character onModelRef={setModelRef} />
//         </Physics>
//       </Canvas>
//     </div>
//   );
// }


//code 3 works great
// 'use client';

// import { useEffect, useState, useMemo } from 'react';
// import { Canvas } from '@react-three/fiber';
// import Camera from './Camera';
// import Character from './Character';
// import GroundPlane from './GroundPlane';
// import InstancedMazeWalls from './InstancedMazeWalls';
// import { generateWallBoxes } from './InvisibleMazeColliders';

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
  

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas shadows camera={{ position: [0, 30, 30], fov: 60, near: 0.1, far:5000 }}>
//         {/* <ambientLight intensity={1.5} />
//         <directionalLight position={[10, 30, 10]} intensity={1} /> */}
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />



//         <directionalLight
//           position={[10, 30, -10]}
//           intensity={10}
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-near={0.5}
//           shadow-camera-far={100}
//           shadow-camera-left={-50}
//           shadow-camera-right={50}
//           shadow-camera-top={50}
//           shadow-camera-bottom={-50}
//         />

//         <GroundPlane />
//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character onModelRef={setModelRef} wallBoxes={wallBoxes} />
//         )}
//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }

//code 4 trial worked
'use client';

import { useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Camera from './Camera';
import Character from './Character';
import GroundPlane from './GroundPlane';
import InstancedMazeWalls from './InstancedMazeWalls';
import { generateWallBoxes } from './InvisibleMazeColliders';
import OnScreenControls from './OnScreenControls';
import useCharacterControls from './useCharacterControls';
import SkyDome from './SkyDome';
import SurroundGrassPlane from './SurroundGrassPlane';

export default function MazePage() {
  const [grid, setGrid] = useState([]);
  const [modelRef, setModelRef] = useState(null);
  const { keys, setControl } = useCharacterControls();

  useEffect(() => {
    fetch('/maze-assets/maze_grid.json')
      .then((res) => res.json())
      .then((data) => setGrid(data))
      .catch((err) => console.error('❌ Maze load error:', err));
  }, []);

  const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <OnScreenControls setControl={setControl} />
      <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far:30000 }}>
        {/* <ambientLight intensity={1.5} />
        <directionalLight position={[10, 30, 10]} intensity={1} /> */}
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 20, 10]} intensity={0.5} />
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
        <SkyDome/>


        <directionalLight
          position={[10, 30, -10]}
          intensity={10}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={100}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />
        <SurroundGrassPlane/>

        <GroundPlane />
        {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
        {grid.length > 0 && (
          <Character onModelRef={setModelRef} wallBoxes={wallBoxes} keys={keys} />
        )}
        <Camera targetRef={modelRef} />
      </Canvas>
    </div>
  );
}

//code 5 trial 1. FOR MAZE MAP
// 'use client';

// import { useEffect, useState, useMemo } from 'react';
// import { Canvas } from '@react-three/fiber';
// import Camera from './Camera';
// import Character from './Character';
// import GroundPlane from './GroundPlane';
// import InstancedMazeWalls from './InstancedMazeWalls';
// import { generateWallBoxes } from './InvisibleMazeColliders';
// import OnScreenControls from './OnScreenControls';
// import useCharacterControls from './useCharacterControls';
// import MiniMap from './MiniMap';

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();
//   const [charPos, setCharPos] = useState(null);
//   const [path, setPath] = useState([]);


//   // useEffect(() => {
//   //   fetch('/maze-assets/maze_grid.json')
//   //     .then((res) => res.json())
//   //     .then((data) => setGrid(data))
//   //     .catch((err) => console.error('❌ Maze load error:', err));
//   // }, []);
//   useEffect(() => {
//   Promise.all([
//     fetch('/maze-assets/maze_grid.json').then((res) => res.json()),
//     fetch('/maze-assets/maze_path.json').then((res) => res.json())
//   ])
//   .then(([gridData, pathData]) => {
//     setGrid(gridData);
//     setPath(pathData);
//   })
//   .catch(console.error);
// }, []);


//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />
//       {grid.length > 0 && charPos && <MiniMap grid={grid} position={charPos} />}
//       <Canvas shadows camera={{ position: [0, 30, 30], fov: 60, near: 0.1, far:5000 }}>
//         {/* <ambientLight intensity={1.5} />
//         <directionalLight position={[10, 30, 10]} intensity={1} /> */}
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
//         <directionalLight
//           position={[10, 30, -10]}
//           intensity={10}
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-near={0.5}
//           shadow-camera-far={100}
//           shadow-camera-left={-50}
//           shadow-camera-right={50}
//           shadow-camera-top={50}
//           shadow-camera-bottom={-50}
//         />

//         <GroundPlane />
//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character 
//             onModelRef={setModelRef} 
//             wallBoxes={wallBoxes} 
//             keys={keys}
//             startPosition={path[0]}
//             onPositionChange={setCharPos} 
//           />
//         )}
//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }