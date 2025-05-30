import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import StarSphereShaderMaterial from './StarSphereShaderMaterial';
import * as THREE from 'three';

export default function StarSphere() {
  const matRef = useRef();

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[20000, 20000, 20000]}>
      <sphereGeometry args={[1, 64, 64]} />
      <starSphereShaderMaterial ref={matRef} side={THREE.FrontSide} />
    </mesh>
  );
}
