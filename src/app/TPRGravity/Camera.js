// import { useThree, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function FollowCamera({ targetRef }) {
//   const { camera } = useThree();

//   useFrame(() => {
//     if (!targetRef.current) return;
//     const target = targetRef.current;
//     const offset = new THREE.Vector3(0, 5, -10);
//     offset.applyQuaternion(target.quaternion);
//     const newCameraPos = target.position.clone().add(offset);
//     camera.position.lerp(newCameraPos, 0.1);
//     camera.lookAt(target.position);
//   });

//   return null;
// }


import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

export default function FollowCamera({ targetRef }) {
  const { camera } = useThree();
  const initialized = useRef(false); // NEW

  useFrame(() => {
    if (!targetRef.current) return;

    const target = targetRef.current;
    const offset = new THREE.Vector3(0, 5, -10);
    offset.applyQuaternion(target.quaternion);
    const newCameraPos = target.position.clone().add(offset);

    // On first frame after model loads: snap directly to position
    if (!initialized.current) {
      camera.position.copy(newCameraPos);
      camera.lookAt(target.position);
      initialized.current = true;
    } else {
      camera.position.lerp(newCameraPos,1.0);
      camera.lookAt(target.position);
    }
  });

  return null;
}
