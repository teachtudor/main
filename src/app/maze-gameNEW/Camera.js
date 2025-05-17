//code 3 Camera.js
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// export default function Camera({ targetRef }) {
//   const { camera } = useThree();
//   const orbitRef = useRef();
//   const [followMode, setFollowMode] = useState(false);
//   const offset = new THREE.Vector3(0, 2, -6); // Behind and above the character

//   // Button to toggle camera follow/orbit
//   useEffect(() => {
//     const btn = document.createElement('button');
//     btn.innerText = '🎥 Toggle Camera Mode';
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
//     if (followMode && targetRef?.current) {
//       const target = targetRef.current;

//       // Read world position from the object
//       const targetPosition = new THREE.Vector3();
//       target.getWorldPosition(targetPosition);

//       // Optional: Smooth follow
//       const followPosition = targetPosition.clone().add(
//         offset.clone().applyQuaternion(target.quaternion)
//       );

//       camera.position.lerp(followPosition, 0.25);
//       camera.lookAt(targetPosition);
//     }
//   });

//   return !followMode ? <OrbitControls ref={orbitRef} /> : null;
// }

//code 4
'use client';

import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Camera({ targetRef }) {
  const { camera, size } = useThree(); // ✅ Add size here
  const orbitRef = useRef();
  const [followMode, setFollowMode] = useState(false);
  const offset = new THREE.Vector3(0, 2, -6);

  // ✅ Update aspect ratio on resize
  useEffect(() => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [size, camera]);

  // Toggle button for camera follow
  useEffect(() => {
    const btn = document.createElement('button');
    btn.innerText = '🎥 Toggle Camera Mode';
    btn.style.position = 'absolute';
    btn.style.top = '20px';
    btn.style.left = '20px';
    btn.style.zIndex = 1000;
    btn.style.padding = '10px';
    btn.style.borderRadius = '6px';
    btn.style.background = '#222';
    btn.style.color = '#fff';
    btn.style.cursor = 'pointer';
    btn.onclick = () => setFollowMode((prev) => !prev);
    document.body.appendChild(btn);

    return () => document.body.removeChild(btn);
  }, []);

  useFrame(() => {
    if (followMode && targetRef?.current) {
      const target = targetRef.current;
      const targetPosition = new THREE.Vector3();
      target.getWorldPosition(targetPosition);

      const followPosition = targetPosition.clone().add(
        offset.clone().applyQuaternion(target.quaternion)
      );

      camera.position.lerp(followPosition, 0.25);
      camera.lookAt(targetPosition);
    }
  });

  return !followMode ? <OrbitControls ref={orbitRef} /> : null;
}
