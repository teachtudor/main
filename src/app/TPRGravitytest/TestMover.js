import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

export default function TestMover() {
  const [ref, api] = useBox(() => ({
    type: 'Dynamic',
    mass: 1,
    position: [0, 10, 0],
    args: [1, 1, 1],
  }));

  useFrame(() => {
    api.velocity.set(2, 0, 0); // force move right every frame
    console.log('Position:', ref.current.position.toArray());
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
