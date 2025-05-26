//FOR MAZE MAP FUTURE TRIAL
'use client';

import { useRef, useEffect, useState } from 'react';

export default function MiniMap({ grid, position }) {
  const canvasRef = useRef();
  const [expanded, setExpanded] = useState(false);

  const scale = expanded ? 10 : 3;
  const noiseImage = '/map-noise.png'; // Your static noise texture (like the image above)

  useEffect(() => {
    if (!grid || !position) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = grid[0].length;
    const height = grid.length;

    canvas.width = width * scale;
    canvas.height = height * scale;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw maze tiles
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        ctx.fillStyle = grid[y][x] === 1 ? '#111' : '#ccc';
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }

    // Draw player marker
    const px = Math.floor(position.x);
    const pz = Math.floor(position.z);
    ctx.fillStyle = 'red';
    ctx.fillRect(px * scale, pz * scale, scale, scale);

    // Apply noise overlay
    const img = new Image();
    img.src = noiseImage;
    img.onload = () => {
      ctx.globalAlpha = 0.15;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1.0;
    };
  }, [grid, position, expanded]);

  return (
    <div
      className="fixed top-4 right-4 z-50 cursor-pointer border border-white rounded overflow-hidden"
      onClick={() => setExpanded((prev) => !prev)}
      style={{ width: expanded ? '300px' : '120px', height: expanded ? '300px' : '120px' }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}
      />
    </div>
  );
}
