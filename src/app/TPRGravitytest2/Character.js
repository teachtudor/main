

//code 10 trial

// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import * as THREE from 'three';
// import { useFrame } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useBox } from '@react-three/cannon';
// import FollowCamera from './Camera';
// import { handleMovement } from './handleMovement';
// import { updateAnimation } from './updateAnimation';
// import animationList from './animationList';

// export default function Character({ keys, followEnabled }) {
//   const mixerRef = useRef();
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);
//   const modelRef = useRef();
//   const [animations, setAnimations] = useState({});
//   const [loadedCharacter, setLoadedCharacter] = useState(null);

//   const [ref, api] = useBox(() => ({
//     type: 'Dynamic',
//     mass: 1,
//     position: [47,1,40],
//     args: [1,2,1],
//     linearDamping: 0.05,
//     angularDamping: 0.0,
//     fixedRotation: true,
//     material: 'player',
//   }));

//   const [position, setPosition] = useState([0, 0, 0]);
//   const [quat, setQuat] = useState([0, 0, 0, 1]);

//   useEffect(() => {
//     const unsubPos = api.position.subscribe(setPosition);
//     const unsubQuat = api.quaternion.subscribe(setQuat);
//     return () => {
//       unsubPos();
//       unsubQuat();
//     };
//   }, [api]);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load(animationList.walk.path, async (walkGLB) => {
//       const model = walkGLB.scene;
//       model.traverse((child) => {
//         if (child.isMesh) {
//           child.castShadow = true;
//           child.receiveShadow = true;
//           child.frustumCulled = false;
//           child.material.side = THREE.DoubleSide;
//         }
//       });

//       // model.position.set(10, 0, 10);
//       model.scale.set(0.6, 0.65, 0.6);
//       // console.log(model);

//       const mixer = new THREE.AnimationMixer(model);
//       mixerRef.current = mixer;

//       const walk = mixer.clipAction(walkGLB.animations[animationList.walk.index]);
//       console.log(walk);
//       const load = async ({ path, index }) => {
//         const gltf = await loader.loadAsync(path);
//         console.log(gltf);
//         return gltf.animations[index];
//       };

//       const [runAnim, idleAnim, jumpAnim, getUpAnim, sitAnim, cryAnim, laughAnim, leftTurnAnim, rightTurnAnim] = await Promise.all([
//         load(animationList.run),
//         load(animationList.idle),
//         load(animationList.jump),
//         load(animationList.getUp),
//         load(animationList.sit),
//         load(animationList.cry),
//         load(animationList.laugh),
//         load(animationList.leftTurn),
//         load(animationList.rightTurn),
//       ]);

//       const run = mixer.clipAction(runAnim);
//       const idle = mixer.clipAction(idleAnim);
//       const jump = mixer.clipAction(jumpAnim);
//       const getUp = mixer.clipAction(getUpAnim);
//       const sit = mixer.clipAction(sitAnim);
//       const cry = mixer.clipAction(cryAnim);
//       const laugh = mixer.clipAction(laughAnim);
//       const turnLeft = mixer.clipAction(leftTurnAnim);
//       const turnRight = mixer.clipAction(rightTurnAnim);

//       idle.reset();
//       idle.enabled = true;
//       idle.setLoop(THREE.LoopRepeat, Infinity);
//       idle.play();

//       currentAction.current = idle;
//       animationStarted.current = true;

//       // THIS is the fix → force apply animation before adding model to scene
//       mixer.update(0);

//       setAnimations({ walk, run, idle, jump, getUp, sit, cry, laugh, turnLeft, turnRight });
//       setLoadedCharacter(model);

//     });
//   }, []);

//   useEffect(() => {
//     api.wakeUp();
//   }, [api]);

//   useFrame((_, delta) => {
//     if (!animationStarted.current) return; // <-- skip update until animation is ready

//     mixerRef.current?.update(delta);

//     if (modelRef.current) {
//       modelRef.current.position.set(position[0], position[1] - 1, position[2]);
//       modelRef.current.quaternion.set(...quat);
//     }

//     if (ref.current) {
//       handleMovement(ref, api, keys, delta, quat);
//       updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef);
//     }
//   });


//   return (
//     <>
//       {loadedCharacter && (
//         // <primitive object={loadedCharacter} ref={modelRef} position={[0,-1,0]} />
//         <primitive object={loadedCharacter} ref={modelRef} />
//       )}

//       {followEnabled && <FollowCamera targetRef={modelRef} />}
//     </>
//   );
// }


//code 11 works but delays character
// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import * as THREE from 'three';
// import { useFrame } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useBox } from '@react-three/cannon';
// import FollowCamera from './Camera';
// import { handleMovement } from './handleMovement';
// import { updateAnimation } from './updateAnimation';
// import animationList from './animationList';

// export default function Character({ keys, followEnabled }) {
//   const mixerRef = useRef();
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);
//   const modelRef = useRef();
//   const [animations, setAnimations] = useState({});
//   const [loadedCharacter, setLoadedCharacter] = useState(null);

//   const [ref, api] = useBox(() => ({
//     type: 'Dynamic',
//     mass: 1,
//     position: [47, 1, 40],
//     args: [1, 2, 1],
//     linearDamping: 0.05,
//     angularDamping: 0.0,
//     fixedRotation: true,
//     material: 'player',
//   }));

//   const [position, setPosition] = useState([0, 0, 0]);
//   const [quat, setQuat] = useState([0, 0, 0, 1]);

//   useEffect(() => {
//     const unsubPos = api.position.subscribe(setPosition);
//     const unsubQuat = api.quaternion.subscribe(setQuat);
//     return () => {
//       unsubPos();
//       unsubQuat();
//     };
//   }, [api]);

//   useEffect(() => {
//     const loader = new GLTFLoader();

//     const loadAllAnimations = async () => {
//       const mainGLB = await loader.loadAsync(animationList.walk.path);
//       const model = mainGLB.scene;

//       model.traverse((child) => {
//         if (child.isMesh) {
//           child.castShadow = true;
//           child.receiveShadow = true;
//           child.frustumCulled = false;
//           child.material.side = THREE.DoubleSide;
//         }
//       });

//       model.scale.set(0.6, 0.65, 0.6);

//       const mixer = new THREE.AnimationMixer(model);
//       mixerRef.current = mixer;

//       const anims = {};

//       for (const key in animationList) {
//         try {
//           const { path, index } = animationList[key];
//           const gltf = await loader.loadAsync(path);
//           const clip = gltf.animations[index];
//           if (clip) {
//             anims[key] = mixer.clipAction(clip);
//           }
//         } catch (e) {
//           console.warn(`Failed to load animation: ${key}`, e);
//         }
//       }

//       const idleKey = 'idle' in anims ? 'idle' : 'm';
//       if (idleKey && anims[idleKey]) {
//         anims[idleKey].reset().setLoop(THREE.LoopRepeat, Infinity).play();
//         currentAction.current = anims[idleKey];
//       }

//       animationStarted.current = true;
//       mixer.update(0);
//       setAnimations(anims);
//       setLoadedCharacter(model);
//     };

//     loadAllAnimations();
//   }, []);

//   useEffect(() => {
//     api.wakeUp();
//   }, [api]);

//   useFrame((_, delta) => {
//     if (!animationStarted.current) return;

//     mixerRef.current?.update(delta);

//     if (modelRef.current) {
//       modelRef.current.position.set(position[0], position[1] - 1, position[2]);
//       modelRef.current.quaternion.set(...quat);
//     }

//     if (ref.current) {
//       handleMovement(ref, api, keys, delta, quat);
//       updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef);
//     }
//   });

//   return (
//     <>
//       {loadedCharacter && <primitive object={loadedCharacter} ref={modelRef} />}
//       {followEnabled && <FollowCamera targetRef={modelRef} />}
//     </>
//   );
// }

//code 12
'use client';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from '@react-three/cannon';
import FollowCamera from './Camera';
import { handleMovement } from './handleMovement';
import { updateAnimation } from './updateAnimation';
import animationList from './animationList';

export default function Character({ keys, followEnabled }) {
  const mixerRef = useRef();
  const currentAction = useRef(null);
  const animationStarted = useRef(false);
  const modelRef = useRef();
  const [animations, setAnimations] = useState({});
  const [loadedCharacter, setLoadedCharacter] = useState(null);

  const [ref, api] = useBox(() => ({
    type: 'Dynamic',
    mass: 1,
    position: [47, 1, 40],
    args: [1, 2, 1],
    linearDamping: 0.05,
    angularDamping: 0.0,
    fixedRotation: true,
    material: 'player',
  }));

  const [position, setPosition] = useState([0, 0, 0]);
  const [quat, setQuat] = useState([0, 0, 0, 1]);

  useEffect(() => {
    const unsubPos = api.position.subscribe(setPosition);
    const unsubQuat = api.quaternion.subscribe(setQuat);
    return () => {
      unsubPos();
      unsubQuat();
    };
  }, [api]);

  useEffect(() => {
    const loader = new GLTFLoader();

    // Load character and idle only first
    loader.load(animationList.idle.path, (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.frustumCulled = false;
          child.material.side = THREE.DoubleSide;
        }
      });

      model.scale.set(0.6, 0.65, 0.6);
      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      const idleClip = gltf.animations[animationList.idle.index];
      const idle = mixer.clipAction(idleClip);
      idle.reset().setLoop(THREE.LoopRepeat, Infinity).play();
      currentAction.current = idle;

      mixer.update(0);
      setAnimations({ idle });
      setLoadedCharacter(model);
      animationStarted.current = true;

      // Load all other animations in background
      setTimeout(() => {
        const anims = { idle };
        const entries = Object.entries(animationList).filter(([key]) => key !== 'idle');
        Promise.all(
          entries.map(async ([key, { path, index }]) => {
            try {
              const gltf = await loader.loadAsync(path);
              const clip = gltf.animations[index];
              if (clip) {
                anims[key] = mixer.clipAction(clip);
              }
            } catch (e) {
              console.warn(`Failed to load ${key}`, e);
            }
          })
        ).then(() => {
          setAnimations(anims);
        });
      }, 0);
    });
  }, []);

  useEffect(() => {
    api.wakeUp();
  }, [api]);

  useFrame((_, delta) => {
    if (!animationStarted.current) return;
    mixerRef.current?.update(delta);

    if (modelRef.current) {
      modelRef.current.position.set(position[0], position[1] - 1, position[2]);
      modelRef.current.quaternion.set(...quat);
    }

    if (ref.current) {
      handleMovement(ref, api, keys, delta, quat);
      updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, ref, modelRef);
    }
  });

  return (
    <>
      {loadedCharacter && <primitive object={loadedCharacter} ref={modelRef} />}
      {followEnabled && <FollowCamera targetRef={modelRef} />}
    </>
  );
}
