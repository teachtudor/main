// 'use client';

// import { useEffect, useState } from 'react';
// import { useGLTF } from '@react-three/drei';

// export default function Character() {
//   const { scene } = useGLTF('maze-assets/models/idlePaul.glb'); // 🔁 Adjust path if needed
//   const [position, setPosition] = useState([0, 0, 0]);

//   useEffect(() => {
//     fetch('/maze-assets/maze_path.json')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data.length > 0) {
//           const [x, y] = data[0];
//           setPosition([x, 0, y]); // Y = 0.5 to sit on ground
//         }
//       })
//       .catch((err) => console.error('❌ Failed to load path:', err));
//   }, []);

//   return (
//     <primitive 
//         object={scene} 
//         position={position} 
//         scale={0.05} 
//     />
//   );
// }

//code 2
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import useCharacterControls from './useCharacterControls';
// import CharacterController from './CharacterController';

// export default function Character() {
//   const { scene } = useGLTF('maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState([0, 0, 0]);

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

//   return (
//     <>
//       <primitive 
//         ref={modelRef} 
//         object={scene} 
//         position={position} 
//         scale={0.05} 
//       />
//       <CharacterController 
//         modelRef={modelRef} 
//         keys={keys} />
//     </>
//   );
// }

//code 3
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import useCharacterControls from './useCharacterControls';
// import CharacterController from './CharacterController';

// export default function Character() {
//   const { scene, animations } = useGLTF('maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState([0, 0, 0]);

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
//     if (animations.length > 0 && scene) {
//       const mixer = new THREE.AnimationMixer(scene);
//       mixer.clipAction(animations[0]).play(); // plays the first animation (e.g., idle or walk)
//       mixerRef.current = mixer;
//     }
//   }, [animations, scene]);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//   });

//   return (
//     <>
//       <primitive 
//         ref={modelRef} 
//         object={scene} 
//         position={position} 
//         scale={0.05} />

//       <CharacterController 
//         modelRef={modelRef} 
//         keys={keys} 
//         />
//     </>
//   );
// }

//code 4
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import useCharacterControls from './useCharacterControls';
// import CharacterController from './CharacterController';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';

// export default function Character() {
//   const { scene, animations: idleAnimations } = useGLTF('maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState([0, 0, 0]);

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

//     async function loadAllAnimations() {
//       const loadedActions = {};

//       for (const anim of animationList) {
//         let clip;

//         if (anim.name === 'Idle') {
//           clip = idleAnimations[0]; // Use base model's animation
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

//     useEffect(() => {
//         if (Object.keys(actions).length === 0) return;
    
//         let next = 'Idle';
//         let reverse = false;
    
//         if (keys.jump) {
//         next = 'JumpingPaul';
//         } else if (keys.backward) {
//         next = 'WalkingPaul';
//         reverse = true; // <- walk backward with reversed clip
//         } else if (keys.forward) {
//         next = 'WalkingPaul';
//         } else if (keys.left) {
//         next = 'LeftTurnPaul';
//         } else if (keys.right) {
//         next = 'RightTurnPaul';
//         }
    
//         const nextAction = actions[next];
//         if (!nextAction || currentAction.current === nextAction) return;
    
//         // Stop current
//         currentAction.current?.fadeOut(0.2);
    
//         // Reverse time direction if needed
//         if (reverse) {
//         nextAction.timeScale = -1;
//         nextAction.time = nextAction.getClip().duration; // start from end
//         } else {
//         nextAction.timeScale = 1;
//         nextAction.time = 0;
//         }
    
//         // Play new action
//         nextAction.reset().fadeIn(0.2).play();
//         currentAction.current = nextAction;
//     }, [keys, actions]);
  

// //   useFrame((_, delta) => {
// //     mixerRef.current?.update(delta);
// //   });
//     useFrame((_, delta) => {
//         if (mixerRef.current) {
//         // Optional: scale animation speed based on movement
//         const isMoving = keys.forward || keys.backward;
//         mixerRef.current.timeScale = isMoving ? 1 : 0.8; // 0.8 slows idle slightly
//         mixerRef.current.update(delta);
//         }
//     });
  

//   return (
//     <>
//       <primitive 
//         ref={modelRef} 
//         object={scene} 
//         position={position} 
//         scale={0.05} />
//       <CharacterController 
//         modelRef={modelRef} 
//         keys={keys} />
//     </>
//   );
// }

//code 5
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import useCharacterControls from './useCharacterControls';
// import CharacterController from './CharacterController';
// import animationList from './animationList';
// import { loadExternalAnimation } from './loadAnimations';

// export default function Character() {
//   const { scene, animations: idleAnimations } = useGLTF('maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const mixerRef = useRef();
//   const [actions, setActions] = useState({});
//   const currentAction = useRef(null);
//   const keys = useCharacterControls();
//   const [position, setPosition] = useState([0, 0, 0]);

//   // Load starting position
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

//   // Animation switching logic
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
//       next = 'RunningPaul'; // ✅ NEW: dedicated running animation
//     } else if (keys.forward) {
//       next = 'WalkingPaul';
//     } else if (keys.left) {
//       next = 'LeftTurnPaul';
//     } else if (keys.right) {
//       next = 'RightTurnPaul';
//     }

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

//code 6 works with virtual
'use client';

import { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useCharacterControls from './useCharacterControls';
import CharacterController from './CharacterController';
import animationList from './animationList';
import { loadExternalAnimation } from './loadAnimations';

export default function Character({ onModelRef }) {
  const { scene, animations: idleAnimations } = useGLTF('maze-assets/models/idlePaul.glb');
  const modelRef = useRef();
  const mixerRef = useRef();
  const [actions, setActions] = useState({});
  const currentAction = useRef(null);
  const keys = useCharacterControls();
  const [position, setPosition] = useState([0, 0, 0]);

  //added for camera.js to add follow camera effect
  useEffect(()=> {
    if (onModelRef) onModelRef(modelRef);
  }, [onModelRef]);

  // Load entrance position
  useEffect(() => {
    fetch('/maze-assets/maze_path.json')
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) {
          const [x, y] = data[0];
          setPosition([x, 0, y]);
        }
      });
  }, []);

  // Load all animations
  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    async function loadAllAnimations() {
      const loadedActions = {};

      for (const anim of animationList) {
        let clip;
        if (anim.name === 'Idle') {
          clip = idleAnimations[0];
        } else {
          clip = await loadExternalAnimation(anim.file);
        }

        if (clip) {
          loadedActions[anim.name] = mixer.clipAction(clip);
        }
      }

      if (loadedActions['Idle']) {
        loadedActions['Idle'].play();
        currentAction.current = loadedActions['Idle'];
      }

      setActions(loadedActions);
    }

    loadAllAnimations();
  }, [scene, idleAnimations]);

  // Handle animation transitions
  useEffect(() => {
    if (Object.keys(actions).length === 0) return;

    let next = 'Idle';
    let reverse = false;

    if (keys.jump) {
      next = 'JumpingPaul';
    } else if (keys.backward) {
      next = 'WalkingPaul';
      reverse = true;
    } else if (keys.forward && keys.run) {
      next = 'RunningPaul';
    } else if (keys.forward) {
      next = 'WalkingPaul';
    } else if (keys.left) {
      next = 'LeftTurnPaul';
    } else if (keys.right) {
      next = 'RightTurnPaul';
    }

    const nextAction = actions[next];

    if (!nextAction || currentAction.current === nextAction) return;

    console.log('🎞️ Switching to animation:', next); // ✅ Debug

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
  });

  return (
    <>
      <primitive
        ref={modelRef}
        object={scene}
        position={position}
        scale={0.05}
      />
      <CharacterController modelRef={modelRef} keys={keys} />
    </>
  );
}


