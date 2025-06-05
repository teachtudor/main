// 'use client'

// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, Html } from '@react-three/drei'
// import { useRef, useState } from 'react'

// export default function TestSite() {
//   return (
//     <div className="w-screen h-screen bg-black">
//       <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[0, 10, 5]} intensity={1} />
//         <OrbitControls enableZoom enablePan enableRotate />
//         <RotatingPlane />
//       </Canvas>
//     </div>
//   )
// }

// function RotatingPlane() {
//   const ref = useRef()

//   const initialSheets = [
//     { id: 0, title: 'VR Hub', color: 'from-purple-900 to-indigo-800' },
//     { id: 1, title: 'Music Zone', color: 'from-pink-800 to-red-500' },
//     { id: 2, title: 'Art Space', color: 'from-blue-800 to-cyan-600' },
//     { id: 3, title: 'Gamers Den', color: 'from-green-800 to-lime-600' },
//     { id: 4, title: 'Sci-Tech', color: 'from-yellow-600 to-orange-500' }
//   ]

//   const [sheets, setSheets] = useState(initialSheets)

//   useFrame((_, delta) => {
//     if (ref.current) {
//       ref.current.rotation.z += delta * 0.0
//     }
//   })

//   const handleClick = (id) => {
//     const clicked = sheets.find((s) => s.id === id)
//     const others = sheets.filter((s) => s.id !== id)
//     setSheets([clicked, ...others]) // Move clicked sheet to top of render order
//     console.log('id', id);
//   }

//   return (
//     <group ref={ref} position={[0, 0, 0]}>
//       <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//         <planeGeometry args={[15, 5]} />
//         <meshStandardMaterial color="#222" />
//       </mesh>

//       {sheets.map((sheet, i) => (
//         <Html
//           key={sheet.id}
//           transform
//           position={[0, 0.01 + i * 0.1, i * 0.05]} // stacked in height AND z-depth
//           rotation={[-Math.PI / 2, 0, 0]}
//           distanceFactor={2.0}
//           onPointerDown={(e) => {
//             e.stopPropagation()
//             handleClick(sheet.id)
//           }}
//           style={{
//             transition: 'all 0.3s ease',
//             cursor: 'pointer',
//             zIndex: sheets.length - i // highest zIndex for top
//           }}
//         >
//           <div
//             className={`bg-gradient-to-br ${sheet.color} text-white w-[800px] h-[500px] p-6 flex gap-4 text-sm rounded-xl shadow-lg`}
//           >
//             {/* Sidebar */}
//             <div className="w-1/5 space-y-4">
//               <div className="text-xl font-bold">Explore</div>
//               <div className="space-y-2">
//                 {['Home', 'Music', 'Gaming', 'Education', 'Science & Tech'].map(
//                   (item, idx) => (
//                     <div key={idx} className="hover:font-semibold cursor-pointer">
//                       {item}
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Main */}
//             <div className="flex-1 space-y-4">
//               <div className="bg-white text-black rounded p-4 text-center text-xl font-semibold">
//                 {sheet.title}
//               </div>

//               <div>
//                 <div className="font-bold mb-1">Featured Community</div>
//                 <div className="grid grid-cols-2 gap-2">
//                   <Card title="Topic A" desc="Some cool content." />
//                   <Card title="Topic B" desc="Other great stuff." />
//                 </div>
//               </div>

//               <div>
//                 <div className="font-bold mb-1">Popular Right Now</div>
//                 <div className="grid grid-cols-2 gap-2">
//                   <Card title="Trend A" desc="Hot discussion." />
//                   <Card title="Trend B" desc="Join the chat." />
//                 </div>
//               </div>
//             </div>

//             {/* Right Sidebar */}
//             <div className="w-1/4 space-y-4">
//               <div className="text-center">
//                 <img
//                   src={`https://i.pravatar.cc/150?img=${sheet.id + 3}`}
//                   alt="avatar"
//                   className="rounded-full w-12 h-12 mx-auto"
//                 />
//                 <div className="mt-1 font-bold text-sm">User #{sheet.id + 1}</div>
//               </div>

//               <div>
//                 <div className="font-bold text-sm mb-1">New Members</div>
//                 <div className="space-y-1 text-xs">
//                   <div>Someone joined</div>
//                   <div>Another joined</div>
//                 </div>
//               </div>

//               <div>
//                 <div className="font-bold text-sm mb-1">Recent Activity</div>
//                 <div className="space-y-1 text-xs">
//                   <div>Chat opened</div>
//                   <div>Post liked</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Html>
//       ))}
//     </group>
//   )
// }

// function Card({ title, desc }) {
//   return (
//     <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded text-xs">
//       <div className="font-semibold">{title}</div>
//       <div className="text-gray-200">{desc}</div>
//     </div>
//   )
// }

//code 2
// 'use client'

// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import { useRef, useState } from 'react'
// import * as THREE from 'three'

// export default function TestSite() {
//   return (
//     <div className="w-screen h-screen bg-black">
//       <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[0, 10, 5]} intensity={1} />
//         <OrbitControls enableZoom enablePan enableRotate />
//         <RotatingPlane />
//       </Canvas>
//     </div>
//   )
// }

// const initialSheets = [
//   { id: 0, title: 'VR Hub', color: new THREE.Color('#7e22ce') },
//   { id: 1, title: 'Music Zone', color: new THREE.Color('#db2777') },
//   { id: 2, title: 'Art Space', color: new THREE.Color('#2563eb') },
//   { id: 3, title: 'Gamers Den', color: new THREE.Color('#22c55e') },
//   { id: 4, title: 'Sci-Tech', color: new THREE.Color('#f59e0b') }
// ]

// function RotatingPlane() {
//   const ref = useRef()
//   const [sheets, setSheets] = useState(initialSheets)
//   const positionsRef = useRef({})
//   const hoveredRef = useRef(null)

//   useFrame((_, delta) => {
//     sheets.forEach((sheet, index) => {
//       const pos = positionsRef.current[sheet.id]
//       if (!pos) return

//       const isHovered = hoveredRef.current === sheet.id
//       const targetZ = isHovered ? 1 : index * 0.05
//       const targetY = 0.01 + index * 0.12

//       pos.z += (targetZ - pos.z) * 0.1
//       pos.y += (targetY - pos.y) * 0.1
//     })
//   })

//   const handleClick = (id) => {
//     const clicked = sheets.find((s) => s.id === id)
//     const others = sheets.filter((s) => s.id !== id)
//     setSheets([clicked, ...others])
//   }

//   const handlePointerEnter = (id) => {
//     hoveredRef.current = id
//     document.body.style.cursor = 'pointer'
//   }

//   const handlePointerLeave = () => {
//     hoveredRef.current = null
//     document.body.style.cursor = 'default'
//   }

//   return (
//     <group ref={ref} position={[0, 0, 0]}>
//       <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//         <planeGeometry args={[15, 5]} />
//         <meshStandardMaterial color="#222" />
//       </mesh>

//       {sheets.map((sheet, i) => {
//         if (!positionsRef.current[sheet.id]) {
//           positionsRef.current[sheet.id] = {
//             y: 0.01 + i * 0.12,
//             z: i * 0.05
//           }
//         }

//         const pos = positionsRef.current[sheet.id]

//         return (
//           <group
//             key={sheet.id}
//             position={[0, pos.y, pos.z]}
//             rotation={[-Math.PI / 2, 0, 0]}
//           >
//             <mesh
//               onPointerEnter={() => handlePointerEnter(sheet.id)}
//               onPointerLeave={handlePointerLeave}
//               onClick={(e) => {
//                 e.stopPropagation()
//                 handleClick(sheet.id)
//               }}
//             >
//               <planeGeometry args={[2.5, 1.5]} />
//               <meshStandardMaterial
//                 color={sheet.color}
//                 metalness={0.3}
//                 roughness={0.4}
//               />
//             </mesh>

//             <TextLabel text={sheet.title} />
//           </group>
//         )
//       })}
//     </group>
//   )
// }

// function TextLabel({ text }) {
//   const canvas = document.createElement('canvas')
//   canvas.width = 256
//   canvas.height = 64
//   const ctx = canvas.getContext('2d')
//   ctx.fillStyle = '#ffffff'
//   ctx.font = 'bold 28px sans-serif'
//   ctx.textAlign = 'center'
//   ctx.fillText(text, 128, 42)

//   const texture = new THREE.CanvasTexture(canvas)
//   texture.needsUpdate = true

//   return (
//     <mesh position={[0, 0, 0.01]}>
//       <planeGeometry args={[1.5, 0.375]} />
//       <meshBasicMaterial transparent map={texture} />
//     </mesh>
//   )
// }

//code 3
// "use client";

// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
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
//   { title: 'Test Site', path: '/testSite', color: '#10b981' }
// ];

// export default function CarouselScene() {
//   return (
//     <div className="w-screen h-screen bg-black">
//       <Canvas shadows camera={{ position: [0, 2, 10], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           position={[0, 10, 5]} 
//           intensity={1} />
//         <OrbitControls enableZoom={true} enablePan={true} enableRotate />
//         <CarouselCards />
//       </Canvas>
//     </div>
//   );
// }

// function CarouselCards() {
//   const radius = 5;
//   const ref = useRef();
//   const router = useRouter();
//   const [active, setActive] = useState(null);

//   const positions = useMemo(() => {
//     return pages.map((_, i) => {
//       const angle = (i / pages.length) * Math.PI * 2;
//       return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
//     });
//   }, []);

//   // useFrame(() => {
//   //   if (ref.current) {
//   //     ref.current.rotation.y += 0.000;
//   //   }
//   // });

//   useFrame(() => {
//   if (ref.current) {
//     pages.forEach((_, i) => {
//       const card = ref.current.children[i];
//       if (card) {
//         card.lookAt(0, 2, 10); // camera position
//       }
//     });
//   }
// });


//   return (
//     <group ref={ref}>
//       {pages.map((page, i) => (
//         <group
//           key={page.path}
//           position={positions[i]}
//           // lookAt={[0, 0, 0]}
//           ref={el => el && el.lookAt(0, 2, 10)} // camera position
//           castShadow receiveShadow
//         >
//           <mesh
//             onPointerEnter={() => (document.body.style.cursor = 'pointer')}
//             onPointerLeave={() => (document.body.style.cursor = 'default')}
//             onClick={() => router.push(page.path)}
//             castShadow receiveShadow
//           >
//             <planeGeometry args={[2.5, 1.5]} />
//             <meshStandardMaterial
//               color={page.color}
//               metalness={0.3}
//               roughness={0.4}
//               side={THREE.DoubleSide}
//             />
//           </mesh>
//           <TextLabel text={page.title} />
//         </group>
//       ))}
//     </group>
//   );
// }

// function TextLabel({ text }) {
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
//     tex.needsUpdate = true; // 🔥 This fixes the intermittent render bug
//     tex.anisotropy = 16; // Optional: improve clarity
//     return tex;
//   }, [canvas]);

//   return (
//     <mesh position={[0, 0, 0.11]} renderOrder={1}>
//       {/* <planeGeometry args={[1.5, 0.375]} /> */}
//       <boxGeometry args={[2.5, 1.5, 0.1]} />

//       <meshBasicMaterial
//         transparent
//         map={texture}
//         depthWrite={true}
//         depthTest={true}
//       />
//     </mesh>
//   );
// }

//code 4
"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';


const pages = [
  { title: 'Home', path: '/home', color: '#7e22ce' },
  { title: 'Tools', path: '/Tools', color: '#db2777' },
  { title: 'Places', path: '/PLACES', color: '#2563eb' },
  { title: 'TPR', path: '/TPRGravitytest2', color: '#22c55e' },
  { title: 'ET', path: '/ET', color: '#f59e0b' },
  { title: 'Amazon Maze', path: '/maze-gameWL', color: '#ec4899' },
  { title: 'Mirror Maze', path: '/maze-gameWORDS', color: '#3b82f6' },
  { title: 'Test Site', path: '/testSite', color: '#10b981' }
];

export default function CarouselScene() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas 
        shadows 
        camera={{ position: [0, 5, 10], fov: 60 }}
        >
        <ambientLight intensity={7} />
        <directionalLight
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          position={[0, 10, 5]}
          intensity={2}
        />
        <OrbitControls enableZoom enablePan enableRotate />
        <CarouselCards />
      </Canvas>
    </div>
  );
}

function CarouselCards() {
  const radius = 5;
  const ref = useRef();
  const router = useRouter();

  // Track hovered card index (-1 = none)
  const [hoveredIndex, setHoveredIndex] = useState(-1);


  const positions = useMemo(() => {
  const offset = (2 / pages.length) * Math.PI * 2;
  return pages.map((_, i) => {
    const angle = (i / pages.length) * Math.PI * 2 + offset;
    return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
  });
}, []);

  useFrame(() => {
    if (ref.current) {
      pages.forEach((_, i) => {
        const card = ref.current.children[i];
        if (card) {
          card.lookAt(0, 5, 10); // keep facing camera

          // Animate lift on Y axis
          const targetY = (hoveredIndex === i) ? 1 : 0; // lift by 1 unit
          card.position.y += (targetY - card.position.y) * 0.1; // smooth lerp
        }
      });
    }
  });

  return (
    <group ref={ref}>
      {pages.map((page, i) => (
        <group
          key={page.path}
          position={positions[i]} // base X, Z
          // initial Y is 0 but useFrame animates it
          ref={el => el && el.lookAt(0, 2, 10)}
          castShadow
          receiveShadow
          onPointerEnter={() => {
            setHoveredIndex(i);
            document.body.style.cursor = 'pointer';
          }}
          onPointerLeave={() => {
            setHoveredIndex(-1);
            document.body.style.cursor = 'default';
          }}
          onClick={() => router.push(page.path)}
        >
          <RoundedBox
            args={[2.5, 1.5, 0.1]}
            radius={0.1}
            smoothness={4}
            castShadow
            receiveShadow
          >
            <meshPhysicalMaterial
              color={page.color}
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              reflectivity={1}
              side={THREE.FrontSide}
            />
          </RoundedBox>
          <TextLabel text={page.title} />
        </group>
      ))}
    </group>
  );
}


function TextLabel({ text }) {
  const { gl } = useThree();
  const canvas = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillText(text, c.width / 2, c.height / 2);
    return c;
  }, [text]);

  const texture = useMemo(() => {
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    // tex.anisotropy = 16;
    tex.anisotropy = gl.capabilities.getMaxAnisotropy();    
    return tex;
  }, [canvas]);

  return (
    <mesh position={[0, 0, 0.11]} renderOrder={1}>
      <planeGeometry args={[1.5, 0.375]} />
      <meshBasicMaterial
        transparent
        map={texture}
        depthWrite={true}
        depthTest={true}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}
