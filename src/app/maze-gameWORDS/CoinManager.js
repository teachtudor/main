// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { useStore } from './store';

// // ✅ Global interaction detection
// let hasInteracted = false;
// if (typeof window !== 'undefined') {
//   const unlock = () => {
//     hasInteracted = true;
//     window.removeEventListener('click', unlock);
//     window.removeEventListener('touchstart', unlock);
//   };
//   window.addEventListener('click', unlock);
//   window.addEventListener('touchstart', unlock);
// }

// // ✅ Load coin sound
// const loadSound = (src, volume = 1.0) => {
//   if (typeof Audio === 'undefined') return null;
//   const audio = new Audio(src);
//   audio.volume = volume;
//   return audio;
// };
// const coinSound = loadSound('/maze-assets/sounds/coin.mp3', 0.8);

// export default function CoinManager({ characterRef, mazePath }) {
//   const { scene } = useGLTF('/maze-assets/models/coin.glb');
//   const coins = useRef([]);
//   const [collected, setCollected] = useState(new Set());
//   const addCoins = useStore((state) => state.addCoins);

//   // ✅ Place a coin every 1000 steps
//   useEffect(() => {
//     if (!mazePath || !mazePath.length) return;
//     const coinInterval = 1000;
//     coins.current = mazePath
//       .filter((_, index) => index % coinInterval === 0)
//       .map(([x, z], i) => ({
//         id: `coin-${i}`,
//         position: new THREE.Vector3(x, 0.1, z),
//       }));
//   }, [mazePath]);

//   // ✅ Collision + sound logic
//   useFrame(() => {
//     if (!characterRef?.current) return;
//     const playerPos = characterRef.current.position;

//     for (const coin of coins.current) {
//       if (collected.has(coin.id)) continue;
//       if (playerPos.distanceTo(coin.position) < 0.6) {
//         collected.add(coin.id);
//         setCollected(new Set(collected));
//         addCoins(1);
//         if (hasInteracted) {
//           coinSound?.play().catch((e) =>
//             console.warn('🔇 Coin sound blocked:', e.message)
//           );
//         }
//       }
//     }
//   });

//   return (
//     <>
//       {coins.current.map(({ id, position }) =>
//         !collected.has(id) ? (
//           <primitive
//             key={id}
//             object={scene.clone()}
//             position={position.toArray()}
//             scale={[0.5, 0.5, 0.5]}
//           />
//         ) : null
//       )}
//     </>
//   );
// }

//code 2 lags like crazy
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { useStore } from './store';

// // ✅ Global interaction unlock
// let hasInteracted = false;
// if (typeof window !== 'undefined') {
//   const unlock = () => {
//     hasInteracted = true;
//     window.removeEventListener('click', unlock);
//     window.removeEventListener('touchstart', unlock);
//   };
//   window.addEventListener('click', unlock);
//   window.addEventListener('touchstart', unlock);
// }

// // ✅ Load coin sound
// const loadSound = (src, volume = 1.0) => {
//   if (typeof Audio === 'undefined') return null;
//   const audio = new Audio(src);
//   audio.volume = volume;
//   return audio;
// };
// const coinSound = loadSound('/maze-assets/sounds/coin.mp3', 0.8);

// export default function CoinManager({ characterRef, mazePath }) {
//   const coins = useRef([]);
//   const [collected, setCollected] = useState(new Set());
//   const addCoins = useStore((state) => state.addCoins);

//   // ✅ Randomize 10 coins every 100 steps
//   useEffect(() => {
//     if (!mazePath || mazePath.length < 100) return;

//     const coinSpacing = 100;
//     const coinsPerGroup = 10;
//     const groups = Math.floor(mazePath.length / coinSpacing);
//     const placed = new Set();

//     const result = [];

//     for (let g = 0; g < groups; g++) {
//       const start = g * coinSpacing;
//       const end = Math.min(start + coinSpacing, mazePath.length);
//       let count = 0;

//       while (count < coinsPerGroup) {
//         const i = Math.floor(Math.random() * (end - start)) + start;
//         if (placed.has(i)) continue;
//         placed.add(i);

//         const [x, z] = mazePath[i];
//         result.push({
//           id: `coin-${g}-${count}`,
//           position: new THREE.Vector3(x, 0.1, z),
//           rotation: Math.random() * Math.PI * 2
//         });

//         count++;
//       }
//     }

//     coins.current = result;
//   }, [mazePath]);

//   // ✅ Coin collision + coin sound
//   useFrame((state, delta) => {
//     if (!characterRef?.current) return;
//     const playerPos = characterRef.current.position;

//     for (const coin of coins.current) {
//       if (collected.has(coin.id)) continue;
//       if (playerPos.distanceTo(coin.position) < 0.6) {
//         collected.add(coin.id);
//         setCollected(new Set(collected));
//         addCoins(1);

//         if (hasInteracted) {
//           coinSound?.play().catch((e) =>
//             console.warn('🔇 Coin sound blocked:', e.message)
//           );
//         }
//       }
//     }
//   });

//   // ✅ Spin animation
//   useFrame((state, delta) => {
//     for (const coin of coins.current) {
//       coin.rotation = (coin.rotation || 0) + delta * 4;
//     }
//   });

//   return (
//     <>
//       {coins.current.map(({ id, position, rotation }) =>
//         !collected.has(id) ? (
//           <mesh
//             key={id}
//             position={position.toArray()}
//             rotation={[Math.PI / 2, rotation, 0]}
//             scale={[0.5, 0.5, 0.1]}
//           >
//             <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
//             <meshStandardMaterial
//               color={'#ffeb3b'}
//               emissive={'#ffd700'}
//               emissiveIntensity={1.5}
//               metalness={0.7}
//               roughness={0.3}
//             />
//           </mesh>
//         ) : null
//       )}
//     </>
//   );
// }

//code 3
'use client';

import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from './store';

// ✅ Global interaction unlock
let hasInteracted = false;
if (typeof window !== 'undefined') {
  const unlock = () => {
    hasInteracted = true;
    window.removeEventListener('click', unlock);
    window.removeEventListener('touchstart', unlock);
  };
  window.addEventListener('click', unlock);
  window.addEventListener('touchstart', unlock);
}

// ✅ Load coin sound
const loadSound = (src, volume = 1.0) => {
  if (typeof Audio === 'undefined') return null;
  const audio = new Audio(src);
  audio.volume = volume;
  return audio;
};
const coinSound = loadSound('/maze-assets/sounds/coin.mp3', 0.8);

export default function CoinManager({ characterRef, mazePath }) {
  const coins = useRef([]);
  const [collected, setCollected] = useState(new Set());
  const addCoins = useStore((state) => state.addCoins);
  const geometry = useRef();
  const material = useRef();
  const frameCount = useRef(0);

  // ✅ Create reusable geometry & material
  if (!geometry.current) {
    geometry.current = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32);
  }
  if (!material.current) {
    material.current = new THREE.MeshStandardMaterial({
      color: '#ffeb3b',
      emissive: '#ffd700',
      emissiveIntensity: 1.5,
      metalness: 0.7,
      roughness: 0.3,
    });
  }

  // ✅ Randomize 10 coins every 100 steps
  useEffect(() => {
    if (!mazePath || mazePath.length < 100) return;

    const coinSpacing = 100;
    const coinsPerGroup = 10;
    const groups = Math.floor(mazePath.length / coinSpacing);
    const placed = new Set();

    const result = [];

    for (let g = 0; g < groups; g++) {
      const start = g * coinSpacing;
      const end = Math.min(start + coinSpacing, mazePath.length);
      let count = 0;

      while (count < coinsPerGroup) {
        const i = Math.floor(Math.random() * (end - start)) + start;
        if (placed.has(i)) continue;
        placed.add(i);

        const [x, z] = mazePath[i];
        result.push({
          id: `coin-${g}-${count}`,
          position: new THREE.Vector3(x, 0.1, z),
          rotation: Math.random() * Math.PI * 2,
        });

        count++;
      }
    }

    coins.current = result;
  }, [mazePath]);

  // ✅ Spin + collision every few frames
  useFrame((_, delta) => {
    if (!characterRef?.current) return;

    frameCount.current++;
    const doCollision = frameCount.current % 3 === 0;
    const playerPos = characterRef.current.position;

    for (const coin of coins.current) {
      // Spin coin
      coin.rotation = (coin.rotation || 0) + delta * 4;

      // Throttled collision check
      if (doCollision && !collected.has(coin.id)) {
        if (playerPos.distanceTo(coin.position) < 0.6) {
          collected.add(coin.id);
          setCollected(new Set(collected));
          addCoins(1);

          if (hasInteracted) {
            coinSound?.play().catch((e) =>
              console.warn('🔇 Coin sound blocked:', e.message)
            );
          }
        }
      }
    }
  });

  return (
    <>
      {coins.current.map(({ id, position, rotation }) =>
        !collected.has(id) ? (
          <mesh
            key={id}
            position={position.toArray()}
            rotation={[Math.PI / 2, rotation, 0]}
            scale={[0.5, 0.5, 0.1]}
            geometry={geometry.current}
            material={material.current}
          />
        ) : null
      )}
    </>
  );
}
