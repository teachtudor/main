// 'use client';
// import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import { Physics, usePlane, useSphere } from '@react-three/cannon';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { AnimationMixer } from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// const ceramicTexture = useLoader(THREE.TextureLoader, '/marbleTexture.jpg');
// console.log('Texture Loaded:', ceramicTexture); // Debugging if texture is loaded

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0], // Flat on the XZ axis
//     position: [0, 0, 0],           // Ground level
//     material: {
//       restitution: 0.8, //Bounciness of the ground
//     }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// // Component to load and display a GLB model
// function GLBModelSink() {
//   // useGLTF hook to load your GLB model (place your model file in the /public folder)
//   const { scene } = useGLTF('/sink.glb'); // Update with your model path
//   // console.log('GLB Loaded:', scene);

//   //   // Apply texture to the whole scene (any object within the GLB)
//   // scene.traverse((child) => {
//   //   if (child.isMesh) {
//   //     console.log('Applying texture to mesh:', child);
//   //     child.material.map = ceramicTexture;  // Apply the texture to each mesh's material
//   //     child.material.needsUpdate = true;    // Update the material
//   //   }
//   // });

//     return (
//       <primitive 
//         object={scene} 
//         scale={45}
//         position ={[15,-2.72,-27]}
//         rotation = {[0,Math.PI,0]}
//      />
//     );
//   }

//   function GLBModelSoap() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/soap1.glb'); // Update with your model path
//     // console.log('GLB Loaded:', scene);
  
//       return (
//         <primitive 
//           object={scene} 
//           scale={4}
//           position ={[17,23.85,-45]}
//           // rotation = {[0,Math.PI/2,0]}
//        />
//       );
//   }

//   function GLBModelCoatRack() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/coatrack.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={38}
//         position ={[-5,0,-40]}
//      />
//     );
//   }

//   function GLBModelBathTub() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/Bathtub.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={14}
//         position ={[-30,0,-10]}
//      />
//     );
//   }

//   function GLBModelToilet() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/Toilet.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={14}
//         position ={[-30,0,35]}
//         rotation= {[0,Math.PI/2,0]}
//      />
//     );
//   }

//   function GLBModelTowel() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/Towel.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={14}
//         position ={[32,22.4,-45]}
//         rotation= {[0,Math.PI/2,0]}
//      />
//     );
//   }

//   // Function to load and display an FBX model
//   // function FBXModel({ modelPath, scale, position }) {
//   //   const [model, setModel] = useState(null);

//   //   useEffect(() => {
//   //     const loader = new FBXLoader();
//   //     loader.load(modelPath, (fbx) => {
//   //       setModel(fbx);
//   //     });
//   //   }, [modelPath]);

//   //   return model ? (
//   //     <primitive object={model} scale={scale} position={position} />
//   //   ) : null;
//   // }
//   function FBXModel({ modelPath, scale, position, currentAnimation }) {
//     const [model, setModel] = useState(null);
//     const mixer = useRef(null);
//     const modelPosition = useRef(new THREE.Vector3(...position)); // Store position to avoid resetting
  
//     useEffect(() => {
//       const loader = new FBXLoader();
//       loader.load(modelPath, (fbx) => {
//         setModel(fbx);
//         // Create the AnimationMixer for the loaded FBX model
//         mixer.current = new AnimationMixer(fbx);
//         // Get all animations from the FBX and add them to the mixer
//         fbx.animations.forEach((clip) => {
//           const action = mixer.current.clipAction(clip);
//           action.play();
//           action.loop = THREE.LoopRepeat;  // Ensure the animation loops
//           action.clampWhenFinished = false;  // Ensure it doesn't freeze at the end
//           action.setEffectiveTimeScale(1);   // Set playback speed to normal
//         });
//       });
//     }, [modelPath]);
  
//     // useFrame((state, delta) => {
//     //   // Update the animation mixer on each frame
//     //   if (mixer.current) {
//     //     mixer.current.update(delta);
//     //   }
//     // });

//     useFrame((state, delta) => {
//       if (mixer.current && model) {
//         mixer.current.update(delta); // Update the animation mixer
  
//         // Move the model manually while the animation is playing
//         // For example, you could move the model along the x-axis
//         if (currentAnimation === 'Walking' || currentAnimation === 'FastRun') {
//           modelPosition.current.x += 0.1 * delta; // Move right along the X-axis
//         }
  
//         // Apply the updated position to the model
//         model.position.set(modelPosition.current.x, model.position.y, model.position.z);
//       }
//     });

//     // useFrame((state, delta) => {
//     //   if (mixer.current) {
//     //     mixer.current.update(delta);
    
//     //     // Manually update the model's position
//     //     const model = mixer.current._root; // Get the model object
//     //     if (model) {
//     //       // Change position along the X-axis based on time/delta
//     //       model.position.x += 0.1 * delta; // Change this value to suit your movement speed
//     //     }
//     //   }
//     // });
    
  
//     return model ? (
//       <primitive object={model} scale={scale} position={modelPosition.current.toArray()} />
//     ) : null;
//   }


// function App() {

//   const [currentAnimation, setCurrentAnimation] = useState('washinghands'); // Default animation


//   return (
//     <>
//       {/* Controls to change animations */}
//       <div className="flex gap-4">
//         <button 
//           onClick={() => setCurrentAnimation('washinghands')}
//           className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Wash Hands
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('FastRun')}
//           className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Run
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('PickingUp')}
//           className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Get
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('Walking')}
//           className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Walk
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('FinalBaseMaleModel')}
//           className="px-4 py-2 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Idle
//         </button>
//       </div>


//       <Canvas 
//         style={{ height: '100vh' }}
//         camera={{ position: [30,10,10], fov:75}}
//         gl={{ antialias: false }}>
//         {/* Enable OrbitControls for camera interaction */}
//         <OrbitControls 
//           maxPolarAngle={Math.PI*2} 
//           minPolarAngle={0}
//           enablePan={true} />

//         {/* Set up the physics engine */}
//         <Physics 
//           gravity={[0,-90, 0]}
//           iterations={5}
//           substeps={1}>
        
//           <GroundPlane/>
//           <GLBModelSink/>
//           {/* <GLBModelCoatRack/> */}
//           <GLBModelBathTub/>
//           <GLBModelToilet/>
//           <GLBModelSoap/>
//           <GLBModelTowel/>

//           {/* Load the FBX model based on the selected animation */}
//           <FBXModel
//               modelPath={`/${currentAnimation}.fbx`}  // Load the specific FBX file for the animation
//               scale={0.2}
//               position={[32,0,-15]}
//               rotation={[0,Math.PI/2,0]}
//               currentAnimation={currentAnimation}  // Pass the current animation name
//           />

          
//         </Physics>

//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 10]} intensity={2} /> {/* Strong directional light */}
//         <pointLight position={[10, 10, 10]} />
//       </Canvas>
//     </>
//   );
// }

// export default App;

//code 2

// 'use client';
// import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import { Physics, usePlane, useSphere } from '@react-three/cannon';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { AnimationMixer } from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// const ceramicTexture = useLoader(THREE.TextureLoader, '/marbleTexture.jpg');
// console.log('Texture Loaded:', ceramicTexture); // Debugging if texture is loaded

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0], // Flat on the XZ axis
//     position: [0, 0, 0],           // Ground level
//     material: {
//       restitution: 0.8, //Bounciness of the ground
//     }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// // Component to load and display a GLB model
// function GLBModelSink() {
//   // useGLTF hook to load your GLB model (place your model file in the /public folder)
//   const { scene } = useGLTF('/sink.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={45}
//         position ={[15,-2.72,-27]}
//         rotation = {[0,Math.PI,0]}
//      />
//     );
//   }

//   function GLBModelSoap() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/soap1.glb'); // Update with your model path
//     // console.log('GLB Loaded:', scene);
  
//       return (
//         <primitive 
//           object={scene} 
//           scale={4}
//           position ={[17,23.85,-45]}
//           // rotation = {[0,Math.PI/2,0]}
//        />
//       );
//   }

//   function GLBModelCoatRack() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/coatrack.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={38}
//         position ={[-5,0,-40]}
//      />
//     );
//   }

//   function GLBModelBathTub() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/Bathtub.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={14}
//         position ={[-30,0,-10]}
//      />
//     );
//   }

//   function GLBModelToilet() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/Toilet.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={14}
//         position ={[-30,0,35]}
//         rotation= {[0,Math.PI/2,0]}
//      />
//     );
//   }

//   function GLBModelTowel() {
//     // useGLTF hook to load your GLB model (place your model file in the /public folder)
//     const { scene } = useGLTF('/Towel.glb'); // Update with your model path
  
//     return (
//       <primitive 
//         object={scene} 
//         scale={14}
//         position ={[32,22.4,-45]}
//         rotation= {[0,Math.PI/2,0]}
//      />
//     );
//   }

//   function FBXModel({ modelPath, scale, position, currentAnimation }) {
//     const [model, setModel] = useState(null);
//     const mixer = useRef(null);
//     const modelPosition = useRef(new THREE.Vector3(...position)); // Store position to avoid resetting
  
//     useEffect(() => {
//       const loader = new FBXLoader();
//       loader.load(modelPath, (fbx) => {
//         setModel(fbx);
//         // Create the AnimationMixer for the loaded FBX model
//         mixer.current = new AnimationMixer(fbx);
//         // Get all animations from the FBX and add them to the mixer
//         fbx.animations.forEach((clip) => {
//           const action = mixer.current.clipAction(clip);
          
//           // Remove position keyframes from the animation
//           clip.tracks = clip.tracks.filter(track => !track.name.includes('.position'));
      
//           action.play();
//         });
//       });
//     }, [modelPath]);
  
//     useFrame((state, delta) => {
//       if (mixer.current && model) {
//         mixer.current.update(delta); // Update the animation mixer
  
//         // Move the model manually while the animation is playing
//         // For example, you could move the model along the x-axis
//         if (currentAnimation === 'Walking' || currentAnimation === 'FastRun') {
//           modelPosition.current.z += 0 * delta; // Move right along the z-axis
//         }
  
//         // Apply the updated position to the model
//         model.position.set(modelPosition.current.x, model.position.y, model.position.z);
//       }
//     });

    
//     return model ? (
//       <primitive object={model} scale={scale} position={modelPosition.current.toArray()} />
//     ) : null;
//   }

// function App() {

//   const [currentAnimation, setCurrentAnimation] = useState('washinghands'); // Default animation


//   return (
//     <>
//       {/* Controls to change animations */}
//       <div className="flex gap-4">
//         <button 
//           onClick={() => setCurrentAnimation('washinghands')}
//           className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Wash Hands
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('FastRun')}
//           className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Run
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('PickingUp')}
//           className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Get
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('Walking')}
//           className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Walk
//         </button>

//         <button 
//           onClick={() => setCurrentAnimation('FinalBaseMaleModel')}
//           className="px-4 py-2 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm transform active:translate-y-1 transition-all"
//         >
//           Idle
//         </button>
//       </div>


//       <Canvas 
//         style={{ height: '100vh' }}
//         camera={{ position: [30,10,10], fov:75}}
//         gl={{ antialias: false }}>
//         {/* Enable OrbitControls for camera interaction */}
//         <OrbitControls 
//           maxPolarAngle={Math.PI*2} 
//           minPolarAngle={0}
//           enablePan={true} />

//         {/* Set up the physics engine */}
//         <Physics 
//           gravity={[0,-90, 0]}
//           iterations={5}
//           substeps={1}>
        
//           <GroundPlane/>
//           <GLBModelSink/>
//           {/* <GLBModelCoatRack/> */}
//           <GLBModelBathTub/>
//           <GLBModelToilet/>
//           <GLBModelSoap/>
//           <GLBModelTowel/>

//           {/* Load the FBX model based on the selected animation */}
//           <FBXModel
//               modelPath={`/${currentAnimation}.fbx`}  // Load the specific FBX file for the animation
//               scale={0.2}
//               position={[32,0,-15]}
//               rotation={[0,Math.PI/2,0]}
//               currentAnimation={currentAnimation}  // Pass the current animation name
//           />

          
//         </Physics>

//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 10]} intensity={2} /> {/* Strong directional light */}
//         <pointLight position={[10, 10, 10]} />
//       </Canvas>
//     </>
//   );
// }

// export default App;

//code 3
// 'use client';
// import React, { useEffect, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useFBX } from "@react-three/drei";
// import * as THREE from "three";

// function AnimatedModel() {
//   const model = useFBX("/FinalBaseMaleModel.fbx"); // Base character model
//   const walkAnimation = useFBX("/Walking.fbx"); // Walk animation
//   const runAnimation = useFBX("/FastRun.fbx"); // FastRun animation

//   const mixer = useRef(null);
//   const actions = useRef({});
//   const [activeAction, setActiveAction] = useState(null);

//   useEffect(() => {
//     if (!model) return;

//     mixer.current = new THREE.AnimationMixer(model);

//     if (walkAnimation.animations.length > 0) {
//       actions.current.walk = mixer.current.clipAction(walkAnimation.animations[0]);
//     } else {
//       console.warn("❌ Walk animation not found in /walk.fbx");
//     }

//     if (runAnimation.animations.length > 0) {
//       actions.current.run = mixer.current.clipAction(runAnimation.animations[0]);
//     } else {
//       console.warn("❌ FastRun animation not found in /FastRun.fbx");
//     }

//     // Set idle or first available animation
//     if (model.animations.length > 0) {
//       const idleAction = mixer.current.clipAction(model.animations[0]);
//       idleAction.play();
//       setActiveAction(idleAction);
//     } else {
//       console.warn("❌ No default animations found in /model.fbx");
//     }
//   }, [model, walkAnimation, runAnimation]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "w" && actions.current.walk) {
//         console.log("🏃 Switching to Walk animation");
//         playAnimation(actions.current.walk);
//       } else if (event.key === "r" && actions.current.run) {
//         console.log("🏃💨 Switching to FastRun animation");
//         playAnimation(actions.current.run);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const playAnimation = (action) => {
//     if (!action) return;

//     if (activeAction) {
//       activeAction.fadeOut(0.5);
//     }
//     action.reset().fadeIn(0.5).play();
//     setActiveAction(action);
//   };

//   // Ensure the animation mixer updates on each frame
//   useFrame((state, delta) => {
//     if (mixer.current) mixer.current.update(delta);
//   });

//   return <primitive object={model} scale={0.01} position={[0, 0.5, 0]} />;
// }

// function Scene() {
//   return (
//     <Canvas camera={{ position: [0, 2, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <OrbitControls />
//       <AnimatedModel />
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//         <planeGeometry args={[10, 10]} />
//         <meshStandardMaterial color="gray" />
//       </mesh>
//     </Canvas>
//   );
// }

// export default Scene;


//code 4
// 'use client';
// import React, { useEffect, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useFBX } from "@react-three/drei";
// import * as THREE from "three";

// function AnimatedModel() {
//   const model = useFBX("/FinalBaseMaleModel.fbx"); // Base character model
//   const walkAnimation = useFBX("/Walking.fbx"); // Walk animation
//   const runAnimation = useFBX("/FastRun.fbx"); // FastRun animation

//   const mixer = useRef(null);
//   const actions = useRef({});
//   const [activeAction, setActiveAction] = useState(null);

//   useEffect(() => {
//     if (!model) return;

//     mixer.current = new THREE.AnimationMixer(model);

//     console.log("🔍 Model Animations:", model.animations);
//     console.log("🔍 Walk Animations:", walkAnimation.animations);
//     console.log("🔍 Run Animations:", runAnimation.animations);

//     if (walkAnimation.animations.length > 0) {
//       actions.current.walk = mixer.current.clipAction(walkAnimation.animations[0]);
//       actions.current.walk.setEffectiveWeight(1).setLoop(THREE.LoopRepeat, Infinity);
//     } else {
//       console.warn("❌ Walk animation not found in /walk.fbx");
//     }

//     if (runAnimation.animations.length > 0) {
//       actions.current.run = mixer.current.clipAction(runAnimation.animations[0]);
//       actions.current.run.setEffectiveWeight(1).setLoop(THREE.LoopRepeat, Infinity);
//     } else {
//       console.warn("❌ FastRun animation not found in /FastRun.fbx");
//     }

//     if (model.animations.length > 0) {
//       const idleAction = mixer.current.clipAction(model.animations[0]);
//       idleAction.setEffectiveWeight(1).setLoop(THREE.LoopRepeat, Infinity);
//       idleAction.play();
//       setActiveAction(idleAction);
//     } else {
//       console.warn("❌ No default animations found in /model.fbx");
//     }
//   }, [model, walkAnimation, runAnimation]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       let nextAction = null;
//       if (event.key === "w" && actions.current.walk) {
//         console.log("🏃 Switching to Walk animation");
//         nextAction = actions.current.walk;
//       } else if (event.key === "r" && actions.current.run) {
//         console.log("🏃💨 Switching to FastRun animation");
//         nextAction = actions.current.run;
//       }

//       if (nextAction && nextAction !== activeAction) {
//         playAnimation(nextAction);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [activeAction]);

//   const playAnimation = (action) => {
//     if (!action) return;

//     if (activeAction) {
//       activeAction.fadeOut(0.3);
//     }
//     action.reset().fadeIn(0.3).play();
//     setActiveAction(action);
//   };

//   useFrame((_, delta) => {
//     if (mixer.current) {
//       mixer.current.update(delta);
//     }
//   });

//   return <primitive object={model} scale={0.01} position={[0, 0.5, 0]} />;
// }

// function Scene() {
//   return (
//     <Canvas camera={{ position: [0, 2, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <OrbitControls />
//       <AnimatedModel />
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//         <planeGeometry args={[10, 10]} />
//         <meshStandardMaterial color="gray" />
//       </mesh>
//     </Canvas>
//   );
// }

// export default Scene;


//CODE 5
// 'use client';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// export default function ThreeScene() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
    
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);
    
//     camera.position.z = 5;

//     // Loaders
//     const loader = new FBXLoader();
//     let mixer, walkAnimation, runAnimation, character;

//     // Load walk animation
//     loader.load('Walking.fbx', (object) => {
//       character = object;
//       character.scale.set(0.01, 0.01, 0.01);
//       scene.add(character);
//       mixer = new THREE.AnimationMixer(character);
//       walkAnimation = mixer.clipAction(object.animations[0]);
//     });

//     // Load run animation
//     loader.load('FastRun.fbx', (object) => {
//       runAnimation = mixer.clipAction(object.animations[0]);
//     });

//     // loader.load('FastRun.fbx', (object) => {
//     //   character1 =object;
//     //   character1.scale.set(0.01, 0.01, 0.01);
//     //   scene.add(character1);
//     //   mixer = new THREE.AnimationMixer(character);
//     //   runAnimation = mixer.clipAction(object.animations[0]);
//     // });

//     // Animation loop
//     // const clock = new THREE.Clock();
//     // function animate() {
//     //   requestAnimationFrame(animate);
//     //   if (mixer) {
//     //     mixer.update(clock.getDelta());
//     //   }
//     //   renderer.render(scene, camera);
//     // }
//     // Modify the animation loop

//     const clock = new THREE.Clock();
//     function animate() {
//       requestAnimationFrame(animate);

//       if (mixer) {
//         mixer.update(clock.getDelta());
//       }

//       moveCharacter(); // Move the character based on key presses

//       renderer.render(scene, camera);
//     }
//     animate();

//     // Keyboard input
//     // const keys = {};
//     // function updateAnimation() {
//     //   if (!mixer || !walkAnimation || !runAnimation) return;
//     //   if (keys['w'] && walkAnimation) {
//     //     if (!walkAnimation.isRunning()) walkAnimation.play();
//     //     runAnimation?.stop();
//     //   } else if (keys['r'] && runAnimation) {
//     //     if (!runAnimation.isRunning()) runAnimation.play();
//     //     walkAnimation?.stop();
//     //   } else {
//     //     walkAnimation?.stop();
//     //     runAnimation?.stop();
//     //   }
//     // }

//     let moveSpeed = 0.05; // Adjust movement speed
//     const keys = {}; // Track pressed keys

//     function updateAnimation() {
//       if (!mixer || !walkAnimation || !runAnimation || !character) return;

//       if (keys['w']) {
//         if (!walkAnimation.isRunning()) walkAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         runAnimation?.fadeOut(0.3);
//       } else if (keys['r']) {
//         if (!runAnimation.isRunning()) runAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         walkAnimation?.fadeOut(0.3);
//       } else {
//         // Smoothly fade out instead of an abrupt stop
//         if (walkAnimation.isRunning()) walkAnimation.fadeOut(0.5);
//         if (runAnimation.isRunning()) runAnimation.fadeOut(0.5);
//       }
//       walkAnimation.enabled = keys['w'];
//       runAnimation.enabled = keys['r'];
//     }

//     function moveCharacter() {
//       if (!character) return;
      
//       if (keys['w']) {
//         character.position.z += moveSpeed; // Move forward
//       }
//       if (keys['s']) {
//         character.position.z -= moveSpeed; // Move backward
//       }
//       if (keys['a']) {
//         character.position.x -= moveSpeed; // Move left
//       }
//       if (keys['d']) {
//         character.position.x += moveSpeed; // Move right
//       }
//     }

//     document.addEventListener('keydown', (event) => {
//       keys[event.key] = true;
//       updateAnimation();
//     });

//     document.addEventListener('keyup', (event) => {
//       keys[event.key] = false;
//       updateAnimation();
//     });

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Resize handling
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize);

//     return () => {
//       // Cleanup function to remove event listeners
//       window.removeEventListener('resize', onWindowResize);
//       document.removeEventListener('keydown', updateAnimation);
//       document.removeEventListener('keyup', updateAnimation);
//       // mountRef.current.removeChild(renderer.domElement);
//       if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={mountRef} />;
// }

//code 6
// 'use client';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// export default function ThreeScene() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);
//     camera.position.z = 5;

//     // Loaders
//     const loader = new FBXLoader();
//     let mixer, walkAnimation, runAnimation, character;

//     // // Load walk animation
//     // loader.load('Walking.fbx', (object) => {
//     //   character = object;
//     //   character.scale.set(0.01, 0.01, 0.01);
//     //   scene.add(character);

//     //   // Ensure mixer is initialized once
//     //   mixer = new THREE.AnimationMixer(character);
//     //   walkAnimation = mixer.clipAction(object.animations[0]);
//     // });

//     // // Load run animation
//     // loader.load('FastRun.fbx', (object) => {
//     //   if (!character || !mixer) return; // Ensure character is loaded first
//     //   runAnimation = mixer.clipAction(object.animations[0]);
//     // });

//     loader.load('Walking.fbx', (object) => {
//       character = object; // ✅ Set character only once
//       character.scale.set(0.01, 0.01, 0.01);
//       scene.add(character);
//       mixer = new THREE.AnimationMixer(character); // ✅ Mixer tied to one character
    
//       walkAnimation = mixer.clipAction(object.animations[0]);
    
//       // Now load the run animation, but don't set character again
//       loader.load('FastRun.fbx', (runObject) => {
//         runAnimation = mixer.clipAction(runObject.animations[0]); // ✅ Uses same mixer
//       });
//     });

//     // Animation loop
//     const clock = new THREE.Clock();
//     function animate() {
//       requestAnimationFrame(animate);
//       if (mixer) mixer.update(clock.getDelta());
//       moveCharacter();
//       renderer.render(scene, camera);
//     }
//     animate();

//     // Movement and input
//     let moveSpeed = 0.05;
//     const keys = {};

//     function updateAnimation() {
//       if (!mixer || !walkAnimation || !runAnimation || !character) return;

//       if (keys['w']) {
//         if (!walkAnimation.isRunning()){
//           walkAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           walkAnimation.timeScale = 1;
//           runAnimation?.fadeOut(0.3);
//         } 
//       } else if (keys['s']) {
//         if (!walkAnimation.isRunning()){
//           walkAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           walkAnimation.timeScale = -1;//reverse the playback direction
//           runAnimation?.fadeOut(0.3);
//         } 
//       } else if (keys['r']) {
//         if (!runAnimation.isRunning()){
//           runAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           runAnimation.timeScale = 1;
//           walkAnimation?.fadeOut(0.3);
//         } 
//       } else if (keys['b']) {
//         if (!runAnimation.isRunning()){
//           runAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           runAnimation.timeScale = -1;
//           walkAnimation?.fadeOut(0.3);
//         } 
//       } else {
//         walkAnimation?.fadeOut(0.5);
//         runAnimation?.fadeOut(0.5);
//       }
//     }

//     function moveCharacter() {
//       if (!character) return;

//       const speed = keys['r'] ? moveSpeed * 1.5 : moveSpeed;
//       if (keys['w']) character.position.z += speed;
//       if (keys['s']) character.position.z -= speed;
//       if (keys['a']) character.position.x -= speed;
//       if (keys['d']) character.position.x += speed;
//       if (keys['r']) character.position.z += speed;
//       if (keys['b']) character.position.z -= speed;
//     }

//     const handleKeyDown = (event) => {
//       keys[event.key] = true;
//       updateAnimation();
//     };

//     const handleKeyUp = (event) => {
//       keys[event.key] = false;
//       updateAnimation();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Handle window resizing
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize);

//     return () => {
//       if (mixer) mixer.stopAllAction();
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//       window.removeEventListener('resize', onWindowResize);
//       if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={mountRef} />;
// }


//CODE 7
// 'use client';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// export default function ThreeScene() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);
//     camera.position.z = 5;

//     // Loaders
//     const loader = new FBXLoader();
//     let mixer, walkAnimation, runAnimation, character;

//     loader.load('Walking.fbx', (object) => {
//       character = object; // ✅ Set character only once
//       character.scale.set(0.01, 0.01, 0.01);
//       scene.add(character);
//       mixer = new THREE.AnimationMixer(character); // ✅ Mixer tied to one character
    
//       walkAnimation = mixer.clipAction(object.animations[0]);
    
//       // Now load the run animation, but don't set character again
//       loader.load('FastRun.fbx', (runObject) => {
//         runAnimation = mixer.clipAction(runObject.animations[0]); // ✅ Uses same mixer
//       });
//     });

//     // Animation loop
//     const clock = new THREE.Clock();
//     function animate() {
//       requestAnimationFrame(animate);
//       if (mixer) mixer.update(clock.getDelta());
//       moveCharacter();
//       renderer.render(scene, camera);
//     }
//     animate();

//     // Movement and input
//     let moveSpeed = 0.05;
//     const keys = {};

//     function updateAnimation() {
//       if (!mixer || !walkAnimation || !runAnimation || !character) return;

//       if (keys['w']) {
//         if (!walkAnimation.isRunning()){
//           walkAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           walkAnimation.timeScale = 1;
//           runAnimation?.fadeOut(0.3);
//         } 
//       } else if (keys['s']) {
//         if (!walkAnimation.isRunning()){
//           walkAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           walkAnimation.timeScale = -1;//reverse the playback direction
//           runAnimation?.fadeOut(0.3);
//         } 
//       } else if (keys['r']) {
//         if (!runAnimation.isRunning()){
//           runAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           runAnimation.timeScale = 1;
//           walkAnimation?.fadeOut(0.3);
//         } 
//       } else if (keys['b']) {
//         if (!runAnimation.isRunning()){
//           runAnimation.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//           runAnimation.timeScale = -1;
//           walkAnimation?.fadeOut(0.3);
//         } 
//       } else {
//         walkAnimation?.fadeOut(0.5);
//         runAnimation?.fadeOut(0.5);
//       }
//     }

//     function moveCharacter() {
//       if (!character) return;

//       const speed = keys['r'] ? moveSpeed * 1.5 : moveSpeed;
//       if (keys['w']) character.position.z += speed;
//       if (keys['s']) character.position.z -= speed;
//       if (keys['a']) character.position.x -= speed;
//       if (keys['d']) character.position.x += speed;
//       if (keys['r']) character.position.z += speed;
//       if (keys['b']) character.position.z -= speed;
//     }

//     const handleKeyDown = (event) => {
//       keys[event.key] = true;
//       updateAnimation();
//     };

//     const handleKeyUp = (event) => {
//       keys[event.key] = false;
//       updateAnimation();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Handle window resizing
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize);

//     return () => {
//       if (mixer) mixer.stopAllAction();
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//       window.removeEventListener('resize', onWindowResize);
//       if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={mountRef} />;
// }

//code 8
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import  { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane, useSphere } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height; // Set the aspect ratio based on the window size
//     camera.fov = 75;
//     camera.position.set(0,5,15);
//     camera.updateProjectionMatrix(); // Update the projection matrix when resizing
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane(){
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI/2, 0, 0],//Flat on teh XZ Axis
//     position: [0,0,0],
//     material: {
//       restitution: 0.8, //Bounciness of the ground
//     }
//   }));
//   return(
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[window.innerWidth, window.innerHeight]}/>
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide}/>
//     </mesh>
//   );
// }


// // Character Component
// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null });

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('Walking.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('FastRun.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         setAnimations({ walk, run });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) moveCharacter(characterRef.current, keys);
//   });

//   function moveCharacter(character, keys) {
//     const moveSpeed = keys['r'] ? 0.075 : 0.05; // Run faster
//     if (keys['w']) character.position.z += moveSpeed;
//     if (keys['s']) character.position.z -= moveSpeed;
//     if (keys['a']) character.position.x -= moveSpeed;
//     if (keys['d']) character.position.x += moveSpeed;
//     if (keys['r']) character.position.z += moveSpeed;

//     updateAnimation(keys);
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run) return;

//     if (keys['w'] || keys['s']) {
//       if (!animations.walk.isRunning()) {
//         animations.walk.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         animations.walk.timeScale = keys['s'] ? -1 : 1; // Reverse for 's'
//         animations.run?.fadeOut(0.3);
//       }
//     } else if (keys['r'] || keys['b']) {
//       if (!animations.run.isRunning()) {
//         animations.run.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         animations.run.timeScale = keys['b'] ? -1 : 1; // Reverse for 'b'
//         animations.walk?.fadeOut(0.3);
//       }
//     } else {
//       animations.walk?.fadeOut(0.5);
//       animations.run?.fadeOut(0.5);
//     }
//   }

//   return characterRef.current ? <primitive object={characterRef.current} /> : null;
// }

// // // Scene Wrapper
// // export default function ThreeScene() {
// //   const [keys, setKeys] = useState({});
// //   const { camera, gl } = useThree();

// //   useEffect(() => {
// //     // Handle key events
// //     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
// //     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

// //     document.addEventListener('keydown', handleKeyDown);
// //     document.addEventListener('keyup', handleKeyUp);

// //     // Window Resize Handling
// //     const onWindowResize = () => {
// //       camera.aspect = window.innerWidth / window.innerHeight;
// //       camera.updateProjectionMatrix();
// //       gl.setSize(window.innerWidth, window.innerHeight);
// //     };
// //     window.addEventListener('resize', onWindowResize);

// //     return () => {
// //       document.removeEventListener('keydown', handleKeyDown);
// //       document.removeEventListener('keyup', handleKeyUp);
// //       window.removeEventListener('resize', onWindowResize);
// //     };
// //   }, [camera, gl]);

// // Camera & Controls (Handles resizing)
// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// // Main Scene Component
// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={0.5} />
      
//       <OrbitControls
//         maxPolarAngle={Math.PI*2}
//         minPolarAngle={0}
//         enablePan={true}/>

//       <Physics>
//         <SceneWrapper keys={keys}/>
//         <GroundPlane/>
//       </Physics>
//       <Camera/>
//       <ResizeListener/>
//     </Canvas>
//   );
// }


//code 10
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane, useSphere } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height; // Set the aspect ratio based on the window size
//     camera.fov = 75; // Set field of view
//     camera.position.set(0, 5, 15); // Move the camera back and up
//     camera.updateProjectionMatrix(); // Update projection matrix
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight); // Adjust canvas size
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const { size } = useThree();
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0], // Flat on the XZ Axis
//     position: [0, -0.1, 0], // Move plane slightly down
//     material: {
//       restitution: 0.8, // Bounciness of the ground
//     }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100,100]} /> {/* Adjust to fit screen size */}
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null });

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('Walking.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('FastRun.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         setAnimations({ walk, run });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) moveCharacter(characterRef.current, keys);
//   });

//   function moveCharacter(character, keys) {
//     const moveSpeed = keys['r'] ? 0.075 : 0.05; // Run faster
//     if (keys['w']) character.position.z += moveSpeed;
//     if (keys['s']) character.position.z -= moveSpeed;
//     if (keys['a']) character.position.x -= moveSpeed;
//     if (keys['d']) character.position.x += moveSpeed;
//     if (keys['r']) character.position.z += moveSpeed;

//     updateAnimation(keys);
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run) return;

//     if (keys['w'] || keys['s']) {
//       if (!animations.walk.isRunning()) {
//         animations.walk.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         animations.walk.timeScale = keys['s'] ? -1 : 1; // Reverse for 's'
//         animations.run?.fadeOut(0.3);
//       }
//     } else if (keys['r'] || keys['b']) {
//       if (!animations.run.isRunning()) {
//         animations.run.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         animations.run.timeScale = keys['b'] ? -1 : 1; // Reverse for 'b'
//         animations.walk?.fadeOut(0.3);
//       }
//     } else {
//       animations.walk?.fadeOut(0.5);
//       animations.run?.fadeOut(0.5);
//     }
//   }

//   return characterRef.current ? <primitive object={characterRef.current} /> : null;
// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// // Main Scene Component
// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas 
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width:'100vw', height:'100vh'}}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} />

//       <OrbitControls 
//         maxPolarAngle={Math.PI * 2} 
//         minPolarAngle={0} 
//         enablePan={true}
//         enableZoom={true} />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }

//code 11
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane, useSphere } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height; // Set the aspect ratio based on the window size
//     camera.fov = 75; // Set field of view
//     camera.position.set(0, 5, 15); // Move the camera back and up
//     camera.updateProjectionMatrix(); // Update projection matrix
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight); // Adjust canvas size
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const { size } = useThree();
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0], // Flat on the XZ Axis
//     position: [0, -0.1, 0], // Move plane slightly down
//     material: {
//       restitution: 0.8, // Bounciness of the ground
//     }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100,100]} /> {/* Adjust to fit screen size */}
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null });

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('Walking.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('FastRun.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         setAnimations({ walk, run });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) moveCharacter(characterRef.current, keys);
//   });

//   function moveCharacter(character, keys) {
//     const moveSpeed = keys['r'] ? 0.075 : 0.05; // Run faster
//     if (keys['w']) character.position.z += moveSpeed;
//     if (keys['s']) character.position.z -= moveSpeed;
//     if (keys['a']) character.position.x -= moveSpeed;
//     if (keys['d']) character.position.x += moveSpeed;
//     if (keys['r']) character.position.z += moveSpeed;

//     updateAnimation(keys);
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run) return;

//     if (keys['w'] || keys['s']) {
//       if (!animations.walk.isRunning()) {
//         animations.walk.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         animations.walk.timeScale = keys['s'] ? -1 : 1; // Reverse for 's'
//         animations.run?.fadeOut(0.3);
//       }
//     } else if (keys['r'] || keys['b']) {
//       if (!animations.run.isRunning()) {
//         animations.run.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//         animations.run.timeScale = keys['b'] ? -1 : 1; // Reverse for 'b'
//         animations.walk?.fadeOut(0.3);
//       }
//     } else {
//       animations.walk?.fadeOut(0.5);
//       animations.run?.fadeOut(0.5);
//     }
//   }

//   return characterRef.current ? <primitive object={characterRef.current} /> : null;
// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// // Main Scene Component
// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas 
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width:'100vw', height:'100vh'}}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} />

//       <OrbitControls 
//         maxPolarAngle={Math.PI * 2} 
//         minPolarAngle={0} 
//         enablePan={true}
//         enableZoom={true} />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }

//code 12 FIRST BASIC
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     // camera.position.set(0, 5, 15);
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100,100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/Walking1.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       console.log("Loaded FBX:", object);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('/Running1.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         setAnimations({ walk, run });
//         setLoaded(true);
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });
//   // useFrame((_, delta) => {
//   //   if (mixerRef.current) mixerRef.current.update(delta);
  
//   //   const character = characterRef.current;
//   //   if (character) {
//   //     // 🛑 Stop baked-in animation from affecting position
//   //     // character.position.z = 0;
//   //     character.position.set(character.position.x, character.position.y, 0);

  
//   //     // ✅ Let your manual movement take control
//   //     handleMovement(character, keys);
//   //     updateAnimation(keys);
//   //   }
//   // });
  

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['w'] || keys['s'] || keys['a'] || keys['d'];

//     if (!isRunning && !isWalking) return; // Stop movement if no key is pressed

//     const moveSpeed = isRunning ? 0.075 : 0.05;

//     if (keys['w']) character.position.z += moveSpeed/5;
//     if (keys['s']) character.position.z -= moveSpeed/5;
//     if (keys['a']) character.position.x -= moveSpeed;
//     if (keys['d']) character.position.x += moveSpeed;
//     if (keys['r']) character.position.z += moveSpeed/2;
//     if (keys['b']) character.position.z -= moveSpeed/2;
//   }

//   // function updateAnimation(keys) {
//   //   if (!mixerRef.current || !animations.walk || !animations.run) return;

//   //   const isRunning = keys['r'] || keys['b'];
//   //   const isWalking = keys['w'] || keys['s'];
//   //   const noInput = !isRunning && !isWalking;

//   //   if (noInput) {
//   //     fadeOutCurrent();
//   //     currentAction.current = null;
//   //     return;
//   //   }

//   //   const newAction = isRunning ? animations.run : animations.walk;
//   //   const directionKey = keys['s'] || keys['b'] ? -1 : 1;

//   //   if (currentAction.current !== newAction) {
//   //     fadeOutCurrent();
//   //     newAction.reset().setLoop(THREE.LoopRepeat).fadeIn(0.3).play();
//   //     currentAction.current = newAction;
//   //   }

//   //   if (currentAction.current) {
//   //     currentAction.current.timeScale = directionKey;
//   //   }
//   // }

//   // function fadeOutCurrent() {
//   //   if (currentAction.current?.isRunning()) {
//   //     currentAction.current.fadeOut(0.3);
//   //   }
//   // }
//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['w'] || keys['s'];
//     const noInput = !isRunning && !isWalking;

//     if (noInput) {
//       if (currentAction.current?.isRunning()) {
//         currentAction.current.fadeOut(0.3);
//       }
//       currentAction.current = null;
//       return;
//     }

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['s'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       if (currentAction.current?.isRunning()) {
//         currentAction.current.fadeOut(0.3);
//       }

//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
      

//       currentAction.current = newAction;
//     }

//     // if (currentAction.current) {
//     //   currentAction.current.setEffectiveTimeScale(direction);
//     // }
//     // Only set timeScale if it has changed
//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }


// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }


//CODE 13
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';


// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     // camera.position.set(0, 5, 15);
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100,100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null, idle: null });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const { scene } =useThree();
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;
  
//     loader.load('/Walking1.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       console.log("Loaded FBX:", object);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);
     

//       loader.load('/Running1.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         console.log('runner log', runObject);
  
//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           console.log('object idle', idleObject);
//           console.log('test model:', idleObject.animations);
//           console.log(idleObject.animations[0].tracks);
//           console.log(idleObject.animations[0].duration);
//           console.log('new one 1', idleObject.animations[0].tracks.map(t => t.name));
//           console.log('new one 2', idleObject.animations[1].tracks.map(t => t.name));

//           const idle = mixer.clipAction(idleObject.animations[3]);

//           // 👇 Play idle immediately to guarantee it starts BEFORE updateAnimation ever runs
//           idle.reset();
//           idle.enabled = true;
//           idle.setLoop(THREE.LoopRepeat, Infinity);
//           idle.play();
//           currentAction.current = idle;
//           animationStarted.current = true; // prevent auto-start of walk
//           setAnimations({ walk, run, idle });
//           setLoaded(true);
//           console.log('Idle animation assigned:', idle);

//         });
//       });
//       mixerRef.current = mixer;
//     });
  
//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);
  

//   useFrame((_, delta) => {

//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];

//     if (!isRunning && !isWalking) return; // Stop movement if no key is pressed

//     const moveSpeed = isRunning ? 0.075 : 0.05;

//     // Move forward relative to the current rotation
//     if (keys['ArrowUp'] || keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }

//     // Move backward
//     if (keys['ArrowDown'] || keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.5);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }

//     // Turn left/right (not strafe)
//     if (keys['ArrowLeft']) character.rotation.y += 0.03;
//     if (keys['ArrowRight']) character.rotation.y -= 0.03;

//   }

//   function updateAnimation(keys) {
//     // console.log('Current action:', currentAction.current?._clip?.name);

//     if (!mixerRef.current || !animations.walk || !animations.run || !animations.idle) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const noInput = !isRunning && !isWalking;

//     // if (noInput) {
//     //   if (currentAction.current?.isRunning()) {
//     //     d
//     //     currentAction.current.fadeOut(0.3);
//     //   }
//     //   currentAction.current = null;
//     //   return;
//     // }

//     // ✅ First-time idle on load
//     // if (noInput && !animationStarted.current) {
//     //   idleAction.enabled = true;
//     //   idleAction.setLoop(THREE.LoopRepeat, Infinity);
//     //   idleAction.fadeIn(0.3).play();
//     //   currentAction.current = idleAction;
//     //   animationStarted.current = true; // 🧠 prevent repeat
//     //   return;
//     // }

//     if (noInput) {

//       const idleAction = animations.idle;
//       // const walkAction = animations.walk;
    
//       if (currentAction.current !== idleAction) {
//         if (currentAction.current?.isRunning()) {
//           currentAction.current.fadeOut(0.3);
//         }
//         // walkAction.enabled = false;
//         // walkAction.stop();
    
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
    
//       return;
//     }
    

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       if (currentAction.current?.isRunning()) {
//         currentAction.current.fadeOut(0.3);
//       }

//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
      

//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }


// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }


//code 14
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);

//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function stripRootMotion(clip) {
//   const filteredTracks = clip.tracks.filter((track) => {
//     const name = track.name.toLowerCase();
//     return !name.includes('armature') || (
//       !name.endsWith('.position') &&
//       !name.endsWith('.scale')
//     );
//   });
//   return new THREE.AnimationClip(clip.name, clip.duration, filteredTracks);
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null, idle: null });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const { scene } = useThree();

//   useEffect(() => {
//     const loader = new FBXLoader();
//     const loadFBX = (url) => new Promise((resolve) => loader.load(url, resolve));

//     Promise.all([
//       loadFBX('/Walking1.fbx'),
//       loadFBX('/Running1.fbx'),
//       loadFBX('/idleFakeAnimation.fbx')
//     ]).then(([walkObject, runObject, idleObject]) => {
//       walkObject.scale.set(0.01, 0.01, 0.01);
//       characterRef.current = walkObject;
//       // scene.add(walkObject);

//       const mixer = new THREE.AnimationMixer(walkObject);
//       mixerRef.current = mixer;

//       const walkClip = stripRootMotion(walkObject.animations[0]);
//       const walk = mixer.clipAction(walkObject.animations[0]);
//       walk.stop();
//       walk.enabled = false;

//       const runClip = stripRootMotion(runObject.animations[0]);
//       const run = mixer.clipAction(runObject.animations[0]);
//       run.stop();
//       run.enabled = false;

//       const rawIdle = idleObject.animations[0];
//       const strippedIdle = stripRootMotion(rawIdle);
//       // const idle = mixer.clipAction(strippedIdle);
//       const idleClip = stripRootMotion(idleObject.animations[0]);
//       const idle = mixer.clipAction(idleClip);

//       idle.reset();
//       idle.enabled = true;
//       idle.setLoop(THREE.LoopRepeat, Infinity);
//       idle.play();

//       currentAction.current = idle;
//       setAnimations({ walk, run, idle });
//       setLoaded(true);
//     });

//     return () => {
//       mixerRef.current?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//     if (!isRunning && !isWalking) return;

//     const moveSpeed = isRunning ? 0.075 : 0.05;

//     if (keys['ArrowUp'] || keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }
//     if (keys['ArrowDown'] || keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.5);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }
//     if (keys['ArrowLeft']) character.rotation.y += 0.03;
//     if (keys['ArrowRight']) character.rotation.y -= 0.03;
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run || !animations.idle) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const noInput = !isRunning && !isWalking;
//     const idleAction = animations.idle;

//     if (noInput) {
//       if (currentAction.current !== idleAction) {
//         if (currentAction.current?.isRunning()) {
//           currentAction.current.fadeOut(0.3);
//         }
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
//       return;
//     }

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       if (currentAction.current?.isRunning()) {
//         currentAction.current.fadeOut(0.3);
//       }
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }

//code 15
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';


// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     // camera.position.set(0, 5, 15);
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100,100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null, idle: null });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const { scene } =useThree();
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;
  
//     loader.load('/Walking1.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       console.log("Loaded FBX:", object);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);
     

//       loader.load('/Running1.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         console.log('runner log', runObject);
  
//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           console.log('object idle', idleObject);
//           console.log('test model:', idleObject.animations);
//           console.log(idleObject.animations[0].tracks);
//           console.log(idleObject.animations[0].duration);
//           console.log('new one 1', idleObject.animations[0].tracks.map(t => t.name));
//           console.log('new one 2', idleObject.animations[1].tracks.map(t => t.name));

//           const idle = mixer.clipAction(idleObject.animations[3]);

//           // 👇 Play idle immediately to guarantee it starts BEFORE updateAnimation ever runs
//           idle.reset();
//           idle.enabled = true;
//           idle.setLoop(THREE.LoopRepeat, Infinity);
//           idle.play();
//           currentAction.current = idle;
//           animationStarted.current = true; // prevent auto-start of walk
//           setAnimations({ walk, run, idle });
//           setLoaded(true);
//           console.log('Idle animation assigned:', idle);

//         });
//       });
//       mixerRef.current = mixer;
//     });
  
//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);
  

//   useFrame((_, delta) => {

//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];

//     if (!isRunning && !isWalking) return; // Stop movement if no key is pressed

//     const moveSpeed = isRunning ? 0.075 : 0.05;

//     // Move forward relative to the current rotation
//     if (keys['ArrowUp'] || keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }

//     // Move backward
//     if (keys['ArrowDown'] || keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.5);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }

//     // Turn left/right (not strafe)
//     if (keys['ArrowLeft']) character.rotation.y += 0.03;
//     if (keys['ArrowRight']) character.rotation.y -= 0.03;

//   }

//   function updateAnimation(keys) {
//     // console.log('Current action:', currentAction.current?._clip?.name);

//     if (!mixerRef.current || !animations.walk || !animations.run || !animations.idle) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const noInput = !isRunning && !isWalking;

//     if (noInput) {

//       const idleAction = animations.idle;
//       // const walkAction = animations.walk;
    
//       if (currentAction.current !== idleAction) {
//         if (currentAction.current?.isRunning()) {
//           currentAction.current.fadeOut(0.3);
//         }
//         // walkAction.enabled = false;
//         // walkAction.stop();
    
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
    
//       return;
//     }
    

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       if (currentAction.current?.isRunning()) {
//         currentAction.current.fadeOut(0.3);
//       }

//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
      

//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }


// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }

//code 16
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';


// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     // camera.position.set(0, 5, 15);
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
  
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
  
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100,100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }


// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({ walk: null, run: null, idle: null });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const { scene } =useThree();
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;
  
//     loader.load('/Walking1.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       console.log("Loaded FBX:", object);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);
     

//       loader.load('/Running1.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);
//         console.log('runner log', runObject);
  
//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           console.log('object idle', idleObject);
//           console.log('test model:', idleObject.animations);
//           console.log(idleObject.animations[0].tracks);
//           console.log(idleObject.animations[0].duration);
//           console.log('new one 1', idleObject.animations[0].tracks.map(t => t.name));
//           console.log('new one 2', idleObject.animations[1].tracks.map(t => t.name));

//           const idle = mixer.clipAction(idleObject.animations[3]);

//           // 👇 Play idle immediately to guarantee it starts BEFORE updateAnimation ever runs
//           idle.reset();
//           idle.enabled = true;
//           idle.setLoop(THREE.LoopRepeat, Infinity);
//           idle.play();
//           currentAction.current = idle;
//           animationStarted.current = true; // prevent auto-start of walk
//           setAnimations({ walk, run, idle });
//           setLoaded(true);
//           console.log('Idle animation assigned:', idle);

//         });
//       });
//       mixerRef.current = mixer;
//     });
  
//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);
  

//   useFrame((_, delta) => {

//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];

//     if (!isRunning && !isWalking) return; // Stop movement if no key is pressed

//     const moveSpeed = isRunning ? 0.075 : 0.05;

//     // Move forward relative to the current rotation
//     if (keys['ArrowUp'] || keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }

//     // Move backward
//     if (keys['ArrowDown'] || keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.5);
//       direction.applyEuler(character.rotation);
//       character.position.add(direction.multiplyScalar(moveSpeed));
//     }

//     // Turn left/right (not strafe)
//     if (keys['ArrowLeft']) character.rotation.y += 0.03;
//     if (keys['ArrowRight']) character.rotation.y -= 0.03;

//   }

//   function updateAnimation(keys) {
//     // console.log('Current action:', currentAction.current?._clip?.name);

//     if (!mixerRef.current || !animations.walk || !animations.run || !animations.idle) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const noInput = !isRunning && !isWalking;

//     if (noInput) {

//       const idleAction = animations.idle;
//       // const walkAction = animations.walk;
    
//       if (currentAction.current !== idleAction) {
//         if (currentAction.current?.isRunning()) {
//           currentAction.current.fadeOut(0.3);
//         }
//         // walkAction.enabled = false;
//         // walkAction.stop();
    
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
    
//       return;
//     }
    

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       if (currentAction.current?.isRunning()) {
//         currentAction.current.fadeOut(0.3);
//       }

//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
      

//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }


// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }

//code 17
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);

//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({
//     walk: null,
//     run: null,
//     idle: null,
//     turnLeft: null,
//     turnRight: null,
//   });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const { scene } = useThree();
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     // loader.load('/Walking1.fbx', (object) => {
//     loader.load('/WalkingANARK.fbx', (object) => {
//       console.log(object);
//       // scene.add(object);

//       object.scale.set(0.01, 0.01, 0.01);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       // loader.load('/Running1.fbx', (runObject) => {
//       loader.load('/RunningANARK.fbx', (runObject) => {

//         // const run = mixer.clipAction(runObject.animations[1]);
//         const run = mixer.clipAction(runObject.animations[0]);


//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//         // loader.load('/idleFakeAnimationANARK.fbx', (idleObject) => {
//           console.log('idle object', idleObject);

//           const idle = mixer.clipAction(idleObject.animations[3]);
//           // const idle = mixer.clipAction(idleObject.animations[1]);


//           // loader.load('/LeftTurn.fbx', (leftTurnObj) => {
//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {

//             console.log('leftturnobj', leftTurnObj)
//             // const turnLeft = mixer.clipAction(leftTurnObj.animations[2]);
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             // loader.load('/RightTurn.fbx', (rightTurnObj) => {
//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {  

//               // const turnRight = mixer.clipAction(rightTurnObj.animations[2]);
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);


//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;
//               animationStarted.current = true;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               setLoaded(true);
//               // scene.add(object);
//             });
//           });
//         });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];

//     if (!isRunning && !isWalking) return;

//     // const moveSpeed = isRunning ? 0.045 : 0.009;
//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;
    

//     if (keys['ArrowUp']) {
//       const direction = new THREE.Vector3(0, 0, 0.8);
//       // direction.applyEuler(character.rotation);
//       direction.applyQuaternion(character.quaternion);

//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       // direction.applyEuler(character.rotation);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowDown']) {
//       const direction = new THREE.Vector3(0, 0, -0.8);
//       // direction.applyEuler(character.rotation);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.9);
//       // direction.applyEuler(character.rotation);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }


//     // if (keys['ArrowLeft']) character.rotation.y += 0.03;
//     if (keys['ArrowLeft']) {
//       const angle = 0.03; // radians per frame
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
//       character.quaternion.multiply(q);
//     }
    
//     // if (keys['ArrowRight']) character.rotation.y -= 0.03;
//     if (keys['ArrowRight']) {
//       const angle = 0.03; // radians per frame
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     if (
//       !mixerRef.current ||
//       !animations.walk ||
//       !animations.run ||
//       !animations.idle ||
//       !animations.turnLeft ||
//       !animations.turnRight
//     )
//       return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isRunning && !isWalking) {
//       const turn = keys['ArrowLeft'] ? animations.turnLeft : animations.turnRight;
//       if (currentAction.current !== turn) {
//         currentAction.current?.fadeOut(0.2);
//         turn.reset().fadeIn(0.2).play();
//         currentAction.current = turn;
//       }
//       return;
//     }

//     if (noInput) {
//       const idleAction = animations.idle;
//       if (currentAction.current !== idleAction) {
//         currentAction.current?.fadeOut(0.3);
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
//       return;
//     }

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(0.3);
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }


//code 2
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();

//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     camera.updateProjectionMatrix();
//   }, [camera, size]);

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);

//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function GLBModel({ url, position = [0, 0, 0], scale = 1 }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({
//     walk: null,
//     run: null,
//     idle: null,
//     turnLeft: null,
//     turnRight: null,
//   });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const { scene } = useThree();
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/WalkingANARK.fbx', (object) => {
//       object.scale.set(0.01, 0.01, 0.01);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('/RunningANARK.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);

//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           const idle = mixer.clipAction(idleObject.animations[3]);

//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;
//               animationStarted.current = true;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               setLoaded(true);
//             });
//           });
//         });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];

//     if (!isRunning && !isWalking) return;

//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;

//     if (keys['ArrowUp']) {
//       const direction = new THREE.Vector3(0, 0, 0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowDown']) {
//       const direction = new THREE.Vector3(0, 0, -0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowLeft']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
//       character.quaternion.multiply(q);
//     }

//     if (keys['ArrowRight']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     if (
//       !mixerRef.current ||
//       !animations.walk ||
//       !animations.run ||
//       !animations.idle ||
//       !animations.turnLeft ||
//       !animations.turnRight
//     )
//       return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isRunning && !isWalking) {
//       const turn = keys['ArrowLeft'] ? animations.turnLeft : animations.turnRight;
//       if (currentAction.current !== turn) {
//         currentAction.current?.fadeOut(0.2);
//         turn.reset().fadeIn(0.2).play();
//         currentAction.current = turn;
//       }
//       return;
//     }

//     if (noInput) {
//       const idleAction = animations.idle;
//       if (currentAction.current !== idleAction) {
//         currentAction.current?.fadeOut(0.3);
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
//       return;
//     }

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(0.3);
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />

//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         enableDamping={true}
//         dampingFactor={0.1}
//         rotateSpeed={0.3}
//         enableKeys={false}
//       />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//         <GLBModel url="/testbath.glb" position={[2, 0, -2]} scale={0.5} />
//         <GLBModel url="/livingRoom.glb" position={[-3, 0, 1]} scale={0.3} />
//         <GLBModel url="/KitchenBlend.glb" position={[0, 0, 3]} scale={0.4} />
//       </Physics>
//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }


//code 3
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();
//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     camera.updateProjectionMatrix();
//   }, [camera, size]);
//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
//   useEffect(() => {
//     const handleResize = () => setSize(window.innerWidth, window.innerHeight);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// // ✅ FLEXIBLE GLB MODEL LOADER
// function GLBModel({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
//   const { scene } = useGLTF(url);
//   return (
//     <primitive
//       object={scene}
//       position={position}
//       scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
//       rotation={rotation}
//       castShadow
//       receiveShadow
//     />
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({
//     walk: null,
//     run: null,
//     idle: null,
//     turnLeft: null,
//     turnRight: null,
//   });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/WalkingANARK.fbx', (object) => {
//       object.scale.set(0.03, 0.03, 0.03);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('/RunningANARK.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);

//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           const idle = mixer.clipAction(idleObject.animations[3]);

//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;
//               animationStarted.current = true;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               setLoaded(true);
//             });
//           });
//         });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//     if (!isRunning && !isWalking) return;

//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;

//     if (keys['ArrowUp']) {
//       const direction = new THREE.Vector3(0, 0, 0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowDown']) {
//       const direction = new THREE.Vector3(0, 0, -0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowLeft']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
//       character.quaternion.multiply(q);
//     }

//     if (keys['ArrowRight']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run || !animations.idle || !animations.turnLeft || !animations.turnRight) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isRunning && !isWalking) {
//       const turn = keys['ArrowLeft'] ? animations.turnLeft : animations.turnRight;
//       if (currentAction.current !== turn) {
//         currentAction.current?.fadeOut(0.2);
//         turn.reset().fadeIn(0.2).play();
//         currentAction.current = turn;
//       }
//       return;
//     }

//     if (noInput) {
//       const idleAction = animations.idle;
//       if (currentAction.current !== idleAction) {
//         currentAction.current?.fadeOut(0.3);
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
//       return;
//     }

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(0.3);
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return loaded && characterRef.current ? (
//     <primitive object={characterRef.current} castShadow />
//   ) : null;
// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
//       <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />

//         {/* 👇 Add your GLB models with flexible scale and position */}
//         <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={3.2} rotation={[0, Math.PI / 4, 0]} />
//         <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
//         <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
//       </Physics>

//       <Camera />
//       <ResizeListener />
//     </Canvas>
//   );
// }


//CODE 4  TEST CODE
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function Camera() {
//   const { camera, size } = useThree();
//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.fov = 75;
//     camera.updateProjectionMatrix();
//   }, [camera, size]);
//   return null;
// }

// function FollowCamera({ targetRef }) {
//   const { camera } = useThree();

//   useFrame(() => {
//     if (!targetRef.current) return;

//     const target = targetRef.current;

//     // Position the camera behind and above the character
//     const offset = new THREE.Vector3(0, 5, -10); // [x, y, z] relative to character
//     offset.applyQuaternion(target.quaternion); // rotate offset based on character direction

//     const newCameraPos = target.position.clone().add(offset);
//     camera.position.lerp(newCameraPos, 0.1); // smooth camera movement
//     camera.lookAt(target.position);
//   });

//   return null;
// }


// function ResizeListener() {
//   const { setSize } = useThree();
//   useEffect(() => {
//     const handleResize = () => setSize(window.innerWidth, window.innerHeight);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// // ✅ FLEXIBLE GLB MODEL LOADER
// function GLBModel({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
//   const { scene } = useGLTF(url);
//   return (
//     <primitive
//       object={scene}
//       position={position}
//       scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
//       rotation={rotation}
//       castShadow
//       receiveShadow
//     />
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({
//     walk: null,
//     run: null,
//     idle: null,
//     turnLeft: null,
//     turnRight: null,
//   });
//   const [loaded, setLoaded] = useState(false);
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/WalkingANARK.fbx', (object) => {
//       object.scale.set(0.03, 0.03, 0.03);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('/RunningANARK.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);

//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           const idle = mixer.clipAction(idleObject.animations[3]);

//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;
//               animationStarted.current = true;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               setLoaded(true);
//             });
//           });
//         });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//     if (!isRunning && !isWalking) return;

//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;

//     if (keys['ArrowUp']) {
//       const direction = new THREE.Vector3(0, 0, 0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowDown']) {
//       const direction = new THREE.Vector3(0, 0, -0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowLeft']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
//       character.quaternion.multiply(q);
//     }

//     if (keys['ArrowRight']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     if (!mixerRef.current || !animations.walk || !animations.run || !animations.idle || !animations.turnLeft || !animations.turnRight) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isRunning && !isWalking) {
//       const turn = keys['ArrowLeft'] ? animations.turnLeft : animations.turnRight;
//       if (currentAction.current !== turn) {
//         currentAction.current?.fadeOut(0.2);
//         turn.reset().fadeIn(0.2).play();
//         currentAction.current = turn;
//       }
//       return;
//     }

//     if (noInput) {
//       const idleAction = animations.idle;
//       if (currentAction.current !== idleAction) {
//         currentAction.current?.fadeOut(0.3);
//         idleAction.enabled = true;
//         idleAction.setLoop(THREE.LoopRepeat, Infinity);
//         idleAction.fadeIn(0.3).play();
//         currentAction.current = idleAction;
//       }
//       return;
//     }

//     const newAction = isRunning ? animations.run : animations.walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(0.3);
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   // return loaded && characterRef.current ? (
//   //   <primitive object={characterRef.current} castShadow />
//   // ) : null;
//   return (
//     <>
//       <primitive object={characterRef.current} castShadow />
//       <FollowCamera targetRef={characterRef} />
//     </>
//   );
  

// }

// function SceneWrapper({ keys }) {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       gl.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', onWindowResize);
//     return () => window.removeEventListener('resize', onWindowResize);
//   }, [camera, gl]);

//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
//       <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />

//         {/* 👇 Add your GLB models with flexible scale and position */}
//         <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={3.2} rotation={[0, Math.PI / 4, 0]} />
//         <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
//         <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
//       </Physics>

//       {/* <Camera /> */}
//       <ResizeListener />
//     </Canvas>
//   );
// }

//code 5 works beautiful
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function FollowCamera({ targetRef }) {
//   const { camera } = useThree();

//   useFrame(() => {
//     if (!targetRef.current) return;

//     const target = targetRef.current;
//     const offset = new THREE.Vector3(0, 5, -10);
//     offset.applyQuaternion(target.quaternion);
//     const newCameraPos = target.position.clone().add(offset);
//     camera.position.lerp(newCameraPos, 0.1);
//     camera.lookAt(target.position);
//   });

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
//   useEffect(() => {
//     const handleResize = () => setSize(window.innerWidth, window.innerHeight);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function GLBModel({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
//   const { scene } = useGLTF(url);
//   return (
//     <primitive
//       object={scene}
//       position={position}
//       scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
//       rotation={rotation}
//       castShadow
//       receiveShadow
//     />
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({
//     walk: null,
//     run: null,
//     idle: null,
//     turnLeft: null,
//     turnRight: null,
//   });
//   const [loadedCharacter, setLoadedCharacter] = useState(null);
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/WalkingANARK.fbx', (object) => {
//       object.scale.set(0.025, 0.025, 0.025);
//       object.position.set(30,0.1, 30);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('/RunningANARK.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);

//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           const idle = mixer.clipAction(idleObject.animations[3]);

//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;
//               animationStarted.current = true;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               setLoadedCharacter(object); // Trigger re-render with the loaded character
//             });
//           });
//         });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//     if (!isRunning && !isWalking) return;

//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;

//     if (keys['ArrowUp']) {
//       const direction = new THREE.Vector3(0, 0, 0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowDown']) {
//       const direction = new THREE.Vector3(0, 0, -0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowLeft']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
//       character.quaternion.multiply(q);
//     }

//     if (keys['ArrowRight']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     const { walk, run, idle, turnLeft, turnRight } = animations;
//     if (!mixerRef.current || !walk || !run || !idle || !turnLeft || !turnRight) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isRunning && !isWalking) {
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

//     const newAction = isRunning ? run : walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(0.3);
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return (
//     <>
//       {loadedCharacter && <primitive object={loadedCharacter} castShadow />}
//       <FollowCamera targetRef={characterRef} />
//     </>
//   );
// }

// function SceneWrapper({ keys }) {
//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
//       <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//         <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={2.6} rotation={[0, Math.PI / 4, 0]} />
//         <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
//         <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
//       </Physics>

//       <ResizeListener />
//     </Canvas>
//   );
// }


//code 6
// 'use client';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Physics, usePlane } from '@react-three/cannon';

// function FollowCamera({ targetRef }) {
//   const { camera } = useThree();

//   useFrame(() => {
//     if (!targetRef.current) return;

//     const target = targetRef.current;
//     const offset = new THREE.Vector3(0, 5, -10);
//     offset.applyQuaternion(target.quaternion);
//     const newCameraPos = target.position.clone().add(offset);
//     camera.position.lerp(newCameraPos, 0.1);
//     camera.lookAt(target.position);
//   });

//   return null;
// }

// function ResizeListener() {
//   const { setSize } = useThree();
//   useEffect(() => {
//     const handleResize = () => setSize(window.innerWidth, window.innerHeight);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [setSize]);
//   return null;
// }

// function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function GLBModel({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
//   const { scene } = useGLTF(url);
//   return (
//     <primitive
//       object={scene}
//       position={position}
//       scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
//       rotation={rotation}
//       castShadow
//       receiveShadow
//     />
//   );
// }

// function Character({ keys }) {
//   const characterRef = useRef();
//   const mixerRef = useRef();
//   const [animations, setAnimations] = useState({
//     walk: null,
//     run: null,
//     idle: null,
//     turnLeft: null,
//     turnRight: null,
//   });
//   const [loadedCharacter, setLoadedCharacter] = useState(null);
//   const currentAction = useRef(null);
//   const animationStarted = useRef(false);

//   useEffect(() => {
//     const loader = new FBXLoader();
//     let mixer;

//     loader.load('/WalkingANARK.fbx', (object) => {
//       object.scale.set(0.025, 0.025, 0.025);
//       object.position.set(30,0.1, 30);
//       characterRef.current = object;
//       mixer = new THREE.AnimationMixer(object);
//       const walk = mixer.clipAction(object.animations[0]);

//       loader.load('/RunningANARK.fbx', (runObject) => {
//         const run = mixer.clipAction(runObject.animations[0]);

//         loader.load('/idleFakeAnimation.fbx', (idleObject) => {
//           const idle = mixer.clipAction(idleObject.animations[3]);

//           loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
//             const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

//             loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
//               const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

//               idle.reset();
//               idle.enabled = true;
//               idle.setLoop(THREE.LoopRepeat, Infinity);
//               idle.play();
//               currentAction.current = idle;
//               animationStarted.current = true;

//               setAnimations({ walk, run, idle, turnLeft, turnRight });
//               setLoadedCharacter(object); // Trigger re-render with the loaded character
//             });
//           });
//         });
//       });

//       mixerRef.current = mixer;
//     });

//     return () => {
//       mixer?.stopAllAction();
//     };
//   }, []);

//   useFrame((_, delta) => {
//     if (mixerRef.current) mixerRef.current.update(delta);
//     if (characterRef.current) {
//       handleMovement(characterRef.current, keys);
//       updateAnimation(keys);
//     }
//   });

//   function handleMovement(character, keys) {
//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//     if (!isRunning && !isWalking) return;

//     const walkSpeed = 0.05;
//     const runSpeed = 0.08;

//     if (keys['ArrowUp']) {
//       const direction = new THREE.Vector3(0, 0, 0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['r']) {
//       const direction = new THREE.Vector3(0, 0, 0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowDown']) {
//       const direction = new THREE.Vector3(0, 0, -0.8);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(walkSpeed));
//     }

//     if (keys['b']) {
//       const direction = new THREE.Vector3(0, 0, -0.9);
//       direction.applyQuaternion(character.quaternion);
//       character.position.add(direction.multiplyScalar(runSpeed));
//     }

//     if (keys['ArrowLeft']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
//       character.quaternion.multiply(q);
//     }

//     if (keys['ArrowRight']) {
//       const angle = 0.03;
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
//       character.quaternion.multiply(q);
//     }
//   }

//   function updateAnimation(keys) {
//     const { walk, run, idle, turnLeft, turnRight } = animations;
//     if (!mixerRef.current || !walk || !run || !idle || !turnLeft || !turnRight) return;

//     const isRunning = keys['r'] || keys['b'];
//     const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//     const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//     const noInput = !isRunning && !isWalking && !isTurning;

//     if (isTurning && !isRunning && !isWalking) {
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

//     const newAction = isRunning ? run : walk;
//     const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

//     if (currentAction.current !== newAction) {
//       currentAction.current?.fadeOut(0.3);
//       newAction.enabled = true;
//       newAction.setLoop(THREE.LoopRepeat, Infinity);
//       newAction.fadeIn(0.3).play();
//       currentAction.current = newAction;
//     }

//     if (currentAction.current && currentAction.current.timeScale !== direction) {
//       currentAction.current.timeScale = direction;
//     }

//     animationStarted.current = true;
//   }

//   return (
//     <>
//       {loadedCharacter && <primitive object={loadedCharacter} castShadow />}
//       <FollowCamera targetRef={characterRef} />
//     </>
//   );
// }

// function SceneWrapper({ keys }) {
//   return <Character keys={keys} />;
// }

// export default function ThreeScene() {
//   const [keys, setKeys] = useState({});

//   useEffect(() => {
//     const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
//     const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

// //   return (
// //     <Canvas
// //       shadows
// //       camera={{ position: [0, 5, 15], fov: 75 }}
// //       style={{ width: '100vw', height: '100vh' }}
// //     >
// //       <ambientLight intensity={0.4} />
// //       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
// //       <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

// //       <Physics>
// //         <SceneWrapper keys={keys} />
// //         <GroundPlane />
// //         <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={2.6} rotation={[0, Math.PI / 4, 0]} />
// //         <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
// //         <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
// //       </Physics>

// //       <ResizeListener />
// //     </Canvas>
    
// //   );
// // }
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

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//         <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={2.6} rotation={[0, Math.PI / 4, 0]} />
//         <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
//         <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
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
//   </>
// );
// }


//code 7 toggle camera
'use client';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Physics, usePlane } from '@react-three/cannon';

function FollowCamera({ targetRef }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!targetRef.current) return;

    const target = targetRef.current;
    const offset = new THREE.Vector3(0, 5, -10);
    offset.applyQuaternion(target.quaternion);
    const newCameraPos = target.position.clone().add(offset);
    camera.position.lerp(newCameraPos, 0.1);
    camera.lookAt(target.position);
  });

  return null;
}

function ResizeListener() {
  const { setSize } = useThree();
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSize]);
  return null;
}

function GroundPlane() {
  const texture = useLoader(THREE.TextureLoader, '/wf.jpg');
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.1, 0],
    material: { restitution: 0.8 }
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

function GLBModel({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      position={position}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}

function Character({ keys, followEnabled }) {
  const characterRef = useRef();
  const mixerRef = useRef();
  const [animations, setAnimations] = useState({
    walk: null,
    run: null,
    idle: null,
    turnLeft: null,
    turnRight: null,
  });
  const [loadedCharacter, setLoadedCharacter] = useState(null);
  const currentAction = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const loader = new FBXLoader();
    let mixer;

    loader.load('/WalkingANARK.fbx', (object) => {
      object.scale.set(0.025, 0.025, 0.025);
      object.position.set(30,0.1, 30);
      characterRef.current = object;
      mixer = new THREE.AnimationMixer(object);
      const walk = mixer.clipAction(object.animations[0]);

      loader.load('/RunningANARK.fbx', (runObject) => {
        const run = mixer.clipAction(runObject.animations[0]);

        loader.load('/idleFakeAnimation.fbx', (idleObject) => {
          const idle = mixer.clipAction(idleObject.animations[3]);

          loader.load('/LeftTurnANARK.fbx', (leftTurnObj) => {
            const turnLeft = mixer.clipAction(leftTurnObj.animations[0]);

            loader.load('/RightTurnANARK1.fbx', (rightTurnObj) => {
              const turnRight = mixer.clipAction(rightTurnObj.animations[0]);

              idle.reset();
              idle.enabled = true;
              idle.setLoop(THREE.LoopRepeat, Infinity);
              idle.play();
              currentAction.current = idle;
              animationStarted.current = true;

              setAnimations({ walk, run, idle, turnLeft, turnRight });
              setLoadedCharacter(object); // Trigger re-render with the loaded character
            });
          });
        });
      });

      mixerRef.current = mixer;
    });

    return () => {
      mixer?.stopAllAction();
    };
  }, []);

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
    if (characterRef.current) {
      handleMovement(characterRef.current, keys);
      updateAnimation(keys);
    }
  });

  function handleMovement(character, keys) {
    const isRunning = keys['r'] || keys['b'];
    const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
    if (!isRunning && !isWalking) return;

    const walkSpeed = 0.05;
    const runSpeed = 0.08;

    if (keys['ArrowUp']) {
      const direction = new THREE.Vector3(0, 0, 0.8);
      direction.applyQuaternion(character.quaternion);
      character.position.add(direction.multiplyScalar(walkSpeed));
    }

    if (keys['r']) {
      const direction = new THREE.Vector3(0, 0, 0.9);
      direction.applyQuaternion(character.quaternion);
      character.position.add(direction.multiplyScalar(runSpeed));
    }

    if (keys['ArrowDown']) {
      const direction = new THREE.Vector3(0, 0, -0.8);
      direction.applyQuaternion(character.quaternion);
      character.position.add(direction.multiplyScalar(walkSpeed));
    }

    if (keys['b']) {
      const direction = new THREE.Vector3(0, 0, -0.9);
      direction.applyQuaternion(character.quaternion);
      character.position.add(direction.multiplyScalar(runSpeed));
    }

    if (keys['ArrowLeft']) {
      const angle = 0.03;
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
      character.quaternion.multiply(q);
    }

    if (keys['ArrowRight']) {
      const angle = 0.03;
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), angle);
      character.quaternion.multiply(q);
    }
  }

  function updateAnimation(keys) {
    const { walk, run, idle, turnLeft, turnRight } = animations;
    if (!mixerRef.current || !walk || !run || !idle || !turnLeft || !turnRight) return;

    const isRunning = keys['r'] || keys['b'];
    const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
    const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
    const noInput = !isRunning && !isWalking && !isTurning;

    if (isTurning && !isRunning && !isWalking) {
      const turn = keys['ArrowLeft'] ? turnLeft : turnRight;
      if (currentAction.current !== turn) {
        currentAction.current?.fadeOut(0.2);
        turn.reset().fadeIn(0.2).play();
        currentAction.current = turn;
      }
      return;
    }

    if (noInput) {
      if (currentAction.current !== idle) {
        currentAction.current?.fadeOut(0.3);
        idle.enabled = true;
        idle.setLoop(THREE.LoopRepeat, Infinity);
        idle.fadeIn(0.3).play();
        currentAction.current = idle;
      }
      return;
    }

    const newAction = isRunning ? run : walk;
    const direction = keys['ArrowDown'] || keys['b'] ? -1 : 1;

    if (currentAction.current !== newAction) {
      currentAction.current?.fadeOut(0.3);
      newAction.enabled = true;
      newAction.setLoop(THREE.LoopRepeat, Infinity);
      newAction.fadeIn(0.3).play();
      currentAction.current = newAction;
    }

    if (currentAction.current && currentAction.current.timeScale !== direction) {
      currentAction.current.timeScale = direction;
    }

    animationStarted.current = true;
  }

  return (
    <>
      {loadedCharacter && <primitive object={loadedCharacter} castShadow />}
      {followEnabled && <FollowCamera targetRef={characterRef} />}
    </>
  );
}

function SceneWrapper({ keys, followEnabled }) {
  return <Character keys={keys} followEnabled={followEnabled} />;
}

export default function ThreeScene() {
  const [keys, setKeys] = useState({});
  const [followEnabled, setFollowEnabled] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
    const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 5, 15], fov: 75 }}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
//       <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

//       <Physics>
//         <SceneWrapper keys={keys} />
//         <GroundPlane />
//         <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={2.6} rotation={[0, Math.PI / 4, 0]} />
//         <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
//         <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
//       </Physics>

//       <ResizeListener />
//     </Canvas>
    
//   );
// }
return (
  <>
    <Canvas
      shadows
      camera={{ position: [0, 5, 15], fov: 75 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
      <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

      <Physics>
        <SceneWrapper keys={keys} followEnabled={followEnabled} />
        <GroundPlane />
        <GLBModel url="/testbath.glb" position={[-15, 0, -15]} scale={2.6} rotation={[0, Math.PI / 4, 0]} />
        <GLBModel url="/TKB.glb" position={[15, 0, 15]} scale={2.3} rotation={[0, 0, 0]} />
        <GLBModel url="/livingRoom.glb" position={[0, 0, 3]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
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

    <div className="fixed bottom-4 right-4 z-50 select-none">
      <button
        onTouchStart={() => setKeys((k) => ({ ...k, r: true }))}
        onTouchEnd={() => setKeys((k) => ({ ...k, r: false }))}
        className="w-20 h-20 rounded-full bg-red-600 text-white text-2xl font-bold shadow"
      >R</button>
    </div>
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setFollowEnabled((prev) => !prev)}
        className="px-4 py-2 rounded bg-blue-600 text-white font-bold shadow"
      >
        {followEnabled ? 'Free Orbit' : 'Follow Cam'}
      </button>
    </div>
  </>
);
}





