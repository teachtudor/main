// GroundPlane.js
'use client';

import { RigidBody } from '@react-three/rapier';

export default function GroundPlane() {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[10000, 10000]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </RigidBody>
  );
}

