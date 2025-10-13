"use client";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, useTexture } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";

// -----------------------------
// Button component
// -----------------------------

function Button({ label, color = "#FFD700", position, onClick, target }) {
  const meshRef = useRef();
  const router = useRouter();
  const [pressed, setPressed] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      // smooth animation toward pressed or released state
      const targetY = pressed ? 0.2 : 0.4;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.2;
    }
  });

 const handleClick = () => {
  setPressed(true);

  // Defer routing to next tick
  setTimeout(() => {
    if (target) {
      router.push(target); // this will now reliably trigger navigation
    }
    setPressed(false);
  }, 0);
};


  return (
    <group position={position}>
      {/* Receptacle */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.2, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

    {/* Cylinder button */}
    <mesh
        ref={meshRef}
        position={[0, 0.4, 0]}
        castShadow
        receiveShadow
        onPointerDown={() => {
            setPressed(true);
            setTimeout(() => {
            if (target) router.push(target);
            setPressed(false);
            }, 150);
        }}
>
        <cylinderGeometry args={[1.5, 1.5, 0.6, 32]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.2} />
        {/* Text label */}
      <Text
        position={[0, 0.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </mesh>
      
    </group>
  );
}

// -----------------------------
// Table component
// -----------------------------
function Table({ buttons, directories, onLoad }) {
  const woodTexture = useTexture("/wood.jpg", () => onLoad?.());

  useEffect(() => {
    // notify TableScene that loading is done
    onLoad?.();
  }, []);

  return (
    <mesh rotation={[-0.005, 0, 0]} position={[0, 2, 2]} receiveShadow>
      <boxGeometry args={[20, 0.8, 15]} />
      <meshStandardMaterial map={woodTexture} color={0xffffff}      // brightens the overall material
        emissive={0x222222}   // subtle glow
        emissiveIntensity={2} 
        roughness={0.7}
        />
      
      {/* Place buttons on top */}
      {buttons.map((btn, idx) => {
        const row = Math.floor(idx / 4);
        const col = idx % 4;
        const x = -7.5 + col * 5;
        const z = 4 - row * 4;
        return (
          <Button
            key={idx}
            label={btn.label}
            color={btn.color}
            position={[x, 0.5, z]}
            target={directories[idx] || '/'}
            onClick={() => btn.onClick()}
          />
        );
      })}
    </mesh>
  );
}

// -----------------------------
// Scene
// -----------------------------
export default function TableScene() {

  const [loaded, setLoaded] = useState(false);

const buttons = [
  { label: "Places", color: "#FF4500", onClick: () => console.log("Places") },         // OrangeRed
  { label: "AmazonMaze", color: "#32CD32", onClick: () => console.log("AmazonMaze") },  // LimeGreen
  { label: "Portfolio", color: "#1E90FF", onClick: () => console.log("Portfolio") },   // DodgerBlue
  { label: "ET", color: "#8A2BE2", onClick: () => console.log("ET") },                 // BlueViolet
  { label: "TPR", color: "#FF1493", onClick: () => console.log("TPR") },               // DeepPink
  { label: "TPR Toggle", color: "#00CED1", onClick: () => console.log("TPR Toggle") }, // DarkTurquoise
  { label: "Statistics Study", color: "#FFD700", onClick: () => console.log("Statistics Study") }, // Gold
  { label: "Word Test", color: "#FF8C00", onClick: () => console.log("Word Test") },   // DarkOrange
  { label: "Slide Presentation", color: "#ADFF2F", onClick: () => console.log("Slide Presentation") }, // GreenYellow
  { label: "Slide Presentation 2", color: "#FF69B4", onClick: () => console.log("Slide Presentation ML") }, // HotPink
  { label: "Magic Ball Game", color: "#00FA9A", onClick: () => console.log("Magic Ball Game") }, // MediumSpringGreen
  { label: "JLPT Game", color: "#BA55D3", onClick: () => console.log("JLPT Game") },  // MediumOrchid
];



  const directories = ['PLACES', 'maze-gameWL', 'portfolio', 'ET', 'TPRGravitytest2', 'blog/11', 'blog/19', 'blog/5', 'blog/1','blog/2','blog/6' ,'blog/7']; 

  return (
    <>
        {!loaded && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
        }}>
            <div style={{
                border: '8px solid #f3f3f3',
                borderTop: '8px solid #3498db',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                animation: 'spin 1s linear infinite'
            }} />
        </div>
        )}

        {/* 3D table scene */}
        <Canvas shadows camera={{ position: [0, 10, 20], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
            <Suspense fallback={null}>
                <Table buttons={buttons} directories={directories} onLoad={() => setLoaded(true)} />
            </Suspense>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
        
        {/* Arrow button overlay */}
        <div
            style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            fontSize: "2rem",
            color: "#fff",
            zIndex: 10,
            }}
            onClick={() => {
                // Scroll down by a fixed amount (adjust 600 to your canvas height)
                window.scrollBy({ top: 600, behavior: "smooth" });
            }}
        >
            ⬇️
        </div>
    </>
    
  );
}
