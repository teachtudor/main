'use client';
import { useState } from 'react';
import { animationList } from './animationList';

export default function RadialHUD({ onSelect }) {
  const [open, setOpen] = useState(false);

  const radius = 120;

  return (
    <div style={{ position: 'absolute', bottom: 80, right: 80 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#444',
          color: '#fff',
          fontSize: 20,
          cursor: 'pointer',
        }}
      >
        🎮
      </button>

      {open &&
        animationList.map((file, index) => {
          const angle = (index / animationList.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const name = file.replace('.fbx', '');

          return (
            <button
              key={name}
              onClick={() => {
                onSelect(name);
                setOpen(false);
              }}
              style={{
                position: 'absolute',
                left: 30 + x,
                top: 30 - y,
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                padding: '10px',
                background: '#88e',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
}
