'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './GrassShaderMaterial';

export default function SurroundingGrassPlane() {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh
      position={[500, -0.01, 500]} // Slightly below main ground
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[3000, 3000]} />
      <grassShaderMaterial ref={materialRef} />
    </mesh>
  );
}

