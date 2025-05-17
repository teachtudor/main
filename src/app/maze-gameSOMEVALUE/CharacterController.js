//code 4 works CharacterController.js
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


