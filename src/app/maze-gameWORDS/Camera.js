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
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// export default function Camera({ targetRef, followMode, setFollowMode }) {
//   const { camera } = useThree();
//   const orbitRef = useRef();
//   // const [followMode, setFollowMode] = useState(false);
//   const offset = new THREE.Vector3(0, 0.3, -0.6);

//   const buttonRef = useRef();

//   // ✅ Create button with dynamic label
//   useEffect(() => {
//     const btn = document.createElement('button');
//     buttonRef.current = btn;
//     btn.innerText = followMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
//     btn.style.position = 'absolute';
//     btn.style.top = '60px';
//     btn.style.left = '20px';
//     btn.style.zIndex = 1000;
//     btn.style.padding = '10px 14px';
//     btn.style.borderRadius = '6px';
//     btn.style.background = '#222';
//     btn.style.color = '#fff';
//     btn.style.fontSize = '14px';
//     btn.style.cursor = 'pointer';

//     btn.onclick = () => {
//       setFollowMode((prev) => {
//         const newMode = !prev;
//         btn.innerText = newMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
//         return newMode;
//       });
//     };

//     document.body.appendChild(btn);
//     return () => document.body.removeChild(btn);
//   }, []);

//   // ✅ Update label if mode changes programmatically
//   useEffect(() => {
//     if (buttonRef.current) {
//       buttonRef.current.innerText = followMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
//     }
//   }, [followMode]);

//   // ✅ Follow camera logic
//   useFrame(() => {
//     if (followMode && targetRef?.current) {
//       const targetPosition = targetRef.current.position.clone();
//       const followPosition = targetPosition.clone().add(offset.clone().applyQuaternion(targetRef.current.quaternion));

//       camera.position.lerp(followPosition, 0.5);

//       const lookAtOffset = new THREE.Vector3(0, 0.3, 0);
//       const lookAtTarget = targetPosition.clone().add(lookAtOffset);
//       camera.lookAt(lookAtTarget);
//     }
//   });

//   return !followMode ? <OrbitControls ref={orbitRef} /> : null;
// }

//code 4
'use client';

import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useCameraStore } from './useCameraStore';

export default function Camera({ targetRef }) {
  const { camera } = useThree();
  const orbitRef = useRef();
  const offset = new THREE.Vector3(0, 0.3, -0.6);
  const buttonRef = useRef();

  //  Zustand state
  const followMode = useCameraStore((state) => state.followMode);
  const setFollowMode = useCameraStore((state) => state.setFollowMode);

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
      setFollowMode(!followMode); // ✅ toggle mode
    };

    document.body.appendChild(btn);
    return () => document.body.removeChild(btn);
  }, [followMode, setFollowMode]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.innerText = followMode
        ? '📸 Camera ON (Follow)'
        : '🧭 Camera OFF (Free)';
    }
  }, [followMode]);

  // ✅ Follow camera logic
  useFrame(() => {
    if (followMode && targetRef?.current) {
      const targetPosition = targetRef.current.position.clone();
      const followPosition = targetPosition
        .clone()
        .add(offset.clone().applyQuaternion(targetRef.current.quaternion));

      camera.position.lerp(followPosition, 0.5);

      const lookAtOffset = new THREE.Vector3(0, 0.3, 0);
      const lookAtTarget = targetPosition.clone().add(lookAtOffset);
      camera.lookAt(lookAtTarget);
    }
  });

  return !followMode ? <OrbitControls ref={orbitRef} /> : null;
}

//code 5
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { useCameraStore } from './useCameraStore';

// export default function Camera({ targetRef }) {
//   const { camera } = useThree();
//   const orbitRef = useRef();
//   const buttonRef = useRef();

//   // Zustand state for camera toggle
//   const followMode = useCameraStore((state) => state.followMode);
//   const setFollowMode = useCameraStore((state) => state.setFollowMode);

//   const EARTH_RADIUS = 6_371_000;
//   const ZOOM_START_POS = new THREE.Vector3(0, EARTH_RADIUS * 2, 0); // Orbit start
//   const ZOOM_END_OFFSET = 100; // Final altitude in meters above dome

//   const t = useRef(0); // transition timer
//   const [transitioning, setTransitioning] = useState(true);

//   // Create a toggle button
//   useEffect(() => {
//     const btn = document.createElement('button');
//     buttonRef.current = btn;
//     btn.innerText = followMode ? '📸 Camera ON (Follow)' : '🧭 Camera OFF (Free)';
//     btn.style.position = 'absolute';
//     btn.style.top = '60px';
//     btn.style.left = '20px';
//     btn.style.zIndex = 1000;
//     btn.style.padding = '10px 14px';
//     btn.style.borderRadius = '6px';
//     btn.style.background = '#222';
//     btn.style.color = '#fff';
//     btn.style.fontSize = '14px';
//     btn.style.cursor = 'pointer';

//     btn.onclick = () => {
//       setFollowMode(!followMode);
//     };

//     document.body.appendChild(btn);
//     return () => document.body.removeChild(btn);
//   }, [followMode, setFollowMode]);

//   // Update button label if mode changes
//   useEffect(() => {
//     if (buttonRef.current) {
//       buttonRef.current.innerText = followMode
//         ? '📸 Camera ON (Follow)'
//         : '🧭 Camera OFF (Free)';
//     }
//   }, [followMode]);

//   // Zoom-in from orbit and follow character
//   useFrame(() => {
//     if (transitioning && targetRef?.current) {
//       const playerPos = targetRef.current.position.clone();
//       const surfaceNormal = playerPos.clone().normalize();
//       const zoomTarget = surfaceNormal.multiplyScalar(EARTH_RADIUS + ZOOM_END_OFFSET);

//       t.current += 0.002; // Smooth zoom speed
//       camera.position.lerpVectors(ZOOM_START_POS, zoomTarget, t.current);
//       camera.lookAt(playerPos);

//       if (t.current >= 1) {
//         setTransitioning(false);
//         setFollowMode(true);
//       }
//     } else if (followMode && targetRef?.current) {
//       const playerPos = targetRef.current.position.clone();
//       const surfaceNormal = playerPos.clone().normalize();
//       const followTarget = surfaceNormal.multiplyScalar(EARTH_RADIUS + ZOOM_END_OFFSET);

//       camera.position.lerp(followTarget, 0.1);
//       camera.lookAt(playerPos);
//     }
//   });

//   return !followMode ? <OrbitControls ref={orbitRef} /> : null;
// }
