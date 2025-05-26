// //code 5 interim works great
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
//       <button
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

//code 2
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
// import PathLine from './PathLine';
// import { useStore } from './store';
// import CoinManager from './CoinManager';

// import WordGlare from './components/WordGlare';
// import { loadWordList } from './utils/wordManager';

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
//   const [showPath, setShowPath] = useState(false);
//   const [lightOn, setLightOn] = useState(true);
//   const [musicMuted, setMusicMuted] = useState(false);
//   const [mazePath, setMazePath] = useState([]);

//   const [wordList, setWordList] = useState([]);
//   const [currentWord, setCurrentWord] = useState(null);

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => setMazePath(data))
//       .catch((err) => console.error('❌ Maze path load error:', err));
//   }, []);

//   useEffect(() => {
//     loadWordList().then(setWordList);
//   }, []);

//   useEffect(() => {
//     if (!wordList.length) return;

//     // const playSparkle = () => {
//     //   const audio = new Audio('/SPARKLE.mp3');
//     //   audio.volume = 0.5;
//     //   audio.play();
//     // };

//     const interval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * wordList.length);
//       const word = wordList[randomIndex];
//       setCurrentWord(word);
//       // playSparkle();
//     }, 5000); // every 5 seconds

//     return () => clearInterval(interval);
//   }, [wordList]);

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   let popupPosition = [0, 10, 35];
//   if (modelRef && modelRef.position) {
//     // const direction = new THREE.Vector3();
//     // modelRef.getWorldDirection(direction);
//     const forwardBias = new THREE.Vector3(0, 0, 1);  // typical "forward" base

//     const direction = forwardBias.clone().applyQuaternion(modelRef.quaternion).normalize();
//     direction.multiplyScalar(3);  // 3 units in front

//     popupPosition = [
//       modelRef.position.x + direction.x,
//       modelRef.position.y + 2,  // Slightly above
//       modelRef.position.z + direction.z
//     ];
//   }

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />
//       <CoinHUD />

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

//       {/* ✅ Toggle Music */}
//       <button
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
//           <Character
//             onModelRef={setModelRef}
//             wallBoxes={wallBoxes}
//             keys={keys}
//             lightOn={lightOn}
//             musicMuted={musicMuted}
//           />
//         )}

//         <PathLine visible={showPath} />

//         {currentWord && <WordGlare word={currentWord} position={popupPosition}  />}

//         <Camera targetRef={modelRef} />
//         {/* {modelRef && mazePath.length > 0 && (
//           <CoinManager characterRef={modelRef} mazePath={mazePath}/>
//         )} */}
//       </Canvas>
//     </div>
//   );
// }

//code 3 no buttons
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
// import PathLine from './PathLine';
// import { useStore } from './store';
// import CoinManager from './CoinManager';

// import WordGlare from './components/WordGlare';
// import { loadWordList } from './utils/wordManager';

// export default function MazePage() {
//   const [grid, setGrid] = useState([]);
//   const [modelRef, setModelRef] = useState(null);
//   const { keys, setControl } = useCharacterControls();
//   const [showPath, setShowPath] = useState(false);
//   const [lightOn, setLightOn] = useState(true);
//   const [musicMuted, setMusicMuted] = useState(false);
//   const [mazePath, setMazePath] = useState([]);
  
//   const [wordList, setWordList] = useState([]);

//   // Multiple anchor points
//   const anchorPoints = Array.from({ length: 10 }, () => ({
//     x: Math.random() * 200 - 100,
//     y: 5,
//     z: Math.random() * 200 - 100
//   }));

//   const [currentWords, setCurrentWords] = useState(
//     Array(anchorPoints.length).fill(null)
//   );

//   useEffect(() => {
//     loadWordList().then(setWordList);
//   }, []);

//   useEffect(() => {
//     fetch('/maze-assets/maze_grid.json')
//       .then((res) => res.json())
//       .then((data) => setGrid(data))
//       .catch((err) => console.error('❌ Maze load error:', err));
//   }, []);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => setMazePath(data))
//       .catch((err) => console.error('❌ Maze path load error:', err));
//   }, []);

//   // For each anchor, create an independent interval
//   anchorPoints.forEach((anchor, index) => {
//     useEffect(() => {
//       if (!wordList.length) return;

//       const interval = setInterval(() => {
//         const randomIndex = Math.floor(Math.random() * wordList.length);
//         const word = wordList[randomIndex];

//         setCurrentWords(prev => {
//           const newWords = [...prev];
//           newWords[index] = word;
//           return newWords;
//         });
//       }, 5000 + Math.random() * 2000);

//       return () => clearInterval(interval);
//     }, [wordList]);
//   });

//   const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <OnScreenControls setControl={setControl} />

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

//         <PathLine visible={showPath} />

//         {/* Render multiple WordGlares */}
//         {anchorPoints.map((anchor, index) => (
//           <WordGlare
//             key={`glare-${index}`}
//             word={currentWords[index]}
//             position={[anchor.x, anchor.y, anchor.z]}
//           />
//         ))}

//         <Camera targetRef={modelRef} />
//       </Canvas>
//     </div>
//   );
// }


//code 4
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
import PathLine from './PathLine';
import { useStore } from './store';
import CoinManager from './CoinManager';

import WordGlare from './components/WordGlare';
import { loadWordList } from './utils/wordManager';

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
  const [showPath, setShowPath] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  const [musicMuted, setMusicMuted] = useState(false);
  const [mazePath, setMazePath] = useState([]);

  const [wordList, setWordList] = useState([]);

  const anchorPoints = useMemo(() => 
    Array.from({ length: 10 }, () => ({
      x: Math.random() * 200 - 100,
      y: 5,
      z: Math.random() * 200 - 100
    })), []
  );

  const [currentWords, setCurrentWords] = useState(
    Array(anchorPoints.length).fill(null)
  );

  useEffect(() => {
    loadWordList().then(setWordList);
  }, []);

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

  // For each anchor, create an independent interval
  anchorPoints.forEach((anchor, index) => {
    useEffect(() => {
      if (!wordList.length) return;

      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const word = wordList[randomIndex];

        setCurrentWords(prev => {
          const newWords = [...prev];
          newWords[index] = word;
          return newWords;
        });
      }, 5000 + Math.random() * 2000);

      return () => clearInterval(interval);
    }, [wordList]);
  });

  const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <OnScreenControls setControl={setControl} />
      <CoinHUD />

      {/* ✅ Show/Hide Path Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowPath(prev => !prev);
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
          touchAction: 'none'
        }}
      >
        {showPath ? 'Hide Path' : 'Show Path'}
      </button>

      {/* ✅ Toggle Glow */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setLightOn(prev => !prev);
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
          touchAction: 'none'
        }}
      >
        Toggle Glow
      </button>

      {/* ✅ Toggle Music */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setMusicMuted(prev => !prev);
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
          touchAction: 'none'
        }}
      >
        {musicMuted ? 'Unmute Music' : 'Mute Music'}
      </button>

      <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far: 30000 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 20, 10]} intensity={0.5} />
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
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
          />
        )}

        <PathLine visible={showPath} />

        {/* Render multiple WordGlares */}
        {anchorPoints.map((anchor, index) => (
          <WordGlare
            key={`glare-${index}`}
            word={currentWords[index]}
            position={[anchor.x, anchor.y, anchor.z]}
          />
        ))}

        <Camera targetRef={modelRef} />
      </Canvas>
    </div>
  );
}
