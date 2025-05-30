import { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function StarField({ count = 1000, radius = 5000 }) {
  const stars = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = radius * (0.8 + Math.random() * 0.2);  // spread

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, [count, radius]);

  return (
    <Points positions={stars} frustumCulled={false}>
      <PointMaterial
        transparent
        color="white"
        size={2}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
