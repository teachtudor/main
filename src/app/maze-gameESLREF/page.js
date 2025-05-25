//code 5 interim works great
'use client';

import { useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Camera from './Camera';
import Character from './Character';
import GroundPlane from './GroundPlane';
import InstancedMazeWalls from './InstancedMazeWalls';
import { generateWallBoxes } from './InvisibleMazeColliders';
import OnScreenControls from './OnScreenControls';
import useCharacterControls from './useCharacterControls';
import SkyDome from './SkyDome';
import SurroundGrassPlane from './SurroundGrassPlane';
import PathLine from './PathLine'; // ✅ new import
import { useStore } from './store';
import CoinManager from './CoinManager';
import QuestionPopup from './components/QuestionPopup';
import { QuestionTrigger } from './events/QuestionTrigger';
import { loadWordList } from './utils/wordManager';
import { Sparkles } from '@react-three/drei';
import QuestionPopup3D from './components/QuestionPopup3D';

function CoinHUD() {
  const coins = useStore((state) => state.coins);
  return (
    <div style={{
      position: 'absolute',
      top: 20,
      left: 20,
      color: 'gold',
      fontSize: '20px',
      fontWeight: 'bold',
      zIndex: 1000
    }}>
      🪙 {coins}
    </div>
  );
}

export default function MazePage() {
  const [grid, setGrid] = useState([]);
  const [modelRef, setModelRef] = useState(null);
  const { keys, setControl } = useCharacterControls();
  const [showPath, setShowPath] = useState(false); // ✅ toggle state
  const [lightOn, setLightOn] = useState(true);
  const [musicMuted, setMusicMuted] = useState(false);
  const [mazePath, setMazePath] = useState([]);
  const { currentQuestion, showQuestionPopup, triggerQuestion, closeQuestion } = useStore();
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    loadWordList().then(setWordList).catch(err => console.error('❌ Word list load error:', err));
  }, []);

  useEffect(() => {
    fetch('/maze-assets/maze_grid.json')
      .then((res) => res.json())
      .then((data) => setGrid(data))
      .catch((err) => console.error('❌ Maze load error:', err));
  }, []);

  useEffect(() => {
  fetch('/maze-assets/maze_path.json')
    .then((res) => res.json())
    .then((data) => setMazePath(data))
    .catch((err) => console.error('❌ Maze path load error:', err));
  }, []);

  useEffect(() => {
  if (!wordList.length) return;  // Wait until wordList is loaded

  const interval = setInterval(() => {
    QuestionTrigger(wordList, triggerQuestion);
  }, 20000);  // 20 seconds = 20000 ms

  return () => clearInterval(interval);
}, [wordList, triggerQuestion]);




  const wallBoxes = useMemo(() => (grid.length > 0 ? generateWallBoxes(grid) : []), [grid]);

  const handleAnswerSelected = (isCorrect) => {
  if (isCorrect) {
    useStore.getState().addCoins(10);  // or any amount you want
  } else {
    useStore.getState().addCoins(-5);  // penalty for wrong answer
  }
  closeQuestion();
};

let popupPosition = [0, 2, 0];
if (modelRef && modelRef.position) {
  popupPosition = [
    modelRef.position.x,
    modelRef.position.y + 2,
    modelRef.position.z
  ];
}



  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <OnScreenControls setControl={setControl} />
      <CoinHUD/>

      {/* ✅ Show/Hide Path Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowPath((prev) => !prev);
        }}
        onTouchStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: '10px 20px',
          fontSize: '16px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          touchAction: 'none',
        }}
      >
        {showPath ? 'Hide Path' : 'Show Path'}
      </button>

      {/* ✅ Toggle Glow */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setLightOn((prev) => !prev);
        }}
        onTouchStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: 'absolute',
          top: 70,
          right: 20,
          zIndex: 1000,
          padding: '10px 20px',
          fontSize: '16px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          touchAction: 'none',
        }}
      >
        Toggle Glow
      </button>

      {/* ✅ Toggle Music (It's stupid remove it*/}
      <button
        onClick={(e) => {
          e.preventDefault();
          setMusicMuted((prev) => !prev);
        }}
        onTouchStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: 'absolute',
          top: 120,
          right: 20,
          zIndex: 1000,
          padding: '10px 20px',
          fontSize: '16px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          touchAction: 'none',
        }}
      >
        {musicMuted ? 'Unmute Music' : 'Mute Music'}
      </button>

      <button
        onClick={() => {
          QuestionTrigger(wordList, triggerQuestion);
        }}
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 1000,
          padding: '10px 20px',
          background: '#fff',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Test Question
      </button>

      {showQuestionPopup && currentQuestion && (
        <QuestionPopup 
          image={currentQuestion.image}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correct}
          onAnswerSelected={handleAnswerSelected}
        />
      )}



      <Canvas shadows camera={{ position: [0, 25000, 0], fov: 60, near: 0.1, far: 30000 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 20, 10]} intensity={0.5} />
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.6} />
        <SkyDome />
        <directionalLight
          position={[10, 30, -10]}
          intensity={10}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={100}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />
        <SurroundGrassPlane />
        <GroundPlane />
        

        {grid.length > 0 && <InstancedMazeWalls grid={grid} />}
        {grid.length > 0 && (
          <Character 
            onModelRef={setModelRef} 
            wallBoxes={wallBoxes} 
            keys={keys} 
            lightOn={lightOn}
            musicMuted={musicMuted}
          />
        )}

        {/* ✅ Path line toggle */}
        <PathLine visible={showPath} />

        {showQuestionPopup && currentQuestion && (
          <>
            
            <Sparkles
              count={150}
              scale={[10, 10, 10]}
              size={10}
              position={popupPosition}
            />

          </>
        )}


        <Camera targetRef={modelRef} />
        {/* {modelRef && mazePath.length > 0 && (
          <CoinManager characterRef={modelRef} mazePath={mazePath}/>
        )} */}

      </Canvas>
    </div>
  );
}

