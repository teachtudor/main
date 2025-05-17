// //code 8
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

//   // useFrame(() => {
//   //   api.velocity.set(0, 0, -5); // Constant forward movement
//   // });

//   // console.log("🎬 Character component mounted");

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

//       setAnimations({ walk, run, idle, jump, getUp, sit, cry, laugh, turnLeft, turnRight });
//       setLoadedCharacter(model);

//     });
//   }, []);

//   useEffect(() => {
//     api.wakeUp();
//   }, [api]);

//   useFrame((_, delta) => {
//     mixerRef.current?.update(delta);

//     if (modelRef.current) {
//       // modelRef.current.position.set(...position);
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
//       {/* <mesh ref={ref} visible={false} /> */}
//       {/* <mesh ref={ref} visible={true}>
//         <boxGeometry args={[1, 2, 1]} />
//         <meshStandardMaterial color="red" />
//       </mesh> */}

//       {/* {loadedCharacter && (
//         // <group ref={modelRef}>
//         //   <primitive object={loadedCharacter} position={[0,-1,0]}/>
//         // </group>
//         <primitive ref={modelRef} object={loadedCharacter} />

//       )} */}
//       {loadedCharacter && (
//         // <primitive object={loadedCharacter} ref={modelRef} position={[0,-1,0]} />
//         <primitive object={loadedCharacter} ref={modelRef} />
//       )}

//       {followEnabled && <FollowCamera targetRef={modelRef} />}
//     </>
//   );
// }

//code 9 works still t-pos issue sometimes or slide move
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

//code 10 trial

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
    position: [47,1,40],
    args: [1,2,1],
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
    loader.load(animationList.walk.path, async (walkGLB) => {
      const model = walkGLB.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.frustumCulled = false;
          child.material.side = THREE.DoubleSide;
        }
      });

      // model.position.set(10, 0, 10);
      model.scale.set(0.6, 0.65, 0.6);
      // console.log(model);

      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      const walk = mixer.clipAction(walkGLB.animations[animationList.walk.index]);
      console.log(walk);
      const load = async ({ path, index }) => {
        const gltf = await loader.loadAsync(path);
        console.log(gltf);
        return gltf.animations[index];
      };

      const [runAnim, idleAnim, jumpAnim, getUpAnim, sitAnim, cryAnim, laughAnim, leftTurnAnim, rightTurnAnim] = await Promise.all([
        load(animationList.run),
        load(animationList.idle),
        load(animationList.jump),
        load(animationList.getUp),
        load(animationList.sit),
        load(animationList.cry),
        load(animationList.laugh),
        load(animationList.leftTurn),
        load(animationList.rightTurn),
      ]);

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

      // THIS is the fix → force apply animation before adding model to scene
      mixer.update(0);

      setAnimations({ walk, run, idle, jump, getUp, sit, cry, laugh, turnLeft, turnRight });
      setLoadedCharacter(model);

    });
  }, []);

  useEffect(() => {
    api.wakeUp();
  }, [api]);

  useFrame((_, delta) => {
    if (!animationStarted.current) return; // <-- skip update until animation is ready

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
      {loadedCharacter && (
        // <primitive object={loadedCharacter} ref={modelRef} position={[0,-1,0]} />
        <primitive object={loadedCharacter} ref={modelRef} />
      )}

      {followEnabled && <FollowCamera targetRef={modelRef} />}
    </>
  );
}


