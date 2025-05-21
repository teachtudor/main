// //code 6 works with virtual Character.js
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import useCharacterControls from './useCharacterControls';
// import CharacterController from './CharacterController';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';

// export default function Character({ onModelRef }) {
//   const { scene, animations: idleAnimations } = useGLTF('maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState([0, 0, 0]);

//   //added for camera.js to add follow camera effect
//   useEffect(()=> {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   // Load entrance position
//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition([x, 0, y]);
//         }
//       });
//   }, []);

//   // Load all animations
//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAllAnimations() {
//       const loadedActions = {};

//       for (const anim of animationList) {
//         let clip;
//         if (anim.name === 'Idle') {
//           clip = idleAnimations[0];
//         } else {
//           clip = await loadExternalAnimation(anim.file);
//         }

//         if (clip) {
//           loadedActions[anim.name] = mixer.clipAction(clip);
//         }
//       }

//       if (loadedActions['Idle']) {
//         loadedActions['Idle'].play();
//         currentAction.current = loadedActions['Idle'];
//       }

//       setActions(loadedActions);
//     }

//     loadAllAnimations();
//   }, [scene, idleAnimations]);

//   // Handle animation transitions
//   useEffect(() => {
//     if (Object.keys(actions).length === 0) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) {
//       next = 'JumpingPaul';
//     } else if (keys.backward) {
//       next = 'WalkingPaul';
//       reverse = true;
//     } else if (keys.forward && keys.run) {
//       next = 'RunningPaul';
//     } else if (keys.forward) {
//       next = 'WalkingPaul';
//     } else if (keys.left) {
//       next = 'LeftTurnPaul';
//     } else if (keys.right) {
//       next = 'RightTurnPaul';
//     }

//     const nextAction = actions[next];

//     if (!nextAction || currentAction.current === nextAction) return;

//     console.log('🎞️ Switching to animation:', next); // ✅ Debug

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);
//   });

//   return (
//     <>
//       <primitive
//         ref={modelRef}
//         object={scene}
//         position={position}
//         scale={0.05}
//       />
//       <CharacterController modelRef={modelRef} keys={keys} />
//     </>
//   );
// }


// //code 2
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import useCharacterControls from './useCharacterControls';
// import CharacterController from './CharacterController';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';

// export default function Character({ onModelRef, wallBoxes }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState([0, 0, 0]);

//   useEffect(() => {
//     console.log('🔍 GLTF structure:');
//     scene.traverse((child) => {
//       console.log('🧱', child.name, child.type);
//     });
//   }, [scene]);


//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition([x, 0, y]);
//         }
//       });
//   }, []);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if (keys.forward && keys.run) next = 'RunningPaul';
//     else if (keys.forward) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);
//   });

//   useEffect(() => {
//     console.log('🔍 GLTF structure:');
//     scene.traverse((child) => {
//       console.log('🧱', child.name, child.type);
//     });
//   }, [scene]);


//   return (
//     <>
//         <primitive
//         ref={modelRef}
//         object={scene}
//         position={new THREE.Vector3(...position)}
//         scale={0.05}
//         />

//       {/* 🟥 Red debug cube follows modelRef */}
//       {modelRef.current && (
//         <mesh position={modelRef.current.position} scale={[0.2, 0.2, 0.2]}>
//           <boxGeometry />
//           <meshStandardMaterial color="red" />
//         </mesh>
//       )}

//       <CharacterController modelRef={modelRef} keys={keys} wallBoxes={wallBoxes} />
//     </>
//   );
// }


//code unified

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';
// import useCharacterControls from './useCharacterControls';

// export default function Character({ onModelRef }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
//   const velocity = useRef(new THREE.Vector3(0, 0, 0));
//   const jumpVelocity = useRef(0);
//   const isJumping = useRef(false);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition(new THREE.Vector3(x, 0, y));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if (keys.forward && keys.run) next = 'RunningPaul';
//     else if (keys.forward) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);

//     if (!modelRef.current) return;

//     const speed = keys.forward && keys.run ? 0.2 : 0.05;

//     // Manual turning
//     if (keys.left) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03)
//       );
//     }
//     if (keys.right) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03)
//       );
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.15;
//       isJumping.current = true;
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;
//       if (position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         position.y = 0;
//       }
//     }

//     // Forward/Backward
//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     if (keys.forward) {
//       position.add(forward.clone().multiplyScalar(speed));
//     }
//     if (keys.backward) {
//       position.add(forward.clone().multiplyScalar(-speed * 0.75));
//     }

//     // Apply vertical motion (jump)
//     position.y += velocity.current.y;

//     // Update position
//     modelRef.current.position.copy(position);
//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={0.05}
//     />
//   );
// }

//code moves in place it's shit
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';
// import useCharacterControls from './useCharacterControls';

// export default function Character({ onModelRef, wallBoxes }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
//   const velocity = useRef(new THREE.Vector3(0, 0, 0));
//   const jumpVelocity = useRef(0);
//   const isJumping = useRef(false);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition(new THREE.Vector3(x, 0, y));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if (keys.forward && keys.run) next = 'RunningPaul';
//     else if (keys.forward) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);

//     if (!modelRef.current) return;

//     const speed = keys.forward && keys.run ? 0.2 : 0.05;

//     // Manual turning
//     if (keys.left) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03)
//       );
//     }
//     if (keys.right) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03)
//       );
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.15;
//       isJumping.current = true;
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;
//       if (position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         position.y = 0;
//       }
//     }

//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);

//     if (keys.forward) {
//       const nextPos = position.clone().add(forward.clone().multiplyScalar(speed));
//       const box = new THREE.Box3().setFromCenterAndSize(nextPos, new THREE.Vector3(0.8, 5, 0.8));
//       const colliding = wallBoxes?.some(w => w.intersectsBox(box)) ?? false;
//       if (!colliding) position.add(forward.clone().multiplyScalar(speed));
//     }

//     if (keys.backward) {
//       const nextPos = position.clone().add(forward.clone().multiplyScalar(-speed * 0.75));
//       const box = new THREE.Box3().setFromCenterAndSize(nextPos, new THREE.Vector3(0.8, 5, 0.8));
//       const colliding = wallBoxes?.some(w => w.intersectsBox(box)) ?? false;
//       if (!colliding) position.add(forward.clone().multiplyScalar(-speed * 0.75));
//     }

//     // Apply gravity/jump
//     position.y += velocity.current.y;

//     modelRef.current.position.copy(position);
//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={0.05}
//     />
//   );
// }


//code more works GREAT!
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';
// import useCharacterControls from './useCharacterControls';
// import mazeGrid from '/public/maze-assets/maze_grid.json'; // Preloaded JSON

// export default function Character({ onModelRef, wallBoxes, keys }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   // const keys = useCharacterControls();
//   const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
//   const velocity = useRef(new THREE.Vector3(0, 0, 0));
//   const jumpVelocity = useRef(0);
//   const isJumping = useRef(false);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition(new THREE.Vector3(x, 0, y));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if (keys.forward && keys.run) next = 'RunningPaul';
//     else if (keys.forward) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);

//     if (!modelRef.current) return;

//     const speed = keys.forward && keys.run ? 0.09 : 0.05;

//     // Turning
//     if (keys.left) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.09)
//       );
//     }
//     if (keys.right) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.09)
//       );
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.5;
//       isJumping.current = true;
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;
//       if (position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         position.y = 0;
//       }
//     }

//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     const step = forward.clone().multiplyScalar(speed);
//     const next = position.clone();

//     if (keys.forward) next.add(step);
//     if (keys.backward) next.add(step.clone().negate().multiplyScalar(0.75));

//     // Collision check
//     const mazeX = Math.round(next.x);
//     const mazeZ = Math.round(next.z);
//     if (mazeGrid[mazeZ]?.[mazeX] === 0) {
//       // Not a wall
//       position.copy(next);
//     }

//     position.y += velocity.current.y;
//     modelRef.current.position.copy(position);

//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={0.05}
//     />
//   );
// }

//CODE RUN BUTTON IND ADD interim 1
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';
// import useCharacterControls from './useCharacterControls';
// import mazeGrid from '/public/maze-assets/maze_grid.json'; // Preloaded JSON

// export default function Character({ onModelRef, wallBoxes, keys }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   // const keys = useCharacterControls();
//   const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
//   const velocity = useRef(new THREE.Vector3(0, 0, 0));
//   const jumpVelocity = useRef(0);
//   const isJumping = useRef(false);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition(new THREE.Vector3(x, 0, y));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if ((keys.forward || keys.run) && keys.run) next = 'RunningPaul';
//     else if (keys.forward || keys.run) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);

//     if (!modelRef.current) return;

//     const isMoving = keys.forward || keys.backward || keys.left || keys.right || keys.run;
//     const speed = keys.run ? 0.09 : 0.05;

//     // Turning
//     if (keys.left) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.09)
//       );
//     }
//     if (keys.right) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.09)
//       );
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.5;
//       isJumping.current = true;
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;
//       if (position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         position.y = 0;
//       }
//     }

//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     const step = forward.clone().multiplyScalar(speed);
//     const next = position.clone();

//     if (keys.forward || keys.run) next.add(step);
//     if (keys.backward) next.add(step.clone().negate().multiplyScalar(0.75));

//     // Collision check
//     const mazeX = Math.round(next.x);
//     const mazeZ = Math.round(next.z);
//     if (mazeGrid[mazeZ]?.[mazeX] === 0) {
//       // Not a wall
//       position.copy(next);
//     }

//     position.y += velocity.current.y;
//     modelRef.current.position.copy(position);

//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={0.05}
//     />
//   );
// }

//code interim 2
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';
// import useCharacterControls from './useCharacterControls';
// import mazeGrid from '/public/maze-assets/maze_grid.json';

// // ✅ Load sounds safely
// const loadSound = (src, loop = false, volume = 1.0) => {
//   if (typeof Audio === 'undefined') return null;
//   const audio = new Audio(src);
//   audio.loop = loop;
//   audio.volume = volume;
//   audio.onerror = () => console.error(`❌ Failed to load ${src}`);
//   return audio;
// };

// const jumpAudio = loadSound('maze-assets/sounds/jump.mp3', false, 0.5);
// const musicAudio = loadSound('maze-assets/sounds/bgmusic.mp3', true, 0.2);

// export default function Character({ onModelRef, wallBoxes, keys }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
//   const velocity = useRef(new THREE.Vector3(0, 0, 0));
//   const jumpVelocity = useRef(0);
//   const isJumping = useRef(false);
//   const musicStarted = useRef(false);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition(new THREE.Vector3(x, 0, y));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if ((keys.forward || keys.run) && keys.run) next = 'RunningPaul';
//     else if (keys.forward || keys.run) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);
//     if (!modelRef.current) return;

//     // ✅ Start background music on first action
//     if (!musicStarted.current && (keys.forward || keys.jump || keys.run)) {
//       musicAudio?.play();
//       musicStarted.current = true;
//     }

//     const isMoving = keys.forward || keys.backward || keys.left || keys.right || keys.run;
//     const speed = keys.run ? 0.09 : 0.05;

//     // Turning
//     if (keys.left) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.09)
//       );
//     }
//     if (keys.right) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.09)
//       );
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.5;
//       isJumping.current = true;
//       jumpAudio?.play();
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;
//       if (position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         position.y = 0;
//       }
//     }

//     // Movement
//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     const step = forward.clone().multiplyScalar(speed);
//     const next = position.clone();

//     if (keys.forward || keys.run) next.add(step);
//     if (keys.backward) next.add(step.clone().negate().multiplyScalar(0.75));

//     const mazeX = Math.round(next.x);
//     const mazeZ = Math.round(next.z);
//     if (mazeGrid[mazeZ]?.[mazeX] === 0) {
//       position.copy(next);
//     }

//     position.y += velocity.current.y;
//     modelRef.current.position.copy(position);
//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={0.05}
//     />
//   );
// }

//code 3 works beautiful
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';
// import useCharacterControls from './useCharacterControls';
// import mazeGrid from '/public/maze-assets/maze_grid.json';

// // ✅ Load sounds safely
// const loadSound = (src, loop = false, volume = 1.0) => {
//   if (typeof Audio === 'undefined') return null;
//   const audio = new Audio(src);
//   audio.loop = loop;
//   audio.volume = volume;
//   audio.onerror = () => console.error(`❌ Failed to load ${src}`);
//   return audio;
// };

// const jumpAudio = loadSound('maze-assets/sounds/jump.mp3', false, 0.5);
// const musicAudio = loadSound('maze-assets/sounds/bgmusic.mp3', true, 0.2);
// const swishAudio = loadSound('maze-assets/sounds/swish.mp3', false, 0.4);

// export default function Character({ onModelRef, wallBoxes, keys }) {
//   const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
//   const velocity = useRef(new THREE.Vector3(0, 0, 0));
//   const jumpVelocity = useRef(0);
//   const isJumping = useRef(false);
//   const musicStarted = useRef(false);
//   const wasRunning = useRef(false);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.length) {
//           const [x, y] = data[0];
//           setPosition(new THREE.Vector3(x, 0, y));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   useEffect(() => {
//     const mixer = new THREE.AnimationMixer(scene);
//     mixerRef.current = mixer;

//     async function loadAll() {
//       const loaded = {};
//       for (const anim of animationList) {
//         const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
//         if (clip) loaded[anim.name] = mixer.clipAction(clip);
//       }

//       if (loaded['Idle']) {
//         loaded['Idle'].play();
//         currentAction.current = loaded['Idle'];
//       }

//       setActions(loaded);
//     }

//     loadAll();
//   }, [scene, idleAnimations]);

//   useEffect(() => {
//     if (!Object.keys(actions).length) return;

//     let next = 'Idle';
//     let reverse = false;

//     if (keys.jump) next = 'JumpingPaul';
//     else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
//     else if ((keys.forward || keys.run) && keys.run) next = 'RunningPaul';
//     else if (keys.forward || keys.run) next = 'WalkingPaul';
//     else if (keys.left) next = 'LeftTurnPaul';
//     else if (keys.right) next = 'RightTurnPaul';

//     const nextAction = actions[next];
//     if (!nextAction || currentAction.current === nextAction) return;

//     currentAction.current?.fadeOut(0.2);

//     if (reverse) {
//       nextAction.timeScale = -1;
//       nextAction.time = nextAction.getClip().duration;
//     } else {
//       nextAction.timeScale = 1;
//       nextAction.time = 0;
//     }

//     nextAction.reset().fadeIn(0.2).play();
//     currentAction.current = nextAction;
//   }, [keys, actions]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);
//     if (!modelRef.current) return;

//     // ✅ Start background music on first interaction
//     if (!musicStarted.current && (keys.forward || keys.jump || keys.run)) {
//       musicAudio?.play();
//       musicStarted.current = true;
//     }

//     const isMoving = keys.forward || keys.backward || keys.left || keys.right || keys.run;
//     const speed = keys.run ? 0.09 : 0.05;

//     // ✅ Swish sound when run starts
//     if (keys.run && !wasRunning.current) {
//       swishAudio?.play();
//     }
//     wasRunning.current = keys.run;

//     // Turning
//     if (keys.left) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.09)
//       );
//     }
//     if (keys.right) {
//       modelRef.current.quaternion.multiply(
//         new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.09)
//       );
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.5;
//       isJumping.current = true;
//       jumpAudio?.play();
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;
//       if (position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         position.y = 0;
//       }
//     }

//     // Movement
//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     const step = forward.clone().multiplyScalar(speed);
//     const next = position.clone();

//     if (keys.forward || keys.run) next.add(step);
//     if (keys.backward) next.add(step.clone().negate().multiplyScalar(0.75));

//     const mazeX = Math.round(next.x);
//     const mazeZ = Math.round(next.z);
//     if (mazeGrid[mazeZ]?.[mazeX] === 0) {
//       position.copy(next);
//     }

//     position.y += velocity.current.y;
//     modelRef.current.position.copy(position);
//   });

//   // return (
//   //   <primitive
//   //     ref={modelRef}
//   //     object={scene}
//   //     scale={0.05}
//   //   />
//   // );
//   return (
//   <group ref={modelRef} scale={0.05}>
//     {/* 🧍 Character model */}
//     <primitive object={scene} />

//     {/* 🔵 Visible glowing circle */}
//     <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <circleGeometry args={[5, 64]} />
//       <meshBasicMaterial
//         color={'cyan'}
//         transparent={true}
//         opacity={0.6}
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   </group>
// );

// }


//code 4 works great
'use client';

import { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import animationList from './animationList';
import { loadExternalAnimation } from './loadAnimations';
import useCharacterControls from './useCharacterControls';
import mazeGrid from '/public/maze-assets/maze_grid.json';

const loadSound = (src, loop = false, volume = 1.0) => {
  if (typeof Audio === 'undefined') return null;
  const audio = new Audio(src);
  audio.loop = loop;
  audio.volume = volume;
  audio.onerror = () => console.error(`\u274C Failed to load ${src}`);
  return audio;
};

const jumpAudio = loadSound('maze-assets/sounds/jump.mp3', false, 0.5);
const musicAudio = loadSound('maze-assets/sounds/Arpent.mp3', true, 0.2);
const swishAudio = loadSound('maze-assets/sounds/swish.mp3', false, 0.4);

export default function Character({ onModelRef, wallBoxes, keys, lightOn, musicMuted }) {
  const { scene, animations: idleAnimations } = useGLTF('/maze-assets/models/idlePaul.glb');
  const modelRef = useRef();
  const mixerRef = useRef();
  const [actions, setActions] = useState({});
  const currentAction = useRef(null);
  const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0));
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const jumpVelocity = useRef(0);
  const isJumping = useRef(false);
  const musicStarted = useRef(false);
  const wasRunning = useRef(false);

  useEffect(() => {
    fetch('/maze-assets/maze_path.json')
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) {
          const [x, y] = data[0];
          setPosition(new THREE.Vector3(x, 0, y));
        }
      });
  }, []);

  useEffect(() => {
    if (onModelRef) onModelRef(modelRef);
  }, [onModelRef]);

  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    async function loadAll() {
      const loaded = {};
      for (const anim of animationList) {
        const clip = anim.name === 'Idle' ? idleAnimations[0] : await loadExternalAnimation(anim.file);
        if (clip) loaded[anim.name] = mixer.clipAction(clip);
      }

      if (loaded['Idle']) {
        loaded['Idle'].play();
        currentAction.current = loaded['Idle'];
      }

      setActions(loaded);
    }

    loadAll();
  }, [scene, idleAnimations]);

  useEffect(() => {
    if (!Object.keys(actions).length) return;

    let next = 'Idle';
    let reverse = false;

    if (keys.jump) next = 'JumpingPaul';
    else if (keys.backward) { next = 'WalkingPaul'; reverse = true; }
    else if ((keys.forward || keys.run) && keys.run) next = 'RunningPaul';
    else if (keys.forward || keys.run) next = 'WalkingPaul';
    else if (keys.left) next = 'LeftTurnPaul';
    else if (keys.right) next = 'RightTurnPaul';

    const nextAction = actions[next];
    if (!nextAction || currentAction.current === nextAction) return;

    currentAction.current?.fadeOut(0.2);

    if (reverse) {
      nextAction.timeScale = -1;
      nextAction.time = nextAction.getClip().duration;
    } else {
      nextAction.timeScale = 1;
      nextAction.time = 0;
    }

    nextAction.reset().fadeIn(0.2).play();
    currentAction.current = nextAction;
  }, [keys, actions]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
    if (!modelRef.current) return;

    if (!musicStarted.current && (keys.forward || keys.jump || keys.run)) {
      if (!musicMuted) musicAudio?.play();
      musicStarted.current = true;
    }

    musicAudio.muted = musicMuted;

    const isMoving = keys.forward || keys.backward || keys.left || keys.right || keys.run;
    const speed = keys.run ? 0.09 : 0.05;

    if (keys.run && !wasRunning.current) {
      swishAudio?.play();
    }
    wasRunning.current = keys.run;

    if (keys.left) {
      modelRef.current.quaternion.multiply(
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.09)
      );
    }
    if (keys.right) {
      modelRef.current.quaternion.multiply(
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.09)
      );
    }

    if (keys.jump && !isJumping.current) {
      jumpVelocity.current = 0.5;
      isJumping.current = true;
      jumpAudio?.play();
    }

    if (isJumping.current) {
      velocity.current.y = jumpVelocity.current;
      jumpVelocity.current -= 0.01;
      if (position.y <= 0) {
        velocity.current.y = 0;
        jumpVelocity.current = 0;
        isJumping.current = false;
        position.y = 0;
      }
    }

    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
    const step = forward.clone().multiplyScalar(speed);
    const next = position.clone();

    if (keys.forward || keys.run) next.add(step);
    if (keys.backward) next.add(step.clone().negate().multiplyScalar(0.75));

    const mazeX = Math.round(next.x);
    const mazeZ = Math.round(next.z);
    if (mazeGrid[mazeZ]?.[mazeX] === 0) {
      position.copy(next);
    }

    position.y += velocity.current.y;
    modelRef.current.position.copy(position);
  });

  return (
    <group ref={modelRef} scale={0.05}>
      <primitive object={scene} />

      {lightOn && (
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[5, 64]} />
          <meshBasicMaterial
            color={'cyan'}
            transparent={true}
            opacity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

