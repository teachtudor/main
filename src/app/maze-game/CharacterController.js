// 'use client';

// import { useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function CharacterController({ modelRef, keys }) {
//   const velocity = new THREE.Vector3();
//   const direction = new THREE.Vector3();
//   let isJumping = false;
//   let jumpVelocity = 0;

//   useFrame(() => {
//     if (!modelRef.current) return;

//     // Movement direction
//     direction.set(0, 0, 0);
//     if (keys.forward) direction.z += 1;
//     if (keys.backward) direction.z -= 1;
//     if (keys.left) direction.x += 1;
//     if (keys.right) direction.x -= 1;
//     direction.normalize();

//     const speed = 0.1;
//     velocity.x = direction.x * speed;
//     velocity.z = direction.z * speed;

//     // Jump
//     if (keys.jump && !isJumping) {
//       jumpVelocity = 0.2;
//       isJumping = true;
//     }

//     if (isJumping) {
//       velocity.y = jumpVelocity;
//       jumpVelocity -= 0.01;
//       if (modelRef.current.position.y <= 0) {
//         velocity.y = 0;
//         jumpVelocity = 0;
//         isJumping = false;
//         modelRef.current.position.y = 0;
//       }
//     }

//     modelRef.current.position.x += velocity.x;
//     modelRef.current.position.y += velocity.y;
//     modelRef.current.position.z += velocity.z;
//   });

//   return null;
// }

//code 2
// 'use client';

// import { useEffect, useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function CharacterController({ modelRef, keys }) {
//   const velocity = useRef(new THREE.Vector3());
//   const direction = useRef(new THREE.Vector3());
//   const isJumping = useRef(false);
//   const jumpVelocity = useRef(0);

//   useFrame(() => {
//     if (!modelRef.current) return;

//     // Reset movement direction
//     direction.current.set(0, 0, 0);

//     // Set movement vector
//     if (keys.forward) direction.current.z += 1;
//     if (keys.backward) direction.current.z -= 1;
//     if (keys.left) direction.current.x += 1;
//     if (keys.right) direction.current.x -= 1;
//     direction.current.normalize();

//     const speed = 0.025;
//     velocity.current.x = direction.current.x * speed;
//     velocity.current.z = direction.current.z * speed;

//     // Jumping logic
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.2;
//       isJumping.current = true;
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;

//       // Land
//       if (modelRef.current.position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         modelRef.current.position.y = 0;
//       }
//     }

//     // Apply movement to character model
//     modelRef.current.position.x += velocity.current.x;
//     modelRef.current.position.y += velocity.current.y;
//     modelRef.current.position.z += velocity.current.z;
//   });

//   return null;
// }

//code 3
// 'use client';

// import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function CharacterController({ modelRef, keys }) {
//   const velocity = useRef(new THREE.Vector3());
//   const direction = useRef(new THREE.Vector3());
//   const isJumping = useRef(false);
//   const jumpVelocity = useRef(0);

//   useFrame(() => {
//     if (!modelRef.current) return;

//     direction.current.set(0, 0, 0);
//     const speed = keys.run ? 0.06 : 0.025;
//     velocity.current.set(0, 0, 0);

//     // Walk forward/backward (Z-axis only)
//     if (keys.forward) {
//       direction.current.z += 1;
//     }
//     if (keys.backward) {
//       direction.current.z -= 1;
//     }

//     direction.current.normalize();
//     velocity.current.z = direction.current.z * speed;

//     // Turn in place (Y rotation only)
//     if (keys.left) {
//       modelRef.current.rotation.y += 0.05; // turn left
//     }
//     if (keys.right) {
//       modelRef.current.rotation.y -= 0.05; // turn right
//     }

//     // Jump
//     if (keys.jump && !isJumping.current) {
//       jumpVelocity.current = 0.2;
//       isJumping.current = true;
//     }

//     if (isJumping.current) {
//       velocity.current.y = jumpVelocity.current;
//       jumpVelocity.current -= 0.01;

//       if (modelRef.current.position.y <= 0) {
//         velocity.current.y = 0;
//         jumpVelocity.current = 0;
//         isJumping.current = false;
//         modelRef.current.position.y = 0;
//       }
//     }

//     // Apply forward motion in facing direction
//     const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
//     forward.multiplyScalar(velocity.current.z);
//     modelRef.current.position.add(forward);

//     // Apply vertical motion
//     modelRef.current.position.y += velocity.current.y;
//   });

//   return null;
// }

//code 4 works
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CharacterController({ modelRef, keys }) {
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const isJumping = useRef(false);
  const jumpVelocity = useRef(0);

  useFrame(() => {
    if (!modelRef.current) return;

    direction.current.set(0, 0, 0);

    const isRunning = keys.forward && keys.run;
    const speed = isRunning ? 0.06 : 0.025;
    velocity.current.set(0, 0, 0);

    // Movement input
    if (keys.forward) direction.current.z += 1;
    if (keys.backward) direction.current.z -= 1;

    direction.current.normalize();
    velocity.current.z = direction.current.z * speed;

    // Turn in place
    if (keys.left) modelRef.current.rotation.y += 0.05;
    if (keys.right) modelRef.current.rotation.y -= 0.05;

    // Jumping
    if (keys.jump && !isJumping.current) {
      jumpVelocity.current = 0.2;
      isJumping.current = true;
    }

    if (isJumping.current) {
      velocity.current.y = jumpVelocity.current;
      jumpVelocity.current -= 0.01;

      if (modelRef.current.position.y <= 0) {
        velocity.current.y = 0;
        jumpVelocity.current = 0;
        isJumping.current = false;
        modelRef.current.position.y = 0;
      }
    }

    // Move forward in facing direction
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(modelRef.current.quaternion);
    forward.multiplyScalar(velocity.current.z);
    modelRef.current.position.add(forward);

    // Apply jump/gravity
    modelRef.current.position.y += velocity.current.y;
  });

  return null;
}


