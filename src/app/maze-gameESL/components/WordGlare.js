// import { Html, Sparkles, useThree, useFrame } from '@react-three/drei';
// import React, { useRef } from 'react';

// const WordGlare = ({ word, position }) => (
//   <group position={position} rotation={[0, Math.PI, 0]}>
//     <Sparkles count={200} scale={[10, 10, 10]} size={20} position={position} />
//     <Html center transform>
//       <div style={{
//         fontSize: '80px',
//         color: '#fff',
//         textShadow: '0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff',
//         filter: 'blur(0.5px) drop-shadow(0 0 20px #0ff)',
//         animation: 'pulse 2s infinite',
//         fontWeight: 'bold'
//       }}>
//         {word}
//       </div>
//     </Html>
//   </group>
// );

// export default WordGlare;

//code 2

import { Html, Sparkles } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const WordGlare = ({ word, position }) => {
  const groupRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Sparkles count={200} scale={[100, 100, 100]} size={20} position={position} />
      <Html center transform>
        <div style={{
          fontSize: '80px',
          color: '#fff',
          textShadow: '0 0 20px #0ff, 0 0 40px #0ff',
          filter: 'blur(0.5px) drop-shadow(0 0 20px #0ff)',
          animation: 'pulse 2s infinite',
          fontWeight: 'bold'
        }}>
          {word}
        </div>
      </Html>
    </group>
  );
};

export default WordGlare;


//code 3
// import { Html, Sparkles } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import React, { useRef } from 'react';

// const WordGlare = ({ word, position, modelRef }) => {
//   const groupRef = useRef();

//   useFrame(() => {
//     if (groupRef.current && modelRef) {
//       groupRef.current.lookAt(modelRef.position);
//     }
//   });

//   return (
//     <group ref={groupRef} position={position} rotation={[0, Math.PI, 0]}>
//       <Sparkles count={200} scale={[10, 10, 10]} size={20} position={position} />
//       <Html center transform>
//         <div style={{
//           fontSize: '80px',
//           color: '#fff',
//           textShadow: '0 0 20px #0ff, 0 0 40px #0ff',
//           filter: 'blur(0.5px) drop-shadow(0 0 20px #0ff)',
//           animation: 'pulse 2s infinite',
//           fontWeight: 'bold'
//         }}>
//           {word}
//         </div>
//       </Html>
//     </group>
//   );
// };

// export default WordGlare;
