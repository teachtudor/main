'use client';
import { useGLTF } from '@react-three/drei';

export default function GLBModel({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      position={position}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}

