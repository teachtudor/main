// 'use client';

// import { useMemo } from 'react';
// import { useTexture } from '@react-three/drei';

// export default function ProductBillboards({ mazePath = [], products = [] }) {
//   const selectedProducts = useMemo(() => {
//     const subset = products.filter((_, i) => i % 5 === 0);
//     return subset.slice(0, mazePath.length); // Match available mazePath
//   }, [products, mazePath]);

//   const textures = useTexture(selectedProducts.map(p => p.imageUrl));

//   // Pick 20% of the maze path to substitute with billboards
//   const billboardData = useMemo(() => {
//     if (!mazePath || mazePath.length === 0) return [];

//     const count = Math.min(selectedProducts.length, Math.floor(mazePath.length * 0.2));
//     const chosenIndices = new Set();
//     while (chosenIndices.size < count) {
//       chosenIndices.add(Math.floor(Math.random() * mazePath.length));
//     }

//     return [...chosenIndices].map((i) => {
//       const [x, y] = mazePath[i];
//       return {
//         pos: [x + 0.5, 0.4, y + 0.5], // Y should match the height of your blocks
//         texture: textures[index],
//         url: selectedProducts[i].productUrl,
//       };
//     });
//   }, [mazePath, textures, selectedProducts]);

//   return (
//     <>
//       {billboardData.map((data, i) => (
//         <mesh
//           key={i}
//           position={data.pos}
//           rotation={[0, Math.random() * Math.PI * 2, 0]}
//           onClick={() => window.open(data.url, '_blank')}
//         >
//           <boxGeometry args={[1, 0.8, 1]} />
//           <meshBasicMaterial map={data.texture} transparent />
//         </mesh>
//       ))}
//     </>
//   );
// }


//code 2
// 'use client';

// import { useMemo } from 'react';
// import { useTexture } from '@react-three/drei';

// export default function ProductBillboards({ mazePath = [], products = [] }) {
//   // Select a subset of products (e.g., 1 in 5) to reduce load
//   const selectedProducts = useMemo(() => {
//     const subset = products.filter((_, i) => i % 5 === 0);
//     return subset.slice(0, mazePath.length); // Limit to maze path size
//   }, [products, mazePath]);

//   // Load textures
//   const textures = useTexture(selectedProducts.map((p) => p.imageUrl));

//   // Prepare billboard data for a random subset of mazePath
//   const billboardData = useMemo(() => {
//     if (!mazePath.length || !selectedProducts.length) return [];

//     const count = Math.min(selectedProducts.length, Math.floor(mazePath.length * 0.2));
//     const chosenIndices = Array.from({ length: mazePath.length }, (_, i) => i)
//       .sort(() => 0.5 - Math.random())
//       .slice(0, count);

//     return chosenIndices.map((mazeIndex, i) => {
//       const [x, y] = mazePath[mazeIndex];
//       const product = selectedProducts[i];
//       const texture = textures[i];

//       if (!product || !texture) return null;

//       return {
//         pos: [x + 0.5, 0.4, y + 0.5],
//         texture,
//         url: product.productUrl,
//       };
//     }).filter(Boolean); // Remove nulls
//   }, [mazePath, textures, selectedProducts]);

//   return (
//     <>
//       {billboardData.map((data, i) => (
//         <mesh
//           key={i}
//           position={data.pos}
//           rotation={[0, Math.random() * Math.PI * 2, 0]}
//           onClick={() => window.open(data.url, '_blank')}
//         >
//           <boxGeometry args={[1,0.8,1]} />
//           <meshBasicMaterial map={data.texture} transparent />
//         </mesh>
//       ))}
//     </>
//   );
// }


//code 3 huge bill boards sucks
// 'use client';

// import { useMemo, useState, useEffect, useRef } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';

// // Preload and validate image URLs
// function preloadValidImages(products, callback) {
//   const valid = [];
//   let checked = 0;

//   products.forEach((product) => {
//     const img = new Image();
//     img.onload = () => {
//       valid.push(product);
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.onerror = () => {
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.src = product.imageUrl;
//   });
// }

// export default function ProductBillboards({ mazePath = [], products = [] }) {
//   const [validProducts, setValidProducts] = useState([]);
//   const billboardRef = useRef(null); // ✅ persistent billboard data

//   // Filter valid image URLs once
//   useEffect(() => {
//     preloadValidImages(products, (filtered) => {
//       setValidProducts(filtered);
//     });
//   }, [products]);

//   // Generate texture array only once
//   const selectedProducts = useMemo(() => {
//     const filtered = validProducts.filter((_, i) => i % 2 === 0);
//     return filtered.slice(0, mazePath.length);
//   }, [validProducts, mazePath.length]);

//   const textures = useLoader(TextureLoader, selectedProducts.map(p => p.imageUrl));

//   // Lock in billboard data
//   if (!billboardRef.current && mazePath.length && textures.length) {
//     const result = [];
//     const count = Math.min(selectedProducts.length, mazePath.length);

//     for (let i = 0; i < count; i++) {
//       const [x, y] = mazePath[i];
//       result.push({
//         pos: [x + 0.5, 0.6, y + 0.5],
//         texture: textures[i],
//         url: selectedProducts[i].productUrl,
//         rotationY: Math.random() * Math.PI * 2,
//       });
//     }

//     billboardRef.current = result;
//   }

//   const billboardData = billboardRef.current || [];

//   return (
//     <>
//       {billboardData.map((data, i) => (
//         <mesh
//           key={i}
//           position={data.pos}
//           rotation={[0, data.rotationY, 0]}
//           onClick={() => window.open(data.url, '_blank')}
//         >
//           <boxGeometry args={[0.9, 1.1, 0.05]} />
//           <meshBasicMaterial map={data.texture} transparent />
//         </mesh>
//       ))}
//     </>
//   );
// }


//code 4
// 'use client';

// import { useMemo, useState, useEffect, useRef } from 'react';
// import { useLoader, useFrame, useThree } from '@react-three/fiber';
// import { TextureLoader } from 'three';

// function preloadValidImages(products, callback) {
//   const valid = [];
//   let checked = 0;

//   products.forEach((product) => {
//     const img = new Image();
//     img.onload = () => {
//       valid.push(product);
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.onerror = () => {
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.src = product.imageUrl;
//   });
// }

// export default function ProductBillboardCubes({ mazePath = [], products = [] }) {
//   const [validProducts, setValidProducts] = useState([]);
//   const [visibleFlags, setVisibleFlags] = useState([]);
//   const cubeRefs = useRef([]);
//   const { camera } = useThree();

//   useEffect(() => {
//     preloadValidImages(products, (filtered) => {
//       setValidProducts(filtered);
//     });
//   }, [products]);

//   const selectedProducts = useMemo(() => {
//     const filtered = validProducts.filter((_, i) => i % 2 === 0);
//     return filtered.slice(0, mazePath.length);
//   }, [validProducts, mazePath.length]);

//   const textures = useLoader(TextureLoader, selectedProducts.map(p => p.imageUrl));

//   const cubeData = useMemo(() => {
//     if (!mazePath.length || !textures.length || !selectedProducts.length) return [];

//     const result = [];
//     const count = Math.min(selectedProducts.length, mazePath.length);

//     for (let i = 0; i < count; i++) {
//       const [x, y] = mazePath[i];
//       result.push({
//         pos: [x + 0.5, 0.3, y + 0.5],
//         texture: textures[i],
//         url: selectedProducts[i].productUrl,
//         rotationY: Math.random() * Math.PI * 2,
//       });
//     }

//     return result;
//   }, [mazePath, textures, selectedProducts]);

//   // Init visibility flags
//   useEffect(() => {
//     setVisibleFlags(new Array(cubeData.length).fill(false));
//   }, [cubeData.length]);

//   // Reveal cubes only when camera is nearby
//   useFrame(() => {
//     const newFlags = [...visibleFlags];
//     for (let i = 0; i < cubeData.length; i++) {
//       const cube = cubeRefs.current[i];
//       if (!cube) continue;

//       const dx = cube.position.x - camera.position.x;
//       const dz = cube.position.z - camera.position.z;
//       const distSq = dx * dx + dz * dz;

//       if (distSq < 625) newFlags[i] = true; // ~25 units
//     }
//     setVisibleFlags(newFlags);
//   });

//   return (
//     <>
//       {cubeData.map((data, i) => (
//         <mesh
//           key={i}
//           ref={(el) => (cubeRefs.current[i] = el)}
//           position={data.pos}
//           rotation={[0, data.rotationY, 0]}
//           onClick={() => window.open(data.url, '_blank')}
//           visible={visibleFlags[i] || false}
//         >
//           <boxGeometry args={[0.3, 0.3, 0.3]} />
//           <meshBasicMaterial map={data.texture} transparent />
//         </mesh>
//       ))}
//     </>
//   );
// }

//code new blinks like a asshole
// 'use client';

// import { useMemo, useState, useEffect, useRef } from 'react';
// import { useLoader, useFrame, useThree } from '@react-three/fiber';
// import { TextureLoader } from 'three';

// function preloadValidImages(products, callback) {
//   const valid = [];
//   let checked = 0;

//   products.forEach((product) => {
//     const img = new Image();
//     img.onload = () => {
//       valid.push(product);
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.onerror = () => {
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.src = product.imageUrl;
//   });
// }

// export default function ProductBillboardCubes({ mazePath = [], products = [] }) {
//   const [validProducts, setValidProducts] = useState([]);
//   const [visibleFlags, setVisibleFlags] = useState([]);
//   const cubeRefs = useRef([]);
//   const { camera } = useThree();

//   useEffect(() => {
//     preloadValidImages(products, (filtered) => {
//       setValidProducts(filtered);
//     });
//   }, [products]);

//   const selectedProducts = useMemo(() => {
//     const filtered = validProducts.filter((_, i) => i % 2 === 0);
//     return filtered.slice(0, mazePath.length);
//   }, [validProducts, mazePath.length]);

//   const textures = useLoader(TextureLoader, selectedProducts.map(p => p.imageUrl));

//   const cubeData = useMemo(() => {
//     if (!mazePath.length || !textures.length || !selectedProducts.length) return [];

//     const result = [];
//     const count = Math.min(selectedProducts.length, mazePath.length);

//     for (let i = 0; i < count; i++) {
//       const [x, y] = mazePath[i];
//       result.push({
//         pos: [x + 0.5, 0.3, y + 0.5],
//         texture: textures[i],
//         url: selectedProducts[i].productUrl,
//       });
//     }

//     return result;
//   }, [mazePath, textures, selectedProducts]);

//   useEffect(() => {
//     setVisibleFlags(new Array(cubeData.length).fill(false));
//   }, [cubeData.length]);

//   useFrame(() => {
//     const newFlags = [...visibleFlags];
//     for (let i = 0; i < cubeData.length; i++) {
//       const cube = cubeRefs.current[i];
//       if (!cube) continue;

//       const dx = cube.position.x - camera.position.x;
//       const dz = cube.position.z - camera.position.z;
//       const distSq = dx * dx + dz * dz;

//       if (distSq < 625) newFlags[i] = true;
//     }
//     setVisibleFlags(newFlags);
//   });

//   return (
//     <>
//       {cubeData.map((data, i) => (
//         <mesh
//           key={i}
//           ref={(el) => (cubeRefs.current[i] = el)}
//           position={data.pos}
//           rotation={[0, 0, 0]} // Fixed orientation
//           onClick={() => window.open(data.url, '_blank')}
//           visible={visibleFlags[i] || false}
//         >
//           <boxGeometry args={[0.3, 0.3, 0.3]} />
//           <meshBasicMaterial map={data.texture} transparent />
//         </mesh>
//       ))}
//     </>
//   );
// }


//code gemini
// import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
// import { useLoader, useFrame, useThree } from '@react-three/fiber';
// import { TextureLoader } from 'three';

// function preloadValidImages(products, callback) {
//   const valid = [];
//   let checked = 0;

//   products.forEach((product) => {
//     const img = new Image();
//     img.onload = () => {
//       valid.push(product);
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.onerror = () => {
//       checked++;
//       if (checked === products.length) callback(valid);
//     };
//     img.src = product.imageUrl;
//   });
// }

// export default function ProductBillboardCubes({ mazePath = [], products = [] }) {
//   const [validProducts, setValidProducts] = useState([]);
//   const visibleFlags = useRef({}); // Use a ref to store visibility
//   const cubeRefs = useRef([]);
//   const { camera } = useThree();

//   useEffect(() => {
//     preloadValidImages(products, (filtered) => {
//       setValidProducts(filtered);
//     });
//   }, [products]);

//   const selectedProducts = useMemo(() => {
//     const filtered = validProducts.filter((_, i) => i % 2 === 0);
//     return filtered.slice(0, mazePath.length);
//   }, [validProducts, mazePath.length]);

//   const textures = useLoader(TextureLoader, selectedProducts.map(p => p.imageUrl));

//   const cubeData = useMemo(() => {
//     if (!mazePath.length || !textures.length || !selectedProducts.length) return [];

//     const result = [];
//     const count = Math.min(selectedProducts.length, mazePath.length);

//     for (let i = 0; i < count; i++) {
//       const [x, y] = mazePath[i];
//       result.push({
//         pos: [x + 0.5, 0.3, y + 0.5],
//         texture: textures[i],
//         url: selectedProducts[i].productUrl,
//       });
//     }
//     return result;
//   }, [mazePath, textures, selectedProducts]);

//   // Initialize visibleFlags in a more controlled way
//   useEffect(() => {
//     cubeData.forEach((_, i) => {
//       if (visibleFlags.current[i] === undefined) {
//         visibleFlags.current[i] = false;
//       }
//     });
//   }, [cubeData]);


//   useFrame(() => {
//     let changed = false;
//     for (let i = 0; i < cubeData.length; i++) {
//       const cube = cubeRefs.current[i];
//       if (!cube || visibleFlags.current[i]) continue; // If cube doesn't exist or is already visible, skip

//       const dx = cube.position.x - camera.position.x;
//       const dz = cube.position.z - camera.position.z;
//       const distSq = dx * dx + dz * dz;

//       if (distSq < 625) {
//         visibleFlags.current[i] = true; // Set to true
//         changed = true;
//       }
//     }
//     // Force a re-render if something changed.
//     if (changed) {
//         // This is a common pattern to force re-render when using refs for state
//         // You can also use a dummy state variable or a state updater function if you prefer.
//         // For example: setDummyState(prev => !prev);
//         // But the current approach with a ref is more performant if updates are frequent.
//         // The simplest way to trigger re-render after changing a ref is to use a state update
//         // that depends on the ref's content, or a dummy state update.
//         // Here, the visible prop of the mesh will be updated on the next render cycle due to useFrame.
//         // No explicit setState is needed if the visible prop is read directly from the ref.
//         // However, to ensure the UI updates, we'll re-render the component.
//         // For a more robust re-render, especially with a ref, you might need a dummy state.
//         // For now, let's assume the useFrame loop is sufficient to trigger the prop update.
//     }
//   });

//   // Added a small effect to ensure the component re-renders when visibleFlags changes
//   // This is a common pattern to force re-render when you update a ref and need the UI to reflect it.
//   const [_, setDummy] = useState(0);
//   useFrame(() => {
//     let changed = false;
//     for (let i = 0; i < cubeData.length; i++) {
//       const cube = cubeRefs.current[i];
//       if (!cube || visibleFlags.current[i]) continue;

//       const dx = cube.position.x - camera.position.x;
//       const dz = cube.position.z - camera.position.z;
//       const distSq = dx * dx + dz * dz;

//       if (distSq < 625) {
//         visibleFlags.current[i] = true;
//         changed = true;
//       }
//     }
//     if (changed) {
//       // Trigger a re-render if any visibility flag changed
//       setDummy(prev => prev + 1);
//     }
//   });

//   return (
//     <>
//       {cubeData.map((data, i) => (
//         <mesh
//           key={i}
//           ref={(el) => (cubeRefs.current[i] = el)}
//           position={data.pos}
//           rotation={[0, 0, 0]} // Fixed orientation
//           onClick={() => window.open(data.url, '_blank')}
//           visible={visibleFlags.current[i] || false} // Read directly from the ref
//         >
//           <boxGeometry args={[0.3, 0.3, 0.3]} />
//           <meshBasicMaterial map={data.texture} transparent />
//         </mesh>
//       ))}
//     </>
//   );
// }

'use client';

import { useMemo, useEffect, useRef } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

function preloadValidImages(products) {
  return new Promise((resolve) => {
    const valid = [];
    let checked = 0;

    products.forEach((product) => {
      const img = new Image();
      img.onload = () => {
        valid.push(product);
        checked++;
        if (checked === products.length) resolve(valid);
      };
      img.onerror = () => {
        checked++;
        if (checked === products.length) resolve(valid);
      };
      img.src = product.imageUrl;
    });
  });
}

export default function ProductBillboardCubes({ mazePath = [], products = [] }) {
  const { camera } = useThree();
  const cubeRefs = useRef([]);
  const visibilitySet = useRef(new Set());
  const cubeDataRef = useRef([]);

  const initialized = useRef(false); // prevents re-generation

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      (async () => {
        const valid = await preloadValidImages(products);
        const selected = valid.filter((_, i) => i % 2 === 0).slice(0, mazePath.length);
        const textures = await Promise.all(
          selected.map((p) => new Promise((resolve) => {
            const loader = new TextureLoader();
            loader.load(p.imageUrl, resolve, undefined, () => resolve(null));
          }))
        );

        const cubeData = [];
        for (let i = 0; i < selected.length; i++) {
          const [x, y] = mazePath[i];
          if (!textures[i]) continue;
          cubeData.push({
            pos: [x + 0.5, 0.3, y + 0.5],
            texture: textures[i],
            url: selected[i].productUrl
          });
        }

        cubeDataRef.current = cubeData;
      })();
    }
  }, [mazePath, products]);

  useFrame(() => {
    const cubes = cubeDataRef.current;
    for (let i = 0; i < cubes.length; i++) {
      const mesh = cubeRefs.current[i];
      if (!mesh) continue;

      const dx = mesh.position.x - camera.position.x;
      const dz = mesh.position.z - camera.position.z;
      const distSq = dx * dx + dz * dz;
      const shouldBeVisible = distSq < 625;

      if (shouldBeVisible && !visibilitySet.current.has(i)) {
        mesh.visible = true;
        visibilitySet.current.add(i);
      } else if (!shouldBeVisible && visibilitySet.current.has(i)) {
        mesh.visible = false;
        visibilitySet.current.delete(i);
      }
    }
  });

  return (
    <>
      {cubeDataRef.current.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (cubeRefs.current[i] = el)}
          position={data.pos}
          rotation={[0, 0, 0]}
          visible={false}
          onClick={() => window.open(data.url, '_blank')}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshBasicMaterial map={data.texture} transparent />
        </mesh>
      ))}
    </>
  );
}
