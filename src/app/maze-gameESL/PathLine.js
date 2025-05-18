'use client';

import React, { useEffect, useState } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

export default function PathLine({ visible = true }) {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch('/maze-assets/maze_path.json')
      .then((res) => res.json())
      .then((data) => {
        const linePoints = data.map(([x, z]) => new THREE.Vector3(x, 0.1, z));
        setPoints(linePoints);
      });
  }, []);

  if (!visible || points.length === 0) return null;

  return (
    <Line
      points={points}
      color="red"
      lineWidth={5}
      dashed={true}
      dashSize={0.2}          // ✅ Length of dash
      gapSize={0.1}           // ✅ Gap between dashes
      transparent={true}
      opacity={0.8}
    />
  );
}
