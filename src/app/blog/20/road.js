// import * as THREE from "three";

// export function createRoad(scene) {
//   const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
//   const roadGeometry = new THREE.PlaneGeometry(100, 200);
//   const road = new THREE.Mesh(roadGeometry, roadMaterial);
//   road.rotation.x = -Math.PI / 2;
//   scene.add(road);

//   const stripes = [];
//   const stripeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//   for (let i = -5000; i < 5000; i += 10) {
//     const stripeGeometry = new THREE.PlaneGeometry(2, 5);
//     const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
//     stripe.rotation.x = -Math.PI / 2;
//     stripe.position.set(0, 0.01, i);
//     scene.add(stripe);
//     stripes.push(stripe);
//   }
// }


// //code 2
// import { useRef } from 'react';
// import { Plane } from '@react-three/drei';

// export function Road() {
//   return (
//     <Plane args={[200, 200]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
//       <meshStandardMaterial color="gray" />
//     </Plane>
//   );
// }
