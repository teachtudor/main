

//code 10 current 1
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./globals.css";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, url) => {
    setMenuOpen(false); // Close on click
    if (pathname === url) {
      event.preventDefault();
      window.location.reload();
    } else if (typeof window !== "undefined") {
      sessionStorage.removeItem("lastClickTime");
      sessionStorage.removeItem("knownWords");
      sessionStorage.removeItem("unknownWords");
      sessionStorage.removeItem("seenWords");
      sessionStorage.removeItem("timeBetweenClicks");
      sessionStorage.removeItem("levels");
    }
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {[
          ["Home", "/home"],
          // ["Must-see", "/Store"],
          ["Tools", "/Tools"],
          // ["Space", "/Resume"],
          // ["Bouncy Balls", "/contact"],
          ["Places", "/PLACES"],
          // ["TPR", "/TPR"],
          // ["TPR Gravity", "/TPRGravity"],
          // ["TPR Gravity Test", "/TPRGravitytest"],
          ["TPR", "/TPRGravitytest2"],
          ["ET", "/ET"],
          // ["Maze Game", "/maze-game"],
          // ["BIG Maze", "/BIGMaze"],
          ["Amazon Maze", "/maze-gameWL"],
          // ["ESL Maze(in Progress)", "/maze-gameESL"],
          // ["ESL Maze(NEW in Progress)", "/maze-gameESLcopia2"],
          ["Mirror Maze", "/maze-gameWORDS"],
          ["Test Navbar", "/testSite"]
        ].map(([label, path]) => (
          <li key={path}>
            <Link href={path} onClick={(e) => handleNavClick(e, path)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx global>{`
        .navbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: #000;
          padding: 10px 20px;
          border-bottom: 1px solid #333;
          font-family: 'Orbitron', sans-serif;
        }

        .hamburger {
          font-size: 28px;
          color: white;
          cursor: pointer;
          user-select: none;
        }

        .nav-list {
          display: none;
          flex-direction: column;
          list-style: none;
          padding: 10px 0 0;
          margin: 0;
          width: 100%;
        }

        .nav-list.open {
          display: flex;
        }

        .nav-list li {
          margin-bottom: 10px;
        }

        .nav-list li a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 20px;
          font-family: 'Rajdhani', sans-serif;
        }

        .nav-list li a:hover {
          color: silver;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

//code 11 current 2 temp
// "use client";

// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls, RoundedBox } from '@react-three/drei';
// import { useRef, useState, useMemo } from 'react';
// import * as THREE from 'three';
// import { useRouter } from 'next/navigation';

// const pages = [
//   { title: 'Home', path: '/home', color: '#7e22ce' },
//   { title: 'Tools', path: '/Tools', color: '#db2777' },
//   { title: 'Places', path: '/PLACES', color: '#2563eb' },
//   { title: 'TPR', path: '/TPRGravitytest2', color: '#22c55e' },
//   { title: 'ET', path: '/ET', color: '#f59e0b' },
//   { title: 'Amazon Maze', path: '/maze-gameWL', color: '#ec4899' },
//   { title: 'Mirror Maze', path: '/maze-gameWORDS', color: '#3b82f6' },
// ];

// export default function Navbar3D() {
//   return (
//     <div className="w-screen h-screen bg-black">
//       <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
//         <ambientLight intensity={7} />
//         <directionalLight
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           position={[0, 10, 5]}
//           intensity={2}
//         />
//         <OrbitControls enableZoom enablePan enableRotate />
//         <CarouselCards />
//       </Canvas>
//     </div>
//   );
// }

// function CarouselCards() {
//   const radius = 5;
//   const ref = useRef();
//   const router = useRouter();
//   const [hoveredIndex, setHoveredIndex] = useState(-1);

//   const positions = useMemo(() => {
//     const offset = -(1 / pages.length) * Math.PI * 2; // Rotate to bring "Home" forward
//     return pages.map((_, i) => {
//       const angle = (i / pages.length) * Math.PI * 2 + offset;
//       return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
//     });
//   }, []);

//   // useFrame(() => {
//   //   if (ref.current) {
//   //     pages.forEach((_, i) => {
//   //       const card = ref.current.children[i];
//   //       if (card) {
//   //         card.lookAt(0, 5, 10);
//   //         const targetY = hoveredIndex === i ? 1 : 0;
//   //         card.position.y += (targetY - card.position.y) * 0.1;
//   //       }
//   //     });
//   //   }
//   // });
//   // In CarouselCards, remove lookAt or fix it:
// useFrame(() => {
//   if (ref.current) {
//     pages.forEach((_, i) => {
//       const card = ref.current.children[i];
//       if (card) {
//         // Comment out or modify this:
//         // card.lookAt(0, 5, 10);

//         const targetY = hoveredIndex === i ? 1 : 0;
//         card.position.y += (targetY - card.position.y) * 0.1;
//       }
//     });
//   }
// });

//   return (
//     <group ref={ref}>
//       {pages.map((page, i) => (
//         <group key={page.path} position={positions[i]} castShadow receiveShadow>
//           <RoundedBox
//             args={[2.5, 1.5, 0.1]}
//             radius={0.1}
//             smoothness={4}
//             castShadow
//             receiveShadow
//             onPointerEnter={() => {
//               setHoveredIndex(i);
//               document.body.style.cursor = 'pointer';
//             }}
//             onPointerLeave={() => {
//               setHoveredIndex(-1);
//               document.body.style.cursor = 'default';
//             }}
//             // onClick={() => router.push(page.path)}
//             // In RoundedBox onClick:
// onClick={() => {
//   console.log('clicked', page.path);
//   router.push(page.path);
// }}
//           >
//             <meshPhysicalMaterial
//               color={page.color}
//               metalness={0.9}
//               roughness={0.1}
//               clearcoat={1}
//               clearcoatRoughness={0.1}
//               reflectivity={1}
//               side={THREE.FrontSide}
//             />
//           </RoundedBox>
//           <TextLabel text={page.title} />
//         </group>
//       ))}
//     </group>
//   );
// }

// function TextLabel({ text }) {
//   const { gl } = useThree();
//   const canvas = useMemo(() => {
//     const c = document.createElement('canvas');
//     c.width = 256;
//     c.height = 64;
//     const ctx = c.getContext('2d');
//     ctx.fillStyle = '#ffffff';
//     ctx.font = 'bold 28px sans-serif';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.clearRect(0, 0, c.width, c.height);
//     ctx.fillText(text, c.width / 2, c.height / 2);
//     return c;
//   }, [text]);

//   const texture = useMemo(() => {
//     const tex = new THREE.CanvasTexture(canvas);
//     tex.needsUpdate = true;
//     tex.anisotropy = gl.capabilities.getMaxAnisotropy();
//     return tex;
//   }, [canvas]);

//   return (
//     <mesh position={[0, 0, 0.11]} renderOrder={1}>
//       <planeGeometry args={[1.5, 0.375]} />
//       {/* <meshBasicMaterial
//         transparent
//         map={texture}
//         depthWrite={true}
//         depthTest={true}
//         side={THREE.FrontSide}
//       /> */}
//       // In TextLabel component, add alphaTest and disable pointer events
// <meshBasicMaterial
//   transparent
//   map={texture}
//   depthWrite={true}
//   depthTest={true}
//   side={THREE.FrontSide}
//   alphaTest={0.5} // <-- Important to discard transparent pixels
//   // pointerEvents are not native on three.js materials but you can set
//   // 'material.userData' or handle via event handling logic to ignore this mesh
// />

//     </mesh>
//   );
// }
