// import { useRef, useState, useMemo } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Text } from '@react-three/drei'
// import * as THREE from 'three'

// const SECTIONS = 21
// const RADIUS = 2.5
// const ARROW_HEIGHT = 0.2

// export default function Spinner({ onSpin }) {
//   const spinnerRef = useRef()
//   const buttonRef = useRef()
//   const arrowRef = useRef()
//   const vel = useRef(0)
//   const [spinning, setSpinning] = useState(false)
//   const [result, setResult] = useState(null)
//   const [pressed, setPressed] = useState(false)
//   const pressProgress = useRef(0)

//   const PRESS_DOWN_Y = -0.2
//   const PRESS_UP_Y = 0

//   // Precompute segment data with angle, x,z coords
//   const segments = useMemo(() => {
//     const step = (2 * Math.PI) / SECTIONS
//     return Array.from({ length: SECTIONS }).map((_, i) => {
//       const angle = i * step
//       return {
//         angle,
//         label: `${i}`,
//         x: Math.cos(angle) * RADIUS,
//         z: Math.sin(angle) * RADIUS
//       }
//     })
//   }, [])

//   // const triggerSpin = () => {
//   //   if (spinning) return

//   //   if (buttonRef.current) buttonRef.current.position.y = PRESS_DOWN_Y
//   //   setPressed(true)
//   //   pressProgress.current = 0

//   //   setTimeout(() => {
//   //     vel.current = THREE.MathUtils.randFloat(0.3, 0.8)
//   //     setSpinning(true)
//   //     setResult(null)
//   //   }, 100)
//   // }

//   const triggerSpin = () => {
//     if (spinning) return

//     // 🔊 Play the spin sound immediately on user click
//     const spinSound = new Audio('/spinning.ogg')
//     spinSound.volume = 1.0
//     spinSound.currentTime = 0
//     spinSound.play().catch(err => {
//       console.warn('Audio play failed:', err)
//     })

//     if (buttonRef.current) buttonRef.current.position.y = PRESS_DOWN_Y
//     setPressed(true)
//     pressProgress.current = 0

//     // Small delay before spin starts (this is fine)
//     setTimeout(() => {
//       vel.current = THREE.MathUtils.randFloat(0.3, 0.8)
//       setSpinning(true)
//       setResult(null)
//     }, 100)
//   }


//   useFrame((_, delta) => {
//     if (spinning && spinnerRef.current) {
//       spinnerRef.current.rotation.y += vel.current
//       vel.current = Math.max(0, vel.current - delta * 0.1)

//       if (vel.current <= 0.001) {
//         setSpinning(false)

//         // Normalize rotation between 0 and 2π
//         const rawAngle = spinnerRef.current.rotation.y % (2 * Math.PI)
//         const adjustedAngle = (rawAngle + 2 * Math.PI) % (2 * Math.PI)

//         // Each segment angle size
//         const segmentAngle = (2 * Math.PI) / SECTIONS

//         // Winning index considering arrow points +X axis
//         const index = (SECTIONS - Math.floor(adjustedAngle / segmentAngle)) % SECTIONS

//         setResult(index)
//         onSpin?.(index)
//       }
//     }

//     // Animate button press up
//     if (pressed && buttonRef.current) {
//       pressProgress.current += delta * 1.5
//       buttonRef.current.position.y = THREE.MathUtils.lerp(
//         PRESS_DOWN_Y,
//         PRESS_UP_Y,
//         pressProgress.current
//       )
//       if (pressProgress.current >= 1) {
//         buttonRef.current.position.y = PRESS_UP_Y
//         setPressed(false)
//       }
//     }

//     // Update arrow position every frame to point at current highlighted segment

//     if (spinnerRef.current && arrowRef.current) {
//       // Get spinner rotation normalized [0, 2π)
//       const rawAngle = spinnerRef.current.rotation.y % (2 * Math.PI)
//       const adjustedAngle = (rawAngle + 2 * Math.PI) % (2 * Math.PI)
//       const segmentAngle = (2 * Math.PI) / SECTIONS

//       // Current index arrow should point at (same formula)
//       const index = (SECTIONS - Math.floor(adjustedAngle / segmentAngle)) % SECTIONS

//       // Get segment angle for that index
//       const targetAngle = index * segmentAngle

//       // Position arrow slightly above the segment number (x,z on circle)
//       const arrowX = Math.cos(targetAngle) * RADIUS
//       const arrowZ = Math.sin(targetAngle) * RADIUS

//       // Place arrow at (x, y, z), with y raised a bit (ARROW_HEIGHT)
//       arrowRef.current.position.set(arrowX, ARROW_HEIGHT, arrowZ)

//       // Make arrow point inward toward the center (0,0)
//       // Arrow's local cone geometry points +Y by default, rotated below
//       // So arrow should rotate to face center:
//       // Vector from arrow position to center: (0 - arrowX, 0 - arrowZ)
//       const lookAtVector = new THREE.Vector3(0, ARROW_HEIGHT, 0)
//       arrowRef.current.lookAt(lookAtVector)
//     }
//   })

//   return (
//     <group position={[0, 0, 0]}>
//       {/* Spinner rotates */}
//       <group ref={spinnerRef} rotation={[0, 0, 0]}>
//         <mesh>
//           <coneGeometry args={[1, 1.5, 4]} />
//           <meshStandardMaterial
//             color="#ffffff"
//             metalness={1.5}
//             roughness={0.09}
//             envMapIntensity={5}
//           />
//         </mesh>
//       </group>

//       {/* Arrow moves dynamically each frame */}
//       <mesh
//         ref={arrowRef}
//         rotation={[Math.PI / 2, 0, 0]} // Point cone along +Z initially
//       >
//         <coneGeometry args={[0.4, 1.2, 8]} color={'green'}/>
//         <meshStandardMaterial color="#D4AF37" />
      
//       </mesh>

//       {/* Circular Number Labels */}
//       {segments.map(({ x, z, label }, i) => (
//         <Text
//           key={i}
//           position={[x, 0.1, z]}
//           rotation={[-Math.PI / 2, 0, 0]}
//           fontSize={0.4}
//           color={i === result ? 'lime' : 'white'}
//           anchorX="center"
//           anchorY="middle"
//         >
//           {label}
//         </Text>
//       ))}

//       {/* SPIN Button */}
//       <group position={[10, 0, -5]}>
//         <mesh
//           ref={buttonRef}
//           onClick={triggerSpin}
//           position={[0, 0, 0]}
//           scale={[1, 1, 1]}
//         >
//           <cylinderGeometry args={[1.6, 1.6, 1.2, 32]} />
//           <meshStandardMaterial color="hotpink" />
//           <Text
//             position={[0, 0.7, 0]}
//             fontSize={0.9}
//             rotation={[-Math.PI / 2, 0, 0]}
//             color="black"
//             anchorX="center"
//             anchorY="middle"
//           >
//             SPIN
//           </Text>
//         </mesh>
//       </group>
//     </group>
//   )
// }


//code 2
import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const SECTIONS = 21
const RADIUS = 2.5
const ARROW_HEIGHT = 0.2

export default function Spinner({ onSpin }) {
  const spinnerRef = useRef()
  const buttonRef = useRef()
  const arrowRef = useRef()
  const vel = useRef(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState(null)
  const [pressed, setPressed] = useState(false)
  const pressProgress = useRef(0)
  const lastTickIndex = useRef(null) // 🆕 Track last segment passed

  const PRESS_DOWN_Y = -0.2
  const PRESS_UP_Y = 0

  const segments = useMemo(() => {
    const step = (2 * Math.PI) / SECTIONS
    return Array.from({ length: SECTIONS }).map((_, i) => {
      const angle = i * step
      return {
        angle,
        label: `${i}`,
        x: Math.cos(angle) * RADIUS,
        z: Math.sin(angle) * RADIUS
      }
    })
  }, [])

  const triggerSpin = () => {
    if (spinning) return

    // Optional: play a spin-start sound
    const spinSound = new Audio('/spinning.ogg')
    spinSound.volume = 1.0
    spinSound.currentTime = 0
    spinSound.play().catch(err => {
      console.warn('Audio play failed:', err)
    })

    if (buttonRef.current) buttonRef.current.position.y = PRESS_DOWN_Y
    setPressed(true)
    pressProgress.current = 0

    setTimeout(() => {
      vel.current = THREE.MathUtils.randFloat(0.3, 0.8)
      setSpinning(true)
      setResult(null)
    }, 100)
  }

  useFrame((_, delta) => {
    if (spinning && spinnerRef.current) {
      spinnerRef.current.rotation.y += vel.current
      vel.current = Math.max(0, vel.current - delta * 0.1)

      const rawAngle = spinnerRef.current.rotation.y % (2 * Math.PI)
      const adjustedAngle = (rawAngle + 2 * Math.PI) % (2 * Math.PI)
      const segmentAngle = (2 * Math.PI) / SECTIONS
      const index = (SECTIONS - Math.floor(adjustedAngle / segmentAngle)) % SECTIONS

      // 🔊 Play tick sound when spinner passes a new segment
      if (index !== lastTickIndex.current) {
        lastTickIndex.current = index
        const tickSound = new Audio('/MetalClick.wav')
        tickSound.volume = 1.0
        tickSound.play().catch(err => {
          console.warn('Tick sound failed:', err)
        })
      }

      if (vel.current <= 0.001) {
        setSpinning(false)
        setResult(index)
        onSpin?.(index)
      }
    }

    // Button press-up animation
    if (pressed && buttonRef.current) {
      pressProgress.current += delta * 1.5
      buttonRef.current.position.y = THREE.MathUtils.lerp(
        PRESS_DOWN_Y,
        PRESS_UP_Y,
        pressProgress.current
      )
      if (pressProgress.current >= 1) {
        buttonRef.current.position.y = PRESS_UP_Y
        setPressed(false)
      }
    }

    // Arrow follows current index
    if (spinnerRef.current && arrowRef.current) {
      const rawAngle = spinnerRef.current.rotation.y % (2 * Math.PI)
      const adjustedAngle = (rawAngle + 2 * Math.PI) % (2 * Math.PI)
      const segmentAngle = (2 * Math.PI) / SECTIONS
      const index = (SECTIONS - Math.floor(adjustedAngle / segmentAngle)) % SECTIONS
      const targetAngle = index * segmentAngle

      const arrowX = Math.cos(targetAngle) * RADIUS
      const arrowZ = Math.sin(targetAngle) * RADIUS
      arrowRef.current.position.set(arrowX, ARROW_HEIGHT, arrowZ)

      const lookAtVector = new THREE.Vector3(0, ARROW_HEIGHT, 0)
      arrowRef.current.lookAt(lookAtVector)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Spinner */}
      <group ref={spinnerRef} rotation={[0, 0, 0]}>
        <mesh>
          <coneGeometry args={[1, 1.5, 4]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={1.5}
            roughness={0.09}
            envMapIntensity={5}
          />
        </mesh>
      </group>

      {/* Arrow */}
      <mesh
        ref={arrowRef}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <coneGeometry args={[0.4, 1.2, 8]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>

      {/* Segment Numbers */}
      {segments.map(({ x, z, label }, i) => (
        <Text
          key={i}
          position={[x, 0.1, z]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.4}
          color={i === result ? 'lime' : 'white'}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      ))}

      {/* Spin Button */}
      <group position={[10, 0, -5]}>
        <mesh
          ref={buttonRef}
          onClick={triggerSpin}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
        >
          <cylinderGeometry args={[1.6, 1.6, 1.2, 32]} />
          <meshStandardMaterial color="hotpink" />
          <Text
            position={[0, 0.7, 0]}
            fontSize={0.9}
            rotation={[-Math.PI / 2, 0, 0]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            SPIN
          </Text>
        </mesh>
      </group>
    </group>
  )
}

