// import * as THREE from 'three';

// export function handleMovement(character, keys) {
//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//   if (!isRunning && !isWalking) return;

//   const walkSpeed = 0.05;
//   const runSpeed = 0.08;

//   const move = (z, speed) => {
//     const direction = new THREE.Vector3(0, 0, z);
//     direction.applyQuaternion(character.quaternion);
//     character.position.add(direction.multiplyScalar(speed));
//   };

//   if (keys['ArrowUp']) move(0.8, walkSpeed);
//   if (keys['r']) move(0.9, runSpeed);
//   if (keys['ArrowDown']) move(-0.8, walkSpeed);
//   if (keys['b']) move(-0.9, runSpeed);

//   if (keys['ArrowLeft']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//     character.quaternion.multiply(q);
//   }

//   if (keys['ArrowRight']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//     character.quaternion.multiply(q);
//   }
// }


//code 2
import * as THREE from 'three';

export function handleMovement(character, keys) {
  // console.log('beginner position', character.position.y);
 
  // Block movement during action animations
  const isLockedAction =
    keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];

  if (isLockedAction) return;

  const isRunning = keys['r'] || keys['b'];
  const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
  if (!isRunning && !isWalking) return;

  const walkSpeed = 0.05;
  // const runSpeed = 0.08;
  const runSpeed = 1;

  const move = (z, speed) => {
    const direction = new THREE.Vector3(0, 0, z);
    direction.applyQuaternion(character.quaternion);
    character.position.add(direction.multiplyScalar(speed));
  };

  if (keys['ArrowUp']) move(0.8, walkSpeed);
  if (keys['r']) move(0.9, runSpeed);
  if (keys['ArrowDown']) move(-0.8, walkSpeed);
  if (keys['b']) move(-0.9, runSpeed);

  // Only apply manual rotation if not using animated turns
  const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
  if (isTurning) {
    if (!keys['r'] && !keys['ArrowUp'] && !keys['ArrowDown'] && !keys['b']) {
      // character is not moving forward or back — assume it's doing turn animation, do NOT rotate
      return;
    }

    // If character is moving AND turning, apply small turn to guide direction
    if (keys['ArrowLeft']) {
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
      character.quaternion.multiply(q);
    }

    if (keys['ArrowRight']) {
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
      character.quaternion.multiply(q);
    }

  }
}


