// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// function Car({ position }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: true }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: true }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: true }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: false }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: false }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: false }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: false }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     if (!carRef.current) return;
//     if (direction.forward) carRef.current.position.z -= speed;
//     if (direction.backward) carRef.current.position.z += speed;
//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, onClick }) {
//   return (
//     <mesh position={position} onClick={onClick}>
//       <boxGeometry args={[2, 3, 2]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// export default function BoardGame() {
//   const [question, setQuestion] = useState(null);

//   const handleBuildingClick = (category) => {
//     setQuestion(`Trivia question about ${category}`);
//   };

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <Car position={[0, 0.25, 0]} />
//         <Building position={[5, 1.5, -5]} color="blue" onClick={() => handleBuildingClick("Technology")} />
//         <Building position={[-5, 1.5, -5]} color="green" onClick={() => handleBuildingClick("Sustainable Energy")} />
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// CODE 2 WORKS BASIC
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// function Car({ position }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: true }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: true }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: true }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: false }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: false }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: false }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: false }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   useFrame(() => {
//     if (!carRef.current) return;
  
//     if (direction.forward) {
//       carRef.current.position.x += Math.sin(carRef.current.rotation.y) * speed;
//       carRef.current.position.z += Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.backward) {
//       carRef.current.position.x -= Math.sin(carRef.current.rotation.y) * speed;
//       carRef.current.position.z -= Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.left) {
//       carRef.current.rotation.y += rotationSpeed;
//     }
//     if (direction.right) {
//       carRef.current.rotation.y -= rotationSpeed;
//     }
//   });
  
  

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, onClick }) {
//   return (
//     <mesh position={position} onClick={onClick}>
//       <boxGeometry args={[2, 3, 2]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// export default function BoardGame() {
//   const [question, setQuestion] = useState(null);

//   const handleBuildingClick = (category) => {
//     setQuestion(`Trivia question about ${category}`);
//   };

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <Car position={[0, 0.25, 0]} />
//         <Building position={[5, 1.5, -5]} color="blue" onClick={() => handleBuildingClick("Technology")} />
//         <Building position={[-5, 1.5, -5]} color="green" onClick={() => handleBuildingClick("Sustainable Energy")} />
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

//CODE 3 FLOOR ADDED, HYDRATION ISSUE
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: true }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: true }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: true }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: false }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: false }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: false }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: false }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     for (let building of buildings) {
//       const { x, z, width, depth } = building;
//       if (
//         newPos.x > x - width / 2 &&
//         newPos.x < x + width / 2 &&
//         newPos.z > z - depth / 2 &&
//         newPos.z < z + depth / 2
//       ) {
//         return true; // Collision detected
//       }
//     }
//     return false;
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     let newPos = carRef.current.position.clone();

//     if (direction.forward) {
//       newPos.x += Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z += Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.backward) {
//       newPos.x -= Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z -= Math.cos(carRef.current.rotation.y) * speed;
//     }

//     if (!checkCollision(newPos)) {
//       carRef.current.position.copy(newPos);
//     }

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function Floor() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
//       <planeGeometry args={[20, 20]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// export default function BoardGame() {
//   const [question, setQuestion] = useState(null);

//   const buildings = [
//     { x: 5, z: -5, width: 2, depth: 2, height: 3, color: "blue", category: "Technology" },
//     { x: -5, z: -5, width: 2, depth: 2, height: 3, color: "green", category: "Sustainable Energy" },
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <Floor />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />

//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//CODE 4
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: true }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: true }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: true }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: false }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: false }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: false }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: false }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     for (let building of buildings) {
//       const { x, z, width, depth } = building;
//       if (
//         newPos.x > x - width / 2 &&
//         newPos.x < x + width / 2 &&
//         newPos.z > z - depth / 2 &&
//         newPos.z < z + depth / 2
//       ) {
//         return true; // Collision detected
//       }
//     }
//     return false;
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     let newPos = carRef.current.position.clone();

//     if (direction.forward) {
//       newPos.x += Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z += Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.backward) {
//       newPos.x -= Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z -= Math.cos(carRef.current.rotation.y) * speed;
//     }

//     if (!checkCollision(newPos)) {
//       carRef.current.position.copy(newPos);
//     }

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function Floor() {
//   return (
//     <group>
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
//         <planeGeometry args={[20, 20]} />
//         <meshStandardMaterial color="gray" />
//       </mesh>
//       {/* Grid Floor */}
//       <gridHelper args={[20, 20, "white", "gray"]} />
//     </group>
//   );
// }

// export default function BoardGame() {
//   const [isClient, setIsClient] = useState(false);
//   const [question, setQuestion] = useState(null);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div className="w-full h-screen bg-gray-900 text-white flex justify-center items-center">Loading...</div>;

//   const buildings = [
//     { x: 5, z: -5, width: 2, depth: 2, height: 3, color: "blue", category: "Technology" },
//     { x: -5, z: -5, width: 2, depth: 2, height: 3, color: "green", category: "Sustainable Energy" },
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <Floor />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />

//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//CODE 5  good strong basic
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: true }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: true }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: true }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: false }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: false }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: false }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: false }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     for (let building of buildings) {
//       const { x, z, width, depth } = building;
//       if (
//         newPos.x > x - width / 2 &&
//         newPos.x < x + width / 2 &&
//         newPos.z > z - depth / 2 &&
//         newPos.z < z + depth / 2
//       ) {
//         return true; // Collision detected
//       }
//     }
//     return false;
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     let newPos = carRef.current.position.clone();

//     if (direction.forward) {
//       newPos.x += Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z += Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.backward) {
//       newPos.x -= Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z -= Math.cos(carRef.current.rotation.y) * speed;
//     }

//     if (!checkCollision(newPos)) {
//       carRef.current.position.copy(newPos);
//     }

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color}/> {/* Solid color, no transparency */}
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return (
//     <gridHelper args={[1000, 100, "green", "green"]} />
//   );
// }

// export default function BoardGame() {
//   const [isClient, setIsClient] = useState(false);
//   const [question, setQuestion] = useState(null);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div className="w-full h-screen bg-gray-900 text-white flex justify-center items-center">Loading...</div>;

//   const buildings = [
//     { x: 5, z: -5, width: 2, depth: 2, height: 3, color: "yellow", category: "Technology" },
//     { x: -5, z: -5, width: 2, depth: 2, height: 3, color: "lightgrey", category: "Sustainable Energy" },
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <InfiniteGreenGrid /> {/* Infinite Green Grid */}
//         <Car position={[0, 0.25, 0]} buildings={buildings} />

//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//CODE 6 hydration error
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: true }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: true }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: true }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: true }));
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowUp") setDirection((dir) => ({ ...dir, forward: false }));
//       if (event.key === "ArrowDown") setDirection((dir) => ({ ...dir, backward: false }));
//       if (event.key === "ArrowLeft") setDirection((dir) => ({ ...dir, left: false }));
//       if (event.key === "ArrowRight") setDirection((dir) => ({ ...dir, right: false }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     for (let building of buildings) {
//       const { x, z, width, depth } = building;
//       if (
//         newPos.x > x - width / 2 &&
//         newPos.x < x + width / 2 &&
//         newPos.z > z - depth / 2 &&
//         newPos.z < z + depth / 2
//       ) {
//         return true; // Collision detected
//       }
//     }
//     return false;
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     let newPos = carRef.current.position.clone();

//     if (direction.forward) {
//       newPos.x += Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z += Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.backward) {
//       newPos.x -= Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z -= Math.cos(carRef.current.rotation.y) * speed;
//     }

//     if (!checkCollision(newPos)) {
//       carRef.current.position.copy(newPos);
//     }

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color}/> {/* Solid color, no transparency */}
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return (
//     <gridHelper args={[1000, 100, "green", "green"]} />
//   );
// }

// export default function BoardGame() {
//   const [question, setQuestion] = useState(null);

//   const buildings = [
//     { x: 5, z: -5, width: 2, depth: 2, height: 3, color: "yellow", category: "Technology" },
//     { x: -5, z: -5, width: 2, depth: 2, height: 3, color: "lightgrey", category: "Sustainable Energy" },
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <InfiniteGreenGrid /> {/* Infinite Green Grid */}
//         <Car position={[0, 0.25, 0]} buildings={buildings} />

//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//code 7
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const speed = 0.2;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // function checkCollision(newPos) {
//   //   return buildings.some(({ x, z, width, depth }) =>
//   //     newPos.x > x - width / 2 &&
//   //     newPos.x < x + width / 2 &&
//   //     newPos.z > z - depth / 2 &&
//   //     newPos.z < z + depth / 2
//   //   );
//   // }
//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1); // Slight expansion for better collision detection

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     let newPos = carRef.current.position.clone();

//     if (direction.forward) {
//       newPos.x += Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z += Math.cos(carRef.current.rotation.y) * speed;
//     }
//     if (direction.backward) {
//       newPos.x -= Math.sin(carRef.current.rotation.y) * speed;
//       newPos.z -= Math.cos(carRef.current.rotation.y) * speed;
//     }

//     if (!checkCollision(newPos)) carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// export default function BoardGame() {
//   const [question, setQuestion] = useState(null);

//   const buildings = [
//     { x: 5, z: -5, width: 2, depth: 2, height: 3, color: "yellow", category: "Technology" },
//     { x: -5, z: -5, width: 2, depth: 2, height: 3, color: "lightgrey", category: "Sustainable Energy" },
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <InfiniteGreenGrid />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />

//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//code 8
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const speed = 0.1;
//   const rotationSpeed = 0.05;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // function checkCollision(newPos) {
//   //   return buildings.some(({ x, z, width, depth }) =>
//   //     newPos.x > x - width / 2 &&
//   //     newPos.x < x + width / 2 &&
//   //     newPos.z > z - depth / 2 &&
//   //     newPos.z < z + depth / 2
//   //   );
//   // }

//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1); // Slight expansion for better collision detection

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // useFrame(() => {
//   //   if (!carRef.current) return;

//   //   let newPos = carRef.current.position.clone();

//   //   if (direction.forward) {
//   //     newPos.x += Math.sin(carRef.current.rotation.y) * speed;
//   //     newPos.z += Math.cos(carRef.current.rotation.y) * speed;
//   //   }
//   //   if (direction.backward) {
//   //     newPos.x -= Math.sin(carRef.current.rotation.y) * speed;
//   //     newPos.z -= Math.cos(carRef.current.rotation.y) * speed;
//   //   }

//   //   if (!checkCollision(newPos)) carRef.current.position.copy(newPos);

//   //   if (direction.left) carRef.current.rotation.y += rotationSpeed;
//   //   if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   // });
//   useFrame(() => {
//     if (!carRef.current) return;
  
//     let newPos = carRef.current.position.clone();
  
//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );
  
//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );
  
//     // Move Forward (only if not colliding)
//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos, 0.2)) newPos.add(forwardStep);
//     }
  
//     // Move Backward (only if not colliding)
//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos, 0.2)) newPos.add(backwardStep);
//     }
  
//     // Check if already stuck inside a building
//     if (checkCollision(newPos, 0)) {
//       console.log("Car is stuck! Pushing out...");
      
//       // Push car slightly away in opposite direction
//       newPos.x += Math.random() * 0.2 - 0.1; // Small random nudge
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }
  
//     carRef.current.position.copy(newPos);
  
//     // Rotate (Turning should always work)
//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });
  
//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   const meshRef = useRef();
//   useEffect(() => {
//     size.mesh = meshRef.current;
//   }, []);

//   const wireframeGeometry = new THREE.WireframeGeometry(new THREE.BoxGeometry(size.width, size.height, size.depth));
//   const wireframe = new THREE.LineSegments(wireframeGeometry);
//   wireframe.material.depthTest = false; // Ensure wireframe is visible on top
//   wireframe.material.opacity = 0.5; // Adjust opacity as needed
//   wireframe.material.transparent = true;
//   wireframe.material.color.set('black'); // Set wireframe color

//   return (
//     <mesh ref={meshRef} position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//       <primitive object={wireframe} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// export default function BoardGame() {
//   const [question, setQuestion] = useState(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // if (!mounted) return null; // Prevents mismatched rendering before hydration
//   if (!mounted) return <div className="w-full h-screen bg-black" />; // Temporary placeholder

//   return <BoardGameContent />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// function BoardGameContent({question, setQuestion}) {

//  const buildings = generateBuildings(); // Generate buildings on component render

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 5, 10] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />

//         <InfiniteGreenGrid />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />

//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>

//       {question && (
//         <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 text-black rounded">
//           <p>{question}</p>
//           <button onClick={() => setQuestion(null)} className="bg-red-500 text-white px-4 py-2 mt-2">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//code 9 FANTASTIC INCOMPLETE
// "use client";

// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 0.08;
//   const rotationSpeed = 0.03;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     const zoomOutFactor = 30;

//     // Adjust the camera offset for a drone-style top-back view
//     const followDistance = -45; // Distance behind the car
//     const heightAbove = 40; // Height of the camera
//     const lerpFactor = 0.01; // Smooth movement

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     // Make the camera look at the car
//     camera.lookAt(carRef.current.position);

//     let newPos = carRef.current.position.clone();

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <BoardGameContent />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 10, -15] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={true} enablePan={true}/>
//         <InfiniteGreenGrid />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />
//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }

//CODE 10  MISSING CAR_MODEL
// "use client";

// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import { useGLTF } from '@react-three/drei';


// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// export function Car({ position, buildings, mounted }) {

//   // Prevent rendering if not mounted
//   if (!mounted) {
//     return null; // You can replace this with a loading state or a fallback component
//   }

//   // Prevent rendering during SSR
//   if (typeof window === "undefined") {
//     return null; // This ensures it doesn't attempt to render during SSR
//   }
  
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 0.08;
//   const rotationSpeed = 0.03;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   const { scene, nodes, materials, animations, error } = useGLTF("/car_model.glb");

//   useEffect(() => {
//     if (scene) {
//       setLoading(false);
//     }
//   }, [scene]);

//   // Handle any GLTF loading errors
//   useEffect(() => {
//     if (error) {
//       console.error("Error loading GLTF model:", error);
//       setLoading(false);
//     }
//   }, [error]);

//   // const [model, setModel] = useState(null);

//   // useEffect(() => {
//   //   const loadModel = async () => {
//   //     const { scene } = await useGLTF("/car_model.glb");
//   //     setModel(scene);
//   //   };
  
//   //   loadModel();
//   // }, []);

//   // if (!mounted) return <div className="w-full h-screen bg-black" />;

//   //Load the car model using useGLTF
//   // const { scene } = useGLTF("/car_model.glb");

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     // const zoomOutFactor = 30;

//     // Adjust the camera offset for a drone-style top-back view
//     const followDistance = -45; // Distance behind the car
//     const heightAbove = 40; // Height of the camera
//     const lerpFactor = 0.01; // Smooth movement

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     // Make the camera look at the car
//     camera.lookAt(carRef.current.position);

//     let newPos = carRef.current.position.clone();

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   if (loading) {
//     return <mesh position={position}><boxGeometry args={[1,1,1]} /><meshStandardMaterial color={"gray"}/></mesh> // Or a custom loading component
//   }

//   if (!scene) return null;

//   return (
//     <mesh ref={carRef} position={position}>
//       {/* <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" /> */}
//       <primitive object={scene} scale={[0.5, 0.5, 0.5]}/>
//       {/* {model ? <primitive object={model} scale={[0.5, 0.5, 0.5]} /> : null} */}
//   </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <BoardGameContent mounted={mounted} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// function BoardGameContent({ mounted }) {
//   const buildings = generateBuildings();

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 10, -15] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={true} enablePan={true}/>
//         <InfiniteGreenGrid />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />
//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }

//CODE 11
// "use client";

// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// // Dynamically import the GLTFLoader to avoid SSR issues
// const DynamicCar = dynamic(() => import("@react-three/drei").then((mod) => mod.useGLTF), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 0.08;
//   const rotationSpeed = 0.03;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });

//   // Load car model dynamically
//   const { scene } = DynamicCar("/car_model.glb");  // Load the car model from the public folder

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   useFrame(() => {
//     if (!carRef.current) return;

//     const zoomOutFactor = 30;

//     // Adjust the camera offset for a drone-style top-back view
//     const followDistance = -45; // Distance behind the car
//     const heightAbove = 40; // Height of the camera
//     const lerpFactor = 0.01; // Smooth movement

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     // Make the camera look at the car
//     camera.lookAt(carRef.current.position);

//     let newPos = carRef.current.position.clone();

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <mesh ref={carRef} position={position}>
//       {/* <boxGeometry args={[1, 0.5, 2]} />
//       <meshStandardMaterial color="red" /> */}
//       {scene && <primitive object={scene} />}
//       {/* <primitive object={scene} scale={0.2} /> Scale the model if necessary */}
//     </mesh>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <BoardGameContent />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 10, -15] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={true} enablePan={true}/>
//         <InfiniteGreenGrid />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />
//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }

//code 12
// "use client";
// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 0.08;
//   const rotationSpeed = 0.03;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   // Load the car model
//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/car_model.glb", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(0.5, 0.5, 0.5);  // Scale the model to 50% of its original size
//       setCarModel(model);  // Store the model in state
//     });

//   }, []);

//   // Handle user inputs for controlling the car
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -45;
//     const heightAbove = 40;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     camera.lookAt(carRef.current.position);

//     let newPos = carRef.current.position.clone();

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// export default function BoardGame() {
//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 10, -15] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={true} enablePan={true} />
//         <Car position={[0, 0.25, 0]} buildings={[]} /> {/* Pass in your buildings data */}
//       </Canvas>
//     </div>
//   );
// }


//CODE 13
// "use client";

// import { useRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// // Dynamically import OrbitControls to avoid SSR issues
// const OrbitControls = dynamic(
//   () => import('@react-three/drei').then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// // Dynamically load the Canvas to prevent SSR issues
// const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

// function Car({ position, buildings }) {
//   const carRef = useRef();
//   const { camera } = useThree();
//   const speed = 0.08;
//   const rotationSpeed = 0.03;
//   const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
//   const [carModel, setCarModel] = useState(null);  // State to store the car model

//   // Load the car model
//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load("/car_model.glb", (gltf) => {
//     // loader.load("/disco_drone.glb", (gltf) => {
//       const model = gltf.scene;
//       // model.scale.set(0.5, 0.5, 0.5);  // Scale the model to 50% of its original size
//       model.scale.set(0.8,0.8,0.8);
      
//       //NEW CODE
//       model.position.set(0,15,0);

//       setCarModel(model);  // Store the model in state
//     });

//   }, []);

//   // Handle user inputs for controlling the car
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" || dir.forward,
//         backward: event.key === "ArrowDown" || dir.backward,
//         left: event.key === "ArrowLeft" || dir.left,
//         right: event.key === "ArrowRight" || dir.right,
//       }));
//     };

//     const handleKeyUp = (event) => {
//       setDirection((dir) => ({
//         ...dir,
//         forward: event.key === "ArrowUp" ? false : dir.forward,
//         backward: event.key === "ArrowDown" ? false : dir.backward,
//         left: event.key === "ArrowLeft" ? false : dir.left,
//         right: event.key === "ArrowRight" ? false : dir.right,
//       }));
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Check for collisions with buildings
//   function checkCollision(newPos) {
//     const carBox = new THREE.Box3().setFromObject(carRef.current);
//     carBox.expandByScalar(0.1);

//     return buildings.some(({ x, z, width, depth, height }) => {
//       const buildingBox = new THREE.Box3(
//         new THREE.Vector3(x - width / 2, 0, z - depth / 2),
//         new THREE.Vector3(x + width / 2, height, z + depth / 2)
//       );

//       return carBox.intersectsBox(buildingBox);
//     });
//   }

//   // Update car position and camera movement every frame
//   useFrame(() => {
//     if (!carRef.current || !carModel) return;  // Wait until the model is loaded

//     const zoomOutFactor = 30;
//     const followDistance = -15;
//     const heightAbove = 8;
//     const lerpFactor = 0.01;

//     const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
//     const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

//     camera.position.lerp(
//       new THREE.Vector3(
//         carRef.current.position.x + offsetX,
//         carRef.current.position.y + heightAbove,
//         carRef.current.position.z + offsetZ
//       ),
//       lerpFactor
//     );

//     camera.lookAt(carRef.current.position);

//     let newPos = carRef.current.position.clone();

//     const forwardStep = new THREE.Vector3(
//       -Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       -Math.cos(carRef.current.rotation.y) * speed
//     );

//     const backwardStep = new THREE.Vector3(
//       Math.sin(carRef.current.rotation.y) * speed,
//       0,
//       Math.cos(carRef.current.rotation.y) * speed
//     );

//     if (direction.forward) {
//       const testPos = newPos.clone().add(forwardStep);
//       if (!checkCollision(testPos)) newPos.add(forwardStep);
//     }

//     if (direction.backward) {
//       const testPos = newPos.clone().add(backwardStep);
//       if (!checkCollision(testPos)) newPos.add(backwardStep);
//     }

//     if (checkCollision(newPos)) {
//       newPos.x += Math.random() * 0.2 - 0.1;
//       newPos.z += Math.random() * 0.2 - 0.1;
//     }

//     carRef.current.position.copy(newPos);

//     if (direction.left) carRef.current.rotation.y += rotationSpeed;
//     if (direction.right) carRef.current.rotation.y -= rotationSpeed;
//   });

//   return (
//     <group ref={carRef} position={position}>
//       {carModel && <primitive object={carModel} />}
//     </group>
//   );
// }

// function Building({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[size.width, size.height, size.depth]} />
//       <meshStandardMaterial color={color} metalness={0.3} />
//     </mesh>
//   );
// }

// function InfiniteGreenGrid() {
//   return <gridHelper args={[1000, 100, "green", "green"]} />;
// }

// const categories = [
//   { name: "Technology", color: "lightgrey" },
//   { name: "Sustainability", color: "blue" },
//   { name: "Future", color: "green" },
//   { name: "Space", color: "red" },
//   { name: "Geography", color: "brown" },
//   { name: "Ecosystem", color: "red" },
// ];

// function generateBuildings() {
//   const buildings = [];
//   const rowSpacing = 20;
//   const colSpacing = 10;
//   const numBuildingsPerRow = 7;
//   const startX = -35;
//   const startZ = -5;

//   categories.forEach((category, rowIndex) => {
//     for (let i = 0; i < numBuildingsPerRow; i++) {
//       buildings.push({
//         x: startX + i * colSpacing,
//         z: startZ - rowIndex * rowSpacing,
//         width: 5,
//         depth: 2,
//         height: 10,
//         color: category.color,
//         category: category.name,
//       });
//     }
//   });

//   return buildings;
// }

// export default function BoardGame() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return <div className="w-full h-screen bg-black" />;

//   return <BoardGameContent />;
// }

// function BoardGameContent() {
//   const buildings = generateBuildings();

//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 10, -15] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={true} enablePan={true} />
//         <InfiniteGreenGrid />
//         <Car position={[0, 0.25, 0]} buildings={buildings} />
//         {buildings.map((b, i) => (
//           <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }


//CODE 14
"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Dynamically import OrbitControls to avoid SSR issues
const OrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);

// Dynamically load the Canvas to prevent SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });

function Car({ position, buildings }) {
  const carRef = useRef();
  const { camera } = useThree();
  const speed = 0.08;
  const rotationSpeed = 0.03;
  const [direction, setDirection] = useState({ forward: false, backward: false, left: false, right: false });
  const [carModel, setCarModel] = useState(null);  // State to store the car model

  // Load the car model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/car_model.glb", (gltf) => {
    // loader.load("/disco_drone.glb", (gltf) => {
      const model = gltf.scene;
      // model.scale.set(0.5, 0.5, 0.5);  // Scale the model to 50% of its original size
      model.scale.set(0.8,0.8,0.8);
      
      //NEW CODE
      model.position.set(0,2,0);

      setCarModel(model);  // Store the model in state
    });

  }, []);

  // Handle user inputs for controlling the car
  useEffect(() => {
    const handleKeyDown = (event) => {
      setDirection((dir) => ({
        ...dir,
        forward: event.key === "ArrowUp" || dir.forward,
        backward: event.key === "ArrowDown" || dir.backward,
        left: event.key === "ArrowLeft" || dir.left,
        right: event.key === "ArrowRight" || dir.right,
      }));
    };

    const handleKeyUp = (event) => {
      setDirection((dir) => ({
        ...dir,
        forward: event.key === "ArrowUp" ? false : dir.forward,
        backward: event.key === "ArrowDown" ? false : dir.backward,
        left: event.key === "ArrowLeft" ? false : dir.left,
        right: event.key === "ArrowRight" ? false : dir.right,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Check for collisions with buildings
  function checkCollision(newPos) {
    const carBox = new THREE.Box3().setFromObject(carRef.current);
    carBox.expandByScalar(0.1);

    return buildings.some(({ x, z, width, depth, height }) => {
      const buildingBox = new THREE.Box3(
        new THREE.Vector3(x - width / 2, 0, z - depth / 2),
        new THREE.Vector3(x + width / 2, height, z + depth / 2)
      );

      return carBox.intersectsBox(buildingBox);
    });
  }

  // Update car position and camera movement every frame
  useFrame(() => {
    if (!carRef.current || !carModel) return;  // Wait until the model is loaded

    const zoomOutFactor = 30;
    const followDistance = -15;
    const heightAbove = 2;
    const lerpFactor = 0.01;

    const offsetX = -Math.sin(carRef.current.rotation.y) * followDistance;
    const offsetZ = -Math.cos(carRef.current.rotation.y) * followDistance;

    camera.position.lerp(
      new THREE.Vector3(
        carRef.current.position.x + offsetX,
        carRef.current.position.y + heightAbove,
        carRef.current.position.z + offsetZ
      ),
      lerpFactor
    );

    camera.lookAt(carRef.current.position);

    let newPos = carRef.current.position.clone();

    const forwardStep = new THREE.Vector3(
      -Math.sin(carRef.current.rotation.y) * speed,
      0,
      -Math.cos(carRef.current.rotation.y) * speed
    );

    const backwardStep = new THREE.Vector3(
      Math.sin(carRef.current.rotation.y) * speed,
      0,
      Math.cos(carRef.current.rotation.y) * speed
    );

    if (direction.forward) {
      const testPos = newPos.clone().add(forwardStep);
      if (!checkCollision(testPos)) newPos.add(forwardStep);
    }

    if (direction.backward) {
      const testPos = newPos.clone().add(backwardStep);
      if (!checkCollision(testPos)) newPos.add(backwardStep);
    }

    if (checkCollision(newPos)) {
      newPos.x += Math.random() * 0.2 - 0.1;
      newPos.z += Math.random() * 0.2 - 0.1;
    }

    carRef.current.position.copy(newPos);

    if (direction.left) carRef.current.rotation.y += rotationSpeed;
    if (direction.right) carRef.current.rotation.y -= rotationSpeed;
  });

  return (
    <group ref={carRef} position={position}>
      {carModel && <primitive object={carModel} />}
    </group>
  );
}

function Building({ position, color, size }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[size.width, size.height, size.depth]} />
      <meshStandardMaterial color={color} metalness={0.3} />
    </mesh>
  );
}

function InfiniteGreenGrid() {
  return <gridHelper args={[1000, 100, "green", "green"]} />;
}

const categories = [
  { name: "Technology", color: "lightgrey" },
  { name: "Sustainability", color: "blue" },
  { name: "Future", color: "green" },
  { name: "Space", color: "red" },
  { name: "Geography", color: "brown" },
  { name: "Ecosystem", color: "red" },
];

function generateBuildings() {
  const buildings = [];
  const rowSpacing = 20;
  const colSpacing = 10;
  const numBuildingsPerRow = 7;
  const startX = -35;
  const startZ = -5;

  categories.forEach((category, rowIndex) => {
    for (let i = 0; i < numBuildingsPerRow; i++) {
      buildings.push({
        x: startX + i * colSpacing,
        z: startZ - rowIndex * rowSpacing,
        width: 5,
        depth: 2,
        height: 10,
        color: category.color,
        category: category.name,
      });
    }
  });

  return buildings;
}

export default function BoardGame() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-screen bg-black" />;

  return <BoardGameContent />;
}

function BoardGameContent() {
  const buildings = generateBuildings();

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 10, -15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} enablePan={true} />
        <InfiniteGreenGrid />
        <Car position={[0, 0.25, 0]} buildings={buildings} />
        {buildings.map((b, i) => (
          <Building key={i} position={[b.x, b.height / 2, b.z]} color={b.color} size={b} />
        ))}
      </Canvas>
    </div>
  );
}
