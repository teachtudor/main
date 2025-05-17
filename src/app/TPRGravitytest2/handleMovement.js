//code 9
import * as THREE from 'three';

export function handleMovement(ref, api, keys, delta, quat) { // Receive the quat state

  if (!ref || !api || !keys || !quat ) return;

  const lockedKeys = [
    'a', 'b', 'c1', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r1', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'one', 'two', 'three', 'four', 'five', 'six'
  ];
  
  const isLockedAction = lockedKeys.some(key => keys[key]);
  if (isLockedAction) return;
  
  
  const isRunning = keys['r'] || keys['b'];
  const isWalkingForward = keys['ArrowUp'];
  const isWalkingBackward = keys['ArrowDown'];
  const isTurningLeft = keys['ArrowLeft'];
  const isTurningRight = keys['ArrowRight'];

  const walkSpeed = 70;
  const runSpeed = 500;
  const turnSpeed = 0.05; // Adjust as needed

  const currentQuaternion = new THREE.Quaternion(...quat);
  const forwardDirection = new THREE.Vector3(0, 0, 1); // Character's local forward (assuming model faces -Z initially)
  forwardDirection.applyQuaternion(currentQuaternion);
  forwardDirection.y = 0; // Keep movement horizontal
  forwardDirection.normalize();

  const backwardDirection = new THREE.Vector3(0, 0, -1);
  backwardDirection.applyQuaternion(currentQuaternion);
  backwardDirection.y = 0;
  backwardDirection.normalize();

  const currentY = ref.current.velocity?.y ?? 0;

  const velocity = new THREE.Vector3();

  if (keys['ArrowUp']) {
    velocity.copy(forwardDirection).multiplyScalar(walkSpeed);
  } else if (keys['ArrowDown']) {
    velocity.copy(backwardDirection).multiplyScalar(walkSpeed * 0.75);
  } else if (keys['r']) {
    velocity.copy(forwardDirection).multiplyScalar(runSpeed);
  } else if (keys['b']) {
    velocity.copy(backwardDirection).multiplyScalar(runSpeed * 0.75);
  } else {
    velocity.set(0, 0, 0);
  }

  // api.velocity.set(velocity.x, currentY, velocity.z);
  if (velocity.lengthSq() > 0) {
    api.velocity.set(velocity.x, currentY, velocity.z);
  }
  
  if (isTurningLeft) {
    const angle = turnSpeed;
    const deltaQuaternion = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      angle
    );
    const newQuaternion = currentQuaternion.clone().multiply(deltaQuaternion);
    api.quaternion.set(newQuaternion.x, newQuaternion.y, newQuaternion.z, newQuaternion.w);
  }

  if (isTurningRight) {
    const angle = -turnSpeed;
    const deltaQuaternion = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      angle
    );
    const newQuaternion = currentQuaternion.clone().multiply(deltaQuaternion);
    api.quaternion.set(newQuaternion.x, newQuaternion.y, newQuaternion.z, newQuaternion.w);
  }
}



