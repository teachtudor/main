//code 7 Character.js
'use client';

import { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useCharacterControls from './useCharacterControls';
import animationList from './animationList';
import { loadExternalAnimation } from './loadAnimations';
import { RigidBody, useRapier } from '@react-three/rapier';

export default function Character({ onModelRef }) {
  const { scene, animations: idleAnimations } = useGLTF('/idlePaul.glb');
  const modelRef = useRef();
  const mixerRef = useRef();
  const physicsRef = useRef();
  const currentAction = useRef(null);
  const [position, setPosition] = useState([0, 0, 0]);
  const [actions, setActions] = useState({});
  const keys = useCharacterControls();

  // Load start position from maze_path
  useEffect(() => {
    fetch('/maze-assets/maze_path.json')
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) {
          const [x, y] = data[0];
          setPosition([x, 1, y]);
        }
      });
  }, []);

  // Load all animations
  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    async function loadAllAnimations() {
      const loaded = {};

      for (const anim of animationList) {
        const clip = anim.name === 'Idle'
          ? idleAnimations[0]
          : await loadExternalAnimation(anim.file);

        if (clip) loaded[anim.name] = mixer.clipAction(clip);
      }

      if (loaded['Idle']) {
        loaded['Idle'].play();
        currentAction.current = loaded['Idle'];
        console.log('Idle loaded');
      }

      setActions(loaded);
    }

    loadAllAnimations();
  }, [scene, idleAnimations]);

  // Handle animation transitions
  useEffect(() => {
    if (Object.keys(actions).length === 0) return;

    let next = 'Idle';
    let reverse = false;

    if (keys.jump) next = 'JumpingPaul';
    else if (keys.backward) {
      next = 'WalkingPaul';
      reverse = true;
    } else if (keys.forward && keys.run) next = 'RunningPaul';
    else if (keys.forward) next = 'WalkingPaul';
    else if (keys.left) next = 'LeftTurnPaul';
    else if (keys.right) next = 'RightTurnPaul';

    const nextAction = actions[next];
    if (!nextAction || currentAction.current === nextAction) return;

    currentAction.current?.fadeOut(0.2);

    if (reverse) {
      nextAction.timeScale = -1;
      nextAction.time = nextAction.getClip().duration;
    } else {
      nextAction.timeScale = 1;
      nextAction.time = 0;
    }

    nextAction.reset().fadeIn(0.2).play();
    currentAction.current = nextAction;
  }, [keys, actions]);

  // Movement logic
  useFrame((_, delta) => {
    mixerRef.current?.update(delta);

    if (!physicsRef.current || !modelRef.current) return;

    const speed = keys.forward && keys.run ? 6 : 2.5;
    const dir = new THREE.Vector3();

    if (keys.forward) dir.z -= 1;
    if (keys.backward) dir.z += 1;

    if (dir.length() > 0) {
      dir.normalize().applyQuaternion(modelRef.current.quaternion).multiplyScalar(speed);
    }

    physicsRef.current.setLinvel({ x: dir.x, y: 0, z: dir.z }, true);
    console.log('Dir', dir);

    // Turn
    if (keys.left) modelRef.current.rotation.y += 0.05;
    if (keys.right) modelRef.current.rotation.y -= 0.05;
  });

  useEffect(() => {
    if (onModelRef) onModelRef(modelRef);
  }, [onModelRef]);

  return (
    <RigidBody
      ref={physicsRef}
      position={position}
      colliders="cuboid"
      type="dynamic"
      mass={1}
      friction={0.5}
      restitution={0}
      linearDamping={0.3}
      angularDamping={1}
      enabledRotations={[false, true, false]} // allow Y-axis only
    >
      <primitive ref={modelRef} object={scene} scale={0.05} />
    </RigidBody>
  );
}
