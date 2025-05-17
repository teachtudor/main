//code 2 works great
'use client';
import { useState, useEffect } from 'react';
import SceneWrapper from './SceneWrapper';
import GroundPlane from './GroundPlane';
import ResizeListener from './ResizeListener';
import GLBModel from './GLBModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Navbar from '../Navbar';
import RadialHUD from './RadialHUD';

export default function Page() {
  const [keys, setKeys] = useState({});
  const [followEnabled, setFollowEnabled] = useState(true);
  const [selectedAnimation, setSelectedAnimation] = useState('');


  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: true }));
    };
    const handleKeyUp = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <Canvas
        shadows
        camera={{ position: [0, 5, 15], fov: 75 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[1, 1, 1]} intensity={3} castShadow />
        <OrbitControls enablePan enableZoom enableRotate enableDamping dampingFactor={0.1} rotateSpeed={0.3} enableKeys={false} />

        <Physics gravity={[0, -1300.81, 0]}>
          <SceneWrapper keys={keys} followEnabled={followEnabled} />
          <GroundPlane />
          <GLBModel url="/testbath.glb" position={[9.1, 0.1, -1.39]} scale={2.8} rotation={[0, Math.PI / 3, 0]} />
          <GLBModel url="/TKB.glb" position={[-2, 0.1, -2]} scale={2.7} rotation={[0, Math.PI * 1.34 / 4, 0]} />
          <GLBModel url="/livingRoom.glb" position={[5, 0.1, 10]} scale={1.3} rotation={[0, -Math.PI / 6, 0]} />
          <GLBModel url="/bedroom.glb" position={[-9.2, 0.1, 6.79]} scale={1.3} rotation={[0, Math.PI * 2.5 / 3, 0]} />
        </Physics>

        <ResizeListener />
      </Canvas>

      {/* ✅ Touch Controls for mobile/tablet */}
      <div className="fixed bottom-4 left-4 flex flex-col items-center gap-2 z-50 select-none">
        <button
          onTouchStart={() => setKeys((k) => ({ ...k, ArrowUp: true }))}
          onTouchEnd={() => setKeys((k) => ({ ...k, ArrowUp: false }))}
          className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
        >↑</button>

        <div className="flex gap-2">
          <button
            onTouchStart={() => setKeys((k) => ({ ...k, ArrowLeft: true }))}
            onTouchEnd={() => setKeys((k) => ({ ...k, ArrowLeft: false }))}
            className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
          >←</button>
          <button
            onTouchStart={() => setKeys((k) => ({ ...k, ArrowRight: true }))}
            onTouchEnd={() => setKeys((k) => ({ ...k, ArrowRight: false }))}
            className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
          >→</button>
        </div>

        <button
          onTouchStart={() => setKeys((k) => ({ ...k, ArrowDown: true }))}
          onTouchEnd={() => setKeys((k) => ({ ...k, ArrowDown: false }))}
          className="w-16 h-16 rounded-full bg-gray-800 text-white text-2xl shadow"
        >↓</button>
      </div>

      {/* Dropdown + Go button UI (compact) */}
      <div className="fixed bottom-4 right-4 z-50 select-none flex flex-col items-end gap-1 bg-black bg-opacity-70 p-2 rounded shadow w-44">
        {/* ✅ New R Button */}
        <button
          onMouseDown={() => setKeys((k) => ({ ...k, r: true }))}
          onMouseUp={() => setKeys((k) => ({ ...k, r: false }))}
          onTouchStart={() => setKeys((k) => ({ ...k, r: true }))}
          onTouchEnd={() => setKeys((k) => ({ ...k, r: false }))}
          className="w-10 h-10 rounded-full bg-red-600 text-white font-bold shadow text-lg"
        >
          R
        </button>
        <select
          value={selectedAnimation}
          onChange={(e) => setSelectedAnimation(e.target.value)}
          className="w-full bg-white text-black px-2 py-1 text-sm rounded max-h-40 overflow-y-auto"
        >
          <option value="">Select animation</option>
          <option value="a">Back Flip</option>
          <option value="b">Electrocuted</option>
          <option value="c1">Crunch</option>
          <option value="d">Cry</option>
          <option value="e">Dribble</option>
          <option value="f">Die</option>
          <option value="g">Fallen Idle</option>
          <option value="h">Fall</option>
          <option value="i">Get Up</option>
          <option value="j">Golf</option>
          <option value="k">Guitar</option>
          <option value="l">Head Spin</option>
          <option value="m">Idle</option>
          <option value="n">Headbutt</option>
          <option value="o">Jump</option>
          <option value="p">Kiss</option>
          <option value="q">Knocked Out</option>
          <option value="r1">Laugh</option>
          <option value="s">Turn Left</option>
          <option value="t">MMA Kick</option>
          <option value="u">Offensive Idle</option>
          <option value="v">Piano</option>
          <option value="w">Pray</option>
          <option value="x">Pull Rope</option>
          <option value="y">Punch</option>
          <option value="z">Put Down</option>
          <option value="one">Turn Right</option>
          <option value="two">Rope Climb</option>
          <option value="three">Run 1</option>
          <option value="bb">Salsa</option>
          <option value="five">Sit</option>
          <option value="six">Walk</option>
        </select>

        <button
          onMouseDown={() => selectedAnimation && setKeys((k) => ({ ...k, [selectedAnimation]: true }))}
          onMouseUp={() => selectedAnimation && setKeys((k) => ({ ...k, [selectedAnimation]: false }))}
          onTouchStart={() => selectedAnimation && setKeys((k) => ({ ...k, [selectedAnimation]: true }))}
          onTouchEnd={() => selectedAnimation && setKeys((k) => ({ ...k, [selectedAnimation]: false }))}
          className="w-full bg-red-600 text-white font-semibold py-1 px-2 rounded text-sm shadow"
        >
          Go
        </button>
      </div>


      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setFollowEnabled((prev) => !prev)}
          className="mt-12 px-4 py-2 rounded bg-blue-600 text-white font-bold shadow"
        >
          {followEnabled ? 'Free Orbit' : 'Follow Cam'}
        </button>
      </div>
    </>
  );
}


