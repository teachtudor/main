// 'use client';

// import { OrbitControls } from '@react-three/drei';

// export default function Camera() {
//   return (
//     <OrbitControls
//       maxDistance={3000}
//       minDistance={5}
//       enablePan={true}
//       enableZoom={true}
//     />
//   );
// }

//code 2
'use client';

import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Camera({ targetRef }) {
  const { camera } = useThree();
  const orbitRef = useRef();
  const [followMode, setFollowMode] = useState(false);
  const offset = new THREE.Vector3(0, 2, -6); // Camera offset behind the character

  // Toggle follow/orbit mode with on-screen button
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
      const targetPosition = targetRef.current.position.clone();
      const followPosition = targetPosition.clone().add(offset.clone().applyQuaternion(targetRef.current.quaternion));

      camera.position.lerp(followPosition, 0.5);
      camera.lookAt(targetPosition);
    }
  });

  return !followMode ? <OrbitControls ref={orbitRef} /> : null;
}
