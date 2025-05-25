// //code 2 Camera.js
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// export default function Camera({ targetRef }) {
//   const { camera } = useThree();
//   const orbitRef = useRef();
//   const [followMode, setFollowMode] = useState(false);
//   const offset = new THREE.Vector3(0, 0.3, -0.6); // Camera offset behind the character

//   // Toggle follow/orbit mode with on-screen button
//   useEffect(() => {
//     const btn = document.createElement('button');
//     btn.innerText = '🎥 Camera Toggle';
//     btn.style.position = 'absolute';
//     btn.style.top = '20px';
//     btn.style.left = '20px';
//     btn.style.zIndex = 1000;
//     btn.style.padding = '10px';
//     btn.style.borderRadius = '6px';
//     btn.style.background = '#222';
//     btn.style.color = '#fff';
//     btn.style.cursor = 'pointer';
//     btn.onclick = () => setFollowMode((prev) => !prev);
//     document.body.appendChild(btn);

//     return () => document.body.removeChild(btn);
//   }, []);

//   useFrame(() => {
//   if (followMode && targetRef?.current) {
//     const targetPosition = targetRef.current.position.clone();
//     const followPosition = targetPosition.clone().add(offset.clone().applyQuaternion(targetRef.current.quaternion));

//     camera.position.lerp(followPosition, 0.5);

//     const lookAtOffset = new THREE.Vector3(0, 0.3, 0); // Look slightly above character
//     const lookAtTarget = targetPosition.clone().add(lookAtOffset);
//     camera.lookAt(lookAtTarget);
//   }
//   });


//   return !followMode ? <OrbitControls ref={orbitRef} /> : null;
// }


//code 3 camera toggle
'use client';

import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Camera({ targetRef }) {
  const { camera } = useThree();
  const orbitRef = useRef();
  const [followMode, setFollowMode] = useState(false);
  const offset = new THREE.Vector3(0, 0.3, -0.6);

  const buttonRef = useRef();

  // ✅ Create button with dynamic label
  useEffect(() => {
    const btn = document.createElement('button');
    buttonRef.current = btn;
    btn.innerText = followMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
    btn.style.position = 'absolute';
    btn.style.top = '60px';
    btn.style.left = '20px';
    btn.style.zIndex = 1000;
    btn.style.padding = '10px 14px';
    btn.style.borderRadius = '6px';
    btn.style.background = '#222';
    btn.style.color = '#fff';
    btn.style.fontSize = '14px';
    btn.style.cursor = 'pointer';

    btn.onclick = () => {
      setFollowMode((prev) => {
        const newMode = !prev;
        btn.innerText = newMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
        return newMode;
      });
    };

    document.body.appendChild(btn);
    return () => document.body.removeChild(btn);
  }, []);

  // ✅ Update label if mode changes programmatically
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.innerText = followMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
    }
  }, [followMode]);

  // ✅ Follow camera logic
  useFrame(() => {
    if (followMode && targetRef?.current) {
      const targetPosition = targetRef.current.position.clone();
      const followPosition = targetPosition.clone().add(offset.clone().applyQuaternion(targetRef.current.quaternion));

      camera.position.lerp(followPosition, 0.5);

      const lookAtOffset = new THREE.Vector3(0, 0.3, 0);
      const lookAtTarget = targetPosition.clone().add(lookAtOffset);
      camera.lookAt(lookAtTarget);
    }
  });

  return !followMode ? <OrbitControls ref={orbitRef} /> : null;
}
