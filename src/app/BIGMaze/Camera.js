// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// export default function Camera({ targetRef }) {
//   const { camera, size } = useThree();
//   const orbitRef = useRef();
//   const [followMode, setFollowMode] = useState(false);
//   const offset = new THREE.Vector3(0, 0, -1); // Adjust as needed

//   // ✅ Adjust aspect on resize
//   useEffect(() => {
//     camera.aspect = size.width / size.height;
//     camera.updateProjectionMatrix();
//   }, [size, camera]);

//   // ✅ Toggle follow mode button
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

//   // ✅ Smooth follow logic
//   useFrame(() => {
//     if (followMode && targetRef?.current) {
//       const target = targetRef.current;
//     //   const targetPosition = new THREE.Vector3();
//     //   target.getWorldPosition(targetPosition);

//     //   const followPosition = targetPosition.clone().add(
//     const targetPosition = new THREE.Vector3();

//     if (target.translation) {
//     const position = target.translation();
//     targetPosition.set(position.x, position.y, position.z);

//     const followPosition = targetPosition.clone().add(
//         offset.clone() // add .applyQuaternion(...) if needed
//     );

//     camera.position.lerp(followPosition, 0.1);
//     camera.lookAt(targetPosition);
//     }



//         offset.clone().applyQuaternion(target.quaternion)
//       );

//       camera.position.lerp(followPosition, 0.25);
//       camera.lookAt(targetPosition);
//     }
//   });

//   return !followMode ? <OrbitControls ref={orbitRef} /> : null;
// }


//code 2
'use client';

import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Camera({ targetRef }) {
  const { camera, size } = useThree();
  const orbitRef = useRef();
  const [followMode, setFollowMode] = useState(false);
  const offset = new THREE.Vector3(0, 0,-1); // Follows behind and above

  // ✅ Adjust aspect on resize
  useEffect(() => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [size, camera]);

  // ✅ Toggle follow mode button
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

  // ✅ Smooth follow logic
  useFrame(() => {
    if (followMode && targetRef?.current && typeof targetRef.current.translation === 'function') {
      const target = targetRef.current;
      const position = target.translation(); // Rapier position

      const targetPosition = new THREE.Vector3(position.x, position.y, position.z);
      const followPosition = targetPosition.clone().add(offset);

      camera.position.lerp(followPosition, 0.1);
      camera.lookAt(targetPosition);
    }
  });

  return !followMode ? <OrbitControls ref={orbitRef} /> : null;
}
