import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { GlareShaderMaterial } from './glareShaderMaterial';
import * as THREE from 'three';

extend({ GlareShaderMaterial });

const Glare = ({ position = [0, 5, -5], scale = [10, 10, 1], color = 0x00ffff }) => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.elapsedTime;
    }
  });

  return (
    <mesh position={position} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <glareShaderMaterial ref={materialRef} uColor={new THREE.Color(color)} transparent />
    </mesh>
  );
};

export default Glare;
