// src/app/contact.js
import Navbar from '../Navbar';
import '../globals.css';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1></h1>
      <p>Under Construction</p>
    </div>
  );
}

// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useState } from "react";
// import * as THREE from "three";


// function Character({ id, position, color, onClick, isSelected, targetPosition, setPosition }) {
//   const speed = 0.05; // Movement speed
//   const scale = isSelected ? 1.2 : 1; // Slightly scale up the sphere when selected

//   useFrame(() => {
//     if (targetPosition) {
//       const newPos = new THREE.Vector3().fromArray(position);
//       newPos.lerp(new THREE.Vector3().fromArray(targetPosition), speed);
//       setPosition([newPos.x, newPos.y, newPos.z]);

//       // Stop moving when close enough
//       if (newPos.distanceTo(new THREE.Vector3().fromArray(targetPosition)) < 0.05) {
//         setPosition(targetPosition);
//       }
//     }
//   });

//   return (
//     <mesh position={position} onClick={onClick} scale={scale}>
//       <sphereGeometry args={[0.6, 32, 32]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }


// export default function Scene() {
//   const [characters, setCharacters] = useState([
//     { id: 1, position: [-3, 0.6, -3], color: "red", targetPosition: null, isSelected: false },
//     { id: 2, position: [3, 0.6, -3], color: "blue", targetPosition: null, isSelected: false },
//     { id: 3, position: [-3, 0.6, 3], color: "green", targetPosition: null, isSelected: false },
//     { id: 4, position: [3, 0.6, 3], color: "purple", targetPosition: null, isSelected: false },
//     { id: 5, position: [0, 0.6, 0], color: "orange", targetPosition: null, isSelected: false },
//   ]);
//   const [awaitingMove, setAwaitingMove] = useState(false);

//   const handleCharacterClick = (id) => {
//     setCharacters((prevChars) =>
//       prevChars.map((char) =>
//         char.id === id
//           ? { ...char, isSelected: true }
//           : { ...char, isSelected: false }
//       )
//     );
//     setAwaitingMove(true); // Wait for the second click to move
//   };

//   const handleGroundClick = (event) => {
//     if (awaitingMove) {
//       const clickedPoint = event.point;
//       setCharacters((prevChars) =>
//         prevChars.map((char) =>
//           char.isSelected
//             ? { ...char, targetPosition: [clickedPoint.x, 0.6, clickedPoint.z] }
//             : char
//         )
//       );
//       setAwaitingMove(false); // Reset for next selection
//     }
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
//       <Canvas camera={{ position: [0, 6, 10], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <OrbitControls />

//         {/* Ground */}
//         <mesh rotation={[-Math.PI / 2, 0, 0]} onClick={handleGroundClick}>
//           <circleGeometry args={[7, 64]} />
//           <meshStandardMaterial color="gray" side={THREE.DoubleSide} />
//         </mesh>

//         {/* Characters */}
//         {characters.map((char) => (
//           <Character
//             key={char.id}
//             id={char.id}
//             position={char.position}
//             color={char.color}
//             onClick={() => handleCharacterClick(char.id)}
//             isSelected={char.isSelected}
//             targetPosition={char.targetPosition}
//             setPosition={(newPos) =>
//               setCharacters((prev) =>
//                 prev.map((c) => (c.id === char.id ? { ...c, position: newPos } : c))
//               )
//             }
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// }
