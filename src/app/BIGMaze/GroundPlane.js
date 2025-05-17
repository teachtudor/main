'use client';

import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export default function GroundPlane() {
  return (
    <RigidBody type="fixed" colliders="cuboid" position={[0, 0.1, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10000, 10000]} />
        <meshStandardMaterial color="#dddddd" side={THREE.DoubleSide} />
      </mesh>
    </RigidBody>
  );
}
