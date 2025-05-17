'use client';

import { RigidBody } from '@react-three/rapier';

export default function MazePhysicsWalls({ grid }) {
  const width = grid[0]?.length || 0;
  const height = grid.length;

  const physicsWalls = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const isOuter = x === 0 || y === 0 || x === width - 1 || y === height - 1;
      if (grid[y][x] === 1 && isOuter) {
        physicsWalls.push([x - width / 2, 5, y - height / 2]);
      }
    }
  }

  return (
    <>
      {physicsWalls.map((pos, i) => (
        <RigidBody 
            key={i} 
            type="fixed" 
            position={pos} 
            colliders="cuboid"
        >
          {/* Optional: invisible physics wall */}
          <mesh visible={false}>
            <boxGeometry args={[1, 10, 1]} />
            <meshStandardMaterial />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}
