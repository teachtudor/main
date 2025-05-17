// // //code 4 works CharacterController.js
// // 'use client';

// // import { useRef } from 'react';
// // import { useFrame } from '@react-three/fiber';
// // import * as THREE from 'three';

// // export default function CharacterController({ modelRef, keys }) {
// //   const velocity = useRef(new THREE.Vector3());
// //   const direction = useRef(new THREE.Vector3());
// //   const isJumping = useRef(false);
// //   const jumpVelocity = useRef(0);

// //   useFrame(() => {
// //     if (!modelRef.current) return;

// //     direction.current.set(0, 0, 0);

// //     const isRunning = keys.forward && keys.run;
// //     const speed = isRunning ? 0.06 : 0.025;
// //     velocity.current.set(0, 0, 0);

// //     // Movement input
// //     if (keys.forward) direction.current.z += 1;
// //     if (keys.backward) direction.current.z -= 1;

// //     direction.current.normalize();
// //     velocity.current.z = direction.current.z * speed;

// //     // Turn in place
// //     if (keys.left) modelRef.current.rotation.y += 0.05;
// //     if (keys.right) modelRef.current.rotation.y -= 0.05;

// //     // Jumping
// //     if (keys.jump && !isJumping.current) {
// //       jumpVelocity.current = 0.2;
// //       isJumping.current = true;
// //     }

// //     if (isJumping.current) {
// //       velocity.current.y = jumpVelocity.current;
// //       jumpVelocity.current -= 0.01;

// //       if (modelRef.current.position.y <= 0) {
// //         velocity.current.y = 0;
// //         jumpVelocity.current = 0;
// //         isJumping.current = false;
// //         modelRef.current.position.y = 0;
// //       }
// //     }

// //     // Move forward in facing direction
// //     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
// //     forward.multiplyScalar(velocity.current.z);
// //     modelRef.current.position.add(forward);

// //     // Apply jump/gravity
// //     modelRef.current.position.y += velocity.current.y;
// //   });

// //   return null;
// // }

// //code 5 CharacterController.js
// // 'use client';

// // import { useRef } from 'react';
// // import { useFrame } from '@react-three/fiber';
// // import * as THREE from 'three';

// // export default function CharacterController({ modelRef, keys, wallBoxes }) {
// //   const velocity = useRef(new THREE.Vector3());
// //   const direction = useRef(new THREE.Vector3());
// //   const isJumping = useRef(false);
// //   const jumpVelocity = useRef(0);

// //   useFrame(() => {
// //     if (!modelRef.current) return;

// //     direction.current.set(0, 0, 0);
// //     const isRunning = keys.forward && keys.run;
// //     const speed = isRunning ? 0.08 : 0.04;
// //     velocity.current.set(0, 0, 0);

// //     if (keys.forward) direction.current.z += 1;
// //     if (keys.backward) direction.current.z -= 1;
// //     direction.current.normalize();
// //     velocity.current.z = direction.current.z * speed;

// //     // Left/right rotation
// //     if (keys.left) modelRef.current.rotation.y += 0.05;
// //     if (keys.right) modelRef.current.rotation.y -= 0.05;

// //     // Jump logic
// //     if (keys.jump && !isJumping.current) {
// //       jumpVelocity.current = 0.2;
// //       isJumping.current = true;
// //     }

// //     if (isJumping.current) {
// //       velocity.current.y = jumpVelocity.current;
// //       jumpVelocity.current -= 0.01;
// //       if (modelRef.current.position.y <= 0) {
// //         modelRef.current.position.y = 0;
// //         jumpVelocity.current = 0;
// //         isJumping.current = false;
// //       }
// //     }

// //     // Move in facing direction
// //     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
// //     forward.multiplyScalar(velocity.current.z);

// //     const nextPos = modelRef.current.position.clone().add(forward);
// //     const box = new THREE.Box3().setFromCenterAndSize(nextPos.clone(), new THREE.Vector3(0.8, 5, 0.8));

// //     const collision = wallBoxes.some((wallBox) => wallBox.intersectsBox(box));

// //     if (!collision) {
// //       modelRef.current.position.copy(nextPos);
// //     }

// //     modelRef.current.position.y += velocity.current.y;
// //   });

// //   return null;
// // }

// //code 3
// // 'use client';

// // import { useRef } from 'react';
// // import { useFrame } from '@react-three/fiber';
// // import * as THREE from 'three';

// // export default function CharacterController({ modelRef, keys, wallBoxes }) {
// //   const velocity = useRef(new THREE.Vector3());
// //   const isJumping = useRef(false);
// //   const jumpVelocity = useRef(0);

// //   useFrame(() => {
// //     if (!modelRef.current) return;

// //     // --- Movement ---
// //     const speed = keys.forward && keys.run ? 0.08 : 0.04;
// //     velocity.current.set(0, 0, 0);

// //     let moveDir = 0; // 1 = forward, -1 = backward
// //     if (keys.forward) moveDir = 1;
// //     else if (keys.backward) moveDir = -1;

// //     // Rotate in place
// //     if (keys.left) modelRef.current.rotation.y += 0.09;
// //     if (keys.right) modelRef.current.rotation.y -= 0.09;

// //     // Jumping
// //     if (keys.jump && !isJumping.current) {
// //       jumpVelocity.current = 0.2;
// //       isJumping.current = true;
// //     }

// //     if (isJumping.current) {
// //       velocity.current.y = jumpVelocity.current;
// //       jumpVelocity.current -= 0.01;

// //       if (modelRef.current.position.y <= 0) {
// //         modelRef.current.position.y = 0;
// //         jumpVelocity.current = 0;
// //         isJumping.current = false;
// //         velocity.current.y = 0;
// //       }
// //     }

// //     // Calculate facing direction and movement vector
// //     const forwardVector = new THREE.Vector3(0, 0, 1)
// //       .applyQuaternion(modelRef.current.quaternion)
// //       .normalize()
// //       .multiplyScalar(speed * moveDir);

// //     const nextPos = modelRef.current.position.clone().add(forwardVector);
// //     const nextBox = new THREE.Box3().setFromCenterAndSize(
// //       nextPos.clone().setY(2.5),
// //       new THREE.Vector3(0.8, 5, 0.8)
// //     );

// //     const hasCollision = wallBoxes.some((wallBox) => wallBox.intersectsBox(nextBox));

// //     if (!hasCollision) {
// //       modelRef.current.position.add(forwardVector);
// //     }

// //     // Apply vertical Y velocity (jump/gravity)
// //     modelRef.current.position.y += velocity.current.y;
// //   });

// //   return null;
// // }

// //code 3
// // 'use client';

// // import { useRef } from 'react';
// // import { useFrame } from '@react-three/fiber';
// // import * as THREE from 'three';

// // export default function CharacterController({ modelRef, keys, wallBoxes = [] }) {
// //   const jumpVelocity = useRef(0);
// //   const isJumping = useRef(false);

// //   useFrame(() => {
// //     if (!modelRef.current) return;

// //     const speed = keys.forward && keys.run ? 0.08 : 0.04;

// //     // Determine forward/backward movement
// //     const moveDir = keys.forward ? 1 : keys.backward ? -1 : 0;

// //     // Handle left/right rotation
// //     if (keys.left) modelRef.current.rotation.y += 0.05;
// //     if (keys.right) modelRef.current.rotation.y -= 0.05;

// //     // Calculate forward vector based on current facing
// //     const forward = new THREE.Vector3(0, 0, 1)
// //       .applyQuaternion(modelRef.current.quaternion)
// //       .normalize();

// //     const moveStep = forward.clone().multiplyScalar(moveDir * speed);
// //     const nextPos = modelRef.current.position.clone().add(moveStep);

// //     // Handle jumping (optional)
// //     if (keys.jump && !isJumping.current) {
// //       jumpVelocity.current = 0.2;
// //       isJumping.current = true;
// //     }

// //     if (isJumping.current) {
// //       nextPos.y += jumpVelocity.current;
// //       jumpVelocity.current -= 0.01;

// //       if (nextPos.y <= 0) {
// //         nextPos.y = 0;
// //         isJumping.current = false;
// //         jumpVelocity.current = 0;
// //       }
// //     }

// //     // Optional: Collision with wallBoxes
// //     const box = new THREE.Box3().setFromCenterAndSize(
// //       nextPos.clone().setY(2.5),
// //       new THREE.Vector3(0.8, 5, 0.8)
// //     );

// //     const blocked = wallBoxes.some((wallBox) => wallBox.intersectsBox(box));

// //     if (!blocked) {
// //       modelRef.current.position.copy(nextPos);
// //     }
// //   });

// //   return null;
// // }

// //code bs
// // 'use client';

// // import { useRef } from 'react';
// // import { useFrame } from '@react-three/fiber';
// // import * as THREE from 'three';

// // export default function CharacterController({ modelRef, keys, wallBoxes }) {
// //   const velocity = useRef(new THREE.Vector3());
// //   const direction = useRef(new THREE.Vector3());
// //   const isJumping = useRef(false);
// //   const jumpVelocity = useRef(0);

// //   useFrame(() => {
// //     if (!modelRef.current) return;

// //     // Reset velocity
// //     velocity.current.set(0, 0, 0);
// //     direction.current.set(0, 0, 0);

// //     // Movement input
// //     if (keys.forward) direction.current.z += 1;
// //     if (keys.backward) direction.current.z -= 1;

// //     direction.current.normalize();

// //     // Left/right rotation
// //     if (keys.left) modelRef.current.rotation.y += 0.05;
// //     if (keys.right) modelRef.current.rotation.y -= 0.05;

// //     // Jumping
// //     if (keys.jump && !isJumping.current) {
// //       jumpVelocity.current = 0.2;
// //       isJumping.current = true;
// //     }

// //     // Update Y (jump)
// //     if (isJumping.current) {
// //       velocity.current.y = jumpVelocity.current;
// //       jumpVelocity.current -= 0.01;

// //       if (modelRef.current.position.y <= 0) {
// //         modelRef.current.position.y = 0;
// //         jumpVelocity.current = 0;
// //         isJumping.current = false;
// //       }
// //     }

// //     // Movement speed
// //     const speed = keys.forward && keys.run ? 2 : 0.025;

// //     // Apply movement in facing direction
// //     const move = new THREE.Vector3(0, 0, 1)
// //       .applyQuaternion(modelRef.current.quaternion)
// //       .multiplyScalar(speed * direction.current.z); // forward/backward

// //     // Check wall collisions if needed
// //     const nextPos = modelRef.current.position.clone().add(move);
// //     const box = new THREE.Box3().setFromCenterAndSize(nextPos, new THREE.Vector3(0.8, 5, 0.8));

// //     const colliding = wallBoxes?.some((wallBox) => wallBox.intersectsBox(box)) ?? false;

// //     if (!colliding) {
// //       modelRef.current.position.add(move);
// //     }

// //     modelRef.current.position.y += velocity.current.y;
// //   });

// //   return null;
// // }

// //code shit
// 'use client';

// import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function CharacterController({ modelRef, keys, wallBoxes = [] }) {
//   const velocity = useRef(new THREE.Vector3());
//   const direction = useRef(new THREE.Vector3());
//   const isJumping = useRef(false);
//   const jumpVelocity = useRef(0);

//   useFrame(() => {
//     if (!modelRef.current) return;

//     // Reset movement direction
//     direction.current.set(0, 0, 0);

//     // Input direction
//     if (keys.forward) direction.current.z += 1;
//     if (keys.backward) direction.current.z -= 1;

//     direction.current.normalize();

//     // Rotation
//     if (keys.left) modelRef.current.rotation.y += 0.05;
//     if (keys.right) modelRef.current.rotation.y -= 0.05;

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.2;
//       isJumping.current = true;
//     }

//     // Apply vertical motion
//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;

//       if (modelRef.current.position.y <= 0) {
//         modelRef.current.position.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//       }
//     } else {
//       velocity.current.y = 0;
//     }

//     // Speed
//     const speed = keys.forward && keys.run ? 0.08 : 0.03;

//     // Facing direction vector
//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     forward.multiplyScalar(speed * direction.current.z);

//     // Next position prediction
//     const nextPos = modelRef.current.position.clone().add(forward);
//     const boundingBox = new THREE.Box3().setFromCenterAndSize(nextPos, new THREE.Vector3(0.8, 5, 0.8));
//     const colliding = wallBoxes.some(box => box.intersectsBox(boundingBox));

//     if (!colliding) {
//       modelRef.current.position.add(forward);
//     }

//     // Final vertical update
//     modelRef.current.position.y += velocity.current.y;
//   });

//   return null;
// }
