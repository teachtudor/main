// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import * as THREE from 'three';
// import { useFrame } from '@react-three/fiber';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import FollowCamera from './Camera';
// import { handleMovement } from './handleMovement';
// import { updateAnimation } from './updateAnimation';


// export default function Character({ keys, followEnabled }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);
//   const [animations, setAnimations] = useState({});
//   const [loadedCharacter, setLoadedCharacter] = useState(null);

//   // useEffect(() => {
//   //   const loader = new FBXLoader();
//   //   loader.load('/WalkingANARK.fbx', (obj) => {
//   //     obj.scale.set(0.025, 0.025, 0.025);
//   //     obj.position.set(30, 0.1, 30);
//   //     characterRef.current = obj;
//   //     const mixer = new THREE.AnimationMixer(obj);

//   //     const walk = mixer.clipAction(obj.animations[0]);
//   //     loader.load('/RunningANARK.fbx', (r) => {
//   //       const run = mixer.clipAction(r.animations[0]);
//   //       loader.load('/idleFakeAnimation.fbx', (i) => {
//   //         const idle = mixer.clipAction(i.animations[3]);
//   //         loader.load('/LeftTurnANARK.fbx', (l) => {
//   //           const turnLeft = mixer.clipAction(l.animations[0]);
//   //           loader.load('/RightTurnANARK1.fbx', (r) => {
//   //             const turnRight = mixer.clipAction(r.animations[0]);

//   //             idle.reset();
//   //             idle.enabled = true;
//   //             idle.setLoop(THREE.LoopRepeat, Infinity);
//   //             idle.play();
//   //             currentAction.current = idle;
//   //             animationStarted.current = true;

//   //             setAnimations({ walk, run, idle, turnLeft, turnRight });
//   //             setLoadedCharacter(obj);
//   //           });
//   //         });
//   //       });
//   //     });

//   //     mixerRef.current = mixer;
//   //   });

//   //   return () => mixerRef.current?.stopAllAction();
//   // }, []);
//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;
  
//     // loader.load('/WalkingANARK.fbx', (walkObj) => {
//     loader.load('/WalkingBeard.fbx', (walkObj) => {  
//       // walkObj.scale.set(0.025, 0.025, 0.025);
//       walkObj.scale.set(0.5, 0.5, 0.5);
//       walkObj.position.set(30, 0.1, 30);
//       characterRef.current = walkObj;
//       mixer = new THREE.AnimationMixer(walkObj);
//       mixerRef.current = mixer;
  
//       const walk = mixer.clipAction(walkObj.animations[0]);
  
//       // Chain async loads
//       Promise.all([
//         new Promise((resolve) => {
//           // loader.load('/RunningANARK.fbx', (runObj) => resolve(runObj.animations[0]));
//           loader.load('/RunningBeard.fbx', (runObj) => resolve(runObj.animations[0]));

//         }),
//         new Promise((resolve) => {
//           // loader.load('/idleFakeAnimation.fbx', (idleObj) => resolve(idleObj.animations[3]));
//           loader.load('/idleFakeAnimationBeard.fbx', (idleObj) => resolve(idleObj.animations[0]));
//         }),
//         new Promise((resolve) => {
//           // loader.load('/LeftTurnANARK.fbx', (leftObj) => resolve(leftObj.animations[0]));
//           loader.load('/LeftTurnBeard.fbx', (leftObj) => resolve(leftObj.animations[0]));

//         }),
//         new Promise((resolve) => {
//           // loader.load('/RightTurnANARK1.fbx', (rightObj) => resolve(rightObj.animations[0]));
//           loader.load('/RightTurnBeard.fbx', (rightObj) => resolve(rightObj.animations[0]));

//         }),
//       ]).then(([runAnim, idleAnim, leftAnim, rightAnim]) => {
//         const run = mixer.clipAction(runAnim);
//         const idle = mixer.clipAction(idleAnim);
//         const turnLeft = mixer.clipAction(leftAnim);
//         const turnRight = mixer.clipAction(rightAnim);
  
//         idle.reset();
//         idle.enabled = true;
//         idle.setLoop(THREE.LoopRepeat, Infinity);
//         idle.play();
//         currentAction.current = idle;
//         animationStarted.current = true;
  
//         setAnimations({ walk, run, idle, turnLeft, turnRight });
//         setLoadedCharacter(walkObj);
//       });
//     });
  
//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);
  

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys, animations, mixerRef, currentAction, animationStarted);
//     }
//   });

//   return (
//     <>
//       {loadedCharacter && <primitive object={loadedCharacter} castShadow />}
//       {followEnabled && <FollowCamera targetRef={characterRef} />}
//     </>
//   );
// }

// //code 2 works but laugh and cry dips into floor
// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import * as THREE from 'three';
// import { useFrame } from '@react-three/fiber';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import FollowCamera from './Camera';
// import { handleMovement } from './handleMovement';
// import { updateAnimation } from './updateAnimation';
// import animationList from './animationList';

// export default function Character({ keys, followEnabled }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);
//   const [animations, setAnimations] = useState({});
//   const [loadedCharacter, setLoadedCharacter] = useState(null);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load(animationList.walk.path, (walkObj) => {
//       // walkObj.scale.set(0.62, 0.62, 0.62);
//       walkObj.scale.set(0.006, 0.0065, 0.006);
//       walkObj.position.set(30, 0.1, 30);
//       characterRef.current = walkObj;
//       mixer = new THREE.AnimationMixer(walkObj);
//       mixerRef.current = mixer;

//       const walk = mixer.clipAction(walkObj.animations[animationList.walk.index]);

//       const loadAnimation = ({ path, index }) =>
//         new Promise((resolve) => {
//           loader.load(path, (obj) => resolve(obj.animations[index]));
//         });

//     //   Promise.all([
//     //     loadAnimation(animationList.run),
//     //     loadAnimation(animationList.idle),
//     //     loadAnimation(animationList.turnLeft),
//     //     loadAnimation(animationList.turnRight),
//     //   ]).then(([runAnim, idleAnim, leftAnim, rightAnim]) => {
//     //     const run = mixer.clipAction(runAnim);
//     //     const idle = mixer.clipAction(idleAnim);
//     //     const turnLeft = mixer.clipAction(leftAnim);
//     //     const turnRight = mixer.clipAction(rightAnim);

//     //     idle.reset();
//     //     idle.enabled = true;
//     //     idle.setLoop(THREE.LoopRepeat, Infinity);
//     //     idle.play();
//     //     currentAction.current = idle;
//     //     animationStarted.current = true;

//     //     setAnimations({ walk, run, idle, turnLeft, turnRight });
//     //     setLoadedCharacter(walkObj);
//     //   });
//     // });

//     Promise.all([
//       loadAnimation(animationList.run),
//       loadAnimation(animationList.idle),
//       loadAnimation(animationList.jump),
//       loadAnimation(animationList.getUp),
//       loadAnimation(animationList.sit),
//       loadAnimation(animationList.cry),
//       loadAnimation(animationList.laugh),
//       loadAnimation(animationList.leftTurn),
//       loadAnimation(animationList.rightTurn)
//     ]).then(([runAnim, idleAnim, jumpAnim, getUpAnim, sitAnim, cryAnim, laughAnim, leftTurnAnim, rightTurnAnim]) => {
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
    
//       setAnimations({ walk, run, idle, jump, getUp, sit, cry, laugh, turnLeft, turnRight });
//       setLoadedCharacter(walkObj);
//     });
//   });
    

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, characterRef);
//     }
//   });

//   return (
//     <>
//       {loadedCharacter && <primitive object={loadedCharacter} castShadow />}
//       {followEnabled && <FollowCamera targetRef={characterRef} />}
//     </>
//   );
// }

//code 3 glb virtual image no gravity
'use client';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import FollowCamera from './Camera';
import { handleMovement } from './handleMovement';
import { updateAnimation } from './updateAnimation';
import animationList from './animationList';

export default function Character({ keys, followEnabled }) {
  const characterRef = useRef();
  const mixerRef = useRef();
  const currentAction = useRef(null);
  const animationStarted = useRef(false);
  const [animations, setAnimations] = useState({});
  const [loadedCharacter, setLoadedCharacter] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    let mixer;

    loader.load(animationList.walk.path, (walkGLB) => {
      console.log('Loaded walkGLB:', walkGLB);
      const model = walkGLB.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.frustumCulled = false;
          child.material.side = THREE.DoubleSide;
          child.visible = true;
        }
      });
      
      model.scale.set(0.6, 0.65, 0.6);
      model.position.set(30, 0.1, 30);

      characterRef.current = model;
      mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      const walk = mixer.clipAction(walkGLB.animations[animationList.walk.index]);

      const loadAnimation = ({ path, index }) =>
        new Promise((resolve) => {
          loader.load(path, (gltf) => resolve(gltf.animations[index]));
        });

      Promise.all([
        loadAnimation(animationList.run),
        loadAnimation(animationList.idle),
        loadAnimation(animationList.jump),
        loadAnimation(animationList.getUp),
        loadAnimation(animationList.sit),
        loadAnimation(animationList.cry),
        loadAnimation(animationList.laugh),
        loadAnimation(animationList.leftTurn),
        loadAnimation(animationList.rightTurn)
      ]).then(([runAnim, idleAnim, jumpAnim, getUpAnim, sitAnim, cryAnim, laughAnim, leftTurnAnim, rightTurnAnim]) => {
        const run = mixer.clipAction(runAnim);
        const idle = mixer.clipAction(idleAnim);
        const jump = mixer.clipAction(jumpAnim);
        const getUp = mixer.clipAction(getUpAnim);
        const sit = mixer.clipAction(sitAnim);
        const cry = mixer.clipAction(cryAnim);
        const laugh = mixer.clipAction(laughAnim);
        const turnLeft = mixer.clipAction(leftTurnAnim);
        const turnRight = mixer.clipAction(rightTurnAnim);

        idle.reset();
        idle.enabled = true;
        idle.setLoop(THREE.LoopRepeat, Infinity);
        idle.play();

        currentAction.current = idle;
        animationStarted.current = true;

        setAnimations({ walk, run, idle, jump, getUp, sit, cry, laugh, turnLeft, turnRight });
        setLoadedCharacter(model);
      });
    });

    return () => {
      mixer?.stopAllAction();
    };
  }, []);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
    if (characterRef.current) {
      handleMovement(characterRef.current, keys);
      updateAnimation(keys, animations, mixerRef, currentAction, animationStarted, characterRef);
    }
  });

  return (
    <>
      {loadedCharacter && <primitive object={loadedCharacter} castShadow />}
      {followEnabled && <FollowCamera targetRef={characterRef} />}
    </>
  );
}
