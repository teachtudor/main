// utils/generateWordTexture.js
import * as THREE from 'three';

export async function generateWordTextureFromCSV(url = '/CEFR UNFETTERED.csv') {
  const res = await fetch(url);
  const text = await res.text();
  const words = Array.from(new Set(
    text.split('\n')
        .map(row => row.split(',')[0].trim())
        .filter(w => w.length > 0)
  ));

  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f5f5f5'; // Light brick background
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#222';
  ctx.font = '16px Arial';

  const cols = 20;
  const spacingX = canvas.width / cols;
  const spacingY = 24;

  words.forEach((word, i) => {
    const x = (i % cols) * spacingX + 4;
    const y = Math.floor(i / cols) * spacingY + 20;
    if (y < canvas.height) ctx.fillText(word, x, y);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}
