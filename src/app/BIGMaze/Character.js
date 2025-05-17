// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { RigidBody } from '@react-three/rapier';

// export default function Character({ onModelRef }) {
//   const { scene } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const physicsRef = useRef();
//   const [direction, setDirection] = useState(new THREE.Vector3());

//   // Call parent with model ref for camera follow
//   useEffect(() => {
//     if (onModelRef) onModelRef(modelRef);
//   }, [onModelRef]);

//   // WASD input
//   useEffect(() => {
//     const handleKey = (e) => {
//       const dir = new THREE.Vector3();
//       if (e.type === 'keydown') {
//         if (e.key === 'w') dir.z -= 1;
//         if (e.key === 's') dir.z += 1;
//         if (e.key === 'a') dir.x -= 1;
//         if (e.key === 'd') dir.x += 1;
//         setDirection(dir.normalize());
//       } else if (e.type === 'keyup') {
//         setDirection(new THREE.Vector3());
//       }
//     };
//     window.addEventListener('keydown', handleKey);
//     window.addEventListener('keyup', handleKey);
//     return () => {
//       window.removeEventListener('keydown', handleKey);
//       window.removeEventListener('keyup', handleKey);
//     };
//   }, []);

//   useFrame(() => {
//     if (physicsRef.current && direction.lengthSq() > 0) {
//       physicsRef.current.setLinvel({
//         x: direction.x * 4,
//         y: 0,
//         z: direction.z * 4,
//       }, true);
//     }
//   });

//   return (
//     <RigidBody
//       ref={physicsRef}
//       colliders="cuboid"
//       mass={1}
//       position={[0, 1, 0]}
//       linearDamping={2}
//       angularDamping={2}
//       enabledRotations={[false, true, false]}
//     >
//       <primitive ref={modelRef} object={scene} scale={0.05} />
//     </RigidBody>
//   );
// }


//CODE 2
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { RigidBody } from '@react-three/rapier';

// export default function Character({ onModelRef }) {
//   const { scene } = useGLTF('/maze-assets/models/idlePaul.glb');
//   const modelRef = useRef();
//   const physicsRef = useRef();
//   const [direction, setDirection] = useState(new THREE.Vector3());

//   // ✅ Load start position from maze_path.json
//   const [startPos, setStartPos] = useState([0, 1, 0]); // Default if JSON fails

// useEffect(() => {
//     Promise.all([
//         fetch('/maze-assets/maze_path.json').then(res => res.json()),
//         fetch('/maze-assets/maze_grid.json').then(res => res.json())
//     ])
//         .then(([pathData, gridData]) => {
//         if (pathData?.length && gridData?.length) {
//             const [x, y] = pathData[0];
//             const width = gridData[0].length;
//             const height = gridData.length;

//             const offsetX = width % 2 === 0 ? width / 2 : (width - 1) / 2;
//             const offsetZ = height % 2 === 0 ? height / 2 : (height - 1) / 2;

//             setStartPos([x - offsetX, 6, y - offsetZ]);
//         }
//         })
//         .catch(err => console.error('❌ Failed to load maze path or grid:', err));
// }, []);



//   // Expose model ref to parent
//   useEffect(() => {
//     if (onModelRef) onModelRef(physicsRef); // ✅ we now want to follow the physics body
//   }, [onModelRef]);

//   // Movement logic
//   useEffect(() => {
//     const handleKey = (e) => {
//       const dir = new THREE.Vector3();
//       if (e.type === 'keydown') {
//         if (e.key === 'w') dir.z -= 1;
//         if (e.key === 's') dir.z += 1;
//         if (e.key === 'a') dir.x -= 1;
//         if (e.key === 'd') dir.x += 1;
//         setDirection(dir.normalize());
//       } else if (e.type === 'keyup') {
//         setDirection(new THREE.Vector3());
//       }
//     };
//     window.addEventListener('keydown', handleKey);
//     window.addEventListener('keyup', handleKey);
//     return () => {
//       window.removeEventListener('keydown', handleKey);
//       window.removeEventListener('keyup', handleKey);
//     };
//   }, []);

//   useFrame(() => {
//     if (physicsRef.current && direction.lengthSq() > 0) {
//       physicsRef.current.setLinvel({
//         x: direction.x * 4,
//         y: 0,
//         z: direction.z * 4,
//       }, true);
//     }
//   });

//   return (
//     <RigidBody
//       ref={physicsRef}
//       colliders="cuboid"
//       mass={1}
//       position={startPos}
//       linearDamping={2}
//       angularDamping={2}
//       enabledRotations={[false, true, false]}
//     >
//       <primitive ref={modelRef} object={scene} scale={0.05} />
//     </RigidBody>
//   );
// }

//code 3
'use client';

import { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';

export default function Character({ onModelRef }) {
  const { scene } = useGLTF('/maze-assets/models/idlePaul.glb');
  const modelRef = useRef();
  const physicsRef = useRef();
  const [direction, setDirection] = useState(new THREE.Vector3());
  const [startPos, setStartPos] = useState([0, 8, 0]); // default safe height

  useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      child.geometry.center(); // ✅ centers geometry around origin
    }
  });
}, [scene]);

  // ✅ Load maze path + grid, then center character
  useEffect(() => {
    Promise.all([
      fetch('/maze-assets/maze_path.json').then(res => res.json()),
      fetch('/maze-assets/maze_grid.json').then(res => res.json())
    ])
      .then(([pathData, gridData]) => {
        if (pathData?.length && gridData?.length) {
          const [x, y] = pathData[0];
          const width = gridData[0].length;
          const height = gridData.length;

          const offsetX = width % 2 === 0 ? width / 2 : (width - 1) / 2;
          const offsetZ = height % 2 === 0 ? height / 2 : (height - 1) / 2;

          setStartPos([x - offsetX, 8, y - offsetZ]); // Y = 8 to drop safely onto ground
        }
      })
      .catch(err => console.error('❌ Failed to load maze path or grid:', err));
  }, []);

  // ✅ Expose physics body to camera follow
  useEffect(() => {
    if (onModelRef) onModelRef(physicsRef);
  }, [onModelRef]);

  // ✅ WASD movement
  useEffect(() => {
    const handleKey = (e) => {
      const dir = new THREE.Vector3();
      if (e.type === 'keydown') {
        if (e.key === 'w') dir.z -= 1;
        if (e.key === 's') dir.z += 1;
        if (e.key === 'a') dir.x -= 1;
        if (e.key === 'd') dir.x += 1;
        setDirection(dir.normalize());
      } else if (e.type === 'keyup') {
        setDirection(new THREE.Vector3());
      }
    };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('keyup', handleKey);
    };
  }, []);

  // ✅ Sync visual model to physics body
  useFrame(() => {
    if (!physicsRef.current || !modelRef.current) return;

    if (physicsRef.current) {
        const pos = physicsRef.current.translation();
        console.log('Physics position:', pos);
    }
        if (modelRef.current) {
        console.log('Model position:', modelRef.current.position);
    }

    const pos = physicsRef.current.translation();
    const rot = physicsRef.current.rotation();

    // Sync position & rotation
    modelRef.current.position.set(pos.x, pos.y, pos.z);
    modelRef.current.quaternion.set(rot.x, rot.y, rot.z, rot.w);

    if (direction.lengthSq() > 0) {
      physicsRef.current.setLinvel({
        x: direction.x * 4,
        y: 0,
        z: direction.z * 4
      }, true);
    }
  });

  return (
    <RigidBody
      ref={physicsRef}
      colliders="cuboid"
      mass={1}
      position={startPos}
      linearDamping={2}
      angularDamping={2}
      enabledRotations={[false, true, false]}
    >
      <primitive ref={modelRef} object={scene} scale={0.05} />
    </RigidBody>
  );
}
