// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Board from './Board'

// export default function Home() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas camera={{ position: [0, 20, 20], fov: 50 }}>
//         <ambientLight intensity={5.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <OrbitControls />
//         <Board />
//       </Canvas>
//     </div>
//   )
// }


'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Board from './Board'
import Spinner from './Spinner'
import { useState } from 'react'
import { Environment } from '@react-three/drei'

export default function Home() {
  const [rolledNumber, setRolledNumber] = useState(null)

  const handleSpin = (result) => {
    setRolledNumber(result)
    console.log('Player moves:', result, 'spaces')
    // TODO: Move player logic here
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 20, 20], fov: 50 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls minDistance={10} maxDistance={50}/>
        <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_02_1k.hdr"
            background={false}
            blur={0.8}
        />
        <Board moveBy={rolledNumber} />
        <Spinner onSpin={handleSpin} />
      </Canvas>

      {/* Display number */}
      {rolledNumber && (
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          fontSize: '2rem',
          background: 'white',
          padding: '10px',
          borderRadius: '8px'
        }}>
          You rolled: {rolledNumber}
        </div>
      )}
    </div>
  )
}
