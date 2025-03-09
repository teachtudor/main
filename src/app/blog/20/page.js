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


//CODE 14 PLACEHOLDER FOR FUTURE
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
//       model.position.set(0,2,0);

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
//     const heightAbove = 2;
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

//CODE FOR SIMPLE 3D PLANE
// "use client";
// import { useEffect, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useTexture } from '@react-three/drei';

// function PlaneWithTexture() {
//   const texture = useTexture('/floortexture.jpg'); // Make sure the texture is in the public folder

//   return (
//     <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeGeometry args={[10, 10]} />
//       <meshStandardMaterial 
//         map={texture} 
//         color={0xFFFFFF}  // Make the color bright (this has a boosting effect when applied to the texture)
//         emissive={0xFFFFFF}  // Make the texture emit light (brighten it)
//         emissiveIntensity={0.001} // Control the intensity of the emissive effect
//         roughness={0.5}   // Adjust roughness if needed
//       />
//     </mesh>
//   );
// }

// export default function Scene() {
//   const [mounted, setMounted] = useState(false);

//   // Ensure that the 3D scene is only rendered on the client
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null; // Don't render the scene on the server
//   }

//   return (
//     <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
//       <Canvas
//         camera={{
//           position: [10, 10, 5], // Camera position
//           fov: 60,             // Field of view
//           near: 0.1,           // Near clipping plane
//           far: 100,            // Far clipping plane
//         }}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         <ambientLight intensity={3} />
//         <directionalLight position={[15, 5, 5]} />

//         <PlaneWithTexture /> {/* 3D Plane with Texture */}

//         <OrbitControls 
//           enableZoom={true} 
//           minDistance={1} 
//           maxDistance={20} 
//         /> {/* Orbit controls with zoom enabled */}
//       </Canvas>
//     </div>
//   );
// }


//CODE CITY 1
// "use client";
// import { Canvas } from '@react-three/fiber';
// import { useState } from 'react';
// import { Box, Plane } from '@react-three/drei';

// const CityLayout = () => {
//   const [activeScenario, setActiveScenario] = useState(null);

//   const handleClick = (scenario) => {
//     setActiveScenario(scenario);
//     // Trigger the scenario action (e.g., display an animation or instructions)
//     alert(`Scenario: ${scenario} triggered!`);
//   };

//   return (
//     <Canvas>
//       {/* Residential Area */}
//       <Plane args={[10, 10]} position={[0, 0, 0]} onClick={() => handleClick('Brushing Teeth')}>
//         <meshBasicMaterial color="lightblue" />
//       </Plane>

//       {/* City Center */}
//       <Box args={[5, 5, 5]} position={[10, 0, 0]} onClick={() => handleClick('Buying Coffee')}>
//         <meshBasicMaterial color="orange" />
//       </Box>

//       {/* Parks */}
//       <Plane args={[15, 15]} position={[20, 0, 0]} onClick={() => handleClick('Walking the Dog')}>
//         <meshBasicMaterial color="green" />
//       </Plane>

//       {/* Outdoor Spaces */}
//       <Plane args={[15, 15]} position={[-15, 0, 0]} onClick={() => handleClick('Building Sandcastle')}>
//         <meshBasicMaterial color="yellow" />
//       </Plane>

//       {/* Neighborhood Area */}
//       <Box args={[5, 5, 5]} position={[-5, 0, 0]} onClick={() => handleClick('Helping Neighbor')}>
//         <meshBasicMaterial color="pink" />
//       </Box>
//     </Canvas>
//   );
// };

// export default CityLayout;


//CODE CITY 1
// "use client";
// import { Canvas, useFrame, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";

// extend({ OrbitControls });

// // Infinite Grid
// function InfiniteGrid() {
//   const gridHelper = new THREE.GridHelper(10000, 10000, "white", "gray");
//   gridHelper.material.transparent = true;
//   gridHelper.material.opacity = 0.5;
//   return <primitive object={gridHelper} />;
// }

// // Example Block (Building, House, etc.)
// function Block({ position }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[2, 4, 2]} />
//       <meshStandardMaterial color="blue" />
//     </mesh>
//   );
// }

// // Generate Pentagon Vertices
// function generatePentagon(center, radius) {
//   const vertices = [];
//   for (let i = 0; i < 5; i++) {
//     const angle = (i * 2 * Math.PI) / 5;
//     const x = center[0] + radius * Math.cos(angle);
//     const z = center[2] + radius * Math.sin(angle);
//     vertices.push(new THREE.Vector3(x, center[1], z));
//   }
//   return vertices;
// }

// // Draw Pentagon (for visualization)
// function Pentagon({ vertices }) {
//   const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
//   const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
//   const line = new THREE.LineLoop(geometry, material);
//   return <primitive object={line} />;
// }

// // Section Blocks Based on Pentagon
// function PentagonSections() {
//   const center = [0, 2, 0]; // Center of the pentagon
//   const radius = 10; // Radius of the pentagon
//   const vertices = generatePentagon(center, radius);

//   // Create blocks in each section (triangle) of the pentagon
//   const blocks = [];
//   for (let i = 0; i < 5; i++) {
//     const nextVertex = vertices[(i + 1) % 5];
//     const position = [
//       (vertices[i].x + nextVertex.x) / 2,
//       2, // height of the blocks
//       (vertices[i].z + nextVertex.z) / 2,
//     ];
//     blocks.push(<Block key={i} position={position} />);
//   }

//   // return <>{blocks}</>;
//   return (
//     <>
//       <Pentagon vertices={vertices} />
//       {blocks}
//     </>
//   );
// }

// export default function ThreeScene() {
//   return (
//     <div className="h-screen w-full flex items-center justify-center">
//       <Canvas camera={{ position: [20, 20, 20] }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <InfiniteGrid />
//         <PentagonSections />
//         <Block position={[0, 2, 0]} />
//         <Block position={[5, 2, 5]} />
//         <Block position={[-5, 2, -5]} />
//         <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//       </Canvas>
//     </div>
//   );
// }


//CODE CITY 2
// "use client";
// import { Canvas, useThree, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import React, { useState, useRef } from "react";
// import { GridHelper } from 'three';


// // Extend OrbitControls for pan/zoom/rotate functionality
// extend({ OrbitControls });

// function GridLines() {
//   const { camera, scene } = useThree();  // Ensure this is inside a functional component

//   return(
//     <primitive object={new GridHelper(10000, 10000)} position={[0, 0, 0]} />
//   )
// }

// // Example Block (Building, Home, Road, etc.)
// function Block({ position, color }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1,1,1]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// // Road Block (using a long thin rectangular block)
// function Road({ position }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1, 0.2, 1]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// // Free Zone Checker (area inside the octagon where blocks should not be placed)
// function isInsideFreeZone(x, z) {
//   // Example condition for free zone; adjust as needed
//   return (x < 5 && z < 5);
// }

// function ClickHandler({ onElementPlace }) {
//   const { camera, scene } = useThree();
//   const planeRef = useRef();
//   const [highlightedPosition, setHighlightedPosition] = useState(null); // To track the highlighted grid position

//   const onClick = (event) => {
//     if (!onElementPlace || !highlightedPosition) return;

//     const position = new THREE.Vector3();
//     position.copy(highlightedPosition); // Use the highlighted position

//     position.y = 0; // Adjust the height of the object (make sure it's above the ground)
//     onElementPlace(position);
//   };

//   const onPointerMove = (event) => {
//     const mouse = new THREE.Vector2();
//     const raycaster = new THREE.Raycaster();
//     const position = new THREE.Vector3();

//     // Normalize mouse position
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    

//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObject(planeRef.current);

//     if (intersects.length > 0) {
//       // Get the intersection point and snap it to the grid
//       position.copy(intersects[0].point);

//       // Snap to grid (center the position in the unit square)
//       position.x = Math.floor(position.x) + 0.5;  // Center within the grid unit
//       position.z = Math.floor(position.z) + 0.5;  // Center within the grid unit
//       position.y = 0.05; // Place object slightly above ground

//       setHighlightedPosition(position); // Update highlighted position
//     }
//   };

//   return (
//     <>
//       {/* Highlighted grid area */}
//       {highlightedPosition && (
//         <mesh position={highlightedPosition}>
//           <boxGeometry args={[1, 0.1, 1]} /> {/* Make a small highlighted box */}
//           <meshStandardMaterial color="yellow" opacity={0.5} transparent />
//         </mesh>
//       )}

//       {/* Invisible plane for raycasting */}
//       <mesh
//         ref={planeRef}
//         onClick={onClick}
//         onPointerMove={onPointerMove}
//         position={[0, 0, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}  // Plane aligned to the XZ plane
//       >
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial color="white" opacity={0} transparent />
//       </mesh>
//     </>
//   );
// }

// // Panel for adding elements (buildings, roads, etc.)
// function Panel({ addElement, currentElement, setCurrentElement, handleDeleteMode, deleteMode }) {
//   const handleButtonClick = (type) => {
//     // If the button clicked is already selected, deselect it
//     if (currentElement === type) {
//       setCurrentElement(null); // Deselect current element
//     } else {
//       setCurrentElement(type); // Select new element
//     }
//   };

//   // const handleAddElement = (type) => {
//   //   if(currentElement === type){
//   //     addElement(type);
//   //   }
//   // };

//   return (
//     <div className="button-container">
//       <button
//         className={`action-button ${currentElement === "building" ? "active" : ""}`}
//         onClick={() => {
//           handleButtonClick("building");
//           addElement("building"); // Add element on button click
//         }}
//         style={{
//           backgroundColor: currentElement === "building" ? "red" : "green",
//           borderColor: currentElement === "building" ? "darkred" : "gray",
//         }}
//       >
//         Add Building
//       </button>
//       <button
//         className={`action-button ${currentElement === "home" ? "active" : ""}`}
//         onClick={() => {
//           handleButtonClick("home");
//           addElement("home"); // Add element on button click
//         }}
//         style={{
//           backgroundColor: currentElement === "home" ? "red" : "green",
//           borderColor: currentElement === "home" ? "darkred" : "gray",
//         }}
//       >
//         Add Home
//       </button>
//       <button
//         className={`action-button ${currentElement === "store" ? "active" : ""}`}
//         onClick={() => {
//           handleButtonClick("store");
//           addElement("store"); // Add element on button click
//         }}
//         style={{
//           backgroundColor: currentElement === "store" ? "red" : "green",
//           borderColor: currentElement === "store" ? "darkred" : "gray",
//         }}
//       >
//         Add Store
//       </button>
//       <button
//         className={`action-button ${currentElement === "park" ? "active" : ""}`}
//         onClick={() => {
//           handleButtonClick("park");
//           addElement("park"); // Add element on button click
//         }}
//         style={{
//           backgroundColor: currentElement === "park" ? "red" : "green",
//           borderColor: currentElement === "park" ? "darkred" : "gray",
//         }}
//       >
//         Add Park
//       </button>
//       <button
//         className={`action-button ${currentElement === "factory" ? "active" : ""}`}
//         onClick={() => {
//           handleButtonClick("factory");
//           addElement("factory"); // Add element on button click
//         }}
//         style={{
//           backgroundColor: currentElement === "factory" ? "red" : "green",
//           borderColor: currentElement === "factory" ? "darkred" : "gray",
//         }}
//       >
//         Add Factory
//       </button>
//       <button
//         className={`action-button ${currentElement === "road" ? "active" : ""}`}
//         onClick={() => {
//           handleButtonClick("road");
//           addElement("road"); // Add element on button click
//         }}
//         style={{
//           backgroundColor: currentElement === "road" ? "red" : "green",
//           borderColor: currentElement === "road" ? "darkred" : "gray",
//         }}
//       >
//         Add Road
//       </button>
//       <button
//                 className={`action-button ${deleteMode ? "active" : ""}`}
//                 onClick={handleDeleteMode}
//                 style={{
//                     backgroundColor: deleteMode ? "red" : "green",
//                     borderColor: deleteMode ? "darkgreen" : "darkred",
//                 }}
//             >
//                 {deleteMode ? "Delete Mode: ON" : "Delete Mode: OFF"}
//             </button>
//     </div>
//   );
// }

// // Main Scene Component
// export default function ThreeScene() {
//   const [elements, setElements] = useState([]);
//   const [currentElement, setCurrentElement] = useState(null);
//   const [deleteMode, setDeleteMode] = useState(false);

//   const {camera} = useThree();
//   // Function to toggle delete mode
//   const handleDeleteMode = () => {
//     setDeleteMode((prev) => !prev);  // Toggle delete mode
//     setCurrentElement(null);
//   };

//   // Function to add an element to the scene
//   const addElement = (type) => {
//     setCurrentElement(type);
//   };

//   // Function to delete an element
//   const deleteElement = (position) => {
//     setElements((prevElements) => {
//       return prevElements.filter(
//         (element) =>
//           Math.abs(element.position[0] - position.x) > 0.1 ||
//           Math.abs(element.position[2] - position.z) > 0.1
//       );
//     });
//   };

//   // Handle Mouse Click for Adding Elements
//   // const onClick = (event, camera, scene) => {

//   //   if (deleteMode) {
//   //     // Delete mode: Remove the clicked object
//   //     const mouse = new THREE.Vector2();
//   //     const raycaster = new THREE.Raycaster();
//   //     const position = new THREE.Vector3();

//   //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//   //     // Set raycaster and cast a ray into the scene
//   //     // raycaster.updateMatrixWorld();
//   //     raycaster.setFromCamera(mouse, camera);
//   //     const intersects = raycaster.intersectObjects(scene.children);

//   //     if (intersects.length > 0) {
//   //       const clickedObject = intersects[0].object;
//   //       deleteElement(clickedObject.position);
//   //     }
//   //     return;
//   //   }

//   const onClick = (event, camera) => { // Removed scene parameter
//     if (deleteMode) {
//         const mouse = new THREE.Vector2();
//         const raycaster = new THREE.Raycaster();
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//         raycaster.setFromCamera(mouse, camera);

//         const meshes = elements.map((element, index) => {
//             let meshRef = React.createRef(); // Create refs
//             return { ref: meshRef, index };
//         });

//         const intersects = raycaster.intersectObjects(
//             elements.map((element, index) => {
//                 let mesh;
//                 if (element.type === "road") {
//                     mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 1), new THREE.MeshStandardMaterial({ color: "gray" }));
//                 } else {
//                     mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: element.color }));
//                 }
//                 mesh.position.set(element.position[0], element.position[1], element.position[2]);
//                 mesh.userData = { index: index }; // Store index for deletion
//                 return mesh;
//             })
//         );

//         if (intersects.length > 0) {
//             const clickedObject = intersects[0].object;
//             const index = clickedObject.userData.index;

//             setElements((prevElements) => prevElements.filter((_, i) => i !== index));
//         }
//         return;
//     }

//     if (!currentElement) return;

//     const mouse = new THREE.Vector2();
//     const raycaster = new THREE.Raycaster();
//     const position = new THREE.Vector3();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObject(new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({visible:false})));

//     if (intersects.length > 0) {
//         position.copy(intersects[0].point);
//         position.y = 2;
//         const color = getColorForElement(currentElement);
//         setElements((prev) => [
//             ...prev,
//             { type: currentElement, position: [position.x, position.y, position.z], color },
//         ]);
//     }
// };

//   // Get color for different types of elements
//   const getColorForElement = (type) => {
//     const colorMap = {
//       home: "green",
//       store: "red",
//       park: "yellow",
//       factory: "gray",
//       road: "gray",
//       default: "blue",
//     };
//     return colorMap[type] || "blue";
//   };


//   // Use Three.js hooks within the Canvas context
//   const center = [0, 2, 0]; // Center of the octagon
//   const radius = 15; // Radius of the octagon
//   // const vertices = generateOctagon(center, radius);

//   // Check for admin access (use environment variable or other method to restrict access)
//   const isAdmin = process.env.NEXT_PUBLIC_ADMIN_ACCESS === "true"; // Set this environment variable for access control

//   return (
//     <div className="flex">
//       {isAdmin && (
//         <div className="panel-container">
//           <Panel handleDeleteMode={handleDeleteMode} addElement={addElement} currentElement={currentElement} deleteMode={deleteMode} setCurrentElement={setCurrentElement} setDeleteMode={setDeleteMode} />
//         </div>
//       )}
//       <div className="h-screen w-full flex items-center justify-center">
//       <Canvas camera={{ position: [30, 30, 30] }} onClick={(e) => onClick(e, useThree().camera)}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} intensity={1} />
//           <GridLines/>
//           {/* <Octagon vertices={vertices} /> */}
          
//           <ClickHandler onElementPlace={(position) => {
//             if (!currentElement) return;

//             const colorMap = {
//               home: "green",
//               store: "red",
//               park: "yellow",
//               factory: "gray",
//               road: "gray",
//               default: "blue",
//             };

//             // Use colorMap directly inside onElementPlace
//             const color = colorMap[currentElement] || colorMap.default;

//             setElements((prev) => [
//               ...prev,
//               { type: currentElement, position: [position.x, position.y, position.z], color: colorMap[currentElement] || "blue" },
//             ]);

//             // setCurrentElement(null);
//           }} />
          
//           {elements.map((element, index) => (
//             element.type === "road" ? (
//               <Road key={index} position={element.position} />
//             ) : (
//               <Block key={index} position={element.position} color={element.color} />
//             )
//           ))}
//           <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//         </Canvas>
//       </div>
//     </div>
//   );
// }

//CODE 2 CITY3 IS IT?
// "use client";
// import { Canvas, useThree, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import React, { useState, useRef } from "react";
// import { GridHelper } from "three";

// extend({ OrbitControls });

// function GridLines() {
//   return <primitive object={new GridHelper(10000, 10000)} position={[0, 0, 0]} />;
// }

// function Block({ position, color }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function Road({ position }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1, 0.2, 15]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// // function CurvedRoad({ start, end }) {
// //   const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
// //   const offset = new THREE.Vector3()
// //     .subVectors(end, start)
// //     .normalize()
// //     .cross(new THREE.Vector3(0, 1, 0))
// //     .multiplyScalar(Math.abs(start.x - end.x) * 0.5);
// //   const controlPoint = new THREE.Vector3().copy(mid).add(offset);

// //   const curve = new THREE.QuadraticBezierCurve3(start, controlPoint, end);
// //   const points = curve.getPoints(20).map((p) => [p.x, p.y, p.z]);

// //   return (
// //     <line>
// //       <bufferGeometry attach="geometry">
// //         <bufferAttribute
// //           attach="attributes-position"
// //           array={new Float32Array(points.flat())}
// //           count={points.length}
// //           itemSize={3}
// //         />
// //       </bufferGeometry>
// //       <lineBasicMaterial attach="material" color="gray" linewidth={5} />
// //     </line>
// //   );
// // }


// function ClickHandler({ onElementPlace }) {
//   const { camera } = useThree();
//   const planeRef = useRef();
//   const [highlightedPosition, setHighlightedPosition] = useState(null);

//   const onClick = () => {
//     if (highlightedPosition) {
//       onElementPlace(highlightedPosition);
//     }
//   };

//   const onPointerMove = (event) => {
//     const mouse = new THREE.Vector2();
//     const raycaster = new THREE.Raycaster();
//     const position = new THREE.Vector3();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObject(planeRef.current);
//     if (intersects.length > 0) {
//       position.copy(intersects[0].point);
//       position.x = Math.floor(position.x) + 0.5;
//       position.z = Math.floor(position.z) + 0.5;
//       position.y = 0.05;
//       setHighlightedPosition(position);
//     }
//   };

//   return (
//     <>
//       {highlightedPosition && (
//         <mesh position={highlightedPosition}>
//           <boxGeometry args={[1, 0.1, 1]} />
//           <meshStandardMaterial color="yellow" opacity={0.5} transparent />
//         </mesh>
//       )}
//       <mesh
//         ref={planeRef}
//         onClick={onClick}
//         onPointerMove={onPointerMove}
//         rotation={[-Math.PI / 2, 0, 0]}
//       >
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial color="white" opacity={0} transparent />
//       </mesh>
//     </>
//   );
// }

// // function Panel({ onAdd, onDeleteMode, deleteMode }) {
// //   const buttons = [
// //     { type: "home", label: "Add Home", color: "green" },
// //     { type: "store", label: "Add Store", color: "red" },
// //     { type: "park", label: "Add Park", color: "yellow" },
// //     { type: "factory", label: "Add Factory", color: "gray" },
// //     { type: "road", label: "Add Road", color: "gray" },
// //     { type: "curvedRoad", label: "Add Curved Road", color: "purple" },
// //   ];

// //   return (
// //     <div className="button-container">
// //       {buttons.map((button) => (
// //         <button
// //           key={button.type}
// //           className="action-button"
// //           onClick={() => onAdd(button.type)}
// //           style={{ backgroundColor: button.color }}
// //         >
// //           {button.label}
// //         </button>
// //       ))}
// //       <button
// //         className={`action-button ${deleteMode ? "active" : ""}`}
// //         onClick={onDeleteMode}
// //         style={{ backgroundColor: deleteMode ? "red" : "green" }}
// //       >
// //         {deleteMode ? "Delete Mode: ON" : "Delete Mode: OFF"}
// //       </button>
// //     </div>
// //   );
// // }
// function Panel({ onAdd, onDeleteMode, deleteMode, currentElement }) {
//   const buttons = [
//     { type: "home", label: "Add Home", color: "green" },
//     { type: "store", label: "Add Store", color: "red" },
//     { type: "park", label: "Add Park", color: "yellow" },
//     { type: "factory", label: "Add Factory", color: "gray" },
//     { type: "road", label: "Add Road", color: "gray" },
//     // { type: "curvedRoad", label: "Add Curved Road", color: "purple" },
//   ];

//   return (
//     <div className="button-container">
//       {buttons.map((button) => (
//         <button
//           key={button.type}
//           className="action-button"
//           onClick={() => onAdd(button.type)}
//           style={{
//             backgroundColor: currentElement === button.type ? "gray" : button.color,
//           }}
//         >
//           {button.label}
//         </button>
//       ))}
//       <button
//         className={`action-button ${deleteMode ? "active" : ""}`}
//         onClick={onDeleteMode}
//         style={{ backgroundColor: deleteMode ? "red" : "green" }}
//       >
//         {deleteMode ? "Delete Mode: ON" : "Delete Mode: OFF"}
//       </button>
//     </div>
//   );
// }



// export default function ThreeScene() {
//   const [elements, setElements] = useState([]);
//   const [currentElement, setCurrentElement] = useState(null);
//   const [deleteMode, setDeleteMode] = useState(false);
//   const [roadStart, setRoadStart] = useState(null);

//   const handleDeleteMode = () => {
//     setDeleteMode((prev) => !prev);
//     setCurrentElement(null);
//     setRoadStart(null);
//   };

//   const handleAdd = (type) => {
//     setCurrentElement(type);
//     setRoadStart(null);
//   };

//   const handleDelete = (position) => {
//     setElements((prev) =>
//       prev.filter(
//         (element) =>
//           Math.abs(element.position[0] - position.x) > 0.1 ||
//           Math.abs(element.position[2] - position.z) > 0.1
//       )
//     );
//   };

//   const handlePlace = (position) => {
//     if (deleteMode) {
//       handleDelete(position);
//       return;
//     }
  
//     if (currentElement === "curvedRoad") {
//       if (!roadStart) {
//         setRoadStart(position.clone());
//       } else {
//         setElements((prev) => [
//           ...prev,
//           { type: "curvedRoad", start: roadStart.clone(), end: position.clone() },
//         ]);
//         setRoadStart(null);
//         setCurrentElement(null); // Only reset for curved roads
//       }
//       return;
//     }
  
//     if (currentElement === "road") {
//       setElements((prev) => [
//         ...prev,
//         { type: "road", position: [position.x, 0.1, position.z] },
//       ]);
//       return; // Keep selection active
//     }
  
//     const colorMap = {
//       home: "green",
//       store: "red",
//       park: "yellow",
//       factory: "gray",
//     };
  
//     setElements((prev) => [
//       ...prev,
//       {
//         type: currentElement,
//         position: [position.x, 0.5, position.z],
//         color: colorMap[currentElement],
//       },
//     ]);
//   };
  
  

//   return (
//     <div className="flex">
//       <div className="panel-container">
//         <Panel
//           onAdd={handleAdd}
//           onDeleteMode={handleDeleteMode}
//           deleteMode={deleteMode}
//           currentElement={currentElement}
//         />
//       </div>
//       <div className="h-screen w-full flex items-center justify-center">
//         <Canvas camera={{ position: [30, 30, 30] }}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} intensity={1} />
//           <GridLines />
//           <ClickHandler onElementPlace={handlePlace} />
//           {elements.map((element, index) =>
//             element.type === "road" ? (
//               <Road key={index} position={element.position} />
//             ) : element.type === "curvedRoad" ? (
//               <CurvedRoad key={index} start={element.start} end={element.end} />
//             ) : (
//               <Block key={index} position={element.position} color={element.color} />
//             )
//           )}
//           <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//         </Canvas>
//       </div>
//     </div>
//   );
// }

//code 3 city
// "use client";
// import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import React, { useState, useRef } from "react";
// import { GridHelper } from "three";

// extend({ OrbitControls });

// // function GridLines() {
// //   return <primitive object={new GridHelper(10000, 10000)} position={[0, 0, 0]} />;
// // }
// function DynamicGridLines() {
//   const { camera } = useThree();
//   const [gridSize, setGridSize] = useState(10000);
  
//   useFrame(() => {
//     // Adjust the grid size based on camera position (for infinite feel)
//     const cameraDistance = camera.position.length();
//     const newGridSize = Math.max(cameraDistance * 2, 10000); // Dynamic grid size based on distance
//     if (newGridSize !== gridSize) {
//       setGridSize(newGridSize);
//     }
//   });


//   return <primitive object={new GridHelper(gridSize, 10000)} position={[0, 0, 0]} />;
// }


// function Block({ position, color }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function Road({ position }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1, 0.2, 15]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// function ClickHandler({ onElementPlace }) {
//   const { camera } = useThree();
//   const planeRef = useRef();
//   const [highlightedPosition, setHighlightedPosition] = useState(null);

//   const onClick = () => {
//     if (highlightedPosition) {
//       onElementPlace(highlightedPosition);
//     }
//   };

//   const onPointerMove = (event) => {
//     const mouse = new THREE.Vector2();
//     const raycaster = new THREE.Raycaster();
//     const position = new THREE.Vector3();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObject(planeRef.current);
//     if (intersects.length > 0) {
//       position.copy(intersects[0].point);
//       position.x = Math.floor(position.x) + 0.5;
//       position.z = Math.floor(position.z) + 0.5;
//       position.y = 0.05;
//       setHighlightedPosition(position);
//     }
//   };

//   return (
//     <>
//       {highlightedPosition && (
//         <mesh position={highlightedPosition}>
//           <boxGeometry args={[1, 0.1, 1]} />
//           <meshStandardMaterial color="yellow" opacity={0.5} transparent />
//         </mesh>
//       )}
//       <mesh
//         ref={planeRef}
//         onClick={onClick}
//         onPointerMove={onPointerMove}
//         rotation={[-Math.PI / 2, 0, 0]}
//       >
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial color="white" opacity={0} transparent />
//       </mesh>
//     </>
//   );
// }

// function Panel({ onAdd, onDeleteMode, deleteMode, currentElement }) {
//   const buttons = [
//     { type: "home", label: "Add Home", color: "green" },
//     { type: "store", label: "Add Store", color: "red" },
//     { type: "park", label: "Add Park", color: "yellow" },
//     { type: "factory", label: "Add Factory", color: "gray" },
//     { type: "road", label: "Add Road", color: "gray" },
//     // { type: "curvedRoad", label: "Add Curved Road", color: "purple" },
//   ];

//   return (
//     <div className="button-container">
//       {buttons.map((button) => (
//         <button
//           key={button.type}
//           className="action-button"
//           onClick={() => onAdd(button.type)}
//           style={{
//             backgroundColor: currentElement === button.type ? "gray" : button.color,
//           }}
//         >
//           {button.label}
//         </button>
//       ))}
//       <button
//         className={`action-button ${deleteMode ? "active" : ""}`}
//         onClick={onDeleteMode}
//         style={{ backgroundColor: deleteMode ? "red" : "green" }}
//       >
//         {deleteMode ? "Delete Mode: ON" : "Delete Mode: OFF"}
//       </button>
//     </div>
//   );
// }

// function AdjustZoomSpeed() {
//   const controls = useRef();

//   useFrame(() =>{
//     if(controls.current){
//       controls.current.zoomSpeed = 2;
//       controls.current.panSpeed =2;
//     }
//   });
//   return <OrbitControls ref={controls}/>;
// }



// export default function ThreeScene() {
//   const [elements, setElements] = useState([]);
//   const [currentElement, setCurrentElement] = useState(null);
//   const [deleteMode, setDeleteMode] = useState(false);
//   const [roadStart, setRoadStart] = useState(null);

//   const handleDeleteMode = () => {
//     setDeleteMode((prev) => !prev);
//     setCurrentElement(null);
//     setRoadStart(null);
//   };

//   const handleAdd = (type) => {
//     setCurrentElement(type);
//     setRoadStart(null);
//   };

//   const handleDelete = (position) => {
//     setElements((prev) =>
//       prev.filter(
//         (element) =>
//           Math.abs(element.position[0] - position.x) > 0.1 ||
//           Math.abs(element.position[2] - position.z) > 0.1
//       )
//     );
//   };

//   const handlePlace = (position) => {
//     if (deleteMode) {
//       handleDelete(position);
//       return;
//     }
  
//     if (currentElement === "curvedRoad") {
//       if (!roadStart) {
//         setRoadStart(position.clone());
//       } else {
//         setElements((prev) => [
//           ...prev,
//           { type: "curvedRoad", start: roadStart.clone(), end: position.clone() },
//         ]);
//         setRoadStart(null);
//         setCurrentElement(null); // Only reset for curved roads
//       }
//       return;
//     }
  
//     if (currentElement === "road") {
//       setElements((prev) => [
//         ...prev,
//         { type: "road", position: [position.x, 0.1, position.z] },
//       ]);
//       return; // Keep selection active
//     }
  
//     const colorMap = {
//       home: "green",
//       store: "red",
//       park: "yellow",
//       factory: "gray",
//     };
  
//     setElements((prev) => [
//       ...prev,
//       {
//         type: currentElement,
//         position: [position.x, 0.5, position.z],
//         color: colorMap[currentElement],
//       },
//     ]);
//   };

//   return (
//     <div className="flex">
//       <div className="panel-container">
//         <Panel
//           onAdd={handleAdd}
//           onDeleteMode={handleDeleteMode}
//           deleteMode={deleteMode}
//           currentElement={currentElement}
//         />
//       </div>
//       <div className="h-screen w-full flex items-center justify-center">
//         <Canvas camera={{ position: [30, 30, 30], far:50000, zoom: 2, fov:75 }}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} intensity={1} />
//           <DynamicGridLines />
//           <ClickHandler onElementPlace={handlePlace} />
//           {elements.map((element, index) =>
//             element.type === "road" ? (
//               <Road key={index} position={element.position} />
//             ) : element.type === "curvedRoad" ? (
//               <CurvedRoad key={index} start={element.start} end={element.end} />
//             ) : (
//               <Block key={index} position={element.position} color={element.color} />
//             )
//           )}
//           <OrbitControls enablePan={true} 
//                          enableZoom={true} 
//                          enableRotate={true} 
//                          minDistance={1} 
//                          maxDistance={50000}
//                          zoomSpeed={2.0}
//                          panSpeed={2.0} />
//         </Canvas>
//       </div>
//     </div>
//   );
// }

//code code new new
// "use client";
// import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import React, { useState, useEffect, useRef } from "react";
// import { GridHelper } from "three";

// extend({ OrbitControls });

// function DynamicGridLines() {
//   const { camera } = useThree();
//   const [gridSize, setGridSize] = useState(10000);
//   const previousCameraDistance = useRef(0);

//   useFrame(() => {
//     const cameraDistance = camera.position.length();
//     const newGridSize = Math.max(cameraDistance * 2, 10000);
//     if (Math.abs(previousCameraDistance.current - cameraDistance) > 100) {
//       if (newGridSize !== gridSize) {
//         setGridSize(newGridSize);
//       }
//       previousCameraDistance.current = cameraDistance;
//     }
//   });

//   return <primitive object={new GridHelper(gridSize, 1000)} position={[0, 0, 0]} />;
// }

// function Block({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={size} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function Road({ position, size }) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={size} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// export default function ThreeScene() {
//   const [elements, setElements] = useState([]);

//   useEffect(() => {
//     const generatedElements = [];
//     const gridSize = 1500;
//     const blockSize = 10; // Adjusted block size
//     const streetWidth = 25; // Much wider streets
//     const maxBuildingHeight = 10;

//     for (let i = -gridSize / 2; i < gridSize / 2; i += blockSize + streetWidth) {
//       for (let j = -gridSize / 2; j < gridSize / 2; j += blockSize + streetWidth) {
//         // Generate Building (occupying the whole grid cell)
//         const randomHeight = Math.random() * maxBuildingHeight + 2;
//         const randomWidth = blockSize;
//         const randomDepth = blockSize;
//         const color = new THREE.Color(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5);

//         generatedElements.push({
//           type: "building",
//           position: [i + blockSize / 2, randomHeight / 2, j + blockSize / 2],
//           color: color.getHex(),
//           size: [randomWidth, randomHeight, randomDepth],
//         });

//         // Generate Horizontal Street
//         if (j + blockSize + streetWidth < gridSize / 2) {
//           generatedElements.push({
//             type: "road",
//             position: [i + blockSize / 2, 0.1, j + blockSize + streetWidth / 2],
//             size: [blockSize, 0.2, streetWidth],
//           });
//         }

//         // Generate Vertical Street
//         if (i + blockSize + streetWidth < gridSize / 2) {
//           generatedElements.push({
//             type: "road",
//             position: [i + blockSize + streetWidth / 2, 0.1, j + blockSize / 2],
//             size: [streetWidth, 0.2, blockSize],
//           });
//         }
//       }
//     }

//     setElements(generatedElements);
//   }, []);

//   return (
//     <div className="h-screen w-full">
//       <Canvas camera={{ position: [50, 50, 50], far: 50000, zoom: 2, fov: 75 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <DynamicGridLines />
//         {elements.map((element, index) => {
//           if (element.type === "road") {
//             return <Road key={index} position={element.position} size={element.size} />;
//           } else if (element.type === "building") {
//             return (
//               <Block
//                 key={index}
//                 position={element.position}
//                 color={element.color}
//                 size={element.size}
//               />
//             );
//           }
//           return null;
//         })}
//         <OrbitControls
//           enablePan={true}
//           enableZoom={true}
//           enableRotate={true}
//           minDistance={1}
//           maxDistance={50000}
//           zoomSpeed={2.0}
//           panSpeed={2.0}
//         />
//       </Canvas>
//     </div>
//   );
// }

//code newest
"use client";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useState, useEffect, useRef } from "react";
import { GridHelper } from "three";

extend({ OrbitControls });

function DynamicGridLines() {
  const { camera } = useThree();
  const [gridSize, setGridSize] = useState(10000);
  const previousCameraDistance = useRef(0);

  useFrame(() => {
    const cameraDistance = camera.position.length();
    const newGridSize = Math.max(cameraDistance * 2, 10000);
    if (Math.abs(previousCameraDistance.current - cameraDistance) > 100) {
      if (newGridSize !== gridSize) {
        setGridSize(newGridSize);
      }
      previousCameraDistance.current = cameraDistance;
    }
  });

  return <primitive object={new GridHelper(gridSize, 1500)} position={[0, 0, 0]} />;
}

function Block({ position, color, size }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Road({ position, size, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function GroundPlane() {
  return (
    <mesh position={[0, -0.1, 0]}>
      <planeGeometry args={[3000, 3000]} />
      <meshStandardMaterial color="darkgray" />
    </mesh>
  );
}

export default function ThreeScene() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const generatedElements = [];
    const gridSize = 1500;
    const blockSize = 10;
    const streetWidth = 20;
    const maxBuildingHeight = 10;
    const sidewalkWidth = 5; // Sidewalk width around the blocks

    for (let i = -gridSize / 2; i <= gridSize / 2 - blockSize; i += blockSize + streetWidth) {
      for (let j = -gridSize / 2; j <= gridSize / 2 - blockSize; j += blockSize + streetWidth) {
        // Generate Building
        const randomHeight = Math.random() * maxBuildingHeight + 2;
        const randomWidth = blockSize;
        const randomDepth = blockSize;
        const color = new THREE.Color(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5);

        generatedElements.push({
          type: "building",
          position: [i + blockSize / 2, randomHeight / 2, j + blockSize / 2],
          color: color.getHex(),
          size: [randomWidth, randomHeight, randomDepth],
        });

        // Create Sidewalks (extend roads for sidewalks)
        const sidewalkOffset = sidewalkWidth / 2;

        // Horizontal Road after the building
        generatedElements.push({
          type: "road",
          position: [i + blockSize / 2, 0.1, j + blockSize + streetWidth / 2 + sidewalkOffset],
          size: [blockSize, 0.2, streetWidth + sidewalkWidth],
          color: "lightgray", // Sidewalk color
        });

        // Vertical Road after the building
        generatedElements.push({
          type: "road",
          position: [i + blockSize + streetWidth / 2 + sidewalkOffset, 0.1, j + blockSize / 2],
          size: [streetWidth + sidewalkWidth, 0.2, blockSize],
          color: "lightgray", // Sidewalk color
        });

        // Horizontal Road before the building
        generatedElements.push({
          type: "road",
          position: [i + blockSize / 2, 0.1, j - streetWidth / 2 - sidewalkOffset],
          size: [blockSize, 0.2, streetWidth + sidewalkWidth],
          color: "lightgray", // Sidewalk color
        });

        // Vertical Road before the building
        generatedElements.push({
          type: "road",
          position: [i - streetWidth / 2 - sidewalkOffset, 0.1, j + blockSize / 2],
          size: [streetWidth + sidewalkWidth, 0.2, blockSize],
          color: "lightgray", // Sidewalk color
        });

        // Regular roads around the sidewalks
        generatedElements.push({
          type: "road",
          position: [i + blockSize / 2, 0.1, j + blockSize + streetWidth / 2],
          size: [blockSize, 0.2, streetWidth],
          color: "gray",
        });

        generatedElements.push({
          type: "road",
          position: [i + blockSize + streetWidth / 2, 0.1, j + blockSize / 2],
          size: [streetWidth, 0.2, blockSize],
          color: "gray",
        });

        generatedElements.push({
          type: "road",
          position: [i + blockSize / 2, 0.1, j - streetWidth / 2],
          size: [blockSize, 0.2, streetWidth],
          color: "gray",
        });

        generatedElements.push({
          type: "road",
          position: [i - streetWidth / 2, 0.1, j + blockSize / 2],
          size: [streetWidth, 0.2, blockSize],
          color: "gray",
        });
      }
    }

    setElements(generatedElements);
  }, []);

  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [50, 50, 50], far: 50000, zoom: 2, fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <DynamicGridLines />
        
        {/* Add the ground plane */}
        <GroundPlane />
        
        {/* Add all elements to the scene */}
        {elements.map((element, index) => {
          if (element.type === "road") {
            return <Road key={index} position={element.position} size={element.size} color={element.color} />;
          } else if (element.type === "building") {
            return (
              <Block
                key={index}
                position={element.position}
                color={element.color}
                size={element.size}
              />
            );
          }
          return null;
        })}
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={1}
          maxDistance={50000}
          zoomSpeed={2.0}
          panSpeed={2.0}
        />
      </Canvas>
    </div>
  );
}


