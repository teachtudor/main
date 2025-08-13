
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

const gameColors = [
  'blue', 'red', 'green', 'purple',
  'orange', 'yellow', 'black', 'white',
]

export default function Board({ moveBy }) {
  const tokenRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [queue, setQueue] = useState([])
  const targetPos = useRef(null)
  const moveProgress = useRef(0)

  // Arrange tiles counterclockwise
  const positions = useMemo(() => {
    const size = 5
    const spacing = 2.5
    const tiles = []

    for (let i = 0; i < size; i++) tiles.push([i * spacing, 0, 0])                         // Bottom row
    for (let i = 1; i < size; i++) tiles.push([(size - 1) * spacing, 0, -i * spacing])     // Right column
    for (let i = size - 2; i >= 0; i--) tiles.push([i * spacing, 0, -(size - 1) * spacing]) // Top row
    for (let i = size - 2; i >= 1; i--) tiles.push([0, 0, -i * spacing])                    // Left column

    return tiles
  }, [])

  const woodTexture = useLoader(TextureLoader, '/wood.jpg')

  // When moveBy changes, enqueue steps
  useEffect(() => {
    if (typeof moveBy === 'number' && moveBy > 0) {
      const steps = Array.from({ length: moveBy }, (_, i) => (currentIndex + i + 1) % positions.length)
      setQueue(steps)
    }
  }, [moveBy])

  // Animate movement one step at a time
  useFrame((_, delta) => {
    if (!tokenRef.current || queue.length === 0) return

    if (!targetPos.current) {
      const nextIndex = queue[0]
      const [x, , z] = positions[nextIndex]
      targetPos.current = new THREE.Vector3(x - 5, 0.5, z + 5)
      moveProgress.current = 0
    }

    const currentPos = tokenRef.current.position
    moveProgress.current += delta * 2
    const t = Math.min(moveProgress.current, 1)

    currentPos.lerpVectors(currentPos, targetPos.current, t)

    if (t >= 1) {
      // Step completed
      tokenRef.current.position.copy(targetPos.current)
      setCurrentIndex(queue[0])
      setQueue((q) => q.slice(1))
      targetPos.current = null
    }
  })

  return (
    <group>
      {/* Board Base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[15, 2, 15]} />
        <meshStandardMaterial map={woodTexture} />
      </mesh>

      {/* Colored Squares */}
      {positions.map(([x, y, z], i) => {
        const color = gameColors[i % gameColors.length]
        return (
          <mesh key={i} position={[x - 5, y + 0.01, z + 5]}>
            <boxGeometry args={[2.3, 0.2, 2.3]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )
      })}

      {/* Player Token */}
      <mesh
        ref={tokenRef}
        position={[positions[currentIndex][0] - 5, 0.5, positions[currentIndex][2] + 5]}
      >
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="gold" />
      </mesh>
    </group>
  )
}
