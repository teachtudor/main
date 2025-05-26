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

// import { Html, Sparkles } from '@react-three/drei';
// import { useThree, useFrame } from '@react-three/fiber';
// import React, { useRef } from 'react';

// const WordGlare = ({ word, position }) => {
//   const groupRef = useRef();
//   const { camera } = useThree();

//   // useFrame(() => {
//   //   if (groupRef.current) {
//   //     groupRef.current.lookAt(camera.position);
//   //   }
//   // });
//   useFrame(() => {
//   if (groupRef.current && camera) {
//     groupRef.current.quaternion.copy(camera.quaternion);
//   }
// });


//   return (
//     <group ref={groupRef} position={position}>
//       <Sparkles count={5000} scale={[5, 500, 10]} size={50} position={position} />
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

//code 3
// import { Html } from '@react-three/drei';
// import { useFrame, useThree } from '@react-three/fiber';
// import React, { useRef } from 'react';

// const WordGlare = ({ word, position }) => {
//   const groupRef = useRef();
//   const { camera } = useThree();

//   useFrame(() => {
//     if (groupRef.current && camera) {
//       groupRef.current.quaternion.copy(camera.quaternion);
//     }
//   });

//   return (
//     <group ref={groupRef} position={position}>
//       <Html center transform>
//         <div style={{
//           fontSize: '80px',
//           color: '#fff',
//           textShadow: '0 0 40px #0ff, 0 0 80px #0ff',
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

//code 4
// import { Html } from '@react-three/drei';
// import { useFrame, useThree } from '@react-three/fiber';
// import React, { useRef } from 'react';
// import Glare from './../Glare';

// const WordGlare = ({ word, position }) => {
//   const groupRef = useRef();
//   const { camera } = useThree();

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.quaternion.copy(camera.quaternion);
//     }
//   });

//   return (
//     <group ref={groupRef} position={position}>
//       <Glare scale={[3, 3, 1]} />
//       <Html center transform>
//         <div style={{
//           fontSize: '80px',
//           color: '#fff',
//           textShadow: '0 0 40px #0ff, 0 0 80px #0ff',
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

//code 5
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
      <Sparkles count={500} scale={[5, 5, 5]} size={10} color="cyan" />
      <Html center transform>
        <div style={{
          fontSize: '40px',
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
