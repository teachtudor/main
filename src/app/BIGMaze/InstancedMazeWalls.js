'use client';//InstancedMaze.js

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

export default function InstancedMazeWalls({ grid }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const width = grid[0]?.length || 0;
  const height = grid.length;

  const wallCount = useMemo(() => {
    return grid.flat().filter((v) => v === 1).length;
  }, [grid]);

  useEffect(() => {
    if (!meshRef.current) return;

    let index = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (grid[y][x] !== 1) continue;

        dummy.position.set(x - width / 2, 5, y - height / 2);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(index++, dummy.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [grid, width, height, dummy]);

  return (
    <instancedMesh ref={meshRef} args={[null, null, wallCount]}>
      <boxGeometry args={[1, 10, 1]} />
      <meshStandardMaterial color="#444" />
    </instancedMesh>
  );
}
