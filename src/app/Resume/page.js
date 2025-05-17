//code 5  safe keeping
'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import Navbar from './../Navbar';

const ParticleBlob = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Direct light
    directionalLight.position.set(1, 1, 1).normalize(); // Directional light position
    scene.add(directionalLight);

    const canvas = canvasRef.current;
    canvas.style.position = 'absolute'; // Remove any margins or padding
    canvas.style.top = '0';  // Make sure the canvas is at the top
    canvas.style.left = '0'; // Make sure the canvas is at the left
    
    // Set width and height to match the window size (add 'px' for CSS units)
    canvas.style.width = `${window.innerWidth}px`;  // Make canvas width equal to the viewport width
    canvas.style.height = `${window.innerHeight}px`; // Make canvas height equal to the viewport height
    // Load texture (if you want to use one)
    const textureLoader = new THREE.TextureLoader();
    const textureLoaderExr = new RGBELoader();

    const milkyWayTexture = textureLoader.load('/mw.jpg'); // Your Milky Way texture file path

    // Create a sphere geometry to represent the background
    const sphereGeometry = new THREE.SphereGeometry(100, 60, 60); // Large sphere
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: milkyWayTexture,
      // map: milkyWayTextureExr,
      // side: THREE.BackSide, // Make the texture appear inside the sphere
      side: THREE.DoubleSide,
      toneMapped: true, // Disable tone mapping for textures
      metalness: 0.2,
      roughness:0.7,
    });

    // Create the sphere mesh for the background
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Particle geometry and material
    const count = 15000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 50);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);  // Angle in the vertical direction
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i);  // Golden angle
    
      const radius = Math.random() * 1000;  // Blob size control
    
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);  // Spread particles in Z axis
    
      sizes[i] = Math.random() * 0.1 + 0.02; // Randomize particle size
    }
    

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // Particle color
      size: 3, // Default size
      sizeAttenuation: true,
      map: textureLoader.load('/star_07.png'), // Optional: add texture
      // map: texture,
      transparent: true,
      depthWrite: false
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Set camera position
    camera.position.z = 170;

    // OrbitControls for mouse interaction (rotation and zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.maxDistance = 230;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);


      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing of the window
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
      <Navbar />
    </>
  );
  
};

export default ParticleBlob;

