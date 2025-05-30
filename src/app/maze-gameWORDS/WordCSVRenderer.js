'use client';

import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Text } from '@react-three/drei';

const LEVEL_COLORS = {
  A1: 'yellow',
  A2: 'yellow',
  B1: 'blue',
  B2: 'blue',
  C1: 'green',
  C2: 'green',
};

export default function WordCSVRenderer({ followEnabled, grid, characterRef }) {
  const { camera } = useThree();
  const groupRef = useRef();
  const [wordData, setWordData] = useState([]);

  // Load all words once
  useEffect(() => {
    fetch('/CEFR%20UNFETTERED.csv')
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const valid = results.data.filter((row) => row.headword && row.CEFR);
            console.log("📖 Loaded", valid.length, "words from CSV");
            setWordData(valid);
          }
        });
      });
  }, []);

  // Dynamic visible words in front of character
  const [visibleWords, setVisibleWords] = useState([]);

  useFrame(() => {
    if (!followEnabled || !characterRef.current || !wordData.length) {
      setVisibleWords([]);
      return;
    }

    const pos = characterRef.current.position.clone();
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(characterRef.current.quaternion);
    const frontWords = [];

    let found = 0;
    const maxWords = 50;
    const range = 3; // how far to scan in front

    for (let dz = -range; dz <= range; dz++) {
      for (let dx = -range; dx <= range; dx++) {
        const checkX = Math.round(pos.x + dx);
        const checkZ = Math.round(pos.z + dz);

        // Check direction: must be in front
        const offset = new THREE.Vector3(dx, 0, dz);
        if (offset.dot(dir) < 1.5) continue;

        if (grid[checkZ] && grid[checkZ][checkX] === 1) {
          const wallPos = new THREE.Vector3(checkX, 1.4, checkZ);
          const word = wordData[(checkX * 73819 + checkZ * 193) % wordData.length]; // hash sample
          frontWords.push({
            text: word.headword,
            level: word.CEFR,
            position: wallPos,
          });
          found++;
          if (found >= maxWords) break;
        }
      }
      if (found >= maxWords) break;
    }

    setVisibleWords(frontWords);
  });

  return followEnabled && visibleWords.length > 0 ? (
    <group ref={groupRef}>
      {visibleWords.map((word, i) => (
        <Text
          key={i}
          position={word.position.clone().add(new THREE.Vector3(0, 0.5, 0))}
          fontSize={0.35}
          color={LEVEL_COLORS[word.level] || 'white'}
          anchorX="center"
          anchorY="middle"
        >
          {word.text}
        </Text>
      ))}
    </group>
  ) : null;
}
