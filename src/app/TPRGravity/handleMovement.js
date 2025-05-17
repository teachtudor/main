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


//code 2 for no gravity code
// import * as THREE from 'three';

// export function handleMovement(character, keys) {
//   // console.log('beginner position', character.position.y);
 
//   // Block movement during action animations
//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];

//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight'];
//   if (!isRunning && !isWalking) return;

//   const walkSpeed = 0.05;
//   // const runSpeed = 0.08;
//   const runSpeed = 1;

//   const move = (z, speed) => {
//     const direction = new THREE.Vector3(0, 0, z);
//     direction.applyQuaternion(character.quaternion);
//     character.position.add(direction.multiplyScalar(speed));
//   };

//   if (keys['ArrowUp']) move(0.8, walkSpeed);
//   if (keys['r']) move(0.9, runSpeed);
//   if (keys['ArrowDown']) move(-0.8, walkSpeed);
//   if (keys['b']) move(-0.9, runSpeed);

//   // Only apply manual rotation if not using animated turns
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   if (isTurning) {
//     if (!keys['r'] && !keys['ArrowUp'] && !keys['ArrowDown'] && !keys['b']) {
//       // character is not moving forward or back — assume it's doing turn animation, do NOT rotate
//       return;
//     }

//     // If character is moving AND turning, apply small turn to guide direction
//     if (keys['ArrowLeft']) {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//       character.quaternion.multiply(q);
//     }

//     if (keys['ArrowRight']) {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//       character.quaternion.multiply(q);
//     }

//   }
// }

//code 3 trial1
// import * as THREE from 'three';

// export function handleMovement(ref, api, keys) {
//   if (!ref) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];

//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];
//   if (!isRunning && !isWalking && !isTurning) return;

//   const walkSpeed = 2;
//   const runSpeed = 6;

//   // Movement direction
//   const direction = new THREE.Vector3();

//   if (keys['ArrowUp']) direction.z -= 1;
//   if (keys['ArrowDown']) direction.z += 1;

//   // Apply quaternion to convert local to world direction
//   direction.normalize().applyQuaternion(ref.quaternion);

//   const velocity = direction.multiplyScalar(isRunning ? runSpeed : walkSpeed);

//   // Apply movement to physics body
//   api.velocity.set(velocity.x, 0, velocity.z); // preserve physics Y (gravity)
//   // api.applyImpulse([direction.x * 0.5, 0, direction.z * 0.5], [0, 0, 0]);

//   api.velocity.subscribe(v=> {
//     console.log('velocity:', v);
//   })

//   // Rotation (manual turning)
//   if (isTurning) {
//     if (keys['ArrowLeft']) {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//       ref.quaternion.multiply(q);
//     }
//     if (keys['ArrowRight']) {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//       ref.quaternion.multiply(q);
//     }
//   }
// }

//code 4 trial 2
// import * as THREE from 'three';

// export function handleMovement(ref, api, keys) {
//   if (!ref) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];

//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const walkSpeed = 2;
//   const runSpeed = 6;

//   const direction = new THREE.Vector3();

//   if (keys['ArrowUp']) direction.z -= 1;
//   if (keys['ArrowDown']) direction.z += 1;

//   direction.normalize().applyQuaternion(ref.quaternion);
//   const speed = isRunning ? runSpeed : walkSpeed;
//   const velocity = direction.multiplyScalar(speed);

//   // Apply the velocity every frame (override X/Z, preserve Y)
//   api.velocity.subscribe(([_, vy, __]) => {
//     api.velocity.set(velocity.x, vy, velocity.z);
//   });

//   // Handle turning
//   if (keys['ArrowLeft']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//     ref.quaternion.multiply(q);
//   }
//   if (keys['ArrowRight']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//     ref.quaternion.multiply(q);
//   }
// }

//code 5
// import * as THREE from 'three';

// export function handleMovement(ref, api, keys, yVelocity=0) {
//   if (!ref || !api) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];
//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];

//   if (!isWalking && !isRunning && !isTurning) return;

//   const walkSpeed = 2;
//   const runSpeed = 6;

//   const direction = new THREE.Vector3();
//   if (keys['ArrowUp']) direction.z -= 1;
//   if (keys['ArrowDown']) direction.z += 1;

//   direction.normalize().applyQuaternion(ref.quaternion);
//   const speed = isRunning ? runSpeed : walkSpeed;
//   const velocity = direction.multiplyScalar(speed);

//   api.velocity.set(velocity.x, yVelocity, velocity.z);
  
//   console.log('Setting velocity:', velocity.toArray());

//   // Rotation
//   if (keys['ArrowLeft']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//     ref.quaternion.multiply(q);
//   }

//   if (keys['ArrowRight']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//     ref.quaternion.multiply(q);
//   }
// }


//code 6  still stuck
// import * as THREE from 'three';

// export function handleMovement(ref, api, keys) {
//   if (!ref || !api) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];
//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];

//   if (!isWalking && !isRunning && !isTurning) return;

//   const walkSpeed = 2;
//   const runSpeed = 6;

//   const direction = new THREE.Vector3();
//   if (keys['ArrowUp']) direction.z -= 1;
//   if (keys['ArrowDown']) direction.z += 1;

//   direction.normalize().applyQuaternion(ref.quaternion);
//   const speed = isRunning ? runSpeed : walkSpeed;
//   const velocity = direction.multiplyScalar(speed);

//   // ✅ Only apply velocity when movement keys are active — avoids freezing gravity
//   if (isWalking || isRunning) {
//     api.velocity.set(velocity.x, 0, velocity.z);
//     console.log('Setting velocity:', velocity.toArray());
//   }

//   // Rotation
//   if (keys['ArrowLeft']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//     ref.quaternion.multiply(q);
//   }

//   if (keys['ArrowRight']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//     ref.quaternion.multiply(q);
//   }
// }

//code 7
// import * as THREE from 'three';

// export function handleMovement(ref, api, keys, delta) {
//   if (!ref || !api ||!ref.current) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];
//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];

//   if (!isWalking && !isRunning && !isTurning) return;

//   const walkSpeed = 2;
//   const runSpeed = 6;

//   const direction = new THREE.Vector3();
//   if (keys['ArrowUp']) direction.z -= 1;
//   if (keys['ArrowDown']) direction.z += 1;

//   direction.normalize().applyQuaternion(ref.current.quaternion);
//   const speed = isRunning ? runSpeed : walkSpeed;
//   const velocity = direction.multiplyScalar(speed);

//   // ✅ Instead of freezing Y, use api.applyImpulse
//   // api.applyImpulse([velocity.x * 5, 0, velocity.z * 0.05], [0, 0, 0]);
//   // api.velocity.set(0, 0, -4); // Force forward motion
//   // api.velocity.set(velocity.x, 0, velocity.z);
//   // api.velocity.set(velocity.x, ref.current?.velocity.y || 0, velocity.z);
//   // api.applyImpulse([velocity.x, 0, velocity.z], [0, 0, 0]);
//   // api.applyImpulse([velocity.x * delta, 0, velocity.z * delta], [0, 0, 0]);
//   api.velocity.set(velocity.x, ref.current.velocity.y, velocity.z);

//   // ✅ Rotation works
//   // if (keys['ArrowLeft']) {
//   //   const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//   //   ref.quaternion.multiply(q);
//   // }
//   if (keys['ArrowLeft']) {
//     ref.current.getQuaternion((quat) => {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03);
//       quat.multiply(q);
//       api.quaternion.set(quat.x, quat.y, quat.z, quat.w);
//     });
//   }
  

//   // if (keys['ArrowRight']) {
//   //   const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.03);
//   //   ref.quaternion.multiply(q);
//   // }
//   if (keys['ArrowRight']) {
//     ref.current.getQuaternion((quat) => {
//       const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -0.03);
//       quat.multiply(q);
//       api.quaternion.set(quat.x, quat.y, quat.z, quat.w);
//     });
//   }
// }

//code 8
// import * as THREE from 'three';

// export function handleMovement(ref, api, keys, delta) {
//   if (!ref || !api || !ref.current) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];
//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];

//   const walkSpeed = 2;
//   const runSpeed = 6;

//   if (isWalking || isRunning) {
//     const direction = new THREE.Vector3();

//     if (keys['ArrowUp']) direction.z -= 1;
//     if (keys['ArrowDown']) direction.z += 1;

//     direction.normalize().applyQuaternion(ref.current.quaternion);

//     const speed = isRunning ? runSpeed : walkSpeed;
//     const velocity = direction.multiplyScalar(speed);

//     // Set horizontal velocity
//     // api.velocity.set(velocity.x, 0, velocity.z);
//     api.velocity.set(velocity.x, ref.current.velocity.y, velocity.z);

    
//   } else {
//     // No walk keys, stop horizontal movement
//     api.velocity.set(0, 0, 0);
//   }

//   if (isTurning) {
//     const angle = keys['ArrowLeft'] ? 0.03 : -0.03;
//     const q = new THREE.Quaternion().setFromAxisAngle(
//       new THREE.Vector3(0, 1, 0),
//       angle
//     );

//     // Apply rotation directly to the current quaternion
//     // const currentQuat = ref.current.quaternion.clone().multiply(q);
//     const currentQuat = new THREE.Quaternion(...quat).multiply(q);
//     api.quaternion.set(currentQuat.x, currentQuat.y, currentQuat.z, currentQuat.w);
//   }
// }

//code 9
import * as THREE from 'three';

export function handleMovement(ref, api, keys, delta, quat) { // Receive the quat state

  if (!ref || !api || !keys || !quat ) return;

  const isLockedAction =
    keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];
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

  //section 1
  // if (isWalkingForward || isWalkingBackward) {
  //   console.log("ArrowUp and down pressed?", keys['ArrowUp']);

  //   const speed = isRunning ? runSpeed : walkSpeed;
  //   const velocity = new THREE.Vector3();

  //   if (isWalkingForward) {
  //     console.log("ArrowUp pressed?", keys['ArrowUp']);

  //     velocity.copy(forwardDirection).multiplyScalar(speed);
  //   } else if (isWalkingBackward) {
  //     velocity.copy(backwardDirection).multiplyScalar(speed * 0.75); // Move slower backward
  //   }

  //   console.log("Velocity being set:", velocity);

    
  //   api.velocity.set(velocity.x, currentY, velocity.z);
  //   console.log(velocity);
  // } else {
  //   api.velocity.set(0, currentY, 0); // Stop horizontal movement
  // }

  //section 2
  // if (isWalkingForward || isWalkingBackward || isRunning) {
  //   const speed = isRunning ? runSpeed : walkSpeed;
  //   const velocity = new THREE.Vector3();
  
  //   if (isWalkingForward || isRunning) {
  //     velocity.copy(forwardDirection).multiplyScalar(speed);
  //   } else if (isWalkingBackward) {
  //     velocity.copy(backwardDirection).multiplyScalar(speed * 0.75); // Move slower backward
  //   }
  
  //   api.velocity.set(velocity.x, currentY, velocity.z);
  // } else {
  //   api.velocity.set(0, currentY, 0); // Stop horizontal movement
  // }

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





// import * as THREE from 'three';

// const directionRef = new THREE.Quaternion();

// export function handleMovement(ref, api, keys) {
//   if (!ref || !api) return;

//   const isLockedAction =
//     keys['j'] || keys['s'] || keys['c'] || keys['l'] || keys['g'];
//   if (isLockedAction) return;

//   const isRunning = keys['r'] || keys['b'];
//   const isWalking = keys['ArrowUp'] || keys['ArrowDown'];
//   const isTurning = keys['ArrowLeft'] || keys['ArrowRight'];

//   if (!isWalking && !isRunning && !isTurning) return;

//   const walkSpeed = 2;
//   const runSpeed = 6;
//   const speed = isRunning ? runSpeed : walkSpeed;

//   // TURNING
//   if (keys['ArrowLeft']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.05);
//     directionRef.multiply(q);
//   }

//   if (keys['ArrowRight']) {
//     const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, -1, 0), 0.05);
//     directionRef.multiply(q);
//   }

//   // SYNC visual rotation
//   ref.quaternion.copy(directionRef);

//   // MOVEMENT
//   const moveVec = new THREE.Vector3();
//   if (keys['ArrowUp']) moveVec.z -= 1;
//   if (keys['ArrowDown']) moveVec.z += 1;

//   moveVec.normalize().applyQuaternion(directionRef);
//   moveVec.multiplyScalar(speed);

//   // Preserve vertical motion (falling)
//   api.velocity.set(moveVec.x, ref.velocity?.y || 0, moveVec.z);
// }
