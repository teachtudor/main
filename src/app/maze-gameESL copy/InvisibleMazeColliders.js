import * as THREE from 'three';

export function generateWallBoxes(grid) {
  const boxes = [];
  const width = grid[0].length;
  const height = grid.length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === 1) {
        const box = new THREE.Box3().setFromCenterAndSize(
          new THREE.Vector3(x - width / 2, 0, y - height / 2),
          new THREE.Vector3(1, 5, 1)
        );
        boxes.push(box);
      }
    }
  }
  return boxes;
}
