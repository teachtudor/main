// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
// import { createCamera } from "./camera";
// import { createRoad } from "./road";
// import { createSky } from "./sky";
// import { addLights } from "./lights";
// import { setupControls, updateCarMovement } from "./controls";
// import { createCar } from "./car";

// export default function RoadScene() {
//   const canvasRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const sceneRef = useRef(null);

//   const [car, setCar] = useState(null);
//   const [carState, setCarState] = useState(null);
//   const [isClient, setIsClient] = useState(false);

//   // Key state tracking
//   const keys = useRef({
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//   });

//   // Client-side check
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsClient(true);
//     }
//   }, []);

//   // ✅ Call `useGLTF` in the main component body (NOT inside useEffect)
//   const { scene: carModel } = isClient ? useGLTF("/future_car.glb") : { scene: null };

//   useEffect(() => {
//     if (!canvasRef.current) return;
  
//     // Initialize scene, camera, and renderer
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
  
//     const newCamera = createCamera();
//     cameraRef.current = newCamera;
  
//     const newRenderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current, 
//       antialias: true 
//     });
//     newRenderer.setSize(window.innerWidth, window.innerHeight);
//     newRenderer.setPixelRatio(window.devicePixelRatio);
//     rendererRef.current = newRenderer;
  
//     console.log("Renderer, camera, and scene initialized"); // Debugging
  
//     // Add sky, road, and lights
//     try {
//       createSky(scene);
//       createRoad(scene);
//       addLights(scene);
//       console.log("Sky, road, and lights added to scene"); // Debugging
//     } catch (err) {
//       console.error("Error setting up scene:", err);
//     }
  
//     // Set up controls
//     setupControls(keys.current);
  
//     // Add car if model is loaded
//     if (carModel) {
//       try {
//         const { car, carState } = createCar({ scene, model: carModel });
//         if (car && carState) {
//           setCar(car);
//           setCarState(carState);
//           console.log("Car added to scene:", car); // Debugging
//         } else {
//           console.error("Car or carState is null after creation");
//         }
//       } catch (err) {
//         console.error("Error creating car:", err);
//       }
//     } else {
//       console.warn("Car model not loaded yet"); // Debugging
//     }
  
//     // Resize handler
//     const handleResize = () => {
//       newRenderer.setSize(window.innerWidth, window.innerHeight);
//       newCamera.aspect = window.innerWidth / window.innerHeight;
//       newCamera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);
  
//     // Animation loop
//     const animateScene = () => {
//       if (rendererRef.current && cameraRef.current && sceneRef.current) {
//         requestAnimationFrame(animateScene);
  
//         // Update car movement if car and carState are valid
//         if (car && carState) {
//           updateCarMovement(car, carState, keys.current);
//         }
  
//         // Render the scene
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       }
//     };
  
//     animateScene(); // Start animation loop
  
//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       newRenderer.dispose();
  
//       // Clean up scene objects
//       scene.traverse((child) => {
//         if (child.isMesh) {
//           child.geometry.dispose();
//           if (child.material) {
//             if (Array.isArray(child.material)) {
//               child.material.forEach((material) => material.dispose());
//             } else {
//               child.material.dispose();
//             }
//           }
//         }
//       });
  
//       console.log("Scene cleaned up"); // Debugging
//     };
//   }, [carModel]);

//   // Keydown and Keyup handlers
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//           keys.current.forward = true;
//           break;
//         case "ArrowDown":
//           keys.current.backward = true;
//           break;
//         case "ArrowLeft":
//           keys.current.left = true;
//           break;
//         case "ArrowRight":
//           keys.current.right = true;
//           break;
//       }
//     };

//     const handleKeyUp = (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//           keys.current.forward = false;
//           break;
//         case "ArrowDown":
//           keys.current.backward = false;
//           break;
//         case "ArrowLeft":
//           keys.current.left = false;
//           break;
//         case "ArrowRight":
//           keys.current.right = false;
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", display: "block" }} />;
// }

//code 2
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import Animation from './animation';
// import Camera from './camera';
// import Car from './car';
// import Controls from './controls';
// import Lights from './lights';
// import Road from './road';
// import SkyComponent from './sky';
// import Textures from './textures';

// export default function Page() {
//   const canvasRef = useRef();

//   useEffect(() => {
//     if (canvasRef.current) {
//       // Avoid hydration issues by making sure canvas is rendered only on the client
//       console.log('Canvas loaded on the client');
//     }
//   }, []);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }} ref={canvasRef}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <Lights />
//         <Camera />
//         <Car />
//         <Controls />
//         <Road />
//         <SkyComponent />
//         <Textures />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

//code 2.5
// 'use client';

// import React, { useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
// import * as THREE from 'three';

// function Road() {
//   return (
//     <>
//       {/* Asphalt road */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//         <planeGeometry args={[12, 10000]} /> {/* Wide road */}
//         <meshStandardMaterial color="gray" />
//       </mesh>

//       {/* Dashed lane stripes */}
//       {Array.from({ length: 200 }).map((_, i) => (
//         <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, i * -50]}>
//           <planeGeometry args={[0.5, 10]} />
//           <meshStandardMaterial color="white" />
//         </mesh>
//       ))}

//       {/* Infinite Green Grass (left & right) */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-10, -0.01, 0]}>
//         <planeGeometry args={[1000, 10000]} />
//         <meshStandardMaterial color="green" />
//       </mesh>
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[10, -0.01, 0]}>
//         <planeGeometry args={[1000, 10000]} />
//         <meshStandardMaterial color="green" />
//       </mesh>
//     </>
//   );
// }

// function Car({ position, setPosition }) {
//   const carRef = useRef();

//   useFrame(() => {
//     carRef.current.position.set(position.x, 0.5, position.z);
//   });

//   return (
//     <mesh ref={carRef} position={[0, 0.5, 0]}>
//       <boxGeometry args={[1, 1, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Camera({ position }) {
//   const cameraRef = useRef();

//   useFrame(() => {
//     cameraRef.current.position.set(position.x, 5, position.z + 10);
//     cameraRef.current.lookAt(position.x, 0, position.z);
//   });

//   return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
// }

// export default function Page() {
//   const [position, setPosition] = useState({ x: 0, z: 0 });

//   const handleKeyDown = (event) => {
//     setPosition((prev) => {
//       let newX = prev.x;
//       let newZ = prev.z;

//       if (event.key === 'ArrowUp') newZ -= 1; // Forward
//       if (event.key === 'ArrowDown') newZ += 1; // Backward
//       if (event.key === 'ArrowLeft' && newX > -4.5) newX -= 0.5; // Left (stay on road)
//       if (event.key === 'ArrowRight' && newX < 4.5) newX += 0.5; // Right (stay on road)

//       return { x: newX, z: newZ };
//     });
//   };

//   return (
//     <div tabIndex={0} onKeyDown={handleKeyDown} style={{ width: '100vw', height: '100vh', outline: 'none' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />
//         <Road />
//         <Car position={position} setPosition={setPosition} />
//         <Camera position={position} />
//       </Canvas>
//     </div>
//   );
// }


//code 3 works partially except the stripes
// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
// import * as THREE from 'three';
// import { InstanceMesh } from '@react-three/fiber';

// const roadLength = 1400;  // Length of the road
// const stripeSpacing = 35;   // Distance between each stripe
// const stripeLength = 10;    // Length of the stripes
// const laneCount = 3;        // Number of lanes
// const stripeWidth = 0.5;
// const numSegments = 10; // Number of segments to recycle
// const segmentLength = 500; // Length of each road segment
// const grassWidth = 1000;

// function Road({carPosition}) {

//   const [isClient, setIsClient] = useState(false);
//   const roadSegments = useRef([]);
//   const grassLeft = useRef([]);
//   const grassRight = useRef([]);
//   const stripeSegments = useRef([]); // New ref for stripes

//   // Create the road segments initially and store them in the array
// useEffect(() => {
//   const initialSegments = [];
//   for (let i = 0; i < 5; i++) { // Create 5 segments initially
//     const segment = new THREE.Mesh(
//       new THREE.PlaneGeometry(24, roadLength),
//       new THREE.MeshStandardMaterial({ color: 'gray' })
//     );
//     segment.position.set(0, 0.1, i * segmentLength);
//     initialSegments.push(segment);
//   }
//   roadSegments.current = initialSegments;

//   const initialGrassLeft = [];
//   const initialGrassRight = [];
    
//     for (let i = 0; i < numSegments; i++) {
//       const leftGrass = new THREE.Mesh(
//         new THREE.PlaneGeometry(grassWidth, 1000),
//         new THREE.MeshStandardMaterial({ color: 'green' })
//       );
//       leftGrass.position.set(-10, -0.01, i * segmentLength);
//       initialGrassLeft.push(leftGrass);

//       const rightGrass = new THREE.Mesh(
//         new THREE.PlaneGeometry(grassWidth, 1000),
//         new THREE.MeshStandardMaterial({ color: 'green' })
//       );
//       rightGrass.position.set(10, -0.01, i * segmentLength);
//       initialGrassRight.push(rightGrass);
//     }
//     grassLeft.current = initialGrassLeft;
//     grassRight.current = initialGrassRight;
// }, []);

//   useEffect(() => {
//     // Initialize segments
//     roadSegments.current = Array.from({ length: numSegments }).map((_, i) => ({
//       id: i,
//       position: new THREE.Vector3(0, 0.1, -i * segmentLength),
//     }));
//   }, []);

//   useFrame(() => {
//     if(!isClient) return;
//     roadSegments.current.forEach((segment) => {
//       // Move road segments forward as car moves
//       segment.position.z += 12;

//       // When segment moves past a threshold, reposition it at the back
//       if (segment.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         segment.position.z = lastSegment.position.z - segmentLength;
//         roadSegments.current.push(roadSegments.current.shift()); // Recycle segment
//       }
//     });

//      // Move grass segments forward
//      grassLeft.current.forEach((grass) => {
//       grass.position.z += 12;
//       if (grass.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         grass.position.z = lastSegment.position.z + segmentLength;
//       }
//     });

//     grassRight.current.forEach((grass) => {
//       grass.position.z += 12;
//       if (grass.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         grass.position.z = lastSegment.position.z + segmentLength;
//       }
//     });

    
//   });
 
//   // Ensure it's only rendered on the client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null; // Or a loading spinner
//   }

//   return (
//     <>
//       {/* Asphalt road */}
//       {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0] }>
//         <planeGeometry args={[24, roadLength]} /> Wide road
//         <meshStandardMaterial color="gray" polygonOffset polygonOffsetFactor={-1} />
//       </mesh> */}

//       {roadSegments.current.map((segment) => (
//               <mesh
//                 key={segment.id}
//                 position={segment.position.toArray()}
//                 rotation={[-Math.PI / 2, 0, 0]}
//               >
//                 <planeGeometry args={[24, segmentLength]} />
//                 <meshStandardMaterial color="gray" polygonOffset polygonOffsetFactor={-1} />
//               </mesh>
//             ))}

      
//        {/* Multiple Dashed Lane Stripes */}
//        {[-6, 0, 6].map((xPos) => ( // Positions for lane markers
//         // Array.from({ length:200 }).map((_, i) => (
//         Array.from({ length: Math.ceil(roadLength / stripeSpacing) }).map((_, i) => (
//           <mesh key={`${xPos}-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[xPos, 0.45, i * -35]}>
//             <planeGeometry args={[0.5, 10]} />
//             <meshStandardMaterial color="white" />
//           </mesh>
//         ))
//       ))}

     
//       {/* Dashed lane stripes
//       {Array.from({ length: 200 }).map((_, i) => (
//         <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.2, i * -35]}>
//           <planeGeometry args={[0.5, 10]} />
//           <meshStandardMaterial color="white" />
//         </mesh>
//       ))} */}

//       {/* Infinite Green Grass (left & right) */}
//       {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-10, -0.01, 0]}>
//         <planeGeometry args={[1000, roadLength]} />
//         <meshStandardMaterial color="green" />
//       </mesh>
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[10, -0.01, 0]}>
//         <planeGeometry args={[1000, roadLength]} />
//         <meshStandardMaterial color="green" />
//       </mesh> */}
      
//       {/* Infinite Green Grass (left & right) */}
//       {grassLeft.current.map((grass, index) => (
//         <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={grass.position.toArray()}>
//           <planeGeometry args={[grassWidth, 8000]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
//       ))}

//       {grassRight.current.map((grass, index) => (
//         <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={grass.position.toArray()}>
//           <planeGeometry args={[grassWidth, 8000]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
//       ))}
       

//     </>
//   );
// }

// function Car({ position }) {
//   const carRef = useRef();

//   useFrame(() => {
//     carRef.current.position.set(position.x, 1.1, position.z);
//   });

//   return (
//     <mesh ref={carRef} position={[0, 0.5, 0]}>
//       <boxGeometry args={[1, 1, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Camera({ position }) {
//   const cameraRef = useRef();

//   useFrame(() => {
//     cameraRef.current.position.set(position.x, 5, position.z + 15);
//     cameraRef.current.lookAt(position.x, 0, position.z);
//   });

//   return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
// }

// // NEW: CarController component to handle movement inside Canvas
// function CarController({ setPosition }) {
//   const keys = useRef({});

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       keys.current[event.key] = true;
//     };

//     const handleKeyUp = (event) => {
//       keys.current[event.key] = false;
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     setPosition((prev) => {
//       let newX = prev.x;
//       let newZ = prev.z;

//       if (keys.current['ArrowUp']) newZ -= 12;// Forward
//       if (keys.current['ArrowDown']) newZ += 0.5; // Backward
//       if (keys.current['ArrowLeft'] && newX > -10.5) newX -= 0.3; // Left (stay on road)
//       if (keys.current['ArrowRight'] && newX < 10.5) newX += 0.3; // Right (stay on road)

//       return { x: newX, z: newZ };
//     });
//   });

//   return null; // This component doesn't render anything, just updates state
// }

// export default function Page() {
//   const [position, setPosition] = useState({ x: 0, z: 0 });

//   return (
//     <div tabIndex={0} style={{ width: '100vw', height: '100vh', outline: 'none' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />
//         <Road carPosition ={position} />
//         <Car position={position} />
//         <Camera position={position} />
//         <CarController setPosition={setPosition} /> {/* Moved movement logic inside Canvas */}
//       </Canvas>
//     </div>
//   );
// }


//CODE 4 same as 3 safekeeping

'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { InstanceMesh } from '@react-three/fiber';

const roadLength = 1400;  // Length of the road
const stripeSpacing = 35;   // Distance between each stripe
const stripeLength = 10;    // Length of the stripes
const laneCount = 3;        // Number of lanes
const stripeWidth = 0.5;
const numSegments = 10; // Number of segments to recycle
const segmentLength = 500; // Length of each road segment
const grassWidth = 1000;

function Road({carPosition}) {

  const [isClient, setIsClient] = useState(false);
  const roadSegments = useRef([]);
  const grassLeft = useRef([]);
  const grassRight = useRef([]);
  const stripeSegments = useRef([]); // New ref for stripes

  // Create the road segments initially and store them in the array
useEffect(() => {
  const initialSegments = [];
  for (let i = 0; i < 5; i++) { // Create 5 segments initially
    const segment = new THREE.Mesh(
      new THREE.PlaneGeometry(24, roadLength),
      new THREE.MeshStandardMaterial({ color: 'gray' })
    );
    segment.position.set(0, 0.1, i * segmentLength);
    initialSegments.push(segment);
  }
  roadSegments.current = initialSegments;

  const initialGrassLeft = [];
  const initialGrassRight = [];
    
    for (let i = 0; i < numSegments; i++) {
      const leftGrass = new THREE.Mesh(
        new THREE.PlaneGeometry(grassWidth, 1000),
        new THREE.MeshStandardMaterial({ color: 'green' })
      );
      leftGrass.position.set(-10, -0.01, i * segmentLength);
      initialGrassLeft.push(leftGrass);

      const rightGrass = new THREE.Mesh(
        new THREE.PlaneGeometry(grassWidth, 1000),
        new THREE.MeshStandardMaterial({ color: 'green' })
      );
      rightGrass.position.set(10, -0.01, i * segmentLength);
      initialGrassRight.push(rightGrass);
    }
    grassLeft.current = initialGrassLeft;
    grassRight.current = initialGrassRight;
}, []);

  useEffect(() => {
    // Initialize segments
    roadSegments.current = Array.from({ length: numSegments }).map((_, i) => ({
      id: i,
      position: new THREE.Vector3(0, 0.1, -i * segmentLength),
    }));
  }, []);

  useFrame(() => {
    if(!isClient) return;
    roadSegments.current.forEach((segment) => {
      // Move road segments forward as car moves
      segment.position.z += 12;

      // When segment moves past a threshold, reposition it at the back
      if (segment.position.z > carPosition.z + segmentLength) {
        const lastSegment = roadSegments.current[roadSegments.current.length - 1];
        segment.position.z = lastSegment.position.z - segmentLength;
        roadSegments.current.push(roadSegments.current.shift()); // Recycle segment
      }
    });

     // Move grass segments forward
     grassLeft.current.forEach((grass) => {
      grass.position.z += 12;
      if (grass.position.z > carPosition.z + segmentLength) {
        const lastSegment = roadSegments.current[roadSegments.current.length - 1];
        grass.position.z = lastSegment.position.z + segmentLength;
      }
    });

    grassRight.current.forEach((grass) => {
      grass.position.z += 12;
      if (grass.position.z > carPosition.z + segmentLength) {
        const lastSegment = roadSegments.current[roadSegments.current.length - 1];
        grass.position.z = lastSegment.position.z + segmentLength;
      }
    });

    
  });
 
  // Ensure it's only rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <>
      {roadSegments.current.map((segment) => (
              <mesh
                key={segment.id}
                position={segment.position.toArray()}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <planeGeometry args={[24, segmentLength]} />
                <meshStandardMaterial color="gray" polygonOffset polygonOffsetFactor={-1} />
              </mesh>
            ))}

      
       {/* Multiple Dashed Lane Stripes */}
       {[-6, 0, 6].map((xPos) => ( // Positions for lane markers
        // Array.from({ length:200 }).map((_, i) => (
        Array.from({ length: Math.ceil(roadLength / stripeSpacing) }).map((_, i) => (
          <mesh key={`${xPos}-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[xPos, 0.45, i * -35]}>
            <planeGeometry args={[0.5, 10]} />
            <meshStandardMaterial color="white" />
          </mesh>
        ))
      ))}

      {/* Infinite Green Grass (left & right) */}
      {grassLeft.current.map((grass, index) => (
        <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={grass.position.toArray()}>
          <planeGeometry args={[grassWidth, 8000]} />
          <meshStandardMaterial color="green" />
        </mesh>
      ))}

      {grassRight.current.map((grass, index) => (
        <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={grass.position.toArray()}>
          <planeGeometry args={[grassWidth, 8000]} />
          <meshStandardMaterial color="green" />
        </mesh>
      ))}
    </>
  );
}

function Car({ position }) {
  const carRef = useRef();

  useFrame(() => {
    carRef.current.position.set(position.x, 1.1, position.z);
  });

  return (
    <mesh ref={carRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function Camera({ position }) {
  const cameraRef = useRef();

  useFrame(() => {
    cameraRef.current.position.set(position.x, 5, position.z + 15);
    cameraRef.current.lookAt(position.x, 0, position.z);
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
}

// NEW: CarController component to handle movement inside Canvas
function CarController({ setPosition }) {
  const keys = useRef({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      keys.current[event.key] = true;
    };

    const handleKeyUp = (event) => {
      keys.current[event.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    setPosition((prev) => {
      let newX = prev.x;
      let newZ = prev.z;

      if (keys.current['ArrowUp']) newZ -= 12;// Forward
      if (keys.current['ArrowDown']) newZ += 0.5; // Backward
      if (keys.current['ArrowLeft'] && newX > -10.5) newX -= 0.3; // Left (stay on road)
      if (keys.current['ArrowRight'] && newX < 10.5) newX += 0.3; // Right (stay on road)

      return { x: newX, z: newZ };
    });
  });

  return null; // This component doesn't render anything, just updates state
}

export default function Page() {
  const [position, setPosition] = useState({ x: 0, z: 0 });

  return (
    <div tabIndex={0} style={{ width: '100vw', height: '100vh', outline: 'none' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Road carPosition ={position} />
        <Car position={position} />
        <Camera position={position} />
        <CarController setPosition={setPosition} /> {/* Moved movement logic inside Canvas */}
      </Canvas>
    </div>
  );
}


//code 5
// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
// import * as THREE from 'three';
// import { InstanceMesh } from '@react-three/fiber';

// const roadLength = 1400;  // Length of the road
// const stripeSpacing = 35;   // Distance between each stripe
// const stripeLength = 10;    // Length of the stripes
// const laneCount = 3;        // Number of lanes
// const stripeWidth = 0.5;
// const numSegments = 10; // Number of segments to recycle
// const segmentLength = 500; // Length of each road segment
// const grassWidth = 1000;

// function Road({carPosition}) {

//   const [isClient, setIsClient] = useState(false);
//   const roadSegments = useRef([]);
//   const grassLeft = useRef([]);
//   const grassRight = useRef([]);
//   const stripeSegments = useRef([]); // New ref for stripes

//   // Create the road segments initially and store them in the array
// useEffect(() => {
//   const initialSegments = [];
//   for (let i = 0; i < 5; i++) { // Create 5 segments initially
//     const segment = new THREE.Mesh(
//       new THREE.PlaneGeometry(24, roadLength),
//       new THREE.MeshStandardMaterial({ color: 'gray' })
//     );
//     segment.position.set(0, 0.1, i * segmentLength);
//     initialSegments.push(segment);
//   }
//   roadSegments.current = initialSegments;

//   const initialGrassLeft = [];
//   const initialGrassRight = [];
    
//     for (let i = 0; i < numSegments; i++) {
//       const leftGrass = new THREE.Mesh(
//         new THREE.PlaneGeometry(grassWidth, 1000),
//         new THREE.MeshStandardMaterial({ color: 'green' })
//       );
//       leftGrass.position.set(-10, -0.01, i * segmentLength);
//       initialGrassLeft.push(leftGrass);

//       const rightGrass = new THREE.Mesh(
//         new THREE.PlaneGeometry(grassWidth, 1000),
//         new THREE.MeshStandardMaterial({ color: 'green' })
//       );
//       rightGrass.position.set(10, -0.01, i * segmentLength);
//       initialGrassRight.push(rightGrass);
//     }
//     grassLeft.current = initialGrassLeft;
//     grassRight.current = initialGrassRight;
// }, []);

//   useEffect(() => {
//     // Initialize segments
//     roadSegments.current = Array.from({ length: numSegments }).map((_, i) => ({
//       id: i,
//       position: new THREE.Vector3(0, 0.1, -i * segmentLength),
//     }));
//   }, []);

//   useFrame(() => {
//     if(!isClient) return;
//     roadSegments.current.forEach((segment) => {
//       // Move road segments forward as car moves
//       segment.position.z += 12;

//       // When segment moves past a threshold, reposition it at the back
//       if (segment.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         segment.position.z = lastSegment.position.z - segmentLength;
//         roadSegments.current.push(roadSegments.current.shift()); // Recycle segment
//       }
//     });

//      // Move grass segments forward
//      grassLeft.current.forEach((grass) => {
//       grass.position.z += 12;
//       if (grass.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         grass.position.z = lastSegment.position.z + segmentLength;
//       }
//     });

//     grassRight.current.forEach((grass) => {
//       grass.position.z += 12;
//       if (grass.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         grass.position.z = lastSegment.position.z + segmentLength;
//       }
//     });

    
//   });
 
//   // Ensure it's only rendered on the client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null; // Or a loading spinner
//   }

//   return (
//     <>
//       {roadSegments.current.map((segment) => (
//               <mesh
//                 key={segment.id}
//                 position={segment.position.toArray()}
//                 rotation={[-Math.PI / 2, 0, 0]}
//               >
//                 <planeGeometry args={[24, segmentLength]} />
//                 <meshStandardMaterial color="gray" polygonOffset polygonOffsetFactor={-1} />
//               </mesh>
//             ))}

      
//        {/* Multiple Dashed Lane Stripes */}
//        {/* {[-6, 0, 6].map((xPos) => ( // Positions for lane markers
//         // Array.from({ length:200 }).map((_, i) => (
//         Array.from({ length: Math.ceil(roadLength / stripeSpacing) }).map((_, i) => (
//           <mesh key={`${xPos}-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[xPos, 0.45, i * -35]}>
//             <planeGeometry args={[0.5, 10]} />
//             <meshStandardMaterial color="white" />
//           </mesh>
//         ))
//       ))} */}

//       {[-6, 0, 6].map((xPos) => (
//         stripeSegments.current.map((stripe) => (
//           <mesh key={stripe.id} rotation={[-Math.PI / 2, 0, 0]} position={[xPos, 0.45, stripe.position.z]}>
//             <planeGeometry args={[stripeWidth, stripeLength]} />
//             <meshStandardMaterial color="white" />
//           </mesh>
//         ))
//       ))}




//       {/* Infinite Green Grass (left & right) */}
//       {grassLeft.current.map((grass, index) => (
//         <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={grass.position.toArray()}>
//           <planeGeometry args={[grassWidth, 8000]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
//       ))}

//       {grassRight.current.map((grass, index) => (
//         <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={grass.position.toArray()}>
//           <planeGeometry args={[grassWidth, 8000]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
//       ))}
//     </>
//   );
// }

// function Car({ position }) {
//   const carRef = useRef();

//   useFrame(() => {
//     carRef.current.position.set(position.x, 1.1, position.z);
//   });

//   return (
//     <mesh ref={carRef} position={[0, 0.5, 0]}>
//       <boxGeometry args={[1, 1, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Camera({ position }) {
//   const cameraRef = useRef();

//   useFrame(() => {
//     cameraRef.current.position.set(position.x, 5, position.z + 15);
//     cameraRef.current.lookAt(position.x, 0, position.z);
//   });

//   return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
// }

// // NEW: CarController component to handle movement inside Canvas
// function CarController({ setPosition }) {
//   const keys = useRef({});

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       keys.current[event.key] = true;
//     };

//     const handleKeyUp = (event) => {
//       keys.current[event.key] = false;
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     setPosition((prev) => {
//       let newX = prev.x;
//       let newZ = prev.z;

//       if (keys.current['ArrowUp']) newZ -= 12;// Forward
//       if (keys.current['ArrowDown']) newZ += 0.5; // Backward
//       if (keys.current['ArrowLeft'] && newX > -10.5) newX -= 0.3; // Left (stay on road)
//       if (keys.current['ArrowRight'] && newX < 10.5) newX += 0.3; // Right (stay on road)

//       // Reset position when too far to avoid floating point precision issues
//       if (newZ < -5000) {
//         newZ = 0;
//       }

//       return { x: newX, z: newZ };
//     });
//   });

//   return null; // This component doesn't render anything, just updates state
// }

// export default function Page() {
//   const [position, setPosition] = useState({ x: 0, z: 0 });

//   return (
//     <div tabIndex={0} style={{ width: '100vw', height: '100vh', outline: 'none' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />
//         <Road carPosition ={position} />
//         <Car position={position} />
//         <Camera position={position} />
//         <CarController setPosition={setPosition} /> {/* Moved movement logic inside Canvas */}
//       </Canvas>
//     </div>
//   );
// }


//code infinite road gap issue car moves by itself
// 'use client'; 

// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
// import * as THREE from 'three';

// const segmentLength = 500;  // Each road segment length
// const numSegments = 10;      // Number of segments to recycle
// const stripeSpacing = 35;    // Distance between each stripe
// const stripeLength = 10;     // Length of each stripe
// const lanePositions = [-6, 0, 6]; // Three lanes
// const stripeWidth = 0.5;
// const grassWidth = 1000;

// function Road({ carPosition }) {
//   const roadSegments = useRef([]);
//   const grassLeft = useRef([]);
//   const grassRight = useRef([]);
//   const stripes = useRef([]);

//   useEffect(() => {
//     // Initialize road segments
//     roadSegments.current = Array.from({ length: numSegments }).map((_, i) => ({
//       id: i,
//       position: new THREE.Vector3(0, 0.1, -i * segmentLength),
//     }));

//     // Initialize grass
//     grassLeft.current = Array.from({ length: numSegments }).map((_, i) => ({
//       id: i,
//       position: new THREE.Vector3(-10, -0.01, -i * segmentLength),
//     }));

//     grassRight.current = Array.from({ length: numSegments }).map((_, i) => ({
//       id: i,
//       position: new THREE.Vector3(10, -0.01, -i * segmentLength),
//     }));

//     // Initialize lane stripes
//     stripes.current = [];
//     for (let lane of lanePositions) {
//       for (let i = 0; i < Math.ceil(segmentLength / stripeSpacing) * numSegments; i++) {
//         stripes.current.push({
//           id: `${lane}-${i}`,
//           position: new THREE.Vector3(lane, 0.5, -i * stripeSpacing),
//         });
//       }
//     }
//   }, []);

//   useFrame(() => {
//     const speed = 12;  // Road moves backward

//     roadSegments.current.forEach((segment) => {
//       segment.position.z += speed;

//       // Recycle road segment
//       if (segment.position.z > carPosition.z + segmentLength) {
//         const lastSegment = roadSegments.current[roadSegments.current.length - 1];
//         segment.position.z = lastSegment.position.z - segmentLength;
//         roadSegments.current.push(roadSegments.current.shift());
//       }
//     });

//     grassLeft.current.forEach((grass) => {
//       grass.position.z += speed;
//       if (grass.position.z > carPosition.z + segmentLength) {
//         const lastSegment = grassLeft.current[grassLeft.current.length - 1];
//         grass.position.z = lastSegment.position.z - segmentLength;
//       }
//     });

//     grassRight.current.forEach((grass) => {
//       grass.position.z += speed;
//       if (grass.position.z > carPosition.z + segmentLength) {
//         const lastSegment = grassRight.current[grassRight.current.length - 1];
//         grass.position.z = lastSegment.position.z - segmentLength;
//       }
//     });

//     // Move stripes forward
//     stripes.current.forEach((stripe) => {
//       stripe.position.z += speed;
//       if (stripe.position.z > carPosition.z + stripeSpacing * Math.ceil(segmentLength / stripeSpacing)) {
//         const lastStripe = stripes.current[stripes.current.length - 1];
//         stripe.position.z = lastStripe.position.z - stripeSpacing;
//       }
//     });
//   });

//   return (
//     <>
//       {/* Road */}
//       {roadSegments.current.map((segment) => (
//         <mesh key={segment.id} position={segment.position.toArray()} rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[24, segmentLength]} />
//           <meshStandardMaterial color="gray" polygonOffset polygonOffsetFactor={-1} />
//         </mesh>
//       ))}

//       {/* Lane Stripes */}
//       {stripes.current.map((stripe) => (
//         <mesh key={stripe.id} position={stripe.position.toArray()} rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[stripeWidth, stripeLength]} />
//           <meshStandardMaterial color="white" />
//         </mesh>
//       ))}

//       {/* Grass Left */}
//       {grassLeft.current.map((grass) => (
//         <mesh key={grass.id} position={grass.position.toArray()} rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[grassWidth, segmentLength]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
//       ))}

//       {/* Grass Right */}
//       {grassRight.current.map((grass) => (
//         <mesh key={grass.id} position={grass.position.toArray()} rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[grassWidth, segmentLength]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
//       ))}
//     </>
//   );
// }

// function Car({ position }) {
//   const carRef = useRef();

//   useFrame(() => {
//     carRef.current.position.set(position.x, 1.1, position.z);
//   });

//   return (
//     <mesh ref={carRef} position={[0, 0.5, 0]}>
//       <boxGeometry args={[1, 1, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Camera({ position }) {
//   const cameraRef = useRef();

//   useFrame(() => {
//     cameraRef.current.position.set(position.x, 5, position.z + 15);
//     cameraRef.current.lookAt(position.x, 0, position.z);
//   });

//   return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
// }

// function CarController({ setPosition }) {
//   const keys = useRef({});

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       keys.current[event.key] = true;
//     };

//     const handleKeyUp = (event) => {
//       keys.current[event.key] = false;
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     setPosition((prev) => {
//       let newX = prev.x;
//       let newZ = prev.z;

//       if (keys.current['ArrowUp']) newZ -= 12;
//       if (keys.current['ArrowDown']) newZ += 0.5;
//       if (keys.current['ArrowLeft'] && newX > -10.5) newX -= 0.3;
//       if (keys.current['ArrowRight'] && newX < 10.5) newX += 0.3;

//       return { x: newX, z: newZ };
//     });
//   });

//   return null;
// }

// export default function Page() {
//   const [position, setPosition] = useState({ x: 0, z: 0 });

//   return (
//     <div tabIndex={0} style={{ width: '100vw', height: '100vh', outline: 'none' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />
//         <Road carPosition={position} />
//         <Car position={position} />
//         <Camera position={position} />
//         <CarController setPosition={setPosition} />
//       </Canvas>
//     </div>
//   );
// }

