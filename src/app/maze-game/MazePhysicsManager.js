'use client';

import { useEffect, useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

const RADIUS = 12; // how far around player to load colliders

export default function MazePhysicsManager({ grid, targetRef }) {
  const activeRefs = useRef(new Map());

  useFrame(() => {
    if (!targetRef?.current || grid.length === 0) return;

    const px = Math.floor(targetRef.current.position.x);
    const pz = Math.floor(targetRef.current.position.z);

    const neededKeys = new Set();

    for (let dz = -RADIUS; dz <= RADIUS; dz++) {
      for (let dx = -RADIUS; dx <= RADIUS; dx++) {
        const x = px + dx;
        const z = pz + dz;
        const key = `${x},${z}`;

        if (grid[z]?.[x] === 1) {
          neededKeys.add(key);

          if (!activeRefs.current.has(key)) {
            const ref = createWallCollider([x, 5, z]);
            activeRefs.current.set(key, ref);
          }
        }
      }
    }

    // Remove far colliders
    for (const [key, { cleanup }] of activeRefs.current.entries()) {
      if (!neededKeys.has(key)) {
        cleanup();
        activeRefs.current.delete(key);
      }
    }
  });

  return null;
}

function createWallCollider(position) {
  let cleanup = () => {};

  function Wall() {
    const [ref] = useBox(() => ({
      type: 'Static',
      position,
      args: [1, 10, 1],
    }));

    useEffect(() => {
      cleanup = () => ref.current?.parent?.remove(ref.current);
    }, []);

    return <mesh ref={ref} visible={false} />;
  }

  // Use React Portals or batch into scene externally
  // Here we assume it's injected directly into the scene elsewhere

  return { cleanup };
}
