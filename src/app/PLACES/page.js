//code 1 for fbx
// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useHelper } from '@react-three/drei';
// import { useEffect, useRef, useState, Suspense } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three-stdlib';

// function FBXModel({ path }) {
//   const group = useRef();
//   const [model, setModel] = useState();

//   useEffect(() => {
//     const loader = new FBXLoader();
//     loader.load(path, (loaded) => {
//       loaded.scale.set(0.01, 0.01, 0.01); // Optional: scale down
//       setModel(loaded);
//     });
//   }, [path]);

//   return model ? <primitive ref={group} object={model} /> : null;
// }

// export default function FbxViewer() {
//   return (
//     <div className="w-screen h-screen">
//       <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Suspense fallback={null}>
//           <FBXModel path="/Bathroom.fbx" />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

//code 2 for glb  individual
// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Suspense } from 'react';

// function GLBModel({ path }) {
//   const { scene } = useGLTF(path);
//   return <primitive object={scene} />;
// }

// export default function GlbViewer() {
//   return (
//     <div className="w-screen h-screen">
//       <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Suspense fallback={null}>
//           {/* <GLBModel path="/testBath.glb" /> */}
//           <GLBModel path="/KitchenBlend.glb"/>
//         </Suspense>
//         <OrbitControls />
//         <directionalLight 
//             position={[5, 10, 5]} 
//             intensity={1.5} 
//             castShadow 
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//         />
//       </Canvas>
//     </div>
//   );
// }

//code 3 both glb some tweaks to be made
// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Suspense, useEffect, useState, useCallback } from 'react';

// function GLBModel({ path }) {
//   const { scene } = useGLTF(path);
//   return <primitive object={scene} />;
// }

// const scenes = [
//   { name: 'Bathroom', path: '/testbath.glb' },
//   { name: 'Kitchen', path: '/KitchenBlend.glb' }
// ];

// export default function SceneSwitcher() {
//   const [index, setIndex] = useState(0);

//   const goLeft = useCallback(() => {
//     setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
//   }, []);

//   const goRight = useCallback(() => {
//     setIndex((prev) => (prev + 1) % scenes.length);
//   }, []);

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === 'ArrowLeft') goLeft();
//       if (e.key === 'ArrowRight') goRight();
//     };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, [goLeft, goRight]);

//   return (
//     <div className="w-screen h-screen relative">
//       <Canvas camera={{ position: [4, 6, 4], fov: 50 }}>
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 10, 5]} intensity={1.5} />
//         <Suspense fallback={null}>
//           <GLBModel path={scenes[index].path} />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>

//       {/* UI arrows */}
//       <div className="absolute top-1/2 left-4 text-4xl cursor-pointer select-none" onClick={goLeft}>
//         ⬅️
//       </div>
//       <div className="absolute top-1/2 right-4 text-4xl cursor-pointer select-none" onClick={goRight}>
//         ➡️
//       </div>

//       {/* Optional label */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
//         {scenes[index].name}
//       </div>
//     </div>
//   );
// }


//code 4 trial
// 'use client';

// import { Canvas, useThree } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
// import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
// import * as THREE from 'three';

// function GLBModel({ path }) {
//   const group = useRef();
//   const { scene } = useGLTF(path);

//   useEffect(() => {
//     if (group.current && scene) {
//       const box = new THREE.Box3().setFromObject(scene);
//       const center = new THREE.Vector3();
//       const size = new THREE.Vector3();
//       box.getCenter(center);
//       box.getSize(size);

//       // ONLY center X and Z — leave Y alone
//       scene.position.x -= center.x;
//       scene.position.z -= center.z;

//       // Scale to fit in view
//       const maxDim = Math.max(size.x, size.y, size.z);
//       const scale = 2 / maxDim;
//       scene.scale.setScalar(scale);
//     }
//   }, [scene]);

//   return <group ref={group}><primitive object={scene} /></group>;
// }

// const scenes = [
//   {
//     name: 'Bathroom',
//     path: '/testbath.glb',
//     camera: { position: [4, 6, 4], fov: 50 }
//   },
//   {
//     name: 'Kitchen',
//     path: '/KitchenBlend.glb',
//     camera: { position: [2,3,2.5], fov: 35 }
//   }
// ];

// export default function SceneSwitcher() {
//   const [index, setIndex] = useState(0);
//   const cameraRef = useRef();

//   const goLeft = useCallback(() => {
//     setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
//   }, []);

//   const goRight = useCallback(() => {
//     setIndex((prev) => (prev + 1) % scenes.length);
//   }, []);

//   // Update camera position & fov when scene changes
//   useEffect(() => {
//     const cam = cameraRef.current;
//     const settings = scenes[index].camera;

//     if (cam && settings) {
//       cam.position.set(...settings.position);
//       cam.fov = settings.fov;
//       cam.updateProjectionMatrix();
//     }
//   }, [index]);

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === 'ArrowLeft') goLeft();
//       if (e.key === 'ArrowRight') goRight();
//     };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, [goLeft, goRight]);

//   return (
//     <div className="w-screen h-screen relative">
//       <Canvas>
//         <PerspectiveCamera
//           ref={cameraRef}
//           makeDefault
//           position={scenes[index].camera.position}
//           fov={scenes[index].camera.fov}
//         />
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 10, 5]} intensity={1.5} />
//         <Suspense fallback={null}>
//           <GLBModel path={scenes[index].path} />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>

//       {/* UI arrows */}
//       <div className="absolute top-1/2 left-4 text-4xl cursor-pointer select-none" onClick={goLeft}>
//         ⬅️
//       </div>
//       <div className="absolute top-1/2 right-4 text-4xl cursor-pointer select-none" onClick={goRight}>
//         ➡️
//       </div>

//       {/* Scene label */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
//         {scenes[index].name}
//       </div>
//     </div>
//   );
// }

//code 5
// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
// import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
// import * as THREE from 'three';

// function GLBModel({ path }) {
//   const group = useRef();
//   const { scene } = useGLTF(path);

//   useEffect(() => {
//     if (group.current && scene) {
//       const box = new THREE.Box3().setFromObject(scene);
//       const center = new THREE.Vector3();
//       const size = new THREE.Vector3();
//       box.getCenter(center);
//       box.getSize(size);

//       // ONLY center X and Z — leave Y alone
//       scene.position.x -= center.x;
//       scene.position.z -= center.z;

//       // Scale to fit in view
//       const maxDim = Math.max(size.x, size.y, size.z);
//       const scale = 2 / maxDim;
//       scene.scale.setScalar(scale);
//     }
//   }, [scene]);

//   return <group ref={group}><primitive object={scene} /></group>;
// }

// const scenes = [
//   {
//     name: 'Bathroom',
//     path: '/testbath.glb',
//     camera: { position: [4, 6, 4], fov: 50 }
//   },
//   {
//     name: 'Kitchen',
//     path: '/KitchenBlend.glb',
//     camera: { position: [6,3,8], fov:45

//     }
//   }
// ];

// export default function SceneSwitcher() {
//   const [index, setIndex] = useState(0);
//   const cameraRef = useRef();
//   const controlsRef = useRef();

//   const goLeft = useCallback(() => {
//     setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
//   }, []);

//   const goRight = useCallback(() => {
//     setIndex((prev) => (prev + 1) % scenes.length);
//   }, []);

//   // Update camera position & fov, then reset OrbitControls
//   useEffect(() => {
//     const cam = cameraRef.current;
//     const controls = controlsRef.current;
//     const settings = scenes[index].camera;

//     if (cam && settings) {
//       cam.position.set(...settings.position);
//       cam.fov = settings.fov;
//       cam.updateProjectionMatrix();
//     }

//     if (controls) {
//       controls.reset();
//     }
//   }, [index]);

//   // Keyboard support for scene switching
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === 'ArrowLeft') goLeft();
//       if (e.key === 'ArrowRight') goRight();
//     };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, [goLeft, goRight]);

//   return (
//     <div className="w-screen h-screen relative">
//       <Canvas>
//         <PerspectiveCamera
//           ref={cameraRef}
//           makeDefault
//           position={scenes[index].camera.position}
//           fov={scenes[index].camera.fov}
//         />
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 10, 5]} intensity={1.5} />
//         <Suspense fallback={null}>
//           <GLBModel path={scenes[index].path} />
//         </Suspense>
//         <OrbitControls ref={controlsRef} />
//       </Canvas>

//       {/* UI arrows */}
//       <div className="absolute top-1/2 left-4 text-4xl cursor-pointer select-none" onClick={goLeft}>
//         ⬅️
//       </div>
//       <div className="absolute top-1/2 right-4 text-4xl cursor-pointer select-none" onClick={goRight}>
//         ➡️
//       </div>

//       {/* Scene label */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
//         {scenes[index].name}
//       </div>
//     </div>
//   );
// }


//code 5 works great to display each location kitchen, bathroom, living room
// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
// import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
// import * as THREE from 'three';
// import Navbar from './../Navbar';

// function GLBModel({ path, offset = [0, 0, 0], rotation }) {
//     const group = useRef();
//     const { scene: originalScene } = useGLTF(path);
//     const [scene, setScene] = useState();
  
//     useEffect(() => {
//       // Clone the scene fresh every time the path changes
//       const clonedScene = originalScene.clone(true);
//       setScene(clonedScene);
//     }, [originalScene]);
  
//     useEffect(() => {
//       if (group.current && scene) {
//         const box = new THREE.Box3().setFromObject(scene);
//         const center = new THREE.Vector3();
//         const size = new THREE.Vector3();
//         box.getCenter(center);
//         box.getSize(size);
  
//         // Reset position and center the model
//         scene.position.set(0, 0, 0);
//         scene.position.x -= center.x;
//         scene.position.z -= center.z;
  
//         // Apply user-defined offset (if any)
//         scene.position.add(new THREE.Vector3(...offset));
  
//         // Scale to fit
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = 2 / maxDim;
//         scene.scale.setScalar(scale);

//         // ✅ SUPER SIMPLE: Rotate ONLY the kitchen model
//         if (path.includes('TKB')) {
//           scene.rotation.y = Math.PI*23/18;
//         }
//         if (path.includes('bedroom')) {
//           scene.rotation.y = Math.PI*2.9/2;
//         }
//       }
//     }, [scene, offset, path]);
  
//     return scene ? <group ref={group}><primitive object={scene} /></group> : null;
//   }
  

// const scenes = [
//   {
//     name: 'Bathroom',
//     path: '/testbath.glb',
//     camera: {
//       position: [2, 3, 4],
//       fov: 70
//     },
//     offset: [0, -0.5, 0]
//   },
//   {
//     name: 'Kitchen',
//     // path: '/KitchenBlend.glb',
//     path: '/TKB.glb',

//     camera: {
//       position: [1, 4, 6],
//       fov: 57
//     },
//     offset: [2.5, 1.5, 0], // This will now actually apply
//     rotation: [0, Math.PI/2, 0]
//   },
//   {
//     name: 'Living Room',
//     path: '/livingRoom.glb',
//     camera: {
//       position: [5, 4, 6],
//       fov: 40
//     },
//     offset: [0, 0, 0] // This will now actually apply
//   },
//   {
//     name: 'Bedroom',
//     path: '/bedroom.glb',
//     camera: {
//       position: [4.5, 4, 6],
//       fov: 40,
//     },
//     offset: [0, 0, 0], // This will now actually apply
//     rotation: [0, Math.PI , 0] 
//   }
// ];

// export default function SceneSwitcher() {
//   const [index, setIndex] = useState(0);
//   const cameraRef = useRef();
//   const controlsRef = useRef();

//   const goLeft = useCallback(() => {
//     setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
//   }, []);

//   const goRight = useCallback(() => {
//     setIndex((prev) => (prev + 1) % scenes.length);
//   }, []);

//   // Update camera and OrbitControls on scene change
//   useEffect(() => {
//     const cam = cameraRef.current;
//     const controls = controlsRef.current;
//     const { position, fov } = scenes[index].camera;

//     if (cam) {
//       cam.position.set(...position);
//       cam.fov = fov;
//       cam.updateProjectionMatrix();
//     }

//     if (controls) {
//       controls.reset();
//       controls.target.set(0, 0, 0);
//       controls.update();
//     }
//   }, [index]);

//   // Keyboard arrow navigation
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === 'ArrowLeft') goLeft();
//       if (e.key === 'ArrowRight') goRight();
//     };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, [goLeft, goRight]);

//   return (
//     <div className="w-screen h-screen relative">
//       <Navbar />
//       <Canvas>
//         <PerspectiveCamera
//           ref={cameraRef}
//           makeDefault
//           position={scenes[index].camera.position}
//           fov={scenes[index].camera.fov}
//         />
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 10, 5]} intensity={1.5} />
//         <Suspense fallback={null}>
//           <GLBModel
//             key={scenes[index].path}
//             path={scenes[index].path}
//             offset={scenes[index].offset}
//           />
//         </Suspense>
//         <OrbitControls ref={controlsRef} />
//       </Canvas>

//       {/* Navigation arrows */}
//       <div className="absolute top-1/2 left-4 text-4xl cursor-pointer select-none" onClick={goLeft}>
//         ⬅️
//       </div>
//       <div className="absolute top-1/2 right-4 text-4xl cursor-pointer select-none" onClick={goRight}>
//         ➡️
//       </div>

//       {/* Scene label */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
//         {scenes[index].name}
//       </div>
//     </div>
//   );
// }

//code 6  trial
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react';
import * as THREE from 'three';
import Navbar from './../Navbar';

function GLBModel({ path, offset = [0, 0, 0], rotation }) {
  const group = useRef();
  const { scene: originalScene } = useGLTF(path);
  const [scene, setScene] = useState();

  useEffect(() => {
    const clone = originalScene.clone(true);
    setScene(clone);
  }, [originalScene]);

  useLayoutEffect(() => {
    if (scene && group.current) {
      group.current.clear();
      group.current.add(scene);

      scene.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      box.getCenter(center);
      box.getSize(size);

      scene.position.sub(center); // center it
      scene.position.add(new THREE.Vector3(...offset)); // apply offset

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      scene.scale.setScalar(scale);

      if (path.includes('TKB')) {
        scene.rotation.y = Math.PI * 23 / 18;
      }
      if (path.includes('bedroom')) {
        scene.rotation.y = Math.PI * 2.9 / 2;
      }
    }
  }, [scene, offset, path]);

  return <group ref={group} />;
}

const scenes = [
  {
    name: 'Bathroom',
    path: '/testbath.glb',
    camera: {
      position: [2, 3, 4],
      fov: 70
    },
    offset: [0, -0.5, 0]
  },
  {
    name: 'Kitchen',
    path: '/TKB.glb',
    camera: {
      position: [1, 4, 6],
      fov: 57
    },
    offset: [2.5, 3, 0],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    name: 'Living Room',
    path: '/livingRoom.glb',
    camera: {
      position: [5, 4, 6],
      fov: 40
    },
    offset: [0, 1.5, 0]
  },
  {
    name: 'Bedroom',
    path: '/bedroom.glb',
    camera: {
      position: [4.5, 4, 6],
      fov: 40,
    },
    offset: [0, 2, 0],
    rotation: [0, Math.PI, 0]
  }
];

export default function SceneSwitcher() {
  const [index, setIndex] = useState(0);
  const cameraRef = useRef();
  const controlsRef = useRef();

  const goLeft = useCallback(() => {
    setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  }, []);

  const goRight = useCallback(() => {
    setIndex((prev) => (prev + 1) % scenes.length);
  }, []);

  useEffect(() => {
    const cam = cameraRef.current;
    const controls = controlsRef.current;
    const { position, fov } = scenes[index].camera;

    if (cam) {
      cam.position.set(...position);
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }

    if (controls) {
      controls.reset();
      controls.target.set(0, 0, 0);
      controls.update();
    }
  }, [index]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goLeft();
      if (e.key === 'ArrowRight') goRight();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goLeft, goRight]);

  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <Canvas>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={scenes[index].camera.position}
          fov={scenes[index].camera.fov}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <GLBModel
            key={scenes[index].path}
            path={scenes[index].path}
            offset={scenes[index].offset}
            rotation={scenes[index].rotation}
          />
        </Suspense>
        <OrbitControls ref={controlsRef} />
      </Canvas>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 left-4 text-4xl cursor-pointer select-none" onClick={goLeft}>
        ⬅️
      </div>
      <div className="absolute top-1/2 right-4 text-4xl cursor-pointer select-none" onClick={goRight}>
        ➡️
      </div>

      {/* Scene label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
        {scenes[index].name}
      </div>
    </div>
  );
}
