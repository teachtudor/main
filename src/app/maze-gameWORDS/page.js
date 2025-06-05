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
// import SkyDome from './SkyDome';
// import SurroundGrassPlane from './SurroundGrassPlane';

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />
//       <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far:30000 }}>
//         {/* <ambientLight intensity={1.5} />
//         <directionalLight position={[10, 30, 10]} intensity={1} /> */}
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
//         <SkyDome/>


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
//         <SurroundGrassPlane/>

//         <GroundPlane />
//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character onModelRef={setModelRef} wallBoxes={wallBoxes} keys={keys} />
//         )}
//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }

//code interim 1
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
// import SkyDome from './SkyDome';
// import SurroundGrassPlane from './SurroundGrassPlane';
// import PathLine from './PathLine'; // ✅ new import

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();
//   const [showPath, setShowPath] = useState(false); // ✅ toggle state

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />

//       {/* ✅ Toggle Button */}
//       <button
//         onClick={() => setShowPath((prev) => !prev)}
//         style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//         }}
//       >
//         {showPath ? 'Hide Path' : 'Show Path'}
//       </button>

//       <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far: 30000 }}>
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
//         <SkyDome />
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
//         <SurroundGrassPlane />
//         <GroundPlane />

//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character onModelRef={setModelRef} wallBoxes={wallBoxes} keys={keys} />
//         )}

//         {/* ✅ Path line toggle */}
//         <PathLine visible={showPath} />

//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }

//code interim 2
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
// import SkyDome from './SkyDome';
// import SurroundGrassPlane from './SurroundGrassPlane';
// import PathLine from './PathLine'; // ✅ new import

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();
//   const [showPath, setShowPath] = useState(false); // ✅ toggle state

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />

//       {/* ✅ Toggle Button */}
//       <button
//         onClick={(e) => {
//           e.preventDefault(); // ✅ stop native behavior
//           setShowPath((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()} // ✅ block long-press menu
//         onContextMenu={(e) => e.preventDefault()} // ✅ block context menu on long press
//         style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           WebkitUserSelect: 'none',  // ✅ prevent selection
//           userSelect: 'none',
//           touchAction: 'none',       // ✅ prevent OS gestures
//         }}
//       >
//         {showPath ? 'Hide Path' : 'Show Path'}
//       </button>


//       <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far: 30000 }}>
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
//         <SkyDome />
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
//         <SurroundGrassPlane />
//         <GroundPlane />

//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character onModelRef={setModelRef} wallBoxes={wallBoxes} keys={keys} />
//         )}

//         {/* ✅ Path line toggle */}
//         <PathLine visible={showPath} />

//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }

//code interim 3
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
// import SkyDome from './SkyDome';
// import SurroundGrassPlane from './SurroundGrassPlane';
// import PathLine from './PathLine'; // ✅ new import

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();
//   const [showPath, setShowPath] = useState(false); // ✅ toggle state
//   const [lightOn, setLightOn] = useState(true);
//   const [musicMuted, setMusicMuted] = useState(false);


//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />

//       {/* ✅ Show/Hide Path Button */}
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           setShowPath((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()}
//         onContextMenu={(e) => e.preventDefault()}
//         style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           userSelect: 'none',
//           touchAction: 'none',
//         }}
//       >
//         {showPath ? 'Hide Path' : 'Show Path'}
//       </button>

//       {/* ✅ Toggle Glow */}
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           setLightOn((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()}
//         onContextMenu={(e) => e.preventDefault()}
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           userSelect: 'none',
//           touchAction: 'none',
//         }}
//       >
//         Toggle Glow
//       </button>

//       {/* ✅ Toggle Music (It's stupid remove it*/}
//       {/* <button
//         onClick={(e) => {
//           e.preventDefault();
//           setMusicMuted((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()}
//         onContextMenu={(e) => e.preventDefault()}
//         style={{
//           position: 'absolute',
//           top: 120,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           userSelect: 'none',
//           touchAction: 'none',
//         }}
//       >
//         {musicMuted ? 'Unmute Music' : 'Mute Music'}
//       </button> */}

//       <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far: 30000 }}>
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
//         <SkyDome />
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
//         <SurroundGrassPlane />
//         <GroundPlane />

//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character 
//             onModelRef={setModelRef} 
//             wallBoxes={wallBoxes} 
//             keys={keys} 
//             lightOn={lightOn}
//             musicMuted={musicMuted}
//           />
//         )}

//         {/* ✅ Path line toggle */}
//         <PathLine visible={showPath} />

//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }

//code interim 4 page.js
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
// import SkyDome from './SkyDome';
// import SurroundGrassPlane from './SurroundGrassPlane';
// import PathLine from './PathLine'; // ✅ new import
// import { useStore } from './store';
// import CoinManager from './CoinManager';

// function CoinHUD() {
//   const coins = useStore((state) => state.coins);
//   return (
//     <div style={{
//       position: 'absolute',
//       top: 20,
//       left: 20,
//       color: 'gold',
//       fontSize: '20px',
//       fontWeight: 'bold',
//       zIndex: 1000
//     }}>
//       🪙 {coins}
//     </div>
//   );
// }

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();
//   const [showPath, setShowPath] = useState(false); // ✅ toggle state
//   const [lightOn, setLightOn] = useState(true);
//   const [musicMuted, setMusicMuted] = useState(false);
//   const [mazePath, setMazePath] = useState([]);


//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   useEffect(() => {
//   fetch('/maze-assets/maze_path.json')
//     .then((res) => res.json())
//     .then((data) => setMazePath(data))
//     .catch((err) => console.error('❌ Maze path load error:', err));
//   }, []);


//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />
//       <CoinHUD/>

//       {/* ✅ Show/Hide Path Button */}
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           setShowPath((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()}
//         onContextMenu={(e) => e.preventDefault()}
//         style={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           userSelect: 'none',
//           touchAction: 'none',
//         }}
//       >
//         {showPath ? 'Hide Path' : 'Show Path'}
//       </button>

//       {/* ✅ Toggle Glow */}
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           setLightOn((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()}
//         onContextMenu={(e) => e.preventDefault()}
//         style={{
//           position: 'absolute',
//           top: 70,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           userSelect: 'none',
//           touchAction: 'none',
//         }}
//       >
//         Toggle Glow
//       </button>

//       {/* ✅ Toggle Music (It's stupid remove it*/}
//       {/* <button
//         onClick={(e) => {
//           e.preventDefault();
//           setMusicMuted((prev) => !prev);
//         }}
//         onTouchStart={(e) => e.preventDefault()}
//         onContextMenu={(e) => e.preventDefault()}
//         style={{
//           position: 'absolute',
//           top: 120,
//           right: 20,
//           zIndex: 1000,
//           padding: '10px 20px',
//           fontSize: '16px',
//           background: '#fff',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           userSelect: 'none',
//           touchAction: 'none',
//         }}
//       >
//         {musicMuted ? 'Unmute Music' : 'Mute Music'}
//       </button> */}

//       <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far: 30000 }}>
//         <ambientLight intensity={0.8} />
//         <pointLight position={[0, 20, 10]} intensity={0.5} />
//         <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
//         <SkyDome />
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
//         <SurroundGrassPlane />
//         <GroundPlane />

//         {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
//         {grid.length > 0 && (
//           <Character 
//             onModelRef={setModelRef} 
//             wallBoxes={wallBoxes} 
//             keys={keys} 
//             lightOn={lightOn}
//             musicMuted={musicMuted}
//           />
//         )}

//         {/* ✅ Path line toggle */}
//         <PathLine visible={showPath} />

//         <Camera targetRef={modelRef} />
//         {/* {modelRef && mazePath.length > 0 && (
//           <CoinManager characterRef={modelRef} mazePath={mazePath}/>
//         )} */}
//       </Canvas>
//     </div>
//   );
// }

//code 5 interim
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
import PathLine from './PathLine'; // ✅ new import
import { useStore } from './store';
import CoinManager from './CoinManager';
import { products } from '../home/page';
import ProductBillboards from './ProductBillboards';
import StarSphere from './StarSphere';
import WordCSVRenderer from './WordCSVRenderer';


function CoinHUD() {
  const coins = useStore((state) => state.coins);
  return (
    <div style={{
      position: 'absolute',
      top: 20,
      left: 20,
      color: 'gold',
      fontSize: '20px',
      fontWeight: 'bold',
      zIndex: 1000
    }}>
      🪙 {coins}
    </div>
  );
}

export default function MazePage() {
  const [grid, setGrid] = useState([]);
  const [modelRef, setModelRef] = useState(null);
  const { keys, setControl } = useCharacterControls();
  const [showPath, setShowPath] = useState(false); // ✅ toggle state
  const [lightOn, setLightOn] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);
  const [mazePath, setMazePath] = useState([]);
  const [followMode, setFollowMode] = useState(false);
  const [gameOver, setGameOver] = useState(false);



  useEffect(() => {
    fetch('/maze-assets/maze_grid.json')
      .then((res) => res.json())
      .then((data) => setGrid(data))
      .catch((err) => console.error('❌ Maze load error:', err));
  }, []);

  useEffect(() => {
  fetch('/maze-assets/maze_path.json')
    .then((res) => res.json())
    .then((data) => setMazePath(data))
    .catch((err) => console.error('❌ Maze path load error:', err));
  }, []);


  const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

  return (
    <>
    {gameOver && (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(150, 0, 0, 0.85)',
    color: 'white',
    fontSize: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    userSelect: 'none',
    pointerEvents: 'auto',
  }}>
    GAME OVER
  </div>
)}

      <div style={{ width: '100vw', height: '100vh' }}>
        <OnScreenControls setControl={setControl} />
        <CoinHUD/>

        {/* ✅ Show/Hide Path Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowPath((prev) => !prev);
          }}
          onTouchStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1000,
            padding: '10px 20px',
            fontSize: '16px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            touchAction: 'none',
          }}
        >
          {showPath ? 'Hide Path' : 'Show Path'}
        </button>

        {/* ✅ Toggle Glow */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLightOn((prev) => !prev);
          }}
          onTouchStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            position: 'absolute',
            top: 70,
            right: 20,
            zIndex: 1000,
            padding: '10px 20px',
            fontSize: '16px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            touchAction: 'none',
          }}
        >
          Toggle Glow
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setMusicMuted((prev) => !prev);
          }}
          onTouchStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            position: 'absolute',
            top: 120,
            right: 20,
            zIndex: 1000,
            padding: '10px 20px',
            fontSize: '16px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            touchAction: 'none',
          }}
        >
          {musicMuted ? 'Unmute Music' : 'Mute Music'}
        </button>

        <Canvas 
          shadows 
          camera={{ position: [0, 25000, 0], fov: 60, near: 0.00001, far: 180000 }}
          >
          <ambientLight intensity={0.8} />
          <pointLight position={[0, 20, 10]} intensity={0.5} />
          <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
          {/* <StarSphere/> */}
          <SkyDome />
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
          <SurroundGrassPlane />
          <GroundPlane />

          {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
          {grid.length > 0 && (
            <Character 
              onModelRef={setModelRef} 
              wallBoxes={wallBoxes} 
              keys={keys} 
              lightOn={lightOn}
              musicMuted={musicMuted}
              onGameOver={() => setGameOver(true)} // ✅ Trigger overlay
            />
          )}

          {/* ✅ Path line toggle */}
          <PathLine visible={showPath} />
          {mazePath.length > 0 && <ProductBillboards 
            mazePath={mazePath} products={products} />}

          {/* <Camera targetRef={modelRef} /> */}
          <Camera targetRef={modelRef} followMode={followMode} setFollowMode={setFollowMode} />

          <WordCSVRenderer followEnabled={followMode} grid={grid} />


          {/* {modelRef && mazePath.length > 0 && (
            <CoinManager characterRef={modelRef} mazePath={mazePath}/>
          )} */}
        </Canvas>
      </div>
    </>
  );
}

