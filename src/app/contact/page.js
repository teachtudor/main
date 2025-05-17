// // src/app/contact.js
// import Navbar from '../Navbar';
// import '../globals.css';

// export default function Contact() {
//   return (
//     <div>
//       <Navbar />
//       <h1></h1>
//       <p>Under Construction</p>
//     </div>
//   );
// }

// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useState } from "react";
// import * as THREE from "three";


// function Character({ id, position, color, onClick, isSelected, targetPosition, setPosition }) {
//   const speed = 0.05; // Movement speed
//   const scale = isSelected ? 1.2 : 1; // Slightly scale up the sphere when selected

//   useFrame(() => {
//     if (targetPosition) {
//       const newPos = new THREE.Vector3().fromArray(position);
//       newPos.lerp(new THREE.Vector3().fromArray(targetPosition), speed);
//       setPosition([newPos.x, newPos.y, newPos.z]);

//       // Stop moving when close enough
//       if (newPos.distanceTo(new THREE.Vector3().fromArray(targetPosition)) < 0.05) {
//         setPosition(targetPosition);
//       }
//     }
//   });

//   return (
//     <mesh position={position} onClick={onClick} scale={scale}>
//       <sphereGeometry args={[0.6, 32, 32]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }


// export default function Scene() {
//   const [characters, setCharacters] = useState([
//     { id: 1, position: [-3, 0.6, -3], color: "red", targetPosition: null, isSelected: false },
//     { id: 2, position: [3, 0.6, -3], color: "blue", targetPosition: null, isSelected: false },
//     { id: 3, position: [-3, 0.6, 3], color: "green", targetPosition: null, isSelected: false },
//     { id: 4, position: [3, 0.6, 3], color: "purple", targetPosition: null, isSelected: false },
//     { id: 5, position: [0, 0.6, 0], color: "orange", targetPosition: null, isSelected: false },
//   ]);
//   const [awaitingMove, setAwaitingMove] = useState(false);

//   const handleCharacterClick = (id) => {
//     setCharacters((prevChars) =>
//       prevChars.map((char) =>
//         char.id === id
//           ? { ...char, isSelected: true }
//           : { ...char, isSelected: false }
//       )
//     );
//     setAwaitingMove(true); // Wait for the second click to move
//   };

//   const handleGroundClick = (event) => {
//     if (awaitingMove) {
//       const clickedPoint = event.point;
//       setCharacters((prevChars) =>
//         prevChars.map((char) =>
//           char.isSelected
//             ? { ...char, targetPosition: [clickedPoint.x, 0.6, clickedPoint.z] }
//             : char
//         )
//       );
//       setAwaitingMove(false); // Reset for next selection
//     }
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
//       <Canvas camera={{ position: [0, 6, 10], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <OrbitControls />

//         {/* Ground */}
//         <mesh rotation={[-Math.PI / 2, 0, 0]} onClick={handleGroundClick}>
//           <circleGeometry args={[7, 64]} />
//           <meshStandardMaterial color="gray" side={THREE.DoubleSide} />
//         </mesh>

//         {/* Characters */}
//         {characters.map((char) => (
//           <Character
//             key={char.id}
//             id={char.id}
//             position={char.position}
//             color={char.color}
//             onClick={() => handleCharacterClick(char.id)}
//             isSelected={char.isSelected}
//             targetPosition={char.targetPosition}
//             setPosition={(newPos) =>
//               setCharacters((prev) =>
//                 prev.map((c) => (c.id === char.id ? { ...c, position: newPos } : c))
//               )
//             }
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// }


//code 3
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// // Scene setup
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Lighting
// const light = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// // Product Data (Replace with your own Amazon affiliate links & images)
// const products = [
//   { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
// ];

// name: 'INTERNATIONAL TEFL ACADEMY',
//     {img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png',
//     link: 'https://www.internationalteflacademy.com/'}

// const textureLoader = new THREE.TextureLoader();
// const radius = 2;
// const productMeshes = [];

// // Create Product Cards in a Circular Layout
// products.forEach((product, index) => {
//   const angle = (index / products.length) * Math.PI * 2;
//   const texture = textureLoader.load(product.img);

//   const geometry = new THREE.PlaneGeometry(1, 1.5);
//   const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//   const mesh = new THREE.Mesh(geometry, material);

//   mesh.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
//   mesh.lookAt(new THREE.Vector3(0, 0, 0));
//   mesh.userData.link = product.link;

//   scene.add(mesh);
//   productMeshes.push(mesh);
// });

// // Controls for Interaction
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enableZoom = false;

// // Click Event to Open Amazon Links
// window.addEventListener('click', (event) => {
//   const raycaster = new THREE.Raycaster();
//   const mouse = new THREE.Vector2();
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(productMeshes);
//   if (intersects.length > 0) {
//     window.open(intersects[0].object.userData.link, '_blank');
//   }
// });

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }
// animate();

// // Resize Handling
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });


//code 4 CAROUSEL
// 'use client';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { useEffect } from 'react';

// const MyThreeJSComponent = () => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Scene setup
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
//       camera.position.z = 5;

//       const renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       document.body.appendChild(renderer.domElement);

//       // Lighting
//       const light = new THREE.AmbientLight(0xffffff, 1);
//       scene.add(light);

//       // Product Data (Replace with your own Amazon affiliate links & images)
//       const products = [
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//         { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },


//       ];

//       const textureLoader = new THREE.TextureLoader();
//       const radius = 2;
//       const productMeshes = [];

//       // Create Product Cards in a Circular Layout
//       products.forEach((product, index) => {
//         const angle = (index / products.length) * Math.PI * 2;
//         const texture = textureLoader.load(product.img);

//         const geometry = new THREE.PlaneGeometry(1, 1.5);
//         const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//         const mesh = new THREE.Mesh(geometry, material);

//         mesh.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
//         mesh.lookAt(new THREE.Vector3(0, 0, 0));
//         mesh.userData.link = product.link;

//         scene.add(mesh);
//         productMeshes.push(mesh);
//       });

//       // Controls for Interaction
//       const controls = new OrbitControls(camera, renderer.domElement);
//       controls.enableDamping = true;
//       controls.enableZoom = false;

//       // Click Event to Open Amazon Links
//       window.addEventListener('click', (event) => {
//         const raycaster = new THREE.Raycaster();
//         const mouse = new THREE.Vector2();
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//         raycaster.setFromCamera(mouse, camera);

//         const intersects = raycaster.intersectObjects(productMeshes);
//         if (intersects.length > 0) {
//           window.open(intersects[0].object.userData.link, '_blank');
//         }
//       });

//       // Animation Loop
//       function animate() {
//         requestAnimationFrame(animate);
//         controls.update();
//         renderer.render(scene, camera);
//       }
//       animate();

//       // Resize Handling
//       window.addEventListener('resize', () => {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//       });

//       // Clean up on component unmount
//       return () => {
//         window.removeEventListener('resize', () => {});
//         window.removeEventListener('click', () => {});
//         renderer.dispose();
//       };
//     }
//   }, []); // Empty dependency array ensures this runs only once after the component mounts

//   return <div></div>;
// };

// export default MyThreeJSComponent;


//code 5 fly items
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'; // Corrected import path

// const ProductShowcase = () => {
//   const containerRef = useRef(null);
//   const spheres = [];

//   useEffect(() => {
//     let camera, scene, renderer, effect;
//     let mouseX = 0, mouseY = 0;
//     const windowHalfX = window.innerWidth / 2;
//     const windowHalfY = window.innerHeight / 2;

//     const products = [
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//     ];

//     // Handle mouse movement
//     const onDocumentMouseMove = (event) => {
//       mouseX = (event.clientX - windowHalfX) / 100;
//       mouseY = (event.clientY - windowHalfY) / 100;
//     };

//     // Initialize the scene
//     const init = () => {
//       containerRef.current = document.createElement('div');
//       document.body.appendChild(containerRef.current);

//       camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);
//       camera.position.z = 3;

//       scene = new THREE.Scene();

//       // Create clickable 3D planes for each product
//       products.forEach((product, index) => {
//         const geometry = new THREE.PlaneGeometry(5, 5);
//         const texture = new THREE.TextureLoader().load(product.img);
//         const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

//         const mesh = new THREE.Mesh(geometry, material);
//         mesh.position.x = Math.random() * 10 - 5;
//         mesh.position.y = Math.random() * 10 - 5;
//         mesh.position.z = Math.random() * 10 - 5;

//         scene.add(mesh);
//         spheres.push(mesh);

//         mesh.userData = { link: product.link };
//       });

//       // Create renderer
//       renderer = new THREE.WebGLRenderer();
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       containerRef.current.appendChild(renderer.domElement);

//       // Create effect (AnaglyphEffect)
//       effect = new AnaglyphEffect(renderer);
//       effect.setSize(window.innerWidth, window.innerHeight);

//       window.addEventListener('mousemove', onDocumentMouseMove);
//       window.addEventListener('resize', onWindowResize);
//       window.addEventListener('click', onClick);

//       animate();
//     };

//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       effect.setSize(window.innerWidth, window.innerHeight);
//     };

//     // Handle click events for opening product links
//     const onClick = (event) => {
//       const mouse = new THREE.Vector2();
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       const raycaster = new THREE.Raycaster();
//       raycaster.updateMatrixWorld();
//       raycaster.ray.origin.setFromMatrixPosition(camera.matrixWorld);
//       raycaster.ray.direction.set(mouse.x, mouse.y, 0.5).unproject(camera).sub(camera.position).normalize();

//       const intersects = raycaster.intersectObjects(spheres);
//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object.userData.link) {
//           window.open(object.userData.link, '_blank');
//         }
//       }
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);
//       render();
//     };

//     const render = () => {
//       const timer = 0.0001 * Date.now();

//       camera.position.x += (mouseX - camera.position.x) * 0.05;
//       camera.position.y += (-mouseY - camera.position.y) * 0.05;
//       camera.lookAt(scene.position);

//       spheres.forEach((sphere, index) => {
//         const angle = timer + index;
//         sphere.position.x = 5 * Math.cos(angle);
//         sphere.position.y = 5 * Math.sin(angle);
//       });

//       effect.render(scene, camera);
//     };

//     init();

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       window.removeEventListener('click', onClick);
//     };

//   }, []);

//   return <div ref={containerRef}></div>;
// };

// export default ProductShowcase;

//code 6 fly items new
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'; // Corrected import path

// const ProductShowcase = () => {
//   const containerRef = useRef(null);
//   const spheres = [];

//   useEffect(() => {
//     let camera, scene, renderer, effect;
//     let mouseX = 0, mouseY = 0;
//     const windowHalfX = window.innerWidth / 2;
//     const windowHalfY = window.innerHeight / 2;

//     const products = [
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },
//       { img: 'https://www.internationalteflacademy.com/hubfs/logo/logo_200x70.png', link: 'https://www.internationalteflacademy.com/' },

//     ];

//     // Handle mouse movement
//     const onDocumentMouseMove = (event) => {
//       mouseX = (event.clientX - windowHalfX) / 100;
//       mouseY = (event.clientY - windowHalfY) / 100;
//     };

//     // Initialize the scene
//     const init = () => {
//       containerRef.current = document.createElement('div');
//       document.body.appendChild(containerRef.current);

//       camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);
//       camera.position.z = 3;

//       scene = new THREE.Scene();

//       // 3D Background (skybox)
//       const path = '/3dimage';
//       const format = '.webp';
//       const urls = [
//         path + 'px' + format, path + 'nx' + format,
//         path + 'py' + format, path + 'ny' + format,
//         path + 'pz' + format, path + 'nz' + format
//       ];

//       const textureCube = new THREE.CubeTextureLoader().load(urls);
//       scene.background = textureCube; // Set the skybox as the background

//       // Create clickable 3D planes for each product with larger images
//       products.forEach((product, index) => {
//         const geometry = new THREE.PlaneGeometry(1.5, 1.5); // Larger image size
//         const texture = new THREE.TextureLoader().load(product.img);
//         const material = new THREE.MeshBasicMaterial({
//           map: texture,
//           transparent: true,
//           envMap: textureCube // Environment map for reflections
//         });

//         const mesh = new THREE.Mesh(geometry, material);
//         mesh.position.x = Math.random() * 10 - 5;
//         mesh.position.y = Math.random() * 10 - 5;
//         mesh.position.z = Math.random() * 10 - 5;

//         scene.add(mesh);
//         spheres.push(mesh);

//         mesh.userData = { link: product.link };
//       });

//       // Create renderer
//       renderer = new THREE.WebGLRenderer();
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       containerRef.current.appendChild(renderer.domElement);

//       // Create effect (AnaglyphEffect)
//       effect = new AnaglyphEffect(renderer);
//       effect.setSize(window.innerWidth, window.innerHeight);

//       window.addEventListener('mousemove', onDocumentMouseMove);
//       window.addEventListener('resize', onWindowResize);
//       window.addEventListener('click', onClick);

//       animate();
//     };

//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       effect.setSize(window.innerWidth, window.innerHeight);
//     };

//     // Handle click events for opening product links
//     const onClick = (event) => {
//       const mouse = new THREE.Vector2();
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
//       const raycaster = new THREE.Raycaster();
      
//       // Automatically updates the world matrix, no need to call updateMatrixWorld
//       raycaster.ray.origin.setFromMatrixPosition(camera.matrixWorld);
//       raycaster.ray.direction.set(mouse.x, mouse.y, 0.5).unproject(camera).sub(camera.position).normalize();
    
//       const intersects = raycaster.intersectObjects(spheres);
//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object.userData.link) {
//           window.open(object.userData.link, '_blank');
//         }
//       }
//     };
    

//     const animate = () => {
//       requestAnimationFrame(animate);
//       render();
//     };

//     const render = () => {
//       const timer = 0.0001 * Date.now();

//       camera.position.x += (mouseX - camera.position.x) * 0.05;
//       camera.position.y += (-mouseY - camera.position.y) * 0.05;
//       camera.lookAt(scene.position);

//       spheres.forEach((sphere, index) => {
//         const angle = timer + index;
//         sphere.position.x = 5 * Math.cos(angle);
//         sphere.position.y = 5 * Math.sin(angle);
//       });

//       effect.render(scene, camera);
//     };

//     init();

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       window.removeEventListener('click', onClick);
//     };

//   }, []);

//   return <div ref={containerRef}></div>;
// };

// export default ProductShowcase;


//code 7 works shiny ball

// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const ThreeScene = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, stats;
//     let cube, sphere, torus, material;
//     let cubeCamera, cubeRenderTarget;
//     let controls;

//     // Initialize the scene
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;

//     // Declare the animate function before using it
//     const animate = (msTime) => {
//       const time = msTime / 1000;

//       cube.position.x = Math.cos(time) * 30;
//       cube.position.y = Math.sin(time) * 30;
//       cube.position.z = Math.sin(time) * 30;

//       cube.rotation.x += 0.02;
//       cube.rotation.y += 0.03;

//       torus.position.x = Math.cos(time + 10) * 30;
//       torus.position.y = Math.sin(time + 10) * 30;
//       torus.position.z = Math.sin(time + 10) * 30;

//       torus.rotation.x += 0.02;
//       torus.rotation.y += 0.03;

//       cubeCamera.update(renderer, scene);
//       controls.update();
//       renderer.render(scene, camera);
//       stats.update();
//     };

//     renderer.setAnimationLoop(animate);

//     // Resize handler
//     const onWindowResized = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onWindowResized);

//     stats = new Stats();
//     document.body.appendChild(stats.dom);

//     camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 75;

//     scene = new THREE.Scene();
//     scene.rotation.y = 0.5; // avoid flying objects occluding the sun

//     // Load HDR texture
//     new RGBELoader()
//       .setPath('/')
//       .load('3dimage.hdr', (texture) => {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = texture;
//         scene.environment = texture;
//       });

//     // Setup cube camera and render target
//     cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
//     cubeRenderTarget.texture.type = THREE.HalfFloatType;
//     cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

//     // Material for the objects
//     material = new THREE.MeshStandardMaterial({
//       envMap: cubeRenderTarget.texture,
//       roughness: 0.05,
//       metalness: 1,
//     });

//     const gui = new GUI();
//     gui.add(material, 'roughness', 0, 1);
//     gui.add(material, 'metalness', 0, 1);
//     gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

//     // Add objects
//     sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(15, 8), material);
//     scene.add(sphere);

//     const material2 = new THREE.MeshStandardMaterial({
//       roughness: 0.1,
//       metalness: 0,
//     });

//     cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), material2);
//     scene.add(cube);

//     torus = new THREE.Mesh(new THREE.TorusKnotGeometry(8, 3, 128, 16), material2);
//     scene.add(torus);

//     // Orbit controls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = true;

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResized);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default ThreeScene;


//code 8 one glb model
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  // Import GLTFLoader
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const ThreeScene = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, stats;
//     let cube, sphere, glbModel, material;
//     let cubeCamera, cubeRenderTarget;
//     let controls;

//     // Initialize the scene
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;

//     // Declare the animate function before using it
//     const animate = (msTime) => {
//       const time = msTime / 1000;

//       cube.position.x = Math.cos(time) * 30;
//       cube.position.y = Math.sin(time) * 30;
//       cube.position.z = Math.sin(time) * 30;

//       cube.rotation.x += 0.02;
//       cube.rotation.y += 0.03;

//       if (glbModel) {
//         glbModel.rotation.x += 0.02;
//         glbModel.rotation.y += 0.03;
//       }

//       cubeCamera.update(renderer, scene);
//       controls.update();
//       renderer.render(scene, camera);
//       stats.update();
//     };

//     renderer.setAnimationLoop(animate);

//     // Resize handler
//     const onWindowResized = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onWindowResized);

//     stats = new Stats();
//     document.body.appendChild(stats.dom);

//     camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 75;

//     scene = new THREE.Scene();
//     scene.rotation.y = 0.5; // avoid flying objects occluding the sun

//     // Load HDR texture
//     new RGBELoader()
//       .setPath('/')
//       .load('3dimage.hdr', (texture) => {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = texture;
//         scene.environment = texture;
//       });

//     // Setup cube camera and render target
//     cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
//     cubeRenderTarget.texture.type = THREE.HalfFloatType;
//     cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

//     // Material for the objects
//     material = new THREE.MeshStandardMaterial({
//       envMap: cubeRenderTarget.texture,
//       roughness: 0.05,
//       metalness: 1,
//     });

//     const gui = new GUI();
//     gui.add(material, 'roughness', 0, 1);
//     gui.add(material, 'metalness', 0, 1);
//     gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

//     // Add sphere
//     sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(15, 8), material);
//     scene.add(sphere);

//     // Add cube
//     const material2 = new THREE.MeshStandardMaterial({
//       roughness: 0.1,
//       metalness: 0,
//     });

//     cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), material2);
//     scene.add(cube);

//     // Load GLB model
//     const loader = new GLTFLoader();
//     loader.load('/car_model.glb', (gltf) => {
//       glbModel = gltf.scene;
//       scene.add(glbModel);

//       // Optional: Scale and position the model
//       glbModel.scale.set(5, 5, 5);
//       glbModel.position.set(30, 0, 30);
//     });

//     // Orbit controls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = true;

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResized);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default ThreeScene;


//code 9 works
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';  // Import GLTFLoader
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const ThreeScene = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, stats;
//     let cube, sphere, glbModel1, glbModel2, material;
//     let cubeCamera, cubeRenderTarget;
//     let controls;

//     // Initialize the scene
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;

//     // Declare the animate function before using it
//     const animate = (msTime) => {
//       const time = msTime / 1000;

//       cube.position.x = Math.cos(time) * 30;
//       cube.position.y = Math.sin(time) * 30;
//       cube.position.z = Math.sin(time) * 30;

//       cube.rotation.x += 0.02;
//       cube.rotation.y += 0.03;

//       if (glbModel1) {
//         glbModel1.rotation.x += 0.02;
//         glbModel1.rotation.y += 0.03;
//       }

//       if (glbModel2) {
//         glbModel2.rotation.x += 0.02;
//         glbModel2.rotation.y += 0.03;
//       }

//       cubeCamera.update(renderer, scene);
//       controls.update();
//       renderer.render(scene, camera);
//       stats.update();
//     };

//     renderer.setAnimationLoop(animate);

//     // Resize handler
//     const onWindowResized = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onWindowResized);

//     stats = new Stats();
//     document.body.appendChild(stats.dom);

//     camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 75;

//     scene = new THREE.Scene();
//     scene.rotation.y = 0.5; // avoid flying objects occluding the sun

//     // Load HDR texture
//     new RGBELoader()
//       .setPath('/')
//       .load('3dimage.hdr', (texture) => {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = texture;
//         scene.environment = texture;
//       });

//     // Setup cube camera and render target
//     cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
//     cubeRenderTarget.texture.type = THREE.HalfFloatType;
//     cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

//     // Material for the objects
//     material = new THREE.MeshStandardMaterial({
//       envMap: cubeRenderTarget.texture,
//       roughness: 0.05,
//       metalness: 1,
//     });

//     const gui = new GUI();
//     gui.add(material, 'roughness', 0, 1);
//     gui.add(material, 'metalness', 0, 1);
//     gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

//     // Add sphere
//     sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(15, 8), material);
//     scene.add(sphere);

//     // Add cube
//     const material2 = new THREE.MeshStandardMaterial({
//       roughness: 0.1,
//       metalness: 0,
//     });

//     cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), material2);
//     // scene.add(cube);

//     // Load GLB models
//     const loader = new GLTFLoader();

//     // Load the first GLB model
//     loader.load('/car_model.glb', (gltf) => {
//       glbModel1 = gltf.scene;
//       scene.add(glbModel1);

//       // Optional: Scale and position the first model
//       glbModel1.scale.set(5, 5, 5);
//       glbModel1.position.set(30, 0, 30);
//     });

//     // Load the second GLB model
//     loader.load('/car_model.glb', (gltf) => {
//       glbModel2 = gltf.scene;
//       scene.add(glbModel2);

//       // Optional: Scale and position the second model
//       glbModel2.scale.set(5, 5, 5);
//       glbModel2.position.set(-30, 0, -30);
//     });

//     // Orbit controls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = true;

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResized);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default ThreeScene;


//code 10
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const ThreeScene = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, stats;
//     let glbModel1, material;
//     let cubeCamera, cubeRenderTarget;
//     let controls;

//     // Raycaster and mouse vector for detecting clicks
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let intersectedObject = null; // Track the intersected object

//     // Initialize the scene
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;

//     // Declare the animate function before using it
//     const animate = (msTime) => {
//       const time = msTime / 1000;

//       if (glbModel1) {
//         glbModel1.rotation.x += 0.02;
//         glbModel1.rotation.y += 0.03;
//       }

//       cubeCamera.update(renderer, scene);
//       controls.update();
//       renderer.render(scene, camera);
//       stats.update();
//     };

//     renderer.setAnimationLoop(animate);

//     // Resize handler
//     const onWindowResized = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onWindowResized);

//     stats = new Stats();
//     document.body.appendChild(stats.dom);

//     camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 75;

//     scene = new THREE.Scene();
//     scene.rotation.y = 0.5; // avoid flying objects occluding the sun

//     // Load HDR texture
//     new RGBELoader()
//       .setPath('/')
//       .load('3dimage.hdr', (texture) => {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = texture;
//         scene.environment = texture;
//       });

//     // Setup cube camera and render target
//     cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
//     cubeRenderTarget.texture.type = THREE.HalfFloatType;
//     cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

//     // Material for the objects
//     material = new THREE.MeshStandardMaterial({
//       envMap: cubeRenderTarget.texture,
//       roughness: 0.05,
//       metalness: 1,
//     });

//     const gui = new GUI();
//     gui.add(material, 'roughness', 0, 1);
//     gui.add(material, 'metalness', 0, 1);
//     gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

//     // Add cube to the scene
//     const cubeMaterial = new THREE.MeshStandardMaterial({
//       roughness: 0.1,
//       metalness: 0,
//     });
//     const cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), cubeMaterial);
//     scene.add(cube);

//     // Load GLB model
//     const loader = new GLTFLoader();

//     loader.load('/car_model.glb', (gltf) => {
//       glbModel1 = gltf.scene;
//       scene.add(glbModel1);

//       // Optional: Scale and position the model
//       glbModel1.scale.set(5, 5, 5);
//       glbModel1.position.set(30, 0, 30);
      
//       // Make the model clickable by adding it to the intersected object tracker
//       glbModel1.userData = { link: 'https://example.com' }; // Store the link in the model's userData
//     });

//     // Orbit controls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = true;

//     // Add event listener for mouse clicks
//     const onMouseClick = (event) => {
//       // Normalize mouse coordinates
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       // Update the raycaster with the camera and mouse position
//       raycaster.update();

//       // Calculate objects intersecting the ray
//       const intersects = getIntersects(event);

//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object && object.userData && object.userData.link) {
//           // If clicked model has a link, open it in a new tab
//           window.open(object.userData.link, '_blank');
//         }
//       }
//     };

//     // Helper function to check for intersections
//     const getIntersects = (event) => {
//       raycaster.update();

//       // Create a ray from the camera to the mouse position
//       raycaster.setFromCamera(mouse, camera);

//       // Find all objects that intersect with the ray
//       return raycaster.intersectObjects(scene.children);
//     };

//     // Listen for mouse clicks
//     window.addEventListener('click', onMouseClick, false);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResized);
//       window.removeEventListener('click', onMouseClick);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default ThreeScene;


// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const ThreeScene = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, stats;
//     let glbModel1, glbModel2, shinySphere;
//     let cubeCamera, cubeRenderTarget;
//     let controls;

//     // Raycaster and mouse vector for detecting clicks
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let intersectedObject = null; // Track the intersected object

//     // Initialize the scene
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;

//     // Declare the animate function before using it
//     const animate = (msTime) => {
//       const time = msTime / 1000;

//       if (glbModel1) {
//         glbModel1.rotation.x += 0;
//         glbModel1.rotation.y += 0;
//       }

//       if (glbModel2) {
//         glbModel2.rotation.x += 0;
//         glbModel2.rotation.y += 0;
//       }

//       shinySphere.rotation.x += 0;
//       shinySphere.rotation.y += 0;

//       cubeCamera.update(renderer, scene);
//       controls.update();
//       renderer.render(scene, camera);
//       stats.update();
//     };

//     renderer.setAnimationLoop(animate);

//     // Resize handler
//     const onWindowResized = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onWindowResized);

//     stats = new Stats();
//     document.body.appendChild(stats.dom);

//     camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 75;

//     scene = new THREE.Scene();
//     scene.rotation.y = 0; // avoid flying objects occluding the sun

//     // Load HDR texture
//     new RGBELoader()
//       .setPath('/')
//       .load('3dimage.hdr', (texture) => {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = texture;
//         scene.environment = texture;
//       });

//     // Setup cube camera and render target
//     cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
//     cubeRenderTarget.texture.type = THREE.HalfFloatType;
//     cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

//     // Material for the objects
//     const material = new THREE.MeshStandardMaterial({
//       envMap: cubeRenderTarget.texture,
//       roughness: 0,
//       metalness: 1,
//     });

//     const gui = new GUI();
//     gui.add(material, 'roughness', 0, 1);
//     gui.add(material, 'metalness', 0, 1);
//     gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

//     // Load GLB models
//     const loader = new GLTFLoader();

//     loader.load('/Amazon-Logo.glb', (gltf) => {
//       glbModel1 = gltf.scene;
//       scene.add(glbModel1);

//       // Optional: Scale and position the first model
//       glbModel1.scale.set(0.5, 0.5, 0.5);
//       glbModel1.position.set(40, 0, 40);
//       glbModel1.rotation.x =Math.PI/2;
      
//       // Make the model clickable by adding it to the intersected object tracker
//       glbModel1.userData = { link: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl' }; // Store the link in the model's userData
//     });

//     loader.load('/Amazon-Logo.glb', (gltf) => {
//       glbModel2 = gltf.scene;
//       scene.add(glbModel2);

//       // Optional: Scale and position the second model
//       glbModel2.scale.set(0.5, 0.5, 0.5);
//       glbModel2.position.set(-40, 0, -40);
//       glbModel2.rotation.x = Math.PI/2;
      
//       // Make the model clickable by adding it to the intersected object tracker
//       glbModel2.userData = { link: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl' }; // Store the link in the model's userData
//     });

//     // Create the shiny sphere in the center
//     shinySphere = new THREE.Mesh(
//       new THREE.SphereGeometry(15, 32, 32),
//       new THREE.MeshStandardMaterial({
//         roughness: 0.05,
//         metalness: 1,
//         // color: 0x888888, // Light gray
//       })
//     );
//     shinySphere.position.set(0, 0, 0);
//     scene.add(shinySphere);

//     // Orbit controls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = false;

//     // Add event listener for mouse clicks
//     const onMouseClick = (event) => {
//       // Normalize mouse coordinates
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       // Update the raycaster with the camera and mouse position
//       raycaster.update();

//       // Calculate objects intersecting the ray
//       const intersects = getIntersects(event);

//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object && object.userData && object.userData.link) {
//           // If clicked model has a link, open it in a new tab
//           window.open(object.userData.link, '_blank');
//         }
//       }
//     };

//     // Helper function to check for intersections
//     const getIntersects = (event) => {
//       raycaster.update();

//       // Create a ray from the camera to the mouse position
//       raycaster.setFromCamera(mouse, camera);

//       // Find all objects that intersect with the ray
//       return raycaster.intersectObjects(scene.children);
//     };

//     // Listen for mouse clicks
//     window.addEventListener('click', onMouseClick, false);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResized);
//       window.removeEventListener('click', onMouseClick);
//     };
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default ThreeScene;


//code 11
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const ThreeScene = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, stats;
//     let glbModel1, glbModel2, shinySphere;
//     let cubeCamera, cubeRenderTarget;
//     let controls;

//     // Raycaster and mouse vector for detecting clicks
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let intersectedObject = null; // Track the intersected object

//     // Initialize the scene
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 2;

//     // Declare the animate function before using it
//     const animate = (msTime) => {
//       const time = msTime / 1000;

//       if (glbModel1) {
//         glbModel1.rotation.x += 0.02;
//         glbModel1.rotation.y += 0.02;
//       }

//       if (glbModel2) {
//         glbModel2.rotation.x += 0.02;
//         glbModel2.rotation.y += 0.02;
//       }

//       shinySphere.rotation.x += 0;
//       shinySphere.rotation.y += 0;

//       cubeCamera.update(renderer, scene);
//       controls.update();
//       renderer.render(scene, camera);
//       stats.update();
//     };

//     renderer.setAnimationLoop(animate);

//     // Resize handler
//     const onWindowResized = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onWindowResized);

//     stats = new Stats();
//     document.body.appendChild(stats.dom);

//     camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 75;
    

//     scene = new THREE.Scene();
//     scene.rotation.y = 0; // avoid flying objects occluding the sun

//     // Load HDR texture
//     new RGBELoader()
//       .setPath('/')
//       .load('3dimage.hdr', (texture) => {
//         texture.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = texture;
//         scene.environment = texture;
//       });

//     // Setup cube camera and render target
//     cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
//     cubeRenderTarget.texture.type = THREE.HalfFloatType;
//     cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);

//     // Material for the objects
//     const material = new THREE.MeshStandardMaterial({
//       envMap: cubeRenderTarget.texture,
//       roughness: 0,
//       metalness: 1,
//     });

//     // const gui = new GUI();
//     // gui.add(material, 'roughness', 0, 1);
//     // gui.add(material, 'metalness', 0, 1);
//     // gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

//     // Load GLB models
//     const loader = new GLTFLoader();

//     loader.load('/Amazon-Logo.glb', (gltf) => {
//       glbModel1 = gltf.scene;
//       scene.add(glbModel1);

//       // Optional: Scale and position the first model
//       glbModel1.scale.set(0.5, 0.5, 0.5);
//       glbModel1.position.set(40, 0, 40);
//       glbModel1.rotation.x = Math.PI / 2;

//       // Make the model clickable by adding it to the intersected object tracker
//       glbModel1.userData = {
//         link: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl',
//       };
//     });

//     loader.load('/Amazon-Logo.glb', (gltf) => {
//       glbModel2 = gltf.scene;
//       scene.add(glbModel2);

//       // Optional: Scale and position the second model
//       glbModel2.scale.set(0.5, 0.5, 0.5);
//       glbModel2.position.set(-40, 0, -40);
//       glbModel2.rotation.x = Math.PI / 2;

//       // Make the model clickable by adding it to the intersected object tracker
//       glbModel2.userData = {
//         link: 'https://www.amazon.com/Best-Sellers-Books-English-as-a-Second-Language-Instruction/zgbs/books/11823?utm_source=chatgpt.com&linkCode=ll2&tag=teachtudor-20&linkId=d052a145087524e53a33126694f9bea1&language=en_US&ref_=as_li_ss_tl',
//       };
//     });

//     // Create the shiny sphere in the center
//     shinySphere = new THREE.Mesh(
//       new THREE.SphereGeometry(15, 32, 32),
//       new THREE.MeshStandardMaterial({
//         roughness: 0,
//         metalness: 1,
//       })
//     );
//     shinySphere.position.set(0, 0, 0);
//     scene.add(shinySphere);

//     // Orbit controls
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.autoRotate = false;

//     // Add event listener for mouse clicks
//     const onMouseClick = (event) => {
//       // Normalize mouse coordinates
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       // Update the raycaster with the camera and mouse position
//       raycaster.setFromCamera(mouse, camera);

//       // Calculate objects intersecting the ray
//       const intersects = getIntersects();

//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object && object.userData && object.userData.link) {
//           // If clicked model has a link, open it in a new tab
//           window.open(object.userData.link, '_blank');
//         }
//       }
//     };

// //     const onMouseClick = (event) => {
// //     // Normalize mouse coordinates
// //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
// //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

// //   // Update the raycaster with the camera and mouse position
// //   raycaster.update();

// //   // Calculate objects intersecting the ray
// //   const intersects = getIntersects();

// //   if (intersects.length > 0) {
// //     const object = intersects[0].object;
// //     if (object && object.userData && object.userData.link) {
// //       // If clicked model has a link, open it in a new tab
// //       window.open(object.userData.link, '_blank');
// //     }
// //   }
// // };

//     // Helper function to check for intersections
//     const getIntersects = () => {
//       // Find all objects that intersect with the ray
//       return raycaster.intersectObjects(scene.children);
//     };

//     // Listen for mouse clicks
//     window.addEventListener('click', onMouseClick, false);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResized);
//       window.removeEventListener('click', onMouseClick);
//     };
//   }, []);

//   // return <canvas ref={canvasRef}></canvas>;
//   return (
//     <>
//       <canvas ref={canvasRef}></canvas>

//       {/* Clickable Image Below Models */}
//       <div style={{
//         position: 'absolute', 
//         bottom: '50px', 
//         left: '50%', 
//         transform: 'translateX(-50%)',
//         textAlign: 'center'
//       }}>
//         <a href="https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers" 
//            target="_blank">
//           <img src="https://www.teachtudor.com/_next/image?url=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F06%2FAmazon-Logo.png&w=256&q=75" alt="Amazon" style={{ width: '200px', height: 'auto', cursor: 'pointer' }} />
//         </a>
//       </div>
//     </>
//   );
// };

// export default ThreeScene;


//code 12
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { World, Body, Sphere, Plane, Vec3, Material, ContactMaterial } from 'cannon-es';
// import { OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import * as CANNON from 'cannon-es'; //Cannon.js for physics

// export default function PhysicsScene() {
//   const sceneRef = useRef();
//   const worldRef = useRef();
//   const spheres = useRef([]);
//   const cameraRef = useRef();

//   useEffect(() => {

//     window.addEventListener('resize', () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });
    
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//     camera.position.z = 100;
//     camera.position.y = 50;
//     // camera.lookAt(new THREE.Vector3(0,0,0));
//     // cameraRef.current = camera;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // sceneRef.current.appendChild(renderer.domElement);

//     // Lights
//     const light = new THREE.DirectionalLight(0xffffff, 3);
//     light.position.set(5, 10, 7);
//     scene.add(light);

//     // Cannon world setup
//     const world = new World();
//     world.gravity.set(0, -30.82, 0);
//     worldRef.current = world;

//     // Materials for bounce
//     const ballMaterial = new Material('ballMaterial');
//     const groundMaterial = new Material('groundMaterial');
//     const contactMaterial = new ContactMaterial(ballMaterial, groundMaterial, {
//       friction: 0.4,
//       restitution: 1, // Bounciness
//     });
//     world.addContactMaterial(contactMaterial);

//     // Ground body
//     const groundBody = new Body({
//       mass: 0, // Static
//       shape: new Plane(),
//       material: groundMaterial,
//     });
//     groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
//     world.addBody(groundBody);

//     // Ground mesh
//     const groundGeometry = new THREE.PlaneGeometry(5000, 5000);
//     const groundMaterialMesh = new THREE.MeshStandardMaterial({ color: 0x808080 });
//     const groundMesh = new THREE.Mesh(groundGeometry, groundMaterialMesh);
//     groundMesh.rotation.x = -Math.PI / 2;
//     scene.add(groundMesh);

//     // 🔄 Function to create spheres (Mesh + Body together)
//     function createSphere(radius, position) {
//       // Three.js mesh
//       const geometry = new THREE.SphereGeometry(radius, 32, 32);
//       const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//       const mesh = new THREE.Mesh(geometry, material);
//       scene.add(mesh);

//       // Cannon.js body
//       const shape = new Sphere(radius);
//       const body = new Body({
//         mass: 1,
//         shape: shape,
//         material: ballMaterial,
//       });
//       body.position.copy(position);
//       world.addBody(body);
     
      

//       // Store pair for updating
//       spheres.current.push({ mesh, body });
//     }

//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));
//     // createSphere(1, new Vec3(Math.random()*20, 20, Math.random()*20));

//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
//     // createSphere(1, new Vec3(-Math.random()*20, 20, -Math.random()*20));
   
//     // Create multiple spheres at random positions
//     for (let i = 0; i < 150; i++) {
//       createSphere(1, new Vec3(Math.random() * 20, 80, Math.random() * 20));
//       createSphere(1, new Vec3(-Math.random() * 20, 80, -Math.random() * 20));
//       createSphere(1, new Vec3(Math.random() * 10, 80, Math.random() * 10));
//       createSphere(1, new Vec3(-Math.random() * 10, 80, -Math.random() * 10));
//     }


//     // Animate loop
//     const clock = new THREE.Clock();
//     const animate = () => {
//       requestAnimationFrame(animate);
//       const delta = clock.getDelta();

//       world.step(1 / 60, delta, 3);

//       // Update meshes to match physics
//       spheres.current.forEach(({ mesh, body }) => {
//         mesh.position.copy(body.position);
//         mesh.quaternion.copy(body.quaternion);
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       renderer.dispose();
//       scene.clear();
//       spheres.current = [];
//     };
//   }, []);

//   // return <div ref={sceneRef} style={{ width: '100vw', height: '100vh' }} />;
//   return (
//     <Canvas style={{ height: "120vh" }}>
//       {/* OrbitControls allow us to move the camera */}
//       <OrbitControls />
      
//       {/* Create a plane with a basic material */}
//       <mesh>
//         <planeGeometry args={[5, 5]} />
//         <meshStandardMaterial color="lightblue" />
//       </mesh>

//       {/* Add a light source for better visibility */}
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//     </Canvas>
//   );

// }
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Physics, usePlane, useSphere } from '@react-three/cannon';
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../Navbar';

function Sphere({position}) {
  // Creating a sphere with physics properties using useSphere hook
  const [ref] = useSphere(() => ({
    mass: 5,  // Mass of the sphere
    // position: [0, 50, 0], // Initial position of the sphere (5 units above the ground)
    position: position,
    args: [1], // Radius of the sphere
    material:{
      restitution: 1,//Bounciness of the sphere, 0 (no bounce) to 1(maximum bounce)
    },
  }));

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function GroundPlane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Flat on the XZ axis
    position: [0, 0, 0],           // Ground level
    material: {
      restitution: 0.8, //Bounciness of the ground
    }
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[5000, 5000]} />
      <meshStandardMaterial color="black" side={THREE.DoubleSide} />
    </mesh>
  );
}


function App() {

 // State to store random sphere positions
 const [positions, setPositions] = useState([]);

 // Generate random positions for spheres
 useEffect(() => {
   const generateRandomPositions = (noSpheres) => {
     const newPositions = [];
     for (let i = 0; i < noSpheres; i++) {
       const x = Math.random() * 50 - 20; // Random x between -5 and 5
       const y = Math.random() * 20 + 200; // Random y between 10 and 30 (above ground)
       const z = Math.random() * 50 - 20; // Random z between -5 and 5
       newPositions.push([x, y, z]);
     }
     setPositions(newPositions); // Update state with new positions
   };

   generateRandomPositions(300); // Generate positions once when the component mounts
 }, []);

  // Reset positions when reset button is clicked
  const handleReset = () => {
    generateRandomPositions(500); // Generate new random positions for spheres
  };

    

  return (
    <>
    <Navbar />
    <Canvas 
      style={{ height: '100vh' }}
      camera={{ position: [300,100,10], fov:75}}
      gl={{ antialias: false }}>
      {/* Enable OrbitControls for camera interaction */}
      <OrbitControls 
        maxPolarAngle={Math.PI*2} 
        minPolarAngle={0}
        enablePan={true} />

      {/* Set up the physics engine */}
      <Physics 
        gravity={[0,-90, 0]}
        iterations={5}
        substeps={1}>
        {/* Add a sphere with physics properties */}
        {positions.map((position, index) => (
          <Sphere key={index} position={position} />
        ))}
        <GroundPlane/>
        
      </Physics>

      {/* Lighting */}
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />
    </Canvas>

       
    </>
  );
}

export default App;


