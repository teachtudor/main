// 'use client';
// import SceneWrapper from './SceneWrapper';
// import GroundPlane from './GroundPlane';
// import ResizeListener from './ResizeListener';
// import GLBModel from './GLBModel';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Physics } from '@react-three/cannon';
// import { useState, useEffect, useFrame } from 'react';
// import Character from './Character';
// import TestMover from './TestMover';

// export default function Page() {
//   const [keys, setKeys] = useState({});
//   const [followEnabled, setFollowEnabled] = useState(true);

//   useEffect(() => {
//     const down = (e) => setKeys((k) => ({ ...k, [e.key]: true }));
//     const up = (e) => setKeys((k) => ({ ...k, [e.key]: false }));
//     document.addEventListener('keydown', down);
//     document.addEventListener('keyup', up);
//     return () => {
//       document.removeEventListener('keydown', down);
//       document.removeEventListener('keyup', up);
//     };
//   }, []);

// return (
//   <>
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
//       <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

//       <Physics gravity={[0,-9.81, 0]}>
//         <SceneWrapper keys={keys} followEnabled={followEnabled} />
//         {/* <TestMover /> */}
//         <GroundPlane />
//         <GLBModel url="/testbath.glb" position={[9.1, 0.1, -1.39]} scale={2.8} rotation={[0, Math.PI/3, 0]} />
//         <GLBModel url="/TKB.glb" position={[-2, 0.1, -2]} scale={2.7} rotation={[0, Math.PI*1.34/4, 0]} />
//         <GLBModel url="/livingRoom.glb" position={[5, 0.1, 10]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
//         <GLBModel url="/bedroom.glb" position={[-9.2, 0.1, 6.79]} scale={1.3} rotation={[0, Math.PI*2.5/3, 0]} />
//       </Physics>

//       <ResizeListener />
//     </Canvas>

//     {/* ✅ Touch Controls for mobile/tablet */}
//     <div className="fixed bottom-4 left-4 flex flex-col items-center gap-2 z-50 select-none">
//       <button
//         onTouchStart={() => setKeys((k) => ({ ...k, ArrowUp: true }))}
//         onTouchEnd={() => setKeys((k) => ({ ...k, ArrowUp: false }))}
//         className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
//       >↑</button>

//       <div className="flex gap-2">
//         <button
//           onTouchStart={() => setKeys((k) => ({ ...k, ArrowLeft: true }))}
//           onTouchEnd={() => setKeys((k) => ({ ...k, ArrowLeft: false }))}
//           className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
//         >←</button>
//         <button
//           onTouchStart={() => setKeys((k) => ({ ...k, ArrowRight: true }))}
//           onTouchEnd={() => setKeys((k) => ({ ...k, ArrowRight: false }))}
//           className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
//         >→</button>
//       </div>

//       <button
//         onTouchStart={() => setKeys((k) => ({ ...k, ArrowDown: true }))}
//         onTouchEnd={() => setKeys((k) => ({ ...k, ArrowDown: false }))}
//         className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
//       >↓</button>
//     </div>

//     <div className="fixed bottom-4 right-4 z-50 select-none">
//       <button
//         onTouchStart={() => setKeys((k) => ({ ...k, r: true }))}
//         onTouchEnd={() => setKeys((k) => ({ ...k, r: false }))}
//         className="w-20 h-20 rounded-full bg-red-600 text-white text-2xl font-bold shadow"
//       >R</button>
//     </div>
//     <div className="fixed top-4 right-4 z-50">
//       <button
//         onClick={() => setFollowEnabled((prev) => !prev)}
//         className="px-4 py-2 rounded bg-blue-600 text-white font-bold shadow"
//       >
//         {followEnabled ? 'Free Orbit' : 'Follow Cam'}
//       </button>
//     </div>
//   </>
// );
// }


//code 2 works great
'use client';
import { useState, useEffect } from 'react';
import SceneWrapper from './SceneWrapper';
import GroundPlane from './GroundPlane';
import ResizeListener from './ResizeListener';
import GLBModel from './GLBModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Navbar from '../Navbar';
import RadialHUD from './RadialHUD';

export default function Page() {
  const [keys, setKeys] = useState({});
  const [followEnabled, setFollowEnabled] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: true }));
    };
    const handleKeyUp = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <Canvas
        shadows
        camera={{ position: [0, 5, 15], fov: 75 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
        <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

        <Physics gravity={[0, -1300.81, 0]}>
          <SceneWrapper keys={keys} followEnabled={followEnabled} />
          <GroundPlane />
          <GLBModel url="/testbath.glb" position={[9.1, 0.1, -1.39]} scale={2.8} rotation={[0, Math.PI / 3, 0]} />
          <GLBModel url="/TKB.glb" position={[-2, 0.1, -2]} scale={2.7} rotation={[0, Math.PI * 1.34 / 4, 0]} />
          <GLBModel url="/livingRoom.glb" position={[5, 0.1, 10]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
          <GLBModel url="/bedroom.glb" position={[-9.2, 0.1, 6.79]} scale={1.3} rotation={[0, Math.PI * 2.5 / 3, 0]} />
        </Physics>

        <ResizeListener />
      </Canvas>

      {/* ✅ Touch Controls for mobile/tablet */}
      <div className="fixed bottom-4 left-4 flex flex-col items-center gap-2 z-50 select-none">
        <button
          onTouchStart={() => setKeys((k) => ({ ...k, ArrowUp: true }))}
          onTouchEnd={() => setKeys((k) => ({ ...k, ArrowUp: false }))}
          className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
        >↑</button>

        <div className="flex gap-2">
          <button
            onTouchStart={() => setKeys((k) => ({ ...k, ArrowLeft: true }))}
            onTouchEnd={() => setKeys((k) => ({ ...k, ArrowLeft: false }))}
            className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
          >←</button>
          <button
            onTouchStart={() => setKeys((k) => ({ ...k, ArrowRight: true }))}
            onTouchEnd={() => setKeys((k) => ({ ...k, ArrowRight: false }))}
            className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
          >→</button>
        </div>

        <button
          onTouchStart={() => setKeys((k) => ({ ...k, ArrowDown: true }))}
          onTouchEnd={() => setKeys((k) => ({ ...k, ArrowDown: false }))}
          className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
        >↓</button>
      </div>

      <div className="fixed bottom-4 right-4 z-50 select-none flex flex-col gap-2">
        {[
          { key: 'r', label: 'R' },
          { key: 'l', label: 'L' },
          { key: 'c', label: 'C' },
          { key: 'j', label: 'J' },
          { key: 's', label: 'S' },
          { key: 'g', label: 'G' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onTouchStart={() => setKeys((k) => ({ ...k, [key]: true }))}
            onTouchEnd={() => setKeys((k) => ({ ...k, [key]: false }))}
            className="w-14 h-14 rounded-full bg-red-600 text-white text-lg font-bold shadow"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setFollowEnabled((prev) => !prev)}
          className="mt-12 px-4 py-2 rounded bg-blue-600 text-white font-bold shadow"
        >
          {followEnabled ? 'Free Orbit' : 'Follow Cam'}
        </button>
      </div>
    </>
  );
}


