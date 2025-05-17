//code 1 GroundPlane.js
'use client';

import { useRef } from 'react';
import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

export default function GroundPlane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // horizontal
    position: [0, -2, 0],            // just below wall bases
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10000, 10000]} />
      <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide}/>
    </mesh>
  );
}
