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
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

function GLBModel({ path, offset = [0, 0, 0] }) {
    const group = useRef();
    const { scene: originalScene } = useGLTF(path);
    const [scene, setScene] = useState();
  
    useEffect(() => {
      // Clone the scene fresh every time the path changes
      const clonedScene = originalScene.clone(true);
      setScene(clonedScene);
    }, [originalScene]);
  
    useEffect(() => {
      if (group.current && scene) {
        const box = new THREE.Box3().setFromObject(scene);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);
  
        // Reset position and center the model
        scene.position.set(0, 0, 0);
        scene.position.x -= center.x;
        scene.position.z -= center.z;
  
        // Apply user-defined offset (if any)
        scene.position.add(new THREE.Vector3(...offset));
  
        // Scale to fit
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        scene.scale.setScalar(scale);

        // ✅ SUPER SIMPLE: Rotate ONLY the kitchen model
        if (path.includes('TKB')) {
          scene.rotation.y = Math.PI*23/18;
        }
      }
    }, [scene, offset, path]);
  
    return scene ? <group ref={group}><primitive object={scene} /></group> : null;
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
    // path: '/KitchenBlend.glb',
    path: '/TKB.glb',

    camera: {
      position: [1, 4, 6],
      fov: 57
    },
    offset: [2.5, 1.5, 0], // This will now actually apply
    rotation: [0, Math.PI/2, 0]
  },
  {
    name: 'Living Room',
    path: '/livingRoom.glb',
    camera: {
      position: [5, 4, 6],
      fov: 40
    },
    offset: [0, 0, 0] // This will now actually apply
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

  // Update camera and OrbitControls on scene change
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

  // Keyboard arrow navigation
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

//CODE 6 MODEL AND SCENE ATTEMPT (WORKS BUT CHANGED MY MIND)
// 'use client';

// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
// import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// // function Character({ keys, y=0, x=0, z=0 }) {
// //   const characterRef = useRef();
// //   const mixerRef = useRef();
// //   const [animations, setAnimations] = useState({});
// //   const currentAction = useRef(null);
// //   const [loaded, setLoaded] = useState(false);

// //   useEffect(() => {
// //     const loader = new FBXLoader();
// //     let mixer;

// //     loader.load('/WalkingANARK.fbx', (walkObj) => {
// //       const model = walkObj;
// //       model.scale.set(0.005, 0.005, 0.005);
// //       model.position.y = y;
// //       model.position.x = x;
// //       model.position.z = z;
// //       characterRef.current = model;
// //       mixer = new THREE.AnimationMixer(model);
// //       const walk = mixer.clipAction(model.animations[0]);

// //       loader.load('/RunningANARK.fbx', (runObj) => {
// //         const run = mixer.clipAction(runObj.animations[0]);

// //         loader.load('/idleFakeAnimation.fbx', (idleObj) => {
// //           const idle = mixer.clipAction(idleObj.animations[3]);

// //           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
// //             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

// //             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
// //               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

// //               idle.reset();
// //               idle.enabled = true;
// //               idle.setLoop(THREE.LoopRepeat, Infinity);
// //               idle.play();
// //               currentAction.current = idle;

// //               setAnimations({ walk, run, idle, turnLeft, turnRight });
// //               mixerRef.current = mixer;
// //               setLoaded(true);
// //             });
// //           });
// //         });
// //       });
// //     });

// //     return () => mixer?.stopAllAction();
// //   }, [y,x,z]);
// function Character({ keys, y = 0, x = 0, z = 0, scale = 0.005 }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({});
//   const currentAction = useRef(null);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/WalkingANARK.fbx', (walkObj) => {
//       const model = walkObj;
//       model.scale.set(scale, scale, scale); // use scene-specific scale
//       model.position.set(x, y, z);

//       characterRef.current = model;
//       mixer = new THREE.AnimationMixer(model);
//       const walk = mixer.clipAction(model.animations[0]);

//       loader.load('/RunningANARK.fbx', (runObj) => {
//         const run = mixer.clipAction(runObj.animations[0]);

//         loader.load('/idleFakeAnimation.fbx', (idleObj) => {
//           const idle = mixer.clipAction(idleObj.animations[3]);

//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               mixerRef.current = mixer;
//               setLoaded(true);
//             });
//           });
//         });
//       });
//     });

//     return () => mixer?.stopAllAction();
//   }, [y, x, z, scale]); // <-- add scale here too


//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;

//     if (keys['ArrowUp']) {
//       const dir = new THREE.Vector3(0, 0, 1).applyQuaternion(character.quaternion);
//       character.position.add(dir.multiplyScalar(walkSpeed));
//     }
//     if (keys['r']) {
//       const dir = new THREE.Vector3(0, 0, 1).applyQuaternion(character.quaternion);
//       character.position.add(dir.multiplyScalar(runSpeed));
//     }
//     if (keys['ArrowDown']) {
//       const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(character.quaternion);
//       character.position.add(dir.multiplyScalar(walkSpeed));
//     }
//     if (keys['b']) {
//       const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(character.quaternion);
//       character.position.add(dir.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowLeft']) {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//       character.quaternion.multiply(q);
//     }
//     if (keys['ArrowRight']) {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.idle) return;

//     const { idle, walk, run, turnLeft, turnRight } = animations;
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isWalking && !isRunning) {
//       const turn = keys['ArrowLeft'] ? turnLeft : turnRight;
//       if (currentAction.current !== turn) {
//         currentAction.current?.fadeOut(0.2);
//         turn.reset().fadeIn(0.2).play();
//         currentAction.current = turn;
//       }
//       return;
//     }

//     if (noInput) {
//       if (currentAction.current !== idle) {
//         currentAction.current?.fadeOut(0.3);
//         idle.enabled = true;
//         idle.setLoop(THREE.LoopRepeat, Infinity);
//         idle.fadeIn(0.3).play();
//         currentAction.current = idle;
//       }
//       return;
//     }

//     const nextAction = isRunning ? run : walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== nextAction) {
//       currentAction.current?.fadeOut(0.3);
//       nextAction.enabled = true;
//       nextAction.setLoop(THREE.LoopRepeat, Infinity);
//       nextAction.fadeIn(0.3).play();
//       currentAction.current = nextAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }

// // function GLBModel({ path, offset = [0, 0, 0] }) {
// //   const group = useRef();
// //   const { scene: originalScene } = useGLTF(path);
// //   const [scene, setScene] = useState();

// //   useEffect(() => {
// //     const clonedScene = originalScene.clone(true);
// //     setScene(clonedScene);
// //   }, [originalScene]);

// //   useEffect(() => {
// //     if (group.current && scene) {
// //       const box = new THREE.Box3().setFromObject(scene);
// //       const center = new THREE.Vector3();
// //       const size = new THREE.Vector3();
// //       box.getCenter(center);
// //       box.getSize(size);

// //       scene.position.set(0, 0, 0);
// //       scene.position.x -= center.x;
// //       scene.position.z -= center.z;
// //       scene.position.add(new THREE.Vector3(...offset));

// //       const maxDim = Math.max(size.x, size.y, size.z);
// //       const scale = 2 / maxDim;
// //       scene.scale.setScalar(scale);

// //       if (path.includes('TKB')) {
// //         scene.rotation.y = Math.PI * 23 / 18;
// //       }
// //     }
// //   }, [scene, offset, path]);

// //   return scene ? <group ref={group}><primitive object={scene} /></group> : null;
// // }
// function GLBModel({ path, offset = [0, 0, 0], scale = 1 }) {
//   const group = useRef();
//   const { scene: originalScene } = useGLTF(path);
//   const [scene, setScene] = useState();

//   useEffect(() => {
//     const clonedScene = originalScene.clone(true);
//     setScene(clonedScene);
//   }, [originalScene]);

//   useEffect(() => {
//     if (group.current && scene) {
//       const box = new THREE.Box3().setFromObject(scene);
//       const center = new THREE.Vector3();
//       box.getCenter(center);

//       scene.position.set(0, 0, 0);
//       scene.position.x -= center.x;
//       scene.position.z -= center.z;
//       scene.position.add(new THREE.Vector3(...offset));

//       scene.scale.setScalar(scale); // ← use passed scale

//       if (path.includes('TKB')) {
//         scene.rotation.y = Math.PI * 23 / 18;
//       }
//     }
//   }, [scene, offset, scale, path]);

//   return scene ? <group ref={group}><primitive object={scene} /></group> : null;
// }


// const scenes = [
//   {
//     name: 'Bathroom',
//     path: '/testbath.glb',
//     camera: {
//       position: [2, 3, 4],
//       fov: 70
//     },
//     offset: [0, -0.5, 0],
//     characterY: -0.5,
//     scale: 0.5,
//     characterScale: 0.005,
//   },
//   {
//     name: 'Kitchen',
//     path: '/TKB.glb',
//     camera: {
//       position: [1, 4, 6],
//       fov: 67
//     },
//     offset: [2.5, 1.5, 0],
//     characterY: 1.5,
//     characterX: 0.0,
//     characterZ: 3.0,
//     scale: 0.25,
//     characterScale: 0.003,
//   },
//   {
//     name: 'Living Room',
//     path: '/livingRoom.glb',
//     camera: {
//       position: [5, 4, 6],
//       fov: 110
//     },
//     offset: [0, 0, 0],
//     characterY:0.0,
//     characterZ: 0.8,
//     characterScale: 0.02,
//   }
// ];

// export default function SceneSwitcher() {
//   const [index, setIndex] = useState(0);
//   const [keys, setKeys] = useState({});
//   const cameraRef = useRef();
//   const controlsRef = useRef();

//   const goLeft = useCallback(() => {
//     setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
//   }, []);

//   const goRight = useCallback(() => {
//     setIndex((prev) => (prev + 1) % scenes.length);
//   }, []);

//   // useEffect(() => {
//   //   const handleKey = (e) => {
//   //     if (e.key === 'ArrowLeft') goLeft();
//   //     else if (e.key === 'ArrowRight') goRight();
//   //     setKeys((prev) => ({ ...prev, [e.key]: true }));
//   //   };
//   //   const handleKeyUp = (e) => {
//   //     setKeys((prev) => ({ ...prev, [e.key]: false }));
//   //   };

//   //   window.addEventListener('keydown', handleKey);
//   //   window.addEventListener('keyup', handleKeyUp);
//   //   return () => {
//   //     window.removeEventListener('keydown', handleKey);
//   //     window.removeEventListener('keyup', handleKeyUp);
//   //   };
//   // }, [goLeft, goRight]);

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === '[') {
//         goLeft();
//       } else if (e.key === ']') {
//         goRight();
//       }
  
//       setKeys((prev) => ({ ...prev, [e.key]: true }));
//     };
  
//     const handleKeyUp = (e) => {
//       setKeys((prev) => ({ ...prev, [e.key]: false }));
//     };
  
//     window.addEventListener('keydown', handleKey);
//     window.addEventListener('keyup', handleKeyUp);
  
//     return () => {
//       window.removeEventListener('keydown', handleKey);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, [goLeft, goRight]);
  

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

//   return (
//     <div className="w-screen h-screen relative">
//       <Canvas shadows>
//         <PerspectiveCamera
//           ref={cameraRef}
//           makeDefault
//           position={scenes[index].camera.position}
//           fov={scenes[index].camera.fov}
//         />
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
//         <Suspense fallback={null}>
//           <GLBModel key={scenes[index].path} path={scenes[index].path} offset={scenes[index].offset} scale={scenes[index].scale} />
//           <Character keys={keys} y={scenes[index].characterY} x={scenes[index].characterX} z={scenes[index].characterZ} scale={scenes[index].characterScale}/>
//         </Suspense>
//         <OrbitControls ref={controlsRef} />
//       </Canvas>

//       <div className="absolute top-1/2 left-4 text-4xl cursor-pointer select-none" onClick={goLeft}>
//         ⬅️
//       </div>
//       <div className="absolute top-1/2 right-4 text-4xl cursor-pointer select-none" onClick={goRight}>
//         ➡️
//       </div>
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
//         {scenes[index].name}
//       </div>
//     </div>
//   );
// }

