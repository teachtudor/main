// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane } from '@react-three/cannon';
// import * as THREE from 'three';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.1, 0],
//     material: { restitution: 0.8 }
//   }));

//   return (
//     <>
//     {/* Add direct light just above the plane */}
//     <directionalLight
//         position={[0, 5, 0]}
//         intensity={1.5}
//         castShadow
//         target-position={[0, 0, 0]}
//       />
//     <ambientLight intensity={0.3} />
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//     </>
//   );
// }

//code 2
'use client';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';
import { useBox } from '@react-three/cannon';
import { useContactMaterial } from '@react-three/cannon';

export default function GroundPlane() {
  const texture = useLoader(THREE.TextureLoader, '/wt.jpg');
  
  const [ref] = useBox(() => ({
    position: [0, -7.5, 0],
    args: [100, 15, 100], // width, height, depth — required for collision shape
    // type: 'Dynamic',
    // mass: 1
    type: 'Static',
    material: 'ground',
  }));

  useContactMaterial('ground', 'player', {
    friction: 0.1,      // ✅ change this value for more or less grip
    restitution: 0.0,   // bounce (keep zero unless needed)
  });



  const [secondPlaneRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -80, 0],
    type: 'Static'
  }));
  

  return (
    <>
    {/* Add direct light just above the plane */}
    <directionalLight
        position={[0,10,0]}
        intensity={5}
        castShadow
        target-position={[0, 0, 0]}
      />
    <ambientLight intensity={1} />
    
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[100, 15, 100]} />
      <meshStandardMaterial map={texture} color="#fff5b5"  />
    </mesh>
    <mesh ref={secondPlaneRef} castShadow >
      <planeGeometry args={[300, 300]} />
      <meshStandardMaterial color="#222" side={THREE.DoubleSide} />
    </mesh>
    </>
  );
}

// 'use client';
// import { useLoader } from '@react-three/fiber';
// import { usePlane } from '@react-three/cannon';
// import * as THREE from 'three';

// export default function GroundPlane() {
//   const texture = useLoader(THREE.TextureLoader, '/wt.jpg');

//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.01, 0], // slightly below 0 to catch objects
//     type: 'Static'
//   }));

//   return (
//     <>
//       <ambientLight intensity={1} />
//       <directionalLight
//         position={[0, 10, 0]}
//         intensity={5}
//         castShadow
//       />
//       <mesh ref={ref} receiveShadow>
//         <planeGeometry args={[300, 300]} />
//         <meshStandardMaterial map={texture} color="#fff5b5" side={THREE.DoubleSide} />
//       </mesh>
//     </>
//   );
// }
